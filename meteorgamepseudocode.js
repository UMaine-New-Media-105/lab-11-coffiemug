/*
pseudo code outline

- class for meteors
  - will need to use a forloop to push new meteors into an array 
  class Meteor(x,y, speed){
  constructor{
  this.x=x
  etc
  }
  show{
  push()
  maybe use a polygon with a random number of points wihtin a range like random(5,12) 
  and specify a starting size of random maybe 20-30, whatever the biggest size range of meteors should be
  pop()
  }
  move{
  - randomized x and y speed within a range
  this.x=this.x+meteorSpeedX
  this.y= ...
  - what happens when they go off screen? maybe the bounce back range could be set to somethting slightly beyong the canvas size so tthey appear tto float all through space wherever but actually eventually float back 
  }
  }
- class for spaceship
  constructor{
  this.x=x
  this.y=y
  this.flyspeed=flyspeed
  }
  show{
  push()
  triangle starting in the centter of canvas and responding to key pressed function
  pop()
  }
  move{
  key pressed function called
  }

- function keyPressed{
  if(LEFT_ARRROW){
  //need to rotate ship counterclockwise
  }
  else if(RIGHT_ARROW){
  //rotate clockwise
  //not sure exactly how to rotate it honestly
  }
  if(UP_ARROW){
  //x or y position needs to continue in the direction that the ship is pointing
  also not sure how to accomplish that, unless you just use a lot of complicated if statements with booleans that indicate what direction the ship is facing
  }
  if(SPACEBAR){
  //shoot laser
  // draw new bullet at spaceship.x,spaceship.y (+ or - adjustments to keep it centered)
}
}
- could create a class for bullets
  need to appear and move when spacebar is pressed

- collision detection between bullets and meteors
 - if a meteor is hit, the sprite needs to be replaced with a smaller, randomized polygon from the meteor class
 - if the meteor is hit && it's below a certain size, maybe 5, then it needs to be spliced from the array as before but not replaced
 
 
SUGGESTIONS
- i really like the aesthettic choices for the most part
    - some simple stars would be nice
    - colorful laser shot 
  - some design choices that could help the gameplay as well:
    - slightly more descript spaceship sprite so you can tell easier which direction you're facing
    - larger laser bullets to make it less difficult to hit the really tiny meteors
  - I also think tthe movement of the spaceship could run a little smoother, there's an acceleration period which I think is good tot have but could be adjusted to make it feel more natural and less slidey 
    
*/
