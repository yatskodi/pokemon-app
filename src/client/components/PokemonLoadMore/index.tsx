import { useRef, useEffect } from 'react';
import { useCount, countUpdated, useAppDispatch, useSearch } from '../../store';
import { useInViewPort } from '../../utility';
import styled from 'styled-components';

export const PokemonLoadMore = () => {
  const count = useCount();
  const search = useSearch();
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const inViewport = useInViewPort(targetRef, { threshold: 0.5 });

  const loadMore = () => {
    const action = countUpdated((count + 20).toString());
    dispatch(action);
  };

  useEffect(() => {
    if (inViewport && search === '') {
      loadMore();
    }
  }, [inViewport]);

  return <Container ref={targetRef}></Container>;
};

const Container = styled.div`
  height: '200px';
`;
