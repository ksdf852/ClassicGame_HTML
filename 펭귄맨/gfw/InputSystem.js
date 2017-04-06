window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);


function InputSystem()
{
	this.mouseX=0;
	this.mouseY=0;
	this.mouseClick = false;
	this.mouseButton =-1;
	this.isKeyPressed = [];
	return this;
}
InputSystem.prototype.isKeyDown = function(keyCode)
{
	if(this.isKeyPressed[keyCode] == true)
		return true;
	
	else
		return false;
};
InputSystem.prototype.getMousePositionX = function()
{
	return this.mouseX;
};
InputSystem.prototype.getMousePositionY = function()
{
	return this.mouseY;
};
InputSystem.prototype.getMouseButton = function()
{
	return this.mouseButton;
};
InputSystem.prototype.getMouseClick = function()
{
	return this.mouseClick;
};
function onMouseMove(e)
{
	var theCanvas = document.getElementById("GameCanvas");
	inputSystem.mouseX = e.clientX/* - theCanvas.offsetLeft*/;
	inputSystem.mouseY = e.clientY/* - theCanvas.offsetTop*/;
	inputSystem.mouseClick = true;
	inputSystem.mouseButton = e.button;
}
function onKeyDown(e)
{
	inputSystem.isKeyPressed[e.keyCode] = true;
}
function onKeyUp(e)
{
	inputSystem.isKeyPressed[e.keyCode] = false;
}
var inputSystem = new InputSystem();
