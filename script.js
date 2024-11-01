let vow = ['a', 'e', 'i', 'o', 'u']
let str = prompt("Enter a String: ");
let vowel = 0;
let consonents = 0;

for (i=0; i<str.length; i++) {
    if(str[i] == vow[0] || str[i] == vow[1] || str[i] == vow[2] || str[i] == vow[3] || str[i] == vow[4]){
       vowel += 1
    }
    else{
        consonents += 1
    }
}
console.log(`The number of vowels in the string "${str}" is ${vowel}`)
console.log(`The number of consonants in the string "${str}" is ${consonents}`)


let sum = 0;

for(i=1; i<=30;i++){
    if(i%3==0){
        sum += i;
    }
}
console.log(`The sum of multiples of 3 between 1 to 30 is: ${sum}`)

let input = prompt("Enter a number")
let finalsum = 0;
for(i=0; i<input.length; i++){
    finalsum += (+input[i])**3;
}
if(finalsum==input){
    console.log(`The number ${input} is Armstrong Number`)
}
else{
    console.log(`The number ${input} is not Armstrong Number`)
}
inputArray = [3, 2, 6, 1, 4, 8, 2, 4, 3]
let great = inputArray[0];

for(i=1; i<inputArray.length; i++){
    if(great < inputArray[i]){
        great = inputArray[i];
    }
}
console.log(great)

inputArray = [3, 2, 6, 1, 4, 8, 2, 4, 3]
let ArrayMean = 0;
for (i=0; i<inputArray.length; i++){
    sum += inputArray[i]
    ArrayMean = sum/inputArray.length
}
console.log(ArrayMean)
console.log(sum)