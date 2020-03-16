import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayercardComponent } from './components/playercard/playercard.component';
import { ResulttableComponent } from './components/resulttable/resulttable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponent,
    PlayercardComponent,
    ResulttableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
