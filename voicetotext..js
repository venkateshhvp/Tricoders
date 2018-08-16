const myRequest = new Request('https://speech.googleapis.com/v1p1beta1/speech:recognize', {method: 'POST', body: '{
  "audio": {
    "content": "/* Your audio */"
  },
  "config": {
    "enableAutomaticPunctuation": true,
    "encoding": "LINEAR16",
    "languageCode": "ta-IN",
    "model": "default"
  }
}'});
 
const myURL = myRequest.url; 
const myMethod = myRequest.method; 
const myCred = myRequest.credentials;
const bodyUsed = myRequest.bodyUsed;


fetch(myRequest)
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
  
  
  
