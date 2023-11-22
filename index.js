class ORM {
    constructor() {}
  
    static Array = [];
  
    static criar(objeto) {
      this.Array.push(objeto);
      return objeto;
    }
  
    static atualizar(posicao, objeto) {

        try {
            if (posicao >= this.Array.length) {
              throw new Error("ERROR[PARAMETRO]");
            }
          } catch (erro) {
            console.error("A posição passada no parâmetro é inexistente");
            console.error("Passe um valor que esteja coerente com a quantidade de objetos no vetor")
            throw erro;
          }
      
  
      this.Array[posicao] = objeto;
      return objeto;
    }
  
    static excluir(posicao) {
      this.Array.splice(posicao, 1);
      return this.Array;
    }
  
    static exibir() {
      console.table(this.Array);
    }
  }
  
  class Pessoa extends ORM {
    constructor() {
      super();
    }
  }
  
  class Animal extends ORM {
    constructor() {
      super();
    }
  }
  
  Pessoa.criar({ ID: 1, nome: "Gabriel Inácio", idade: 19, profissão: "estudante" });
  Pessoa.criar({ ID: 2, nome: "Aaron Tads", idade: 27, profissão: "Tec.Segurança" });
  Pessoa.criar({ ID: 3, nome: "LeBron James", idade: 38, profissão: "Atleta" });
  Pessoa.exibir();
  Pessoa.excluir(0);
  Pessoa.exibir();
  Pessoa.atualizar(1, { ID: 4, nome: "Cristiano Ronaldo", idade: 38, profissão: "oMelhor" });
  Pessoa.exibir();
  