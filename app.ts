import dotenv from "dotenv";
import Server from "./src/server";

//Configurar .env
dotenv.config();

const server = new Server();
server.listen();
