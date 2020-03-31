//Task 2
const instanсe_1 = new One('t1', 't2');

//Task 4
const instanсe_2 = new OneE('t3', 't4', 't5');

//Task 5
console.log(One);
console.log(instanсe_1);
console.log(OneE);
console.log(instanсe_2);
console.log(instanсe_2.item_1);

// Task 7
const box1 = new Box(15, 20, 25);
console.log(box1.inBox(14, 19, 22));

//Task 9
const superBoxInstance = new SuperBox(15, 20, 30, 'blue');
// console.log(SuperBox);
console.log(superBoxInstance.inBox(13, 18, 262));

//Task 10
let out = document.querySelector('.out');
// let draw = new DrawField(100, 200, "one");
// draw.create(out);

let rect = new Rect(100, 200, "one");
rect.create(out);
rect.fillRect('one', 0, 0, 300, 150);


