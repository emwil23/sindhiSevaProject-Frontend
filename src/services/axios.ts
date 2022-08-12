import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000' || 'https://sindhi-seva-app.herokuapp.com'
})