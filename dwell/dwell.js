// Doppelwelle auf dem greichen Wellenträger mit einem Erreger auf beiden Seiten
var n;
var int;
var zeit = 0;

function wellentraeger() {
	this.wtyp = "einzelwelle";	//Typ der emulierten Welle
	this.zeitschritt = 0.1;
	
	this.omega = 0;		// Winkelgeschwindigkeit
	this.c = 0;			// Ausbreitungsgeschwindigkeit
	this.lambda = 0;	// Wellenlänge
	this.f = 0;			// Frequenz
	this.T = 0;			// Periodendauer
	this.smax = 0;		// Amplitude
	this.L = 0;			// Länge des Wellenträgers
	
	this.ndots = 334;
	this.dot = new Array();
	for (n=0;n<=this.ndots;n=n+1) {
		this.dot[n] = new dot();
		this.dot[n].xpos = 10;
	}
	
	this.reset = wellentraeger_reset;
	this.apply = wellentraeger_apply;
	this.constructor = wellentraeger_constructor;
	this.setvalue = wellentraeger_setvalue;
	this.setallvalues = wellentraeger_setallvalues;
	this.setdisplay = wellentraeger_setdisplay;
}

function wellentraeger_constructor() {
	for (n=1;n<=wt.ndots;n=n+1) {
		var newelement = document.createElement("div");
		newelement.setAttribute("id",n);
		newelement.setAttribute("class","dot");
		document.getElementById("wellentraegerpunkte").appendChild(newelement);
	}
	for (n=1;n<=wt.ndots;n=n+1) {
		var lv = new Number(wt.dot[n].xzero); lv = lv+(n*3); lv = lv.toString(); lv = lv.concat("px");
		document.getElementById(n).style.left = lv;
	}
}

function wellentraeger_reset() {
	int=window.clearInterval(int);
	zeit = 0;
	wt.setdisplay();
	for (n=1;n<=wt.ndots;n=n+1) {
		wt.dot[n].ypos = 0;
	}
	wt.apply();
	if (document.getElementById("cb1").value == "STOP") {
		document.getElementById("cb1").value = "Start!";
	}
}

function dot() {
	this.xzero = 60;
	this.yzero = 415;
	this.ypos = 0;
	this.width = 3;
}

function wellentraeger_apply() {
	for (n=1;n<=wt.ndots;n=n+1) {
		document.getElementById(n).style.top = (wt.dot[n].yzero - (wt.dot[n].ypos*3)*200);
	}
}

function wellentraeger_setvalue(justset) {
	switch(justset) {
		case("smax"):	// Amplitude s max [m]
			wt.smax = new Number(document.getElementById("input_smax").value);
			wt.smax = wt.smax.valueOf();
			break;
		case("lwt"):	// Länge des Wellenträgers l wt [m]
			wt.L = new Number(document.getElementById("input_lwt").value);
			wt.L = wt.L.valueOf();
			break;
		case("fw"):	// Frequenz f w [Hz]
			wt.f = new Number(document.getElementById("input_fw").value);
			wt.f = wt.f.valueOf();
			wt.T = 1/wt.f;
			document.getElementById('input_T').value = wt.T;
			break;
		case("c"):	// Ausbreitungsgeschwindigkeit c [m/s]
			wt.c = new Number(document.getElementById("input_c").value);
			wt.c = wt.c.valueOf();
			break;
		case("lambda"):	// Wellenlänge {lambda} [m]
			wt.lambda = new Number(document.getElementById("input_lambda").value);
			wt.lambda = wt.lambda.valueOf();
			break;
		case("T"):	// Periodendauer T [s]
			wt.T = new Number(document.getElementById("input_T").value);
			wt.T = wt.T.valueOf();
			wt.f = 1/wt.T;
			document.getElementById('input_fw').value = wt.f;
			break;
	}
}

function wellentraeger_setallvalues() {
	wt.setvalue('smax');
	wt.setvalue('lwt');
	wt.setvalue('fw');
	wt.setvalue('c');
	wt.setvalue('lambda');
	wt.setvalue('T');
}

function wellentraeger_setdisplay() {
	document.getElementById('timedisplay').value = Math.round(zeit*10)/10;
}

function position() {
	var x = 0;		// Verschiebung
	var x1 = 0;		// Verschiebung
	var x2 = 0;		// Verschiebung
	var range = 0;	// Voranschreiten der Ausbreitung
	if (wt.c*zeit*100 < wt.ndots) {range = wt.c*zeit*100;} else {range = wt.ndots;}
	switch (wt.wtyp) {
		case "einzelwelle":
			for (n=1;n<=range;n=n+1) {
				x = n/100;
				wt.dot[n].ypos = wt.smax*Math.sin(2*Math.PI*(((zeit)/wt.T)-(x/wt.lambda)));
			}
			break;
		case "wellentraeger_auf_beide_seiten_synchron":
			if (range <= (wt.ndots/2)) {
				// Linke Welle
					for (n=1;n<=range;n=n+1) {
						x = n/100;
						wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
					}
				// Rechte Welle
					for (n=wt.ndots;n>=(wt.ndots-range);n=n-1) {
						x = (wt.ndots+1-n)/100;
						wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
					}				
			}
			else if (range > (wt.ndots/2) && range < wt.ndots) {
				// Linke Welle
					for (n=1;n<=(wt.ndots-range);n=n+1) {
						x = n/100;
						wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
					}
				// Überlagerte Welle
					for (n=(Math.round(wt.ndots-range));n<=(range);n=n+1) {
						x1 = n/100;
						x2 = (wt.ndots+1-n)/100;
						wt.dot[n].ypos = wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x1/wt.lambda))) + 
						wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x2/wt.lambda)));
					}
				// Rechte Welle
					for (n=wt.ndots;n>=range;n=n-1) {
						x = (wt.ndots+1-n)/100;
						wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
					}
			}
			else {
				for (n=1;n<=wt.ndots;n=n+1) {
					x1 = n/100;
					x2 = (wt.ndots+1-n)/100;
					wt.dot[n].ypos = wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x1/wt.lambda))) + 
					wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x2/wt.lambda)));
				}
			}
			break;
		case "spass1":
			for (n=1;n<=range;n=n+1) {
				x = n/100;
				wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
				x = ((wt.ndots+1)-n)/100
				wt.dot[((wt.ndots+1)-n)].ypos = wt.dot[((wt.ndots+1)-n)].ypos + wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
			}
			break;
		case "spass2":
			for (n=1;n<=range;n=n+1) {
				x = n/100;
				wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
				//x = ((wt.ndots+1)-n)/100
				wt.dot[((wt.ndots+1)-n)].ypos = wt.dot[((wt.ndots+1)-n)].ypos + wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
			}
			break;
		case "spass3":
			for (n=1;n<=range;n=n+1) {
				wt.dot[n].ypos = wt.dot[n].ypos + wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
			}
			break;
	}
}

function time_flow() {
	zeit = zeit + wt.zeitschritt;
	wt.setdisplay();
}

function controlbutton(which) {
	switch (which) {
		case "cb1":
			switch (document.getElementById(which).value) {
				case "Start!":
					dwell_anim();
					document.getElementById(which).value = "STOP";
					break;
				case "STOP":
					int=window.clearInterval(int);
					document.getElementById(which).value = "Start!";
					break;
			}
			break;
	}
}

function dwell() {
	time_flow();
	position();
	wt.apply();
}

function dwell_anim() {
	int = self.setInterval("dwell()",(wt.zeitschritt*1000));
}


wt = new wellentraeger();
