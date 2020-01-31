import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroComponent } from './intro/intro.component';
import { ResumeComponent } from './resume/resume.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ResumeListComponent } from './resume-list/resume-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    IntroComponent,
    ResumeComponent,
    TerminalComponent,
    ResumeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
