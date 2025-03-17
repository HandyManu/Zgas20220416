/*export const config = {
    PORT:4000,
    MONGO_URI:"mongodb://127.0.0.1:27017/zgasdb", 
};*/

import dotenv from "dotenv";
dotenv.config();
export const config = {
    db:{
        URI:process.env.DB_URI
    },
    server:{
        port:process.env.PORT
    }
}