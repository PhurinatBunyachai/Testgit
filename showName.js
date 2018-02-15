var xmlHttp;

function createXMLHttpRequest(){
    if(window.ActiveXObject)
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    else
        xmlHttp = new XMLHttpRequest();    
}

function stateChange(){
    if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") { 
        var name = xmlHttp.responseText;
        //var listData = name.split(",");

        //for(var i in listData){
            //document.write("<option value='" + listData[i]) + "' />";
            document.getElementById("names").innerHTML = name;
        //}

        //document.getElementById("avatarNames").innerHTML = listData;
            
    }
}

function showName(str){
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = stateChange;

    var url = "name.php";
    url = url + "?name=" + str;

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}