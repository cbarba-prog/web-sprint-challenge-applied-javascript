function Tabs(newTab){

  const topic = document.createElement('div');

  topic.classList.add('tab');

  topic.textContent = newTab;

  return topic;
}

const newTopics = document.querySelector('.topics');

//Needs an ALL tab

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
  response.data.topics.forEach((tabs) => {
      newTopics.appendChild(Tabs(tabs))
  });
})
.catch((error) => {
  console.log(error);
}); 