import axios from 'axios';

// const devURL = 'http://localhost:3000';
const herokuURL = 'https://sindhi-seva-app.herokuapp.com'

export default axios.create({
    baseURL: herokuURL
})