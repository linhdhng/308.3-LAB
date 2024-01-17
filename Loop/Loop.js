
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

for (i = 1; i <= 100;i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. 
//For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; 
//it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime.
// As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. 
//Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. 
//Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

nextPrime:
for (let n = 32; n >= 2; n++) { 

  for (let j = 2; j < n; j++) { 
    if (n % j == 0) continue nextPrime; 
  }
  console.log(n); 
  break
}

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”

const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

for (const c of str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "\n") {
            continue;
        }
    }
	console.log(c);
}
