// let baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
var textapi = {
  key: process
};
console.log('dfgg', textapi)
//
// const key = textapi.application_key;
//
// /* Function to GET Web API Data*/
// const getApiData = async (text) => {
// const url = baseURL + key + "&of=json&txt=" + text + "&lang=en";
// console.log(url)
//   const res = await fetch(url)
//   try {
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// }

/* Function to GET Web API Data*/
const getApiData = async (text) => {
  const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
  // const key = textapi.key;
  const key = '04c0c6e2c2ef313ec90dbb07973b5c19';
  const of = 'json';
  const lang = 'en';
  const url = `${baseURL}?key=${key}&of=${of}&txt=${text}&lang=${lang}`;
  console.log(url);
  const res = await fetch(url);
  try {
    return res.json();
  } catch (error) {
    console.log('error', error);
  }
};

/* Function to POST data */
const getPost = async (url = '', data = {}) => {
  console.log(data);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// updateUI
const updateUI = async () => {
  const request = await fetch('http://localhost:8081/get');
  try {
    const allData = await request.json();
    const result = document.createElement("p");
    result.innerHTML = `Agreement: ${allData.agreement}
    Subjectivity: ${allData.subjectivity}
    Confidence: ${allData.confidence}`;
    document.getElementById('results').appendChild(result);

  } catch (error) {
    console.log("error", error);
  }
}

export {getApiData, getPost, updateUI};
