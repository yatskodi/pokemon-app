import { Pokemon } from '../../types';
import styled from 'styled-components';
import { getImageSrc } from '../../utility';

type PokemonDetailProps = { pokemon: Pokemon };

export const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  const { name, attack, speed, defense, hp, special_attack, special_defense } =
    pokemon;

  return (
    <Container>
      <div className="img-wrapper">
        <img src={getImageSrc(name)} alt={name} />
      </div>
      <ul>
        <li>Name - {name}</li>
        <li>Attack - {attack}</li>
        <li>Speed - {speed}</li>
        <li>Defense - {defense}</li>
        <li>HP - {hp}</li>
        <li>Special Attack - {special_attack}</li>
        <li>Special Defense - {special_defense}</li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;

  .img-wrapper {
    width: 300px;
    margin-right: 40px;
  }

  img {
    max-width: 100%;
  }

  ul {
    font-size: 24px;
    list-style-type: none;
  }
`;
