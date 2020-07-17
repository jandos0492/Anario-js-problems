'use strict';

function sortMyString(s) {
    let str = s.replace(" ", "");
    let even = [];
    let odd = [];
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
		(i % 2 === 0) ? even.push(arr[i]) : odd.push(arr[i])
    }
    return even.join("") + " " + odd.join("");
}