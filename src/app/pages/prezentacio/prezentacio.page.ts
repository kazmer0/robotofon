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
export class PrezentacioPage implements OnInit, AfterViewInit {

    constructor() {

     }


    ngOnInit() {
    }
    ngAfterViewInit(): void {


      //Create a Three.JS Scene
  const duration=1.2;
  const durationBeKi=0.7;
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
      //console.log("camera looks at: x:",Math.round(cameraX*10)/10,",","y:",Math.round(cameraY*10)/10,",","z:",Math.round(cameraZ*10)/10,",")
    }

  var szamlalo=0;
  const szamlaloID=document.getElementById("szamlaloID");
  const slide1ID=document.getElementById("slide1ID");


  const slide1 = document.getElementById("slide1");
    const s1e1 = document.getElementById("s1e1");
    const s1e2 = document.getElementById("s1e2");
    const s1e3 = document.getElementById("s1e3");

  const slide2 = document.getElementById("slide2");
    const s2e1 = document.getElementById("s2e1");
    const s2e2 = document.getElementById("s2e2");
    const s2e3 = document.getElementById("s2e3");
    const s2e4 = document.getElementById("s2e4");
    const s2e5 = document.getElementById("s2e5");
    const s2e6 = document.getElementById("s2e6");
    const s2e7 = document.getElementById("s2e7");
    const s2e8 = document.getElementById("s2e8");
    const s2e9 = document.getElementById("s2e9");
    const s2e10 = document.getElementById("s2e10");
    const s2e11 = document.getElementById("s2e11");


    const slide3 = document.getElementById("slide3");
    const s3e1 = document.getElementById("s3e1");
    const s3e2 = document.getElementById("s3e2");
    const s3e3 = document.getElementById("s3e3");
    const s3e4 = document.getElementById("s3e4");
    const s3e5 = document.getElementById("s3e5");
    const s3e6 = document.getElementById("s3e6");
    const s3e7 = document.getElementById("s3e7");
    const s3e8 = document.getElementById("s3e8");

  const slide4 = document.getElementById("slide4");
    const s4e1 = document.getElementById("s4e1");
    const s4e2 = document.getElementById("s4e2");
    const s4e3 = document.getElementById("s4e3");
    const s4e4 = document.getElementById("s4e4");
    const s4e5 = document.getElementById("s4e5");
    const s4e6 = document.getElementById("s4e6");

  const slide5 = document.getElementById("slide5");
    const s5e1 = document.getElementById("s5e1");
    const s5e2 = document.getElementById("s5e2");
    const s5e2a = document.getElementById("s5e2a");
    const s5e3 = document.getElementById("s5e3");
    const s5e4 = document.getElementById("s5e4");
    const s5e5 = document.getElementById("s5e5");

  const slide6 = document.getElementById("slide6");
    const s6e1 = document.getElementById("s6e1");
    const s6e2 = document.getElementById("s6e2");
    const s6e3 = document.getElementById("s6e3");


  const slide7 = document.getElementById("slide7");
    const s7e1 = document.getElementById("s7e1");
    const s7e2 = document.getElementById("s7e2");
    const s7e3 = document.getElementById("s7e3");
    const s7e4 = document.getElementById("s7e4");
    const s7e5 = document.getElementById("s7e5");
    const s7e6 = document.getElementById("s7e6");

  const slide8 = document.getElementById("slide8");
    const s8e1 = document.getElementById("s8e1");
    const s8e2 = document.getElementById("s8e2");
    const s8e3 = document.getElementById("s8e3");
    const s8e3a = document.getElementById("s8e3a");
    const s8e4 = document.getElementById("s8e4");
    const s8e5 = document.getElementById("s8e5");
    const s8e6 = document.getElementById("s8e6");

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
      controls.update();

    }
    updatecounters();
    console.log('s2id: '+s2ID);
    console.log('minden console log:',
      szamlalo,
      "s1IsVisible: ",s1IsVisible,
      "s2IsVisible: ",s2IsVisible,
      "s3IsVisible: ",s3IsVisible,
      "s4IsVisible: ",s4IsVisible,
      "s5IsVisible: ",s5IsVisible,
      "s6IsVisible: ",s6IsVisible,
      "s7IsVisible: ",s7IsVisible,
      "s8IsVisible: ",s8IsVisible,
      "s1ID :",s1ID,
      "s2ID :",s2ID,
      "s3ID :",s3ID,
      "s4ID :",s4ID,
      "s5ID :",s5ID,
      "s6ID :",s6ID,
      "s7ID :",s7ID,
      "s8ID :",s7ID,
      "states[0].isVisible: ",states[0].isVisible,
      "states[1].isVisible: ",states[1].isVisible,
      "states[2].isVisible: ",states[2].isVisible,
      "states[3].isVisible: ",states[3].isVisible,
      "states[4].isVisible: ",states[4].isVisible,
      "states[5].isVisible: ",states[5].isVisible,
      "states[6].isVisible: ",states[6].isVisible,
      "states[7].isVisible: ",states[7].isVisible,

    )






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

  function showElement(

    stateIndex: number, //a states arrayből erre a statera vonatkozik (pl ha 0, akkor a 1es slidera)

    id: number,//melyik slideID-t nézze (pl s1ID, ha az első slideon kell megjeleníteni elemet )

    startFrom:number,//meghatározza, hogy hanyas slideID-tól kell kezdenie megjelenítenie az elementeket (pl 3, akkor csak az után fogja megjeleníteni az elmeket amiután a slideID 3)

    elements: (HTMLElement | null)[],//melyik elemeket jelenítse meg (pl [s1e1,s1e2], ha az első előre gombnál az s1e1 elementet, a második előre gombnál az s1e2-t kell megjeleníteni)

    slide: HTMLElement | null,//melyik slide (pl slide1)

    maxId: number,//mennyi slideID-ig kell menni (pl 4, ha 3 elementet kell megjeleníteni )

    szamlaloBefore:number//amennyi a szamlalo értéke, amikor a function hívva lett

  ): void {
    const state= states[stateIndex];

    if (state.isVisible == true) {
      // elemek mutatása
      elements.forEach((el, index) => {
        if (el !== null) {
          if(id >= index+1+startFrom){
            el.style.display = "block";
            el.style.zIndex = "1";
          }else{
            el.style.display = "none";
            el.style.zIndex = "-1";
          }
        }
      });

      // slide bezárása
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



function hideElement(
  elements: (HTMLElement | null)[], //melyik elementet zárja be

  slideID:number, //melyik slideID-t figyelje

  id:number// mekkora legyen a slideID, amikor eltűntesse az elementeket
){
  elements.forEach((el, index) => {
    if (el !== null) {
      if(slideID>=id){
        el.style.display="none"
        el.style.zIndex="-1"
      }
    }
  })
}


function closeAllSlide(){
states[0].isVisible = false
states[1].isVisible = false
states[2].isVisible = false
states[3].isVisible = false
states[4].isVisible = false
states[5].isVisible = false
states[6].isVisible = false
states[7].isVisible = false

  s1ID=0;
  s2ID=0;
  s3ID=0;
  s4ID=0;
  s5ID=0;
  s6ID=0;
  s7ID=0;
  s8ID=0;

  var elements=[slide1,s1e1,s1e2,s1e3,slide2,s2e1,s2e2,s2e3,s2e4,s2e5,s2e6,s2e7,s2e8,s2e9,s2e10,s2e11,slide3,s3e1,s3e2,,,s3e5,,s3e7,,slide4,s4e1,s4e2,s4e3,s4e4,s4e5,slide5,s5e1,s5e2,s5e3,s5e4,s5e5,slide6,s6e1,s6e2,s6e3,slide7,s7e1,s7e2,s7e3,s7e4,,s7e6,slide8,s8e1,s8e2,s8e3,s8e4,s8e5,s8e6]

elements.forEach(e => {
  if(e){
    e.style.display='none';

  }
  if(s3e6 && s3e8 && s3e4 && s3e3 && s7e5){
s3e6.style.zIndex='-1'
s3e8.style.zIndex='-1'
s3e4.style.zIndex='-1'
s3e3.style.zIndex='-1'
s7e5.style.zIndex='-1'}
});
console.log('minden console log (0):',
  szamlalo,
  "s1IsVisible: ",s1IsVisible,
  "s2IsVisible: ",s2IsVisible,
  "s3IsVisible: ",s3IsVisible,
  "s4IsVisible: ",s4IsVisible,
  "s5IsVisible: ",s5IsVisible,
  "s6IsVisible: ",s6IsVisible,
  "s7IsVisible: ",s7IsVisible,
  "s8IsVisible: ",s8IsVisible,
  "s1ID :",s1ID,
  "s2ID :",s2ID,
  "s3ID :",s3ID,
  "s4ID :",s4ID,
  "s5ID :",s5ID,
  "s6ID :",s6ID,
  "s7ID :",s7ID,
  "s8ID :",s7ID,
  "states[0].isVisible: ",states[0].isVisible,
  "states[1].isVisible: ",states[1].isVisible,
  "states[2].isVisible: ",states[2].isVisible,
  "states[3].isVisible: ",states[3].isVisible,
  "states[4].isVisible: ",states[4].isVisible,
  "states[5].isVisible: ",states[5].isVisible,
  "states[6].isVisible: ",states[6].isVisible,
  "states[7].isVisible: ",states[7].isVisible)
}
  // Kamera pozíció tesztelés
  /*var cameraX=0;
  var cameraY=0;
  var cameraZ=0;
*/
    window.addEventListener("keydown", checkKeyPressed, false);

  function checkKeyPressed(e:any) {
    switch (e.keyCode){
     /* case 65:
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
         break;*/
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

      case 49:
        closeAllSlide();
        gsap.to(controls.target, {
          x: 0,
          y: 0,
          z: -0.9,
          duration:duration,
          ease: "power3.inOut",
          onUpdate: () => {
            controls.update();
          }
        });
        gsap.to(camera.position, {
          x: -2,
          y: 5,
          z: 1.5,
          duration:duration,
          ease: "power3.inOut",
          onUpdate: () => {
            controls.update();
          },
          onComplete: function(){
            if(states[0].isVisible == false){
              gsap.to(controls.target, {
                x: 1.5 , y: -8.1 , z: -3.5 ,
                duration:durationBeKi,
                ease: "power3.inOut",
                onUpdate: () => {
                  controls.update();
                }
              });
              gsap.to(camera.position,{
                x:  -0.7502532651760021,
                y:  0.35723573158715555,
                z:  -0.38937265156417045,
                duration:durationBeKi,
                onComplete: function(){
                  states[0].isVisible = true;
                  if(slide1 != null && s1e1 && s1e2 && s1e3){
                    slide1.style.display = "flex";
                    s1e1.style.display = "block";
                    s1e2.style.display = "block";
                    s1e3.style.display = "block";

                  }
                }
              })
            }
          }
        });
        break;
        case 50:
          closeAllSlide();

          gsap.to(controls.target,{
            x: 0,
            y: -0.5,
            z: 0,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            }
          })
          gsap.to(camera.position,{
            x:  -2.7208663238764426,
            y:  3.5715675943095553,
            z:  -3.3553718493391766 ,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            },
            onComplete: function(){
              if(states[1].isVisible == false){
                gsap.to(controls.target,{
                  x: 0,
                  y: -0.5,
                  z: 0,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  }
                })
                gsap.to(camera.position,{
                  x:  -0.6253931601248932,
                  y:  0.3464956365479642,
                  z:  -0.7922608098697215,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  },
                  onComplete: function(){
                    states[1].isVisible = true;
                    if(slide2 != null && s2e1 && s2e2 && s2e3 && s2e4 && s2e5 && s2e6 && s2e7){
                      slide2.style.display = "flex";
                      s2e1.style.display = "block";
                      s2e2.style.display = "block";
                      s2e3.style.display = "block";
                      s2e4.style.display = "block";
                      s2e5.style.display = "block";
                      s2e6.style.display = "block";
                      s2e7.style.display = "block";


                    }
                  }
                })
              }
            }
          });
          break;
          case 87:
            closeAllSlide();

            gsap.to(controls.target,{
              x: 0,
              y: -0.5,
              z: 0,
              duration:duration,
              ease:"power3.inOut",
              onUpdate: () => {
                controls.update();
              }
            })
            gsap.to(camera.position,{
              x:  -2.7208663238764426,
              y:  3.5715675943095553,
              z:  -3.3553718493391766 ,
              duration:duration,
              ease:"power3.inOut",
              onUpdate: () => {
                controls.update();
              },
              onComplete: function(){
                if(states[1].isVisible == false){
                  gsap.to(controls.target,{
                    x: 0,
                    y: -0.5,
                    z: 0,
                    duration:durationBeKi,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                    }
                  })
                  gsap.to(camera.position,{
                    x:  -0.6253931601248932,
                    y:  0.3464956365479642,
                    z:  -0.7922608098697215,
                    duration:durationBeKi,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                    },
                    onComplete: function(){
                      states[1].isVisible = true;
                      if(slide2 != null && s2e1 && s2e8 && s2e9 && s2e10 && s2e11){
                        slide2.style.display = "flex";
                        s2e1.style.display = "block";
                        s2e8.style.display = "block";
                        s2e9.style.display = "block";
                        s2e10.style.display = "block";
                        s2e11.style.display = "block";
                      }
                    }
                  })
                }
              }
            });
            break;
            case 51:
              closeAllSlide();

              gsap.to(controls.target,{
                x: -1.7,
                y: -1.3,
                z: 0,
                duration:duration,
                ease:"power3.inOut",
                onUpdate: () => {
                  controls.update();
                }
              })
              gsap.to(camera.position,{
                x:  2.8241763521025396,
                y:  4.213878713023659,
                z:  -2.9589759157800244,
                duration:duration,
                ease:"power3.inOut",
                onUpdate: () => {
                  controls.update();
                },
                onComplete: function(){
                  if(states[2].isVisible == false){
                    gsap.to(controls.target,{
                      x: -1.7,
                      y: -1.3,
                      z: 0,
                      duration:durationBeKi,
                      ease:"power3.inOut",
                      onUpdate: () => {
                        controls.update();
                      }
                    })
                    gsap.to(camera.position,{
                      x:  -0.3234944350191573,
                      y:  0.33117320083189483,
                      z:  -0.9146795246292132,
                      duration:durationBeKi,
                      ease:"power3.inOut",
                      onUpdate: () => {
                        controls.update();
                      },
                      onComplete: function(){
                        states[2].isVisible = true;
                        if(slide3 != null && s3e1 && s3e2 && s3e3 && s3e4){
                          slide3.style.display = "flex";
                          s3e1.style.display = "block";
                          s3e2.style.display = "block";
                          s3e3.style.zIndex = "1";
                          s3e4.style.zIndex = "1";
                        }
                      }
                    });
                  }
                }
              });
              break;
              case 69:
                closeAllSlide();

                gsap.to(controls.target,{
                  x: -1.7,
                  y: -1.3,
                  z: 0,
                  duration:duration,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  }
                })
                gsap.to(camera.position,{
                  x:  2.8241763521025396,
                  y:  4.213878713023659,
                  z:  -2.9589759157800244,
                  duration:duration,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  },
                  onComplete: function(){
                    if(states[2].isVisible == false){
                      gsap.to(controls.target,{
                        x: -1.7,
                        y: -1.3,
                        z: 0,
                        duration:durationBeKi,
                        ease:"power3.inOut",
                        onUpdate: () => {
                          controls.update();
                        }
                      })
                      gsap.to(camera.position,{
                        x:  -0.3234944350191573,
                        y:  0.33117320083189483,
                        z:  -0.9146795246292132,
                        duration:durationBeKi,
                        ease:"power3.inOut",
                        onUpdate: () => {
                          controls.update();
                        },
                        onComplete: function(){
                          states[2].isVisible = true;
                          if(slide3 != null && s3e1 && s3e5 && s3e6){
                            slide3.style.display = "flex";
                            s3e1.style.display = "block";
                            s3e5.style.display = "block";
                            s3e6.style.zIndex = "1";
                          }
                        }
                      });
                    }
                  }
                });
                break;

                case 68:
                  closeAllSlide();
                  gsap.to(controls.target,{
                    x: -1.7,
                    y: -1.3,
                    z: 0,
                    duration:duration,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                    }
                  })
                  gsap.to(camera.position,{
                    x:  2.8241763521025396,
                    y:  4.213878713023659,
                    z:  -2.9589759157800244,
                    duration:duration,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                    },
                    onComplete: function(){
                      if(states[2].isVisible == false){
                        gsap.to(controls.target,{
                          x: -1.7,
                          y: -1.3,
                          z: 0,
                          duration:durationBeKi,
                          ease:"power3.inOut",
                          onUpdate: () => {
                            controls.update();
                          }
                        })
                        gsap.to(camera.position,{
                          x:  -0.3234944350191573,
                          y:  0.33117320083189483,
                          z:  -0.9146795246292132,
                          duration:durationBeKi,
                          ease:"power3.inOut",
                          onUpdate: () => {
                            controls.update();
                          },
                          onComplete: function(){
                            states[2].isVisible = true;
                            if(slide3 != null && s3e1  && s3e7 && s3e8){
                              slide3.style.display = "flex";
                              s3e1.style.display = "block";
                              s3e7.style.display = "block";
                              s3e8.style.zIndex = "1";
                            }
                          }
                        });
                      }
                    }
                  });
                  break;
                  case 52:
                    closeAllSlide();
                    gsap.to(controls.target,{
                      x:-0.1,
                      y: 0.2,
                      z: -1.1,
                      duration:duration,
                      ease:"power3.inOut",
                      onUpdate: () => {
                        controls.update();
                      }
                    })
                    gsap.to(camera.position,{
                      x:  2.714197006508865,
                      y:  3.4873810620899617,
                      z:  1.4531200769952128,
                      duration:duration,
                      ease:"power3.inOut",
                      onUpdate: () => {
                        controls.update();
                      },
                      onComplete: function(){
                        if(states[3].isVisible == false){

                          gsap.to(camera.position,{
                            x:  0.008741320518957651,
                            y:  0.3270252761227921,
                            z:  -1.0013467641947735,
                            duration:durationBeKi,
                            ease:"power3.inOut",
                            onUpdate: () => {
                              controls.update();
                            },
                            onComplete: function(){
                              states[3].isVisible = true;
                              if(slide4 != null && s4e1 && s4e2 && s4e3 && s4e4 && s4e5){
                                slide4.style.display = "flex";
                                s4e1.style.display = "block";
                                s4e2.style.display = "block";
                                s4e3.style.display = "block";
                                s4e4.style.display = "block";
                                s4e5.style.display = "block";

                              }
                            }
                          });
                          }
                      }
                    });
                    break;
                    case 53:
                      closeAllSlide();
                      gsap.to(controls.target,{
                        x: 0.079,
                        y: -1,
                        z: -1.1,
                        duration:duration,
                        ease:"power3.inOut",
                        onUpdate: () => {
                          controls.update();
                        }
                      })
                      gsap.to(camera.position,{
                        x:  0.07425468103581571,
                        y:  3.445033516565238,
                        z:  0.05494225906324535,
                        duration:duration,
                        ease:"power3.inOut",
                        onUpdate: () => {
                          controls.update();
                        },
                        onComplete: function(){
                          if(states[4].isVisible == false){

                            gsap.to(controls.target,{
                              x: 0.5,
                              y: -1.8,
                              z: -1.7,
                              duration:durationBeKi,
                              ease:"power3.inOut",
                              onUpdate: () => {
                                controls.update();
                              }
                            })
                            gsap.to(camera.position,{
                              x:  0.31605460453889844,
                              y:  0.34736189095006487,
                              z:  -0.952149960172205,
                              duration:durationBeKi,
                              ease:"power3.inOut",
                              onUpdate: () => {
                                controls.update();
                              },
                              onComplete: function(){
                                states[4].isVisible = true;
                                if(slide5 != null && s5e1 && s5e2 && s5e3 && s5e4){
                                  slide5.style.display = "flex";
                                  s5e1.style.display = "block";
                                  s5e2.style.display = "block";
                                  s5e3.style.display = "block";
                                  s5e4.style.display = "block";

                                }
                              }
                            });
                          }
                        }
                      });
              break;
              case 54:
              closeAllSlide();
              gsap.to(controls.target,{
                x: 1.5,
                y: -1.9,
                z: -2.8,
                duration:duration,
                ease:"power3.inOut",
                onUpdate: () => {
                  controls.update();
                }
              })
              gsap.to(camera.position,{
                x:  -0.29352325721453004,
                y:  3.090695881588399,
                z:  1.4103057688090246,
                duration:duration,
                ease:"power3.inOut",
                onUpdate: () => {
                  controls.update();
                },
                onComplete: function(){
        if(states[5].isVisible == false){

          gsap.to(controls.target,{
             x: 1.5,
             y: -1.9,
              z: -2.8,
             duration:durationBeKi,
             ease:"power3.inOut",
             onUpdate: () => {
               controls.update();
              }
          })
           gsap.to(camera.position,{
             x:  0.6860357638651691,
             y:  0.34214272826027714,
             z:  -0.8688987101401513 ,
             duration:durationBeKi,
             ease:"power3.inOut",
             onUpdate: () => {
               controls.update();
              },
              onComplete: function(){
                states[5].isVisible = true;
                if(slide6 != null && s6e1 && s6e2 && s6e3){
                  slide6.style.display = "flex";
                  s6e2.style.display = "block";
                }
              }
            });
          }
                }
               });
               break;
               case 72:
               closeAllSlide();
               gsap.to(controls.target,{
                 x: 1.5,
                 y: -1.9,
                 z: -2.8,
                 duration:duration,
                 ease:"power3.inOut",
                 onUpdate: () => {
                   controls.update();
                 }
               })
               gsap.to(camera.position,{
                 x:  -0.29352325721453004,
                 y:  3.090695881588399,
                 z:  1.4103057688090246,
                 duration:duration,
                 ease:"power3.inOut",
                 onUpdate: () => {
                   controls.update();
                 },
                 onComplete: function(){
         if(states[5].isVisible == false){

           gsap.to(controls.target,{
              x: 1.5,
              y: -1.9,
               z: -2.8,
              duration:durationBeKi,
              ease:"power3.inOut",
              onUpdate: () => {
                controls.update();
               }
           })
            gsap.to(camera.position,{
              x:  0.6860357638651691,
              y:  0.34214272826027714,
              z:  -0.8688987101401513 ,
              duration:durationBeKi,
              ease:"power3.inOut",
              onUpdate: () => {
                controls.update();
               },
               onComplete: function(){
                 states[5].isVisible = true;
                 if(slide6 != null && s6e3){
                   slide6.style.display = "flex";
                   s6e3.style.display = "block";
                 }
               }
             });
           }
                 }
                });
                break;
                case 55:
                  closeAllSlide();

                  gsap.to(controls.target,{
                    x: 5.4,
                    y: -5.5,
                    z: -2,
                    duration:duration,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                     }
                   })
                gsap.to(camera.position,{
                  x:  -2.08284219605392,
                  y:  4.168395903617315,
                  z:  0.22332959961178578,
                  duration:duration,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  },
                  onComplete:function(){
                    if(states[6].isVisible == false){

                      gsap.to(controls.target,{
                        x: 5.4,
                        y: -5.5,
                        z: -2,
                        duration:durationBeKi,
                        ease:"power3.inOut",
                        onUpdate: () => {
                          controls.update();
                         }
                       })
                       gsap.to(camera.position,{
                         x:  0.8109277209603922,
                         y:  0.3414749271048718,
                         z:  -0.6500999023238023,
                         duration:durationBeKi,
                         ease:"power3.inOut",
                         onUpdate: () => {
                           controls.update();
                          },
                          onComplete: function(){
                            states[6].isVisible = true;
                            if(slide7 != null && s7e1 && s7e2 && s7e3 && s7e4 && s7e5 && s7e6){
                              slide7.style.display = "flex";
                              s7e1.style.display = "block";
                              s7e2.style.display = "block";
                              s7e3.style.display = "block";
                              s7e4.style.display = "block";
                              s7e5.style.zIndex = "1";
                              s7e6.style.display = "block";
                            }
                          }
                         });
                         }
                  }
                });
                break;
                case 56:
                  closeAllSlide();
                  gsap.to(controls.target,{
                    x: 0.9,
                    y: -0.4,
                    z: 0.5,
                    duration:duration,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                    }
                  })
                  gsap.to(camera.position,{
                    x:  1.2557474840458278,
                    y:  3.2062090471559324,
                    z:  -3.68004521967629,
                    duration:duration,
                    ease:"power3.inOut",
                    onUpdate: () => {
                      controls.update();
                    },
                    onComplete:function(){
                      if(states[7].isVisible == false){

                        gsap.to(controls.target,{
                          x: 0.9,
                          y: -0.4,
                          z: 0.5,
                          duration:durationBeKi,
                          ease:"power3.inOut",
                          onUpdate: () => {
                            controls.update();
                          }
                        })
                        gsap.to(camera.position,{
                          x:  0.9709620223589394,
                          y:  0.3193423519776942,
                          z:  -0.33380730336832876,
                          duration:durationBeKi,
                          ease:"power3.inOut",
                          onUpdate: () => {
                            controls.update();
                           },
                           onComplete: function(){
                             states[7].isVisible = true;
                             if(slide8 != null && s8e1 && s8e2 && s8e3 && s8e4){
                              slide8.style.display = "flex";
                              s8e1.style.display = "block";
                              s8e2.style.display = "block";
                              s8e3.style.display = "block";
                              s8e4.style.display = "block";

                            }
                           }
                         });
                          }
                    }
                    });


      }




    if(szamlalo == 0 && e.keyCode==37){
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration:duration,
        ease: "power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
      gsap.to(camera.position,{
        x : 1.4311579052134409,
        y : 2.7686114734175713,
        z : -4.3731149087753876,
        duration:duration,
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
        duration:duration,
        ease: "power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
      gsap.to(camera.position, {
        x: -2,
        y: 5,
        z: 1.5,
        duration:duration,
        ease: "power3.inOut",
        onUpdate: () => {
          controls.update();
        },
        onComplete: function(){
          szamlalo++;
          if(states[0].isVisible == false){
            gsap.to(controls.target, {
              x: 1.5 , y: -8.1 , z: -3.5 ,
              duration:durationBeKi,
              ease: "power3.inOut",
              onUpdate: () => {
                controls.update();
              }
            });
            gsap.to(camera.position,{
              x:  -0.7502532651760021,
              y:  0.35723573158715555,
              z:  -0.38937265156417045,
              duration:durationBeKi,
              onComplete: function(){
                states[0].isVisible = true;
                if(slide1 != null && s1e1){
                  slide1.style.display = "flex";
                  s1e1.style.display = "block";
                  s1ID++;

                }
              }
            })
          }
        }
      });
    }


    if(szamlalo === 2){
      showElement(0, s1ID,0, [s1e1, s1e2,s1e3], slide1, 4, 2);
    }

    if(szamlalo == 3){
      gsap.to(controls.target, {
        x: 0 , y: 0 , z: -0.9,
        duration:durationBeKi,
        ease: "power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
      gsap.to(camera.position,{
        x: -2,
        y: 5 ,
        z: 1.5,
        duration:durationBeKi,
        ease:"power3.inOut",
        onComplete: function(){
          //----------D4----------------------
          szamlalo++;
          gsap.to(controls.target,{
            x: 0,
            y: -0.5,
            z: 0,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            }
          })
          gsap.to(camera.position,{
            x:  -2.7208663238764426,
            y:  3.5715675943095553,
            z:  -3.3553718493391766 ,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            },
            onComplete: function(){
              szamlalo++;
              if(states[1].isVisible == false){
                gsap.to(controls.target,{
                  x: 0,
                  y: -0.5,
                  z: 0,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  }
                })
                gsap.to(camera.position,{
                  x:  -0.6253931601248932,
                  y:  0.3464956365479642,
                  z:  -0.7922608098697215,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  },
                  onComplete: function(){
                    states[1].isVisible = true;
                    if(slide2 != null && s2e1){
                      slide2.style.display = "flex";
                      s2e1.style.display = "block";
                      s2ID++;

                    }
                  }
                })
              }
            }
          });
        }
      })
    }



    if(szamlalo == 4){

    }
    if(szamlalo == 5){

      showElement(1, s2ID,0, [s2e1, s2e2, s2e3, s2e4, s2e5, s2e6, s2e7], slide2, 12, 5);
      hideElement([ s2e2, s2e3, s2e4, s2e5, s2e6, s2e7], s2ID,8)
      showElement(1, s2ID,7, [s2e8, s2e9, s2e10, s2e11], slide2, 12, 5);

    }
    if(szamlalo == 6){
      gsap.to(controls.target,{
        x: 0,
        y: -0.5,
        z: 0,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      })
      gsap.to(camera.position,{
        x:  -2.7208663238764426,
        y:  3.5715675943095553,
        z:  -3.3553718493391766 ,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        },
        //----------E4----------------------
        onComplete: function(){
          szamlalo++;
          gsap.to(controls.target,{
            x: -1.7,
            y: -1.3,
            z: 0,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            }
          })
          gsap.to(camera.position,{
            x:  2.8241763521025396,
            y:  4.213878713023659,
            z:  -2.9589759157800244,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            },
            onComplete: function(){
              szamlalo++;
              if(states[2].isVisible == false){
                gsap.to(controls.target,{
                  x: -1.7,
                  y: -1.3,
                  z: 0,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  }
                })
                gsap.to(camera.position,{
                  x:  -0.3234944350191573,
                  y:  0.33117320083189483,
                  z:  -0.9146795246292132,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  },
                  onComplete: function(){
                    states[2].isVisible = true;
                    if(slide3 != null && s3e1){
                      slide3.style.display = "flex";
                      s3e1.style.display = "block";
                      s3ID++;

                    }
                  }
                });
              }
            }
          });
            }
        });
    }

    if(szamlalo == 7){

    }
    if(szamlalo == 8){

    showElement(2, s3ID, 0,[s3e1], slide3, 7, 8);
    showElement(2, s3ID, 1,[s3e2], slide3, 7, 8);
    showElement(2, s3ID, 1,[s3e3], slide3, 7, 8);
    showElement(2, s3ID, 1,[s3e4], slide3, 7, 8);
    hideElement([s3e2,s3e3,s3e4],s3ID,3);
    showElement(2, s3ID, 3,[s3e5], slide3, 7, 8);
    showElement(2, s3ID, 3,[s3e6], slide3, 7, 8);
    hideElement([s3e5,s3e6],s3ID,5);
    showElement(2, s3ID, 5,[s3e7], slide3, 7, 8);
    showElement(2, s3ID, 5,[s3e8], slide3, 7, 8);

  }
    if(szamlalo == 9){
       gsap.to(controls.target,{
        x: -1.7,
        y: -1.3,
        z: 0,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      })
      gsap.to(camera.position,{
        x:  2.8241763521025396,
        y:  4.213878713023659,
        z:  -2.9589759157800244,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        },
        //----------F4----------------------
        onComplete: function(){
          szamlalo++;
          gsap.to(controls.target,{
            x:-0.1,
            y: 0.2,
            z: -1.1,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            }
          })
          gsap.to(camera.position,{
            x:  2.714197006508865,
            y:  3.4873810620899617,
            z:  1.4531200769952128,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            },
            onComplete: function(){
              szamlalo++;
              if(states[3].isVisible == false){

                gsap.to(camera.position,{
                  x:  0.008741320518957651,
                  y:  0.3270252761227921,
                  z:  -1.0013467641947735,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  },
                  onComplete: function(){
                    states[3].isVisible = true;
                    if(slide4 != null && s4e1){
                      slide4.style.display = "flex";
                      s4e1.style.display = "block";
                      s4ID++;

                    }
                  }
                });
                }
            }
          });
        }
      });
    }

    if(szamlalo == 10){

    }
    if(szamlalo == 11){

      showElement(3, s4ID,0, [s4e1, s4e2, s4e4, s4e5 ], slide4, 5, 11);
      showElement(3, s4ID,1, [s4e3], slide4, 5, 11);
      showElement(3, s4ID,3, [s4e6], slide4, 5, 11);

    }

    if(szamlalo == 12){
      gsap.to(camera.position,{
        x:  2.714197006508865,
        y:  3.4873810620899617,
        z:  1.4531200769952128,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        },
        //----------G4----------------------
        onComplete: function(){
        szamlalo++;
        gsap.to(controls.target,{
          x: 0.079,
          y: -1,
          z: -1.1,
          duration:duration,
          ease:"power3.inOut",
          onUpdate: () => {
            controls.update();
          }
        })
        gsap.to(camera.position,{
          x:  0.07425468103581571,
          y:  3.445033516565238,
          z:  0.05494225906324535,
          duration:duration,
          ease:"power3.inOut",
          onUpdate: () => {
            controls.update();
          },
          onComplete: function(){
            szamlalo++;
            if(states[4].isVisible == false){

              gsap.to(controls.target,{
                x: 0.5,
                y: -1.8,
                z: -1.7,
                duration:durationBeKi,
                ease:"power3.inOut",
                onUpdate: () => {
                  controls.update();
                }
              })
              gsap.to(camera.position,{
                x:  0.31605460453889844,
                y:  0.34736189095006487,
                z:  -0.952149960172205,
                duration:durationBeKi,
                ease:"power3.inOut",
                onUpdate: () => {
                  controls.update();
                },
                onComplete: function(){
                  states[4].isVisible = true;
                  if(slide5 != null && s5e1){
                    slide5.style.display = "flex";
                    s5e1.style.display = "block";
                    s5ID++;

                  }
                }
              });
            }
          }
        });
        }
      });
    }


    if(szamlalo == 13){

    }
    if(szamlalo == 14){


      showElement(4, s5ID, 0,[s5e1, s5e2, s5e3, s5e4], slide5, 5, 14);
      showElement(4, s5ID, 1,[s5e2a], slide5, 5, 14);
    }
    if(szamlalo == 15){
      gsap.to(controls.target,{
        x: 0.079,
        y: -1,
      z: -1.1,
      duration:durationBeKi,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      }
    })
    gsap.to(camera.position,{
      x:  0.07425468103581571,
      y:  3.445033516565238,
      z:  0.05494225906324535,
      duration:durationBeKi,
      ease:"power3.inOut",
      onUpdate: () => {
        controls.update();
      },
      //----------A4----------------------
      onComplete: function(){
      szamlalo++;
      gsap.to(controls.target,{
        x: 1.5,
        y: -1.9,
        z: -2.8,
        duration:duration,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      })
      gsap.to(camera.position,{
        x:  -0.29352325721453004,
        y:  3.090695881588399,
        z:  1.4103057688090246,
        duration:duration,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        },
        onComplete: function(){
szamlalo++;
if(states[5].isVisible == false){

  gsap.to(controls.target,{
     x: 1.5,
     y: -1.9,
      z: -2.8,
     duration:durationBeKi,
     ease:"power3.inOut",
     onUpdate: () => {
       controls.update();
      }
  })
   gsap.to(camera.position,{
     x:  0.6860357638651691,
     y:  0.34214272826027714,
     z:  -0.8688987101401513 ,
     duration:durationBeKi,
     ease:"power3.inOut",
     onUpdate: () => {
       controls.update();
      },
      onComplete: function(){
        states[5].isVisible = true;
        if(slide6 != null && s6e1){
          slide6.style.display = "flex";
          s6e1.style.display = "block";
          s6ID++;

        }
      }
    });
  }
        }
       });
      }
    });
  }


     if(szamlalo == 17){

      showElement(5, s6ID,0, [s6e1, s6e2, s6e3], slide6, 4, 17);


      }


     if(szamlalo == 18){
      gsap.to(controls.target,{
        x: 1.5,
        y: -1.9,
        z: -2.8,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      })
           gsap.to(camera.position,{
             x:  -0.29352325721453004,
             y:  3.090695881588399,
             z:  1.4103057688090246,
             duration:durationBeKi,
             ease:"power3.inOut",
             onUpdate: () => {
               controls.update();
              },
              //----------B4----------------------
              onComplete: function(){
             szamlalo++;
             gsap.to(controls.target,{
              x: 5.4,
              y: -5.5,
              z: -2,
              duration:duration,
              ease:"power3.inOut",
              onUpdate: () => {
                controls.update();
               }
             })
          gsap.to(camera.position,{
            x:  -2.08284219605392,
            y:  4.168395903617315,
            z:  0.22332959961178578,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            },
            onComplete:function(){
              szamlalo++;
              if(states[6].isVisible == false){

                gsap.to(controls.target,{
                  x: 5.4,
                  y: -5.5,
                  z: -2,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                   }
                 })
                 gsap.to(camera.position,{
                   x:  0.8109277209603922,
                   y:  0.3414749271048718,
                   z:  -0.6500999023238023,
                   duration:durationBeKi,
                   ease:"power3.inOut",
                   onUpdate: () => {
                     controls.update();
                    },
                    onComplete: function(){
                      states[6].isVisible = true;
                      if(slide7 != null && s7e1){
                        slide7.style.display = "flex";
                        s7e1.style.display = "block";
                        s7ID++;

                      }
                    }
                   });
                   }
            }
          });
            }
           });
         }


   if(szamlalo == 20){

       showElement(6, s7ID,0, [s7e1, s7e2, s7e3, s7e4], slide7, 5, 20);
       showElement(6, s7ID,3, [s7e5], slide7, 5, 20);
       showElement(6, s7ID,3, [s7e6], slide7, 5, 20);

      }
    if(szamlalo == 21){
      gsap.to(controls.target,{
        x: 5.4,
        y: -5.5,
        z: -2,
        duration:durationBeKi,
        ease:"power3.inOut",
        onUpdate: () => {
          controls.update();
         }
       })
       gsap.to(camera.position,{
         x:  -2.08284219605392,
         y:  4.168395903617315,
         z:  0.22332959961178578,
         duration:durationBeKi,
         ease:"power3.inOut",
         onUpdate: () => {
           controls.update();
         },
  //----------C5----------------------

         onComplete:function(){
          szamlalo++;
          gsap.to(controls.target,{
            x: 0.9,
            y: -0.4,
            z: 0.5,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            }
          })
          gsap.to(camera.position,{
            x:  1.2557474840458278,
            y:  3.2062090471559324,
            z:  -3.68004521967629,
            duration:duration,
            ease:"power3.inOut",
            onUpdate: () => {
              controls.update();
            },
            onComplete:function(){
              szamlalo++;
              if(states[7].isVisible == false){

                gsap.to(controls.target,{
                  x: 0.9,
                  y: -0.4,
                  z: 0.5,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                  }
                })
                gsap.to(camera.position,{
                  x:  0.9709620223589394,
                  y:  0.3193423519776942,
                  z:  -0.33380730336832876,
                  duration:durationBeKi,
                  ease:"power3.inOut",
                  onUpdate: () => {
                    controls.update();
                   },
                   onComplete: function(){
                     states[7].isVisible = true;
                     if(slide8 != null && s8e1){
                      slide8.style.display = "flex";
                      s8e1.style.display = "block";
                      s8ID++;

                    }
                   }
                 });
                  }
            }
            });
         }
       });
      }


  if(szamlalo == 22){

    }
   if(szamlalo == 23){

      showElement(7, s8ID,0, [s8e1, s8e2, s8e3, s8e4,s8e5,s8e6], slide8, 7, 23);
      showElement(7, s8ID, 2, [s8e3a],slide8,7,23)
      hideElement([s8e1,s8e2,s8e3,s8e3a,s8e4],s8ID,5)
      hideElement([s8e5],s8ID,6)

    }
    if(szamlalo == 24){
      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: 0,
        duration:duration,
        ease: "power3.inOut",
        onUpdate: () => {
          controls.update();
        }
      });
      gsap.to(camera.position,{
        x : 1.4311579052134409,
        y : 2.7686114734175713,
        z : -4.3731149087753876,
        duration:duration,
        onUpdate: function(){
          controls.update();
        }
      })
      szamlalo=0;
    }
  }
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
    }
  }
