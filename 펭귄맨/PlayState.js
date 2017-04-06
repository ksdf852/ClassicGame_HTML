var playState;
function PlayState() {
	playState = this;
	this.player = new Player();
	this._level = getLevel();
	this.ad = new Map();
	this._temp=0;
	this.monster = new Array();
	this.i = 0;
	if (getLevel() == 0) {
		this.monster[1] = new Monster(300, 0, 2);
		this.monster[2] = new Monster(200, 100, 1);
		this.monster[3] = new Monster(400, 200, 3);
		this.monster[4] = new Monster(200, 330, 1);
		this.monster[0] = new Monster(1000,1000, 4);		
	}/*
	else if (getLevel() == 1) {
		this.monster[0] = new Monster(300, 0, 2);
		this.monster[1] = new Monster(200, 100, 1);
		this.monster[2] = new Monster(400, 200, 2);
		this.monster[3] = new Monster(200, 330, 1);
	}
	else if (getLevel() == 2) {
		this.monster[0] = new Monster(300, 0, 2);
		this.monster[1] = new Monster(200, 100, 1);
		this.monster[2] = new Monster(400, 200, 2);
		this.monster[3] = new Monster(200, 330, 1);
	}
	else if (getLevel() == 3) {
		this.monster[0] = new Monster(300, 0, 2);
		this.monster[1] = new Monster(200, 100, 1);
		this.monster[2] = new Monster(400, 200, 2);
		this.monster[3] = new Monster(200, 330, 1);
	} */
	//   this.monster[4] = new Monster(500, 500);*/
	return this;
}

PlayState.prototype.Render = function() {
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	//  this.back.Render();
	this.ad.Render();
	this.player.Render();
	
	this.monster[0].Render();
	this.monster[1].Render();
	this.monster[2].Render();
	this.monster[3].Render();
	this.monster[4].Render();	
	//   this.monster[4].Render();*/
};
PlayState.prototype.Update = function() {
	//	for(this.i=0;this.i<4;this.i++){
	if(getLevel()==1 && this._temp==0){
		this.monster[0].x=1000;
		this.monster[0].y=1000;		
		this.monster[2].x=1000;
		this.monster[2].y=1000;
		this.monster[3].x=1000;
		this.monster[3].y=1000;	
		this.monster[4].x=1000;
		this.monster[4].y=1000;
		this._temp=1;
		this._level=getLevel();
		this.monster[0].Invalid();
		this.monster[2].Invalid();
		this.monster[3].Invalid();
		this.monster[4].Invalid();
	}
	if(getLevel()==2 && this._temp==0){		
		this.monster[0].x=400;
		this.monster[0].y=522;				
		this._temp=1;
		this._level=getLevel();
		this.monster[0].Invalid();																	
	}
	if(getLevel()==3 && this._temp==0){
		console.log("111");
		this.monster[0].x=1000;
		this.monster[0].y=1000;
		this.monster[1].x=1000;
		this.monster[1].y=1000;
		this.monster[2].x=1000;
		this.monster[2].y=1000;
		this.monster[3].x=1000;
		this.monster[3].y=1000;
		this._temp=1;
		this._level=getLevel();
		this.monster[0].Invalid();
		this.monster[1].Invalid();
		this.monster[2].Invalid();
		this.monster[3].Invalid();						
	}			
	if(getLevel()==this._level+1)
		this._temp=0;

	this.player.Update(this.ad.CrashCheck(), this.monster[this.i].PlayerMonsCheck(this.i));
	// }
	for (this.count = 0; this.count < 5; this.count++)
		this.monster[this.count].Update(this.ad.MonsCheck(this.count), this.monster[this.i].PlayerMonsCheck(this.i));
	this.i++;
	if (this.i == 5)
		this.i = 0;
};
PlayState.prototype.GetPlayerBox = function() {
	return this.player.crashBox;
};
PlayState.prototype.GetMonsterBox = function(i) {
	//	console.log(i);
	return this.monster[i].crashBox;
};
