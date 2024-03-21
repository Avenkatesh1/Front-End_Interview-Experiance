import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './Component/contact/contact.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { CategoryComponent } from './Component/category/category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
},
{
    path:'home',
    component:HomeComponent,
},
{
  path:'Contact',
  component:ContactComponent
},
{
  path:'Portfolio',
  component:PortfolioComponent
},
{
  path:'Category',
  component:CategoryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
