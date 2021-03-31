import axios from 'axios';

export default axios.create({
  baseURL: "https://things.sofia-networks.com/api",
  headers: {
    'Content-Type': 'application/json',
  }
});
