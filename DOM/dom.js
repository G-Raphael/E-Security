/*
function myfunction(){
    document.getElementById("demo").innerHTML = "The paragraph has changed"
}
document.write("emefeke")
//window.alert("Frontend")// 
//console.log(900);//
/*var x = 5;
const y = 6;
var y = 10;
var z = x + y;
console.log(z)

var angel = 'Raphael';
var rightWrong = true;
var numChildren = undefined;
var vatCost = null;
var r = 5;
console.log(angel);
console.log(rightWrong);
console.log(numChildren);
console.log(vatCost);
console.log(r);
console.log(definition);
document.getElementById("name").innerHTML = 'angel';
document.getElementById("boolean").innerHTML = true;
document.getElementById("definition").innerHTML = undefined;
document.getElementById("null").innerHTML = null;
document.getElementById("number").innerHTML = 5;
// addition operator
var number1 = 10;
var number2 = 20;
var sum = number1 + number2;
console.log(sum);

// multiplication operators
var a = 5;
var b = 6;
var multiple = a*b;
console.log(multiple)

//subtraction operators
var h = 20;
var i = 10;
var subt = h-i;
console.log(subt);

//division operators

var m = 65;
var n = 5;
var division = m/n;
console.log(division);

//increment operators
var s = 5;
s++;
console.log( 'decrement operator:',s);
// decrement operators
var t = 5;
t--;
console.log( 'decrement operator:',t);

let arr2 = ['Finder','God','Hour','Fills']
console.log(arr2)
arr2.push('Raphael')

function gradeScore(){
    let Score = document.getElementById("score").value;
    if(Score <50){
        document.getElementById("fail").innerHTML = "You Failed";

    } 
    else{
        document.getElementById("pass").innerHTML = "You Passed"; 
    }
}*/
/*
let users = [{ name: "Raphael", age: 25},{ name: "Raph", age:26}];
for( let i =0;i<users.length; i++){
    console.log(user[0]);
    
}

for (let i = 0; i<16; i++){
    if(i%2==0){
        console.log(`${i} is an even number`);
         document.getElementById("raph").innerHTML = `${i} is an even number` ;
    }
    else {console.log(`${i} is an odd number`)}
    //console.log(i);
    document.getElementById("raph").innerHTML = `${i} is an odd number` ;
}

//function to cal square root
//var ans;
var num;
var ty;
function square_root(num){
    ty = Math.sqrt(num);
    return;
}
square_root()
console.log(square_root(900));
*/
/*
//square root
const p = prompt('Please enter a number:');
let square_root = Math.sqrt(p);
document.getElementById('sqr').innerHTML = square_root;
console.log(square_root);

// area of a Triangle
const base = prompt('Enter The Base of Triangle: ');
const height = prompt('Enter The Height of Triangle: ');
let area = 1/2 * base * height;
console.log('The Area', area);
document.getElementById('hit').innerHTML = area;
*/
//Currency Converter App
const naira = document.getElementById('naira');
naira.addEventListener("input", nairaConverter);
function nairaConverter(e){
    let nairaC = e.target.value;
    //console.log(nairaC)
    document.getElementById('dollars').value = nairaC/493;
    document.getElementById('pounds').value = nairaC/710;
    document.getElementById('euros').value = nairaC/595;
    
}