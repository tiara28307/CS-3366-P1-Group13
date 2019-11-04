let capture;
let newsData;
var newsState = -1;
var weather;
var twitterButton;
var newsButton;
var twitterState = 1;
var newsState2 = 1;
var calendarButton;
var calendarState = 1;
var spotifyButton;
var spotifyState = 1;
var healthState = -1;
var healthButton;
var healthButState = 1;
let finessData;
var step_int = 0;
let sleepyTime = 15;
var step_img;
var bed_img;
var total_step = 0;
let steps = 2300;
let values = [0,0,0,0,0,0,0]
let auth = '';
let inp;
let bathImg;

function preload(){
  //URL for JSON data API's
  let urlNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=da22bf531795458d9a190346f5d06f9a';
  let urlWeather = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
  //Loading data
  newsData = loadJSON(urlNews);
  //weatherData = loadJSON(urlWeather);
}

function setup() {
  
  let inp = createInput('');
  inp.input(myInputEvent);
  inp.position(0,700);
  
  //image(step_img, 0, 100, step_img.width / 8, step_img.height / 8);
  //image(bed_img, 0, 130, bed_img.width / 8, bed_img.height / 8);
  
  //step_img = loadImage('steps2.png');
  
  canvas = createCanvas(900, 655);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  
  //News button
  newsButton = createImg('newsIcon.png');
  newsButton.position(250, 590);
  newsButton.size(50,50);
  newsButton.mousePressed(newsTog);
  newsButton.id('newsButton');
  
  //Calendar button
  calendarButton = createImg('calendarIcon.png');
  calendarButton.position(320, 590);
  calendarButton.size(50,50);
  calendarButton.mousePressed(calendarTog);
  calendarButton.id('calendarButton');
   document.getElementById("calendar").style.display = "none";
  
  
  //Twitter button
  twitterButton = createImg('small-twitter-icon-17.jpg');
  twitterButton.position(390, 590);
  twitterButton.size(50,50);
  twitterButton.mousePressed(twitterTog);
  document.getElementById("twitter").style.display = "none";
  
  //Spotify icon
  twitterButton = createImg('spotifyIcon.jpg');
  twitterButton.position(460, 588);
  twitterButton.size(55,55);
  twitterButton.mousePressed(spotifyTog);
  document.getElementById("spotify").style.display = "none";
  
  //Health button
  newsButton = createImg('healthIcon.png');
  newsButton.position(530, 590);
  newsButton.size(50,50);
  newsButton.mousePressed(healthTog);

  
  capture = createCapture(VIDEO);
  capture.size(420,460);
  capture.hide();
  textSize(14);
  fill(255);
  capture.hide();
  
  weather = Math.floor(Math.random() * 10)+55;
  
}

function draw() {
  
  background(255);
  imageCap =  image(capture,0,0,900,655);
  
  
  fill(255);
  textSize(22);
  textStyle(BOLD);
  text(formatAMPM(new Date),395,25);
  
  if(healthButState==0){
  fill("#838383");
  rect(10, 535, 150, 70, 7);
  fill(255);
    textSize(18);
    textStyle(BOLD);
  text("Health",30, 555);
    textSize(12);
    textStyle(NORMAL);
  text(values[6] + " steps",30, 575);
  text(sleepyTime +" hours of sleep", 30, 595)
  Health(steps, healthState);
  }
  
  

  //NewsFeed
  if(newsState2 == 0){
    topThree(newsData);
  getArticle(newsData,newsState);
  }
  
  

  
}

function mousePressed(){
  if(mouseY>=30 && mouseY<=150 && mouseX>=700 && mouseX<=900){
    if(mouseY>=30 && mouseY<=60){
      if(mouseX>=700 && mouseX<=900){
        newsState = 0;
       }
    }
    if(mouseY>=60 && mouseY<=90){
      if(mouseX>=700 && mouseX<=900){
        newsState = 1;
       }
    }
    if(mouseY>=90 && mouseY<=120){
      if(mouseX>=700 && mouseX<=900){
        newsState = 2;
       }
    }
    if(mouseY>=120 && mouseY<=150){
      if(mouseX>=700 && mouseX<=900){
        newsState = 3;
       }
    }
  }
  else if(mouseY>=535 && mouseY<=595 && mouseX>=10 && mouseX<=150){
    if(mouseY>=535 && mouseY<=595){
      if(mouseX>=10 && mouseX<=150){
        healthState = 0;
      }
    }

  }
  else{
    newsState = -1;
    healthState = -1;
  }
}

function twitterTog(){
  if(twitterState == 1){
  document.getElementById("twitter").style.display = "block";
    twitterState = 0;
  }
  else{
      document.getElementById("twitter").style.display = "none";
    twitterState = 1;
  }
}

function calendarTog(){
  if(calendarState == 1){
  document.getElementById("calendar").style.display = "block";
    calendarState = 0;
  }
  else{
      document.getElementById("calendar").style.display = "none";
    calendarState = 1;
  }
}

function spotifyTog(){
  if(spotifyState == 1){
  document.getElementById("spotify").style.display = "block";
    spotifyState = 0;
  }
  else{
      document.getElementById("spotify").style.display = "none";
    spotifyState = 1;
  }
}

function newsTog(){
  if(newsState2 == 0){
    newsState2 = 1;
  }
  else{
    newsState2 = 0;
  }
}

function healthTog(){
  if(healthButState == 0){
    healthButState = 1;
  }
  else{
    healthButState = 0;
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
    
  textSize(15);
  fill("#838383");
  // text(formatAMPM(new Date),20,20);
    
  rect(335, 5, 350, 350, 20);
  
  //Title
  var title = data.articles[i].title
  fill(255);
  textStyle(BOLD);
  text(title,340, 15, 340, 390 );
  
  //Body
  textSize(12);
  textStyle(NORMAL);
  var content = data.articles[i].content
  if(content!=null){
    text(content, 340,90,330,390);
  }
  else{
    text("NO CONTENT TO SHOW", 340,90,330,390);
  }
  
  //Description
  textSize(12);
  textStyle(NORMAL);
  var description = data.articles[i].description
  if(description!=null){
  text(description, 340,185,330,390);  
  }
  else{
    text("NO CONTENT TO SHOW", 340,185,330,390);
  }
  
  //Published
  textSize(12);
  textStyle(NORMAL);
  var published = data.articles[i].publishedAt
  text("Published at:\n"+published, 340,315,340,390);
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
  fill("#838383");
  rect(687, 03, 200, 150, 7);
  textSize(15);
  
  fill(255);
  text("News",700,20);
  var count = 30;
  
  for(var i = 0; i<4; i++){
    var titles = data.articles[i].title;
    
    if(titles.length>51){
      titles = titles.substring(0,50);
      titles = titles+"...";
    }
    fill(255);
    textSize(12);
    text("-", 690,count,160,30);
    text(titles, 700,count,190,30);
    count+=30;
  }

  //line(690, 150, 895, 150);
}

function gotData(data){
  var articles = data.articles;
  for(var i = 0; i<articles.length; i++){
    console.log(data.articles[i].title);
  }
}

function myInputEvent() {
 
  auth = this.value();

 
}

function keyPressed() {
 
  if (keyCode === ENTER) {
    
    authCodeReady = true;
    
    var d = new Date();
    var today = d.getTime() * 1000000;
    
   
    
    let urlFitness = 'https://www.googleapis.com/fitness/v1/users/me/dataSources/raw:com.google.step_count.delta:com.google.android.gms:appleinc.:iphone:com.apple.health.735e3053-ad38-4de2-8560-ab51e752a04b:derive_step_deltas/datasets/1572152400000000000-'+str(today);
    let urlSleepy = 'https://www.googleapis.com/fitness/v1/users/me/sessions'

  httpDo(
    urlFitness,
    {
      method: 'GET',
      // Other Request options, like special headers for apis
      headers: { authorization: 'Bearer '+ auth },
    
    },

    function(res) {
      fitnessData = JSON.parse(res);
     
      var index = 0;
      
      for (let i=0; i<fitnessData.point.length; ++i){
        
        step_int = fitnessData.point[i];
      
        index=6-Math.floor((today-step_int.startTimeNanos)/86400000000000);
        
        values[index] += step_int.value[0].intVal;
    
      }
      
    }
  );
    httpDo(
      urlSleepy,
      {
        method: 'GET',
        
        headers: { authorization: 'Bearer '+ auth },
      },
      function(res){
        dataSleep = JSON.parse(res);
        
        sleepyTime = int((dataSleep.session[3].endTimeMillis-dataSleep.session[3].startTimeMillis)/3600000);
      }
      );
  }
}

function Health(data, i) {
  if(i==-1){
  }
  else {

    textSize(15);
    fill(255);
    
    rect(250, 160, 350, 350, 20);
    
    for (var i = 0; i < values.length; i++) {
      stroke(2);
      fill(0,0,255);
      rect(i * 39 + 290, 450-values[i]/55, 20, values[i]/55);
      
      text(values[i], i*38+290, 450-values[i]/55);
      
      text(5000, 7*35+290, 400-5000/55);
      
      text(10000, 7*35+290, 400-10000/55);
      
      
      rect(255, 420-5000/55, 7*35+75, 1);
      rect(255, 420-10000/55, 7*35+75, 1);
    }
    fill(255);
  }
}
