import { Router } from "express";
import { multerConfig } from "../../multer";

export class UploadController {
  constructor(private router: Router) {}

  createUploadRoute() {
    this.router.post(
      "/upload",
      multerConfig.fields([{ name: "files", maxCount: 10 }]),
      (req, res) => {
        console.log(req.body);
        res.json({
          uploadedUrl: req.body.files.map(
            (filename: string) => `http://localhost:3000/${filename}`
          ),
        });
      }
    );
  }
}

