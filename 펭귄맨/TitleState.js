function TitleState()
{
	this.imgBackground =resourcePreLoader.GetImage("img/타이틀.png");	
	this.imgPlay= resourcePreLoader.GetImage("img/play.png");		
	this.flagButtonStrat = false;
	this.flagButtonPlay=false;
	this.flagButtonRanking = false;
	this.flagButtonExit = false;
	this.state=0;
	this.temp=0;
	this.x=0;
	this.y=0;
	this.i=0;
	this.j=0;
	this.k=0;
	return this;
}
TitleState.prototype.Render = function()
{
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	
	if(this.state==0)
		Context.drawImage(this.imgBackground,0,0);

	if(this.state==1){
		Context.drawImage(this.imgBackground,this.i,130);

		if(this.j<=60)
			this.j++;		
		if(this.i>-265 && this.j>=60)
			this.i=this.i-2;
		if(this.i<-265){
			if(this.k<100)
				this.k++;
			else{
				this.j=0;
				this.i=0;
				this.state=2;	
			}
		}		
	}
	if(this.state==2 && this.temp==0){
		this.imgBackground= resourcePreLoader.GetImage("img/intro2.png");		
		this.temp=1;
	}	
	if(this.state==2){
//		console.log(this.i);		
		Context.drawImage(this.imgBackground,this.i,50);
		if(this.j<=60)
			this.j++;		
		if(this.i>-215 && this.j>=60)
			this.i=this.i-1;
		if(this.i==-215)
			Context.drawImage(this.imgPlay,745,545);			
	}
	
			
//	Context.drawImage(this.imgIntro,0,0);
};
TitleState.prototype.Update = function()
{
	if(inputSystem.mouseX>=335 && inputSystem.mouseY>=335 && inputSystem.mouseX <=540 && inputSystem.mouseY <=375){
		if(this.flagButtonStart==false){
			this.flagButtonStart=true;
		}
	}else{
		this.flagButtonStart=false;	
	}		
	if(inputSystem.mouseX>=770 && inputSystem.mouseY>=570 && inputSystem.mouseX <=820 && inputSystem.mouseY <=620){
		if(this.flagButtonPlay==false){
			this.flagButtonPlay=true;
		}
	}else{
		this.flagButtonPlay=false;	
	}
	console.log(inputSystem.mouseX+"  "+inputSystem.mouseY);
};

TitleState.prototype.onMouseDown=function()
{
	
	if(this.flagButtonStart){
		if(this.state==0){
			this.state=1;
			this.imgBackground= resourcePreLoader.GetImage("img/intro1.png");
		}
//		ChangeGameState(new PlayState());
	}
	if(this.flagButtonPlay){

		ChangeGameState(new PlayState());
	}	
};

TitleState.prototype.Invalid = function() {
	this.imgIntro.SetPosition(this.x, this.y);
};