var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = (name) => {
  return window.kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  return window.kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () => {
  return window.kittens.pop()
}
var destructivelyRemoveFirstKitten = () => {
  return window.kittens.shift()
}


