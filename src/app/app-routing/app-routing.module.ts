import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../page/main-page/main-page.component';
import {ConnexionPageComponent} from '../page/connexion-page/connexion-page.component';
import {ProfilePageComponent} from '../page/profile-page/profile-page.component';
import {GamePageComponent} from '../page/game-page/game-page.component';
import {WipPageComponent} from '../page/wip-page/wip-page.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent },
  {path: 'connexion', component: ConnexionPageComponent },
  {path: 'profile', canActivate: [AuthGuard] , component: ProfilePageComponent },
  {path: 'wip', component: WipPageComponent},
  {path: 'game/:id', component: GamePageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
