import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //Faz com que busque o arquivo do templateUrl na mesma pasta
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

}