import express from 'express';
import { users } from '../utils/users.js';

const router = express.Router();

router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        const user = await users.load(id);

        res
        .status(200)
        .json({
            code: 200,
            message: user
        });

        console.log(`[ Info ] Successfully load user "${id}"`);
    } catch (error) {
        res
        .status(404)
        .json({
            code: 404,
            message: `Could not load user ${id}.`
        });

        console.log(`[ Warning ] Could not load user "${id}"`);
    }
});

export default router;
