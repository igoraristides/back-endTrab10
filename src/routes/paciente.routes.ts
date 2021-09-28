import { Router } from "express";

const router = Router();

import { getPacienteCpf } from "../controllers/paciente.controller";

router.route("/").post(getPacienteCpf);

export default router;
