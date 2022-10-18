import axios from 'axios';

const serverUrl = {
    local: 'http://localhost:3003',
    heroku: 'https://sfob-backend.herokuapp.com'
}

export default axios.create({
    baseURL: serverUrl.heroku
})