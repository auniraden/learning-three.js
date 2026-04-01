//console.log("Javascript is working")
import * as THREE from 'three'
//console.log(THREE)

//Canvas - usually write this after import cause it's easy to see the DOM element canvas later
 const canvas = document.querySelector('canvas.webgl');

//Scene [object]
const scene = new THREE.Scene();

//Mesh: a mix of the shape and how it looks
 //Geometry-shape
 const geometry = new THREE.BoxGeometry(1,1,1);
 const material = new THREE.MeshBasicMaterial({color: 0xff0000});
 const mesh = new THREE.Mesh(geometry, material);

 scene.add(mesh);

 //Sizes
 const sizes = {
    width: 800,
    height: 600
 }

 //Camera - to create POV; there are 2 parameters 1. field of view (far/near) 2. aspect ratio (frame)
 // usually for web field of view = 35
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  //all object have position (that include the camera & shape(mesh)) z = through +ve backward, -ve forward
  camera.position.z = 3;
  scene.add(camera); //adding camera to scene is optional but might result in bugs when getting more complex


//Renderer; use WebGLRenderer to render webgl
//instantiate WebGLRenderer class and send an object with a canvas property

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//update size to the renderer
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
