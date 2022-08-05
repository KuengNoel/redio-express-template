import express from 'express';
import { users } from '../utils/users.js';

const router = express.Router();

router.get('/user/name/:id/:name/', async (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    
    try {
        await users.update(id, (user) => {
            user.name = name;
            return user;
        });

        res
        .status(200)
        .json({
            code: 200,
            message: `Successfully updated user "${id}".`
        });

        console.log(`[ Info ] Successfully updated user "${id}"`);
    } catch (error) {
        res
        .status(500)
        .json({
            code: 500,
            message: `Could no update user "${id}"`
        });

        console.log(`[ Warning ] Could not update user "${id}"`);
    }
});

router.get('/user/password/:id/:password/', async (req, res) => {
    const id = req.params.id;
    const password = req.params.password;
    
    try {
        await users.update(id, (user) => {
            user.password = password;
            return user;
        });

        res
        .status(200)
        .json({
            code: 200,
            message: `Successfully updated user "${id}".`
        });

        console.log(`[ Info ] Successfully updated user "${id}"`);
    } catch (error) {
        res
        .status(500)
        .json({
            code: 500,
            message: `Could no update user "${id}"`
        });

        console.log(`[ Warning ] Could not update user "${id}"`);
    }
});

export default router;
