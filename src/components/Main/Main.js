import React, { useState } from 'react'
import { StyledMain, StyledInput, StyledButton, ImageContainer } from './MainStyles'
import { Header } from '../Header'
import { fileToBase64 } from '../../utils';
import 'antd-mobile/dist/antd-mobile.css'


export const Main = (props) => {
  const [image, setImage] = useState()
  const { startLoading, imageDetectingProcess } = props
  const { isLoading } = imageDetectingProcess || {}

  const uploadFile = () => (e) => {
    fileToBase64(e.target.files[0], (fileBase64) => {
      setImage(fileBase64);
      startLoading(fileBase64)
    })
  }

  return (
    <StyledMain>
      <Header />
      <ImageContainer>
        {isLoading ? "loading" : <img src={image} alt="img" />}
      </ImageContainer>
      <label htmlFor="uploadImage">
        <StyledButton type="primary">
          Загрузить фото
      </StyledButton>
      </label>
      <StyledInput type="file" id="uploadImage" onChange={uploadFile()} />
    </StyledMain>);

}
