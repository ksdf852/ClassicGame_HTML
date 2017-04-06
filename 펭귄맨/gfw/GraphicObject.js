function GraphicObject(img) {
   this.x = 0;
   this.y = 0;
   this.img = img;
   
   this.forward=1;
   return this;
}

/*
 function GraphicObject(img,SWidth,SHeight, width,height)
 {
 this.x = 0;
 this.y = 0;
 this.SWidth = SWidth;
 this.SHeight = SHeight;
 this.width = width;
 this.height = height;
 this.img = img;
 return this;
 }
 */
GraphicObject.prototype.ChangeForward = function(forward)
{
   this.forward=forward;
};
GraphicObject.prototype.Render = function(context) {
   
   if (this.forward) {
      context.drawImage(this.img, this.x, this.y);
   } else {
      context.save();
      context.translate(40+ this.x * 2, 0);

      context.scale(-1, 1);
      context.drawImage(this.img, this.x, this.y);
      context.restore();
   }

};
GraphicObject.prototype.Translate = function(x, y) {
   this.x += x;
   this.y += y;
};
GraphicObject.prototype.SetPosition = function(x, y) {
   this.x = x;
   this.y = y;
};
GraphicObject.prototype.Update = function() {
};