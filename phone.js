console.log("hello, I am here");

let toggle = document.getElementById('addToggle');
// let addToggle = document.getElementsByClassName('addToggle');
console.log(toggle.childNodes);
// toggle.appendChild(addToggle);

let ele1 = document.createElement('div');

ele1.innerHTML = `<ul type="circle">
<li><a href="#section-1">Home</a></li>
<li><a href="#section-2">About Us</a></li>
<li><a href="#section-3">Services</a></li>
<li><a href="#section-4">Contact Us</a></li>
</ul>`;

let check1 = true;

// while(1){

    toggle.addEventListener('click' ,function display(){
        if(check1){
            ele1.setAttribute('class' , 'addToggle');
            toggle.append(ele1);
            check1 = false;
        }
        else{
            ele1.remove();
            check1 = true;
        }   
     });

   


