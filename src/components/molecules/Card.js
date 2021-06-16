import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
width: 280px;
height: 400px;
margin: 10px;
position: relative;
border: 3px solid #e6e6e6;
cursor: pointer;
p{
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-weight: bolder;
  color: white;
  font-size: 20px;
  text-shadow: 0px 0px 12px #000000;
  font-family: 'Quantico', sans-serif;
}
`

const Card = ({children}) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card
