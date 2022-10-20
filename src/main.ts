import express, { Request, Response, NextFunction } from "express";
import { DB_connection } from "./dbconnection";
import { router } from "./routes";
require('dotenv').config()

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error."
    })
})

DB_connection('mongoDB')

app.listen(process.env.PORT || 3000, () => console.log('Server is running!!!!'))