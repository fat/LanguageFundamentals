//  _
// | | __ _ _ __   __ _ _   _  __ _  __ _  ___
// | |/ _` | '_ \ / _` | | | |/ _` |/ _` |/ _ \
// | | (_| | | | | (_| | |_| | (_| | (_| |  __/
// |_|\__,_|_| |_|\__, |\__,_|\__,_|\__, |\___|
//                |___/             |___/
//   __                 _                            _        _
//  / _|_   _ _ __   __| | __ _ _ __ ___   ___ _ __ | |_ __ _| |___
// | |_| | | | '_ \ / _` |/ _` | '_ ` _ \ / _ \ '_ \| __/ _` | / __|
// |  _| |_| | | | | (_| | (_| | | | | | |  __/ | | | || (_| | \__ \
// |_|  \__,_|_| |_|\__,_|\__,_|_| |_| |_|\___|_| |_|\__\__,_|_|___/
//
//
// An introduction to the language of JavaScript by way of vague
// recollections and hasty (not thorough or detailed) unit tests.
//
// <3 @fat, a class taught in 2012
//
//                                     ._
//                                   ,(  `-.
//                                 ,': `.   `.
//       it's a pizza.           ,` *   `-.   \
//                             ,'  ` :+  = `.  `.
//                           ,~  (o):  .,   `.  `.
//                         ,'  ; :   ,(__) x;`.  ;
//                       ,'  :'  itz  ;  ; ; _,-'
//                     .'O ; = _' C ; ;'_,_ ;
//                   ,;  _;   ` : ;'_,-'   i'
//                 ,` `;(_)  0 ; ','       :
//               .';6     ; ' ,-'~
//             ,' Q  ,& ;',-.'
//           ,( :` ; _,-'~  ;
//         ,~.`c _','
//       .';^_,-' ~
//     ,'_;-''
//    ,,~
//    i'
//    :
//
//
//
//
//
//
//
//  ____  _                  _               _
// / ___|| |_ __ _ _ __   __| | __ _ _ __ __| |___
// \___ \| __/ _` | '_ \ / _` |/ _` | '__/ _` / __|
//  ___) | || (_| | | | | (_| | (_| | | | (_| \__ \
// |____/ \__\__,_|_| |_|\__,_|\__,_|_|  \__,_|___/
//
// JavaScript's standard global objects and how to work with them.
//
// Array

var fat = ['dave', 'is', 'here'];

var mdo = new Array('mark', 'is', 'not');

// Boolean

var blah = true;
blah = false;

// Date

new Date('');

// Function

function patrick (){

}

var patrick = function () {

}

// Number

234

// Object

new Object

var jacob = 'blah'

var obj = {
	'blah': 'value',
	'shail': true
}


$('div').addClass('foo');

$.prototype.myPlugin = function () {

}


// RegExp

var foo = new RegExp('blah', 'gi')

var foo = /blah/gi


// String

var foo = "fat"

foo.split('a') // ['f', 't']

//
//
//
//
//
//
//
//
//
//  _              _   _
// | |_ _ __ _   _| |_| |__  _   _ _ __   ___  ___ ___
// | __| '__| | | | __| '_ \| | | | '_ \ / _ \/ __/ __|
// | |_| |  | |_| | |_| | | | |_| | | | |  __/\__ \__ \
//  \__|_|   \__,_|\__|_| |_|\__, |_| |_|\___||___/___/
//                           |___/
//
// Learning true and false. Truthy and Falsey.
//
// falsey
// undefined, null, NaN, 0, "" (empty string), and false

var x = $('div')

	if (x.length === 0) {
		console.log('hi')
	}

	if (x.length) {
		console.log('hi)')
	}

//
// truthy
// 'o_o'
//


	if ('o_o') {
		console.log('hi')
	}

//
//
//
//
//
//  _  __                                _
// | |/ /___ _   ___      _____  _ __ __| |___
// | ' // _ \ | | \ \ /\ / / _ \| '__/ _` / __|
// | . \  __/ |_| |\ V  V / (_) | | | (_| \__ \
// |_|\_\___|\__, | \_/\_/ \___/|_|  \__,_|___/
//           |___/
//
// JavaScript's keywords and how to use them
//
// if/else

var x;

if (true) {
	x = 'bla';
} else {
	x = 'blah';
}

// switch/case/default

var x = 0;

switch (x) {
	case 0:
	  x = 0 + 1;
	  break;
	case typeof x == 'number':
	  x = 'blah'
	  break;
	default:
	  x = 'patrick'
}

// for

var fat = ['is', 'not', 'fat'];

var x = 0;

for (var i = 0; i < fat.length; i++) {
	console.log(fat[i]);
}


// in

var x = { bad: 'blah' }

for (var i in x) {

}

// while/do


while (true)  {

}

do {

} while (true)

// break/continue

for (var i = 0; i < fat.length; i++) {
	if ( i === 4) break;
}


// throw/try/catch/finally

try {

  throw 'twitter is cool.'

  throw new Error('marcus is a smarty pants.')

} catch (e) {

} finally {

}

// function

 function () {

 }

// return

  function asdf() {
  	 return 'asdf'
  }

// var

var asdf, asdf1, asfd2;

	two
  , asdf = 'blah'
  , mail = 'twwer';



// delete



 delete object.property

// with

with (Math) {
	var x = pi + 2
}

Math.pi + 2 = sdf

// typeof

typeof 'foo' == 'string'


// this


// new



// instanceof

// debugger
//
//
//
//
//
//
//
//
// __   ____ _ _ __
// \ \ / / _` | '__|
//  \ V / (_| | |
//   \_/ \__,_|_|
//
// Variables in Javascript. What they do.
//
// simple
// scoping
// hoisting
//
//
//
//
//
//
//
//
//  ____  _            _
// | __ )| | ___   ___| | _____
// |  _ \| |/ _ \ / __| |/ / __|
// | |_) | | (_) | (__|   <\__ \
// |____/|_|\___/ \___|_|\_\___/
//
// JS Functions, Closures, and Blocks
//
// function arguments

 function on () {
   arguments[0] == 1
   foo == 1
 }

$('div').on('click', function () {

})

$('div').on('click', 'a', function () {

})

jacob (1,2,3,4,4,5)

// function expressions

var DAVE = function (str, array, fn) {

}

// recursion

// scope


function foo() {

	var y;

	console.log(x);

	function bar() {

	}

}

var x = '';

alert(y) // ;_;

// closures
// blocks


if () {
	var jacob = true;
}

for () {

}



//
//
//
//
//
//
//
//      _ ____   ___  _   _
//     | / ___| / _ \| \ | |
//  _  | \___ \| | | |  \| |
// | |_| |___) | |_| | |\  |
//  \___/|____/ \___/|_| \_|
//
// JavaScript object notation
//
// stringify
// toJSON
// parse