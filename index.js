/* 
!Bài 1:

!input:
Nhập max.
!xử lý:
var sumN = 1;
for (var i = 2; i < gtMax; i++) {
    sumN += i;
    if (sumN > gtMax) {
      var nnnn = i;
      break;
    }
  }

!output:
n là số tổng của số từ 1 đến n lớn hơn số nhập.
 */
function timSNDMin() {
  var sumN = 1;
  var gtMax = document.getElementById("gtMax").value * 1;
  for (var i = 2; i < gtMax; i++) {
    sumN += i;
    if (sumN > gtMax) {
      var SNDMin = i;
      break;
    }
  }
  document.querySelector(".hienSNDMin").innerHTML = SNDMin;
}

/* 
!Bài 2:

!input:
Nhập x, n.
!xử lý:
S(n) = x + x^2 + x^3 +...+ x^n.
for (var i = 1; i <= n; i++) {
    sn += Math.pow(x, i);
  }
!output:
S(n)
 */
function tinhTongSn() {
  var sn = 0;
  var x = Number(document.getElementById("x").value);
  var n = Number(document.getElementById("n").value);
  for (var i = 1; i <= n; i++) {
    sn += Math.pow(x, i);
  }
  document.querySelector(".htTongSn").innerHTML = sn;
}
/* 
!Bài 3:

!input:
Nhập n.
!xử lý:
S(n) = x + x^2 + x^3 +...+ x^n.
for (var i = 1; i <= n; i++) {
    sn += Math.pow(x, i);
  }
!output:
S(n)
 */
function tinhGiaiThua() {
  var gt = 1;

  var nGT = Number(document.getElementById("nGT").value);
  for (var i = 1; i <= nGT; i++) {
    gt *= i;
  }
  console.log(gt);
  document.querySelector(".htGiaiThua").innerHTML = gt;
}
/* 
!Bài 4:

!input:
Sự kiện click button.
!xử lý:
thực hiện cộng chủi 
i lẽ thì thêm thẻ div có background-color: red, chẵn thì đỏ;
var divShow = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      divShow += `<div style="height: 50px; width: 100%; background-color: red; margin-bottom: 10px"></div>`;
    } else {
      divShow += `<div style="height: 50px; width: 100%; background-color: blue; margin-bottom: 10px"></div>`;
    }
  }
!output:
In ra 10 thẻ div với 5 thẻ bg đỏ ở vị trí chẵn và xanh thẻ xanh ở vị trí lẽ.
 */
function showDiv() {
  var divShow = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      divShow += `<div style="height: 50px; width: 100%; background-color: red; margin-bottom: 10px"></div>`;
    } else {
      divShow += `<div style="height: 50px; width: 100%; background-color: blue; margin-bottom: 10px"></div>`;
    }
  }
  document.getElementById("baiFourBody").innerHTML = divShow;

  // var divNumber = 0;
  // for (let i = 1; i <= 10; i++) {
  //   document.getElementById(divNumber).style.display = "block";
  // }
}
/* 
!Bài 5:

!input:
Nhập n.
!xử lý:
số nguyên tố là số: x%1 == 0. x%x ==0
tìm trong khoảng từ 
lớn hơn 1 tới nhỏ hơn số nhập nếu trong khoảng đó, có số nào chia hết cho số nhập thì số đó không phải là số nguyên tố. 
xát định dc số nguyên tố thì thêm số vào mảng.
!output:
số nguyên tố từ 1 đến n
 */
function checkSNT(numBer) {
  if (numBer < 2) {
    return "Không có số nguyên tố nào!";
  } else {
    var snt = 1;
    for (var i = 2; i <= Math.sqrt(numBer); i++) {
      if (numBer % i == 0) {
        snt = 0;
        break;
      } else {
        snt = 1;
      }
    }
    return snt;
  }
}

function timSNT() {
  var arr = [];
  var nSNT = Number(document.getElementById("nSNT").value);
  debugger;

  for (var i = 1; i <= nSNT; i++) {
    if (checkSNT(i) == 1) {
      arr.push(i);
    }
  }
  document.querySelector(".htSNT").innerHTML = arr;
}
