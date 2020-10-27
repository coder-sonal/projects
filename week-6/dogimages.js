var metaData;
$("#heading").hide();
$("#info2").hide();
$("#info3").hide();
$("#back").click(function(){
    $("#info").show();
    $("#heading").hide();
    $("#info2").hide();
    $("#selectBreed").remove();
    $("#submit").remove();
    $("#display").remove();
    $("#info3").hide();
})
$.ajax({
    url:"https://dog.ceo/api/breeds/list/all",
    })
    .done(function(res){
            metaData = Object.values(res);
            showList();
            typesOfBreed()
    });
function showList() {
   $("#listOfBreed").click(function(){
        $("#info2").show();
        $("#info").hide();
        $("#heading").show();
        $("#selectBreed").remove();
        $("#submit").remove();
        $("#info3").hide();
        var breeds = metaData[0];
        var dropdown = document.createElement("select")
        dropdown.setAttribute('id', 'selectBreed');
        dropdown.setAttribute("class","ml-sm-5  text-primary")
        var breedName = document.createElement('option');
        breedName.innerHTML = " ";
        dropdown.appendChild(breedName);
        Object.keys(breeds).map(function(breed) {
            breedName = document.createElement('option');
            breedName.setAttribute('value', breed);
            breedName.classList.add("h6","text-primary")
            breedName.innerHTML = breed.toUpperCase();
            dropdown.appendChild(breedName);
        })
        $("#dogsDetails").append(dropdown);
        var searchBtn = document.createElement("button");
        searchBtn.setAttribute("id","submit")
        searchBtn.classList.add("rounded","ml-sm-4","bg-primary","pl-3","pr-3","text-light")
        searchBtn.textContent = "Search Breed";
        searchBtn.addEventListener('click', searchBreed);
        $("#dogsDetails").append(searchBtn);
    })
}


function searchBreed() {
    $("#display").remove();
    debugger;
    var name = $("#selectBreed").val();
    var res = name.toUpperCase();
    $.ajax({
        url:"https://dog.ceo/api/breed/"+name+"/images/random"
        })
        .done(function(image) {
            var src = Object.values(image)[0];
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("col-sm-12","col-md-4","ml-sm-5","m-md-5","p-ms-5","order-sm-1","order-md-1","order-lg-2");
            cardDiv.setAttribute("id",'display');
            cardDiv.setAttribute("style","margin-top: 100px")
            var card = document.createElement("div");
            card.classList.add("card","mb-3")
            var img = document.createElement("img");
            img.setAttribute("class","card-img-top");
            img.setAttribute("id",'imageCard');
            $("#imageCard").css({"height":"400px","width":"900px"})
            img.src = src;
            var dogBreed = document.createElement("div");
            dogBreed.setAttribute("class","card-body")
            var para = document.createElement("p");
            para.classList.add("h4","card-text","bold","text-danger");
            img.setAttribute("id",'imageBody');
            para.innerHTML= res;
            dogBreed.appendChild(para);
            card.appendChild(img);
            card.appendChild(dogBreed);
            cardDiv.appendChild(card)
            $("#breeds").prepend(cardDiv)
        })
}
   
$("#selectBreed").click(function() {
    debugger;
    $("#imageCard").val("");
    $("#imageBody").val("");
})
function typesOfBreed(){
    $("#dogsBreed").click(function(){
        $("#info3").show();
        $("#info").hide();
        $("#heading").hide();
        $("#info2").hide();
        $("#selectBreed").remove();
        $("#submit").remove();
        $("#display").remove();
            var breeds = metaData[0]; 
            Object.keys(breeds).map(function(breed) {
                var name = document.createElement("p");
                name.classList.add("h4","text-light","ml-sm-4","mt-sm-3")
                name.innerHTML= breed.charAt(0).toUpperCase() + breed.slice(1);
                $("#info3").append(name)
            })
        })
}

