import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelModule } from './painel/painel.module';
import { FotoModule } from './foto/foto.module';
import 'rxjs/add/operator/map';

@NgModule ({
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing 
    ],
    declarations: [ 
        AppComponent, 
        CadastroComponent, 
        ListagemComponent 
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}