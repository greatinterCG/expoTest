(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"スクロールサンプル_atlas_1", frames: [[0,1336,1256,203],[1739,201,174,214],[1153,1015,174,214],[1484,0,253,218],[1258,1231,174,214],[0,0,1482,280],[0,282,1482,280],[1329,1015,174,214],[1484,220,253,218],[0,772,1151,280],[0,1054,1151,280],[1153,772,800,241],[1739,0,238,199],[1505,1015,152,152],[0,564,1989,206],[1258,1447,414,88],[1484,440,482,98]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_46 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(img.CachedBmp_41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1482,2156);


(lib.CachedBmp_40 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(img.CachedBmp_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2383,468);


(lib.CachedBmp_27 = function() {
	this.initialize(img.CachedBmp_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2362,511);


(lib.CachedBmp_59 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["スクロールサンプル_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2102,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ボタン = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(120,197,244,0.008)").s().p("EhcGAT9MAAAgn5MC4NAAAMAAAAn5g");
	this.shape.setTransform(589.5,127.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ボタン, new cjs.Rectangle(0,0,1179,255.4), null);


(lib.tapped = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		/* このフレームで停止
		 タイムラインは、このコードが挿入されたフレームで停止 / 一時停止します。
		ムービークリップのタイムラインの停止 / 一時停止にも使用できます。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// レイヤー_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(1841.6,-162.85,1.7701,2.3715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1767.4926,y:-162.9315},0).wait(1).to({x:1693.3909,y:-163.0125},0).wait(1).to({x:1619.2892,y:-163.0935},0).wait(1).to({x:1545.1874,y:-163.1746},0).wait(1).to({x:1471.0857,y:-163.2556},0).wait(1).to({x:1396.984,y:-163.3367},0).wait(1).to({x:1322.8823,y:-163.4177},0).wait(1).to({x:1248.7805,y:-163.4987},0).wait(1).to({x:1174.6788,y:-163.5798},0).wait(1).to({x:1100.5771,y:-163.6608},0).wait(1).to({x:1026.4754,y:-163.7418},0).wait(1).to({x:952.3736,y:-163.8229},0).wait(1).to({x:878.2719,y:-163.9039},0).wait(1).to({x:804.1702,y:-163.9849},0).wait(1).to({x:730.0685,y:-164.066},0).wait(1).to({x:655.9667,y:-164.147},0).wait(1).to({x:581.865,y:-164.228},0).wait(1).to({x:507.7633,y:-164.3091},0).wait(1).to({x:433.6616,y:-164.3901},0).wait(1).to({x:359.5599,y:-164.4711},0).wait(1).to({x:285.4581,y:-164.5522},0).wait(1).to({x:211.3564,y:-164.6332},0).wait(1).to({x:137.2547,y:-164.7142},0).wait(1).to({x:63.153,y:-164.7953},0).wait(1).to({x:-10.9488,y:-164.8763},0).wait(1).to({x:-85.0505,y:-164.9573},0).wait(1).to({x:-159.1522,y:-165.0384},0).wait(1).to({x:-233.2539,y:-165.1194},0).wait(1).to({x:-307.3557,y:-165.2004},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1841.6,-162.8,1416.1,571.5);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlfFfIAAq+IK+AAIAAK+g");
	mask.setTransform(57.5,35.15);

	// レイヤー_3
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(0,14.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(22.4,14.8,70.30000000000001,55.5), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i6AAkFQAAkFC6i4QC5i6EEAAQEGAAC5C6QC4C4AAEFQAAEFi4C6Qi5C4kGAAQkEAAi5i4g");
	mask.setTransform(63.15,63.15);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i6AAkFQAAkFC6i4QC5i6EEAAQEGAAC5C6QC4C4AAEFQAAEFi4C6Qi5C4kGAAQkEAAi5i4g");
	mask.setTransform(63.15,63.15);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i5AAkGQAAkEC6i6QC5i5EEAAQEGAAC5C5QC4C6AAEEQAAEGi4C5Qi5C5kGAAQkEAAi5i5g");
	mask.setTransform(63.15,63.175);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i5AAkGQAAkEC6i6QC5i5EEAAQEGAAC5C5QC4C6AAEEQAAEGi4C5Qi5C5kGAAQkEAAi5i5g");
	mask.setTransform(63.15,63.175);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i5AAkGQAAkFC6i5QC5i5EEAAQEGAAC5C5QC4C5AAEFQAAEFi4C6Qi5C5kGAAQkEAAi5i5g");
	mask.setTransform(63.15,63.175);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i5AAkGQAAkFC6i5QC5i5EEAAQEGAAC5C5QC4C5AAEFQAAEFi4C6Qi5C5kGAAQkEAAi5i5g");
	mask.setTransform(63.15,63.175);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am9G/Qi6i6AAkFQAAkFC6i4QC4i6EFAAQEGAAC5C6QC4C4AAEFQAAEFi4C6Qi5C4kGAAQkFAAi4i4g");
	mask.setTransform(63.15,63.15);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Am9G/Qi6i6AAkFQAAkFC6i4QC4i6EFAAQEGAAC5C6QC4C4AAEFQAAEFi4C6Qi5C4kGAAQkFAAi4i4g");
	mask_1.setTransform(63.15,63.15);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,0,0), null);


(lib.シンボル1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(63.1,532.15,1,1,0,0,0,63.1,63.1);

	this.instance_1 = new lib.CachedBmp_45();
	this.instance_1.setTransform(19.75,488.35,0.5,0.5);

	this.instance_2 = new lib.ClipGroup_5();
	this.instance_2.setTransform(63.1,532.15,1,1,0,0,0,63.1,63.1);

	this.instance_3 = new lib.CachedBmp_44();
	this.instance_3.setTransform(0,469.05,0.5,0.5);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(63.1,63.1,1,1,0,0,0,63.1,63.1);

	this.instance_5 = new lib.CachedBmp_43();
	this.instance_5.setTransform(19.75,19.35,0.5,0.5);

	this.instance_6 = new lib.ClipGroup_3();
	this.instance_6.setTransform(63.1,63.1,1,1,0,0,0,63.1,63.1);

	this.instance_7 = new lib.CachedBmp_42();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_41();
	this.instance_8.setTransform(214.8,258,0.5,0.5);

	this.instance_9 = new lib.ClipGroup_2();
	this.instance_9.setTransform(63.1,1001.15,1,1,0,0,0,63.1,63.1);

	this.instance_10 = new lib.CachedBmp_40();
	this.instance_10.setTransform(19.75,957.35,0.5,0.5);

	this.instance_11 = new lib.ClipGroup_1();
	this.instance_11.setTransform(63.1,1001.15,1,1,0,0,0,63.1,63.1);

	this.instance_12 = new lib.CachedBmp_44();
	this.instance_12.setTransform(0,938.05,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_38();
	this.instance_13.setTransform(150.15,969.1,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_37();
	this.instance_14.setTransform(150.15,500.15,0.5,0.5);

	this.instance_15 = new lib.ClipGroup_0();
	this.instance_15.setTransform(63.1,1470.2,1,1,0,0,0,63.1,63.1);

	this.instance_16 = new lib.CachedBmp_36();
	this.instance_16.setTransform(19.75,1426.4,0.5,0.5);

	this.instance_17 = new lib.ClipGroup_7();
	this.instance_17.setTransform(63.1,1470.2,1,1,0,0,0,63.1,63.1);

	this.instance_18 = new lib.CachedBmp_44();
	this.instance_18.setTransform(0,1407.1,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_34();
	this.instance_19.setTransform(150.15,1438.15,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_33();
	this.instance_20.setTransform(150.15,31.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,955.8,1578.2), null);


(lib.スクロール要素 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.myButton.addEventListener("click", onInstructions);
		
		function onInstructions() {
			exportRoot.tapped.play(); //ルートの関数をコール	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// リセットボタン
	this.myButton = new lib.ボタン();
	this.myButton.name = "myButton";
	this.myButton.setTransform(395.35,1315.8,0.5097,0.4107);
	new cjs.ButtonHelper(this.myButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.myButton).wait(1));

	// レイヤー_7
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(395.35,1315.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// レイヤー_3
	this.instance_1 = new lib.シンボル1();
	this.instance_1.setTransform(562.1,4297.05,1,1,0,0,0,477.9,789);

	this.instance_2 = new lib.シンボル1();
	this.instance_2.setTransform(562.1,2592.6,1,1,0,0,0,477.9,789);

	this.instance_3 = new lib.シンボル1();
	this.instance_3.setTransform(562.1,876.2,1,1,0,0,0,477.9,789);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78C5F4").s().p("EhdGDHsMAAAmPXMC6MAAAMAAAGPXg");
	this.shape.setTransform(0,-0.05,1,2.019,0,0,0,-589.5,-1278);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.スクロール要素, new cjs.Rectangle(-6.3,0,1191.7,5160.6), null);


(lib.スクロールペイン = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// マスクのサイズを入力
		var MinX = 0;
		var MinY = 0;
		var MaxX = 1179;
		var MaxY = 2556;
		
		// スクロール方向の制御
		var canScrollHorizontally = false; // 横スクロール可否
		var canScrollVertically = true; // 縦スクロール可否
		
		// ダンピング係数
		var dampingFactor = 0.8;
		
		// デバッグ表示フラグ
		var showDebug = false;
		
		// ドラッグ可能なオブジェクトとマスクのインスタンス名
		var draggableObject = this.draggableObject;
		var scrollpaneMask = this.scrollpaneMask;
		
		// オブジェクトの初期サイズを取得
		var objectBounds = draggableObject.nominalBounds;
		var objectWidth = objectBounds.width;
		var objectHeight = objectBounds.height;
		
		// テキストボックスの作成
		var logbox = new createjs.Text("", "96px Arial", "#000000");
		
		// テキストボックスの位置を設定
		logbox.x = 10;
		logbox.y = 10;
		
		// テキストボックスをステージに追加
		stage.addChild(logbox);
		
		// ドラッグイベントの設定
		draggableObject.on("mousedown", startDrag);
		draggableObject.on("pressmove", drag);
		draggableObject.on("pressup", stopDrag);
		
		// フレーム数をカウントする変数
		var counter = 0;
		
		// 前のフレームの座標
		var origX = 0;
		var origY = 0;
		
		// 現在のフレームの座標
		var finalX = 0;
		var finalY = 0;
		
		// ドラッグ中かどうかを示すフラグ
		var isDragging = false;
		
		// フリング中かどうかを示すフラグ
		var isFlinging = false;
		
		
		
		// フレームごとの更新処理を開始
		var tickListener = createjs.Ticker.on("tick", handleTick);
		
		// ドラッグ開始時の処理
		function startDrag(event) {
		    // fling中の場合、速度をリセットしてflingを停止
		    if (isFlinging) {
		        velocityX = 0;
		        velocityY = 0;
		        isFlinging = false;
		    }
		
		    // 初期化処理
		    counter = 0;
		    origX = event.currentTarget.x;
		    origY = event.currentTarget.y;
		    finalX = event.currentTarget.x;
		    finalY = event.currentTarget.y;
		
		    event.currentTarget.offset = {
		        x: event.currentTarget.x - event.stageX,
		        y: event.currentTarget.y - event.stageY
		    };
		    isDragging = true; // ドラッグ開始
		}
		
		// ドラッグ中の処理
		function drag(event) {
		    // 現在のフレームの座標を計算
		    var tempNewX = event.stageX + event.currentTarget.offset.x;
		    var tempNewY = event.stageY + event.currentTarget.offset.y;
		
		    // 垂直方向の制限
		    if (canScrollVertically) {
		        if (tempNewY > MinY) {
		            tempNewY = MinY;
		        } else if (tempNewY + objectHeight < MaxY) {
		            tempNewY = MaxY - objectHeight;
		        }
		    } else {
		        tempNewY = event.currentTarget.y; // 垂直方向のスクロールが禁止されている場合、Y座標を変更しない
		    }
		
		    // 水平方向の制限
		    if (canScrollHorizontally) {
		        if (tempNewX > MinX) {
		            tempNewX = MinX;
		        } else if (tempNewX + objectWidth < MaxX) {
		            tempNewX = MaxX - objectWidth;
		        }
		    } else {
		        tempNewX = event.currentTarget.x; // 水平方向のスクロールが禁止されている場合、X座標を変更しない
		    }
		
		    // デバッグ情報をテキストボックスに表示
		    updateLog(origX, origY, tempNewX, tempNewY);
		
		    // オブジェクトの位置を更新
		    event.currentTarget.x = tempNewX;
		    event.currentTarget.y = tempNewY;
		
		    // 現在の座標を次のフレームのために保存
		    finalX = tempNewX;
		    finalY = tempNewY;
		
		    // ステージの更新
		    stage.update();
		}
		
		// ドラッグ終了時の処理
		function stopDrag(event) {
		    isDragging = false; // ドラッグ終了
		    calculateFling();
		}
		
		// フレームごとの更新処理
		function handleTick(event) {
		    if (isDragging) {
		        counter++;
		    } else if (isFlinging) {
		        // ドラッグが終了した後の処理
		        // 速度を位置に加算
		        var tempNewX = draggableObject.x + velocityX;
		        var tempNewY = draggableObject.y + velocityY;
		
		        // 垂直方向の制限
		        if (canScrollVertically) {
		            if (tempNewY > MinY) {
		                tempNewY = MinY;
		                velocityY = 0; // 境界に達したら速度をリセット
		            } else if (tempNewY + objectHeight < MaxY) {
		                tempNewY = MaxY - objectHeight;
		                velocityY = 0; // 境界に達したら速度をリセット
		            }
		        }
		
		        // 水平方向の制限
		        if (canScrollHorizontally) {
		            if (tempNewX > MinX) {
		                tempNewX = MinX;
		                velocityX = 0; // 境界に達したら速度をリセット
		            } else if (tempNewX + objectWidth < MaxX) {
		                tempNewX = MaxX - objectWidth;
		                velocityX = 0; // 境界に達したら速度をリセット
		            }
		        }
		
		        // 速度を減速（ダンピング）
		        velocityX *= dampingFactor;
		        velocityY *= dampingFactor;
		
		        // オブジェクトの位置を更新
		        draggableObject.x = tempNewX;
		        draggableObject.y = tempNewY;
		
		        // 速度がほぼ0になったら更新を停止
		        if (Math.abs(velocityX) < 0.1 && Math.abs(velocityY) < 0.1) {
		            isFlinging = false;
		        }
		
		        // ステージの更新
		        stage.update();
		    }
		}
		
		// フリングの計算処理
		function calculateFling() {
		    var flingX = (finalX - origX) / counter;
		    var flingY = (finalY - origY) / counter;
		    var flingDuration = counter / 10;
		    var flingXFinal = 0;
		    var flingYFinal = 0;
		
		    // フレームレートが変更されたので、フリングの感度を調整
		    var flingMultiplier = 24 / 30;
		
		    if (flingDuration < 0.5) {
		        flingXFinal = (flingX < 0) ? Math.max(0, draggableObject.x + flingX * 50 * flingMultiplier) : Math.min(MaxX, draggableObject.x + flingX * 50 * flingMultiplier);
		        flingYFinal = (flingY < 0) ? Math.max(0, draggableObject.y + flingY * 50 * flingMultiplier) : Math.min(MaxY, draggableObject.y + flingY * 50 * flingMultiplier);
		    } else {
		        flingXFinal = (flingX < 0) ? Math.max(0, draggableObject.x + flingX * 10 * flingMultiplier) : Math.min(MaxX, draggableObject.x + flingX * 10 * flingMultiplier);
		        flingYFinal = (flingY < 0) ? Math.max(0, draggableObject.y + flingY * 10 * flingMultiplier) : Math.min(MaxY, draggableObject.y + flingY * 10 * flingMultiplier);
		        flingDuration = 1;
		    }
		
		    velocityX = flingX / flingDuration;
		    velocityY = flingY / flingDuration;
		
		    isFlinging = true;
		}
		
		// ログの更新
		function updateLog(origX, origY, newX, newY) {
		    if (showDebug) {
		        logbox.text = "origX: " + origX + "\rorigY: " + origY + "\rnewX: " + newX + "\rnewY: " + newY + "\r";
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// スクロールマスク (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhcGCh4MAAAlDvMC4NAAAMAAAFDvg");
	mask.setTransform(589.4961,1035.994);

	// スクロール要素
	this.draggableObject = new lib.スクロール要素();
	this.draggableObject.name = "draggableObject";

	var maskedShapeInstanceList = [this.draggableObject];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.draggableObject).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.スクロールペイン, new cjs.Rectangle(0,0,1179,2072), null);


// stage content:
(lib.スクロールサンプル = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:0,reset:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//スマホドラッグ有効
		createjs.Touch.enable(stage, false, true);
		//タップ有効、expo3本指長押し無効
		stage.preventSelection = true;
		
		
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame() {
			this.gotoAndStop("reset");
		}
		
		
		/* ムービークリップを停止
		ステージ上の指定したムービークリップを停止します。
		
		手順 :
		1. 現在再生中のムービークリップで、このコードを使用します。
		*/
		
		this.tapped.stop();
	}
	this.frame_1 = function() {
		//タップ無効、expo3本指長押し有効
		stage.preventSelection = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// tapped
	this.tapped = new lib.tapped();
	this.tapped.name = "tapped";
	this.tapped.setTransform(567.1,868.45,1,1,0,0,0,1427.5,120.4);

	this.timeline.addTween(cjs.Tween.get(this.tapped).wait(2));

	// toリセットボタン
	this.movieClip_1 = new lib.ボタン();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(589.4,127.65,1,1,0,0,0,589.4,127.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({_off:true},1).wait(1));

	// リセットメッセージ
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(53.3,920.5,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// レイヤー_1
	this.instance_1 = new lib.CachedBmp_58();
	this.instance_1.setTransform(118.85,30.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// ステータスバー
	this.instance_2 = new lib.CachedBmp_59();
	this.instance_2.setTransform(895.9,33.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// トークヘッダ
	this.instance_3 = new lib.CachedBmp_27();
	this.instance_3.setTransform(-0.35,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// トークフッター
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(360.85,2420.55,1,1,0,0,0,59.5,57.1);

	this.instance_5 = new lib.CachedBmp_30();
	this.instance_5.setTransform(320.75,2360.5,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_67();
	this.instance_6.setTransform(86.2,2347,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_28();
	this.instance_7.setTransform(-6.35,2322.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(2));

	// スクロールペイン
	this.instance_8 = new lib.スクロールペイン();
	this.instance_8.setTransform(0,255.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(1));

	// 背景
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78C5F4").s().p("EhdGDHsMAAAmPXMC6MAAAMAAAGPXg");
	this.shape.setTransform(589.5,1278);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(583.2,1278,1814.1000000000001,4138);
// library properties:
lib.properties = {
	id: '84287BB20D864EDDBDE84934698B6EDF',
	width: 1179,
	height: 2556,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_41.png", id:"CachedBmp_41"},
		{src:"images/CachedBmp_28.png", id:"CachedBmp_28"},
		{src:"images/CachedBmp_27.png", id:"CachedBmp_27"},
		{src:"images/CachedBmp_25.png", id:"CachedBmp_25"},
		{src:"images/スクロールサンプル_atlas_1.png", id:"スクロールサンプル_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['84287BB20D864EDDBDE84934698B6EDF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;