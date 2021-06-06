// Doppelwelle auf dem greichen Wellenträger mit einem Erreger auf beiden Seiten
var n;
var stopcriterium = 0;
var animationszeit = 0;

function wellentraeger() {
	this.omega = 0;		// Winkelgeschwindigkeit
	this.c = 0;			// Ausbreitungsgeschwindigkeit
	this.lambda = 0;	// Wellenlänge
	this.f = 0;			// Frequenz
	this.T = 0;			// Periodendauer
	this.smax = 0;		// Amplitude
	this.L = 0;			// Länge des Wellenträgers
	this.ndots = 334;
	this.dot = new Array();
	for (n=1;n<=this.ndots;n=n+1) {
		this.dot[n] = new dot();
		this.dot[n].xpos = 10;
	}
	
	this.reset = wellentraeger_reset;
	this.apply = wellentraeger_apply;
	this.constructor = wellentraeger_constructor;
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
	stopcriterium = 1;
	animationszeit = 0;
	for (n=1;n<=wt.ndots;n=n+1) {
		wt.dot[n].ypos = 0;
	}
	wt.apply();
	stopcriterium = 0;
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

function position(typ,zeit) {
	var x = 0;		// Verschiebung
	switch (typ) {
		case "einzelwelle":
			for (n=1;n<=wt.ndots;n=n+1) {
				x = n/100;
				wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
			}
			break;
	}
	switch (typ) {
		case "ueberlagerung_zweier_wellen_konstruktive_interferenz":
			for (n=1;n<=wt.ndots;n=n+1) {
				x = n/100;
				wt.dot[n].ypos =  wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
				x = ((wt.ndots+1)-n)/100
				wt.dot[n].ypos = wt.dot[n].ypos + wt.smax*Math.sin(2*Math.PI*((zeit/wt.T)-(x/wt.lambda)));
			}
			break;
	}
}

function time_flow() {animationszeit = animationszeit + 0.1;}

function controlbutton(which) {
	switch (which) {
		case "cb1":
			document.getElementById(which)
			if (document.getElementById(which).value == 'Start!') {
				dwell_anim();
				document.getElementById(which).value = 'STOP';
				stopcriterium = 0;
			}
			else if (document.getElementById(which). value == 'STOP') {
				stopcriterium = 1;
				document.getElementById(which).value = 'Start!';
				wt.reset();
			}
			break;
	}
}

function dwell() {
	time_flow();
	position('ueberlagerung_zweier_wellen_konstruktive_interferenz',animationszeit);
	wt.apply();
}

function dwell_anim() {
	animationszeit = 0;
	setInterval("if (stopcriterium == 0) {dwell();}",100);
}


wt = new wellentraeger();
