const sec = document.querySelector("#secrate")

const Password = "8082"

sec.addEventListener("click", () => {
    let pass = prompt("Chouse Correct Password:-")
    if (pass === Password) {
        let el = document.querySelector(".name");
        el.href = "Password.html";
        el.innerText = "UNLOCKED"
        let navvv = document.querySelector(".nav");
        el.prepend(el)
    }
});