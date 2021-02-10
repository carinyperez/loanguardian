import TypingDnaClient from 'typingdnaclient';

const apiConfig = {
    apiKey: '4f518b811ecaf84d792f7546944f9589',
    apiSecret: '4762d30e358aca1de94bbc01af03e72f',
    proxy: 'cors-anywhere.herokuapp.com',
    url: 'api.typingdna.com'
}

const {apiKey, apiSecret, proxy, url} = apiConfig; 
const typingDnaClient = new TypingDnaClient(apiKey, apiSecret,`${proxy}/${url}`);

export default typingDnaClient; 
