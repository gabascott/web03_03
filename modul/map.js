const tomb = [3, 4, 5, 6, 7];

/*const duplatomb = tomb.map(muvelet);

function muvelet(elem){
    return elem * 2;
}*/

const duplatomb = tomb.map((elem) => {
    return elem * 2;
})

console.log(tomb);
console.log(duplatomb);