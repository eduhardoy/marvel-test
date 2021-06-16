import React from 'react'
import styled from 'styled-components'
import Logo from '../atoms/Logo'
import SearchBar from '../molecules/SearchBar'

const StyledHeader = styled.header`
display: flex;
align-items: center;
height: 70px;
width: 100%;
background-color: white;
border-bottom: 1px #e6e6e6 solid;
position: sticky;
top: 0;
z-index: 999;
`

const SideSpace = styled.div`
height: 35px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
border-right: 2px #e6e6e6 solid;
`

const NoneSpace = styled.div`
height: 35px;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
border-left: 2px #e6e6e6 solid;
@media (max-width: 450px) {
    display: none !important;
  }
`

const ToolsWrapper = styled.div`
position: relative;
height: 100%;
width: calc(100% - 200px);
display: flex;
justify-content: flex-start;
align-items: center;
@media (max-width: 450px) {
  width: calc(100% - 100px);
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <SideSpace>
        <Logo />
      </SideSpace>
      <ToolsWrapper>
        <SearchBar />
      </ToolsWrapper>
      <NoneSpace/>
    </StyledHeader>
  )
}

export default Header
