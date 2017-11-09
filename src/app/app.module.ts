import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from "@angular/common/http"
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FuncionariosService} from './funcionarios.service';
import { ListaDeFuncionariosComponent } from './lista-de-funcionarios/lista-de-funcionarios.component';
@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ListaDeFuncionariosComponent,
        
    ],
    providers: [ FuncionariosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
