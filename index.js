function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('ul.ranked-list li')
  for(let li in lis){
    li = (parseInt(li) + n)
  }
}
