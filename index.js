class ORM{
    constructor(){
    
    }

    static criar(objeto){
        this.Array.push(objeto)
        return objeto
    }

    static atualizar(posicao,objeto){
        this.Array[posicao] = objeto

        return objeto
    } 

    static excluir(objeto){
        
        this.Array.splice(objeto,1)
       
        return objeto
    }

    static exibir(){
        
        return console.table(this.Array)
    }

}

class Pessoa extends ORM{
    constructor() {
        super()
        
    }
    
    static Array = []

    
}

class Animal extends ORM{
    constructor(){
        super()  
    }

    static Array = []
}

Pessoa.criar({ID:1,nome:'Gabriel Inácio',idade:19,profissão:'estudante'})
Pessoa.criar({ID:2,nome:'Aaron Tads',idade:27,profissão:'Tec.Segurança'})
Pessoa.criar({ID:3,nome:'LeBron James',idade:38,profissão:'Atleta'})
Pessoa.exibir()
Pessoa.excluir(0)
Pessoa.exibir()
Pessoa.atualizar(1,{ID:4,nome:'Cristiano Ronaldo',idade:38,profissão:'oMilhor'})
Pessoa.exibir()


/*
Animal.criar({ID:1,nome:'Cachorro',tipo:'Doméstico',idade:2})
Animal.criar({ID:2,nome:'Onça Pintada',tipo:'Silvestre',idade: 8})
Animal.criar({ID:3,nome:'Baleia',tipo:'Mamífero',idade:7})
Animal.exibir()
Animal.excluir(1)
Animal.exibir()
Animal.atualizar({ID:4,nome:'Jacaré',tipo:'Répetil',idade:5})
Animal.exibir()
*/

