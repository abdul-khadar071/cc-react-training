function insert(num) 
{
document.form.screen.value = document.form.screen.value + num;
}

function equal()
{
var exp = document.form.screen.value;
if(exp)
{
document.form.screen.value = eval(exp)
}
}

function backspace()
{
var exp = document.form.screen.value;
document.form.screen.value = exp.substring(0, exp.length - 1);
}

function clr()
{ var ex=document.form.screen.value;
document.form.screen.value=ex.substring(0,0)
}