import React, {
  Suspense, useRef, useState, useEffect,
} from 'react';
import { Canvas } from 'react-three-fiber';
import { ContactShadows, useGLTF, OrbitControls } from 'drei';
import { proxy, useProxy } from 'valtio';
import './index.css';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip,
} from 'recharts';

import Widget from './Widget/index';

const data = [
  { name: 'Page A', increment: 200 },
  { name: 'Page B', increment: 1000 },
  { name: 'Page C', increment: 600 },
  { name: 'Page D', increment: 1600 },
  { name: 'Page D', increment: 1000 },
  { name: 'Page H', increment: 2260 },
  { name: 'Page K', increment: 400 },
];

const state = proxy({
  current: null,
  items: {
    capteur: '#ffffff',
    capteurr: '#ffffff',
  },
});

function Building() {
  const ref = useRef();
  const snap = useProxy(state);
  const { nodes, materials } = useGLTF('/static/3d/untitled.glb');

  // Cursor showing current color
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = '<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>';
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto,
    )}'), auto`;
  }, [hovered, snap.items]);

    return (
      <group ref={ref}  dispose={null} 
      onPointerOver={(e) => {
        e.stopPropagation();
        set(e.object.material.name);
      }}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => {
        e.stopPropagation();
        state.current = e.object.material.name;
      }}>
        <group position={[0.02, 0.05, 0.06]}>
          <mesh material={materials.Wood} geometry={nodes.Door001.geometry} position={[-0.96, 2.25, -1.63]} />
          <mesh material={materials.Wood} geometry={nodes.Door002.geometry} position={[0.15, 2.14, -1.61]} />
          <mesh material={materials.Wood} geometry={nodes.Door003.geometry} position={[-2.09, 2.25, -2.95]} />
          <group position={[3.85, 2.25, -1.85]}>
            <mesh material={materials.Wood} geometry={nodes.Door005_1.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Door005_2.geometry} />
          </group>
          <mesh material={materials.Wood} geometry={nodes.Door016.geometry} position={[0.51, 2.25, 3.39]} />
          <mesh material={materials.Wood} geometry={nodes.DoorFrame.geometry} position={[0.98, 1.2, 3.46]} />
          <mesh material={materials.Wood} geometry={nodes.DoorFrame001.geometry} position={[-1.35, 1.2, -1.61]} />
          <mesh material={materials.Wood} geometry={nodes.DoorFrame002.geometry} position={[-0.22, 1.2, -1.61]} />
          <mesh material={materials.Wood} geometry={nodes.DoorFrame005.geometry} position={[3.87, 1.2, -2.25]} />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Back001.geometry}
            position={[-1.48, 2.25, -2.14]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Back003.geometry}
            position={[-1.69, 2.25, -3.36]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Back005.geometry}
            position={[3.86, 2.25, -2.59]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Back016.geometry}
            position={[1.39, 2.25, 3.39]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Front001.geometry}
            position={[-1.49, 2.25, -2.14]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Front002.geometry}
            position={[-0.34, 2.22, -2.15]}
            rotation={[-2.56, 0.84, 2.66]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Front003.geometry}
            position={[-1.7, 2.25, -3.37]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Front005.geometry}
            position={[3.86, 2.25, -2.59]}
          />
          <mesh
            material={materials.Handle_material}
            geometry={nodes.Handle_Front016.geometry}
            position={[1.39, 2.25, 3.49]}
          />
          <group position={[4.24, 1.2, 4.62]}>
            <mesh material={materials.PlainRedBricks_1K} geometry={nodes.Plane018.geometry} />
            <mesh material={materials.Concrete_obruby} geometry={nodes.Plane018_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Plane018_2.geometry} />
          </group>
          <group position={[4.16, 1.2, -1.96]}>
            <mesh material={materials.PlainRedBricks_1K} geometry={nodes.Plane019.geometry} />
            <mesh material={materials.Concrete_obruby} geometry={nodes.Plane019_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Plane019_2.geometry} />
          </group>
          <group position={[3.78, 2.7, 2.02]}>
            <mesh material={materials['stucco yellow outdoor']} geometry={nodes.Cube002.geometry} />
            <mesh material={materials.PlainRedBricks_1K} geometry={nodes.Cube002_1.geometry} />
            <mesh material={materials['stucco indoor']} geometry={nodes.Cube002_2.geometry} />
            <mesh material={materials['stucco dark']} geometry={nodes.Cube002_3.geometry} />
          </group>
          <group position={[-2.32, 1.68, 5.39]}>
            <mesh material={materials.Wood} geometry={nodes.Window001_1.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window001_2.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window001_3.geometry} />
          </group>
          <group position={[-3.68, 1.68, 5.13]}>
            <mesh material={materials.Wood} geometry={nodes.Window002_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window002_2.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window002_3.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window002_4.geometry} />
          </group>
          <group position={[-0.95, 1.68, 5.13]}>
            <mesh material={materials.Wood} geometry={nodes.Window003_1.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window003_2.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window003_3.geometry} />
          </group>
          <group position={[-5.03, 2.13, -3.38]}>
            <mesh material={materials.Wood} geometry={nodes.Window004.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window004_1.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window004_2.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window004_3.geometry} />
          </group>
          <group position={[-2.58, 2.13, -4.96]}>
            <mesh material={materials.Wood} geometry={nodes.Window008_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window008_2.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window008_3.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window008_4.geometry} />
          </group>
          <group position={[-1.4, 2.43, -4.96]}>
            <mesh material={materials.Wood} geometry={nodes.Window009_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window009_2.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window009_3.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window009_4.geometry} />
          </group>
          <group position={[1.47, 2.43, -4.98]}>
            <mesh material={materials.Wood} geometry={nodes.Window010_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window010_2.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window010_3.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window010_4.geometry} />
          </group>
          <group position={[3.83, 2.13, -0.32]}>
            <mesh material={materials.Wood} geometry={nodes.Window012.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window012_1.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window012_2.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window012_3.geometry} />
          </group>
          <group position={[2.43, 2.13, 3.56]}>
            <mesh material={materials.Wood} geometry={nodes.Window013.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window013_1.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window013_2.geometry} />
          </group>
          <group position={[-5.03, 2.13, 2.69]}>
            <mesh material={materials.Wood} geometry={nodes.Window026_1.geometry} />
            <mesh material={materials.Wood} geometry={nodes.Window026_2.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window026_3.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window026_4.geometry} />
          </group>
          <group position={[-5, 2.43, -0.57]}>
            <mesh material={materials.Wood} geometry={nodes.Window036.geometry} />
            <mesh material={materials.Glass} geometry={nodes.Window036_1.geometry} />
            <mesh material={materials.pozink} geometry={nodes.Window036_2.geometry} />
          </group>
        </group>
        <mesh
          material={nodes.Cube.material}
          geometry={nodes.Cube.geometry}
          position={[-0.9, 0.11, 0.06]}
          rotation={[0.01, 0, 1.59]}
          scale={[-0.33, 6.64, 8.13]}
        />
      </group>
  );
}

function Picker() {
  const snap = useProxy(state);
  return (
    <div style={{ display: snap.current ? 'block' : 'none' }}>
        <div className="picker">
          <Widget title={snap.current} styleName="gx-card-full">
            <div className="gx-actchart gx-px-3 gx-pt-3 gx-pb-2 gx-d-flex gx-flex-row">
              <h2 className="gx-mb-0 gx-mr-2 gx-fs-lg">
                84%
                {' '}
                <i className="icon icon-menu-up gx-fs-sm" />
              </h2>
              <p className="gx-mb-0 gx-text-grey gx-fs-sm">
                Increment in Active users
              </p>
            </div>
            <ResponsiveContainer width="100%" height={60}>
              <AreaChart
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Tooltip />
                <defs>
                  <linearGradient id="color07" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="5%" stopColor="#FF557F" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#6757DE" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="increment"
                  stackId="2"
                  strokeWidth={0}
                  stroke="#4D95F3"
                  fill="url(#color07)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Widget>
        </div>
    </div>
  );
}

export default function CubeCanvas() {
  return (
    <>
      <Canvas
        concurrent
        pixelRatio={[1, 2]}
        camera={{ position: [10, 10, 10] }}
      >
        <ambientLight intensity={0.3} />
        <spotLight
          intensity={0.3}
          angle={0.1}
          penumbra={1}
          position={[5, 25, 20]}
        />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <Building />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={2}
            far={1}
          />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <Picker />
    </>
  );
}
