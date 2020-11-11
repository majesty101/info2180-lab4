window.onload =function(){

    var loadbtn = document.getElementById('btn');
    var httprequest = new XMLHttpRequest();

    loadbtn.addEventListener('click', function(e){
        e.preventDefault(); 

        //get
        var url = "http://localhost:8080/superheroes.php?search=";
        httprequest.open("GET", url, true);
        httprequest.onreadystatechange = function() {
            if(httprequest.readyState == XMLHttpRequest.DONE && httprequest.status == 200){
           
                var response = httprequest.responseText;
                aaa = document.getElementsByClassName("msg").item(0);
                aaa.innerHTML = response;
          
                
            }else{
                var ms ="problem";
             ms.innerHTML = ms;
            }
    };
    httprequest.send();
    });

    /**var searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
     var value = e.target.value.toLowerCase(); 
     console.log("Value:", value)
      var data = searchphp(value, $superheroes)
    })

    function searchphp (value, data){
        var filteredData = [];
        for (var i = 0; i< data.length; i++){
            value = value.toLowerCase();
            var name = data[i].name.toLowerCase();

            if(name.includes(value)){
                filteredData.push(data[i]);
            }
        }
        return filteredData;

    }
*/
}
