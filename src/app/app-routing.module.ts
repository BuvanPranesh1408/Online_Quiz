import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:'welcome',component:WelcomepageComponent},
  {path: 'java', component:JavaComponent},
  {path: 'angular', component:AngularComponent},
  {path: 'html', component:HtmlComponent},
  {path: 'javascript', component:JavascriptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
