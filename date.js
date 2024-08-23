let added = false;
let names = [];

class yourSched {
  constructor(id, occupied, opacity,nameInside) {
    this.id = id;
    this.occupied = occupied;
    this.opacity = opacity;
    this.nameInside = nameInside;
  }
}

function getElem(x){
  return(document.getElementById(x))
}

function saveDate(x){

  if(window.getComputedStyle(getElem(x)).backgroundColor == "rgb(148, 244, 190)"){
    getElem(x).style.backgroundColor = "#ffffff";

    if(x[0] == "d"){
      dIndex = parseInt(x.split("d").join(''));
      yourSchedArray[dIndex-1].occupied = false;
    }
    if(x[0] == "k"){
      kIndex = parseInt(x.split("k").join(''));
      theirSchedArray[kIndex-1].occupied = false;
    }
  }
  
  else if(window.getComputedStyle(getElem(x)).backgroundColor != "rgb(255, 255, 255)" || window.getComputedStyle(getElem(x)).backgroundColor == "rgb(255, 255, 255)"){
    getElem(x).style.backgroundColor = "#94f4be";

    if(x[0] == "d"){
      dIndex = parseInt(x.split("d").join(''));
      yourSchedArray[dIndex-1].occupied = true;
    }
    if(x[0] == "k"){
      kIndex = parseInt(x.split("k").join(''));
      theirSchedArray[kIndex-1].occupied = true;
    }
  }
}

const yourSchedArray = [];
for(let i = 1; i <= 60; i++){
  divid = "d" + i
  yourSchedArray.push(new yourSched(divid,false,0.4,""));
  if(getElem(divid).className == "clickable"){
    getElem(divid).style.opacity = 0.4;
    getElem(divid).textContent = "";
  }
}

const theirSchedArray = [];
for(let i = 1; i <= 60; i++){
  divid = "k" + i
  theirSchedArray.push(new yourSched(divid,false,0.4,""));
  if(getElem(divid).className == "clickable"){
    getElem((divid)).style.opacity = 0.4;
    getElem(divid).textContent = "";
  }
}

const finalSchedArray = [];
for(let i = 1; i <= 60; i++){
  divid = "s" + i
  finalSchedArray.push(new yourSched(divid,false,0.4,""));
  if(getElem(divid).className == "clickable"){
    getElem((divid)).style.opacity = 0.4;
    getElem(divid).textContent = "";
  }
}

function calcData(){
  if(added == false){
  yourSchedArray.forEach(function(x, index){
    if(x.occupied == true){
      finalSchedArray[index].occupied = true;
      getElem(("s" + (index+1))).style.backgroundColor = "#94f4be";
      getElem(("s" + (index+1))).style.opacity = yourSchedArray[index].opacity;
      finalSchedArray[index].opacity = yourSchedArray[index].opacity;
      finalSchedArray[index].nameInside = yourSchedArray[index].nameInside;
      if(theirSchedArray[index].occupied == true){
        let y = parseFloat(window.getComputedStyle(getElem("d" + (index+1))).opacity);
        finalSchedArray[index].opacity = (y+0.2);
        finalSchedArray[index].occupied = true;
        getElem(("s" + (index+1))).style.opacity = finalSchedArray[index].opacity;
        finalSchedArray[index].nameInside += (" " + names[(names.length-1)]);
        getElem(("s" + (index+1))).textContent = finalSchedArray[index].nameInside;
      }
    }
  });
  added = true;
}
console.log(yourSchedArray);
console.log(theirSchedArray);
console.log(finalSchedArray);
}

function contData(){
  yourSchedArray.length = 0;
  theirSchedArray.length = 0;
  for(let i = 1; i <= 60; i++){
    divid = "d" + i;
    yourSchedArray.push(new yourSched(divid,false,0.4,""));
    if(getElem(divid).className == "clickable"){
      getElem(divid).style.backgroundColor = "#ffffff";
      getElem((divid)).style.opacity = 0.4;
      getElem(divid).textContent = "";
      console.log(finalSchedArray);
      if(finalSchedArray[(i-1)].occupied == true){
        yourSchedArray[(i-1)].occupied = true;
        yourSchedArray[(i-1)].nameInside = finalSchedArray[(i-1)].nameInside;
        getElem(divid).textContent = yourSchedArray[(i-1)].nameInside;
        getElem(divid).style.backgroundColor = "#94f4be";
        getElem(divid).style.opacity = finalSchedArray[i-1].opacity; 
        yourSchedArray[i-1].opacity = finalSchedArray[i-1].opacity; 
      }
    }
  }
  finalSchedArray.length = 0;
  for(let i = 1; i <= 60; i++){
    divid = "k" + i;
    theirSchedArray.push(new yourSched(divid,false,0.4,""));
    if(getElem(divid).className == "clickable"){
      getElem(divid).style.backgroundColor = "#ffffff";
      getElem(divid).style.opacity = 0.4;
      getElem(divid).textContent = "";
    }
  }
  for(let i = 1; i <= 60; i++){
    divid = "s" + i;
    finalSchedArray.push(new yourSched(divid,false,0.4,""));
    if(getElem(divid).className == "clickable"){
      getElem(divid).style.backgroundColor = "#ffffff";
      getElem(divid).style.opacity = 0.4;
      getElem(divid).textContent = "";
    }
  }
  added = false;
  console.log(yourSchedArray);
  console.log(theirSchedArray);
  console.log(finalSchedArray);
}

function submitName(){
  event.preventDefault();
  const nameInput = document.getElementById('username').value;
  names.push(nameInput);
}