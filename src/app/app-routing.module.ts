import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MoviepageComponent } from './component/moviepage/moviepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'home/:movie',component:MoviepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
