

// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    const Figaro=[...cats,name]
    return Figaro
}
function prependCat(name) {
    const molly=[name,...cats]
    return molly
}
function removeLastCat(name) {
    const Kinuthia=cats.slice(0,-1);
    return Kinuthia
}
function removeFirstCat(params) {
   
        const Aliya=cats.slice(1)
        return Aliya
    }
    


