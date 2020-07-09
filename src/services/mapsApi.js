import axios from 'axios';

const mapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/nearbysearch',
});
const apiKey = 'AIzaSyAlYXSA6WpzNuuNsMIDhUg7xH3s0dyPEdQ';

const searchStores = (coordinates) =>
  mapsApi.get(
    `/json?location=${coordinates.latitude},${coordinates.longitude}&radius=6000&name=comic&key=${apiKey}`,
  );

export { searchStores };
