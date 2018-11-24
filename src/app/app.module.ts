import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule, HomeRoutingComponents } from './home/home-routing.module';
import { PagesRoutingModule, PagesRoutingComponents } from './pages/pages-routing.module';
import { SettingRoutingModule, SettingRoutingComponents } from './setting/setting-routing.module';
import { SimulationRoutingModule, SimulationRoutingComponents } from './simulation/simulation-routing.module';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { Menu1Component } from './pages/menu1/menu1.component';
import { Menu2Component } from './pages/menu2/menu2.component';
import { Menu3Component } from './pages/menu3/menu3.component';
import { Menu5Component } from './pages/menu5/menu5.component';
import { AgingComponent } from './pages/menu1/aging/aging.component';
import { SetWeightComponent } from './pages/menu1/set-weight/set-weight.component';
import { ImportD1Component } from './pages/menu2/import-d1/import-d1.component';
import { ImportD2Component } from './pages/menu2/import-d2/import-d2.component';
import { D1Type1Component } from './pages/menu2/import-d1/d1-type1/d1-type1.component';
import { D1Type2Component } from './pages/menu2/import-d1/d1-type2/d1-type2.component';
import { OrderD1Component } from './pages/menu3/order-d1/order-d1.component';
import { OrderD2Component } from './pages/menu3/order-d2/order-d2.component';
import { Report1Component } from './pages/menu5/report1/report1.component';
import { Report2Component } from './pages/menu5/report2/report2.component';
import { Report3Component } from './pages/menu5/report3/report3.component';
import { Report4Component } from './pages/menu5/report4/report4.component';
import { Report1D1Component } from './pages/menu5/report1/report1-d1/report1-d1.component';
import { Report1D2Component } from './pages/menu5/report1/report1-d2/report1-d2.component';
import { Report2D1Component } from './pages/menu5/report2/report2-d1/report2-d1.component';
import { Report2D2Component } from './pages/menu5/report2/report2-d2/report2-d2.component';
import { Menu4Component } from './pages/menu4/menu4.component';
import { StoreT1Component } from './pages/menu4/store-t1/store-t1.component';
import { StoreT2Component } from './pages/menu4/store-t2/store-t2.component';
import { StoreT3Component } from './pages/menu4/store-t3/store-t3.component';
import { StoreT4Component } from './pages/menu4/store-t4/store-t4.component';
import { SettingComponent } from './setting/setting.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { EditProfileComponent } from './setting/edit-profile/edit-profile.component';
import { GlobalService } from './global.service';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { OrderD1Type1Component } from './pages/menu3/order-d1/order-d1-type1/order-d1-type1.component';
import { OrderD1Type2Component } from './pages/menu3/order-d1/order-d1-type2/order-d1-type2.component';
import { OrderD1Type3Component } from './pages/menu3/order-d1/order-d1-type3/order-d1-type3.component';
import { OrderD2Type1Component } from './pages/menu3/order-d2/order-d2-type1/order-d2-type1.component';
import { OrderD2Type2Component } from './pages/menu3/order-d2/order-d2-type2/order-d2-type2.component';
import { OrderD2Type3Component } from './pages/menu3/order-d2/order-d2-type3/order-d2-type3.component';
import { ApiService } from './api.service';
import { D2Type1Component } from './pages/menu2/import-d2/d2-type1/d2-type1.component';
import { D2Type2Component } from './pages/menu2/import-d2/d2-type2/d2-type2.component';
import { D2Type3Component } from './pages/menu2/import-d2/d2-type3/d2-type3.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { SimulationComponent } from './simulation/simulation.component';
import { Department1Component } from './simulation/department1/department1.component';
import { Department2Component } from './simulation/department2/department2.component';
import { Department3Component } from './simulation/department3/department3.component';
import { Menu6Component } from './pages/menu6/menu6.component';
import { NotificationT1Component } from './pages/menu6/notification-t1/notification-t1.component';
import { NotificationT2Component } from './pages/menu6/notification-t2/notification-t2.component';
import { NotificationT3Component } from './pages/menu6/notification-t3/notification-t3.component';
import { NotificationT4Component } from './pages/menu6/notification-t4/notification-t4.component';
import { OrderD2Type4Component } from './pages/menu3/order-d2/order-d2-type4/order-d2-type4.component';
import { HistoryAgingComponent } from './pages/menu1/history-aging/history-aging.component';
import { AdminOnlyComponent } from './setting/admin-only/admin-only.component';
import { D1Type3Component } from './pages/menu2/import-d1/d1-type3/d1-type3.component';
import { D1Type4Component } from './pages/menu2/import-d1/d1-type4/d1-type4.component';
import { D1Type5Component } from './pages/menu2/import-d1/d1-type5/d1-type5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRoutingComponents,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    PagesComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu5Component,
    PagesRoutingComponents,
    AgingComponent,
    SetWeightComponent,
    ImportD1Component,
    ImportD2Component,
    D1Type1Component,
    D1Type2Component,
    OrderD1Component,
    OrderD2Component,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component,
    Report1D1Component,
    Report1D2Component,
    Report2D1Component,
    Report2D2Component,
    Menu4Component,
    StoreT1Component,
    StoreT2Component,
    StoreT3Component,
    StoreT4Component,
    SettingComponent,
    ForgotPasswordComponent,
    EditProfileComponent,
    SettingRoutingComponents,
    OrderD1Type1Component,
    OrderD1Type2Component,
    OrderD1Type3Component,
    OrderD2Type1Component,
    OrderD2Type2Component,
    OrderD2Type3Component,
    D2Type1Component,
    D2Type2Component,
    D2Type3Component,
    ChangePasswordComponent,
    SimulationComponent,
    Department1Component,
    Department2Component,
    Department3Component,
    SimulationRoutingComponents,
    Menu6Component,
    NotificationT1Component,
    NotificationT2Component,
    NotificationT3Component,
    NotificationT4Component,
    OrderD2Type4Component,
    HistoryAgingComponent,
    AdminOnlyComponent,
    D1Type3Component,
    D1Type4Component,
    D1Type5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeRoutingModule,
    PagesRoutingModule,
    SettingRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SimulationRoutingModule
  ],
  providers: [
    GlobalService,
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
