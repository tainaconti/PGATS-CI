export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'caminhadas diárias',
    grande: 'exercícios ao ar livre'
  };
  return atividades[porte] || 'atividade não definida';
}

export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}