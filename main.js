

var activeCategory = 'all'

var images = [
  {
    href:'https://pavlogg.github.io/torchPavl/',
    class:'img',
    source: 'portfolio-foto/3.png',
    category: 'js'
  },
  {
    href:'',
    class:'img',
    source: 'portfolio-foto/1.jpg',
    category: 'react'
  },
  {
    href:'https://pavlogg.github.io/AmliCode/',
    class:'img',
    source: 'portfolio-foto/2.png',
    category: 'html'
  }
];

function render() {
document
   .getElementById('images-wrapper')
    .innerHTML = images
    .filter(image => {
  if (activeCategory === 'all') {
    return true
  } else {
    return image.category === activeCategory
  }
})
    .map(image => 
    `
      <a  href="${image.href}"><img src="${image.source}" class="${image.class}"/></a>
    `
).join('')
}

render(); // inital render

function buttonHandler(category) {
  activeCategory = category
  render()
}