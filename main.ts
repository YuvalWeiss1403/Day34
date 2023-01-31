// Ex3
// 1)

type value = string | number | boolean;
function getValueType(value: value): object {
  return {
    Value: value,
    type: typeof value,
  };
}

console.log(getValueType("hello")); // { value: "hello", type: "string" }
console.log(getValueType(123)); // { value: 123, type: "number" }
console.log(getValueType(true)); // { value: true, type: "boolean" }

// 2)

interface IRectangle {
  length: number;
  width: number;
}

class Rectangle implements IRectangle {
  length: number;
  width: number;
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }
  area(): number {
    return this.length * this.width;
  }
  perimeter(): number {
    return 2 * (this.length + this.width);
  }
}

let rec = new Rectangle(3, 5);
console.log(rec.area());
console.log(rec.perimeter());

// 3)
interface I2DPoint {
  x: number;
  y: number;
}

function distance(p1: I2DPoint, p2: I2DPoint): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const p1: I2DPoint = { x: 0, y: 0 };
const p2: I2DPoint = { x: 3, y: 4 };
console.log(distance(p1, p2)); // Output: 5

// 4)
enum CardRank {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

interface Card {
  suit: string;
  rank: CardRank;
}

function higherRankedCard(card1: Card, card2: Card): Card {
  if (card1.rank > card2.rank) return card1;
  return card2;
}

// 5)
class Person {
  name: string;
  age: number;
  email: string;
  constructor(name:string,age:number,email:string){
    this.name=name;
    this.age=age;
    this.email=email;
  }
}

const person = new Person('John Doe', 30, 'john.doe@example.com');
console.log(person);

// 6)
interface ICircle{
    radius:number;
}

type Shape = IRectangle&ICircle;
function area2(shape:Shape):number{
    let circleArea = (Math.PI*(shape.radius**2));
    let RectangleArea = shape.width*shape.length;
    return circleArea+RectangleArea;
}

const myShape: Shape = { width: 2, length: 4, radius: 1 };
console.log(area2(myShape)); // 11.141592653589793

// 7)

function swap<Type>(value1:Type,value2:Type):[Type,Type]{
    return [value2,value1];
}

console.log(swap("hello", "world")); // [ 'world', 'hello' ]
console.log(swap(123, 456)); // [456, 123]
console.log(swap(true, false)); // [false, true]

// 8)

function minMax<Type>(arr: Type[]): Type[] {
  let min: Type = arr.reduce((min, crr) => (min > crr ? crr : min));
  let max: Type = arr.reduce((max, crr) => (max < crr ? crr : max));
  return [min,max];
}

console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
console.log(minMax(["apple", "banana", "cherry"])); // ["apple", "cherry"]

// 9)
interface IPerson{
    name:string;
    age:number;
}
interface IDeveloper{
    address:string;
    programmingLanguages:string[];
}

type DeveloperPerson = IPerson&IDeveloper;

class MyDeveloper implements DeveloperPerson{
    name:string;
    age:number;
    address:string;
    programmingLanguages:string[];

    constructor(name:string,age:number,address:string,programmingLanguages:string[]){
        this.name=name;
        this.age=age;
        this.address=address;
        this.programmingLanguages = programmingLanguages;
    }
}

const myDeveloper = new MyDeveloper('John Doe', 30, '123 Main St', ['JavaScript', 'TypeScript']);
console.log(myDeveloper);
// Output:
// { name: 'John Doe',
// age: 30,
// address: '123 Main St',
//  programmingLanguages: [ 'JavaScript', 'TypeScript' ] }