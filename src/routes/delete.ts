import express from 'express';
import { users } from '../utils/users.js';

const router = express.Router();

router.get('/user/:id/', async (req, res) => {
    const id = req.params.id;
    
    try {
        await users.delete(id);

        res
        .status(200)
        .json({
            code: 200,
            message: `Successfully deleted user "${id}".`
        });

        console.log(`[ Info ] Successfully deleted user "${id}"`);
    } catch (error) {
        res
        .status(500)
        .json({
            code: 500,
            message: `Could no delete user "${id}".`
        });

        console.log(`[ Warning ] Could no delete user "${id}"`);
    }
});

export default router;
