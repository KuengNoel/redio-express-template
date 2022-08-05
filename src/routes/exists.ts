import express from 'express';
import { users } from '../utils/users.js';

const router = express.Router();

router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        const exists = await users.exists(id);

        res
        .status(200)
        .json({
            code: 200,
            message: exists
        });

        console.log(`[ Info ] It's "${exists}" that user "${id}" exists`);
    } catch (error) {
        res
        .status(500)
        .json({
            code: 500,
            message: `Something went wrong.`
        });

        console.log(`[ Fatal ] Something went wrong during exists request`);
    }
});

export default router;
