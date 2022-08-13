import axios from 'axios';

<<<<<<< HEAD
// const devURL = 'http://localhost:3000';
const herokuURL = 'https://sindhi-seva-app.herokuapp.com'

export default axios.create({
    baseURL: herokuURL
=======
const serverUrl = {
    local: 'http://localhost:3000',
    heroku: 'https://sindhi-seva-app.herokuapp.com'
}

export default axios.create({
    baseURL: serverUrl.heroku
>>>>>>> 86966552f672b84907d9e29d746e8d4af606d0c1
})