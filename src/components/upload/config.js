import TypingDnaClient from 'typingdnaclient';

const apiConfig = {
    apiKey: '4f518b811ecaf84d792f7546944f9589',
    apiSecret: '4762d30e358aca1de94bbc01af03e72f',
    apiServer: 'cors-anywhere.herokuapp.com/api.typingdna.com'
}
const {apiKey, apiSecret, apiServer} = apiConfig; 
const typingDnaClient = new TypingDnaClient(apiKey, apiSecret,apiServer);

export default typingDnaClient; 

