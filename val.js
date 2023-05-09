var form = document.getElementById('form')
// var name = document.getElementById('name').value
// var email = document.getElementById('email')
var text =  document.getElementById('err')
var d = document.getElementById('date')
var d1 = document.getElementById('date1')

 
// function validate(){
    
//   var patt1 = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  
  
//   var e = email.value
//  if(e.match(patt1)){
//     // form.classList.add("valid")
//     email.style.borderBottom = '10px solid green'
//     // console.log("coorect");
//  }else{
//     email.style.borderBottom = '10px solid red'
//     email.classList.add("invalid")
//     // console.log('wrong');
//  }
// if(e == ""){
//     email.style.borderBottom = 'none'
// }
// }

var date = new Date()
var day = date.getDate()
var m = date.getMonth()
var y = date.getFullYear()
// console.log(day,m,y);
if(m < 10){
    m = "0" + (m + 1)
}
if(day < 10){
    day = "0" + day
}
console.log(`${y}-${m}-${day}`)
d.setAttribute('min',`${y}-${m}-${day}`)
console.log(day,m,y)
var dd1 = date.getDate()
dd1 = dd1 + 3
if(dd1 < 10){
    dd1 = "0" + (dd1)
}
console.log(`${y}-${m}-${dd1}`);
d1.setAttribute('min',`${y}-${m}-${dd1}`)
