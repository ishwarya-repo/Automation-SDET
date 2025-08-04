
//Asynchronous JavaScript you run tasks (like API calls or timers) without blocking the rest of your code from running.
// Promise
let pizzaOrder = new Promise((resolve, reject) => {
  let isAvailable = true;

  if (isAvailable) {
    resolve("Pizza is ready");
  } else {
    reject("pIZZA NOt available");
  }
});

//then ( promise -success) catch (promise - fAIL)
pizzaOrder
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
  //Promise	- Pizza order receipt
  //resolve()	- Pizza delivered on time
  //reject()	- Pizza cancelled
  //then()	- You eat the pizza
 //catch()	- You get angry and order biryani
  //await	- You patiently wait for pizza
  //async	- “This function might take time”