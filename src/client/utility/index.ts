import { API_HOST } from '../api';

export const getImageSrc = (name: string) =>
  `${API_HOST}/assets/${name.toLowerCase()}.jpg`;
