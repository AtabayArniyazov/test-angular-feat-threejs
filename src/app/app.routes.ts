import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ThreejsVisualComponent } from './three-js-visual/three-js-visual.component';
import { DrawingLinesComponent } from './drawing-lines/drawing-lines.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'example_1', component: ThreejsVisualComponent },
  { path: 'example_2', component: DrawingLinesComponent },
];
