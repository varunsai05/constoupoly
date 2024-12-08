function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell24name").textContent = "Constitutional Amendments";
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Fundamental Right" is owned, you gain protection.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Fundamental Rights" are owned, you gain complete constitutional protection.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Constitutional Amendments<span style="float: right;">Basic</span><br />Two Amendments Enacted<span style="float: right;">Significant</span><br />Three Amendments<span style="float: right;">Major</span><br />Four Amendments<span style="float: right;">Comprehensive</span></div>';
}

function citytax() {
	var p = player[turn];

	if (p.human) {
		buttonAonclick = 'hide("popupbackground"); hide("popupwrap"); var p=player[turn]; addalert(p.name+" paid 50 points for Constitutional Consultation."); p.pay(50, 0);';
		buttonBonclick = ' hide("popupbackground"); hide("popupwrap"); var p=player[turn]; var cost=p.money; for(var i=0; i<40; i++){sq=square[i]; if(sq.owner==turn) { if(sq.mortgage) { cost+=sq.price*0.5; } else { cost+=sq.price; } cost+=(sq.house*sq.houseprice); } } cost*=0.1; cost=Math.round(cost); addalert(p.name+" paid "+cost+" points for Constitutional Review."); p.pay(cost,0);';

		popup("You require Constitutional Consultation. You must pay 50 points or ten percent of your constitutional knowledge.<div><input type='button' value='Pay 50 Points' onclick='" + buttonAonclick + "' /><input type='button' value='Pay 10%' onclick='" + buttonBonclick + "' /></div>", false);
	} else {
		addalert(p.name + " paid 50 points for Constitutional Consultation.");
		p.pay(50, 0);
	}
}

function luxurytax() {
	addalert(player[turn].name + " paid 25 points for Constitutional Interpretation.");
	player[turn].pay(25, 0);

	$("landed").show().text("You landed on Constitutional Interpretation. Pay 25 points.");
}

var square = [];

square[0] = new Square("Constitutional Origin", "COLLECT 100 POINTS OF KNOWLEDGE", "white");
square[1] = new Square("Preamble", "$60", "#4B0082", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Fundamental Rights", "EXPLORE CONSTITUTIONAL PRINCIPLES", "white");
square[3] = new Square("Directive Principles", "$60", "#4B0082", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Constitutional Review", "ASSESS CONSTITUTIONAL KNOWLEDGE", "white");
square[5] = new Square("Constituent Assembly", "$200", "white", 200, 1);
square[6] = new Square("Fundamental Duties", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Constitutional Amendments", "LANDMARK LEGAL CHANGES", "white");
square[8] = new Square("Judicial Review", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Supreme Court Powers", "$120", "#AACCFF", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Constitutional Stability", "", "white");
square[11] = new Square("Article 370", "$140", "purple", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Constitutional Amendments Tribunal", "$150", "white", 150, 2);
square[13] = new Square("Right to Equality", "$140", "purple", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Federal Structure", "$160", "purple", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Constitutional Commission", "$200", "white", 200, 1);
square[16] = new Square("Emergency Provisions", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Fundamental Rights", "CORE CONSTITUTIONAL PRINCIPLES", "white");
square[18] = new Square("Parliamentary Sovereignty", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Constitutional Supremacy", "$200", "orange", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Constitutional Balance", "", "white");
square[21] = new Square("Right to Property", "$220", "red", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Constitutional Amendments", "LANDMARK LEGAL EVOLUTION", "white");
square[23] = new Square("Citizenship Rights", "$220", "red", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Constitutional Interpretation", "$240", "red", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Legal Commission", "$200", "white", 200, 1);
square[26] = new Square("State Autonomy", "$260", "yellow", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Judicial Independence", "$260", "yellow", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Constitutional Tribunals", "$150", "white", 150, 2);
square[29] = new Square("National Integration", "$280", "yellow", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Constitutional Crisis", "Enter Constitutional Deliberation", "white");
square[31] = new Square("Amendment Procedure", "$300", "green", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Fundamental Rights Review", "$300", "green", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Fundamental Rights", "PROTECT CONSTITUTIONAL PRINCIPLES", "white");
square[34] = new Square("Constitutional Powers", "$320", "green", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Legal Reforms Commission", "$200", "white", 200, 1);
square[36] = new Square("Constitutional Amendments", "LEGAL EVOLUTION LANDMARK", "white");
square[37] = new Square("Basic Structure Doctrine", "$350", "blue", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Constitutional Interpretation", "Analyze Constitutional Nuance", "white");
square[39] = new Square("Constitutional Sovereignty", "$400", "blue", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Constitutional Protection Card. Can be used to defend fundamental rights.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Constitutional Amendment Insight. Gain 10 knowledge points.", function() { addamount(10, 'Constitutional Chest');});
communityChestCards[2] = new Card("Landmark Judicial Ruling. Gain 45 knowledge points.", function() { addamount(45, 'Constitutional Chest');});
communityChestCards[3] = new Card("Constitutional Study Grant. Collect 100 knowledge points.", function() { addamount(100, 'Constitutional Chest');});
communityChestCards[4] = new Card("Legal Research Grant. Collect 20 knowledge points.", function() { addamount(20, 'Constitutional Chest');});
communityChestCards[5] = new Card("Constitutional Seminar Scholarship. Collect 100 knowledge points.", function() { addamount(100, 'Constitutional Chest');});
communityChestCards[6] = new Card("National Constitutional Conference. Collect 100 knowledge points.", function() { addamount(100, 'Constitutional Chest');});
communityChestCards[7] = new Card("Legal Workshop Participation. Receive 25 knowledge points.", function() { addamount(25, 'Constitutional Chest');});
communityChestCards[8] = new Card("Legal Research Expenses. Pay 100 points.", function() { subtractamount(100, 'Constitutional Chest');});
communityChestCards[9] = new Card("Constitutional Research Award. Collect 200 knowledge points.", function() { addamount(200, 'Constitutional Chest');});
communityChestCards[10] = new Card("Academic Conference Fees. Pay 150 points.", function() { subtractamount(150, 'Constitutional Chest');});
communityChestCards[11] = new Card("Research Consultation Fee. Pay 50 points.", function() { subtractamount(50, 'Constitutional Chest');});
communityChestCards[12] = new Card("National Constitutional Symposium. Collect 50 points from each participant.", function() { collectfromeachplayer(50, 'Constitutional Chest');});
communityChestCards[13] = new Card("Constitutional Knowledge Peak. Advance to Origin (Collect 200 points)", function() { advance(0);});
communityChestCards[14] = new Card("Constitutional Research Assessment. 40 points per fundamental right. 115 points per comprehensive review.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Constitutional Review Hearing. Go directly to Constitutional Crisis.", function() { gotojail();});

chanceCards[0] = new Card("Constitutional Protection Card. Can be used in legal proceedings.", function() { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Comprehensive Constitutional Review. Pay 25 points per fundamental right. 100 points per major amendment.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Research Funding Reduction. Pay 15 points.", function() { subtractamount(15, 'Constitutional Chance');});
chanceCards[3] = new Card("National Legal Conference. Pay 50 points to each participant.", function() { payeachplayer(50, 'Constitutional Chance');});
chanceCards[4] = new Card("Revisit Previous Constitutional Interpretation. Go back 3 spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Advance to nearest Constitutional Tribunal. If UNOWNED, you may acquire. If OWNED, roll dice and pay 10 times the amount.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Research Grant from National Institution. Collect 50 points.", function() { addamount(50, 'Constitutional Chance');});
chanceCards[7] = new Card("Advance to nearest Legal Commission. Pay double commission if owned. If unowned, you may acquire.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Constitutional Journey. Advance to Origin. Collect 200 points.", function() { advance(0,32);});
chanceCards[9] = new Card("Constitutional Powers Review. Advance to Amendment Procedure.", function() { advance(31);});
chanceCards[10] = new Card("Constitutional Sovereignty Analysis. Advance to Constitutional Sovereignty.", function() { advance(39);});
chanceCards[11] = new Card("Advance to Right to Equality.", function() { advance(13);});
chanceCards[12] = new Card("Research Publication Grant. Collect 150 points.", function() { addamount(150, 'Constitutional Chance');});
chanceCards[13] = new Card("Advance to nearest Legal Commission. Pay double commission if owned.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Constitutional Principles Journey. Advance to Supreme Court Powers.", function() { advance(9);});
chanceCards[15] = new Card("Constitutional Crisis Hearing. Go directly to Constitutional Crisis.", function() { gotojail();});