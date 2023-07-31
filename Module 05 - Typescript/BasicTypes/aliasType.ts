type Idade = number;
type Pessoa = {
  name: string;
  age: Idade;
  adult?: boolean;
  corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul"; //Union Type
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto"; //Union Type
type CorPreferida = CorRGB | CorCMYK; //Union Type

const pessoa: Pessoa = {
  name: "João",
  age: 18,
  adult: true,
  corPreferida: "Vermelho",
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  // o spread operator (...) é usado para copiar o objeto pessoa e alterar apenas o atributo corPreferida
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, "Azul"));