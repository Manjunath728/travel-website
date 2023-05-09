var formreg = document.getElementById('myFormr')
var name1 = document.getElementById('Name')
var email = document.getElementById('Email')
var num = document.getElementById('Num')
var sub = document.getElementById('sub')

var pass = document.getElementById('pass')
var cpass = document.getElementById('cpass')
var dob = document.getElementById('dob')
// var text =  document.getElementById('err')
var d = document.getElementById('date')
var d1 = document.getElementById('date1')


function validate(){
    
  var epatt = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  var npatt = '[A-Za-z0-9]{4,}'
   
  var ppatt = '(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!]).{8,}'

  var numpatt = '\d{9}'
//   console.log(name,email.value)
    
  var e = email.value
  var n = name1.value
  var p = pass.value
  var cp = cpass.value
  var number = num.value
// console.log(n,p)
// console.log(number)
//name val
if(n.match(npatt)){
    // form.classList.add("valid")
    name1.style.borderBottom = '5px solid green'
    // console.log("coorect");
 }else{
    name1.style.borderBottom = '5px solid red'
    name1.classList.add("invalid")
    // console.log('wrong');
 }
if(n == ""){
    name1.style.borderBottom = 'none'
}

//passworsd
if(p.match(ppatt)){
    // form.classList.add("valid")
    pass.style.borderBottom = '5px solid green'
    // console.log("coorect");
 }else{
    pass.style.borderBottom = '5px solid red'
    pass.classList.add("invalid")
    // console.log('wrong');
 }

if(p == ""){
    pass.style.borderBottom = 'none'
}
// cp = cp.substring(0,cp.length-2);
//confirm
// if(cp == p){
//     // form.classList.add("valid")
//     cpass.style.borderBottom = '5px solid green'
//     // console.log("coorect");
//  }else{
//     cpass.style.borderBottom = '5px solid red'
//     cpass.classList.add("invalid")
//     // console.log('wrong');
//  }
// if(cp == ""){
//     cpass.style.borderBottom = 'none'
// }


//email val
 if(e.match(epatt)){
    // form.classList.add("valid")
    email.style.borderBottom = '5px solid green'
    console.log("coorect");
 }else{
    email.style.borderBottom = '5px solid red'
    email.classList.add("invalid")
    console.log('wrong');
 }
if(e == ""){
    email.style.borderBottom = 'none'
}

//number val
// if(number.match(/^\d+$/)){
//     // form.classList.add("valid")
//     num.style.borderBottom = '5px solid green'
//     // console.log("coorect");
//  }else{
//     num.style.borderBottom = '5dpx solid red'
//     num.classList.add("invalid")
//     // console.log('wrong');
//  }
if(number == ""){
    num.style.borderBottom = 'none'
}
console.log(number.match(numpatt))



sub.addEventListener('click',(event)=>{
    event.preventDefault()
    if(n.match(npatt) && p.match(ppatt) && e.match(epatt)){
        window.alert('huu')
    }
    // console.log('hii')
})




}