import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ModalCallComponents } from './modal-call/modal-call.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CallComponent } from './call/call.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { CallService } from './call.service';
import { AuthentificationInterceptor } from './helper/authentification.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ModalCallComponents,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CallComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    MatSnackBarModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [
    CallService,
    AuthentificationInterceptor
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
