import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { models } from "../../../public";
import Loader from "../Loader"; 
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { EffectComposer } from "@react-three/postprocessing";

const modelSettings = new Map([
  ["/jordan/scene.gltf", { scale: 0.70, positionY: -2 }],
  ["/jordan3/scene.gltf", { scale: 24.0, positionY: -3.40 }],
  ["/jordan2/scene.gltf", { scale: 24, positionY: -1.30 }],
  // ["/air/scene.gltf",{ scale:10, positionY:-2}],
]);

function Shoe({ model }) {
  const { scene } = useGLTF(model.path, true);
  const settings = modelSettings.get(model.path) || { scale: 1, positionY: 0 };

  useEffect(() => {
    console.log("Loading model:", model.path);
    scene.scale.set(settings.scale, settings.scale, settings.scale);
    scene.position.y = settings.positionY;
    scene.needsUpdate = true;
  }, [model.path, scene, settings]);

  return (
    <primitive
      key={model.path}
      object={scene}
      rotation={[0, 0, 0]} // can update 
    />
  );
}

const ShoeCanvas = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleNext = () => {
    setCurrentModelIndex(prevIndex => (prevIndex === models.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentModelIndex(prevIndex => (prevIndex === 0 ? models.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    console.log("Current Model Index:", currentModelIndex);
  }, [currentModelIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentModelIndex * 100}%)` }}
      >
        {models.map((model, index) => (
          <div key={model.path} className="flex-shrink-0 w-full">
            <Canvas shadows style={{ height: "90vh", width: "100%" }}>
              <PerspectiveCamera makeDefault position={[4, 5, 6]} />
              
              <ambientLight intensity={0.001} />
              <spotLight 
                castShadow 
                intensity={1.5} 
                position={[15, 20, 10]} 
                angle={0.3} 
                penumbra={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <ContactShadows 
                position={[0, -1.8, 0]} 
                opacity={0.75} 
                scale={10} 
                blur={2.5} 
                far={2.5} 
              />
              <Environment preset="sunset" />
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotateSpeed={2}
              />
              <Suspense fallback={<Loader />}>
                <Shoe model={model} />
              </Suspense>
              <EffectComposer>
                {/* <Bloom intensity={0.5} luminanceThreshold={0.2} luminanceSmoothing={1} /> */}
              </EffectComposer>
            </Canvas>
          </div>
        ))}
      </div>
      <button
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full p-2 bg-transparent text-gray-500 cursor-pointer"
        onClick={handlePrev}
      >
        <BsChevronCompactLeft size={50} />
      </button>
      <button
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 bg-transparent text-gray-500 cursor-pointer"
        onClick={handleNext}
      >
        <BsChevronCompactRight size={50} />
      </button>
    </div>
  );
};

export default ShoeCanvas;
