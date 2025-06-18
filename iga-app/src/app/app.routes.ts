import { Routes } from '@angular/router';
import {Accueil} from './accueil/accueil';
import {Produits} from './produits/produits';

export const routes: Routes = [
  {path: "accueil", component: Accueil},
  {path: "produits", component: Produits}
  ];
