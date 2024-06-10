//Criar a classe Heroi onde colocaremos as propriedades e metodos do heroi
class hero{
    constructor(heroNome, heroIdade, heroTipo){
      this.heroNome = heroNome
      this.heroIdade = heroIdade
      this.heroTipo = heroTipo
    }
    
    //Metodo atacar do heroi usando switch para decidir qual o tipo de ataque
    atacar (heroTipo){
      switch (this.heroTipo){
        case "mago":
          console.log(`O ${this.heroTipo} atacou usando magia`)
          break
        case "guerreiro":
          console.log(`O ${this.heroTipo} atacou usando sua espada`)
          break
        case "monge":
          console.log(`O ${this.heroTipo} atacou usando artes marciais`)
          break
        case "ninja":
          console.log(`O ${this.heroTipo} atacou usando shouriken`)
          break
      }
    }
  }
  
  //Criamos um objeto da classe heroi, no caso testando com todos os tipos possiveis
  let heroNinja = new hero("Vinicius", "26", "ninja")
  let heroMago = new hero("Vinicius", "26", "mago")
  let heroGuerreiro = new hero("Vinicius", "26", "guerreiro")
  let heroMonge = new hero("Vinicius", "26", "monge")
  
  //Chamando os metodos de todos os objetos criados
  heroNinja.atacar()
  heroMago.atacar()
  heroGuerreiro.atacar()
  heroMonge.atacar()