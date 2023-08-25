import cors from "cors";
import express, { Router, json, static as serveStatic } from "express";
import { UploadController } from "./modules/upload/controller";

export class Server {
  private app: ReturnType<typeof express>;
  private router: Router;

  constructor() {
    this.app = express();
    this.router = Router();
    this.applyMiddleware();
    this.initialRoutes();
    this.app.use("/", this.router);
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`App listening at port ${port}`);
    });
  }

  private initialRoutes() {
    const uploadController = new UploadController(this.router);
    uploadController.createUploadRoute();
  }

  private applyMiddleware() {
    this.app.use(cors({ credentials: true, origin: "*" }));
    this.app.use(json({ limit: "100Mb" }));
    this.app.use(serveStatic("uploaded"));
  }
}

