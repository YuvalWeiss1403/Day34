// Ex3
// 1)
function getValueType(value) {
    return {
        Value: value,
        type: typeof value
    };
}
console.log(getValueType("hello")); // { value: "hello", type: "string" }
console.log(getValueType(123)); // { value: 123, type: "number" }
console.log(getValueType(true)); // { value: true, type: "boolean" }
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.area = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.length + this.width);
    };
    return Rectangle;
}());
var rec = new Rectangle(3, 5);
console.log(rec.area());
console.log(rec.perimeter());
function distance(p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
var p1 = { x: 0, y: 0 };
var p2 = { x: 3, y: 4 };
console.log(distance(p1, p2)); // Output: 5
// 4)
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 0] = "Ace";
    CardRank[CardRank["Two"] = 1] = "Two";
    CardRank[CardRank["Three"] = 2] = "Three";
    CardRank[CardRank["Four"] = 3] = "Four";
    CardRank[CardRank["Five"] = 4] = "Five";
    CardRank[CardRank["Six"] = 5] = "Six";
    CardRank[CardRank["Seven"] = 6] = "Seven";
    CardRank[CardRank["Eight"] = 7] = "Eight";
    CardRank[CardRank["Nine"] = 8] = "Nine";
    CardRank[CardRank["Ten"] = 9] = "Ten";
    CardRank[CardRank["Jack"] = 10] = "Jack";
    CardRank[CardRank["Queen"] = 11] = "Queen";
    CardRank[CardRank["King"] = 12] = "King";
})(CardRank || (CardRank = {}));
function higherRankedCard(card1, card2) {
    if (card1.rank > card2.rank)
        return card1;
    return card2;
}
// 5)
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Person;
}());
var person = new Person('John Doe', 30, 'john.doe@example.com');
console.log(person);
function area2(shape) {
    var circleArea = (Math.PI * (Math.pow(shape.radius, 2)));
    var RectangleArea = shape.width * shape.length;
    return circleArea + RectangleArea;
}
var myShape = { width: 2, length: 4, radius: 1 };
console.log(area2(myShape)); // 11.141592653589793
// 7)
function swap(value1, value2) {
    return [value2, value1];
}
console.log(swap("hello", "world")); // [ 'world', 'hello' ]
console.log(swap(123, 456)); // [456, 123]
console.log(swap(true, false)); // [false, true]
// 8)
function minMax(arr) {
    var min = arr.reduce(function (min, crr) { return (min > crr ? crr : min); });
    var max = arr.reduce(function (max, crr) { return (max < crr ? crr : max); });
    return [min, max];
}
console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
console.log(minMax(["apple", "banana", "cherry"])); // ["apple", "cherry"]
var MyDeveloper = /** @class */ (function () {
    function MyDeveloper(name, age, address, programmingLanguages) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.programmingLanguages = programmingLanguages;
    }
    return MyDeveloper;
}());
var myDeveloper = new MyDeveloper('John Doe', 30, '123 Main St', ['JavaScript', 'TypeScript']);
console.log(myDeveloper);
// Output:
// { name: 'John Doe',
// age: 30,
// address: '123 Main St',
//  programmingLanguages: [ 'JavaScript', 'TypeScript' ] }
