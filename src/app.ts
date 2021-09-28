import express, { Application } from "express";
import morgan from "morgan";

//Rotas:

import PacienteRoutes from "./routes/paciente.routes";
import EnderecoRoutes from "./routes/endereco.routes";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.setting();
    this.middlewares();
    this.routes();
  }

  setting() {
    this.app.set("port", this.port || process.env.PORT || 3333);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json())
  }

  routes() {
    this.app.use("/pacientes", PacienteRoutes);
    this.app.use("/endereco", EnderecoRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on Port", this.app.get("port"));
  }
}
