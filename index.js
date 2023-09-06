// Iteration 1: Names and Input
const hacker1 ="Liubov"
console.log(`The driver's name is ${hacker1}`)

const hacker2 ="Alice"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const charDriver = hacker1.length;
const charNavigator = hacker2.length;
if (charDriver > charNavigator) {
  console.log(`The driver has the longest name, it has ${charDriver} characters.`)
}
else if (charDriver < charNavigator) {
  console.log(`It seems that the navigator has the longest name, it has ${charNavigator} characters.`)
}
else if (charDriver === charNavigator) {
  console.log(`Wow, you both have equally long names, ${charDriver} characters!`)
}
else {console.log (`Something went wrong!`)}

// Iteration 3: Loops
let nameWithSpaces = ""
for (let i=0; i<hacker1.length; i++) {
  nameWithSpaces += hacker1[i] + " "
}
const nameInCaps= nameWithSpaces.toUpperCase();
console.log (nameInCaps.slice(0,11));

let navigatorReverse = ""
for (let i=hacker2.length-1; i>=0; i--) {
  navigatorReverse += hacker2[i]
}
console.log (navigatorReverse);

if (hacker1<hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1>hacker2) {
  console.log("Yo, the navigator goes first, definitely.")
}
else {console.log ("What?! You both have the same name?")}

// Bonus 1:
const longText =`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ullamcorper ex, non finibus augue. Curabitur lacinia rutrum eros sed gravida. Nam egestas a eros eu bibendum. Cras vel congue nunc. Cras sem felis, lobortis nec ultrices quis, sodales ac massa. Morbi in molestie turpis. Donec ultrices rhoncus tincidunt. Nam ut turpis orci. Donec nec nibh sit amet quam finibus finibus at at nulla. Morbi pretium nibh rutrum, efficitur nunc quis, rutrum neque. Quisque et sapien at risus vestibulum aliquam. Nunc porttitor non dui vitae semper. Integer et volutpat felis. Nam vel interdum tortor, ut condimentum ligula.

Curabitur pharetra velit nec mauris tempus posuere. Etiam porttitor maximus purus a vehicula. Curabitur lobortis enim sollicitudin, mattis lorem dictum, condimentum ipsum. Morbi accumsan ornare nulla eu ullamcorper. Suspendisse lobortis congue felis, quis dapibus lectus ullamcorper nec. Cras orci eros, viverra in cursus eu, pharetra vel enim. Fusce in consectetur nisi. Morbi porta nisi eleifend tortor porttitor, eget varius sapien congue. Nullam nibh turpis, commodo nec ullamcorper quis, pretium vitae odio. Donec eu nibh fringilla, elementum justo a, convallis nibh. Proin consequat gravida felis id ornare. In mauris mi, mollis vel metus placerat, pellentesque consequat leo. Integer tincidunt blandit dictum. Ut elementum tincidunt diam, a faucibus diam malesuada vel.

Aliquam sed nisl et nunc laoreet bibendum. Nulla non ex vulputate, vehicula elit sit amet, ultricies nisl. Nulla nec augue turpis. Praesent dapibus sem quis suscipit commodo. Vivamus faucibus mi nulla, eu luctus odio ornare sit amet. Cras at eros luctus, accumsan dolor sed, malesuada nunc. Phasellus bibendum aliquam ante, a eleifend leo cursus sed. Integer dapibus ligula ut sapien tincidunt, non scelerisque lorem mollis. Morbi malesuada tellus at porttitor auctor.`

function getWordCount(str) {
     return str.split(' ')
       .filter(function(n) { return n != '' })
       .length;
}
console.log(+getWordCount(longText));

let countWordEt = 0
 for (let i=0; i<longText.length; i++) {
     if (longText[i] === "e" && longText [i+1] === "t") {countWordEt ++}
 }
   console.log(countWordEt)
