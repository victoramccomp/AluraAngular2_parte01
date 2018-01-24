import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //Faz com que busque o arquivo do templateUrl na mesma pasta
    selector: 'app',
    templateUrl: './app.component.html'
})

export class AppComponent {

    fotos: Object[] = [];

    // constructor(@Inject(Http) http)
    // declaração com injeção (precisa colocar o import do Inject)
    // abaixo, com a tipagem do TS 
    constructor(http : Http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => console.log(erro)
        );
    }

}