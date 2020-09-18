const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

expect(cupom.imprime_dados_loja()).toBe(
`
, 0 
 -  - 
CEP: Tel 

CNPJ: 
IE: 
`);
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Loja CRVG";
  cupom.dados.logradouro = "R. Gen. Almério de Moura";
  cupom.dados.numero = 131;
  cupom.dados.complemento = "Estádio";
  cupom.dados.bairro = "São Januário";
  cupom.dados.municipio = "Rio de Janeiro";
  cupom.dados.estado = "RJ";
  cupom.dados.cep = "20921-060";
  cupom.dados.telefone = "(21) 91898-1927";
  cupom.dados.observacao = "Obs 1";
  cupom.dados.cnpj = "12.111.333/12133-12";
  cupom.dados.inscricao_estadual = "123.456.789.000";

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(
    `Loja CRVG
R. Gen. Almério de Moura, 131 Estádio
São Januário - Rio de Janeiro - RJ
CEP:20921-060 Tel (21) 91898-1927
Obs 1
CNPJ: 12.111.333/12133-12
IE: 123.456.789.000
`);
});
