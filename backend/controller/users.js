//loading envirement to prevent exposing credentials for mongodb connection string
const dotenv = require("dotenv");
dotenv.config();
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@booc.oduvk.mongodb.net/?retryWrites=true&w=majority&appName=Booc `