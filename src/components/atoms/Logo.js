import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
img{
  margin: 15px;
  height: 30px;
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="" />
    </LogoContainer>
  )
}

export default Logo
