import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useRender } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  canvas: {
    height: '100%',
    width: '100%',
    display: 'block',
  },
}))

const Headloader = () => {
  const headRef = useRef()
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load(process.env.PUBLIC_URL + '/scene.gltf', setModel)
  }, [])

  console.log(model)

  useRender(() => {
    headRef.current.rotation.y += 0.01
  })
  return (
    <mesh ref={headRef}>
      {model ? <primitive ref={headRef} object={model.scene} /> : null}
    </mesh>
  )
}

const Head = props => {
  const classes = useStyles()
  return (
    <Canvas className={classes.canvas} camera={{ position: [0, 0, 3] }}>
      <ambientLight />
      <spotLight position={[0, 5, 10]} />
      <Headloader />
    </Canvas>
  )
}

export default Head
