import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

@Component({
  selector: 'app-threejs-visual',
  templateUrl: './three-js-visual.component.html',
  styleUrls: ['./three-js-visual.component.scss']
})
export class ThreejsVisualComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    // Создание экземпляра сцены
    const scene = new THREE.Scene();

    // Создание камеры
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Создание геометрии
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Создание материала
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Создание меша
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Создание рендерера
    let renderer: THREE.WebGLRenderer;
    const canvas = document.querySelector('#threejs-canvas');

    if (canvas && canvas instanceof HTMLCanvasElement) {
      renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setSize(window.innerWidth, window.innerHeight);
    } else {
      console.error('Canvas element not found');
      return;
    }

    // Отрисовка сцены
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    if (WebGL.isWebGL2Available()) {
      animate();
    } else {
      const warning = WebGL.getWebGL2ErrorMessage();

      document.getElementById('threejs-canvas')?.appendChild(warning);
    }
  }
}
