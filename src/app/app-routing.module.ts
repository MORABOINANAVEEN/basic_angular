import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { NodeComponent } from './node/node.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user-profile/:username',
    component:UserProfileComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'technologies',
    component:TechnologiesComponent,
    children:[
      {
        path:'java',
        component:JavaComponent
      },
      {
        path:'python',
        component:PythonComponent
      },
      {
        path:'node',
        component:NodeComponent
      },
      {
        path:'',
        redirectTo:"java",
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:"**",
    component:NotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
