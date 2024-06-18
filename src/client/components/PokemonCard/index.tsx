import { Link } from '@tanstack/react-router';
import { Pokemon } from '../../types';
import { getImageSrc } from '../../utility';
import styled from 'styled-components';

type Props = {
  pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon }: Props) => {
  const { name, id } = pokemon;
  const linkTo = '/pokemon/$id';

  return (
    <Container>
      <Link to={linkTo} params={{ id: id.toString() }}>
        <img src={getImageSrc(name)} alt={name} />
        <h3>{name}</h3>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 5%;
  overflow: hidden;

  a {
    display: block;
    background: transparent;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  h3 {
    padding-bottom: 10px;
  }
`;
