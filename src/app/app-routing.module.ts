import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcessoNegadoComponent } from './navegacao/acesso-negado/acesso-negado.component';

import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },


{
  path: 'pagamentos',
  loadChildren: () => import('./pagamento/pagamento.module')
    .then(m => m.PagamentoModule)
},

{
  path: 'produtos',
  loadChildren: () => import('./produto/produto.module')
    .then(m => m.ProdutoModule)
},

  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
