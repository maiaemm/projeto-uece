const Pessoa = {
  detalhes: {
    nome: 'Bruno',
    idade: 13,
  },
  localizacao: {
    cidade: 'Fortaleza',
    bairro: 'Cheiro do queijo',
  }
}

const { bairro } = Pessoa.localizacao
// const {localizacao: { bairro } } = Pessoa
const { detalhes: { idade } } = Pessoa

console.log(idade)