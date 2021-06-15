import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
width: 250px;
height: 400px;
margin: 10px;
position: relative;
border: 3px solid #e6e6e6;
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
h2{
  position: absolute;
  bottom: 5px;
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
