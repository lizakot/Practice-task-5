var pcount = 0;
var acount= 0;
var sumaktiv=0;
var sumpassive=0;
window.Addrow = function(){
    
    var nazv = document.getElementById("nazv").value;
    var cost = document.getElementById("cost").value;

    if (cost == "" || nazv == "" ){
        alert("Заполните поля названия и стоимости")
        return
    } else if(document.querySelector('input[name="stat"]:checked').value== "true"){
        var addline = document.getElementById('activ');
        var newline = addline.insertRow(acount + 1);
        var cel1 = newline.insertCell(0);
        var cel2 = newline.insertCell(1);

        cel1.innerHTML = nazv;
        cel2.innerHTML = cost;
        sumaktiv += +cost;
        acount= +acount;
    } 
    else {
        var addline = document.getElementById('passive');
        var newline = addline.insertRow(pcount + 1);
        var cel1 = newline.insertCell(0);
        var cel2 = newline.insertCell(1);

        cel1.innerHTML = nazv;
        cel2.innerHTML = cost;
        sumpassive += +cost;
        pcount= +pcount;
    }
  /*   И если  вводим число, передастся оно строкой Типа ‘1’
И чтобы потом посчитать что-то,  надо поставить +, чтобы это стало числом */
/* результат суммы всех инпут */
}

function suumactive(){
    if (sumaktiv == "" ){
        alert("Сумма не расчитывается, пока таблица активов не заполнена")
        return
    } else{
    document.getElementById("sumactiv").innerHTML = "Сумма активов = " + sumaktiv;}
    return sumaktiv
}
function suumpassive(){
    if (sumpassive == "" ){
        alert("Сумма не расчитывается, пока таблица пассивов не заполнена")
        return
    } else{
    document.getElementById("sumpass").innerHTML = "Сумма пасивов = " + sumpassive;}
    return sumpassive
}
function suumall(){
    if (sumpassive == "" || sumaktiv == ""){
        alert("Сумма не расчитывается, пока таблицы активов и пассивов не заполнены")
        return
    } else{
    sum=sumaktiv-sumpassive;
    document.getElementById("sumall").innerHTML = "Итоговая сумма = " + sum;}
    return sum
}
function clean(){
    location.reload()
    return
}