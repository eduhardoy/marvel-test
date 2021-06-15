export const getCharacters = async queries => {
  try {
    const data = await fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=7a82f536e504ab8764a01bc3d205c2b1`
    );
    const characters = await data.json();
    return characters;
  } catch (error) {
    console.error(error);
    return null;
  }
};
