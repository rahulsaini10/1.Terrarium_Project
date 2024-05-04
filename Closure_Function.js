//  The Closure --> as a function enclosed by another function so that the inner function has access to the outer function's scope.

let candy = ['jellybeans']; //  global variable
function displayCandy(){
   // let candy = ['jellybeans']; ///local variable  candy that is undefined outside the scope(function)
    function addCandy(candyType) {
        candy.push(candyType)
    }
    addCandy('gumdrops');
}
displayCandy();
console.log(candy)