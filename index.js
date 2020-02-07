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
  let grandNode = document.querySelectorAll('#grand-node');
  let current = grandNode[0];
  let next = [];
  
  while (true) {
    if (current.innerHTML !== '') {
      console.log(current);
      return current;
    }
    
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[0]);
      }
    }
    
    current = next.shift();
  }
  
}