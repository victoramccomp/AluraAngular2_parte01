import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    
    fotos: Object[] = [];

    // constructor(@Inject(Http) http)
    // declaração com injeção (precisa colocar o import do Inject)
    // abaixo, com a tipagem do TS 
    constructor(http : Http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro)
        );
    }

}