let arrayresult = ['Hamim'];

// renderTodoList();
// 1st

function todoList() {
  let inputValue= document.querySelector('.input')
  
  let inputresult = inputValue.value;
  arrayresult.push(inputresult);
  console.log (arrayresult)
  
  renderTodoList();
}

// 2nd

function renderTodoList () {
  let generateHTMLtags = '';

  for (i = 0; i < arrayresult.length; i++) {
    let generateHTML = arrayresult[i];
    let html = `<p style = "color:red;"> ${i+1} ${generateHTML} </p>`
    generateHTMLtags = generateHTMLtags + html;
    console.log (generateHTMLtags);
  }

  document.querySelector('.output').innerHTML = generateHTMLtags; 
}





