import express, { Request, Response } from 'express';
import {cleanEnv} from "envalid";
import {envValidation} from "../env.validation";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const env = cleanEnv(process.env, envValidation);
const port = env.PORT|| 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('HEALTH CHECK');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
