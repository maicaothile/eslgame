window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //get the StoryLine player
var player=GetPlayer();

//get Storyline variable value as a string
var textArray=player.GetVar("Text_Array");

//Convert string to a numeric array
numArray=textArray.split(",").map(Number);

//Get a random number from the array and send it to StoryLine
var randNum = numArray[Math.floor(Math.random() * numArray.length)];
player.SetVar("Random",randNum);

//Remove the random number from your array and get the array's length
numArray.splice(numArray.indexOf(randNum), 1);
var itemsLeft=numArray.length;

//Convert array to a string and send it back to SL along with the array's length
textArray=numArray.map(String).toString();
player.SetVar("Items_Left", itemsLeft);
player.SetVar("Text_Array", textArray);
}

};
