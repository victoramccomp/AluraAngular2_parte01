import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: string) {
        
        console.log(fotos);
        return fotos.filter(foto => foto.titulo ? foto.titulo.toLowerCase().includes(digitado.toLowerCase()) : foto);
    }
}