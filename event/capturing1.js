var dv1 = document.getElementById('dv1')
var dv2 = document.getElementById('dv2')
var dv3 = document.getElementById('dv3')

dv1.addEventListener('click', f1, true)
dv2.addEventListener('click', f1, true)
dv3.addEventListener('click', f1,true)

function f1() {
    console.log(this.id);
}