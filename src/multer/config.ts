import crypto from "crypto";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploaded"),
  filename: (req, file, cb) => {
    const name = crypto.randomUUID() + file.originalname;
    const files: string[] = req.body.files || [];
    files.push(name);
    req.body = { ...req.body, files };
    cb(null, name);
  },
});

export const multerConfig = multer({ storage });

