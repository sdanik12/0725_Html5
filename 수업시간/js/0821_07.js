let food = ["햄버거", "돈까스", "칼국수", "김치찌개", "쌀국수", "순두부찌개"];
let i = Math.floor(Math.random() * 6); //정수로 반환해야하는데 랜덤은 0부터 0.9999...사이의 값을 반환함.
console.log(i);
document.write(food[i]);
let bg = ["red", "blue", "pink", "yellow", "green"];
let j = Math.floor(Math.random() * 5);
document.querySelector("body").style.backgroundColor = bg[j];
