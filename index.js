function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('.ranked-list')
  lis.forEach( el => {
    el.innerHTML = parseInt(el.innerHTML) + n
  })
}

function deepestChild(){
  const node = document.querySelector('#grand-node')
  

  while(node.length>0){
    let n = node.shift();
    node[n].links.forEach(function(childIndex){
      if(!node[ChildIndex].visited){
        node[childIndex].visited = true;
        node.push(childIndex);
      }
    })
  }
}
