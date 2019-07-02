const sentence = "hello there from lighthouse labs";

const message = function(num, char) {
  setTimeout(() => {
    process.stdout.write(char);
  }, num);
}

let num = 100;
for (let char of sentence) {
  num += 100;
  message(num, char);
}