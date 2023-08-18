const span = document.querySelector('span');
const submit = document.querySelector('.submit');
const rating = document.querySelectorAll('.rating_num');

rating.forEach(function(button){
    button.onclick = function() {
        span.textContent = button.textContent;
    }
})


submit.addEventListener('click', function() {
   document.querySelector('.thanks').style.display = 'block';
   document.querySelector('.form').style.display = 'none';
})

