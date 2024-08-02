//your parameter variables go here!
//size of the halfcircles
let criclewidth = 150;
let circleheight = 150;
//size of the rect
let rectwidth = 300
let rectheight = 50
//position of the halfcircles
let halfcriclex = 75;
let halfcricley = 75;
//position of the bottom point of the triangle
let trianglex = 150;
let triangley = 300;
//size of the center of the ribbon
let ribboncenter = 25
//the number controlling whether the background is showing
let mX = 1
//size of the background circles
let backcircle = 50
//stroke weight
let sW = 2


function setup_wallpaper(pWallpaper) {
  angleMode(DEGREES);
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 50;
}


function wallpaper_background() {
  background(255,222,235); //light pink colour
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function
    if(mX > 0) {
    fill(252,195,218);
    noStroke();
    circle(50,50,backcircle);
    circle(150,50,backcircle);
    circle(250,50,backcircle);
    circle(50,150,backcircle);
    circle(150,150,backcircle);
    circle(250,150,backcircle);
    circle(50,250,backcircle);
    circle(150,250,backcircle);
    circle(250,250,backcircle);



  }
  drawHeart();
  drawRibbon();

  
}

function drawRibbon( ) {

  strokeWeight(sW);
  stroke(255,164,200);
  
  fill(255,217,184);
  triangle(150,110,60,100,90,200);
  triangle(150,110,240,100,210,200);
  triangle(150,110,100,210,145,225);
  triangle(150,100,190,210,155,225);

  fill(255,250,205);
  circle(150,110,ribboncenter);


}

function drawHeart( ) {
  stroke(255,164,200);
  fill(255,182,192,127);
  strokeWeight(sW);
  arc(halfcriclex, halfcricley, criclewidth, circleheight, 180, 0);
  arc(halfcriclex+150, halfcricley, criclewidth, circleheight, 180, 0);

  noStroke();
  fill(255,182,192,127);
  rect(halfcriclex-75, halfcricley, rectwidth, rectheight);
  triangle(trianglex-150, triangley-175, trianglex, triangley, trianglex+150, triangley-175);

  strokeWeight(sW);
  stroke(255,164,200);
  fill(255,182,192,127);
  line(halfcriclex-75, halfcricley, trianglex-150, triangley-175);
  line(halfcriclex+225, halfcricley, trianglex+150, triangley-175);
  line(trianglex-150, triangley-175, trianglex, triangley);
  line(trianglex+150, triangley-175, trianglex, triangley);

}

