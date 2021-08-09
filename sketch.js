function preload(){
  roomImg = loadImage("assets/room.jpg")
  appleImg = loadImage("assets/apple.png")
  bookImg = loadImage("assets/book.png")
  guitarImg = loadImage("assets/guitar.png")
  headphonesImg = loadImage("assets/headphones.png")
  laptopImg = loadImage("assets/laptop.png")
  nameTagImg = loadImage("assets/nameTag.png")
  remoteControllerImg = loadImage("assets/remoteController.png")
  walletImg = loadImage("assets/wallet.png")
  folderImg = loadImage("assets/folder.png")
  playerImg = loadImage("assets/player.png")
}

function setup() {
  createCanvas(displayWidth-15,displayHeight-125);


  laptop = createSprite(30,height-60,10,10)
  laptop.addImage(laptopImg)
  laptop.scale = 0.2

  headphones = createSprite(width-50,200,10,10)
  headphones.addImage(headphonesImg)
  headphones.scale = 0.25

  book = createSprite(width/2+380,height-180,10,10)
  book.addImage(bookImg)
  book.scale = 0.4

  folder = createSprite(width/2+230,height-100,10,10)
  folder.addImage(folderImg)
  folder.scale = 0.4

  wallet = createSprite(width/2-70,height/2+120,10,10)
  wallet.addImage(walletImg)
  wallet.scale = 0.25

  remoteController = createSprite(300,height/2+150,10,10)
  remoteController.addImage(remoteControllerImg)
  remoteController.scale = 0.25

  guitar = createSprite(width-170,height/2+160,10,10)
  guitar.addImage(guitarImg)
  guitar.scale = 0.25

  nameTag = createSprite(width/2+110,height/2+120,10,10)
  nameTag.addImage(nameTagImg)
  nameTag.scale = 0.25

  apple = createSprite(250,height/2-25,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.06

  player = createSprite(width/2,height/2+110,10,10)
  player.addImage(playerImg)
  player.scale = 0.4
}


function draw() {
  background(roomImg);  
  drawSprites();
}