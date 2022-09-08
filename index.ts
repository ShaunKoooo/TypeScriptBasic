const greet = "Hello World";
console.log(greet);

let test: String;
/*/ 會提醒 Type 'number' is not assignable to type 'String'.
test = 888;
//*/
test='test';

// 宣告物件
const person: {name: String, age: Number} = {name: 'Blue', age: 26};

// 物件屬性 非必填 -> ?
const person1: {
    name: String,
    age: Number,
    attack?: Function 
} = {
    name: 'Green',
    age: 34,
    attack: () => {}
};

// 陣列
const arr: Array<String> = ['a', 'b', 'c'];
const arr1: string[] = ['d', 'e', 'f'];
const arr2: number[] = [1, 2, 3];
// 陣列中可放字串或數值
const arr3: (number | string) [] = ['a', 1];
// 範型寫法
const arr4: Array<number | string> = ['a', 1];

// 函式
const add = (n1: number, n2: number): number => {
    return n1 + n2;
};
console.log(add(2, 1));

// 函式解構賦值
const add1 = ({x, y}: {x: number, y: number}): number =>  {
    return x + y;
}

console.log(add1({x: 3, y: 5}));

// 函式沒有回傳值
const add2 = ({x, y}: {x: number, y: number}) : void => {
    console.log(x + y);
}

// 函式 一定會拋出錯誤時用 never 
const errorFunc = (): never => {
    throw new Error(''); 
}

// undefined / null
let test1: undefined;
let test2: null;

// literal type 常數（只能塞某值）
let test3: 'test3' | 'test4';
test3 = 'test3';

// ts 自行推論型別
// const 宣告時，型別是 'Hellow World'，因為常數不能修改
const greet1 = 'Hellow World';
// let 宣告時，型別是 string，因為常數不能修改
let greet2 = 'Hellow World';

// 抽象化：使用型別化名
const book1: {
    title: String;
    content: String;
} = {
    title: 'hello',
    content: 'world'
};

const book2: {
    title: String;
    content: String;
} = {
    title: 'hello2',
    content: 'world2'
};

type Book = {
    title: string;
    content: string;
};

const book3: Book = {
    title: 'hello3',
    content: 'world3'
};

// 聯集
type Book1 = {
    title: string;
    content: string;
};

type Device = {
    name: string;
    price: string;
};

type Product = Book1 | Device;

const book4: Product = {
    title: 'book4',
    content: 'kkk',
};

// 交集
type Software = {
    paltform: string;
    releasedAt: string;
};

type Hardware = {
    RAM: string;
    CPU: string;
};

type MobilePhone = Software & Hardware;

const iphone11: MobilePhone = {
    paltform: 'ios',
    releasedAt: '202209',
    RAM: '4GB',
    CPU: 'A13',
};

// 抽象化 使用介面
interface Hardware1 {
    RAM: string;
    CPU: string
};

const hardware: Hardware1 = {
    RAM: '4GB',
    CPU: 'A13',
};

interface Software1 {
    platform: string;
    releasedAt: string;
};

const software: Software1 = {
    platform: 'android',
    releasedAt: '202209',
};

interface MobilePhone1 extends Hardware1, Software1 {
    price: number;
    brand: string;
};

const iphone12: MobilePhone1 = {
    platform: 'ios',
    releasedAt: '202209',
    RAM: '4GB',
    CPU: 'A14',
    price: 7777,
    brand: 'Apple',
};