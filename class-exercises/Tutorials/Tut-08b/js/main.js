// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models


let scene, camera, renderer, cube, capsule, log;
let sceneContainer = document.querySelector("#scene-container");

function init(){
// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
scene = new THREE.Scene();
scene.background = new THREE.Color(0x015220);

//lighting
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1, 1, 5);
scene.add(light);

const helper = new THREE.DirectionalLightHelper(light, 4);
scene.add(helper);


camera = new THREE.PerspectiveCamera(75,sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({antialias: true });
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
//renderer.setAnimationLoop( animate );


//Geometry 
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry2 = new THREE.CapsuleGeometry(1, 0.5, 6, 5);

const texture = new THREE.TextureLoader().load('textures/ice-texture.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture})
cube = new THREE.Mesh( geometry, material );
capsule = new THREE.Mesh(geometry2, material);
cube.position.set(-3,-3,-3);
capsule.position.set(-3,-3,-3);
scene.add( cube );
scene.add( capsule);

sceneContainer.appendChild(renderer.domElement);
//document.body.appendChild( sceneContainer );
camera.position.z = 5;


}



function onWindowResize(){
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
 const loader = new GLTFLoader(); // to load 3d models

loader.load('log.glb', function (gltf){
    log = gltf.scene;
    log.position.set(0, -5, -25);
    log.scale.set(2,2,2);
    scene.add(log);
})

loader.load('tree2.glb', function (gltf){
    const tree = gltf.scene;
    tree.position.set(-5, 0, 0);
    scene.add(tree);
})
// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


function animate() {
    requestAnimationFrame(animate);

	cube.rotation.x += 0.007;
	cube.rotation.y += 0.007;

    cube.position.x = Math.sin(Date.now() / 2000) * 4;
    cube.position.x = Math.sin(Date.now() / 4000) * 4;
    cube.position.x = Math.sin(Date.now() / 5000) * 4;
    console.log(cube.position.x);

    if(log){
        log.rotation.x += 0.007;
        log.rotation.y += 0.007;
        log.rotation.z = Math.sin(Date.now() / 4000) * 4;
    }
  

	renderer.render( scene, camera );

}