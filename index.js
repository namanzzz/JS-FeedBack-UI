const ratingEls = document.querySelectorAll('.rating')
const btnEl = document.getElementById('btn')
let selectedRating = ""
const containerEl = document.getElementById('container')

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
            // console.log(event.target.innerText  || event.target.parentNode.innerText)
        selectedRating = event.target.innerText || event.target.parentNode.innerText
           
            removeActive();
            event.target.classList.add('active')
            event.target.parentNode.classList.add('active')

    })
})

btnEl.addEventListener('click',(event)=>{
    if(selectedRating!==""){
        containerEl.innerHTML = `
        <strong>Thank You</strong>
        <br><br>
        <strong> Feedback: ${selectedRating} </strong>
        <p>
            we'll use your feedback to increase our customer support
        </p>
        `
    }
})


function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active');
    }) 
}