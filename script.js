var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4Wam9IQiZjp_FYkZrrd99kUqESCo0RZDzg&usqp=CAU";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXTWR0h_wlIVVgdvpqSo21ia0Ig5w9HnCiA&usqp=CAU";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRvUBtumSw6XlzUX71fhs3hcSqe2Crm2bqQ&usqp=CAU";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPEMT1O67rK1vm-LfTOAU28Xkwdb2Vx4Ekw&usqp=CAU";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmzUr0E8-kIhVV0OcHJxRS_Us8lwvZV4Dow&usqp=CAU";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCvQvrvPiTVkCE6hRWSKx9p85IysOer5EaA&usqp=CAU";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);