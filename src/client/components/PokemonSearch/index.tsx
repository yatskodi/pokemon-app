import { useSearch, store, searchUpdated, searchReset } from '../../store';
import styled from 'styled-components';

export const PokemonSearch = () => {
  const search = useSearch();
  const { dispatch } = store;
  const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchUpdated(e.target.value));
  };
  const onClickHandler = () => dispatch(searchReset());

  return (
    <Container>
      <input
        placeholder="Search for a Pokemon"
        value={search}
        onChange={onChangeHadler}
      />
      <button onClick={onClickHandler}>Reset</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 500px;
  height: 55px;
  margin: 0 auto;
  font-size: 22px;

  input {
    background: #fff;
    height: 100%;
    width: 100%;
    padding: 15px 0 15px 25px;
    color: #000;
    font-size: inherit;
  }

  button {
    width: 200px;
    heigth: 100%;
    background: #abb7bf;
    margin-left: 20px;
    font-size: inherit;
    cursor: pointer;
    transition: all ease 0.2s;
  }

  button:hover {
    background: #fff;
    color: #000;
  }
`;
