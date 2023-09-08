import { Router } from 'express';
import taskRoute from '../routes/task.route.js'
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

 router.use('/', taskRoute)

export default router;
