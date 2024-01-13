import { Routes } from '@angular/router';
import { FirstComponent } from './FirstComponent/first.component';
import { SecondComponent } from './SecondComponent/second.component';
import { PageNotFoundComponent } from './PageNotFound/pnf.component';
import { HomeComponent } from './HomePage/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '1stpage', component: FirstComponent },
    { path: '2ndpage', component: SecondComponent },
    { path: '**', component: PageNotFoundComponent }
];
