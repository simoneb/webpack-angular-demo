import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {HeroesComponent} from './HeroesComponent'
import {HeroDetailComponent} from './HeroDetailComponent'
import {DashboardComponent} from './DashboardComponent'

const routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
