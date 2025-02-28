/*B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

@MITASK
*/

function countLetter(son) {
  let count = 0;
  for (let a = 0; a < son.length; a++) {
    if (son[a] >= "0" && son[a] <= "9") {
      count++;
    }
  }
  return count;
}

console.log(countLetter("ad2a54y79wet0sfgb9"));

/*TASK A
Harf sifatida kiritilgan birinchi parametr, kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing
Masalan: countLetter("e", "engineer") 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi
A-TASK: 
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

Qilgan Yechimingiz…*/

// function countLetter(e, engineer) {
//   let count = 0;
//   for (let char of engineer) {
//     if (char === e) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("a", "engineer"));

// 20 NodeJS event loop va Callback functionlarni o'rganamiz

// synchronous -> srazu ishga tushib javobni ham tezda talab qiladi
// asynchronous -> sync ishga tushib bolgandan kegin ishga tushadi

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60
// ];

// function maslahatBering(age, callback) {
//   if (typeof age !== "number") callback("insert a number", null);
//   else if (age <= 20) callback(null, list[0]);
//   else if (age > 20 && age <= 30) callback(null, list[1]);
//   else if (age > 30 && age <= 40) callback(null, list[2]);
//   else if (age > 40 && age <= 50) callback(null, list[3]);
//   else if (age > 50 && age <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);

//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//     // callback(null, list[5]);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   //   if (err) console.log("ERROR:", err);
//   //   console.log("javob:", data);

//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// Asynchronous functionlarni qo'llash

// async function maslahatBering(age) {
//   if (typeof age !== "number") throw new Error("insert a number");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age <= 30) return list[1];
//   else if (age > 30 && age <= 40) return list[2];
//   else if (age > 40 && age <= 50) return list[3];
//   else if (age > 50 && age <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// // call via async && await
// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// call via then && catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");
