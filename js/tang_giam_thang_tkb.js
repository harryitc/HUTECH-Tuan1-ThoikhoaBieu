let month = 2, year = 2023

// Nút giảm 1 tháng
function buttonPrev() {
    let x = document.getElementById('title-month-year')
    x.addEventListener('click', decrease_Month(x));
}

// nút tăng 1 tháng
function buttonNext() {
    let x = document.getElementById('title-month-year')
    x.addEventListener('click', increase_Month(x));
}

// CALLBACK giảm 1 tháng và in ra
function decrease_Month(x) {
    if (month === 1) {
        month = 13
        year--;
    }
    x.innerHTML = `<strong>Tháng ${--month}, ${year}</strong>`
}

// CALLBACK tăng 1 tháng và in ra
function increase_Month(x) {
    if (month === 12) {
        month = 1
        year++;
    }
    x.innerHTML = `<strong>Tháng ${++month}, ${year}</strong>`
}