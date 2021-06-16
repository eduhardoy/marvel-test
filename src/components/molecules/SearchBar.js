import React from 'react'
import styled from 'styled-components'

const StyledSearchBar = styled.div`
width: 200px;
height: 100%;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 10px;
img{
width: 20px;
height: auto;
margin: 10px;
}

input{
  height: 80%;
  width: 160px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #ABABAB;
}
`

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <img src="./assets/loupe.png" alt="" />
      <input type="text" placeholder="Buscar"/>
    </StyledSearchBar>
  )
}

export default SearchBar
