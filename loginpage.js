const signinbtn = document.querySelector('.signinbtn');
const signupbtn = document.querySelector('.signupbtn');
const boxform = document.querySelector('.boxform');
const body = document.querySelector('body')

signupbtn.onclick = function(){
    boxform.classList.add('active')
    body.classList.add('active')
}

signinbtn.onclick = function(){
    boxform.classList.remove('active')
    body.classList.remove('active')
}