import {NgModule} from '@angular/core'
import {Route, RouterModule} from '@angular/router'

import {DashboardComponent} from './DashboardComponent'
import {HeroDetailComponent} from './HeroDetailComponent'
import {HeroesComponent} from './HeroesComponent'

const routes: Route[] = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '**', redirectTo: 'dashboard'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
