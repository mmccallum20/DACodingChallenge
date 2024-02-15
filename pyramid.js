// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " pyramid.txt");
  process.exit(1);
}
// Read the file and print its contents.
var fs = require("fs"),
  filename = process.argv[2];
fs.readFile(filename, "utf8", function (err, data) {
  if (err) throw err;

  // Declaring global variables
  let splitData = data.split("\n"); //splitting the data line by line
  let sentenceArray = [];
  let formula = null;

  // creating the triangular numbers formula
  for (let n = 1; n <= splitData.length; n++) {
    formula = (n * (n + 1)) / 2;

    //figuring out the number of rows needed, ie how many numbers from our formula to generate
    if (formula <= splitData.length) {
      word = splitData[formula - 1]; // Getting data from each line

      //Using Regex to remove any extra spaces or numbers
      word = word.replace(/[^a-zA-Z]+/g, "");

      //Using Regex to remove carriage return (/r)
      word = word.replace(/\r/g, "");

      //add the word to the sentence array
      sentenceArray.push(word);
    }
  }

  //putting all the words together from the sentence array
  let finalSentence = sentenceArray.join(" ");
  //remove the final space from the end
  finalSentence = finalSentence.trimEnd();
  console.log(finalSentence);
});
