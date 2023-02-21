
// Tìm tháng hiện tại
function getMonth() {
    const x = document.getElementById('title-month-year')
    let text = x.textContent
    let timDauCach = text.search(' ')
    let thang = ''
    let nam = ''
    // tìm tháng
    for (let i = timDauCach + 1; i < text.length; i++) {
        if (text[i] == ',')
            break;
        thang += text[i]
    }
    // tìm năm
    for (let i = text.length - 4; i < text.length; i++)
        nam += text[i]

    // chuyển đổi sang số nguyên
    thang = +thang
    nam = +nam
    ///////////////////////////////////////////////
    let ngay_1_Before = 2;
    let ngay_1_After = 9
    let ngay_2_Before = 10;
    let ngay_2_After = 17;
    let ngay_3_Before = 18;
    let ngay_3_After = 25;
    let ngay_4_Before = 26;
    let ngay_4_After = 3;
    // Tháng 1
    if (thang == 1) {
        ngay_1_Before = 2;
        ngay_1_After = 9
        ngay_2_Before = 10;
        ngay_2_After = 17;
        ngay_3_Before = 18;
        ngay_3_After = 25;
        ngay_4_Before = 26;
        ngay_4_After = 1;
    }
    if (thang == 3) {
        ngay_1_Before = 4;
        ngay_1_After = 11
        ngay_2_Before = 12;
        ngay_2_After = 19;
        ngay_3_Before = 20;
        ngay_3_After = 27;
        ngay_4_Before = 28;
        ngay_4_After = 3;
    }

    // gán tháng này cho 4 button
    const getBtn1 = document.getElementById('btn-lich-1')
    getBtn1.innerHTML = `<strong>${ngay_1_Before}/${thang}/${nam}</strong> => <strong>${ngay_1_After}/${thang}/${nam}</strong>`
    const getBtn2 = document.getElementById('btn-lich-2')
    getBtn2.innerHTML = `<strong>${ngay_2_Before}/${thang}/${nam}</strong> => <strong>${ngay_2_After}/${thang}/${nam}</strong>`
    const getBtn3 = document.getElementById('btn-lich-3')
    getBtn3.innerHTML = `<strong>${ngay_3_Before}/${thang}/${nam}</strong> => <strong>${ngay_3_After}/${thang}/${nam}</strong>`
    const getBtn4 = document.getElementById('btn-lich-4')
    getBtn4.innerHTML = `<strong>${ngay_4_Before}/${thang}/${nam}</strong> => <strong>${ngay_4_After}/${thang + 1}/${nam}</strong>`

    // gán ngày cho 4 button


}



