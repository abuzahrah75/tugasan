import axios from 'axios'


let mybase="http://albadr.abuzahrah.com";

if (window.location.hostname==="localhost"){
    mybase = "http://localhost:8081/";
}

const instance = axios.create({
    baseURL : mybase
});

export default instance;