import React, { Fragment, useRef, useState } from 'react'
import { Camera } from 'react-cam'



export const CameraComponent = () => {
  const cam = useRef(null);
  const [images, addImage] = useState([]);
  const capture = (imgSrc) => {
    console.log(imgSrc)
    addImage([...images, imgSrc])
  }
  console.log({ images })
  return (
    <Fragment>
      <button onClick={img => cam.current.capture(img)}>Take image</button>
      <div style={{ display: 'flex' }}>
        {images.map(img => <div><img src={img} alt="image from camera" /></div>)}
      </div>
      <Camera
        // showFocus={true}
        // front={true}
        capture={capture}
        ref={cam}
        width="400px"
        height="auto"
      // focusWidth="80%"
      // focusHeight="60%"
      // btnColor="white"
      />

    </Fragment>
  )
}