		var NUM1 	= 0;
		var OPER 	= undefined;
		var NUM2 	= 0;
		var RESULT 	= 0;

		var number1	 = document.getElementById('number1');
		var operator = document.getElementById('operator');
		var number2  = document.getElementById('number2');
		var result 	 = document.getElementById('result');
		var bullets  = document.getElementById('bullets');


		function inputNumber (n) {

			if (OPER == undefined) {
				//输入number1
				NUM1 = NUM1 * 10 + n;
				number1.innerHTML = NUM1;
			} else {
				//输入number2
				NUM2 = NUM2 * 10 + n;
				number2.innerHTML =  NUM2;
			}
		}


		function inputOperator (x) {

			switch (x) {
				case '+':
					OPER = '+';
					operator.innerHTML = '＋';
					break;				
				case '-':
					OPER = '-';
					operator.innerHTML = '－';
					break;
				case '*':
					OPER = '*';
					operator.innerHTML = '×';
					break;
				case '/':
					OPER = '/';
					operator.innerHTML = '÷';
					break;
			}
		}


		function calaulate (OPER) {

			switch (OPER) {
				case '+':
					RESULT = NUM1 + NUM2;
					result.innerHTML = RESULT;
					bulletGo(RESULT);
					break;				
				case '-':
					RESULT = NUM1 - NUM2;
					result.innerHTML = RESULT;
					bulletGo(RESULT);
					break;
				case '*':
					RESULT = NUM1 * NUM2;
					result.innerHTML = RESULT;
					bulletGo(RESULT);
					break;
				case '/':
					RESULT = NUM1 / NUM2;
					result.innerHTML = RESULT;
					bulletGo(RESULT);
					break;				
			}
		}


		function reset () {

			removeTag();
			NUM1 	= 0;
			OPER 	= undefined;
			NUM2 	= 0;
			RESULT 	= 0;

			number1.innerHTML	= NUM1;
			operator.innerHTML	= 'No Operator';
			number2.innerHTML	= NUM2;
			result.innerHTML	= RESULT;
		}
/**********************************************************************************

            	        注释以下函数关闭弹幕功能 		:)	

***********************************************************************************/
		function creatTag (RESULT) {
		//生成单个弹幕标签。RESULT参数用于判断计算结果正负，调整弹幕方向。

			var bullet       = document.createElement("marquee");
			var scrollSpeed  = Math.floor(Math.random() *60 + 8);	//弹幕流动速度
			var fontSize     = Math.floor(Math.random() *60 + 10);	//弹幕字体大小
			var bulletArea   = Math.floor(Math.random() *160);		//弹幕显示区域

			bullet.innerHTML = RESULT;
			bullet.setAttribute("class", "bullet");
			bullet.setAttribute("scrollamount", scrollSpeed);
			bullet.setAttribute("loop", "1");
			bullet.setAttribute("style", "font-size:" + fontSize + "px;margin-top:" + bulletArea + "px;");

			if (RESULT >= 0) {
				bullet.setAttribute("direction", "left");
			} else {
				bullet.setAttribute("direction", "right");
			}

			bullets.appendChild(bullet);
		}


		function bulletGo (RESULT) {
		//生成 “RESULT” 数量个弹幕标签

			for (var i = 1; i <= Math.abs(RESULT); i ++) {
				creatTag(RESULT);

				if (i > 500) break;
			}
		}


		function removeTag () {
		//移除所有弹幕标签

			bullets.innerHTML = "";
		}
