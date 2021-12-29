import axios from 'axios';

const KEY ='AIzaSyBT3dB-0rmrwe8xR1xqu7ZgFiYb9nxkBG4';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params:{
part:'snippet',
maxResult:5,
key: KEY
}
});