function hasil() {
    var harga=parseInt(document.getElementById('harga').value);
    var jumlah=parseInt(document.getElementById('jumlah').value);
    var total=harga*jumlah;
    document.getElementById("total").innerHTML=total;
    var bayar;
if(total>100000){
        bayar=total-(total*dis);
        document.getElementById("bayar").innerHTML=bayar;
        document.getElementById("dis").innerHTML;
    }else{
        document.getElementById("bayar").innerHTML=total;
        document.getElementById("dis").innerHTML;
    }
}   