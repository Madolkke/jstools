"use strict";
let result = "";
let ele_array = document.getElementsByClassName("file view");
for(let x = 0; x < ele_array.length; x += 1){
    let r_url = ele_array[x].href;
    let url = r_url.slice(0, r_url.length - 7);
    result += url;
    result += "\n";
}
console.log(result);