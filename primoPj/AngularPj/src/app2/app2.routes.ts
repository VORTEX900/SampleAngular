import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { authChildGuard, authGuard } from './auth/auth-guard';

export const routes: Routes = [{path:'', pathMatch:'full', redirectTo:'/home'},
        {path:'home', loadComponent: () => import('./componenti/home/home').then(m => m.Home)},
        {path:'about', loadComponent: () => import('./componenti/about/about').then(m => m.AboutComponent)},
        {path:'contact', loadComponent: () => import('./componenti/contact/contact').then(m => m.ContactComponent)},
       // {path:'contatti/:id', loadComponent: () => import('./componenti/contatti/contatti').then(m => m.Contatti)},
        {path:'contatti', canActivate:[authGuard] , canActivateChild:[authChildGuard] , loadComponent: () => import('./componenti/contatti/contatti').then(m => m.Contatti), 
                children:[{path:':id', loadComponent: () => import('./componenti/contatto/contatto').then(m => m.Contatto)}]
        },
        {path:'observable', loadComponent: () => import('./observable/observable').then(m => m.ObservableComponent)},
        {path:'form', loadComponent: () => import('./componenti/form/form').then(m => m.Form)},
        {path:'reactiveForm', loadComponent: () => import('./componenti/reactive-form/reactive-form').then(m => m.ReactiveForm)},
        {path:'callDB', loadComponent: () => import('./call-db/call-db').then(m => m.CallDB)},
        {path:'signup', loadComponent: () => import('./componenti/signup/signup').then(m => m.Signup)},
        {path:'signin', loadComponent: () => import('./componenti/signin/signin').then(m => m.Signin)},
        {path:'404', loadComponent: () => import('./componenti/not-found-page/not-found-page').then(m => m.NotFoundPage)},
        {path:'**', redirectTo: '404'}//gli asterischi sempre per ultimo
];
