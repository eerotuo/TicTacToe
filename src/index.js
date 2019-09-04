import "./styles.css";
var kierros = 0;

document.getElementById("board").innerHTML = `
<h1>Hello Vanilla!</h1>

<style>

table#t01 {
  //width: 100%;
  border: 1px solid black;
  background-color: #f1f1c1;
  border-collapse: collapse;
  
}

tr, th, td{
  border: 1px solid black;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>

<table id="t01">
  <tr>
    <td></td>
    <td></td> 
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td> 
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td> 
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td> 
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td> 
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

`;

var table = document.getElementById("t01");
if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function() {
        tableText(this);
        checkWinnerHorisontal(table);
        checkWinnerVertical(table);
        checkWinnerDiagonal(table);
      };
  }
}

function tableText(tableCell) {
  if (kierros % 2 === 0) {
    tableCell.innerHTML = "X";
    kierros++;
  } else {
    tableCell.innerHTML = "O";
    kierros++;
  }
  //alert(tableCell.innerHTML);
}

function checkWinnerHorisontal(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (table.rows[i].cells[j].innerHTML === "X") {
        lkmx++;
        if (lkmx === 5) {
          alert("Player 1 won!");
          break;
        }
      }
      if (table.rows[i].cells[j].innerHTML === "O") {
        lkmo++;
        if (lkmo === 5) {
          alert("Player 2 won!");
          break;
        }
      }
    }
    lkmx = 0;
    lkmo = 0;
  }
}

function checkWinnerVertical(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (table.rows[j].cells[i].innerHTML === "X") {
        lkmx++;
        if (lkmx === 5) {
          alert("Player 1 won!");
          break;
        }
      }
      if (table.rows[j].cells[i].innerHTML === "O") {
        lkmo++;
        if (lkmo === 5) {
          alert("Player 2 won!");
          break;
        }
      }
    }
    lkmx = 0;
    lkmo = 0;
  }
}

function checkWinnerDiagonal(table) {
  var lkmx = 0;
  var lkmo = 0;

  for (var i = 0; i < 5; i++) {
    if (table.rows[i].cells[i].innerHTML === "X") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 1 won!");
        break;
      }
    }

    if (table.rows[i].cells[i].innerHTML === "O") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 2 won!");
        break;
      }
    }
  }

  lkmx = 0;
  lkmo = 0;

  for (var i = 0; i < 5; i++) {
    if (table.rows[i].cells[4 - i].innerHTML === "X") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 1 won!");
        break;
      }
    }

    if (table.rows[i].cells[4 - i].innerHTML === "O") {
      lkmx++;
      if (lkmx === 5) {
        alert("Player 2 won!");
        break;
      }
    }
  }
}
