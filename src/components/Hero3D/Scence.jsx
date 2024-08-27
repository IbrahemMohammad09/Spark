import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import Img from '../../images/HeroSectionImags/hero.jpg'

const Scene = () => {
  const canvasRef = useRef(null);
  const texture = new THREE.TextureLoader().load(Img);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    canvasRef.current && canvasRef.current.appendChild( renderer.domElement );

    const sphereGeometry = new THREE.SphereGeometry(1, 60, 60);
    // const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      map: texture, 
      transparent: true,
      // opacity: 0.5,
      side: THREE.DoubleSide 
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    sphere.scale.set(10, 10, 10);
    
    scene.add(sphere);
  
    const animate = () => {
      requestAnimationFrame(animate);
      // plane.rotation.x += 0.01;
      // plane.rotation.y += 0.01;
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={canvasRef} className='canvas'/>
  );
};

export default Scene;