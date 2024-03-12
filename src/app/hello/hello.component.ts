import {Component} from '@angular/core'


// Exemplo de criação de uma variavel recebendo nome, e exemplo da criação de um Array com varios nomes
@Component({
    selector: 'hello',
     templateUrl: './hello.component.html'
    })
export class HelloComponent{
    nome: string;
    clientes: Cliente[];

    constructor(){
        this.nome = 'Jon';
        let fulano = new Cliente('Fulano', 30)
        let cicrano = new Cliente('Cicrano', 25);
        let outro = new Cliente('Outro', 35);
        this.clientes = [fulano, cicrano, outro]; 
    }

}

class Cliente{

    constructor(public nome: string,
    public idade: number){}
    
}