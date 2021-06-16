import React from 'react'
import styled from 'styled-components'

const StyledCloseButton = styled.button`
cursor: pointer;
`

const CloseButton = () => {
  return (
    <StyledCloseButton>
      <img src="./assets/close.png" alt="" />
    </StyledCloseButton>
  )
}

export default CloseButton
