import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {CreateaccountPage} from '../pages/createaccount/createaccount';
import { SlideIntroPage } from '../pages/slide-intro/slide-intro';
import { LoginPage } from '../pages/login/login';
import { ForgotpassowrdPage } from '../pages/forgotpassowrd/forgotpassowrd';
import { StorageProvider } from '../providers/storage/storage';
import { UserLoginService } from '../providers/userLogin.service';
import { CognitoUtil, RegistrationUser } from '../providers/cognito.service';
import { AwsUtil } from '../providers/aws.service';
import { UserParametersService } from '../providers/userParameters.service';
import { EventsService } from '../providers/events.service';
import { UserRegistrationService } from '../providers/userRegistration.service';
import { ConfirmregistrationPage } from '../pages/confirmregistration/confirmregistration';

// Declared all Modules included in app ...
@NgModule({
  declarations: [
    MyApp,
    CreateaccountPage,
    SlideIntroPage,
    LoginPage,
    ForgotpassowrdPage,ConfirmregistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  
  // Entry components ...
  entryComponents: [
    MyApp,
    CreateaccountPage,
    SlideIntroPage,
    LoginPage,
    ForgotpassowrdPage,ConfirmregistrationPage
  ],
  //provideres used in app
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    
    CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    EventsService,
    RegistrationUser
  ]
})
export class AppModule {}
