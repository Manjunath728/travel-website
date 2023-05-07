const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        console.log(entry.target.classList)
        if(entry.isIntersecting){
            
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show")
        }
    });

})

const hiddenElementsX = document.querySelectorAll(".hiddenX,.hiddenY,.pop")
console.log(hiddenElementsX)
hiddenElementsX.forEach((element)=>{
    observer.observe(element)
})
var mode="light"


function darkMode(){
    if(mode=="light"){
        mode="dark"
        document.getElementsByTagName("body")[0].style.backgroundColor="#082032"
        document.getElementById("navbar").style.backgroundColor="#082032"
        document.getElementById("logo").style.color="white"
        document.querySelectorAll(".nav-link,.nav-item").forEach((ele)=>{
                ele.style.color="white"
                console.log("done")
            })
            document.querySelectorAll(".book,.card,.packages").forEach((ele)=>{
                ele.style.backgroundColor="#082032"
                ele.style.color="white"
                ele.style.textShadow="0px 1px 1px black"
               
                console.log(ele)
            })
        
   
    }
    else{
        mode="light"
        document.getElementById("navbar").style.backgroundColor="#f9f9f9"
        document.getElementById("logo").style.color="black"
        document.querySelectorAll(".nav-link,.nav-item").forEach((ele)=>{
            ele.style.color=" rgb(69, 67, 66)"
            console.log("done")
        })
        
        
    }
    
}

