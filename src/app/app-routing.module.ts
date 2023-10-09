import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './routes/home/home.component';
import { CompletedComponent } from './routes/completed/completed.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
