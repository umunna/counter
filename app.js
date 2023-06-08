let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
        count++; 
    }
    else if (styles.contains("decrease")) {
        count--;
    }
    else {
        count = 0;
    }
    if(count > 0) {
        value.style.color = "#F8F988";
    }else{
        value.style.color = "#F0FF42";
    }
    if (count === 0){
        value.style.color = "#f8ffdb";
    }
value.textContent = count;
});
});