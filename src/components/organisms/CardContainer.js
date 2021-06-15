import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getCharacters } from '../../api/characters';

import Card from '../molecules/Card';

const StyledCardContainer = styled.div`
margin: 60px;
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1400px;
`

const CardContainer = () => {
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
          <Card key={item.id.toString()}>
            <h2>{item.name}</h2>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </Card>
        ))}
    </StyledCardContainer>
  );
}

export default CardContainer
