import { configDotenv } from "dotenv";
import express, {Request, Response} from 'express';
// import {connectDatabases} from '../src/utils/connectDatabases';
import { connectDatabases } from "./utils/connectDatabases";
import { userRouter } from "./routes/user.route";
import { menuRouter } from "./routes/menu.route";
import { orderRouter } from "./routes/order.route";
import cookieParser from 'cookie-parser';
import cors from 'cors';

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({extended : false}));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], 
    credentials: true 
  }));

app.get("/", (req: Request , res: Response) => {
    res.status(200).send("healthy server"); 
})

app.use("/api/v1", userRouter);

app.use("/api/v1", menuRouter);

app.use("/api/v1", orderRouter);


connectDatabases().then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    })
}).catch((err) => {
    console.log("DB connection failed : ", err.message)
})
