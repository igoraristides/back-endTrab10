import { Router } from "express";

const router = Router();

import { getListaEnderecos } from "../controllers/endereco.controller";
import { getEnderecoId } from "../controllers/endereco.controller";
import { getCidadeId } from "../controllers/endereco.controller";

router.route("/").post(getEnderecoId);
router.route("/lista").post(getListaEnderecos);
router.route("/cidade").post(getCidadeId);


export default router;