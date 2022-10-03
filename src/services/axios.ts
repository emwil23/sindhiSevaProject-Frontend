import axios from 'axios';

const serverUrl = {
    local: 'http://localhost:3003',
    heroku: 'https://sindhi-seva-app.herokuapp.com'
}

export default axios.create({
    baseURL: serverUrl.local
})