// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardfunc({headlineTag, imageUrl, author_name})
{
    const container = document.createElement('div');
    const headliner = document.createElement('div');
    const author = document.createElement('div');
    const imageContain = document.createElement('div');
    const authorImage = document.createElement('img');
    const authorN = document.createElement('span');
  
    container.classList.add('card');
    headliner.classList.add('headline');
    author.classList.add('author');
    imageContain.classList.add('img-container');
  
    headliner.textContent = headlineTag;
    authorImage.src = imageUrl;
    authorN.textContent = author_name;
  
    container.appendChild(headliner);
    container.appendChild(author);
    author.appendChild(authorN);
    author.appendChild(imageContain);
    imageContain.appendChild(authorImage);
  
    container.addEventListener("click", () => {
      console.log(headliner.textContent);
    });
  
    return container;
  }
  
  const cards = document.querySelector('.cards-container');
  
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then ((response) => {
    const newData = response.data.articles;
    console.log(newData);
  
    for (const item in newData) {
        newData[item].forEach((newArr) => {
          cards.appendChild(
            cardfunc({
              headlineTag: newArr.headline,
              imageUrl: newArr.authorPhoto,
              author_name: newArr.authorName,
            })
          );
        });
      }
    })
  .catch((error) => {
    console.log(error);
  }); 