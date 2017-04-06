function onGameInit()
{
	document.title = "시작";
	GAME_FPS = 30;
	var IS = new ImgSoundAdd();
	after_loading_state = new TitleState();
	setInterval(gameLoop, 1000/GAME_FPS);
}
function ImgSoundAdd()
{
	resourcePreLoader.AddImage("img/벽돌1.png");
	resourcePreLoader.AddImage("img/벽돌2.png");
	resourcePreLoader.AddImage("img/벽돌3.png");	
	resourcePreLoader.AddImage("img/벽돌4.png");
	resourcePreLoader.AddImage("img/lever.png");
	resourcePreLoader.AddImage("img/intro1.png");
	resourcePreLoader.AddImage("img/intro2.png");
	resourcePreLoader.AddImage("img/ending.png");			
	resourcePreLoader.AddImage("img/play.png");
	resourcePreLoader.AddImage("img/불꽃.png");
	resourcePreLoader.AddImage("img/불꽃2.png");
	resourcePreLoader.AddImage("img/불꽃3.png");
	resourcePreLoader.AddImage("img/불꽃4.png");					
	resourcePreLoader.AddImage("img/가시.png");
	resourcePreLoader.AddImage("img/가시2.png");
	resourcePreLoader.AddImage("img/가시4.png");			
	resourcePreLoader.AddImage("img/펭귄1.png");
	resourcePreLoader.AddImage("img/펭귄2.png");
	resourcePreLoader.AddImage("img/몬스터.png");
	resourcePreLoader.AddImage("img/몬스터2.png");
	resourcePreLoader.AddImage("img/타이틀.png");
	resourcePreLoader.AddImage("img/배경1.png");
	resourcePreLoader.AddImage("img/배경2.png");	
	resourcePreLoader.AddImage("img/배경3.png");
	resourcePreLoader.AddImage("img/배경4.png");			
}
window.addEventListener("load",onGameInit, false);
