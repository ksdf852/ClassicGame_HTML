window.addEventListener("load", onPageLoadComplete, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
var temp_text_x = 400;
var temp_text_y = 300;
var game_state;
var after_loading_state;
function onPageLoadComplete()
{
	var FPS = 30;
	setInterval(gameLoop, 1000/FPS);
	game_state = new LoadingState();
}
function onMouseDown(e)
{
	if(game_state.onMouseDown != undefined)
		game_state.onMouseDown(e);
}
function onMouseUp(e)
{
	if(game_state.onMouseUp != undefined)
		game_state.onMouseUp(e);
}
function ChangeGameState(nextGameState)
{
	if(nextGameState.Update == undefined)
		return ;
	if(nextGameState.Render == undefined)
		return ;
/*	if(nextGameState.Init == undefined)
		return ;
*/		
	game_state = nextGameState;
//	game_state.Init();
}

function MainSoundSystem()
{
	//soundSystem.PlaySound("노래.mp3");
}
function Update()
{
	temp_text_x = inputSystem.getMousePositionX();
	temp_text_y = inputSystem.getMousePositionY();
	game_state.Update();
/*	if(inputSystem.isKeyDown(37))
	{
		temp_text_x -=5;
	}
	if(inputSystem.isKeyDown(39))
	{
		temp_text_x +=5;
	}
	if(inputSystem.isKeyDown(38))
	{
		temp_text_y -=5;
	}
	if(inputSystem.isKeyDown(40))
	{
		temp_text_y +=5;
	}	
	*/
}
function Render()
{
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#000000";
	Context.fillRect(0,0,1280,650);
	
	Context.fillStyle = "#ffffff";
	Context.font = '15px Arial';
	Context.textBaseline = "top";
	game_state.Render();
	Context.fillText("fps : "+frameCounter.Lastfps,10,10);
	
}
function gameLoop()
{
	Update();
	Render();
	frameCounter.countFrame();
}
