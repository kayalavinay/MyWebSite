import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path:'photos',component:PhotoComponent},
  {path:'aboutMe',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'contact',component:BlankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
