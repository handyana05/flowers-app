import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerDetailsComponent } from './pages/flower-details/flower-details.component';
import { FlowersListComponent } from './pages/flowers-list/flowers-list.component';
import { FlowerDetailsResolver } from './resolvers/flower-details.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/flowers', pathMatch: 'full' },
  { path: 'flowers', component: FlowersListComponent },
  { path: 'details/:id', component: FlowerDetailsComponent, resolve: { detail: FlowerDetailsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
