import { configDotenv } from "dotenv";
import express, {Request, Response} from 'express';


configDotenv();

const app = express();
const PORT = process.env.PORT || 5000

app.get("/", (req: Request , res: Response) => {
    res.status(200).send("healthy server"); 
})


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})