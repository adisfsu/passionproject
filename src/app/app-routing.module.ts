import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectureBlogComponentComponent } from './architecture-blog-component/architecture-blog-component.component';
import { PersonalComponent } from './personal/personal.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'architecture',
    component: ArchitectureBlogComponentComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
