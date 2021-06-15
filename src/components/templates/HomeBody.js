import React from 'react'
import styled from 'styled-components'

import CardContainer from '../organisms/CardContainer'

const StyledHomeBody = styled.div`
    background-color: #f6f7f9;
    display: flex;
    justify-content: center;
    `

const HomeBody = () => {
  return (
    <StyledHomeBody>
      <CardContainer />
    </StyledHomeBody>
  )
}

export default HomeBody
