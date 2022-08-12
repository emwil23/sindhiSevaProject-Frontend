import axios from 'axios';

const serverUrl = {
    local: 'http://localhost:3000',
    heroku: 'https://sindhi-seva-app.herokuapp.com'
}

export default axios.create({
    baseURL: serverUrl.heroku
})