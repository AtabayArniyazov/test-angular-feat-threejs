import {Component, OnInit} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-drawing-lines',
  imports: [],
  templateUrl: './drawing-lines.component.html',
  styleUrl: './drawing-lines.component.scss'
})
export class DrawingLinesComponent implements OnInit {
  constructor() { }

  public ngOnInit(): void {
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    //создаем синий LineBasicMaterial
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const points = [];

    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);
  }
}
