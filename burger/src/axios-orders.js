import axios from 'axios';

const instance = axios.create({
  baseURL: ' https://will-home-projects.firebaseio.com/',
});

export default instance;