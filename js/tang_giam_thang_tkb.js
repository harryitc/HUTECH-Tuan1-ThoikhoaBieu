
///
let date = new Date()
let month = date.getMonth() + 1;
let year = date.getFullYear()

let dataOfMonth = 4

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
    if (month - 1 === 0) {
        alert('khong co du lieu')
        return;
    }
    month--
    console.log('month: ', month);
    x.innerHTML = `<strong>Tháng ${month}, ${year}</strong>`
}

// CALLBACK tăng 1 tháng và in ra
function increase_Month(x) {
    if (month + 1 > dataOfMonth) {
        alert('khong co du lieu');
        return
    }
    month++
    x.innerHTML = `<strong>Tháng ${month}, ${year}</strong>`
}