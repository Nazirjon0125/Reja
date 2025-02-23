// NodeJS event loop va Callback functionlarni o'rganamiz
console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", // 20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "uzingizga ishlashni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq", //60
];

function maslahatBering(age, callback) {
  if (typeof age !== "number") callback("insert a number", null);
  else if (age <= 20) callback(null, list[0]);
  else if (age > 20 && age <= 30) callback(null, list[1]);
  else if (age > 30 && age <= 40) callback(null, list[2]);
  else if (age > 40 && age <= 50) callback(null, list[3]);
  else if (age > 50 && age <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
    // callback(null, list[5]);
  }
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
  //   if (err) console.log("ERROR:", err);
  //   console.log("javob:", data);

  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});

console.log("passed here 1");
