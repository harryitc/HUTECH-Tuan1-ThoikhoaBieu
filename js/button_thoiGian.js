const lich_thang_1 = [
    `<strong>01/01/2023</strong> => <strong>07/01/2023</strong>`,
    `<strong>08/01/2023</strong> => <strong>14/01/2023</strong>`,
    `<strong>15/01/2023</strong> => <strong>21/01/2023</strong>`,
    `<strong>22/01/2023</strong> => <strong>28/01/2023</strong>`,
];
const lich_thang_2 = [
    `<strong>29/01/2023</strong> => <strong>04/02/2023</strong>`,
    `<strong>05/02/2023</strong> => <strong>11/02/2023</strong>`,
    `<strong>12/02/2023</strong> => <strong>18/02/2023</strong>`,
    `<strong>19/02/2023</strong> => <strong>25/02/2023</strong>`,
];
const lich_thang_3 = [
    `<strong>26/02/2023</strong> => <strong>04/03/2023</strong>`,
    `<strong>05/03/2023</strong> => <strong>11/03/2023</strong>`,
    `<strong>12/03/2023</strong> => <strong>18/03/2023</strong>`,
    `<strong>19/03/2023</strong> => <strong>25/03/2023</strong>`,
];
const lich_thang_4 = [
    `<strong>26/03/2023</strong> => <strong>02/04/2023</strong>`,
    `<strong>03/04/2023</strong> => <strong>09/04/2023</strong>`,
    `<strong>10/04/2023</strong> => <strong>16/04/2023</strong>`,
    `<strong>17/04/2023</strong> => <strong>23/04/2023</strong>`,
];

const calendar = [lich_thang_1, lich_thang_2, lich_thang_3, lich_thang_4];

/////////////WHEN LOAD PAGE, WE WILL SHOW DATA CURRENT//////////////

let title_month_year = document.getElementById("title-month-year");
let text = title_month_year.textContent;
let monthCurrent = "";
for (let i = text.search(" ") + 1; i < text.search(","); i++) {
    monthCurrent += text[i];
}

// convert string to number
monthCurrent = +monthCurrent - 1;

// GÁN vào
let btn1 = document.getElementById(`lich-btn-1`);
btn1.innerHTML = calendar[monthCurrent][0];

let btn2 = document.getElementById(`lich-btn-2`);
btn2.innerHTML = calendar[monthCurrent][1];

let btn3 = document.getElementById(`lich-btn-3`);
btn3.innerHTML = calendar[monthCurrent][2];

let btn4 = document.getElementById(`lich-btn-4`);
btn4.innerHTML = calendar[monthCurrent][3];

/////////   END /////////////////

function getCalenderByButton() {
    // tìm tháng
    let title_month_year = document.getElementById("title-month-year");
    let text = title_month_year.textContent;
    let monthCurrent = "";
    for (let i = text.search(" ") + 1; i < text.search(","); i++) {
        monthCurrent += text[i];
    }

    // convert string to number
    monthCurrent = +monthCurrent - 1;

    // GÁN vào
    let btn1 = document.getElementById(`lich-btn-1`);
    btn1.innerHTML = calendar[monthCurrent][0];

    let btn2 = document.getElementById(`lich-btn-2`);
    btn2.innerHTML = calendar[monthCurrent][1];

    let btn3 = document.getElementById(`lich-btn-3`);
    btn3.innerHTML = calendar[monthCurrent][2];

    let btn4 = document.getElementById(`lich-btn-4`);
    btn4.innerHTML = calendar[monthCurrent][3];
}

let TietHoc = [`1-3`, `2-6`, `7-11`];
let MaMonHoc = [`CMP1708`, `H2CMN1`, `NDF211`, `ABC81`];
let TenMonHoc = [`NDF211 - Quốc phòng, an ninh 4`, `Bóng rổ 1`, `Bóng rổ 2`, `Thực hành kỹ thuật lập trình`, `Tiếng Anh 2`, `Toán cao cấp`,
];
let Phong = [`E1-12.01`, `E2-02.02`, `E3-08.09`, `E1-05.12`, `E2-01-08`];
let Lop = [
    `LT_16`,
    `TC_31`,
    `KT-17`,
    `C2_32`,
    `LT_34`,
    `VC_63`,
    `KC_91`,
    `QP_E1`,
];

let data = [
    [
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 2, ngày 01/02/2023</th>
        </tr>
        <tr id="0" name="0" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[1]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[1]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[3]}</strong>
            </td>
        </tr>
        `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 3, ngày 02/02/2023</th>
        </tr>
        <tr id="1" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[0]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[1]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[3]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[3]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
        `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 5, ngày 04/02/2023</th>
        </tr>
        <tr id="2" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[0]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[2]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[3]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[3]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[1]}</strong>
            </td>
        </tr>
        `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 7, ngày 06/02/2023</th>
        </tr>
        <tr id="3" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[1]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[3]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[2]}</strong>
            </td>
        </tr>
        `,
    ], ////////////////////////////////////////////////////////
    [
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 3, ngày 06/02/2023</th>
        </tr>
        <tr id="0" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[1]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[0]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[1]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 5, ngày 08/02/2023</th>
        </tr>
        <tr id="1" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[0]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[2]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[0]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[3]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 6, ngày 09/02/2023</th>
        </tr>
        <tr id="2" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[1]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[4]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
    ],
    /////////////////////////////////////////////////////////////////
    [
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 2, ngày 12/02/2023</th>
        </tr>
        <tr id="0" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[0]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[2]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[3]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[1]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 4, ngày 14/02/2023</th>
        </tr>
        <tr id="1" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[1]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[1]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[3]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 5, ngày 15/02/2023</th>
        </tr>
        <tr id="2" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[1]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[3]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[1]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[3]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 6, ngày 16/02/2023</th>
        </tr>
        <tr id="3" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[0]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[1]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[0]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[0]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[4]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Chủ Nhật, ngày 18/02/2023</th>
            </tr>
        <tr id="4" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[1]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
    ],
    /////////////////////////////////////////////////////////////////
    [
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 2, ngày 19/02/2023</th>
        </tr>
        <tr id="0" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[1]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[3]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[2]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 3, ngày 20/02/2023</th>
        </tr>
        <tr id="1" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[1]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[3]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 6, ngày 23/02/2023</th>
        </tr>
        <tr id="2" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[1]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[2]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[0]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Thứ 7, ngày 24/02/2023</th>
        </tr>
        <tr id="3" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[0]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[0]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[2]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
        `
        <tr>
            <th id="thu-ngay-thang" colspan="4"
                class="background-thu-ngay-thang thu-ngay-thang">Chủ nhật, ngày 25/02/2023</th>
        </tr>
        <tr id="4" data-toggle="modal" data-target="#myModal" onclick="getData(id)">
            <td class="tiet-hoc">${TietHoc[2]}</td>
            <td class="ma-mon-hoc">${MaMonHoc[2]}</td>
            <td class="ten-mon-hoc">${TenMonHoc[1]}</td>
            <td class="thong-tin">Phòng: <strong class="phong-hoc">${Phong[2]}</strong> - Lớp:
                <strong class="lop-hoc">${Lop[6]}</strong>
            </td>
        </tr>
            `,
    ],
];

function showDataTKB(button) {
    let elements = document.getElementsByClassName("tbody-thu-ngay-thang");
    switch (button) {
        case 1:
            {
                for (let i = 0; i < 2; i++) {
                    elements[i].innerHTML = data[button - 1][i];
                }
            }
            break;
        case 2:
            {
                for (let i = 0; i < 3; i++) {
                    elements[i].innerHTML = data[button - 1][i];
                }
            }
            break;
        case 3:
            {
                for (let i = 0; i < 4; i++) {
                    elements[i].innerHTML = data[button - 1][i];
                }
            }
            break;
        case 4:
            {
                for (let i = 0; i < 3; i++) {
                    elements[i].innerHTML = data[button - 1][i];
                }
            }
            break;
    }
}

function getData(idData) {

    // console.log('tbody-content--thong-tin-tiet-hoc');
    let content = document.getElementById(idData);
    console.log(content);
    // console.log(content.getElementsByClassName('thong-tin')[0].textContent);
    console.log(content.getElementsByTagName('strong')[1].textContent);
    // lay lop hoc
    console.log(content.getElementsByClassName('lop-hoc')[0]);
    let lopHoc = content.getElementsByTagName('strong')[1].textContent
    let modalLop = document.getElementById('modal-body__lop');
    modalLop.innerHTML = `Lớp học: ${lopHoc}`

    // lay phong hoc
    let phongHoc = content.getElementsByClassName('phong-hoc')[0].textContent
    console.log(phongHoc);
    let modalPhongHoc = document.getElementById('modal-body__phongHoc');
    modalPhongHoc.innerHTML = `Phòng học: ${phongHoc}`

    // lấy thứ 
    // let thu = document.getElementsByClassName('tbody-thu-ngay-thang')[idData].
    //     thu = getThu(thu)
    // console.log(thu);
    // let modalThu = document.getElementById('modal-body__thu');
    // modalThu.innerHTML = `${thu}`

    // lấy tiết
    let tietHoc = content.getElementsByClassName('tiet-hoc')[0].textContent

    console.log(tietHoc);
    let modalTietHoc = document.getElementById('modal-body__tietHoc')
    modalTietHoc.innerHTML = `Tiết học: ${tietHoc}`

    // lấy tên giảng viên
    // let giangVien = document.getElementsByClassName('giang-vien')[0].textContent
    // console.log(giangVien);
    // let modalGiangVien = document.getElementById('modal-body__giangVien')
    // modalGiangVien.innerHTML = giangVien
}

function getThu(thu) {
    let dauPhay = thu.search(',');
    let text = ''
    for (let i = 0; i < dauPhay; i++) {
        text += thu[i];
    }
    return text;
}