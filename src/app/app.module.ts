import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { NodeComponent } from './node/node.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SimplePipe } from './simple.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TechnologiesComponent,
    HeaderComponent,
    FooterComponent,
    JavaComponent,
    PythonComponent,
    NodeComponent,
    NotfoundComponent,
    UserProfileComponent,
    SimplePipe,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
