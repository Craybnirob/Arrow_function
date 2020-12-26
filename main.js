var x;
x = function() {
    return 'Hello JavaScript!';
}
document.getElementById('demo').innerHTML = x();

// shorter Arrow function syntax:

var sex;
sex = () => {
    return 'JavaScript Arrow function Curly Bracket and return value!';
}
document.getElementById('demo1').innerHTML = sex();

// JavaScript Arrow function Curly Bracket and return value

var hello;
hello = () => 'JavaScript Arrow function';
document.getElementById('demo2').innerHTML = hello();

// If the function has only one statement,
// you can remove the brackets and the return keyword

var $;
$ = (val) => 'Hello ' + val;
document.getElementById('demo3').innerHTML = $('JavaScript!');

// Arrow Function value adding

var $1;
$1 = val => 'Arrow function ' + val;
document.getElementById('demo4').innerHTML = $1('skip Parentheses');

// If the function has only one statement,
// Arrow function skip Parentheses