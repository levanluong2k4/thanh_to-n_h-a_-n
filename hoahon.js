var tonghoadon=0;
var drink1=20000;
var drink2=25000;
var drink3=15000;
var drink4=25000;
var drink5=40000;
var drink6=40000;
var drink7=40000;
var drink8=40000;
var drink9=40000;
var name1=document.getElementById("name1");
const name2=document.getElementById("name2");
const name3=document.getElementById("name3");
const name4=document.getElementById("name4");
const name5=document.getElementById("name5");
const name6=document.getElementById("name6");
const name7=document.getElementById("name7");
const name8=document.getElementById("name8");
const name9=document.getElementById("name9");


function movetrangchu() {
  window.location.href = "http://127.0.0.1:5500/Trangchu.html#";
}
function movethucdon() {
  window.location.href = "http://127.0.0.1:5500/thucdon.html";
}


var productlist =document.querySelectorAll("input");
productlist.forEach(function(input) {
    input.value = "0";
});
//tong tien khi nhâp vao so luong
var plus1 = document.getElementById("cong1");
var input1 = document.getElementById("input1");
var tru1 = document.getElementById("tru1");
var t1=0;  
input1.onchange=function(){
    
    tonghoadon += drink1 * input1.value-drink1*t1;
    t1=input1.value;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

var productlist = document.querySelectorAll("input");

productlist.forEach(function(input) {
    input.addEventListener("input", function() {
        if (input.value < 0) {
            input.value = 0; // Đặt giá trị là 0 nếu người dùng nhập số âm
        }
    });
});




plus1.onclick = function() {
    input1.value++;
    tonghoadon += drink1 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');

};
tru1.onclick=function() {
        if (input1.value >=1){
            input1.value --;
            tonghoadon -= drink1 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input1.value =0;
}
var plus2 = document.getElementById("cong2");
var input2 = document.getElementById("input2");
var tru2 = document.getElementById("tru2");

var t2=0;  
input2.onchange=function(){
    
    tonghoadon += drink2 * input2.value-drink2*t2;
    t2=input2.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}
plus2.onclick = function() {
    input2.value++;
    tonghoadon += drink2 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru2.onclick=function() {
        if (input2.value >=1){
            input2.value --;
            tonghoadon -= drink2 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input2.value =0;
}
var plus3 = document.getElementById("cong3");
var input3 = document.getElementById("input3");
var tru3 = document.getElementById("tru3");
var t3=0;  
input3.onchange=function(){
    
    tonghoadon += drink3 * input3.value-drink3*t3;
    t3=input3.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus3.onclick = function() {
    input3.value++;
    tonghoadon += drink3 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru3.onclick=function() {
        if (input3.value >=1){
            input3.value --;
            tonghoadon -= drink3 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input3.value =0;
}
var plus4 = document.getElementById("cong4");
var input4 = document.getElementById("input4");
var tru4 = document.getElementById("tru4");
var t4=0;  
input4.onchange=function(){
    
    tonghoadon += drink4 * input4.value-drink4*t4;
    t4=input4.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus4.onclick = function() {
    input4.value++;
    tonghoadon += drink4 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru4.onclick=function() {
        if (input4.value >=1){
            input4.value --;
            tonghoadon -= drink4 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input4.value =0;
}
var plus5 = document.getElementById("cong5");
var input5= document.getElementById("input5");
var tru5 = document.getElementById("tru5");
var t5=0;  
input5.onchange=function(){
    
    tonghoadon += drink5 * input5.value-drink5*t5;
    t5=input5.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus5.onclick = function() {
    input5.value++;
    tonghoadon += drink5 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru5.onclick=function() {
        if (input5.value >=1){
            input5.value --;
            tonghoadon -= drink5 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input5.value =0;
}
var plus6 = document.getElementById("cong6");
var input6 = document.getElementById("input6");
var tru6 = document.getElementById("tru6");
var t6=0;  
input6.onchange=function(){
    
    tonghoadon += drink6 * input6.value-drink6*t6;
    t6=input6.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus6.onclick = function() {
    input6.value++;
    tonghoadon+=drink6;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru6.onclick=function() {
        if (input6.value >=1){
            input6.value --;
            tonghoadon-=drink6;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input6.value =0;
}
var plus7 = document.getElementById("cong7");
var input7 = document.getElementById("input7");
var tru7= document.getElementById("tru7");
var t7=0;  
input7.onchange=function(){
    
    tonghoadon += drink7 * input7.value-drink7*t7;
    t7=input7.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus7.onclick = function() {
    input7.value++;
    tonghoadon += drink7 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru7.onclick=function() {
        if (input7.value >=1){
            input7.value --;
            tonghoadon -= drink7 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input7.value =0;
}

var plus8 = document.getElementById("cong8");
var input8 = document.getElementById("input8");
var tru8= document.getElementById("tru8");
var t8=0;  
input8.onchange=function(){
    
    tonghoadon += drink8 * input8.value-drink8*t8;
    t8=input8.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus8.onclick = function() {
    input8.value++;
    tonghoadon += drink8 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru8.onclick=function() {
        if (input8.value >=1){
            input8.value --;
            tonghoadon -= drink8 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input8.value =0;
}
var plus9 = document.getElementById("cong9");
var input9 = document.getElementById("input9");
var tru9 = document.getElementById("tru9");
var t9=0;  
input9.onchange=function(){
    
    tonghoadon += drink9 * input9.value-drink9*t9;
    t9=input9.value
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
    
}

plus9.onclick = function() {
    input9.value++;
    tonghoadon += drink9 ;
    document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
};
tru9.onclick=function() {
        if (input9.value >=1){
            input9.value --;
            tonghoadon -= drink9 ;
            document.getElementById("tongtien").innerText = tonghoadon.toLocaleString('vi-VN');
        }
        else
        input9.value =0;
}



    var xacnhan = document.querySelectorAll("#oke");
    xacnhan.forEach(function(button) {
        button.addEventListener("click", function() {
            var check=confirm("xác nhận thanh toán");
            if(check==true){
                var soluong = input1.value+input2.value+input3.value+input4.value+input5.value + input6.value+input7.value+input8.value+input9.value;
                if(soluong>0){
                    let deletelist = document.getElementById("nodrink");
                    deletelist.remove();
                    
                    const addhoadon = document.querySelector("tbody");
                    const newitem1 = document.createElement("tr");
                    const item1 = document.createElement("td"); // Corrected
                    const item2 = document.createElement("td"); // Corrected
                    const item3 = document.createElement("td"); // Corrected
                    const item4 = document.createElement("td"); // Corrected
                    if(input1.value >0){
                    item1.innerHTML = name1.textContent;
                    item2.innerHTML = drink1+"đ";
                    item3.innerHTML = input1.value;
                    item4.innerHTML = input1.value*drink1;
                    
                    newitem1.appendChild(item1); // Appending td elements to tr
                    newitem1.appendChild(item2);
                    newitem1.appendChild(item3);
                    newitem1.appendChild(item4);
                    
                    addhoadon.appendChild(newitem1); // Appending tr to tbody
                    
                    }
                  
                    const newitem2 = document.createElement("tr");
                  
                    const item5 = document.createElement("td"); // Corrected
                    const item6 = document.createElement("td"); // Corrected
                    const item7 = document.createElement("td"); // Corrected
                    const item8 = document.createElement("td"); // Corrected
                    if(input2.value >0){
                    item5.innerHTML = name2.textContent;
                    item6.innerHTML = drink2+"đ";
                    item7.innerHTML = input2.value;
                    item8.innerHTML = input2.value*drink2;
                    
                    newitem2.appendChild(item5); // Appending td elements to tr
                    newitem2.appendChild(item6);
                    newitem2.appendChild(item7);
                    newitem2.appendChild(item8);
                    
                    addhoadon.appendChild(newitem2); // Appending tr to tbody
                    
                    }
                    const newitem3 = document.createElement("tr");
                  
                    const item9 = document.createElement("td"); // Corrected
                    const item10 = document.createElement("td"); // Corrected
                    const item11 = document.createElement("td"); // Corrected
                    const item12 = document.createElement("td"); // Corrected
                    if(input3.value >0){
                    item9.innerHTML = name3.textContent;
                    item10.innerHTML = drink3+"đ";
                    item11.innerHTML = input3.value;
                    item12.innerHTML = input3.value*drink3;
                    
                    newitem3.appendChild(item9); // Appending td elements to tr
                    newitem3.appendChild(item10);
                    newitem3.appendChild(item11);
                    newitem3.appendChild(item12);
                    
                    addhoadon.appendChild(newitem3); // Appending tr to tbody
                    
                    }
                    const newitem4 = document.createElement("tr");
                  
                    const item41 = document.createElement("td"); // Corrected
                    const item42 = document.createElement("td"); // Corrected
                    const item43 = document.createElement("td"); // Corrected
                    const item44 = document.createElement("td"); // Corrected
                    if(input4.value >0){
                    item41.innerHTML = name4.textContent;
                    item42.innerHTML = drink4+"đ";
                    item43.innerHTML = input4.value;
                    item44.innerHTML = input4.value*drink4;
                    
                    newitem4.appendChild(item41); // Appending td elements to tr
                    newitem4.appendChild(item42);
                    newitem4.appendChild(item43);
                    newitem4.appendChild(item44);
                    
                    addhoadon.appendChild(newitem4); // Appending tr to tbody
                    
                    }
                    const newitem5 = document.createElement("tr");
                  
                    const item51 = document.createElement("td"); // Corrected
                    const item52 = document.createElement("td"); // Corrected
                    const item53 = document.createElement("td"); // Corrected
                    const item54 = document.createElement("td"); // Corrected
                    if(input5.value >0){
                    item51.innerHTML = name5.textContent;
                    item52.innerHTML = drink5+"đ";
                    item53.innerHTML = input5.value;
                    item54.innerHTML = input5.value*drink5;
                    
                    newitem5.appendChild(item51); // Appending td elements to tr
                    newitem5.appendChild(item52);
                    newitem5.appendChild(item53);
                    newitem5.appendChild(item54);
                    
                    addhoadon.appendChild(newitem5); // Appending tr to tbody
                    
                    }
                    const newitem6 = document.createElement("tr");
                  
                    const item61 = document.createElement("td"); // Corrected
                    const item62 = document.createElement("td"); // Corrected
                    const item63 = document.createElement("td"); // Corrected
                    const item64 = document.createElement("td"); // Corrected
                    if(input6.value >0){
                    item61.innerHTML = name6.textContent;
                    item62.innerHTML = drink6+"đ";
                    item63.innerHTML = input6.value;
                    item64.innerHTML = input6.value*drink6;
                    
                    newitem6.appendChild(item61); // Appending td elements to tr
                    newitem6.appendChild(item62);
                    newitem6.appendChild(item63);
                    newitem6.appendChild(item64);
                    
                    addhoadon.appendChild(newitem6); // Appending tr to tbody
                    
                    }
                    const newitem7 = document.createElement("tr");
                  
                    const item71 = document.createElement("td"); // Corrected
                    const item72 = document.createElement("td"); // Corrected
                    const item73 = document.createElement("td"); // Corrected
                    const item74 = document.createElement("td"); // Corrected
                    if(input7.value >0){
                    item71.innerHTML = name7.textContent;
                    item72.innerHTML = drink7+"đ";
                    item73.innerHTML = input7.value;
                    item74.innerHTML = input7.value*drink7;
                    
                    newitem7.appendChild(item71); // Appending td elements to tr
                    newitem7.appendChild(item72);
                    newitem7.appendChild(item73);
                    newitem7.appendChild(item74);
                    
                    addhoadon.appendChild(newitem7); // Appending tr to tbody
                    
                    }
                    const newitem8 = document.createElement("tr");
                  
                    const item81 = document.createElement("td"); // Corrected
                    const item82 = document.createElement("td"); // Corrected
                    const item83 = document.createElement("td"); // Corrected
                    const item84= document.createElement("td"); // Corrected
                    if(input8.value >0){
                    item81.innerHTML = name8.textContent;
                    item82.innerHTML = drink8+"đ";
                    item83.innerHTML = input8.value;
                    item84.innerHTML = input8.value*drink8;
                    
                    newitem8.appendChild(item81); // Appending td elements to tr
                    newitem8.appendChild(item82);
                    newitem8.appendChild(item83);
                    newitem8.appendChild(item84);
                    
                    addhoadon.appendChild(newitem8); // Appending tr to tbody
                    
                    }
                    const newitem9 = document.createElement("tr");
                  
                    const item91 = document.createElement("td"); // Corrected
                    const item92 = document.createElement("td"); // Corrected
                    const item93 = document.createElement("td"); // Corrected
                    const item94 = document.createElement("td"); // Corrected
                    if(input9.value >0){
                    item91.innerHTML = name9.textContent;
                    item92.innerHTML = drink9+"đ";
                    item93.innerHTML = input9.value;
                    item94.innerHTML = input9.value*drink9;
                    
                    newitem9.appendChild(item91); // Appending td elements to tr
                    newitem9.appendChild(item92);
                    newitem9.appendChild(item93);
                    newitem9.appendChild(item94);
                    
                    addhoadon.appendChild(newitem9); // Appending tr to tbody
                    
                    }
                    const newitem0 = document.createElement("tr");
                    const item0=document.createElement("td"); 
                    item0.innerHTML="Tổng cộng"+tonghoadon.toLocaleString('vi-VN')+"đ";
                    item0.colSpan=4;
                    newitem0.style.border="1px solid black";
                    item0.style.color="red";
                    newitem0.appendChild(item0);
                    addhoadon.appendChild(newitem0);
                    const pill = document.getElementsByClassName('dspill')[0]; // Select the first element with class 'dspill'
                    const ttdoadon = document.createElement('div');
                    const thanhtoan = document.createElement('button');
                    thanhtoan.type = "button";
                    thanhtoan.style.padding = "15px 20px";
                    thanhtoan.style.marginRight="10px";
                    thanhtoan.style.backgroundColor="#18dcff";
                    thanhtoan.innerHTML = "thanh toán";
                    thanhtoan.id = "myThanhtoan";
                  

                    
                    const outputhd = document.createElement('button');
                    outputhd.type = "button";
                    outputhd.style.padding = "15px 20px";
                   outputhd.style.backgroundColor="#18dcff";
                    outputhd.innerHTML = "In Hóa Đơn";
                    
                    ttdoadon.appendChild(thanhtoan);
                    ttdoadon.appendChild(outputhd);
                    pill.appendChild(ttdoadon);
                   
                    const ttpill=document.getElementById("myThanhtoan");
                    ttpill.onclick=function(){
                        confirm("xác nhận thanh toán");
                    }
                   



    
                }
                else{
                   alert("Chưa chọn menu");
                }
                


            }
           
        });
    });











