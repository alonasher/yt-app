import axios from 'axios';

const KEY ='AIzaSyDHmbmN7OEnvzDiLNrH6xvX4IxuNePOt58';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 5,
        key:KEY
    }
})
