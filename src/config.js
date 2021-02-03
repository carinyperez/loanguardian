import axios from 'axios'; 

const AUTH_TOKEN = {
    apiKey: '4f518b811ecaf84d792f7546944f9589',
    apiSecret: ''   
}

const id = 'testuser';
var data = {
   tp : '{0, 2.11, 0, 0, 18, 1473785675, 4, 82, 13, 0, -1, -1, 0, -1, -1, 12, 93, 24, 0, -1, -1|8330, 137|1121, 142|902, 144|776, 128|792, 151|784, 111|864, 151|872, 111|824, 127|816, 104|888, 95|800, 151|808, 119|897, 134|775, 101|848, 111|1000, 143|688, 126}',
}

axios.defaults.baseURL = 'api.typingdna.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] =  '*'; 

axios.post('https://api.typingdna.com/save/testuser',data)
    .then((res) => {
    console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
    console.log("AXIOS ERROR: ", err);
    })