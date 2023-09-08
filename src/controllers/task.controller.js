import moment from 'moment'

export const getTask = async(req, res, next) => {
    try {
    const slackName = req.query.slack_name;
     const track = req.query.track;

    const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ssZ');

  const githubFileUrl = `https://github.com/nwachee/HNGx/blob/main/src/app.js`;
  const githubRepoUrl = `https://github.com/nwachee/HNGx.git`;

  const currentDay = moment().format('dddd');

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };
      res.status(201).send(response);
    } catch (error) {
        next(error)
    }
}