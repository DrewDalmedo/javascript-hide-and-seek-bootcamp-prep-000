// returns the first element that matches the selector
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

// pulls a .target out of #nested
function nestedTarget() {
  return document.querySelector('#nested .target');
}

// increases ranks in .ranked-list by n
function increaseRankBy(n) {
  let ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString();
  }
}

// returns the most deeply nested child in #grand-node
function deepestChild() {
  let grandNode = document.getElementById('app').querySelector('#grand-node');
  
  let temp = grandNode;
  
  while(true) {
    if(temp.children.length === 0 || temp.children === null) {
      return temp;
    }
    else {
      temp = temp.children[0];
    }
  }
  
}