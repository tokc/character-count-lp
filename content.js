var makeDiv = function(count) {
  var counter_div = document.createElement('div')
  counter_div.className = 'character-count-lp'
  counter_div.style = 'background:#fff;position:fixed;right:0;top:0;'
  counter_div.innerText = count + ' characters selected.'

  return counter_div
}

var removeDiv = function() {
  var counter_divs = document.getElementsByClassName('character-count-lp')

  while (counter_divs.length) {
    counter_divs[0].parentElement.removeChild(counter_divs[0])
  }
}

var handleEvent = function(e) {
  removeDiv()

  var selection = window.getSelection()

  if (selection.type == 'Range') {
    var count = selection.toString().length
    
    var counter_div = makeDiv(count)
    
    document.firstElementChild.appendChild(counter_div)
  }
}

document.addEventListener('mouseup', handleEvent)