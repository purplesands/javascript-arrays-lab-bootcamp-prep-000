var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here
var kittenString

// Add your functions and code here

function destructivelyAppendKitten(kittens, kittenString){
  return [kittenString, ...kittens];
}