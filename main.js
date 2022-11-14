var nowcurr = 1;

var txt = 'ImaginationEye Studios';
var current = 0;


function namehovered(){
document.getElementById('name1').innerHTML = "";
write(txt);
}


function write(text){
   var elem = document.getElementById('name1');

   if (current < text.length){
      elem.innerHTML = elem.innerHTML + text.charAt(current);
      current++;
      setTimeout(writer,20)
   }
}
function writer(){
write(txt);	
}



function nameunhovered(){
	current = 0;
document.getElementById('name1').innerHTML = "IES";
}
var scrollinfo;
function updots(){
	scrollinfo = document.getElementById('f1').scrollTop;
	if(scrollinfo<1000){
nowcurr=1;
	}
	if(scrollinfo>390){
document.getElementById('video1').play();

nowcurr=2;
	}
	if(scrollinfo>1370){
nowcurr=3;

	}
	if(scrollinfo>2000){
nowcurr=4;
	}
	if(scrollinfo>2800){
		repeatvid()

	}

	if(scrollinfo<550){
	animok();
}
updots2();
}
function updots2(){
	if(nowcurr==1){
		document.getElementById('sectiondots').innerHTML = "O o o o";
	}
	if(nowcurr==2){
		document.getElementById('sectiondots').innerHTML = "o O o o";
	}
	if(nowcurr==3){
		document.getElementById('sectiondots').innerHTML = "o o O o";
	}
	if(nowcurr==4){
		document.getElementById('sectiondots').innerHTML = "o o o O ";
	}
	// if(nowcurr==5){
	// 	document.getElementById('sectiondots').innerHTML = "o o o o O";
	// }

}

function animok(){
var ile = scrollinfo+400;
document.getElementById('lisc1').style.transform="translate(-"+((ile/10)+10)+"%,0%) rotate(-"+((ile/10)-15)+"deg)";
document.getElementById('lisc2').style.transform="translate("+((ile/10)+10)+"%,0%) rotate("+((ile/10)-15)+"deg) rotateY(180deg)";
}
var scrollnowat = 0;
var wtogo = 0;
var ilemaprzejsc;


function slideto(sekcja){
	window.location.href = "file:///F:/Ligderstudios/iES/index.html#"+sekcja;
}
function minimal(whic){
	if (whic==1){
		document.getElementById('gi1').style.width = "50%";
	}
	if (whic==2){
		document.getElementById('gi2').style.width = "50%";
	}
}
function minimal2(whicg){
	if (whicg==1){
		document.getElementById('gi1').style.width = "90%";
	}
	if (whicg==2){
		document.getElementById('gi2').style.width = "90%";
	}
}

function gotogamerbl(wgam){
	if (wgam==1){
		window.open('https://www.roblox.com/games/11513334552/Lobez-RP', '_blank');
	}
	if (wgam==2){
		window.open('https://www.roblox.com/games/10273436389/The-Real-Backrooms-Alpha', '_blank');
	}
}
