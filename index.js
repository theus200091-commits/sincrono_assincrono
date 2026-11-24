// Projeto com fins didáticos.
// Objetivo: estudar o funcionamento de operações síncronas e assíncronas em JavaScript.

// Array que armazena objetos representando clientes.
// Cada objeto possui um nome e uma propriedade que indica o status do atendimento.
const clientes = [
  {
    nome: "joão",
    atendimento: false,
  },
  {
    nome: "lucas",
    atendimento: false,
  },
  {
    nome: "matheus",
    atendimento: false,
  },
];

// Função responsável por listar os clientes.
// Utiliza o método forEach() para percorrer o array e estruturas condicionais
// para verificar se cada atendimento está pendente ou concluído.
// Essa operação é síncrona.
function listarClientes() {
  clientes.forEach((element) => {
    if (element.atendimento === false) {
      console.log(`O cliente ${element.nome} está com o pedido Pendente`);
    } else {
      console.log(`O cliente ${element.nome} está com o pedido PRONTO`);
    }
  });
}

// Função responsável por localizar um cliente e iniciar seu atendimento.
// Utiliza o método find() para procurar um cliente pelo nome.
// A busca e a verificação do resultado são operações síncronas.
function realizarAtendimento(cliente) {
  const clienteEncontrado = clientes.find(
    (element) => element.nome === cliente
  );

  if (clienteEncontrado === undefined) {
    console.log(`Cliente não encontrado!`);
  } else {
    console.log(`Cliente encontrado, seu nome é ${clienteEncontrado.nome}!`);

    // setTimeout() agenda a execução de uma função para um momento posterior.
    // Neste projeto, ele simula o tempo necessário para concluir um atendimento.
    // Enquanto o temporizador aguarda, o restante do código continua executando.
    setTimeout(() => {
      // A alteração do status acontece somente quando a callback é executada.
      clienteEncontrado.atendimento = true;

      console.log("Atendimento concluído");

      // Atualiza a listagem para mostrar o status atual dos clientes.
      listarClientes();
    }, 3000);
  }
}

// Exibe a situação inicial dos atendimentos.
listarClientes();

// Localiza o cliente e agenda seu atendimento.
realizarAtendimento("joão");