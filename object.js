"use strict"

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// alert(checkSalaries(salaries));

function checkSalaries(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let n = salaries[key];
    sum += n;
  }

  return sum;
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
  
function multiplyNumeric(obj) {
    debugger;
    for (let key in obj) {
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        } 
    }
}  

multiplyNumeric(menu);
  
alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
