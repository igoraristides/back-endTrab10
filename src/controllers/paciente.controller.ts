import { Request, Response } from "express";
import { connect } from "../database";

export async function getPacienteCpf(req: Request, res: Response): Promise<Response> {
  const cpf = req.body.cpf;
  console.log(cpf)
 
  const conn = await connect();
  
  const paciente = await conn.query(`Select paciente.nome_paciente, paciente.data_nasc, paciente.estado_civil, paciente.cpf, paciente.nro_casa, paciente.complemento, sexo.sexo, tipo_sanguineo.tipo_sanguineo, paciente.idEndereco from paciente, sexo, tipo_sanguineo where paciente.cpf = '${cpf}' and paciente.idSexo = sexo.id_sexo and paciente.idTipo_sanguineo = tipo_sanguineo.id_tipo_sanguineo`);
  return res.json(paciente[0]);
}

//Select paciente.nro_casa, paciente.complemento, tipo_logradouro.nome_tipo_logradouro, logradouro.nome_logradouro, bairro.nome_bairro, cidade.nome_cidade, estado.nome_estado from paciente, endereco, logradouro, tipo_logradouro, bairro, cidade, estado where paciente.idEndereco = endereco.id_endereco and endereco.cep = '"+ cep +"' and endereco.idLogra = logradouro.id_logradouro and tipo_logradouro.id_tipo_logradouro = logradouro.idTipo_logradouro and endereco.idBairro = bairro.id_bairro and endereco.idCidade = cidade.id_cidade and cidade.idEstado = estado.id_estado
