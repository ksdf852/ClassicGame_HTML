function Monster(x1, y1, kind) {

	if (kind == 1) {
		this.img = new GraphicObject(resourcePreLoader.GetImage("img/몬스터.png"));
	} else if(kind == 4){
		this.img = new GraphicObject(resourcePreLoader.GetImage("img/lever.png"));
	} else{
		this.img = new GraphicObject(resourcePreLoader.GetImage("img/몬스터2.png"));

	}
	//	console.log("-"+getLevel());
	this.Level = 0;
	this.back = new Background();
	this.x = x1;
	this.y = y1;
	this.range = this.x;
	this._monKind = kind;
	this._monTemp=0;
	this.lever=0;
	this.leverCount=0;
	this.temp = 0;
	this._leverTemp=0;
	this.gravity = 7;
	this.check = false;
	
	this.crashBox = {
		left : this.x,
		top : this.y,
		right : this.x + 40,
		bottom : this.y + 40
	};
	

	this.Invalid();
}
function setMonsKind(kind){	
	this.kind=kind;
}
function getMonsKind(){
	return this.monkind=this.kind;
}
function setLeverCount(levCount){
	this.levCnt=levCount;
}
function getLeverCount(){
	return this.levCount=this.levCnt;
}
Monster.prototype.Render = function() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	this.img.Render(Context);
};
//몬스터 이동
Monster.prototype.Update = function(monsCheckBox,playerMonsCheckBox) {
	//		console.log(this.getLevel.Update());

	if(this._leverTemp==1 && getMonsKind()==0){
		this._leverTemp=0;		
	}
	if(getLeverCount()==0)
		this.leverCount=0;
	if(getMonsKind()==4 && this._monKind==4 && playerMonsCheckBox.right==true){
		if(this.lever==0 && this._leverTemp==0){
			this._leverTemp=1;
			setLeverCount(++this.leverCount);
			this.img.ChangeForward(0);
			this.lever=1;
		}
		else if(this.lever==1 && this._leverTemp==0){
			this._leverTemp=1;
			this.img.ChangeForward(1);
			this.lever=0;
			setLeverCount(++this.leverCount);	
		}	
		this.Invalid();	
	}
	if (getLevel() == 1 && this.temp == 0) {
		this.temp = 1;
		console.log("---" + getLevel());
		setLeverCount(0);
		this.x = 450;
		this.y = 450;
		this.range = this.x;
		this._level = getLevel();
		this.Invalid();
	}
	if (getLevel() == 2 && this.temp == 0) {

		if (this._monKind == 2) {
			this.x = 530;
			this.y = 450;
		} else if (this._monKind == 3) {
			this.x = 250;
			this.y = 450;
		}
		this.temp = 1;
		console.log("---" + getLevel());
		this.range = this.x;
		this._level = getLevel();
		this.Invalid();
	}

	if (getLevel() == this._level + 1)
		this.temp = 0;

	if (monsCheckBox.bottom == true && getLevel() == 0) {
		if (this.x <= 460 && this.check == false) {
			this.x += 2;
			this.img.ChangeForward(0);
			this.Invalid();
			if (this.x >= this.range + 50) {
				this.check = true;
			}
		} else {
			this.x -= 2;
			this.img.ChangeForward(1);
			this.Invalid();
			if (this.x <= this.range - 50) {
				this.check = false;
			}
		}
	}
	if (monsCheckBox.bottom == true && getLevel() == 1) {
		if (this.x <= 550 && this.check == false) {
			this.x += 2;
			this.img.ChangeForward(0);
			this.Invalid();
			if (this.x >= this.range + 50) {
				this.check = true;
			}
		} else {
			this.x -= 2;
			this.img.ChangeForward(1);
			this.Invalid();
			if (this.x <= this.range - 50) {
				this.check = false;
			}
		}
	}
	if (monsCheckBox.bottom == true && getLevel() == 2) {
		if (this._monKind == 2) {
			if (this.x <= 580 && this.check == false) {
				this.x += 2;
				this.img.ChangeForward(0);
				this.Invalid();
				if (this.x >= this.range + 10) {
					this.check = true;
				}
			} else {
				this.x -= 2;
				this.img.ChangeForward(1);
				this.Invalid();
				if (this.x <= this.range - 270) {
					this.check = false;
				}
			}
		}else if(this._monKind==3){
			if (this.x <= 580 && this.check == false) {
				this.x += 2;
				this.img.ChangeForward(0);
				this.Invalid();
				if (this.x >= this.range + 270) {
					this.check = true;
				}
			} else {
				this.x -= 2;
				this.img.ChangeForward(1);
				this.Invalid();
				if (this.x <= this.range - 10) {
					this.check = false;
				}
			}
		}
	}
	if (monsCheckBox.bottom == true) {
		monsCheckBox.bottom = false;
		this.gravity = 0;
		this.y = this.y - monsCheckBox.h + 2;
	} else {
		this.gravity = 8;
	}
	this.y = this.y + this.gravity;

	if (this.x < 40)
		this.x = 40;
	if (this.x > 720)
		this.x = 720;
	this.Invalid();
};

Monster.prototype.PlayerMonsCheck = function(i) {
	var gamestateMonsterBox = playState.GetMonsterBox(i);
	var gamestatePlayerBox = playState.GetPlayerBox();
	var playerMonsCheckBox = {
		left : false,
		top : false,
		right : false,
		bottom : false,
		h : 0
	};
	this.w = gamestatePlayerBox.right - gamestateMonsterBox.left;
	this.h = gamestatePlayerBox.bottom - gamestateMonsterBox.top;
	this.lw=80;
	if(getMonsKind()==4){
		this.lw=20;
	}
	if(this._monKind==4){
		console.log(this.w);
	}
	if (this.w < this.lw && this.w > 0 && this.h > 0 && this.h <= 40) {
		playerMonsCheckBox.right = true;
		if(this._monKind==4)
			setMonsKind(this._monKind);
		if (this.h < 40 && this.h > 0 && this.w > this.h) {
			playerMonsCheckBox.bottom = true;
			
			playerMonsCheckBox.h = this.h;
	

			return playerMonsCheckBox;
		}
	}else{
		if(this._monKind==4){
			setMonsKind(0);
		}
	}
	return playerMonsCheckBox;
};

Monster.prototype.Invalid = function() {
	this.img.SetPosition(this.x, this.y);
	if(this._monKind==4){
		this.crashBox = {
		left : this.x+15,
		top : this.y,
		right : this.x+25,
		bottom : this.y + 40
		};
	}else{
	this.crashBox = {
		left : this.x,
		top : this.y,
		right : this.x + 40,
		bottom : this.y + 40
	};
	}
	
};
