var imgLinks = [];
var picCurrIndex = 0;

loadPicsOnGlobalArray();

// Init first Pic
var currPicDOMElem = document.getElementById("currPicContainer");
var imgCurr = document.createElement('img');
imgCurr.setAttribute('id', 'currPic');
imgCurr.src = imgLinks[0];
currPicDOMElem.appendChild(imgCurr);

// Set right arrow event handler
var leftArrElem = document.getElementById("leftArrow");
leftArrElem.addEventListener("click", function(){setPrevPic();});

// Set left arrow event handler
var rightArrElem = document.getElementById("rightArrow");
rightArrElem.addEventListener("click", function(){setNextPic();});

function loadPicsOnGlobalArray() {
  imgLinks.push('images/sea1.jpeg');
  imgLinks.push('images/sea2.jpeg');
  imgLinks.push('images/sea3.jpeg');
  imgLinks.push('images/sea4.jpeg');
  imgLinks.push('images/sea5.jpeg');
}

function setNextPic() {
  picCurrIndex = (picCurrIndex + 1) % imgLinks.length;
  imgCurr.src = imgLinks[picCurrIndex];
}

function setPrevPic() {
  if(picCurrIndex === 0)
  {
    picCurrIndex = picCurrIndex + imgLinks.length;
  }
  picCurrIndex = (picCurrIndex - 1) % imgLinks.length;
  imgCurr.src = imgLinks[picCurrIndex];
}
