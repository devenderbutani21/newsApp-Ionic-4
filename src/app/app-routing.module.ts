import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgnewsModule, NewsApiKeyConfig } from 'angular-news-api';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

const newsApiConfig : NewsApiKeyConfig = {
  key: 'b0824c7265ba4715ae3c0c24868bc923'
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    NgnewsModule.forRoot(newsApiConfig)    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
