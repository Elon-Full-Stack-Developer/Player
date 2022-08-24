import axios from 'axios';

const GetAll = (url) => axios.get(url);

const Add = (url, obj) => axios.post(url, obj);

export { GetAll, Add };