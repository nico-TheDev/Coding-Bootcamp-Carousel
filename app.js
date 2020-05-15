const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let name = document.querySelector('.header__name');
let role = document.querySelector('.header__role');
let quote = document.querySelector('.header__testimony');
let userImg = document.querySelector('.header__img');
let count = 0;

nextBtn.addEventListener('click',()=>{
    count++;
    if (count > 1 ){
        count = 0;
    }
    change();
});
prevBtn.addEventListener('click',()=>{
    count--;
    if (count < 0){
        count = 1;
    }
    change();
});


function change(){
    console.log(userImg.src);
    if(count === 1){
        name.textContent = 'John Tarkpor';
        role.textContent = 'Junior Front-end Developer';
        quote.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`;
        userImg.src = './images/image-john.jpg';
    }
    else if(count === 0){
        name.textContent = 'Tanya Sinclair';
        role.textContent = 'UX Engineer';
        quote.textContent = `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`;
        userImg.src = './images/image-tanya.jpg';
    }
 
}