const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accor => {

    const icon = accor.querySelector(".icon");

    const answer = accor.querySelector(".answer")

    accor.addEventListener("click" , ()=> {
        icon.classList.toggle("active")
        answer.classList.toggle("active")


    })

})

