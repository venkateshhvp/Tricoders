const myReq = new Request('https://texttospeech.googleapis.com/v1beta1/text:synthesize', 
{method: 'POST', body: '
{
  "audioConfig": {
    "audioEncoding": "LINEAR16",
    "pitch": "0.00",
    "speakingRate": "1.00"
  },
  "input": {
    "text": ""
  },
  "voice": {
    "languageCode": "en-US",
    "name": "en-US-Wavenet-D"
  }
}' });
 
const myURL = myReq.url; 
const myMethod = myReq.method; 
const myCred = myReq.credentials;
const bodyUsed = myReq.bodyUsed;


fetch(myReq)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
  });
  
  
  
