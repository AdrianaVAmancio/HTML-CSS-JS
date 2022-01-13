/* Code by: Adriana Vieira Amancio */

const trigger = document.querySelector('.trigger');
const target = document.querySelector('.target');

trigger.addEventListener('click', changeTarget);

function changeTarget() {
    target.classList.toggle('active-target');
}