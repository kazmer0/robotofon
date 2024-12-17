import { Component,AfterViewInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap'

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

const helper = new THREE.GridHelper();
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

    object.scale.set(10, 10, 10); // Scale
    object.position.set(0, -1, -0.75); // Position
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
  const renderer = new THREE.WebGLRenderer({ alpha: true,antialias:true }); //Alpha: true allows for the transparent background
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  //Add the renderer to the DOM
  const container3D=document.getElementById("container3D");
  if(container3D != null) {
  container3D.appendChild(renderer.domElement);
  }




  //Set how far the camera will be from the 3D model
  camera.position.x = 1.4311579052134409;
  camera.position.y = 2.7686114734175713;
  camera.position.z = -4.3731149087753876;

camera.lookAt(0, 0, 0);
const control=new OrbitControls(camera, renderer.domElement);


  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(500, 500, 500) //top-left-ish
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333,1);
  scene.add(ambientLight);
 scene.add(helper);

  const clock = new THREE.Clock();

  function animate() {
   if(mixer){mixer.update(clock.getDelta());}

    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement
    control.update;
    renderer.render(scene, camera);
  }
var szamlalo=0;
  window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e:any) {

  //alert(e.keyCode);
    switch (e.keyCode){
      //a
      case 65:
        camera.position.x+=0.1;
        camera.lookAt(0,0,0);
        break;
      case 83:
        //s
        camera.position.x-=0.1;
        camera.lookAt(0,0,0);
        break;
      case 74:
        //j
        camera.position.y+=0.1;
        camera.lookAt(0,0,0);
        break;
      case 75:
        //k
        camera.position.y-=0.1;
        camera.lookAt(0,0,0);
        break;
      case 100:
        //4
        camera.position.z+=0.1;
        camera.lookAt(0,0,0);
        break;
      case 101:
        //5
        camera.position.z-=0.1;
        camera.lookAt(0,0,0);
        break;
      case 13:
        //enter
        console.log(
          "x: ",camera.position.x, ',',
          "y: ",camera.position.y, ',',
          "z: ",camera.position.z, ',',
          "camera.lookAt(",camera.lookAt,")"
        )
        break;
      case 39:
        szamlalo++;
        switch(szamlalo){
          case 1:

        gsap.to(camera.position,{
          x:  -1.6444205236946492 , y:  4.581992564794253 , z:  2.2207002992387426 ,
          duration:2,
          onUpdate: function(){
            camera.lookAt(0,0,0);
          }
        })

        break;
        case 2:
          //w

        gsap.to(camera.position,{
          x:  -0.7502532651760021 , y:  0.35723573158715555 , z:  -0.38937265156417045 ,
          duration:2,
        onComplete: function(){
          const rand=document.getElementById("rand");
          if(rand !=null){

          rand.style.display="flex";}

          window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e:any) {
  if(e.keyCode==39){
    if(szamlalo==3){
            const asd=document.getElementById("asd");
            if(asd !=null){

            asd.style.display="block";}}

    if(szamlalo==4){
          const kosz=document.getElementById("kosz");
          if(kosz !=null){

          kosz.style.display="block";}}

            }
          }
       }
      }

          )

        break;
        case 6:
          //e

        gsap.to(camera.position,{
          x:  -1.6444205236946492 , y:  4.581992564794253 , z:  2.2207002992387426 ,
          duration:2,

        })

        break;
        }

      break;
    }

}

  //Add a listener to the window, so we can resize the window and the camera
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  //Start the 3D rendering
  animate();
  }


}
