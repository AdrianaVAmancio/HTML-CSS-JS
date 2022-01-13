/* Code by: Adriana Vieira Amancio */

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext("2d");
context.beginPath();
context.arc(110, 100, 100, 0, 2 * Math.PI);
context.stroke();
context.closePath();

context.font = "25px Arial";
context.strokeText("Hello folks!", 50, 70);
context.strokeText("What is the craic?", 10, 110);