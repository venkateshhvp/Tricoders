const myTran = new Request('https://translation.googleapis.com/language/translate/v2/?q=&source=ta&target=hi&key=YOUR_API_KEY_HERE', 
{method: 'POST', body: '{
  "data": {
    "translations": [
      {
        "translatedText": ""
      }
    ]
  }
} '});
 
const myURL = myTran.url; 
const myMethod = myTran.method; 
const myCred = myTran.credentials;
const bodyUsed = myTran.bodyUsed;


fetch(myTran)
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
  
  
  
