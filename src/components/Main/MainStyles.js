import styled from 'styled-components'
import { Button } from 'antd-mobile'


export const StyledMain = styled.div`
  height: 100vh;
`
export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  width: 100%;
`
export const StyledInput = styled.input`
  display: none
`
export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50%;
  }
`

