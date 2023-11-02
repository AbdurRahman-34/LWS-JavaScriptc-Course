/* Object Definition ::: 


 Object Meaning ——> বস্তু
অবজেক্ট ভ্যারিয়েবল মতো ভ্যালু রাখা যায় কিন্তু অবজেক্ট অনেক ভ্যালু একসাথে স্টোর করতে পারে
একটি অবজেক্ট মধ্যে পোপার্টি তাকে এবং ফাঙ্কশনালিটি ও থাকে Objects are variables too. 
But objects can contain many values. You define (and create) a JavaScript object with an object literal:literal:হলো সরাসরি ম্যান দেওয়া


  Object Code :::::::
*/
const car = {
    name : "BMW",
    model : 500,
    weigth : '850kg',
    color  : "black",
    start : function () {
        console.log("car hs started...")
    },
    drive : function () {
        console.log("car is driving")
    }
}


/* Accessing Object Properties ::: 
 --------------------------------------- */
console.log(car.weigth); 
console.log(car['weigth']);
car.start() // function call







/* Do Not Declare Strings, Numbers, and Booleans as Objects!  ::: 
 --------------------------------------- 
 যখন একটি জাভাস্ক্রিপ্ট ভেরিয়েবলকে "নতুন" কীওয়ার্ড দিয়ে ঘোষণা করা হয়, তখন ভেরিয়েবলটিকে একটি অবজেক্ট হিসেবে তৈরি করা হয়:
 
 */

let x = "rohim"; //literal syntex
let y = new String("rohim")