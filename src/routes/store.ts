import express from 'express';
import { users } from '../utils/users.js';

const router = express.Router();

router.get('/user/:id/:name/:password', async (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    const password = req.params.password;
    
    try {
        await users.store(id, {
            name: name,
            password: password
        });

        res
        .status(200)
        .json({
            code: 200,
            message: `Successfully stored user "${id}".`
        });

        console.log(`[ Info ] Successfully stored user "${id}"`);
    } catch (error) {
        res
        .status(500)
        .json({
            code: 500,
            message: `Could no store user "${id}".`
        });

        console.log(`[ Fatal ] Something went wrong during store request`);
    }
});

export default router;
