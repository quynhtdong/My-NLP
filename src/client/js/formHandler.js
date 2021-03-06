import {getApiData, getPost, updateUI} from '../../server/api-request.js'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const textEncode = formText.replaceAll(" ", "%");
    console.log(textEncode);
    Client.checkForName(formText)


    console.log("::: Form Submitted :::")

    getApiData(textEncode)
      .then(data => {
        getPost("http://localhost:8081", {
          agreement: data.agreement,
          subjectivity: data.subjectivity,
          confidence: data.confidence
        })
      })
      .then(() => {
        updateUI();
      })

}

export { handleSubmit }
