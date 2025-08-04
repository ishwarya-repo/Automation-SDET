
//if-else
let score = 90;
if(score>=90){
    console.log("Excellent")
}
else if (score<=80){
    console.log("Good")
}
else{
    console.log("Average")
}

//FOR LOOP(When you know how many times you want to repeat something)
for (let i = 1; i <= 5; i++) {
  console.log(`Test Run: ${i}`);
}

//WHILE LOOP (When you don’t know in advance how many times to run, If condition is false at start, it won’t run at all)
let attempts = 0;
while (attempts < 3) {
  console.log(`Retrying test: attempt ${attempts}`);
  attempts++;
}

//DO-WHILE (̌The do...while loop is used to run a block of code at least once, and then repeat it as long as the condition is true.)
let success = 0;
do{
    console.log("Retrying the page - ${success}")
    success++;
}
while(success<=3);

//for-of (To loop through arrays (like test case names, results, form fields))
const testCases = ["Login", "Signup", "Search"];

for (let test of testCases) {
  console.log(`Running Test: ${test}`);
}

