/* Code by: Adriana Vieira Amancio */

const header = document.querySelector('header');
const section = document.querySelector('section');

//create request
let requestURL = 'https://gerardluskin.com/api/';
let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const theWorldWideWeb = request.response;
    populateHeader(theWorldWideWeb);
    showLanguage(theWorldWideWeb);
  };

  function populateHeader(obj){
      const myH5 = document.createElement('h5');
      myH5.textContent = obj['subject'];
      header.appendChild(myH5);

      const myPara = document.createElement('p');
      myPara.textContent = 'description: ' + obj['description'];
      header.appendChild(myPara);

  }

  function showLanguage(obj){
      const technologies = obj['technologies'];

      for(let i = 0; i < technologies.length; i++) {
        const myArticle = document.createElement('article');
        const myH6 = document.createElement('h6');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');

        myH6.textContent = technologies[i].name;
        myPara1.textContent = 'abbreviation: ' + technologies[i].abbreviation;
        myPara2.textContent = 'languageType: ' + technologies[i].languageType;
        myPara3.textContent = 'initialRelease:' + technologies[i].initialRelease;

        myArticle.appendChild(myH6);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);


        section.appendChild(myArticle);

  }  

  }