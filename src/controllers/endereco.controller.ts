import { Request, Response } from "express";
import { connect } from "../database";

export async function getListaEnderecos(
  req: Request,
  res: Response
): Promise<Response> {

  const cep = req.body.cep;
  console.log(cep)
  const conn = await connect();
  const endereco = await conn.query(`Select paciente.nro_casa, paciente.complemento, tipo_logradouro.nome_tipo_logradouro, logradouro.nome_logradouro, bairro.nome_bairro, cidade.nome_cidade, estado.nome_estado from paciente, endereco, logradouro, tipo_logradouro, bairro, cidade, estado where paciente.idEndereco = endereco.id_endereco and endereco.cep = '${cep}' and endereco.idLogra = logradouro.id_logradouro and tipo_logradouro.id_tipo_logradouro = logradouro.idTipo_logradouro and endereco.idBairro = bairro.id_bairro and endereco.idCidade = cidade.id_cidade and cidade.idEstado = estado.id_estado`);
  return res.json(endereco[0]);
}

export async function getEnderecoId(
    req: Request,
    res: Response
  ): Promise<Response> {
  
    const id = req.body.id;
    console.log(id)
    const conn = await connect();
    const endereco = await conn.query(`Select tipo_logradouro.nome_tipo_logradouro, logradouro.nome_logradouro, bairro.nome_bairro, cidade.nome_cidade, estado.nome_estado from endereco, logradouro, tipo_logradouro, bairro, cidade, estado where endereco.id_endereco = '${id}' and endereco.idLogra = logradouro.id_logradouro and tipo_logradouro.id_tipo_logradouro = logradouro.idTipo_logradouro and endereco.idBairro = bairro.id_bairro and endereco.idCidade = cidade.id_cidade and cidade.idEstado = estado.id_estado`);
    return res.json(endereco[0]);
  }

  export async function getCidadeId(
    req: Request,
    res: Response
  ): Promise<Response> {
  
    const id = req.body.id;
    console.log(id)
    const conn = await connect();
    const endereco = await conn.query(`Select cidade.nome_cidade, estado.nome_estado, estado.sigla_estado, pais.nome_pais from cidade, estado, pais where cidade.id_cidade ='${id}' and cidade.idEstado = estado.id_estado and estado.idPais = pais.id_pais`);
    return res.json(endereco[0]);
  }
