var rowValue=0;
$("#btnRowBEn").click(function (){
	rowValue=document.getElementById("txtRowBEn").value;
	return rowValue;
});//按下設定Row按鈕後設定rowVlaue的值

var colValue=0;
$("#btnColBEn").click(function(){
   colValue=document.getElementById("txtColBEn").value;
   return colValue;
});

$("#btnGoBEn").click(function () {
    var result = "";
	// 純數字:
	//var sPool = "0123456789";
    // 數字+小寫字母: (去除 l, o)
    //var sPool = "abcdefghijkmnpqrstuvwxyz0123456789";
    // 數字+大小寫字母: (去除 I, O, l, o)
    var sPool = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789";

    Math.seedrandom($("#txtSeedBEn").val()); // 設定亂數種子
	var iRandom = 0; var ch = "?";
	for (iRow = 1; iRow <= rowValue; iRow++) {
		var sLine = (iRow + 100).toString().substr(1, 2) + ": ";
		for (iCol = 1; iCol <=colValue; iCol++) {
			iRandom = Math.floor(Math.random() * sPool.length);
			ch = sPool.substr(iRandom, 1);
			sLine += ch;
		}
		result += sLine + "<br>";
	}
	$("#randomTableBEn").html(result);
});