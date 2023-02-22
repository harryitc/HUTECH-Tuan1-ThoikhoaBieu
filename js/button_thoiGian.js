let lich_thang_1 = [
    `<strong>1/1/2023</strong> => <strong>8/1/2023</strong>`,
    `<strong>9/1/2023</strong> => <strong>16/1/2023</strong>`,
    `<strong>17/1/2023</strong> => <strong>24/1/2023</strong>`,
    `<strong>25/1/2023</strong> => <strong>31/1/2023</strong>`
]
let lich_thang_2 = [
    `<strong>1/2/2023</strong> => <strong>8/2/2023</strong>`,
    `<strong>9/2/2023</strong> => <strong>16/2/2023</strong>`,
    `<strong>17/2/2023</strong> => <strong>24/2/2023</strong>`,
    `<strong>25/2/2023</strong> => <strong>2/3/2023</strong>`
]
let lich_thang_3 = [
    `<strong>3/3/2023</strong> => <strong>10/3/2023</strong>`,
    `<strong>11/3/2023</strong> => <strong>18/3/2023</strong>`,
    `<strong>19/3/2023</strong> => <strong>26/3/2023</strong>`,
    `<strong>27/3/2023</strong> => <strong>3/4/2023</strong>`
]
let lich_thang_4 = [
    `<strong>4/4/2023</strong> => <strong>11/4/2023</strong>`,
    `<strong>12/4/2023</strong> => <strong>19/4/2023</strong>`,
    `<strong>20/4/2023</strong> => <strong>27/4/2023</strong>`,
    `<strong>28/4/2023</strong> => <strong>4/5/2023</strong>`
]

let calendar = [
    lich_thang_1,
    lich_thang_2,
    lich_thang_3,
    lich_thang_4
]


function getCalenderByButton() {
    // tìm tháng
    let title_month_year = document.getElementById('title-month-year');
    let text = title_month_year.textContent
    let monthCurrent = ''
    for (let i = text.search(' ') + 1; i < text.search(','); i++) {
        monthCurrent += text[i];
    }
    console.log(monthCurrent);
    // convert string to number
    monthCurrent = (+monthCurrent) - 1;

    // GÁN vào 
    let btn1 = document.getElementById(`lich-btn-1`);
    btn1.innerHTML = calendar[monthCurrent][0]

    let btn2 = document.getElementById(`lich-btn-2`);
    btn2.innerHTML = calendar[monthCurrent][1]

    let btn3 = document.getElementById(`lich-btn-3`);
    btn3.innerHTML = calendar[monthCurrent][2]

    let btn4 = document.getElementById(`lich-btn-4`);
    btn4.innerHTML = calendar[monthCurrent][3]
}





