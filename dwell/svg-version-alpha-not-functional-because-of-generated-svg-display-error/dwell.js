// Doppelwelle auf dem greichen Wellenträger mit einem Erreger auf beiden Seiten
function wellentraeger() {
	this.dot = new Array();
	for (n=1;n<=250;n=n+1) {
		this.dot[n] = new dot();
		this.dot[n].xpos = 10;
	}
	this.y_axis = new axis("y");
	
	this.constructor = wellentraeger_reset;
	this.reset = wellentraeger_reset;
}

function wellentraeger_reset() {
	for (n=1;n<=250;n=n+1) {
		if (n > 1) {wt.dot[n].xpos = 40+5+wt.dot[n-1].xpos;}
	}
	apply();
}

function dot() {
	this.xpos = 0;
	this.ypos = 10;
	this.radius = 2;
}
function axis(no) {
	switch (no) {
		case "x": break;
		case "y":
			this.xpos = 0;
			this.ypos = 0;
			this.height = 230;
			this.line1 = document.createElement("line");
			this.line1.setAttribute("x1",this.xpos);
			this.line1.setAttribute("y1",this.ypos);
			this.line1.setAttribute("x2",this.xpos);
			this.line1.setAttribute("y2",(this.ypos+this.height));
			this.line1.setAttribute("style","stroke:rgb(0,0,0);stroke-width:2");
			break;
		default: break;
	}
}

function apply() {
	var finalelement = document.createElement("svg");
	finalelement.setAttribute("xmlns","http://www.w3.org/2000/svg");
	finalelement.setAttribute("version","1.1");
	finalelement.appendChild(wt.y_axis.line1);
	for (n=1;n<=250;n=n+1) {
		var newelement = document.createElement("circle");
		newelement.setAttribute("id",n);
		newelement.setAttribute("r",wt.dot[n].radius);
		newelement.setAttribute("color","black");
		newelement.setAttribute("cx",wt.dot[n].xpos);
		newelement.setAttribute("cy",wt.dot[n].ypos);
		finalelement.appendChild(newelement);
	}
	document.getElementById("animationscontainer").appendChild(finalelement);
}

function dwell() {
	
	apply();
}

wt = new wellentraeger();
