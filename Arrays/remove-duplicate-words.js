'use strict';

function removeDuplicateWords (s) {
    let arr = s.split(" ");
    let uniq = [... new Set(arr)];
    return uniq.join(" ");
}