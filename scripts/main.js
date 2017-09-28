var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/blog.jpg') {
    myImage.setAttribute ('src','images/blog-header.jpg');
  } else {
    myImage.setAttribute ('src','images/blog.jpg');
  }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName () {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name',myName);
  myHeading.innerHTML = 'Здесь будет мой блог по изучению ROR, ' + myName;
}

//нижеследующая байда выполняется сразу после загрузки сайта
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Здесь будет мой блог по изучению ROR, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
