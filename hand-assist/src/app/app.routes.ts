import {Routes} from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
export const rootRouterConfig: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'usuario', component: CadastroComponent},
    {path: 'time', component: CadastroComponent},
];

