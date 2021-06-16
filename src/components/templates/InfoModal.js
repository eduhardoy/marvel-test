import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
width: 100vw;
height: calc(100vh - 71px);
bottom: 0;
background-color: rgba(40, 40, 40, 0.6);
position: fixed;
z-index: 999;
display: flex;
justify-content: center;
align-items: center;
`
const Modal = styled.div`
width: 50%;
min-width: 320px;
height: 70%;
min-height: 500px;
background-color: white;
position: relative;
@media (max-width: 520px) {
    width: 100%;
    height: 100%;
  }
`

const StyledCloseButton = styled.button`
position: absolute;
top: 10px;
right: 20px;
background-color: transparent;
border: none;
outline: none;
width: 25px;
height: 25px;
img{
  width: 25px;
  height: 25px;
}
`

const InfoModal = ({children}) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(modalOpen);
    console.log(modalOpen);
  }, [modalOpen])

  return (
    <ModalBackground style={{display: modalOpen === true ? "flex" : "none"}} >
      <Modal >
      <StyledCloseButton onClick={()=> setModalOpen(false)}>
        <img src="./assets/close.png" alt="" />
      </StyledCloseButton>
        {children}
      </Modal>
    </ModalBackground>
  )
}

export default InfoModal
