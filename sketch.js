let capture;
let newsData;
var newsState = -1;

var canvas;
var click1;
let v1 = 0;
let v2 = 0;
let s1pic, s2pic;
var clicks = 0;

function preload(){
  //URL for JSON data API's
  let urlNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=da22bf531795458d9a190346f5d06f9a';
  let urlWeather = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
  
  //Loading data
  newsData = loadJSON(urlNews);
  // weatherData = loadJSON(urlWeather);
  
  soundFormats('mp3');
  song1 = loadSound('oneofthemdays.mp3');
  song2 = loadSound('shapeofyou.mp3');
}

function setup() {
  createCanvas(420, 460);
  capture = createCapture(VIDEO);
  capture.size(420,460);
  capture.hide();
  textSize(14);
  fill(255);
  s1pic = loadImage('oneofthemdays.png');
  s2pic = loadImage('shapeofyou.png');
  //Create, style and resize clickables.
  click1 = new Clickable();
  click1.locate(46, 405);
  click1.resize(50,50);
  
  //Music playlist functions TiAra Carroll
  //
  //
  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function(){
	this.color = "#AAAAFF";
	//this.textColor = "#FFFFFF";
	//this.text = "Yay!";
    
  }
  //This function is ran when the clickable is NOT hovered.
 click1.onOutside = function(){
    this.color = "#CC0000";
    this.textSize = 15;
	this.textColor = "#000000";
    
  }
  //This function is ran when the clickable is pressed.

  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function(){
	  this.color = "#FF0000";
    //loop()
    //{
      if(this.text = "Pause")
      {
        
         if (clicks == 1)
         {
           song1.play();
         }
         click1.onPress = function()
         {
           click1.onRelease = function()
           {
             this.text = "Play";
             if(song1.isPlaying() == true)
             {
               song1.pause();
             }
             else if(song2.isPlaying() == true)
             {
               song2.pause();
             }
             if(this.text = "Play")
             {
                click1.onPress = function()
                 {
                   click1.onRelease = function()
                   {
                     this.text = "Pause";
                     if(song1.isPaused() == true)
                     {
                       song1.play();
                     }
                     else if(song2.isPaused() == true)
                     {
                       song2.play();
                     }
                     if(this.text = "Pause")
                     {
                       click1.onPress = function()
                       {
                         click1.onRelease = function()
                         {
                           this.text = "Play";
                           if(song1.isPlaying() == true)
                           {
                             song1.pause();
                           }
                           else if(song2.isPlaying() == true)
                           {
                             song2.pause();
                           }
                           if(this.text = "Play")
                           {
                              click1.onPress = function()
                           {
                               click1.onRelease = function()
                               {
                                 this.text = "Pause";
                                 if(song1.isPaused() == true)
                                 {
                                   song1.play();
                                 }
                                 else if(song2.isPaused() == true)
                                 {
                                   song2.play();
                                 }
                                 if(this.text = "Pause")
                                 {
                                   click1.onPress = function()
                                   {
                                     click1.onRelease = function()
                                     {
                                       this.text = "Play";
                                       if(song1.isPlaying() == true)
                           {
                             song1.stop();
                           }
                           else if(song2.isPlaying() == true)
                           {
                             song2.stop();
                           }
                         
                               }
                            }
                           }
                         }
                        }
                      }
    
                      }
                    }
                  }   
                  }
         }
      }
  }
}
      }
    }
}


function draw() {
  background(255);
  imageCap =  image(capture,0,0,420,460);
  
  //Time
  textSize(15);
  fill(255);
  text(formatAMPM(new Date),20,20);
  topThree(newsData);
  
  //Music playlist draw applications
  fill(0);
  ellipse(27, 430, 33, 33);
  ellipse(115, 430, 33, 33);
  fill(96,96,96);
  rect(3,400,136,65);
  textSize(15);
  //fill(0);
  //text(clicks,68, 390);
  click1.draw();
  
  translate(70, 380);
  fill(v2);
  tri = triangle(35,35, 60, 50, 35, 65);
  translate(-75,15);
  scale(0.85);
  fill(v1);
  tri2 = triangle(45, 20, 20, 40, 45, 60);
  if(song1.isPlaying() == true || song1.isPaused() == true)
  {
    image(s1pic, 10, -150);
    s1pic.resize(165,155);
    
  }
  if(song2.isPlaying() == true || song2.isPaused() == true)
  {
    image(s2pic, 10, -150);
    s2pic.resize(165,155);
  }
  
  //image(forwardbtn, 0, 0);
  //image(plaback, 0, 0);
  
  //Weather
  //getWeather(weatherData);
  
  
  //NewsFeed
  getArticle(newsData,newsState);
  // print(mouseX);
  
}


function mousePressed(){
  let d = dist(mouseX, mouseY, 30, 300);
  if(mouseY>=30 && mouseY<=120 && mouseX>=280 && mouseX<=400){
    if(mouseY>=30 && mouseY<=60){
      if(mouseX>=280 && mouseX<=400){
        newsState = 0;
       }
    }
    if(mouseY>=60 && mouseY<=90){
      if(mouseX>=280 && mouseX<=400){
        newsState = 1;
       }
    }
  }
 if (d)
 {
    fill(255, 0, 0);
    ellipse(30,300,45, 45);
 }

  
  else{
    newsState = -1;
  }
  
  
  clicks++;
  let d1 = dist(mouseX, mouseY, 27, 430);
  let d2 = dist(mouseX, mouseY, 115, 430);
  if (d1 < 15)
  {
    if (v1 === 0) {
     v1 = 255;
    if(song1.isPlaying() == true )
    {
     song1.stop();
     song2.play();
     click1.onRelease();
    }
    if(song2.isPause() == true)
    {
      song2.pause();
    }
     } else {
    v1 = 0;
  }
  }
  if (d2 < 15)
  {
    if (v2 == 0)
    {
      v2 = 255;
    // if(song1.isPlaying() == true )
    //{
     //song1.stop();
     //song2.play();
   // }
   // if(song2.isPause() == true)
   // {
    //  song2.pause();
   // }
    
    }
       else
       {
         v2 = 0;
       }
    
  }
}

function mouseReleased()
{
  if(v1 == 255)
  {
    v1 = 0;
  }
  if(v2 == 255)
  {
    v2 = 0;
  }
  
}



function getWeather(data){
  var weather = data.main.temp;
  text(weather, 40,20);
}

function getArticle(data,i){
  //imageCap.pause();
  if(i==-1){
  }
  else{
  imageCap =  image(capture,0,0,420,460);
  textSize(15);
  fill(255);
  // text(formatAMPM(new Date),20,20);
  
  rect(40, 40, 350, 350, 20);
  
  //Title
  var title = data.articles[i].title
  fill(0);
  textStyle(BOLD);
  text(title,50, 50, 340, 390 );
  
  //Body
  textSize(12);
  textStyle(NORMAL);
  var content = data.articles[i].content
  text(content, 55,120,330,390);
  
  //Description
  textSize(12);
  textStyle(NORMAL);
  var description = data.articles[i].description
  text(description, 55,220,330,390);  
  
  //Published
  textSize(12);
  textStyle(NORMAL);
  var published = data.articles[i].publishedAt
  text("Published at:\n"+published, 55,340,340,390);
  }
  
}


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function topThree(data){
  textSize(15);
  text("News",290,20);
  var count = 30;
  
  for(var i = 0; i<3; i++){
    var titles = data.articles[i].title;
    
    if(titles.length>34){
      titles = titles.substring(0,33);
      titles = titles+"...";
    }
    textSize(12);
    text("-", 280,count,120,30);
    text(titles, 290,count,120,30);
    count+=30;
  }
}

function gotData(data){
  var articles = data.articles;
  for(var i = 0; i<articles.length; i++){
    console.log(data.articles[i].title);
  }
}


//Library code Clickables() TiAra Carroll addon

var cl_mouseWasPressed = false;
//Last hovered button
var cl_lastHovered = null;
//Last pressed button
var cl_lastClicked = null;
//All created buttons
var cl_clickables = [];

//This function is what makes the magic happen and should be ran after
//each draw cycle.
p5.prototype.runGUI = function(){
	for(i = 0; i < cl_clickables.length; ++i){
		if(cl_lastHovered != cl_clickables[i])
			cl_clickables[i].onOutside();
	}
	if(cl_lastHovered != null){
		if(cl_lastClicked != cl_lastHovered){
			cl_lastHovered.onHover();
		}
	}
	if(!cl_mouseWasPressed && cl_lastClicked != null){
		cl_lastClicked.onPress();
	}
	if(cl_mouseWasPressed && !mouseIsPressed && cl_lastClicked != null){
		if(cl_lastClicked == cl_lastHovered){
			cl_lastClicked.onRelease();
		}
		cl_lastClicked = null;
	}
	cl_lastHovered = null;
	cl_mouseWasPressed = mouseIsPressed;
}

p5.prototype.registerMethod('post', p5.prototype.runGUI);

//Button Class
function Clickable(x,y){
	this.x = x || 0;			//X position of the clickable
	this.y = y || 0;			//Y position of the clickable
	this.width = 100;			//Width of the clickable
	this.height = 50;			//Height of the clickable
	this.color = "#FFFFFF";			//Background color of the clickable
	this.cornerRadius = 25;			//Corner radius of the clickable
	this.strokeWeight = 2;			//Stroke width of the clickable
	this.stroke = "#000000";		//Border color of the clickable
	this.text = "Play";			//Text of the clickable
	this.textColor = "#000000";		//Color for the text shown
	this.textSize = 12;			//Size for the text shown
	this.textFont = "sans-serif";		//Font for the text shown	
	
	this.onHover = function(){
		//This function is ran when the clickable is hovered but not
		//pressed.
	}
	
	this.onOutside = function(){
		//This function is ran when the clickable is NOT hovered.
	}
	
	this.onPress = function(){
		//This function is ran when the clickable is pressed.
	}
	
	this.onRelease = function(){
		//This funcion is ran when the cursor was pressed and then
		//released inside the clickable. If it was pressed inside and
		//then released outside this won't work.
	}
	
	this.locate = function(x, y){
		this.x = x;
		this.y = y;
	}
	
	this.resize = function(w, h){
		this.width = w;
		this.height = h;
	}
	
	this.draw = function(){
		fill(this.color);
		stroke(this.stroke);
		strokeWeight(this.strokeWeight);
		rect(this.x, this.y, this.width, this.height, this.cornerRadius);
		fill(this.textColor);
		noStroke();
		textAlign(CENTER, CENTER);
		textSize(this.textSize);
		textFont(this.textFont);
		text(this.text, this.x+1, this.y+1, this.width, this.height);
		if(mouseX >= this.x && mouseY >= this.y 
		   && mouseX < this.x+this.width && mouseY < this.y+this.height){
			cl_lastHovered = this;
			if(mouseIsPressed && !cl_mouseWasPressed)
				cl_lastClicked = this;
		}
	}
	
	cl_clickables.push(this);
}

  
  
