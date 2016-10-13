var rowValue=0;
$("#btnRowEn").click(function (){
	rowValue=document.getElementById("txtRowEn").value;
	return rowValue;
});//按下設定Row按鈕後設定rowVlaue的值

var colValue=0;
$("#btnColEn").click(function(){
   colValue=document.getElementById("txtColEn").value;
   return colValue;
});

$("#btnGoEn").click(function () {
    var result = "";
	// 純數字:
	//var sPool = "0123456789";
    // 數字+小寫字母: (去除 l, o)
    var sPool = "abcdefghijkmnpqrstuvwxyz0123456789";
    // 數字+大小寫字母: (去除 I, O, l, o)
    //var sPool = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789";

    Math.seedrandom($("#txtSeedEn").val()); // 設定亂數種子
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
	$("#randomTableEn").html(result);
});