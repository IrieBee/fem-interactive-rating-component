const span = document.querySelector('span');
const submit = document.querySelector('.submit');

document.querySelectorAll('.rating_num').forEach(function(button){
    button.onclick = function() {
        span.textContent = button.dataset.number;
    }
})

// submit.addEventListener('click', function() {
//      if ('.rating_sum') {
//     document.querySelector('.thanks').style.display = 'block';
//     document.querySelector('.form').style.display = 'none';
//      }
//      else return false;
// })

submit.addEventListener('click', function() {
   document.querySelector('.thanks').style.display = 'block';
   document.querySelector('.form').style.display = 'none';
})

