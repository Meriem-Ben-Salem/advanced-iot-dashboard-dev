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

//*******************Building*******************//
function Building() {
  const ref = useRef();
  const snap = useProxy(state);
  const { nodes, materials } = useGLTF('/static/3d/untitled.glb');

//*******************Cursor showing current color*******************//
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = '<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>';
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto,
    )}'), auto`;
  }, [hovered, snap.items]);

//*******************Geometries && Materials*******************//
  return (
    <group ref={ref} dispose={null}
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

      <mesh
        material={nodes.Cylinder.material}
        geometry={nodes.Cylinder.geometry}
        position={[0.41, 3.18, -4.65]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.34, 0.24, 0.52]}
      />
      <group position={[-5, 2.43, -0.57]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window032.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window032_1.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window032_2.geometry} />
      </group>
      <group position={[-5.03, 2.13, 2.69]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window031.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window031_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window031_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window031_3.geometry} />
      </group>
      <group position={[2.43, 2.13, 3.56]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window018.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window018_1.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window018_2.geometry} />
      </group>
      <group position={[3.83, 2.13, -0.32]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window017.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window017_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window017_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window017_3.geometry} />
      </group>
      <group position={[1.47, 2.43, -4.98]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window016.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window016_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window016_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window016_3.geometry} />
      </group>
      <group position={[-1.4, 2.43, -4.96]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window015.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window015_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window015_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window015_3.geometry} />
      </group>
      <group position={[-2.58, 2.13, -4.96]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window014.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window014_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window014_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window014_3.geometry} />
      </group>
      <group position={[-5.03, 2.13, -3.38]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window011.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window011_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window011_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window011_3.geometry} />
      </group>
      <group position={[-0.95, 1.68, 5.13]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window007_1.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window007_2.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window007_3.geometry} />
      </group>
      <group position={[-3.68, 1.68, 5.13]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window006_1.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Window006_2.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window006_3.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window006_4.geometry} />
      </group>
      <group position={[-2.32, 1.68, 5.39]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Window005.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Window005_1.geometry} />
        <mesh material={materials['pozink.001']} geometry={nodes.Window005_2.geometry} />
      </group>
      <group position={[4.09, 2.7, 2.02]}>
        <mesh material={materials['stucco yellow outdoor.001']} geometry={nodes.Cube.geometry} />
        <mesh material={materials['PlainRedBricks_1K.001']} geometry={nodes.Cube_1.geometry} />
        <mesh material={materials['stucco indoor.001']} geometry={nodes.Cube_2.geometry} />
        <mesh material={materials['stucco dark.001']} geometry={nodes.Cube_3.geometry} />
      </group>
      <group position={[1.16, 0, 6.65]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Stairs006.geometry} />
        <mesh material={materials['Concrete_obruby.001']} geometry={nodes.Stairs006_1.geometry} />
      </group>
      <group position={[4.16, 1.2, -1.96]}>
        <mesh material={materials['PlainRedBricks_1K.001']} geometry={nodes.Plane006.geometry} />
        <mesh material={materials['Concrete_obruby.001']} geometry={nodes.Plane006_1.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Plane006_2.geometry} />
      </group>
      <group position={[4.24, 1.2, 4.62]}>
        <mesh material={materials['PlainRedBricks_1K.001']} geometry={nodes.Plane005.geometry} />
        <mesh material={materials['Concrete_obruby.001']} geometry={nodes.Plane005_1.geometry} />
        <mesh material={materials['Wood.001']} geometry={nodes.Plane005_2.geometry} />
      </group>
      <mesh
        material={materials.MarbleFloorTiles_1K}
        geometry={nodes.Plane004.geometry}
        position={[-4.11, 1.2, -0.97]}
      />
      <mesh
        material={materials.MarbleFloorTiles_1K}
        geometry={nodes.Plane003.geometry}
        position={[-1.41, 1.2, -3.97]}
      />
      <mesh material={materials.Parquetlight_1K} geometry={nodes.Plane002.geometry} position={[-3.04, 1.2, -3.25]} />
      <mesh
        material={materials['Concrete_obruby.001']}
        geometry={nodes.Plane001.geometry}
        position={[0.33, 1.2, -3.8]}
      />
      <mesh material={materials.Parquetlight_1K} geometry={nodes.Plane.geometry} position={[-3.87, 1.2, 1.66]} />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Front005.geometry}
        position={[3.86, 2.25, -2.59]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Front004.geometry}
        position={[-2.98, 2.25, -1.1]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Front003.geometry}
        position={[-1.7, 2.25, -3.37]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Front002.geometry}
        position={[-0.09, 2.25, -2.14]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Front001.geometry}
        position={[-1.49, 2.25, -2.14]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Back005.geometry}
        position={[3.86, 2.25, -2.59]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Back004.geometry}
        position={[-2.99, 2.25, -1.11]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Back003.geometry}
        position={[-1.69, 2.25, -3.36]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Back002.geometry}
        position={[-0.1, 2.25, -2.14]}
      />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Handle_Back001.geometry}
        position={[-1.48, 2.25, -2.14]}
      />
      <mesh material={materials['Wood.001']} geometry={nodes.DoorFrame005.geometry} position={[3.87, 1.2, -2.25]} />
      <mesh material={materials['Wood.001']} geometry={nodes.DoorFrame004.geometry} position={[-2.58, 1.2, -1.2]} />
      <mesh material={materials['Wood.001']} geometry={nodes.DoorFrame003.geometry} position={[-2.1, 1.2, -3.28]} />
      <mesh material={materials['Wood.001']} geometry={nodes.DoorFrame002.geometry} position={[-0.22, 1.2, -1.61]} />
      <mesh material={materials['Wood.001']} geometry={nodes.DoorFrame001.geometry} position={[-1.35, 1.2, -1.61]} />
      <group position={[3.85, 2.25, -1.85]}>
        <mesh material={materials['Wood.001']} geometry={nodes.Door009.geometry} />
        <mesh material={materials['Glass.001']} geometry={nodes.Door009_1.geometry} />
      </group>
      <mesh material={materials['Wood.001']} geometry={nodes.Door004.geometry} position={[-2.59, 2.25, -1.52]} />
      <mesh material={materials['Wood.001']} geometry={nodes.Door003.geometry} position={[-2.09, 2.25, -2.95]} />
      <mesh material={materials['Wood.001']} geometry={nodes.Door002.geometry} position={[-0.62, 2.25, -1.63]} />
      <mesh material={materials['Wood.001']} geometry={nodes.Door001.geometry} position={[-0.96, 2.25, -1.63]} />
      <mesh
        material={materials['Handle_material.001']}
        geometry={nodes.Cube033.geometry}
        position={[4.36, 1.35, -3.37]}
      />
      <mesh material={materials['Wood.001']} geometry={nodes.Cube012.geometry} position={[1.96, 1.32, 4.9]} />
      <mesh
        material={materials['Concrete_obruby.001']}
        geometry={nodes.Cube005.geometry}
        position={[0.41, 0.41, 5.68]}
      />
      <mesh
        material={materials['Concrete_obruby.001']}
        geometry={nodes.Cube004.geometry}
        position={[1.91, 0.41, 5.68]}
      />
      <mesh material={materials['stucco indoor.001']} geometry={nodes.Cube001.geometry} position={[3.78, 2.7, 2.02]} />
      <group position={[-4.58, 3.78, 1.48]} rotation={[0, 0, 1.65]} scale={[1.07, 0.18, 0.89]}>
        <mesh material={materials['Iron Touched']} geometry={nodes.Sphere.geometry} />
        <mesh material={materials['plastic touched']} geometry={nodes.Sphere_1.geometry} />
      </group>
      <group position={[-4.57, 3.52, -1.25]} rotation={[0, 0, 1.65]} scale={[1.07, 0.18, 0.89]}>
        <mesh material={materials['Iron Touched']} geometry={nodes.Sphere003.geometry} />
        <mesh material={materials['plastic touched']} geometry={nodes.Sphere003_1.geometry} />
      </group>
    </group>
  );
}

//*******************Pick objects when we the mouse is moved*******************//
function Picker() {
  const snap = useProxy(state);
  console.log('heeey', snap.current);
  return (
    <div style={{ display: snap.current ? 'block' : 'none' }}>
      {snap.current === 'Iron Touched' ? (
        <div className="picker">
          <Widget title={snap.current} styleName="gx-card-full">
            <div className="gx-actchart gx-px-3 gx-pt-3 gx-pb-2 gx-d-flex gx-flex-row">
              <h2 className="gx-mb-0 gx-mr-2 gx-fs-lg">
                38%
                {''}
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
      ) : null}
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
