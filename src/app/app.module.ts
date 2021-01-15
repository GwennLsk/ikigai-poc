import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { GamePageComponent } from './page/game-page/game-page.component';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { ConnexionPageComponent } from './page/connexion-page/connexion-page.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MainPageComponent} from './page/main-page/main-page.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { WipPageComponent } from './page/wip-page/wip-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMememoryDataService} from './api/in-mememory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {ReactiveFormsModule} from '@angular/forms';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamePageComponent,
    ProfilePageComponent,
    ConnexionPageComponent,
    FooterComponent,
    GameListComponent,
    GameCardComponent,
    MainPageComponent,
    WipPageComponent,
    SpotlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMememoryDataService, {dataEncapsulation: false}
    ),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
