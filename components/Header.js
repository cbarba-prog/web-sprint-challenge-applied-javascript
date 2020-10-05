function Header() {

const head = document.createElement('div')
    const date = document.createElement('span')
    const headline = document.createElement('h1')
    const temp = document.createElement('span')

    head.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = 'March 28, 2020'
    headline.textContent = 'Lambda Times'
    temp.textContent = '98°'

    head.appendChild(date)
    head.appendChild(headline)
    head.appendChild(temp)


    return head;
}

const container = document.querySelector('.header-container');
container.appendChild(Header()); 