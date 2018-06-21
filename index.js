function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('ul.ranked-list')
  for(let li in lis){
    li.innerHTML = parseInt(li.innerHTML) + n
  }
}
