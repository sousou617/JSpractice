var quiz = [
[1, 'In which European city can you find the home of Anne Frank?', 'Amsterdam'],
[2, "How long is the Great Wall of China?", "4000 miles"],
[3, "In which country did Shakespeare s Hamlet live?", "Denmark"],
[4, "Who said 'I think therefore I am'?", "Rene Descartes"],
[5, "How many continents are there?", "seven"],
[6, "What is the noisiest city in the world?", "Hong Kong"],
[7, "What is the main component in glass?", "sand"],
[8, "Which country is the largest producer of olive oil?", "Spain"],
];

var answer;
var response;

for (var i + 0; i < quiz.length; i++){
answer = prompt(quiz,[i],[1]);
response = answer.toLowerCase();

if (response === quiz[i],[2]) {
	document.write(`<h2>You got question ${quiz[i][0]} correct.</h2>`);
}else {
	document.write(`<h2>You got question ${quiz[i][0]} wrong.</h2>`);
}
}