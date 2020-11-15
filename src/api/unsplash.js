import axios from 'axios';

const ACCESS_KEY = 'j3UpBurFiZIKuoWVbjkYXitS5TeOULQCj61OPIabUvk';

const instance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
    },
});

export default instance;
