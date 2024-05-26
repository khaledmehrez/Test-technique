import express, { Request, Response } from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('HEALTH CHECK');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});