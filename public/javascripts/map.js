const express = require('express')
const app = express();

var blueline = []
var bluebranchline = []
var magentaline = []
var yellowline = []
var violetline = []
var redline = []
var greenline = []
var greenbranchline = []
var pinkline = []
var pinkbranchline = []
var orangeline = []
var aqualine = []

function importLines(){

    //Blue Line
  
    blue = require("../lines/blue.json");
    for (var i = 0; i < blue.length; i++) {
      blueline[i] = blue[i]["English"];
    }
  
    //BlueBranch
    bluebranch = require("../lines/bluebranch.json");
    for (var i = 0; i < bluebranch.length; i++) {
      bluebranchline[i] = bluebranch[i]["English"];
    }
   
    //Magenta 
    magenta = require("../lines/magenta.json");
    for (var i = 0; i < magenta.length; i++) {
      magentaline[i] = magenta[i]["25"];
    }
   
    //Yellow Line
    yellow = require("../lines/yellow.json");
    for (var i = 0; i < yellow.length; i++) {
      yellowline[i] = yellow[i]["English"];
    }
  
  
    //Violet Line
    violet = require("../lines/violet.json");
    for (var i = 0; i < violet.length; i++) {
      violetline[i] = violet[i]["English"];
    }
    
    //red Line
    red = require("../lines/red.json");
    for (var i = 0; i < red.length; i++) {
      redline[i] = red[i]["English"];
    }
  
    //green Line
    green = require("../lines/green.json");
  
    for (var i = 0; i < green.length; i++) {
      greenline[i] = green[i]["English"];
    }
   
    //greenbranch Line
    greenbranch = require("../lines/greenbranch.json");
    for (var i = 0; i < greenbranch.length; i++) {
      greenbranchline[i] = greenbranch[i]["English"];
    }
    
    //pink Line
    pink = require("../lines/pink.json");
    for (var i = 0; i < pink.length; i++) {
      pinkline[i] = pink[i]["English"];
    }
    
    //pinkbranch Line
    pinkbranch = require("../lines/pinkbranch.json");
    for (var i = 0; i < pinkbranch.length; i++) {
      pinkbranchline[i] = pinkbranch[i]["English"];
    }
   
    //Orange
    orange = require("../lines/orange.json");
    for (var i = 0; i < orange.length; i++) {
      orangeline[i] = orange[i]["English"];
    }
  

    //Aqua Line
    aqua = require("../lines/aqua.json");
    for (var i = 0; i < aqua.length; i++) {
      aqualine[i] = aqua[i]["English"];
    }


}
// console.log(importLines());
importLines()
function displayLine(name){
    if(name===undefined){
        console.log(`huihui masti le rhe ho`)
    }
    var lineName=name+"line";
    if(lineName == 'aqualine'){
    for(var i=0;i<aqualine.length;i++)
        console.log(aqualine[i])
    }
}
