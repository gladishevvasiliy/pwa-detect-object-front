import React from 'react'
import { NavBar } from 'antd-mobile'
import styled from 'styled-components'

const StyledNavBar = styled(NavBar)`
  position: absolute;
  top: 0;
  width: 100%;
`

export const Header = () => (
  <StyledNavBar mode="dark">Распознавание файла</StyledNavBar>
)

