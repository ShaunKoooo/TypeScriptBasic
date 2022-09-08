var greet = "Hello World";
console.log(greet);
var test;
/*/ 會提醒 Type 'number' is not assignable to type 'String'.
test = 888;
//*/
test = 'test';
// 宣告物件
var person = { name: 'Blue', age: 26 };
// 物件屬性 非必填 -> ?
var person1 = {
    name: 'Green',
    age: 34,
    attack: function () { }
};
// 陣列
var arr = ['a', 'b', 'c'];
var arr1 = ['d', 'e', 'f'];
var arr2 = [1, 2, 3];
// 陣列中可放字串或數值
var arr3 = ['a', 1];
// 範型寫法
var arr4 = ['a', 1];
// 函式
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(2, 1));
// 函式解構賦值
var add1 = function (_a) {
    var x = _a.x, y = _a.y;
    return x + y;
};
console.log(add1({ x: 3, y: 5 }));
// 函式沒有回傳值
var add2 = function (_a) {
    var x = _a.x, y = _a.y;
    console.log(x + y);
};
// 函式 一定會拋出錯誤時用 never 
var errorFunc = function () {
    throw new Error('');
};
// undefined / null
var test1;
var test2;
// literal type 常數（只能塞某值）
var test3;
test3 = 'test3';
// ts 自行推論型別
// const 宣告時，型別是 'Hellow World'，因為常數不能修改
var greet1 = 'Hellow World';
// let 宣告時，型別是 string，因為常數不能修改
var greet2 = 'Hellow World';
// 抽象化：使用型別化名
var book1 = {
    title: 'hello',
    content: 'world'
};
var book2 = {
    title: 'hello2',
    content: 'world2'
};
var book3 = {
    title: 'hello3',
    content: 'world3'
};
var book4 = {
    title: 'book4',
    content: 'kkk'
};
var iphone11 = {
    paltform: 'ios',
    releasedAt: '202209',
    RAM: '4GB',
    CPU: 'A13'
};
;
var hardware = {
    RAM: '4GB',
    CPU: 'A13'
};
;
var software = {
    platform: 'android',
    releasedAt: '202209'
};
;
var iphone12 = {
    platform: 'ios',
    releasedAt: '202209',
    RAM: '4GB',
    CPU: 'A14',
    price: 7777,
    brand: 'Apple'
};
