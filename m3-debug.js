<div id='numbers'>
<span>1</span><span id="even">2</span><span>3</span><span id="even">4</span><span>5</span>
<button id='btn' onclick='toggleEvenColor()'>Toggle even number highlighting</button>
</div>


function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span');
    
    spanElements.forEach(function(item) {
      let number = parseInt(item.textContent);
      if (number % 2 === 0) {
        if (item.style.backgroundColor === 'yellow') {
          item.style.backgroundColor = 'transparent';
        } else {
          item.style.backgroundColor = 'yellow';
        }
      }
    });
  }