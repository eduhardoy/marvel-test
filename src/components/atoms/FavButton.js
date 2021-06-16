import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledCardFavButton = styled.button`
position: absolute;
top: 5px;
right: 5px;
border: none;
outline: none;
background-color: transparent;
img{
  width: auto;
  height: 20px;
}
`

const FavButton = () => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(isFav);
  }, [isFav]);

  return (
    <div>
      <StyledCardFavButton onClick={() => {setIsFav(isFav === true ? false : true)}}>
        <img src="./assets/star.png" alt="" style={{display: isFav === true ? "none" : "flex"}}/>
        <img src="./assets/star2.png" alt="" style={{display: isFav === false ? "none" : "flex"}}/>
      </StyledCardFavButton>
    </div>
  )
}

export default FavButton
