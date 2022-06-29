 buttons = document.querySelectorAll('.cal-but');
 display = document.querySelector('#display');
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
function calculate(event) {
  clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {

    if (display.value !== '')
    {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C')
  {
    display.value = '';
  }
  else if (clickedButtonValue === '←')
 {
   display.value=display.value.slice(0,-1);
 }else {
    display.value += clickedButtonValue;
  }
}
