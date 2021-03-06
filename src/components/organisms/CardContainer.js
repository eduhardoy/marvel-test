import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getCharacters } from '../../api/characters';
import FavButton from '../atoms/FavButton';

import Card from '../molecules/Card';
import InfoModal from '../templates/InfoModal';


const StyledCardContainer = styled.div`
margin: 40px;
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1400px;
`

const CardBackground = styled.div`
  height: 100%;
  width: 100%;
  img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`

const CardContainer = ({ openmodal }) => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    const setUp = async () => {
      const datos = await getCharacters();
      if (datos) {
        setCharacters(datos);
        console.log(datos)
      }
    };
    setUp();
  }, []);


  return (
    <StyledCardContainer>
        {characters?.data?.results?.map(item => (
          <Card key={item.id.toString()} onClick={openmodal}>
            <FavButton />
            <p>{item.name}</p>
            <CardBackground>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            </CardBackground>
            <InfoModal>
              <h1>{item.name}</h1>
            </InfoModal>
          </Card>
        ))}
    </StyledCardContainer>
  );
}

export default CardContainer
