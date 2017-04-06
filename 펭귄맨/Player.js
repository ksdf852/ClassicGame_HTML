function Player() {

	this.img1 = new GraphicObject(resourcePreLoader.GetImage("img/펭귄1.png"));
	this.img2 = new GraphicObject(resourcePreLoader.GetImage("img/펭귄2.png"));
	this.stage = new Map();
	this.img1.ChangeForward(0);
	this.img2.ChangeForward(0);
	this.back = new Background();
	this.setLevel= new setLevel(0);
//	this.monster = new Monster();
	this.level=0;
	this.x = 50;
	this.y = 500;
	this.state = 0;
	this.temp=0;
	this.count = 0;
	this.position = 0;
	//player가 보는방향
	this.dropY = 0;
	//떨어지는 y좌표
	this.gravity = 7;
	//중력
	this.isJumping = true;
	//점프상태 초기화
	this.isDrop = true;
	//떨어지는 상태 초기화
	this.dropPower = 0;
	this.jumpPower = 0;
	//점프높이

	this.crashBox = {
		left : this.x,
		top : this.y,
		right : this.x + 40,
		bottom : this.y + 40
	};
	this.Invalid();

}

Player.prototype.Render = function() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	if (inputSystem.isKeyDown(39) || inputSystem.isKeyDown(37)) {
		this.count++;
	}
	if (this.count % 20 < 10) {
		this.img1.Render(Context);
	} else
		this.img2.Render(Context);
};
Player.prototype.Update = function(crashCheckBox, playerMonsCheckBox) {


	if(this.x>=800 && this.y<=40){
		setLevel(++this.level);
		this.x=40;
		this.y=450;
		if(getLevel()==3){
			this.x=80;
			this.y=0;
		}
		this.Invalid();
	}
	if(this.x<=-30 && this.y<=120){
		setLevel(++this.level);
		this.x=0;
		this.y=0;
		this.Invalid();
	}
	if(this.x>=750 && this.y>=600)
	{
	    this.x=-1000;
	    this.y=700;
	    this.Invalid();
		setLevel(++this.level);

	}	
	if (inputSystem.isKeyDown(39)) {
		if (crashCheckBox.right == false) {
			this.x += 5;
			this.img1.ChangeForward(0);
			this.img2.ChangeForward(0);
			this.Invalid();
		} else {
			if (this.isJumping == false) {
				this.x = this.x;
				crashCheckBox.left = false;
			} else {
				if (crashCheckBox.bottom == true) {
					this.x = this.x;
				} else {
					this.x += 5;
					this.img1.ChangeForward(0);
					this.img2.ChangeForward(0);
					this.Invalid();
				}
			}
		}
	}
	if (inputSystem.isKeyDown(37)) {
		if (crashCheckBox.left == false) {
			this.x -= 5;
			this.img1.ChangeForward(1);
			this.img2.ChangeForward(1);
			this.Invalid();
		} else {
			if (this.isJumping == false) {
				this.x = this.x;
				crashCheckBox.left = false;
			} else {
				if (crashCheckBox.bottom == true) {
					this.x = this.x;
				} else {
					this.x -= 5;
					this.img1.ChangeForward(1);
					this.img2.ChangeForward(1);
					this.Invalid();
				}
			}
		}
	}
	if (this.isJumping == false) {
		if (inputSystem.isKeyDown(38)) {
			this.isJumping = true;
			this.jumpPower = -25;
		}
	} else {
		this.y += this.jumpPower;
		this.jumpPower += 2;
		if (this.jumpPower > 0){
			if (crashCheckBox.bottom == true) {
				this.y = this.y - this.gravity;
				this.isJumping = false;
			}
		}else
			crashCheckBox.bottom=false;
		this.Invalid();
	}
	
	if (this.isDrop == false) {
		if (this.isJumping == false && this.y < 500 && inputSystem.isKeyDown(40)) {
			this.isDrop = true;
			this.dropPower = -10;
		}
	} else {
		if (this.dropPower < 0) {
			this.y += this.dropPower;
			this.dropPower += 1.5;
			crashCheckBox.bottom = false;
		} else if (this.dropPower < 15) {
			crashCheckBox.bottom = false;
			this.dropPower += this.gravity;
			this.y += this.dropPower;
		} else if (crashCheckBox.bottom == true)
			this.isDrop = false;
		this.Invalid();
	}
	if ((playerMonsCheckBox.right == true || playerMonsCheckBox.bottom == true || crashCheckBox.top == true) && getMonsKind()!=4) {
		
		playerMonsCheckBox.right = false;
		playerMonsCheckBox.bottom = false;
		crashCheckBox.top = false;
		setLeverCount(0);
		if(getLevel()==0){
			this.x = 40;
			this.y = 400;
		}
		if(getLevel()==1){
			this.x = 50;
			this.y = 450;
		}
		if(getLevel()==2){
			this.x = 0;
			this.y = 0;			
		}
		if(getLevel()==3){
			this.x=80;
			this.y=0;
		}						
		this.isJumping=true;
		this.Invalid();
	}else if(getMonsKind()==4){
		this.temp==1;		
	}
	if (crashCheckBox.bottom == true) {
		crashCheckBox.bottom = false;
		this.gravity = 0;
		this.y = this.y - crashCheckBox.h + 2;
	} else {
		this.gravity = 8;

	}

	this.y = this.y + this.gravity;


	if (this.x > 760 && this.y>50)
		this.x = 760;
	if(this.x<0 && this.y>50)
		this.x=0;
	this.Invalid();
	if(getLevel()==2){
		if(this.x<0){
			this.x=0;
		}
	}
	//	console.log(this.x + "  " + this.y);
};

Player.prototype.Invalid = function() {
	this.img1.SetPosition(this.x, this.y);
	this.img2.SetPosition(this.x, this.y);	
	this.crashBox = {
		left : this.x,
		top : this.y,
		right : this.x + 40,
		bottom : this.y + 40
	};
};
