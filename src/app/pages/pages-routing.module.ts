import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { Menu6Component } from './menu6/menu6.component';
import { AgingComponent } from './menu1/aging/aging.component';
import { SetWeightComponent } from './menu1/set-weight/set-weight.component';
// import { ImportD1Component } from './menu2/import-d1/import-d1.component';
import { ImportD2Component } from './menu2/import-d2/import-d2.component';
import { D1Type1Component } from './menu2/import-d1/d1-type1/d1-type1.component';
import { D1Type2Component } from './menu2/import-d1/d1-type2/d1-type2.component';
// import { Report1Component } from './menu5/report1/report1.component';
// import { Report2Component } from './menu5/report2/report2.component';
import { Report3Component } from './menu5/report3/report3.component';
import { Report4Component } from './menu5/report4/report4.component';
import { Report1D1Component } from './menu5/report1/report1-d1/report1-d1.component';
import { Report1D2Component } from './menu5/report1/report1-d2/report1-d2.component';
import { Report2D1Component } from './menu5/report2/report2-d1/report2-d1.component';
import { Report2D2Component } from './menu5/report2/report2-d2/report2-d2.component';
import { OrderD1Component } from './menu3/order-d1/order-d1.component';
import { OrderD2Component } from './menu3/order-d2/order-d2.component';
import { StoreT1Component } from './menu4/store-t1/store-t1.component';
import { StoreT2Component } from './menu4/store-t2/store-t2.component';
import { StoreT3Component } from './menu4/store-t3/store-t3.component';
import { StoreT4Component } from './menu4/store-t4/store-t4.component';
import { OrderD1Type1Component } from './menu3/order-d1/order-d1-type1/order-d1-type1.component';
import { OrderD1Type2Component } from './menu3/order-d1/order-d1-type2/order-d1-type2.component';
import { OrderD1Type3Component } from './menu3/order-d1/order-d1-type3/order-d1-type3.component';
import { OrderD2Type1Component } from './menu3/order-d2/order-d2-type1/order-d2-type1.component';
import { OrderD2Type2Component } from './menu3/order-d2/order-d2-type2/order-d2-type2.component';
import { OrderD2Type3Component } from './menu3/order-d2/order-d2-type3/order-d2-type3.component';
import { OrderD2Type4Component } from './menu3/order-d2/order-d2-type4/order-d2-type4.component';
import { D2Type1Component } from './menu2/import-d2/d2-type1/d2-type1.component';
import { D2Type2Component } from './menu2/import-d2/d2-type2/d2-type2.component';
import { D2Type3Component } from './menu2/import-d2/d2-type3/d2-type3.component';
import { NotificationT1Component } from './menu6/notification-t1/notification-t1.component';
import { NotificationT2Component } from './menu6/notification-t2/notification-t2.component';
import { NotificationT3Component } from './menu6/notification-t3/notification-t3.component';
import { NotificationT4Component } from './menu6/notification-t4/notification-t4.component';
import { HistoryAgingComponent } from './menu1/history-aging/history-aging.component';

const router: Routes = [
  /* เมนู 1 */
  { path: 'menu1/aging', component: AgingComponent},
  { path: 'menu1/set-weight', component: SetWeightComponent},
  { path: 'menu1/history-aging', component: HistoryAgingComponent},
  /* เมนู 2 */
  { path: 'menu2/import-d1', component: D1Type1Component },
  { path: 'menu2/d1-type1', component: D1Type1Component },
  { path: 'menu2/d1-type2', component: D1Type2Component },
  { path: 'menu2/import-d2', component: ImportD2Component },
  { path: 'menu2/d2-type1', component: D2Type1Component },
  { path: 'menu2/d2-type2', component: D2Type2Component },
  { path: 'menu2/d2-type3', component: D2Type3Component },
  /* เมนู 3 */
  { path: 'menu3/order-d1', component: OrderD1Component },
  { path: 'menu3/order-d1-type1', component: OrderD1Type1Component },
  { path: 'menu3/order-d1-type2', component: OrderD1Type2Component },
  { path: 'menu3/order-d1-type3', component: OrderD1Type3Component },
  { path: 'menu3/order-d2', component: OrderD2Component },
  { path: 'menu3/order-d2-type1', component: OrderD2Type1Component },
  { path: 'menu3/order-d2-type2', component: OrderD2Type2Component },
  { path: 'menu3/order-d2-type3', component: OrderD2Type3Component },
  { path: 'menu3/order-d2-type4', component: OrderD2Type4Component },
  /* เมนู 4 */
  { path: 'menu4/store-t1', component: StoreT1Component },
  { path: 'menu4/store-t2', component: StoreT2Component },
  { path: 'menu4/store-t3', component: StoreT3Component },
  { path: 'menu4/store-t4', component: StoreT4Component },
  /* เมนู 5 */
  { path: 'menu5/report1-d1', component: Report1D1Component },
  { path: 'menu5/report1-d2', component: Report1D2Component },
  { path: 'menu5/report2-d1', component: Report2D1Component },
  { path: 'menu5/report2-d2', component: Report2D2Component },
  { path: 'menu5/report3', component: Report3Component },
  { path: 'menu5/report4', component: Report4Component },
  /* เมนู 6 */
  { path: 'menu6/notification-t1', component: NotificationT1Component },
  { path: 'menu6/notification-t2', component: NotificationT2Component },
  { path: 'menu6/notification-t3', component: NotificationT3Component },
  { path: 'menu6/notification-t4', component: NotificationT4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
export const PagesRoutingComponents = [Menu1Component, Menu2Component, Menu3Component, Menu4Component,
  Menu5Component, Menu6Component ];
