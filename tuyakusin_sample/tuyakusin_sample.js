(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tuyakusin_sample_atlas_1", frames: [[0,0,1080,1920]]}
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



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1121,2574);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,507,2570);


(lib.Image = function() {
	this.initialize(ss["tuyakusin_sample_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Ellipse_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgtAgggQAhggAsAAQAtAAAhAgQAgAgAAAtQAAAuggAgQghAggtAAQgsAAghggg");
	this.shape.setTransform(11,11.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_2, new cjs.Rectangle(0,0,22,22.1), null);


(lib.Ellipse_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsQAAAuggAgQghAggtAAQgtAAggggg");
	this.shape.setTransform(11.025,11.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse_1, new cjs.Rectangle(0,0,22.1,22.1), null);


(lib.Ellipse = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgtAgggQAhggAsAAQAtAAAhAgQAgAgAAAtQAAAuggAgQghAggtAAQgsAAghggg");
	this.shape.setTransform(11,11.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse, new cjs.Rectangle(0,0,22,22.1), null);


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
	mask.graphics.p("EhUXAFuIAArbMCovAAAIAALbg");
	mask.setTransform(540,36.6);

	// レイヤー_3
	this.instance = new lib.Image();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1080,73.2), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#08AAFF","#000087"],[0,0.706],-103.1,0,103.1,0).s().p("AwGQHMAAAggNMAgNAAAMAAAAgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(-103.1,-103.1,206.2,206.2), null);


(lib.maru = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtQAAAuggAgQghAggtAAQgtAAggggg");
	this.shape.setTransform(124.95,11.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:false},0).wait(11));

	// レイヤー_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsQAAAuggAgQghAggtAAQgtAAggggg");
	this.shape_1.setTransform(67.975,11.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(19).to({_off:false},0).wait(21));

	// レイヤー_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAQgtAAggggg");
	this.shape_2.setTransform(11,11.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,22.1);


(lib.green = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABwHTQjNhYiRjFQiSjGgWjeQgKhpBJhKQAfghA3gcQARgJAdADQAmADARAcQARAeAZBKQAXBIACAYQACAWgVAVQgVATgbAEQgXADgJAKQgEAFAAAFIAVA3QAjBLBEBbQBEBcA7A4QAeAbARAJIAKgBQANgFAJgVQAMgaAZgOQAagOAUAJQAWAIA+AsQA/AuAYAaQAWAXgIAmQgHAcgNAPQgsArgnAUQgyAagzAAQgtAAgtgTg");
	this.shape.setTransform(104.2675,103.1725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#43BF3A").s().p("AmRO3Qi5hPiOiOQiPiPhPi5QhRjAAAjSQAAjRBRi/QBPi6CPiOQCOiPC5hPQDAhRDRAAQDSAAC/BRQC5BPCQCPQCOCOBOC6QBRC/AADRQAADShRDAQhOC5iOCPQiQCOi5BPQi/BRjSAAQjRAAjAhRg");
	this.shape_1.setTransform(103.15,103.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(0,0,206.3,206.4), null);


// stage content:
(lib.tuyakusin_sample = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {calling:0,talking:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		/* このフレームで停止
		 タイムラインは、このコードが挿入されたフレームで停止 / 一時停止します。
		ムービークリップのタイムラインの停止 / 一時停止にも使用できます。
		*/
		
		this.stop();
		
		
		
		
		
		/* クリックして特定のフレームに移動し、停止
		特定のシンボルインスタンス上でクリックすると、再生ヘッドがタイムラインの指定フレームに移動し、ムービーが停止します。
		メインタイムラインまたはムービークリップタイムライン上で使用できます。
		
		手順 :
		1. 以下のコード内の数値 5 を、シンボルインスタンスのクリック時に再生ヘッドが移動するフレームの番号に置き換えます。
		2. EaselJS のフレーム番号は、1 ではなく 0 から始まります。
		*/
		
		
		this.movieClip_0.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(1);
		}
		
		
		/* クリックして特定のフレームに移動し、停止
		特定のシンボルインスタンス上でクリックすると、再生ヘッドがタイムラインの指定フレームに移動し、ムービーが停止します。
		メインタイムラインまたはムービークリップタイムライン上で使用できます。
		
		手順 :
		1. 以下のコード内の数値 5 を、シンボルインスタンスのクリック時に再生ヘッドが移動するフレームの番号に置き換えます。
		2. EaselJS のフレーム番号は、1 ではなく 0 から始まります。
		*/
		
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_1 = function() {
		/* このフレームで停止
		 タイムラインは、このコードが挿入されたフレームで停止 / 一時停止します。
		ムービークリップのタイムラインの停止 / 一時停止にも使用できます。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 終話ボタン
	this.movieClip_1 = new lib.シンボル1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(391.7,1392.9,1.7579,1.2675,0,0,0,-102.5,-102.9);
	this.movieClip_1.alpha = 0.0117;
	this.movieClip_1._off = true;
	new cjs.ButtonHelper(this.movieClip_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({_off:false},0).wait(1));

	// 着信ボタン
	this.movieClip_0 = new lib.シンボル1();
	this.movieClip_0.name = "movieClip_0";
	this.movieClip_0.setTransform(800.7,1414.35,1.0833,1.0833,0,0,0,-102.5,-102.9);
	this.movieClip_0.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_0).wait(1).to({regX:-102.7,scaleX:1.5387,scaleY:1.2675,x:1407.45,y:1392.9,alpha:0},0).wait(1));

	// 上部
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(585,1040,1.0833,1.0833,0,0,0,540,960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 通話中
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(454.15,349.65,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// まる
	this.instance_2 = new lib.maru();
	this.instance_2.setTransform(584.95,505.8,1.0833,1.0833,0,0,0,68,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1));

	// レイヤー_8
	this.movieClip_1_1 = new lib.green();
	this.movieClip_1_1.name = "movieClip_1_1";
	this.movieClip_1_1.setTransform(911.85,1525.85,1.0833,1.0833,0,0,0,103.2,103.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1_1).to({_off:true},1).wait(1));

	// 着信ベース
	this.instance_3 = new lib.Ellipse();
	this.instance_3.setTransform(646.75,505.8,1.0833,1.0833,0,0,0,11.1,11.1);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Ellipse_1();
	this.instance_4.setTransform(585,505.8,1.0833,1.0833,0,0,0,11.1,11.1);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Ellipse_2();
	this.instance_5.setTransform(523.3,505.8,1.0833,1.0833,0,0,0,11.1,11.1);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(148.15,349.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(1));

	// 待受
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#08AAFF","#000087"],[0,0.706],0,960,0,-960).s().p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	this.shape.setTransform(-0.05,0,1.0833,1.3188,0,0,0,-540,-960);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(585,1266,1139.2,1266);
// library properties:
lib.properties = {
	id: '8E972260C6BF4060843FDB0BF6A2822F',
	width: 1170,
	height: 2532,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/tuyakusin_sample_atlas_1.png", id:"tuyakusin_sample_atlas_1"}
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
an.compositions['8E972260C6BF4060843FDB0BF6A2822F'] = {
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