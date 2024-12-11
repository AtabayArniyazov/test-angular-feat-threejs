import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ThreejsVisualComponent } from './three-js-visual/three-js-visual.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'example_1', component: ThreejsVisualComponent },
];
