import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id, //Faz com que busque o arquivo do templateUrl na mesma pasta
    selector: 'foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent {

    @Input() titulo;
    @Input() url;
}