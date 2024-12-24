import { Component,AfterViewInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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

const helper = new THREE.GridHelper(5,100);
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene

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
 /* camera.position.x =-2.0186947242889692;
  camera.position.y = 4.4385133677010815;
  camera.position.z =2.2436312936361453;
  camera.lookAt(1.6279145298771738,3.6804762719614774,1.7214525875037088);*/

const controls=new OrbitControls(camera, renderer.domElement);

controls.target.set(0,0,0);

  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(500, 500, 500) //top-left-ish
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333,1);
  scene.add(ambientLight);
 //scene.add(helper);

  const clock = new THREE.Clock();

  function animate() {
   if(mixer){mixer.update(clock.getDelta());}

    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement
    controls.update;
    renderer.render(scene, camera);
    console.log("camera looks at: x:",Math.round(cameraX*10)/10,",","y:",Math.round(cameraY*10)/10,",","z:",Math.round(cameraZ*10)/10,",")
  }

var szamlalo=0;
const szamlaloID=document.getElementById("szamlaloID");
const slide1ID=document.getElementById("slide1ID");


const slide1 = document.getElementById("slide1");

  const s1e1 = document.getElementById("s1e1");
  const s1e2 = document.getElementById("s1e2");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
const slide5 = document.getElementById("slide5");
const slide6 = document.getElementById("slide6");
const slide7 = document.getElementById("slide7");
const slide8 = document.getElementById("slide8");

var s1IsVisible = false;
var s2IsVisible = false;
var s3IsVisible = false;
var s4IsVisible = false;
var s5IsVisible = false;
var s6IsVisible = false;
var s7IsVisible = false;
var s8IsVisible = false;

function nothingIsVisable(){
  if(!s1IsVisible && !s2IsVisible && !s3IsVisible && !s4IsVisible && !s5IsVisible &&!s6IsVisible && !s7IsVisible && !s8IsVisible){
    return 1;
  }else{
    return 0;
  }
}
function updatecounters(){
  if(szamlaloID != null){
    szamlaloID.innerHTML="szamlalo: "+szamlalo;
  }
  if(slide1ID != null){
    slide1ID.innerHTML="s1ID: "+s1ID;
  }
}
var s1ID = 0;

function elore(){
  if(s1IsVisible == true){
    s1ID++;

  }
  if( nothingIsVisable()){
    szamlalo++;
  }
  updatecounters();
}


// Call the function to log the look-at position
var cameraX=0;
var cameraY=0;
var cameraZ=0;

  window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e:any) {
  switch (e.keyCode){
    case 65:
      //a
      cameraX=cameraX+0.1;
      camera.lookAt(cameraX,cameraY,cameraZ);
      break;
    case 74:
      //j
      cameraX=cameraX-0.1;
      camera.lookAt(cameraX,cameraY,cameraZ);
      break;
    case 83:
      //s
      cameraY=cameraY+0.1;
      camera.lookAt(cameraX,cameraY,cameraZ);
      break;
    case 75:
      //k
       cameraY=cameraY-0.1;
       camera.lookAt(cameraX,cameraY,cameraZ);
       break;
     case 68:
       //d
       cameraZ=cameraZ+0.1;
       camera.lookAt(cameraX,cameraY,cameraZ);
       break;
       case 76:
        //l
       cameraZ=cameraZ-0.1;
       camera.lookAt(cameraX,cameraY,cameraZ);
       break;
    case 13:
      //enter
      console.log(
        "x: ",camera.position.x, ',',
        "y: ",camera.position.y, ',',
        "z: ",camera.position.z, ',',
      )
       break;
    case 39:
      elore();
      break;
    case 37:
      if(s1IsVisible == true){
        s1ID--;
      }
      if(szamlalo === 3){
        s1ID = 2;
      }
      if( nothingIsVisable()){
        if(szamlalo === 0){
          szamlalo=szamlalo;
        }else{
        szamlalo--;
         }
      }
      updatecounters();
      break;
    }




  if(szamlalo == 0 && e.keyCode==37){
    gsap.to(controls.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
    gsap.to(camera.position,{
      x : 1.4311579052134409,
      y : 2.7686114734175713,
      z : -4.3731149087753876,
      duration:2,
      onUpdate: function(){
      controls.update();
        }
    })
  }

//----------C4----------------------

  if (szamlalo === 1) {
    gsap.to(controls.target, {
      x: 0,
      y: 0,
      z: -0.9,
      duration: 2,
      ease: "power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
    gsap.to(camera.position, {
      x: -2,
      y: 5,
      z: 1.5,
      duration: 2,
      ease: "power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }


  if(szamlalo === 2){
    if(s1IsVisible == false){
      gsap.to(camera.position,{
        x:  -0.7502532651760021,
        y:  0.35723573158715555,
        z:  -0.38937265156417045,
        duration:2,
        onComplete: function(){
          s1IsVisible = true;
          if(slide1 != null){
            slide1.style.display = "flex";
          }
        }
      })
    }

    if(s1IsVisible == true){
      if(s1ID >= 1){
        if(s1e1 !=null){
          s1e1.style.display="block";}
        }else{
          if(s1e1 !=null){
            s1e1.style.display="none";}
          }
          if(s1ID >= 2){
            if(s1e2 !=null){
              s1e2.style.display="block";
            }
          }else{
            if(s1e2 !=null){
              s1e2.style.display="none";}
            }
            if(s1ID == 3){
              s1IsVisible = false;
              if(slide1 != null){
                slide1.style.display="none";
              }
              s1ID = 0;
              elore();
            }
          }

          if(s1ID == -1){
            s1IsVisible = false;
            if(slide1 != null){
              slide1.style.display="none";
            }
            s1ID=0;
            szamlalo =2;

          }
        }

  if(szamlalo == 3){
    gsap.to(camera.position,{
      x: -2,
      y: 5 ,
      z: 1.5,
      duration:2,
      ease:"power3.inOut",
    })
  }

//----------D4----------------------

  if(szamlalo == 4){
    gsap.to(controls.target,{
      x: 0,
      y: -0.5,
      z: 0,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  -2.7208663238764426,
      y:  3.5715675943095553,
      z:  -3.3553718493391766 ,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 5){
    gsap.to(controls.target,{
      x: 0,
      y: -0.5,
      z: 0,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  -0.6253931601248932,
      y:  0.3464956365479642,
      z:  -0.7922608098697215,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 6){
    gsap.to(camera.position,{
      x:  -2.7208663238764426,
      y:  3.5715675943095553,
      z:  -3.3553718493391766 ,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }

//----------E4----------------------
  if(szamlalo == 7){
    gsap.to(controls.target,{
      x: -1.7,
      y: -1.3,
      z: 0,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  2.8241763521025396,
      y:  4.213878713023659,
      z:  -2.9589759157800244,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 8){
    gsap.to(controls.target,{
      x: -1.7,
      y: -1.3,
      z: 0,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  -0.3234944350191573,
      y:  0.33117320083189483,
      z:  -0.9146795246292132,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 9){
    gsap.to(camera.position,{
      x:  2.8241763521025396,
      y:  4.213878713023659,
      z:  -2.9589759157800244,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }

//----------F4----------------------
  if(szamlalo == 10){
    gsap.to(controls.target,{
      x:-0.1,
      y: 0.2,
      z: -1.1,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  2.714197006508865,
      y:  3.4873810620899617,
      z:  1.4531200769952128,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 11){
    gsap.to(camera.position,{
      x:  0.008741320518957651,
      y:  0.3270252761227921,
      z:  -1.0013467641947735,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 12){
    gsap.to(camera.position,{
      x:  2.714197006508865,
      y:  3.4873810620899617,
      z:  1.4531200769952128,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }

//----------G4----------------------

  if(szamlalo == 13){
    gsap.to(controls.target,{
      x: 0.079,
      y: -1,
      z: -1.1,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  0.07425468103581571,
      y:  3.445033516565238,
      z:  0.05494225906324535,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 14){
    gsap.to(controls.target,{
      x: 0.5,
      y: -1.8,
      z: -1.7,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  0.31605460453889844,
      y:  0.34736189095006487,
      z:  -0.952149960172205,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
  }
  if(szamlalo == 15){
    gsap.to(controls.target,{
      x: 0.079,
      y: -1,
    z: -1.1,
    duration:2,
    ease:"power3.inOut",
    onUpdate: () => {
      controls.update();
    }
  })
  gsap.to(camera.position,{
    x:  0.07425468103581571,
    y:  3.445033516565238,
    z:  0.05494225906324535,
    duration:2,
    ease:"power3.inOut",
    onUpdate: () => {
      controls.update();
    }
  });
}

//----------A4----------------------

  if(szamlalo == 16){
    gsap.to(controls.target,{
      x: 1.5,
      y: -1.9,
      z: -2.8,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  -0.29352325721453004,
      y:  3.090695881588399,
      z:  1.4103057688090246,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
     });
   }
   if(szamlalo == 17){
     gsap.to(controls.target,{
       x: 1.5,
       y: -1.9,
        z: -2.8,
       duration:2,
       ease:"power3.inOut",
       onUpdate: () => {
         controls.update();
        }
    })
     gsap.to(camera.position,{
       x:  0.6860357638651691,
       y:  0.34214272826027714,
       z:  -0.8688987101401513 ,
       duration:2,
       ease:"power3.inOut",
       onUpdate: () => {
         controls.update();
        }
      });
    }
   if(szamlalo == 18){
         gsap.to(camera.position,{
           x:  -0.29352325721453004,
           y:  3.090695881588399,
           z:  1.4103057688090246,
           duration:2,
           ease:"power3.inOut",
           onUpdate: () => {
             controls.update();
           }
         });
       }

//----------B4----------------------

 if(szamlalo == 19){
   gsap.to(controls.target,{
     x: 5.4,
     y: -5.5,
     z: -2,
     duration:2,
     ease:"power3.inOut",
     onUpdate: () => {
       controls.update();
      }
    })
 gsap.to(camera.position,{
   x:  -2.08284219605392,
   y:  4.168395903617315,
   z:  0.22332959961178578,
   duration:2,
   ease:"power3.inOut",
   onUpdate: () => {
     controls.update();
   }
 });
   }
 if(szamlalo == 20){
   gsap.to(camera.position,{
     x:  0.8109277209603922,
     y:  0.3414749271048718,
     z:  -0.6500999023238023,
     duration:2,
     ease:"power3.inOut",
     onUpdate: () => {
       controls.update();
      }
     });
     }

  if(szamlalo == 21){
     gsap.to(camera.position,{
       x:  -2.08284219605392,
       y:  4.168395903617315,
       z:  0.22332959961178578,
       duration:2,
       ease:"power3.inOut",
       onUpdate: () => {
         controls.update();
       }
     });
    }

//----------C5----------------------

if(szamlalo == 22){
  gsap.to(controls.target,{
    x: 0.9,
    y: -0.4,
    z: 0.5,
    duration:2,
    ease:"power3.inOut",
    onUpdate: () => {
      controls.update();
    }
  })
  gsap.to(camera.position,{
    x:  1.2557474840458278,
    y:  3.2062090471559324,
    z:  -3.68004521967629,
    duration:2,
    ease:"power3.inOut",
    onUpdate: () => {
      controls.update();
    }
    });
  }
 if(szamlalo == 23){
  gsap.to(camera.position,{
    x:  0.9709620223589394,
    y:  0.3193423519776942,
    z:  -0.33380730336832876,
    duration:2,
    ease:"power3.inOut",
    onUpdate: () => {
      controls.update();
     }
   });
  }
  if(szamlalo == 24){
    gsap.to(controls.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    });
    gsap.to(camera.position,{
      x : 1.4311579052134409,
      y : 2.7686114734175713,
      z : -4.3731149087753876,
      duration:2,
      onUpdate: function(){
        controls.update();
      }
    })
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
