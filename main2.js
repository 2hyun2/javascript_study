// 변수 var let const
// controlflow if switch for while

const a = 1 + 2 + 3 + 4 + 5;
let b = a + 6;
console.log(b);

b = 7;
console.log(b);

// controlflow
if (a === 21) {
  console.log("right");
} else {
  console.log("wrong");
}

switch (a) {
  case 21:
    console.log("a is 21");
    break;
  case 15:
    console.log("a is 15");
    break;
  default:
    console.log("default case");
    break;
}

let i = 0;
while (i < 10) {
  if (i > 5) {
    break;
  }
  console.log(i);
  i = i + 1;
}

for (let index = 0; index < 10; index++) {
  console.log(index);
}
