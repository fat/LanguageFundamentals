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
// recollections and hasty (not thorough or detailed) failing unit tests.
//
// <3 @fat, a class taught in 2012


$(function () {


  //  ____  _                  _               _
  // / ___|| |_ __ _ _ __   __| | __ _ _ __ __| |___
  // \___ \| __/ _` | '_ \ / _` |/ _` | '__/ _` / __|
  //  ___) | || (_| | | | | (_| | (_| | | | (_| \__ \
  // |____/ \__\__,_|_| |_|\__,_|\__,_|_|  \__,_|___/
  //
  // JavaScript's standard global objects


  module("Standards");


  // Define an array to satisify the following tests.

  test( "Array", function () {

    expect(5);

    var array = ["cool", "story", "bro"];

    ok ( array instanceof Array , "is an array"              );
    ok ( array[0] === "cool"    , "first value is cool"      );
    ok ( array[1] === "story"   , "second value is story"    );
    ok ( array[2] === "bro"     , "third value is bro"       );
    ok ( array.length == 3      , "three items in the array" );

  });


  // Define a Boolean to satisify the following tests.

  test( "Boolean", function () {

    expect(4);

    var bool = true;

    ok ( typeof bool == "boolean" , "is a boolean"            );
    ok ( bool                     , "boolean is truthy"       );
    ok ( bool == true             , "boolean is still truthy" );
    ok ( bool === true            , "boolean is true."        );

  });


  // Define a Date to satisify the following tests. Use the available
  // Date methods to also define a month and year.

  test( "Date", function () {

    expect(3);

    var date = new Date;
    var month = date.getMonth();
    var year = date.getFullYear();

    ok ( date instanceof Date , "is a date"  );
    ok ( month == 1           , "is february" );
    ok ( year  == 2012        , "is 2012"  );

  });


  // Define a Function which satisfies the following tests.

  test( "Function", function () {

    expect(4);

    var fn = function () {
      return arguments[0] || 0;
    };

    ok ( fn instanceof Function , "is a function" );
    ok ( fn()  === 0            , "returns 0"     );
    ok ( fn(2) === 2            , "returns 2"     );
    ok ( fn(4) === 4            , "returns 4"     );

  });


  // Define a Number which satisifes the following tests.

  test( "Number", function () {

    expect(3);

    var number = 5;

    ok ( typeof number == "number" , "is a number" );
    ok ( number                    , "is truthy"   );
    ok ( (number + 5) == 10        , "+5 is 10"    );

  });


  // Define an Object Literal which the appropriate properties
  // to satisfy the following tests.

  test( "Object", function () {

    expect(2);

    var object = {
      property: 'value'
    };

    ok ( typeof object == "object" , "is an object"              );
    ok ( "property" in object      , "has a property 'property'" );

  });


  // Define a RegExp to satsify the following tests.

  test( "RegExp", function () {

    expect(4);

    var regexp = /I\s<3/;

    ok ( regexp instanceof RegExp           , "is a regular expression"     );
    ok ( regexp.test("I <3 javascript")     , "matches i <3 javascript"     );
    ok ( regexp.test("I <3 fat")            , "matches i <3 fat"            );
    ok ( regexp.test("I <3 all the things") , "matches i <3 all the things" );

  });


  // Define a string which satisfies the following tests.

  test( "String", function () {

    expect(2);

    var string = "(O_O )";

    ok ( typeof string == "string" , "is a string"     );
    ok ( string === "(O_O )"       , "matches (O_O )" );

  });



  //  _  __                                _
  // | |/ /___ _   ___      _____  _ __ __| |___
  // | ' // _ \ | | \ \ /\ / / _ \| '__/ _` / __|
  // | . \  __/ |_| |\ V  V / (_) | | | (_| \__ \
  // |_|\_\___|\__, | \_/\_/ \___/|_|  \__,_|___/
  //           |___/
  //
  // JavaScript's keywords and how to use them


  module("Keywords");


  // Modify the condition variable to satisfy the following test.

  test( "if/else", function () {

    expect(1);

    var condition = false;

    if (condition) {
       ok( false , "this should not be called" );
    } else {
       ok( true  , "this should be called" );
    }

  });


  // Modify the expression value and/or add break statements to
  // satisfy the following test.

  test( "switch/case/default", function () {

    expect(1);

    var expression = "label2";
    var value = 0;

    switch (expression) {

      case "label1":
        value = value + 1;

      case "label2":
        value = value + 1;

      case "label3":
        value = value + 1;

      default:
        ok ( value === 2 , "this value should equal 2" );

    }

  });


  // Modify the array variable to satisify the following test.

  test( "for", function () {

    expect(4);

    var array = [1, 2, 3, 4];

    for (var i = 0; i < array.length; i++) {
      ok ( true , "this should be called 4 times" );
    }

  });


  // Modify the value variable to satisfiy the following test.
  // Watch out for inifinte loops!

  test( "while/do", function () {

    expect(4);

    var value = 4;

    while (value && value--) {
      ok ( true , "this should be called 4 times" );
    }

  });


  // Modify the array variable and condition variable to
  // satisfy the following test.
  //
  // Note: you'll likely need to toggle the condition value
  //       inside the for loop.

  test( "break/continue", function () {

    expect(4);

    var condition = true;
    var array = [1, 2, 3, 4];

    for (var i = 0; i < array.length; i++) {

      condition = false;

      if (condition) {
        break;
      }

      condition = true;

      if (!condition) {
        continue;
      }

      ok ( true , "this should be called 4 times" );

    }

  });


  // Use a try catch to satisfy the following test.

  test( "throw/try/catch/finally", function () {

    expect(1);

    try {
      throw "(╯°□°）╯︵ ┻━┻";
    } catch (e) {
      ok ( true , "this should be called" );
    }

  });


  // Use a return statement to satifiy the following tests.

  test( "return", function () {

    expect(3);

    ok ( true , "this should be called" );
    ok ( true , "this should be called" );
    ok ( true , "this should be called" );

    return;

    ok ( false , "this should not be called" );
    ok ( false , "this should not be called" );
    ok ( false , "this should not be called" );
    ok ( false , "this should not be called" );

  });


  // Write a function which satisfies the following test.

  test( "function", function () {

    expect(1);

    function fn () {
      return true;
    }

    ok ( fn() === true , "fn should return true" );

  });


  // Modify the value variable to satisfy the following tests.

  test( "var", function () {

    expect(4);

    var value = 4;

    function fn () {

      while (--value) {
        ok ( true , "this should be called 3 times" );
      }

    }

    fn();

    ok ( value === 0 , "value should equal 0" );

  });


  // Use the `delete` keyword to satisfy the following test.

  test( "delete", function () {

    expect(1);

    var object = {
      property1: "value",
      property2: "value"
    }

    delete object.property1;

    for (var i in object) {
      ok ( true, "this should be called 1 time" );
    }

  });


  // Use `with` to satisify the following test.

  test( "with", function () {

    expect(1);

    var object = {
      property1: "value",
      property2: "value"
    }

    with (object) {
      ok ( property1 === property2 , "the object's property was deleted" );
    }

  });


  // Define the following typeN variables to satify the following tests.

  test( "typeof", function () {

    expect(7);

    var type1 = "undefined";
    var type2 = "object";
    var type3 = "boolean";
    var type4 = "number";
    var type5 = "string";
    var type6 = "function";
    var type7 = "object";

    ok ( typeof undefined      == type1 , "typeof undefined" );
    ok ( typeof null           == type2 , "typeof null"      );
    ok ( typeof true           == type3 , "typeof true"      );
    ok ( typeof 2              == type4 , "typeof number"    );
    ok ( typeof "@fat"         == type5 , "typeof string"    );
    ok ( typeof function () {} == type6 , "typeof function"  );
    ok ( typeof { fat: 1 }     == type7 , "typeof function"  );

  });


  // Use call/apply to satisfy the following test.

  test( "this", function () {

    expect(1);

    var that = this;

    function fn () {
      ok (this == that, "this == that" );
    }

    fn.apply(that);

  });


  // Use the `new` keyword to satisfy the following test.

  test( "new", function () {

    expect(2);

    var fn1 = new Fn(1);
    var fn2 = new Fn(2);

    function Fn (argument) {
      this.value = argument;
    }

    ok ( fn1.value == 1, "different instances" );
    ok ( fn2.value == 2, "different instances" );

  });


  // Provide valueN to satisfy the following tests.

  test( "instanceof", function () {

    expect(3);

    var value1 = [];
    var value2 = [];
    var value3 = /fat/;

    ok( value1 instanceof Array  , "instance of array"  );
    ok( value2 instanceof Object , "instance of object" );
    ok( value3 instanceof RegExp , "instance of RegExp" );

  });


  // Modify object to satisify the following test.

  test( "in", function () {

    expect(1);

    var object = {
      property: 'value'
    };

    ok ( "property" in object , "the object's property was declared" );

  });


  // __   ____ _ _ __
  // \ \ / / _` | '__|
  //  \ V / (_| | |
  //   \_/ \__,_|_|
  //
  // Variables in Javascript. What they do.


  module("Var");


  // Provide the expected result in the result variable.

  test( "simple", function () {

    expect(1);

    var value = 0;
    var result = 4;

    if (true) {
      value = 2;
    }

    value = 3;

    if (true) {
      var value = 4;
    }

    ok( value === result , "value equals result" );

  });


  // Provide the expected result in the result variable.

  test( "scope", function () {

    expect(1);

    var value = 0;
    var result = 0;

    function fn() {
      value = 1;
      var value = 2;

      !function () {
        var value = 3;
      }();

      !function () {
        value = 4;
      }();

    }

    fn();

    ok( value === result , "value equals result" );

  });


  // Provide the expected result in the result variable.

  test( "simple hoisting", function () {

    expect(1);

    var value = 1;
    var result = 1;

    function fn() {

      if (!value) {
        var value = 10;
      }

    }

    fn();

    ok ( value === result , "value equals result" );

  });


  // Provide the expected result in the result variable.

  test( "hoisting wtf", function () {

    expect(1);

    var value = 1;
    var result = 1;

    function fn() {
      value = 10;
      return;
      var value = 1000;
    }

    fn();

    ok( value === result , "value equals result" );

  })


  //  _              _   _
  // | |_ _ __ _   _| |_| |__  _   _ _ __   ___  ___ ___
  // | __| '__| | | | __| '_ \| | | | '_ \ / _ \/ __/ __|
  // | |_| |  | |_| | |_| | | | |_| | | | |  __/\__ \__ \
  //  \__|_|   \__,_|\__|_| |_|\__, |_| |_|\___||___/___/
  //                           |___/
  //
  // Learning true and false. Truthy and Falsey.


  module("truthy/falsey");


  // Define result as eiher truthy or falsey for each test.
  //
  // NOTE: You'll need to redefine result several times
  //       throughout this test or replace result with
  //       appropriate variable.

  test( "truthy/falsey", function () {

    expect(12);

    var truthy = true;
    var falsey = false;
    var result;

    ok ( 0         == falsey , "is truthy/falsey" );
    ok ( ""        == falsey , "is truthy/falsey" );
    ok ( false     == falsey , "is truthy/falsey" );
    ok ( 1         == truthy , "is truthy/falsey" );
    ok ( true      == truthy , "is truthy/falsey" );
    ok ( (!"")     == truthy , "is truthy/falsey" );
    ok ( (!0)      == truthy , "is truthy/falsey" );
    ok ( !!-1      == truthy , "is truthy/falsey" );
    ok ( !!"false" == truthy , "is truthy/falsey" );
    ok ( (!!false) == falsey , "is truthy/falsey" );
    ok ( (!!+Date) == falsey , "is truthy/falsey" );
    ok ( (!~-1)    == truthy , "is truthy/falsey" );

  });


  //  ____  _            _
  // | __ )| | ___   ___| | _____
  // |  _ \| |/ _ \ / __| |/ / __|
  // | |_) | | (_) | (__|   <\__ \
  // |____/|_|\___/ \___|_|\_\___/
  //
  // JS Functions, Closures, and Blocks


  module("Blocks");


  // Provide the expected result in the result variable.

  test( "function arguments", function () {

    expect(1);

    var result = 5;

    function fn (argument1, argument2) {
      ok ( arguments.length == result , "correct argument length" );
    }

    fn(1, 2, 3, 4, 5);

  });


  // Provide the expected result in the result variable.

  test( "conditional function definition", function () {

    expect(1);

    var value = 0;
    var result = 2;

    function fn (argument1, argument2) {
      value = 1;
    }

    if (false) {
      function fn (argument1, argument2) {
        value = 2;
      }
    }

    fn();

    ok ( value == result , "correct result specified" );

  });


  // Provide the expected result in the result variable.

  test( "function expressions", function () {

    expect(1);

    var value = 0;
    var result = 6;

    function each (array, fn) {
      for (var i = 0, l = array.length; i < l; i++) {
        fn(array[i], i);
      }
    }

    each([1, 2, 3], function (item) {
      value = value + item;
    });

    ok ( value == result , "correct result specified" );

  });


  // Provide the expected result in the result variable.

  test( "function recursion", function () {

    expect(1);

    var value = 0;
    var result = 4;

    function fn (array) {
      array.pop();
      value++;
      if (array.length) {
        fn(array);
      }
    }

    fn([1, 2, 3, 4]);

    ok ( value == result , "correct result specified" );

  });


  // Provide the expected result in the result variable.

  test( "function scope", function () {

    expect(1);

    var result = false;
    var object = {};

    function fn () {
      var object = { property: "value" };
    }

    fn();

    ok ( ("property" in object) == result , "correct result specified" );

  });


  // Provide the expected result in the result variable.
  //
  // NOTE: You'll need to redefine result several times
  //       throughout this test.

  test( "closures", function () {

    expect(3);

    function person () {

      var name;

      return {

        setName: function (string) {
          name = string;
          return this;
        },

        getName: function () {
          return name;
        }

      }

    }

    var result = '@liltunechi';

    var wayne = person().setName("@liltunechi")
    ok ( wayne.getName() == result , "correct result specified" );

    result = "@fat";

    var jacob = person().setName("@fat")
    ok ( jacob.getName() == result , "correct result specified" );

    result = '@liltunechi';

    ok ( wayne.getName() == result , "correct result specified" );

  });


  // Provide the expected result in the result variable.

  test( "blocks", function () {

    expect(1);

    var result;
    var value = 0;

    if (true) {
      var value = 1;
    }

    if (false) {
      var value = 2;
    }

    {
      var value = 3;
    }

    ok ( value == result , "correct result specified" );

  });


  //
  //      _ ____   ___  _   _
  //     | / ___| / _ \| \ | |
  //  _  | \___ \| | | |  \| |
  // | |_| |___) | |_| | |\  |
  //  \___/|____/ \___/|_| \_|
  //
  // JavaScript object notation


  module("JSON");


  // Provide the expected result in the result variable.

  test( "stringify", function () {

    expect(1);

    var result;
    var object = {};
    object.string = "new property";
    object.number = 3;

    ok ( JSON.stringify(object) == result , "JSON stringified" );

  });


  // Provide the expected result in the result variable.

  test( "toJSON", function () {

    expect(1);

    var object = {};
    object.string = "new property";
    object.toJSON = function () { return "bar"; };

    ok ( JSON.stringify(object) == result , "JSON stringified with toJSON" );
  });


  // Provide the expected result in the result variable.

  test( "parse", function () {

    expect(1);

    var result;
    var json = '{"property":"value"}';

    ok ( JSON.parse(json)["property"] == result , "JSON parsed" );

  });

});