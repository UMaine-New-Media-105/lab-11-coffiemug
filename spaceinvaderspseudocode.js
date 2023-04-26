/*
pseudo code outline for space invaders


- create a class for your Spaceship
  class Spaceship(x,y,speed){
  constructor{
  tihs.x=x
  this.y=y
  this.speed=speed
  }
  //show and move for the spaceship
  show{
  push();
  rect starting x width/2, height-SpaceshipHeight
  pop()
  }
  move{
  call key pressed function 
  }
  }
  
- create a class for invaders
  class Invaders(x,y,speed){
  constructor{
  this.x=x
  this.y=y
  this.speed=speed
  }
  show{
  push();
  rect at random(width), -this.invaderHeight
  pop();
  }
  //need to drop from the sky
  move{
  this.y=this.y+this.speed
  }
  }



- key pressed function for arrow keys and space bar
  - if(LEFT_ARROW){Spaceship x=Spaceship x-Spaceship speed}
  else if(RIGHT_ARROW){Spaceship x=Spaceship x+Spaceship speed}
  if(SPACE_BAR){
  //first, if title screen is showing, maybe if something like gameIsRunning is set to false, then the spacebar starts the game
  //then, if gameIsRunning is true and the spacebar is pressed, it shoots a bullet from your spacship
    rect(Spaceship x, spaceship y, very small like 2 or 3 maybe)
    make bullet y position decrease by a shotSpeed variable to move up the screen after shooting
  }
  
  //need collision detection for a lot of things
- collision detection between spaceship and invader using crashDist=dist(spaceship.x, spaceship.y, invaders.x, invaders.y)
- collision detection between bullets and invaders using killshotDist=dist(bullet.x,bullet.y, invaders.x, invaders.y)
  -  if(crashDist < spaceshipWidth){
    remove one of 3 hearts in the health bar
    splice from array of health bar hearts?
  }
  - if(killshotDist<invaderHeight){
  //invader dies
  splice from invaders class array 
  Invaders.splice[i]
  }
  
SUGGESTIONS
 - the invaders move way too fast and the spaceship moves far too slow tto be able to hit them in time so the game is nearly impossible so adjusting those speed variables would benefit gameplay
 - the shooting seems off, is there a delay between when you shoot and the possibility of it hitting the invader? if you shoot when it's too close to you thte shott goes right through 
 - losing hearts for getting hit and letting invaders through is tough, maybe have more heartts or even two different sort of counters for the two different situations
 - cosmetically you could aadd a lot here
   - stars
   - more colors
   - a longer or more colorful laser although i do like thtat it flashess red and white. random laser colors and invader colors would be fun
*/
