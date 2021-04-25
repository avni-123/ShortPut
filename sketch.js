const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var engine, world;

var ground;

var man;

var robot;

var r2, r3, r4, r5, r6, r7, r8, r9, r10;

var r11, r12, r13, r14, r15, r16, r17, r18, r19, r20;

var r21, r22, r23, r24, r25, r26, r27, r28, r29, r30;

var ball;

var slingShot;

function setup(){

  createCanvas(1535, 750);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(780, 445, 1600, 1200);

  man = new Man(280, 370, 300, 300);

  robot = new Robot(900, 465, 50, 50);

  r2 = new Robot(950, 465, 50, 50);

  r3 = new Robot(1000, 465, 50, 50);

  r4 = new Robot(850, 465, 50, 50);

  r5 = new Robot(800, 465, 50, 50);

  r6 = new Robot(1050, 465, 50, 50);

  r7 = new Robot(1100, 465, 50, 50);

  r8 = new Robot(923, 425, 50, 50);

  r9 = new Robot(823, 425, 50, 50);

  r10 = new Robot(872, 425, 50, 50);

  r11 = new Robot(972, 425, 50, 50);

  r12 = new Robot(1022, 425, 50, 50);

  r13 = new Robot(1072, 425, 50, 50);

  r14 = new Robot(845, 385, 50, 50);

  r15 = new Robot(1045, 385, 50, 50);

  r16 = new Robot(945, 385, 50, 50);

  r17 = new Robot(995, 385, 50, 50);

  r18 = new Robot(895, 385, 50, 50);

  r19 = new Robot(870, 345, 50, 50);

  r20 = new Robot(970, 345, 50, 50);

  r21 = new Robot(920, 345, 50, 50);

  r22 = new Robot(1020, 345, 50, 50);

  r23 = new Robot(897, 305, 50, 50);

  r24 = new Robot(997, 305, 50, 50);

  r25 = new Robot(946, 305, 50, 50);

  r26 = new Robot(920, 265, 50, 50);

  r27 = new Robot(970, 265, 50, 50);

  r28 = new Robot(945, 230, 50, 50);

  ball = new Ball(210, 330, 60, 60);

  slingShot = new SlingShot(ball.body, {x : 240, y : 360});

}

function draw(){

  background(0);

  ground.display();

  man.display();

  robot.display();

  r2.display();

  r3.display();

  r4.display();

  r5.display();

  r6.display();

  r7.display();

  r8.display();

  r9.display();

  r10.display();

  r11.display();

  r12.display();

  r13.display();

  r14.display();

  r15.display();

  r16.display();

  r17.display();

  r18.display();

  r19.display();

  r20.display();

  r21.display();

  r22.display();

  r23.display();

  r24.display();

  r25.display();

  r26.display();

  r27.display();

  r28.display();

  ball.display();

  slingShot.display();

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY});

}

function mouseReleased(){

  ball.fly();

}
