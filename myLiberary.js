function CreateAny(b3,b4){
    if (b3.x - b4.x < b4.width/2 + b3.width/2
      && b4.x - b3.x < b4.width/2 + b3.width/2) {
    b3.velocityX = b3.velocityX * (-1);
    b4.velocityX = b4.velocityX * (-1);
  }
  if (b3.y - b4.y < b4.height/2 + b3.height/2
    && b4.y - b3.y < b4.height/2 + b3.height/2){
    b3.velocityY = b3.velocityY * (-1);
    b4.velocityY = fixedRect.velocityY * (-1);
  }
}