var state = 0;
		function hitme(){ //funtion to validate the button status 
			if(state ==0){
				$(".trazado1").css("left","-340.26px");
				$(".trazado2").css("left","1020.05px");
				$(".trazado3").css("top","-45.93px");
				$(".trazado4").css("top","-157.51px");
				$(".trazado5").css({"left":"900px","top":"-361px"});
				$(".trazado6").css("left","-149.26px");
				$(".cloud1").css({"top":"322.85px","left":"1868.36px"});
				$(".cloud2").css({"top":"191.1px","left":"963.41px","transform":"rotate(-20deg)"});
				$(".cloud2 img").css({"width":"714.43px","height":"686.34px"});
				$(".cloud3").css({"top":"-171.26px","left":"-300.52px","transform":"rotate(24deg)"});
				$(".cloud4").css({"top":"698.85px","left":"-386.86px","transform":"rotate(-17deg)"});
				$(".airplane").css({"top":"-450.15px","left":"430.33px","width":"450px","transform":"rotateX(15deg)"});
				$(".father-button").css("transform","rotateY(180deg");
				

				state =1;
			}
			else{
				$(".trazado1").css("left","-149.26px");
				$(".trazado2").css("left","816.23px");
				$(".trazado3").css("top","-560.59px");
				$(".trazado4").css("top","-587.82px");
				$(".trazado5").css({"left":"970.23px","top":"-180.11px"});
				$(".trazado6").css("left","-266.91px");
				$(".cloud1").css({"top":"0px","left":"-72px"});
				$(".cloud2").css({"top":"708.27px","left":"-148.72px","transform":"rotate(0deg)"});
	 			$(".cloud2 img").css({"width":"453px","height":"453px"});
				$(".cloud3").css({"top":"0px","left":"1033px","transform":"rotate(0deg)"});
				$(".cloud4").css({"top":"751px","left":"1296px","transform":"rotate(0deg)"});
				$(".airplane").css({"top":"1080px","left":"15px","width":"1080px","transform":"rotateX(0deg)"});
				$(".father-button").css("transform","rotateY(0deg");

				state =0;
			}
		}