

function stateChange(){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") { 
        var avtN = xmlHttp.responseText;
        var avtStr;

        if(avtN.substring(0,3) == "Mrs"){
            avtStr = avtN.substring(4,11);
        }else{
            avtStr = avtN.substring(3,10);
        }
        
        var tagImg = "<img src=\"./avatar/" + avtStr.toLowerCase() + ".jpg\">"; 

        //alert(avtStr);
        alert(tagImg);
        document.getElementById("displayImg").innerHTML = tagImg;
        document.getElementById("avtName").innerHTML = xmlHttp.responseText + " !!";
        
     
    }
}

function showAvatar(str){
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = stateChange;

    var url = "avatar.php";
    url = url + "?nickname=" + str;

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}