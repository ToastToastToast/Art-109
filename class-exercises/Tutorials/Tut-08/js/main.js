// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'https://unpkg.com/three@0.162.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.162.0/examples/jsm/loaders/GLTFLoader.js'; // to load 3d models

//Global variables ---------------
let scene, camera, renderer, cube, capsule;
let sceneContainer = document.querySelector('#scene-container');

function init(){
// ~~~~~~~~~~~~~~~~Create scene here~~~~~~~~~~~~~~~~
scene = new THREE.Scene();

//lighting
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(1, 1, 5);
scene.add(light);

const helper = new THREE.DirectionalLightHelper(light, 4);
scene.add(helper);


camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
renderer.setAnimationLoop( animate );
sceneContainer.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry2 = new THREE.CapsuleGeometry(1, 0.5, 6, 5);

const texture = new THREE.TextureLoader().load('textures/ice-texture.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture})
cube = new THREE.Mesh( geometry, material );
capsule = new THREE.Mesh(geometry2, material);
cube.position.set(3,3,3);
capsule.position.set(-3,-3,-3);
scene.add( cube );
scene.add( capsule);

camera.position.z = 5;


}

function animate() {
    requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);
 const loader = new GLTFLoader(); // to load 3d models

loader.load('log.glb', function (gltf){
    const log = gltf.scene;
    log.position.set(-5, 0, 0);
    scene.add(log);
})

loader.load('tree2.glb', function (gltf){
    const tree = gltf.scene;
    tree.position.set(-5, 0, 0);
    scene.add(tree);
})
// →→→→→→ Follow next steps in tutorial: // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


