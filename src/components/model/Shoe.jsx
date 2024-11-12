import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { models } from "../../../public";
import Loader from "../Loader"; 
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { EffectComposer } from "@react-three/postprocessing";
import SliderBanner from "./SliderBanner";
const modelSettings = new Map([
  ["/jordan3/scene.gltf", { scale: 24.0, positionY: -3.40, positionX: 0, positionZ: 0 }],
  ["/jordan2/scene.gltf", { scale: 24, positionY: -1.30, positionX: 0, positionZ: 0 }],
  ["/jordan/scene.gltf", { scale: 0.70, positionY: -2, positionX: 0, positionZ: 0 }],
]);

function Shoe({ model }) {
  const { scene } = useGLTF(model.path, true);
  const settings = modelSettings.get(model.path) || { scale: 1, positionY: 0, positionX: 0, positionZ: 0 };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let scale = settings.scale;
      let positionX = settings.positionX;
      let positionY = settings.positionY;
      let positionZ = settings.positionZ;

      // Adjust scale and positions if screen width is less than 650px
      if (width < 650) {
        scale *= 0.47; // Reduce scale
        positionY *= 0.4; // Adjust Y position to keep the model centered vertically
        // Optionally adjust positionX and positionZ to center horizontally
      }

      scene.scale.set(scale, scale, scale);
      scene.position.set(positionX, positionY, positionZ);
      scene.needsUpdate = true;
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize); // Add listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, [model.path, scene, settings]);

  return (
    <primitive
      key={model.path}
      object={scene}
      rotation={[0, 0, 0]} // adjust if needed
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
    // console.log("Current Model Index:", currentModelIndex);
  }, [currentModelIndex]);

  return (
    <div>
      <div >
<SliderBanner/>
      </div>
      <div className="relative overflow-hidden z-10  ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentModelIndex * 100}%)` }}
      >
        {models.map((model, index) => (
          <div key={model.path} className="flex-shrink-0 w-full">
            <Canvas shadows style={{ height: "60vh", width: "100%" }}>
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
                scale={[20, 20, 20]} 
                blur={0.9} 
                far={5.5} 
              />
              <Environment preset="sunset" />
              <OrbitControls
                autoRotate
                enableZoom={false}
                enablePan={true}  // Allow panning up and down
                // maxPolarAngle={Math.PI}  // Allow full vertical rotation
                // minPolarAngle={0}  // Allow full vertical rotation
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotateSpeed={3}
              />
              <Suspense fallback={<Loader />}>
                <Shoe model={model} />
              </Suspense>
              <EffectComposer>
                {/* Add post-processing effects here */}
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
    </div>
  );
};

export default ShoeCanvas;
