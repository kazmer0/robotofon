import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap'

@Component({
  selector: 'app-prezentacio',
  templateUrl: './prezentacio.page.html',
  styleUrl: './prezentacio.page.scss'
})
export class PrezentacioPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
/*export class PrezentacioPage implements AfterViewInit{
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
/*    //Instantiate a new renderer and set its size
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

/*  const controls=new OrbitControls(camera, renderer.domElement);

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
      //console.log("camera looks at: x:",Math.round(cameraX*10)/10,",","y:",Math.round(cameraY*10)/10,",","z:",Math.round(cameraZ*10)/10,",")
    }

  var szamlalo=0;
  const szamlaloID=document.getElementById("szamlaloID");
  const slide1ID=document.getElementById("slide1ID");


  const slide1 = document.getElementById("slide1");
    const s1e1 = document.getElementById("s1e1");
    const s1e2 = document.getElementById("s1e2");
  const slide2 = document.getElementById("slide2");
    const s2e1 = document.getElementById("s2e1");
    const s2e2 = document.getElementById("s2e2");
    const s2e3 = document.getElementById("s2e3");
  const slide3 = document.getElementById("slide3");
    const s3e1 = document.getElementById("s3e1");
    const s3e2 = document.getElementById("s3e2");
    const s3e3 = document.getElementById("s3e3");
    const s3e4 = document.getElementById("s3e4");
  const slide4 = document.getElementById("slide4");
    const s4e1 = document.getElementById("s4e1");
    const s4e2 = document.getElementById("s4e2");
    const s4e3 = document.getElementById("s4e3");
    const s4e4 = document.getElementById("s4e4");
    const s4e5 = document.getElementById("s4e5");
  const slide5 = document.getElementById("slide5");
    const s5e1 = document.getElementById("s5e1");
    const s5e2 = document.getElementById("s5e2");
    const s5e3 = document.getElementById("s5e3");
    const s5e4 = document.getElementById("s5e4");
    const s5e5 = document.getElementById("s5e5");
    const s5e6 = document.getElementById("s5e6");
  const slide6 = document.getElementById("slide6");
    const s6e1 = document.getElementById("s6e1");
    const s6e2 = document.getElementById("s6e2");
    const s6e3 = document.getElementById("s6e3");
    const s6e4 = document.getElementById("s6e4");
    const s6e5 = document.getElementById("s6e5");
    const s6e6 = document.getElementById("s6e6");
    const s6e7 = document.getElementById("s6e7");
  const slide7 = document.getElementById("slide7");
    const s7e1 = document.getElementById("s7e1");
    const s7e2 = document.getElementById("s7e2");
    const s7e3 = document.getElementById("s7e3");
    const s7e4 = document.getElementById("s7e4");
    const s7e5 = document.getElementById("s7e5");
    const s7e6 = document.getElementById("s7e6");
    const s7e7 = document.getElementById("s7e7");
    const s7e8 = document.getElementById("s7e8");
  const slide8 = document.getElementById("slide8");
    const s8e1 = document.getElementById("s8e1");
    const s8e2 = document.getElementById("s8e2");

  let s1IsVisible = false;
  let s2IsVisible = false;
  let s3IsVisible = false;
  let s4IsVisible = false;
  let s5IsVisible = false;
  let s6IsVisible = false;
  let s7IsVisible = false;
  let s8IsVisible = false;

  let s1ID = 0;
  let s2ID = 0;
  let s3ID = 0;
  let s4ID = 0;
  let s5ID = 0;
  let s6ID = 0;
  let s7ID = 0;
  let s8ID = 0;
  const states = [
    { isVisible: s1IsVisible, id: () => s1ID++, idMinus: () => s1ID-- },
    { isVisible: s2IsVisible, id: () => s2ID++, idMinus: () => s2ID-- },
    { isVisible: s3IsVisible, id: () => s3ID++, idMinus: () => s3ID-- },
    { isVisible: s4IsVisible, id: () => s4ID++, idMinus: () => s4ID-- },
    { isVisible: s5IsVisible, id: () => s5ID++, idMinus: () => s5ID-- },
    { isVisible: s6IsVisible, id: () => s6ID++, idMinus: () => s6ID-- },
    { isVisible: s7IsVisible, id: () => s7ID++, idMinus: () => s7ID-- },
    { isVisible: s8IsVisible, id: () => s8ID++, idMinus: () => s8ID-- },
  ];

  function nothingIsVisable(){
    var slidesVisible = 0;
    states.forEach(state => {
      if (state.isVisible == true) {
        slidesVisible++;
      }
    });
    if (slidesVisible > 0){
      return 0;
    }else{
      return 1;
    }
  }
  function updatecounters(){
    if(szamlaloID != null){
      szamlaloID.innerHTML="szamlalo: "+szamlalo;
    }
    if(slide1ID != null){
  var asd = states[0].isVisible.toString();
      slide1ID.innerHTML=asd+"s1ID: "+s1ID+"s2ID: "+s2ID,"s3ID: "+s3ID,"s4ID: "+s4ID,"s5ID: "+s5ID,"s6ID: "+s6ID,"s7ID: "+s7ID,"s8ID: "+s8ID;
    }
  }


  function elore(){
      states.forEach(state => {
      if (state.isVisible) {
        state.id();
      }
    });
    if( nothingIsVisable()){
      szamlalo++;
    }
    updatecounters();
    console.log('s2id: '+s2ID);
  }
  function hatra(){
    states.forEach(state => {
      if (state.isVisible) {
        state.idMinus();
      }
    });
    if( nothingIsVisable()){
      if(szamlalo === 0){
        szamlalo=szamlalo;
      }else{
      szamlalo--;
       }
    }
    updatecounters();
  }

  function handleState(
    stateIndex: number,
    id: number,
    elements: (HTMLElement | null)[],
    slide: HTMLElement | null,
    maxId: number,
    szamlaloBefore:number
  ): void {
    const state= states[stateIndex];

    if (state.isVisible == true) {
      // Handle element visibility
      elements.forEach((el, index) => {
        if (el !== null) {
          if(id >= index+1){
            el.style.display = "block";
          }else{
            el.style.display = "none";
          }
        }
      });

      // Handle specific conditions
      if (id === maxId) {
        console.log(state.isVisible)
        state.isVisible = false;
        if (slide !== null) {
          slide.style.display = "none";
        }
        id = 0;
        elore();
      } else if (id === -1) {
        state.isVisible = false;
        if (slide !== null) {
          slide.style.display = "none";
        }
        id = 0;
        szamlalo = szamlaloBefore;
      }
    }
    console.log(state.isVisible)
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
        if(szamlalo === 3){
          s1ID = 2;
        }
        hatra();
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

      if(states[0].isVisible == false){
        gsap.to(controls.target, {
          x: 1.5 , y: -8.1 , z: -3.5 ,       duration: 2,
          ease: "power3.inOut",
          onUpdate: () => {
            controls.update();
          }
        });
        gsap.to(camera.position,{
          x:  -0.7502532651760021,
          y:  0.35723573158715555,
          z:  -0.38937265156417045,
          duration:2,
          onComplete: function(){
            states[0].isVisible = true;
            if(slide1 != null){
              slide1.style.display = "flex";
            }
          }
        })
      }

      handleState(0, s1ID, [s1e1, s1e2], slide1, 3, 2);
    }

    if(szamlalo == 3){
      gsap.to(controls.target, {
        x: 0 , y: 0 , z: -0.9,       duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
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
      if(states[1].isVisible == false){
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
        },
        onComplete: function(){
          states[1].isVisible = true;
          if(slide2 != null){
            slide2.style.display = "flex";
          }
        }
      })
    }
      handleState(1, s2ID, [s2e1, s2e2, s2e3], slide2, 4, 5);

    }
    if(szamlalo == 6){
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
      if(states[2].isVisible == false){
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
        },
        onComplete: function(){
          states[2].isVisible = true;
          if(slide3 != null){
            slide3.style.display = "flex";
          }
        }
      });
    }
    handleState(2, s3ID, [s3e1, s3e2, s3e3, s3e4], slide3, 5, 8);

  }
    if(szamlalo == 9){
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
      if(states[3].isVisible == false){

      gsap.to(camera.position,{
        x:  0.008741320518957651,
        y:  0.3270252761227921,
        z:  -1.0013467641947735,
        duration:2,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        },
        onComplete: function(){
          states[3].isVisible = true;
          if(slide4 != null){
            slide4.style.display = "flex";
          }
        }
      });
      }
      handleState(3, s4ID, [s4e1, s4e2, s4e3, s4e4, s4e5], slide4, 6, 11);

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
      if(states[4].isVisible == false){

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
        },
        onComplete: function(){
          states[4].isVisible = true;
          if(slide5 != null){
            slide5.style.display = "flex";
          }
        }
      });
    }
    handleState(4, s5ID, [s5e1, s5e2, s5e3, s5e4 ,s5e5, s5e6], slide5, 7, 14);

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
      if(states[5].isVisible == false){

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
          },
          onComplete: function(){
            states[5].isVisible = true;
            if(slide6 != null){
              slide6.style.display = "flex";
            }
          }
        });
      }
      handleState(5, s6ID, [s6e1, s6e2, s6e3, s6e4, s6e5, s6e6, s6e7], slide6, 8, 17);

      }
     if(szamlalo == 18){
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
    if(states[6].isVisible == false){

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
       x:  0.8109277209603922,
       y:  0.3414749271048718,
       z:  -0.6500999023238023,
       duration:2,
       ease:"power3.inOut",
       onUpdate: () => {
         controls.update();
        },
        onComplete: function(){
          states[6].isVisible = true;
          if(slide7 != null){
            slide7.style.display = "flex";
          }
        }
       });
       }
       handleState(6, s7ID, [s7e1, s7e2, s7e3, s7e4, s7e5, s7e6, s7e7, s7e8], slide7, 9, 20);

      }
    if(szamlalo == 21){
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
    if(states[7].isVisible == false){

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
      x:  0.9709620223589394,
      y:  0.3193423519776942,
      z:  -0.33380730336832876,
      duration:2,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
       },
       onComplete: function(){
         states[7].isVisible = true;
         if(slide8 != null){
           slide8.style.display = "flex";
         }
       }
     });
      }
      handleState(7, s8ID, [s8e1, s8e2], slide8, 3, 23);

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
      szamlalo=0;
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

    ngOnInit() {
    }
  }
*/
