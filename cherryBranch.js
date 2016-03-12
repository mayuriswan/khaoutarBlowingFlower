(function(){

	var leavesStage, branchStage;
	var leaves, branchLeaves;
	var branchColor = '#3A2311';
	var BackgroundColor = "#AEDDCD";
	var leafColor = "#FFB7C5";
	var innerWidth, innerHeight;
	var bHeight, bWidth;
	var numOfLeaves = 300;
	

	function init(){
		console.log("Width: " + window.innerWidth);
		console.log("Height: " + window.innerHeight);
		innerHeight = window.innerHeight;
		innerWidth = window.innerWidth;
		initStages();
		initBranch();

		initLeaves();
		// animate();
	}

	function initStages() {
		leavesStage = new createjs.Stage("leavesCanvas");
		leavesStage.canvas.width = innerWidth;
		leavesStage.canvas.height = innerHeight-10;

		branchStage = new createjs.Stage("treeCanvas");
		bWidth = innerWidth/1.2 | 0;//1200
		bHeight = innerHeight/1.4 | 0; //600;
		console.log("bWidth: " + bWidth);
		console.log("bHeight: " + bHeight);
		branchStage.canvas.width = 1200;
		branchStage.canvas.height = 600;

		
	}

	function initBranch() {
		var branch = drawBranch();
		var space = window.innerWidth * 0.8333;
		console.log("Space:" + space );
		var factor = space / branchStage.canvas.width;
		console.log("Factor:" + factor );
		var scaler = branchStage.canvas.width * factor;
		console.log("Scaler:" + scaler );
		// branch.regX = factor;
		// branch.regY = factor;
		// branchStage.scaleY = factor;
		// branchStage.scaleX = factor;

		branchStage.addChild(branch);

		// console.log("Branch width:" + branchStage.canvas.width);

		// var space = window.innerWidth * 0.8333;
		// console.log("Space:" + space );
		// var factor = space / branchStage.canvas.width;
		// console.log("Factor:" + factor );
		// var scaler = branchStage.canvas.width * factor;
		// console.log("Scaler:" + scaler );
		// branch.regX = factor;
		// branch.regY = factor;
		// branch.scaleY = factor;
		// branch.scaleX = factor;
		

		branchStage.update();


	}

	function initLeaves() {
		//beginLinearGradientFill(["rgba(255,183,197,0.9)","rgba(255, 197, 208, 0.9)"],[0.8,0.2], 0,0,0,14)
		var leaves = [];
		for(var i = 0; i < numOfLeaves; i++){
			var leaf = new createjs.Shape();
			var x = (2*window.innerWidth)*Math.random() + 300;
            var y = -((Math.random() * 20) + 15);
            var randomRotation = Math.random() * 360;
            var max = 14;
            var min = 10;
			leaf.graphics.beginFill(leafColor).drawRoundRectComplex(0,0,Math.random() * (max - min + 1) + min| 0,Math.random() * (max - min + 1) + min| 0,12,1,12,1);
			leaf.x = x;
			leaf.y = y;
			leaves.push(leaf);
			leavesStage.addChild(leaf);
			var falltime = Math.round(window.innerHeight * 7) + Math.random() * 5000;
			console.log("FallTime: " + falltime);

			createjs.Tween.get(leaf, {loop:true})
				.wait(Math.random() * 10000)
				.to({x: -window.innerWidth, y: 2*window.innerHeight, rotation: Math.random() * 360 + 60}, (Math.round(window.innerHeight * 11) + Math.random() * 5000));
				// .to({x: xStart, y: -((Math.random() * 20) + 15)}, 0);
		}
		
		
		//leavesStage.update();
		createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", leavesStage);

	}

	function animate() {

	}

	function drawBranch() {
		var branch = new createjs.Shape();

		branch.graphics.beginFill(branchColor);
		branch.graphics.moveTo(1200, 456).lineTo(1149, 461).lineTo(1040, 506).lineTo(985, 516).lineTo(933, 539).lineTo(913,546).lineTo(864,558).lineTo(826,519).lineTo(753,494).lineTo(813,504).lineTo(805,498);
		branch.graphics.bezierCurveTo(783,460,780,470,769, 461); /*Possible arc upwards instead*/
		branch.graphics.lineTo(755,446).lineTo(720,461).lineTo(600,405).lineTo(546,395).lineTo(503,413).lineTo(530,383).lineTo(486,381).lineTo(439, 385).lineTo(416,403).lineTo(421,473).lineTo(384,540).lineTo(360,557);
		branch.graphics.bezierCurveTo(391,525,415,470,412,471); /*Possible arc rightwards instead*/
		branch.graphics.bezierCurveTo(420,456,410,419,399,406); /*Possible arc rightwards instead*/
		branch.graphics.lineTo(374,422).lineTo(309,423).lineTo(297,428).lineTo(278,470).lineTo(246,508).lineTo(275,454).lineTo(281,431);
		branch.graphics.bezierCurveTo(242,433,203,468,190,510); /*Pissible arc leftwards instead*/
		branch.graphics.lineTo(126,553).lineTo(171,514).lineTo(222,433);
		branch.graphics.bezierCurveTo(248,430,288,421,308,408); /*Possible arc downwards instead*/
		branch.graphics.lineTo(333,411).lineTo(371,406).lineTo(434,366).lineTo(489,366).lineTo(444,310);
		branch.graphics.bezierCurveTo(415,260,369,249,339,269); /*possible arc upwards instead*/
		branch.graphics.lineTo(285,311).lineTo(275,316).lineTo(320,268).lineTo(247,269).lineTo(208,251).lineTo(112,273).lineTo(203,242).lineTo(248,258).lineTo(306,257).lineTo(341,250);
		branch.graphics.bezierCurveTo(363,254,385,255,406,252);//possible arc downwards instead
		branch.graphics.lineTo(505,366).lineTo(613,398).lineTo(720,444).lineTo(743,433).lineTo(647,340).lineTo(532,262).lineTo(655,324).lineTo(726,398).lineTo(724,355).lineTo(742,411).lineTo(758,426).lineTo(845,383).lineTo(834,380).lineTo(745,317).lineTo(655,266).lineTo(597,211).lineTo(582,171).lineTo(587,120).lineTo(543,47).lineTo(599,117);
		branch.graphics.lineTo(597,179).lineTo(614,212).lineTo(654,252).lineTo(686,268).lineTo(681,226).lineTo(674,188).lineTo(694,222).lineTo(699,284).lineTo(762,307).lineTo(781,325);
		branch.graphics.bezierCurveTo(810,370,896,390,934,373); /*possible arc downwards instead*/
		branch.graphics.bezierCurveTo(944,381,960,387,966,382); //Possible arc downwards instead
		branch.graphics.lineTo(1015,382).lineTo(993,320).lineTo(986,285).lineTo(957,251).lineTo(997,278).lineTo(1016,230).lineTo(1020,260).lineTo(1000,295).lineTo(1008,332).lineTo(1031,376).lineTo(1061,381).lineTo(1090,406).lineTo(1109,416).lineTo(1125,430).lineTo(1174,408).lineTo(1200,411).lineTo(1200,456);

		branch.graphics.beginFill(BackgroundColor);
		branch.graphics.moveTo(1102,444).lineTo(993,502).lineTo(948,518).lineTo(885,538).lineTo(867,538).lineTo(842,517).lineTo(770,440).lineTo(841,403).lineTo(922,388);
		branch.graphics.bezierCurveTo(929,385,948,388,959,400); //Possuble arc upwards instead
		branch.graphics.bezierCurveTo(972,394,998,396,1014,400); //Possible arc upwards instead
		branch.graphics.bezierCurveTo(1030,390,1048,392,1052,401); //Possible arc upwards instead
		branch.graphics.lineTo(1102,444);

		


		branch.cache(0,0,1200, 600);

		return branch;
	}

	window.onload = function() { init() };
})();