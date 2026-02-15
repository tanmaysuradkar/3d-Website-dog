import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {ScrollTrigger} from "gsap/ScrollTrigger"
const model = () => {
  const models = useGLTF("/Models/dog.drc.glb");
  useThree(({ camera, gl }) => {
    camera.position.z = 1;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(models.animations, models.scene);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const [normalMap, sampleMatCap, branchesMap, BranchesNormalMatCap] =useTexture([ "/dog_normals.jpg", "matcap/mat-1.png", "/branches_diffuse.jpeg", "branches_normals.jpeg",]).map((textures) => {
      textures.flipY = false;
      textures.colorSpace = THREE.SRGBColorSpace;
      return textures;
    });

  models.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = new THREE.MeshMatcapMaterial({
        normalMap: normalMap,
        matcap: sampleMatCap,
      });
    } else {
      child.material = new THREE.MeshMatcapMaterial({
        normalMap: BranchesNormalMatCap ,
        map: branchesMap
      });
    }
  });

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  const dogModel = useRef()
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#section-1",
        endTrigger:"#section-4",
        start:"top top",
        end:"top top",
        scrub:true
      }
    })

    tl.to()
  })
  return (
    <>
      <primitive
        object={models.scene}
        position={[0.2, -0.5, 0]}
        rotation={[0, Math.PI / 2.5, 0]}
      />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
      {/* <OrbitControls /> */}
    </>
  );
};

export default model;
