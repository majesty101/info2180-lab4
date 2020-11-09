window.onload =function(){

    var loadbtn = document.getElementById('btn');
    var httprequest = new XMLHttpRequest();

    loadbtn.addEventListener('click', function(e){
        e.preventDefault(); 

        //get
        var url = "http://localhost:8080/superheroes.php";
        httprequest.open("GET", url, true);
        httprequest.onreadystatechange = function() {
            if(httprequest.readyState == XMLHttpRequest.DONE && httprequest.status == 200){
                console.log("reach");
                var response = httprequest.responseText;
                aaa = document.getElementsByClassName("msg").item(0);
                aaa.innerHTML = response;
                alert(aaa.innerHTML);
                
            }else{
                var msg ="problem";
                msg.innerHTML = msg;
            }
    };
    httprequest.send();
    });
}