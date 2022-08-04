// console.log(numPlanets) = 8
// 1846

// console.log(discoveryYears) = All keys excluding numPlanets

// Your name is Ale and your fav color is purple
// Youe name is Melissa and your fave color is green
// Your name is undefined and your fave color is green

// Maya
// marisa 
// Chi 

// Raindrops on roses
// Whiskers on Kittens
// The other 3 elements

// 10,30,20

//


const obj = {
    numbers:{
        a:1,
        b:2
    }
}

const{a,b} = obj.numbers

let arr = [1,2]

[arr[0],arr[1]] = [arr[1],arr[0]]


const medals = (first,second,third,...rest) => {
    return {
        first,
        second,
        third,
        rest
    }
}