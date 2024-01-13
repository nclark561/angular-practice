import { Routes } from '@angular/router';
import { FirstComponent } from './Pages/FirstComponent/first.component';
import { SecondComponent } from './Pages/SecondComponent/second.component';
import { PageNotFoundComponent } from './Pages/PageNotFound/pnf.component';
import { HomeComponent } from './Pages/HomePage/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '1stpage', component: FirstComponent },
    { path: '2ndpage', component: SecondComponent },
    { path: '**', component: PageNotFoundComponent }
];
