function cardfunc(headlineTag, imageUrl, author_name){
  const container = document.createElement('div');
  const headliner = document.createElement('div');
  const authorN = document.createElement('div');
  const imageContain = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorName = document.createElement('span');

  container.classList.add('card');
  headliner.classList.add('headline');
  authorN.classList.add('author');
  imageContain.classList.add('img-container');

  headliner.textContent = headlineTag;
  authorImage.src = imageUrl;
  authorName.textContent = author_name;

  container.appendChild(headliner);
  container.appendChild(authorN);
  authorN.appendChild(authorName);
  authorN.appendChild(imageContain);
  imageContain.appendChild(authorImage);

  container.addEventListener("click", () => {
    console.log(headliner.textContent);
  });

  return container;
}

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then (response => {
  console.log(response);

  response.data.articles.javascript.forEach((card) => {
      const getCard = cardfunc(
          card.headline,
          card.authorPhoto,
          card.authorName,
      );
      cards.appendChild(getCard);
  });

  response.data.articles.bootstrap.forEach((card) => {
      const getCard = cardfunc(
          card.headline,
          card.authorPhoto,
          card.authorName,
      );
      cards.appendChild(getCard);
  });

  response.data.articles.technology.forEach((card) => {
      const getCard = cardfunc(
          card.headline,
          card.authorPhoto,
          card.authorName,
      );
      cards.appendChild(getCard);
  });

  response.data.articles.jquery.forEach((card) => {
      const getCard = cardfunc(
          card.headline,
          card.authorPhoto,
          card.authorName,
      );
      cards.appendChild(getCard);
  });
  response.data.articles.nodejs.forEach((card) => {
      const getCard = cardfunc(
          card.headline,
          card.authorPhoto,
          card.authorName,
      );
      cards.appendChild(getCard);
  });
})
.catch((error) => {
  console.log(error);
}); 