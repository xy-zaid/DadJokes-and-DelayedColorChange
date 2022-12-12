// class Book{
//     constructor(name,year,publisher){
//         this.name=name;
//         this.year=year;
//         this.publisher=publisher;
//     }
//     greet() {
//         console.log(`name of this book is ${this.name}`)
//     }
//     let {name,year,publisher}=this;

// }

//delayed change of color project:-

// function delayedColorChange(clr, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = clr;
//       resolve();
//     }, time);
//   });
// }

// delayedColorChange("violet", 1000)
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("black", 1000))
//   .then(() => delayedColorChange("red", 1000))
//   .then(() => delayedColorChange("pink", 1000));

// let a=async function hello(){}
// a().th
// async
// const login=async(cond)=>{
//     let condition = true;
//     if(condition){
//         return('inside if')
//     }
//     else{
//         console.log('inside else');
//     }
// }
// console.log(login());
// let data = {"ticker":{"base":"BTC","target":"USD","price":"47718.68322973","volume":"23073.37286485","change":"38.20527381"},"timestamp":1633330982,"success":true,"error":""}

// console.log(data);

// XMLHttpRequest example

// let xhr = new XMLHttpRequest();

// xhr.onload=function() {
//   console.log("ALL DONE");
//   console.log(this);
// };

// xhr.onerror=(() => {
//   console.log("ERROR");
//   console.log(this);
// });

// xhr.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
// xhr.send();
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((r) => r.json())
//   .then((data) => console.log(data));
// axios
//   .get("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));


//dad joke project :-

let btn = document.querySelector("button");
const fetchDadJoke = async function () {
  const c = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", c);
  //   console.log(res.data.joke);
  const newElement = document.createElement("li");
  newElement.append(res.data.joke);
  let ul = document.querySelector("ul");

  ul.appendChild(newElement);
  //   newElement.innerText = "";
};

btn.addEventListener("click", fetchDadJoke);