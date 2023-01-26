import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response) => {
  return res.json({ name: "Matheus Gonçalves Rocha" });
});

export { router };
