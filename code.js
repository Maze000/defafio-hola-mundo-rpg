function cargado(){
    var cambio1=true;
    document.addEventListener("visibilitychange", function() {
        if(document.hidden){
            if(verdadero){
                cambio1=false;
                clearTimeout(prima1);
                clearTimeout(pausa);
            } 
        }
        else{
            if(verdadero){
                frame();
                ctx.clearRect(0,30,canvas.width,canvas.height);
                cambio1=true;
                prima1=setInterval(prima, 1200);
            }
        }   
    });

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var canvasWidth = 650; 
var canvasHeight = 350;

canvas.width = canvasWidth;
canvas.height = canvasHeight;
 
//botons
              

var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");

//humans

var humans = 0;

//time

var ventana;
var seg=59;

//pause

var pausa;

//cambio cursor

var imagenCh="url('./img/combo1.png'), auto";

//timers

var verdadero;
var enemi1; 
var timeAN;
var reloj;

//random

var porIni;

//fullscreen

var cambioFull=(window.innerHeight/350)*140;
var verificaFull=true;
var full= document.getElementById("modal3");

//animation

var activarAN=true;

//audio

var audio1=true;

//sound efect

var boom = document.createElement("audio");
boom.src = "./sound/mb.mp3";
var cbr = document.createElement("audio");
cbr.src = "./sound/cbr.mp3";
var ex = document.createElement("audio");
ex.src = "./sound/explosion.mp3";
var re = document.createElement("audio");
re.src = "./sound/ready.mp3";
var est = document.createElement("audio");
est.src = "./sound/estrella.mp3";
var cam = document.createElement("audio");
cam.src = "./sound/cam.mp3";
var gas = document.createElement("audio");
gas.src = "./sound/gas.mp3";
var saitamaWin = document.createElement("audio");
saitamaWin.src = "./sound/saitamaWin.mp3";
var fuegos = document.createElement("audio");
fuegos.src = "./sound/fuegos.mp3";
var grito = document.createElement("audio");
grito.src = "./sound/grito.mp3";
grito.volume=.5;
var go = document.createElement("audio");
go.src = "./sound/gameover.mp3";
var boom3 = document.createElement("audio");
boom3.src = "./sound/risa.mp3";
var toastyA = document.createElement("audio");
toastyA.src = "./sound/toasty.mp3";
var ali = document.createElement("audio");
ali.src = "./sound/alien.mp3";
var moneda = document.createElement("audio");
moneda.src = "./sound/moneda.mp3";

//modal windows

var modal = document.getElementById("modal");
var modal2 = document.getElementById("modal2");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal7 = document.getElementById("modal7");


//music
var boom2 = document.createElement("audio");
boom2.src = "./music/dub.mp3";
boom2.volume=.1;
var dub2 = document.createElement("audio");
dub2.src = "./music/dub2.mp3";
dub2.volume=.1;
var dub3 = document.createElement("audio");
dub3.src = "./music/dub3.mp3";
dub3.volume=.1;
var music=[boom2,dub2,dub3];
var contM=0



ctx.font = "15px Segoe Script";
ctx.fillStyle = "#00FFFF";
                
               
//character animation
                
var spriteWidth = 1946; 
var spriteHeight = 280; 
var rows = 1; 
var cols = 18;
var width = spriteWidth/cols;//108 
var height = spriteHeight/rows;//140 
var curFrame = 108;
var frameCount = 18; 
var srcX=0;
var srcY=0;
var  numX2;
var  numY2;
                
//images 
var barra1 = {                                                                                            
            img : document.createElement("img")                                                                                          
                            };
barra1.img.src = "./img/barra7.png";
var barra2 = {                                                                                            
            img : document.createElement("img")                                                                                          
                            };
barra2.img.src = "./img/barra8.png";
var barra3 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };
barra3.img.src = "./img/barra9.png";
var enemy1 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };
enemy1.img.src = "./img/enemy1.png";
var enemy2 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };
enemy2.img.src = "./img/enemy2.png";
var combo1 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };
combo1.img.src = "./img/combo1.png";
var toasty = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };
toasty.img.src = "./img/toasty.png";
var character = {  

            img : document.createElement("img")                                                                                          
                                };                                                                                 
character.img.src = "./img/character.png"; 
var characterE = {  

            img : document.createElement("img")                                                                                          
                                };                                                                                 
characterE.img.src = "./img/characterE.png";

var e2 = {  
            img : document.createElement("img")                                                                                          
                                };                                                                                 
e2.img.src = "./img/e2.png";
var e2E = {  

            img : document.createElement("img")                                                                                          
                                };                                                                                 
e2E.img.src = "./img/e2E.png";
var e3 = {  

            img : document.createElement("img")                                                                                          
                                };                                                                                 
e3.img.src = "./img/e3.png";
var e3E = {  

            img : document.createElement("img")                                                                                          
                                };                                                                                 
e3E.img.src = "./img/e3E.png";
var character2 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
character2.img.src = "./img/character2.png"; 
var p1 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p1.img.src = "./img/p1.png";
var p2 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p2.img.src = "./img/p2.png";
var p4 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p4.img.src = "./img/p4.png";
var p5 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p5.img.src = "./img/p5.png";
var p6 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p6.img.src = "./img/p6.png";

var p7 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p7.img.src = "./img/p7.png";
var p8 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p8.img.src = "./img/p8.png";
var p9 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p9.img.src = "./img/p9.png";
var p10 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p10.img.src = "./img/p10.png";
var p11 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p11.img.src = "./img/p11.png";
var p12= {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p12.img.src = "./img/p12.png";
var p13 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p13.img.src = "./img/p13.png";
var p14 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p14.img.src = "./img/p14.png";
var p15 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p15.img.src = "./img/p15.png";
var p16 = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
p16.img.src = "./img/p16.png";
var red = {                                                                                            
            img : document.createElement("img")                                                                                          
                                };                                                                                 
red.img.src = "./img/readyI.png";


 //visibility modal           

modal2.style.display = "none";
modal4.style.display = "none";
modal5.style.display = "none";
modal7.style.display = "none";


//background

var backgame=['url("./img/g3.gif")','url("./img/b8.gif")','url("./img/b7.gif")'];
var level=['url("./img/level1N.png")','url("./img/level2N.png")','url("./img/level3N.png")'];
//modal function 

boton.addEventListener("click", intro00);


                function intro00(){
                    cam.play();
                    document.getElementById("body1").style.backgroundImage='url("./img/nwoB.png")';
                    modal2.style.display = "none";
                    modal.style.display = "none";
                    modal5.style.display = "none";
                    
                    modal7.style.display = "initial";
                    loading=setTimeout(intro0,5000);
                }

                function intro0(){
                    modal2.style.display = "none";
                    modal.style.display = "none";
                    modal5.style.display = "initial";
                    
                    modal7.style.display = "none";
                    loading=setTimeout(intro,8000);
                }

                function intro(){
                    modal5.style.display = "none";//loading
                    
                    modal4.style.display = "initial";//intro
                    modal2.style.display = "none";
                    modal.style.display = "none";
                }

                boton3.addEventListener("click", vsus1);

                function vsus1(){
                    document.getElementsByTagName("body")[0].style.cursor = "default";
                    moneda.play();
                    modal4.style.display = "none";//intro
                    full.style.display = "none";
                    canvas.style.backgroundImage = 'url("./img/level1N.png")';
                    setTimeout(iniciarJuegoR,4000);
                }

                function iniciarJuegoR(){
                    canvas.style.backgroundImage = backgame[contEnemy];
                    ctx.drawImage(red.img,150,100);
                    modal4.style.display = "none";
                    modal5.style.display = "none";
                    re1(re);
                    setTimeout(iniciarJuegoR2,1000);
                }

                function iniciarJuegoR2(){
                    ctx.clearRect(0,30,650,350);
                    setTimeout(iniciarJuego,100);
                }

// sound function                
                
               
                
                function cbr1(){
                    cbr.play();
                    cbr.volume=1;
                }

                function explosion(){
                    ex.play();
                    ex.volume=.5;
                }

                function re1(){
                    re.play();
                    re.volume=1;
                }

                function to1(){
                    toastyA.play();
                    toastyA.volume=.5;
                }

                function est1(){
                    est.play();
                    est.volume=.1;
                }

                function ali1(){
                    ali.play();
                    ali.volume=1;
                }
               
                var aumento=101.1;
                var aumento2=0;
                var aumento3=101.1;

                function dibujarInfo(){
                    ctx.drawImage(barra1.img,88.6,11.25,aumento, 8.45);
                    ctx.drawImage(barra2.img,0,0);
                    ctx.drawImage(barra3.img,88.6,21.15,aumento2, 8.45);
                    ctx.drawImage(enemy1.img,433,0);
                    ctx.drawImage(enemy2.img,433,11.25,aumento3, 8.45);
                    if(seg<10){
                        ctx.fillText("Time"+" "+"0"+":"+"0"+ seg,canvas.width/2-35,20);
                     }
                    else{                                                                                  
                        ctx.fillText("Time"+" "+"0"+":"+ seg,canvas.width/2-35,20);    
                     }
                    ctx.fillStyle = "#00FFFF"; 
                    ctx.fillText(humans, 195.25, 30);
                }

                function tiempo(){  
                    if(verdadero){    
                        if(seg<=0){
                            clearTimeout(timeAN);
                            boom3.play();
                            verdadero=false;
                            ctx.clearRect(0,0,canvas.width,canvas.height);
                            setTimeout(ventanaFinal,3000);
                            music[contM].pause();
                            music[contM].currentTime = 0;
                            clearTimeout(reloj);
                            clearTimeout(drawPrima);
                            clearTimeout(prima1);
                            clearTimeout(pausa);
                            ventana=false;
                            contador=0;
                            activarAN=true;
                            left = false;
                            right = true;
                            primaAux= true;
                            auxi = true;
                            srcX=0;
                            srcY=0;
                            numX2=-200;
                            numY2=-200;
                        }
                     seg--;
                    }
                }

                function ventanaFinal(){
                    go.play();
                    ctx.font = "35px Aharoni";
                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillText("GAME OVER ", canvas.width/2-100, canvas.height/2-50);
                    ctx.fillText(" HUMAN SAFE M "+humans, canvas.width/2-150, canvas.height/2);
                    setTimeout(modalDos,4000);
                }

                function ventanaPre2(){
                    document.getElementsByTagName("body")[0].style.cursor = "default";
                    ctx.font = "35px Aharoni";
                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillText("You Win", canvas.width/2-80, canvas.height/2-50);
                    ctx.fillText(" HUMAN SAFE M "+humans, canvas.width/2-150, canvas.height/2);
                    if(otroC<=2){
                        setTimeout(ventanaFinal2,3000);
                    }
                    if(otroC>=3){
                        setTimeout(ventanaFinal4,3000); 
                    }
                }

                function ventanaFinal2(){
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    canvas.style.backgroundImage = level[contEnemy];
                    setTimeout(modalDos2,4000);
                }

                function ventanaFinal4(){
                    saitamaWin.play()
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    canvas.style.backgroundImage = 'url("./img/congrat.png")';
                    setTimeout(modalDos4,6000);
                }

                function modalDos2(){
                    contM++;
                    audio1=true;
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.fillStyle = "#00FFFF";
                    seg=59;
                    iniciarJuegoR();
                    
                 }

                 function modalDos4(){
                    fuegos.play();
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.font = "15px Segoe Script";
                    ctx.fillStyle = "#00FFFF";
                    canvas.style.backgroundImage = 'url("./img/victory1.gif")';
                    setTimeout(modalDos,10000);
                   
                 }
                
                function modalDos(){
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    modal2.style.display = "initial";
                    document.getElementsByTagName("body")[0].style.cursor = "default";
                }

                boton2.addEventListener("click", findeJuego);

                function findeJuego(){
                    document.location.reload();
                }
                function dibujar(){
                    if(verdadero&&aumento>=1){
                        ctx.clearRect(50,0,canvas.width,30);
                        dibujarInfo();
                    }
                }

                function frame(){
                    if(verdadero){
                        dibujar();
                        exitFull();
                        pausa=setTimeout(frame, 80);
                        document.getElementsByTagName("body")[0].style.cursor = imagenCh;
                    }
                }

                function exitFull(){
                    if (document.fullscreenElement===null) {
                        verificaFull=true;
                    }
                    else { 
                        verificaFull=false;
                    }
                }

                function iniciarJuego(){ 
                    document.getElementsByTagName("body")[0].style.cursor = "url('./img/combo1.png'), auto";
                    ctx.font = "15px Segoe Script";
                    ctx.fillStyle = "#00FFFF";
                    full.style.display = "initial";
                    music[contM].play();
                    verdadero=true;
                    cambio1=true;
                    porIni=parseInt(Math.random()*10);
                    if(porIni<=7){
                        enemi1=true; 
                        drawUno();                                                                                                                               
                            if(verdadero){
                                modal2.style.display = "none";
                                modal.style.display = "none";
                                modal4.style.display = "none";
                                reloj=setInterval(tiempo,1000);
                                prima1=setInterval(prima, 1200);
                                timeAN=setTimeout(frame, 80);
                                closeFullscreen();
                            }
                    }

                    if(porIni>=8){
                        enemi1=false;
                        drawUno();                                                                                                                             
                            if(verdadero){
                                modal2.style.display = "none";
                                modal.style.display = "none";
                                modal4.style.display = "none";
                                reloj=setInterval(tiempo,1000);
                                prima1=setInterval(prima, 1200);
                                timeAN=setTimeout(frame, 80);
                                closeFullscreen();
                            }
                    } 
                }

                      full.addEventListener('click',FullScreen);
                    
                         function FullScreen(){
                             verificaFull=false;
                             if(canvas.webkitRequestFullScreen){
                                 canvas.webkitRequestFullScreen();
                             } 
                             canvas.addEventListener('click', function(event){
                                 if(verdadero){
                                 document.getElementsByTagName("body")[0].style.cursor = "url('./img/combo2.png'), auto";
                                     if(verificaFull==false) {
                                         if (window.event.clientX > (numX2*(window.innerWidth/650)) && window.event.clientX < (numX2*(window.innerWidth/650))+((window.innerWidth/650)*108) && window.event.clientY> numY2*(window.innerHeight/350) && window.event.clientY < (numY2*(window.innerHeight/350))+(cambioFull) && activarAN && enemi1 && desf){
                                             if(!listDif[contEnemy]){
                                                 ali1(ali);
                                                 explosion(ex);
                                                 ctx.clearRect(0,30,canvas.width,canvas.height);
                                                 moveLeft();
                                                 clearTimeout(drawPrima);
                                                 humans+=50;
                                                 activarAN=false; 
                                                 moverDerecha();
                                             }
                                             if(listDif[contEnemy]){
                                                 boom3.play();
                                                 gas.play();
                                                 moverizquierda();
                                                 ctx.clearRect(0,30,canvas.width,canvas.height);
                                                 moveLeft();
                                                 clearTimeout(drawPrima);
                                                 activarAN=false;
                                             }
                               
                                         }
                                
                                          if (window.event.clientX > (numX2*(window.innerWidth/650)) && window.event.clientX < (numX2*(window.innerWidth/650))+((window.innerWidth/650)*108) && window.event.clientY> numY2*(window.innerHeight/350) && window.event.clientY < (numY2*(window.innerHeight/350))+(cambioFull) && activarAN && !enemi1 && desf){
                                              grito.play();
                                              explosion(ex);
                                              moveLeft();
                                              clearTimeout(drawPrima);
                                              activarAN=false;
                                              moverizquierda();
                                              moverDerecha();
                                          }
                                     }
                                }
                            });
                         } 

                      
                      function closeFullscreen(){
                          canvas.addEventListener('click', function(event){
                              if(verdadero){
                              if(aumento2>=35){
                                  document.getElementsByTagName("body")[0].style.cursor = "url('./img/Sprota2.png'), auto";
                              }
                              if(aumento2<=34){
                                  document.getElementsByTagName("body")[0].style.cursor = "url('./img/combo2.png'), auto";
                              }
                              if(verificaFull==true) {
                                  if (window.event.clientX-320 > numX2 && window.event.clientX-320 < numX2+108  && window.event.clientY-180 > numY2 && window.event.clientY-180 < numY2+140 && activarAN && enemi1 && desf){
                                      if(!listDif[contEnemy]){
                                          ali1(ali);
                                          explosion(ex);
                                          ctx.clearRect(0,30,canvas.width,canvas.height);
                                          moveLeft();
                                          clearTimeout(drawPrima);
                                          humans+=50;
                                          activarAN=false; 
                                          moverDerecha();
                                      }
                                      if(listDif[contEnemy]){
                                          boom3.play();
                                          gas.play();
                                          moverizquierda();
                                          ctx.clearRect(0,30,canvas.width,canvas.height);
                                          moveLeft();
                                          clearTimeout(drawPrima);
                                          activarAN=false;
                                      }
                                  }
                                  if (window.event.clientX-320 > numX2 && window.event.clientX-320 < numX2+108  && window.event.clientY-180 > numY2 && window.event.clientY-180 < numY2+140 && activarAN && !enemi1 && desf){
                                      grito.play();
                                      explosion(ex);
                                      moveLeft();
                                      clearTimeout(drawPrima);
                                      activarAN=false;
                                      moverizquierda();
                                      moverDerecha();
                                  }
                              }
                         }
                    });
                } 
            
            
                function updateFrame(){
                    curFrame = ++curFrame % frameCount; 
                    srcX = curFrame * width; 
                    ctx.clearRect(0,30,650,350);
                }

                var contador=0;                                                                                   
                var drawPrima;
                var prima1;
                
                function prima(){ 
                    if(verdadero&&cambio1){
                        porIni=parseInt(Math.random()*10);                                                                                                    
                        drawPrima = setTimeout(drawUno,1200);    
                    }
                }  
                
                var personaje=[character2,p1,p2,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16];
                var enemy=[[character,characterE],[e2,e2E],[e3,e3E]];
                var numRan;
                var numRanEn=parseInt(Math.random()*2);
                var numRanEn2=parseInt(Math.random()*2);
                var numRanEn3=parseInt(Math.random()*2);
                var contEnemy=0;
                var dificultad;
                var listDif=[];
                var Su=1000;
                var Sd=850;
                var St=650;
                var sp=true;
                var speed=[Su,Sd,St];
                var desf=false;
                function drawUno(){
                    numRan=parseInt(Math.random()*16);
                    dificultad=parseInt((Math.random()*10)+1);
                     if(aumento3<=50){
                        speed[contEnemy]=speed[contEnemy]-150;
                        sp=false;
                    }
                    speed=[Su,Sd,St];
                    if(dificultad>=8){
                        numRanEn=1;   
                    }
                    if(dificultad<=7){
                        numRanEn=0;
                    }
                    if(dificultad>=8){
                        numRanEn2=1;
                    }
                    if(dificultad<=7){
                        numRanEn2=0;
                    }
                    if(dificultad>=7){
                        numRanEn3=1;
                    }
                    if(dificultad<=6){
                        numRanEn3=0;
                    }
                    listDif=[numRanEn,numRanEn2,numRanEn3];
                    srcX=0;
                    srcY=0;
                    if(verdadero){
                        numX2 = Math.floor(Math.random() * 542);
                        numY2= Math.floor(Math.random() * 210)+30;
                        if(aumento3<=20&&audio1){    
                            to1(toastyA);
                            ctx.drawImage(toasty.img,510,240);
                            audio1=false;
                        }       
                        if(porIni<=7){ 
                            desf=true;
                            enemi1=true;
                            ctx.drawImage(enemy[contEnemy][listDif[contEnemy]].img,srcX,srcY,width,height,numX2,numY2,width,height)
                        }
                        if(porIni>=8){
                            desf=true;
                            enemi1=false;                                                                                     
                            ctx.drawImage(personaje[numRan].img,srcX,srcY,width,height,numX2,numY2,width,height)
                        }
                    setTimeout(borrarDraw,speed[contEnemy]);
                               
                    }
                }  
                    
                   
                function borrarDraw(){                                                                                           
                    ctx.clearRect(0,30,canvas.width,canvas.height);
                    desf=false;                                                                            
                }

                function draw(){ 
                    if(contador >= 17){
                        ctx.clearRect(0,30,canvas.width,canvas.height);
                        clearInterval(detener);
                        curFrame=108;
                        contador=0;
                        auxi = true;
                        var auxi2 = true;
                        setTimeout(primaAux2,800);
                        return;
                    }
                  updateFrame();
                  ctx.drawImage(enemy[contEnemy][listDif[contEnemy]].img,srcX,srcY,width,height,numX2,numY2,width,height);
                  contador+=1;
                }

                function draw2(){ 
                    if(contador >= 17){
                        ctx.clearRect(0,30,canvas.width,canvas.height);
                        clearInterval(detener2);
                        curFrame=108;
                        contador=0;
                        auxi = true;
                        var auxi2 = true;
                        setTimeout(primaAux2,800);
                        return;
                        }
                        updateFrame();
                        
                        ctx.drawImage(personaje[numRan].img,srcX,srcY,width,height,numX2,numY2,width,height);
                        contador+=1;
                        }

                function primaAux2(){
                    activarAN=true;
                    primaAux=true;
                 } 

                var primaAux= true;    
                var auxi = true;

                function moveLeft(){
                    left = true; 
                    right = false; 
                    if(auxi&&seg>=1){
                        primaAux=false;
                        movimiento();
                        auxi=false
                    }
                 }

                var detener;
                var detener2;

                function movimiento(){
                    if(verdadero&&enemi1){
                        detener = setInterval(draw,50);
                    }
                    if(verdadero&&!enemi1){
                        detener2 = setInterval(draw2,50);
                    }
                } 

                var sonido1=true;
                var otroC=0;

                function poderTi(){
                    sonido1=true;
                    aumento2=0;
                    imagenCh="url('./img/combo1.png'), auto";  
                }
                
                function moverDerecha(){
                    if(aumento2>=1&&!enemi1){
                        aumento2=0;
                        moverizquierda();
                    }
                    if(enemi1){
                        if(contEnemy===0){
                            aumento3 -=9;
                            aumento2 +=9;
                        } 
                        if(contEnemy===1){
                            aumento3 -=8;
                            aumento2 +=7;
                        } 
                        if(contEnemy===2){
                            aumento3 -=7;
                            aumento2 +=17;
                        }   
                        
                        if(aumento2>=36&&sonido1){
                            sonido1=false;
                            est1(est);
                            cbr1(cbr);
                            imagenCh="url('./img/Sprota1.png'), auto";
                            poder10=setTimeout(poderTi,6000);
                        }  
                        if(aumento2>=37){
                            if(contEnemy===0){
                                aumento3 -=25;
                            } 
                            if(contEnemy===1){
                                aumento3 -=20;
                            } 
                            if(contEnemy===2){
                                aumento3 -=15;
                            }      
                            aumento2=38;
                            document.getElementsByTagName("body")[0].style.cursor = "url('./img/combo1.png'), auto";
                        }
                        if(aumento3<=0){
                            ctx.clearRect(0,30,canvas.width,canvas.height);
                            setTimeout(finalEn,1000);
                        }
                        
                    }
                   
                }
                
                function moverizquierda(){
                    if(contEnemy===0){
                        aumento -=20;
                        aumento2 =0;
                    } 
                    if(contEnemy===1){
                        aumento -=33;
                        aumento2 =0;
                    } 
                    if(contEnemy===2){
                        aumento -=50;
                        aumento2 =0;
                    }   
                    if(aumento<=0){
                        aumento=101.1;
                        clearTimeout(timeAN);
                        boom3.play();
                        ctx.clearRect(0,0,canvas.width,canvas.height);
                        setTimeout(ventanaFinal,3000);
                        music[contM].pause();
                        music[contM].currentTime = 0;
                        clearTimeout(reloj);
                        clearTimeout(drawPrima);
                        clearTimeout(prima1);
                        clearTimeout(pausa);
                        ventana=false;
                        contador=0;
                        activarAN=true;
                        left = false;
                        right = true;
                        primaAux= true;
                        auxi = true;
                        srcX=0;
                        srcY=0;
                        numX2=-200;
                        numY2=-200;
                    }
               
                }
                 function finalEn (){
                            music[contM].pause();
                            music[contM].currentTime = 0;
                            aumento3=101.1;
                            document.getElementsByTagName("body")[0].style.cursor = "default";  
                            clearTimeout(timeAN);
                            boom3.play();
                            verdadero=false;
                            ctx.clearRect(0,0,canvas.width,canvas.height);
                            setTimeout(ventanaPre2,3000);
                            clearTimeout(reloj);
                            clearTimeout(drawPrima);
                            clearTimeout(prima1);
                            clearTimeout(pausa);
                            otroC++;
                            ventana=false;
                            contador=0;
                            activarAN=true;
                            left = false;
                            right = true;
                            primaAux= true;
                            auxi = true;
                            srcX=0;
                            srcY=0;
                            numX2=-200;
                            numY2=-200;
                            if(contEnemy<=1){
                                contEnemy++;
                                
                            }

                }
}
window.addEventListener('DOMContentLoaded', cargado, false);

