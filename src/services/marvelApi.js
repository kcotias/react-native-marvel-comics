import axios from 'axios';
import md5 from 'md5';

const ts = 1;
const privateKey = 'ca59c04feb1d2f40c293f7491aa591ee20a46e5a';
const publicKey = 'a9c582039daeb5842c6a4b0add83f13a';
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

const searchHero = (hero) =>
  api.get(`/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);

const searchComics = (heroId) =>
  api.get(
    `/characters/${heroId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`,
  );

export { searchHero, searchComics };
