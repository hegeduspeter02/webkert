import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"webkert-projekt-6d4aa","appId":"1:317316140798:web:0939db8eb5286e2a209faf","storageBucket":"webkert-projekt-6d4aa.appspot.com","apiKey":"AIzaSyB-Gz8dFosq2hspSBjghJNlCzuSp7DUnrQ","authDomain":"webkert-projekt-6d4aa.firebaseapp.com","messagingSenderId":"317316140798","measurementId":"G-7EJBKGS5FB"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
