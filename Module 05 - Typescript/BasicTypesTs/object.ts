const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
  chaveC: 'Valor C',
};

objetoA.chaveA = 'Outro valor';
console.log(objetoA);

const objetoB: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // Pode ser qualquer coisa [key: string]: string | number | boolean | object | symbol | any[
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
  chaveC: 'Valor C',
};
objetoB.chaveA = 'Outro valor';
objetoB.chaveD = 10; // Não da erro pois eu defini que pode ser qualquer coisa, que seja uma string.
console.log(objetoB);

