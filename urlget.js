"use strict";
let result = "";
let ele_array = document.getElementsByClassName("file");
for(let x = 0; x < ele_array.length; x += 1){
    if(ele_array[x].href != undefined){
        let r_url = ele_array[x].href;
        let url = r_url.replace("?a=view", "");
        result += url;
        result += "\n";
    }
}
console.log(result);