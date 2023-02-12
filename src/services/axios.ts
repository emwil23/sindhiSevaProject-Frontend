import axios from 'axios';

const serverUrl = {
    local: 'http://localhost:3003',
    render: 'https://sfob-api.onrender.com'
}

export default axios.create({
    baseURL: serverUrl.render
})