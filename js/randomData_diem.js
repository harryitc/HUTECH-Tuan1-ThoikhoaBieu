
const lengthTR = 9

const maMonHoc = [
    `CMP123`,
    `JKB592`,
    `NDF107`,
    `ENC101`,
    `CMP3075`,
    `CMP1074`,
    `JB76SA`,
    `MXNZ91`
]

const tenMon = [
    `Quốc phòng, an ninh 3`,
    `Tiếng anh 1`,
    `Bóng rổ 1`,
    `Bóng đá 3`,
    `Kỹ thuật lập trình`,
    `Công tác kỹ sư ngành Công nghệ thông tin`,
    `Cơ sở Lập trình`,
    `Thực hành kỹ thuật lập trình`,
    `Quốc phòng, an ninh 1`
]

const tinChi = [0, 1, 2, 3, 4]

const diem = [5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0]

const diemTongKet_CH = ['A', 'B', 'C', 'D', 'E']

const diemTongKet_4 = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0]

const tbody = document.getElementsByTagName('tbody')[0]

let check = true
//////////////////////////////////////////////////////////////
////////////////////// xử lý dữ liệu của table ///////////////
/////////////////////////////////////////////////////////////
for (let indexRow = 0; indexRow < lengthTR; indexRow++) {

    // tạo thẻ tr
    let tr = document.createElement('tr');
    let text_tr = document.createTextNode('')

    tr.appendChild(text_tr)
    document.getElementsByTagName('tbody')[0].appendChild(tr)

    // thêm dữ liệu ngày tháng năm thi học kì vào đầu hàng
    // 
    if (indexRow === 0 && check === true) {
        let th = document.createElement('th')
        th.appendChild(document.createTextNode(`Học kỳ 1 - Năm học 2022-2023`))
        tbody.getElementsByTagName('tr')[indexRow].appendChild(th)
        check = false
        // console.log(indexRow);
        continue
    }

    // tạo thẻ td và thêm Số thứ tự cho mỗi thẻ td
    for (let indexCol = 0; indexCol < lengthTR; indexCol++) {

        let td = document.createElement('td');
        let text_td = document.createTextNode('')
        td.appendChild(text_td)
        tbody.getElementsByTagName('tr')[indexRow].appendChild(td)
        // console.log('row: ', indexRow);
    }

    // lay dữ liệu của thẻ tr
    let theTR = tbody.getElementsByTagName('tr')
    // lấy dữ liệu tại thẻ tr này
    let dataTheTr = theTR[indexRow]
    // lấy dữ liệu của thẻ td từ thẻ tr
    let td = dataTheTr.getElementsByTagName('td')
    // thêm dữ liệu vào thẻ td
    for (let indexCol = 0; indexCol < lengthTR; indexCol++) {
        switch (indexCol) {
            case 0: {
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = indexRow
            }
                break;
            case 1: {
                let numberRandom = Math.floor(Math.random() * maMonHoc.length)
                td[indexCol].innerHTML = `${maMonHoc[numberRandom]}`
            }
                break;
            case 2: {
                let numberRandom = Math.floor(Math.random() * tenMon.length)
                td[indexCol].innerHTML = `${tenMon[numberRandom]}`
            }
                break;
            case 3: {
                let numberRandom = Math.floor(Math.random() * tinChi.length)
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = `${tinChi[numberRandom]}`
            }
                break;
            case 4: {
                let numberRandom = Math.floor(Math.random() * diem.length)
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = `${diem[numberRandom]}`
            }
                break;
            case 5: {
                let numberRandom = Math.floor(Math.random() * diem.length)
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = `${diem[numberRandom]}`
            }
                break;
            case 6: {
                let numberRandom = Math.floor(Math.random() * diem.length)
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = `${diem[numberRandom]}`
            }
                break;
            case 7: {
                let numberRandom = Math.floor(Math.random() * diemTongKet_CH.length)
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = `${diemTongKet_CH[numberRandom]}`
            }
                break;
            case 8: {
                let numberRandom = Math.floor(Math.random() * diemTongKet_4.length)
                td[indexCol].setAttribute('class', 'text-center')
                td[indexCol].innerHTML = `${diemTongKet_4[numberRandom]}`
            }
                break;
        }
    }
}

const setColSpan_title = tbody.getElementsByTagName('tr')[0].querySelector('th')
setColSpan_title.setAttribute("colspan", lengthTR)
