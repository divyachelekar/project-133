img="";
status="";
object = [];

function preload(){
    img = loadImage('bed room.jpg');
}


function setup(){
    canvas = createCanvas(800 , 500);
    canvas.position(400 , 230)
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects " ;

    
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results){

    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;

}

function draw(){
    image(img , 0 , 0 , 800 , 500);
    if(status != ""){

        for(i=0; i<object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
             fill('#FF0000');
             precent = floor(object[i].confidence * 100);
             text(object[i].label + " "+ precent + "%" , object[i].x + 100,  object[i].y+100);
             noFill();
             stroke('#FF0000');
             rect(object[i].x+100 , object[i].y+100 , object[i].width+100 , object[i].height+100);

        }

        
        
    }
}

function back(){
    window.location = "index.html";
}