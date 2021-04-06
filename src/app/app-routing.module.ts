import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { StockComponent } from './stock/stock.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bill', component: BillComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'stock', component: StockComponent },
  { path: 'account', component: AccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
