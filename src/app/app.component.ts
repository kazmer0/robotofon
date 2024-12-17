import { Component,AfterViewInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: Window, useValue: window }
]
})
export class AppComponent implements AfterViewInit{
  title = 'robotofon';
  constructor(private window: Window) {
    // ...
}
  ngAfterViewInit(): void {
    //Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'xilofon';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();
//Load the file
let mixer:any;
loader.load(
  'assets/objxilofon/xilofon.gltf',
  function (gltf: any) {
    console.log('GLTF Loaded:', gltf);

    object = gltf.scene;

    // Debug object properties
    console.log('Object Loaded:', object);
    console.log('Object Children:', object.children);

    // Scale, position, and add object to scene
    object.scale.set(1, 1, 1); // Scale
    object.position.set(0, 0, 0); // Position
    scene.add(object);

    // Debug scene contents
    console.log('Scene Children:', scene.children);
  },
  function (xhr: any) {
    console.log(`Loading Progress: ${(xhr.loaded / xhr.total) * 100}% loaded`);
  },
  function (error: any) {
    console.error('Error loading GLTF:', error);
  }


);
  /*const textureLoader = new THREE.TextureLoader()
const bakedTexture = textureLoader.load('/assets/objxilofon/vegrekeszvan.png')
*/
  //Instantiate a new renderer and set its size
  const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
  renderer.setSize(window.innerWidth, window.innerHeight);

  //Add the renderer to the DOM
  const container3D=document.getElementById("container3D");
  if(container3D != null) {
  container3D.appendChild(renderer.domElement);
  }
  //Set how far the camera will be from the 3D model
  camera.position.x = 1.9144501079890615;
  camera.position.y = 3.1115007388799683;
  camera.position.z = -1.8487368383750664;

camera.lookAt(0, 0, 0);


  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(500, 500, 500) //top-left-ish
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333,1);
  scene.add(ambientLight);

  //This adds controls to the camera, so we can rotate / zoom it with the mouse
  if (objToRender === "xilofon") {
    controls = new OrbitControls(camera, renderer.domElement);
  }

  //Render the scene
  const clock = new THREE.Clock();
  function animate() {
   // console.log( "X= "+camera.position.x);
   // console.log( "Y= "+camera.position.y);
   // console.log( "Z= "+camera.position.z);
   if(mixer){mixer.update(clock.getDelta());}

    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement

    renderer.render(scene, camera);
  }

  //Add a listener to the window, so we can resize the window and the camera
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  //add mouse position listener, so we can make the eye move
  document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  console.log('asd',scene.children); // Check if the object is present in the scene

  //Start the 3D rendering
  animate();
  }


}
