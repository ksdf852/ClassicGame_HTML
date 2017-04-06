function Background() {
	//	this.img = new GraphicObject(resourcePreLoader.GetImage("img/몬스터.png"));

}

Background.prototype.Render = function() {
	//	this.img.Render(Context);
};
function Map() {

	this.backimg = new GraphicObject(resourcePreLoader.GetImage("img/배경1.png"));
	this._temp=0;
	this._block=0;
	this._map = new Array();
	this._stage = new Array();
	this._hudle = new Array();
	this._level=getLevel();
	setLevel(0);	
}

function setLevel(lev) {
	this.level = lev;
}

function getLevel() {
	this.lev=this.level;	
	return this.lev;
}

Map.prototype.Render = function() {

	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	if(getLevel()==1 && this._temp==0){
		this._temp=1;
		this._level=getLevel();
		this.backimg = new GraphicObject(resourcePreLoader.GetImage("img/배경2.png"));
	}
	if(getLevel()==2 && this._temp==0){
		this._temp=1;
		this._level=getLevel();
		this.backimg = new GraphicObject(resourcePreLoader.GetImage("img/배경3.png"));
	}
	if(getLevel()==3 && this._temp==0){
		this._temp=1;
		this._level=getLevel();
		this.backimg = new GraphicObject(resourcePreLoader.GetImage("img/배경4.png"));
	}
	if (getLevel() == 4 && this._temp == 0) {
		this._temp = 1;
		this._level = getLevel();
		this.backimg = new GraphicObject(resourcePreLoader.GetImage("img/ending.png"));
	}				
	if(getLevel()-1==this._level)
		this._temp=0;
	
	this._count = 0;
	this._level = getLevel();
//	console.log(this._level);

	if (this._level == 0) {
		this._map[0] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[1] =  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		this._map[2] =  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[3] =  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[4] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[5] =  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1];
		this._map[6] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[7] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
		this._map[8] =  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1];// 가시사이에 몬스터
		this._map[9] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[10] = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[11] = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1];//몬스터
		this._map[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];//끝쪽에 가시
		this._map[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
		this._map[14] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	}
	if (this._level == 1) {
		this._map[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[2] = [1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0];
		this._map[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
		this._map[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
		this._map[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
		this._map[6] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0];
		this._map[7] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[8] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
		this._map[9] = [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[10] =[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
		this._map[11] =[0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
		this._map[12] =[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
		this._map[13] =[0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
		this._map[14] =[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1];
	}
	if(this._level == 2 && getLeverCount()<6){
		this._map[0] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[1] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[2] = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[3] = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[4] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[5] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[6] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[7] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[8] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1];
		this._map[9] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
		this._map[10] =[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
		this._map[11] =[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
		this._map[12] =[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
		this._map[13] =[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];// 바닥에 몬스터 두개가 교차로 돌아다님
		this._map[14] =[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	}else if (this._level == 2) {
		this._map[0] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
		this._map[1] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1];
		this._map[2] = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0];
		this._map[3] = [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0];
		this._map[4] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0];
		this._map[5] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0];
		this._map[6] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
		this._map[7] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0];
		this._map[8] = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0];
		this._map[9] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
		this._map[10] =[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
		this._map[11] =[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
		this._map[12] =[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
		this._map[13] =[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];// 바닥에 몬스터 두개가 교차로 돌아다님
		this._map[14] =[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	}
	if (this._level == 3) {
		this._map[0] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[1] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[2] =  [0, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];//출발시작이 왼쪽 끝(불사이 몬스터) 오른쪽끝 몬스터
		this._map[3] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
		this._map[4] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[5] =  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 0];//불, 가서 사이 몬스터 왼쪽 블럭끝 몬스터
		this._map[6] =  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[7] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[8] =  [1, 1, 3, 1, 1, 1, 3, 1, 1, 2, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0];//불사이 몬스터 불 가서 사이 몬스터 불 사이 몬스터
		this._map[9] =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
		this._map[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[11] = [0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1, 3, 0];// 왼쪽끝 몬스터 오른쪽 불사이 몬스터
		this._map[12] = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this._map[14] = [1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];// 불사이 몬스터
	}
//	console.log(this._level);
if (getLevel() != 4) {
		for (var i = 0; i < 15; i++) {
			for (var j = 0; j < 20; j++) {
				if (this._map[i][j] == 1) {
					this._stage[this._count] = {
						img : null,
						box : null,
						kind : null
					};
					if (getLevel() == 0)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/벽돌1.png"));
					if (getLevel() == 1)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/벽돌2.png"));
					if (getLevel() == 2)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/벽돌3.png"));
					if (getLevel() == 3)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/벽돌4.png"));
					this._stage[this._count].img.SetPosition(j * 40, i * 40);
					this._stage[this._count].box = {
						left : j * 40,
						top : i * 40,
						right : j * 40 + 40,
						bottom : i * 40 + 40
					};
					this._stage[this._count].kind = 1;
					this._count++;
				}
				if (this._map[i][j] == 2) {
					this._stage[this._count] = {
						img : null,
						box : null
					};
					if (getLevel() == 0)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/불꽃.png"));
					else if (getLevel() == 1)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/불꽃2.png"));
					else if (getLevel() == 2)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/불꽃3.png"));
					else if (getLevel() == 3)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/불꽃4.png"));
					this._stage[this._count].img.SetPosition(j * 40, i * 40 - 20);
					this._stage[this._count].box = {
						left : j * 40,
						top : i * 40,
						right : j * 40 + 40,
						bottom : i * 40 + 40
					};
					this._stage[this._count].kind = 2;
					this._count++;
				}
				if (this._map[i][j] == 3) {
					this._stage[this._count] = {
						img : null,
						box : null
					};
					if (getLevel() == 0)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/가시.png"));
					else if (getLevel() == 1)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/가시2.png"));
					else if (getLevel() == 3)
						this._stage[this._count].img = new GraphicObject(resourcePreLoader.GetImage("img/가시4.png"));
					this._stage[this._count].img.SetPosition(j * 40, i * 40 - 20);
					this._stage[this._count].box = {
						left : j * 40,
						top : i * 40,
						right : j * 40 + 40,
						bottom : i * 40 + 40
					};
					this._stage[this._count].kind = 3;
					this._count++;
				}
			}
		}
	}
	this.backimg.Render(Context);
	if (getLevel() != 4) {
		for (var i = 0; i < this._count; i++)
			this._stage[i].img.Render(Context);
	}

};

//var 변수선언
Map.prototype.CrashCheck = function() {
	var gamestatePlayerBox = playState.GetPlayerBox();
	var gamehudlePlayerBox = new Monster();
	var crashCheckBox = {
		left : false,
		top : false,
		right : false,
		bottom : false,
		h : 0
	};
	for (var i = 0; i < this._count; i++) {
		this.w = gamestatePlayerBox.right - this._stage[i].box.left;
		this.h = gamestatePlayerBox.bottom - this._stage[i].box.top;
		if (this.w <= 40 && this.w >= 0 && this.h <= 42 && this.h > 2) {
			crashCheckBox.right = true;
		}
		if (this.w >= 40 && this.w <= 80 && this.h <= 42 && this.h > 2) {
			crashCheckBox.left = true;
		}
		if (this.w < 80 && this.w >= 0) {
			if (gamestatePlayerBox.bottom >= this._stage[i].box.top && gamestatePlayerBox.top < this._stage[i].box.top) {

				if (this.h < 28 && this.h > 0 && this.w > this.h) {
					if (this._stage[i].kind == 2 || this._stage[i].kind == 3) {
						crashCheckBox.top = true;
					}
					crashCheckBox.bottom = true;
					if (this._stage[i + 1].kind == 2 || this._stage[i + 1].kind == 3) {
						crashCheckBox.top = true;
					}
					crashCheckBox.h = this.h;
					return crashCheckBox;
				}
			}
		}
	}
	return crashCheckBox;
};
Map.prototype.MonsCheck = function(i) {

	var gamestateMonsterBox = playState.GetMonsterBox(i);
	var monsCheckBox = {
		left : false,
		top : false,
		right : false,
		bottom : false,
		h : 0
	};
	for (var i = 0; i < this._count; i++) {
		this.w = gamestateMonsterBox.right - this._stage[i].box.left;
		this.h = gamestateMonsterBox.bottom - this._stage[i].box.top;
		if (this.w < 80 && this.w > 0) {
			if (gamestateMonsterBox.bottom >= this._stage[i].box.top && gamestateMonsterBox.top < this._stage[i].box.top) {
				if (this.h < 28 && this.h > 0 && this.w > this.h) {
					monsCheckBox.bottom = true;
					monsCheckBox.h = this.h;
					return monsCheckBox;
				}
			}
		}
	}
	return monsCheckBox;
};
