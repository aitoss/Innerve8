import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { act, useFrame } from "@react-three/fiber";
import { Flex } from "@react-three/flex";

export default function Infinity(scale) {
  const ref = useRef();
  const modelPath = "src/assets/model/infinity2.glb";
  const { nodes, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, ref);

  //   console.log(ref.current)

  useEffect(() => {
    actions.loop.repetitions = Infinity;
    actions.loop.play();
  });
  console.log(scale);
  return (
    <>
      <Flex justifyContent="center">
        <primitive
          object={nodes.Scene}
          scale={scale.scale.scale}
          rotation={[0.0, 0, 0]}
          position={[0, 0, 0]}
          ref={ref}
        />
      </Flex>
    </>
  );
}