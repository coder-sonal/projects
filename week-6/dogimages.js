var metaData;
$("#heading").hide();
$("#info2").hide();
$("#back").click(function(){
    $("#info").show();
    $("#heading").hide();
    $("#info2").hide();
    $("#selectBreed").remove();
    $("#submit").remove();
})
$.ajax({
    url:"https://dog.ceo/api/breeds/list/all",
    })
    .done(function(res){
            metaData = Object.values(res);
            showList();
    });
function showList() {
   $("#listOfBreed").click(function(){
        $("#info2").show();
        $("#info").hide();
        $("#heading").show();
        $("#selectBreed").remove();
        $("#submit").remove();
        var breeds = metaData[0];
        var dropdown = document.createElement("select")
        dropdown.setAttribute('id', 'selectBreed');
        dropdown.setAttribute("class","ml-5")
        Object.keys(breeds).map(function(breed) {
            var breedName = document.createElement('option');
            breedName.setAttribute('value', breed);
            breedName.innerHTML = breed;
            dropdown.appendChild(breedName);
        })
        $("#dogsDetails").append(dropdown);
        var searchBtn = document.createElement("button");
        searchBtn.setAttribute("id","submit")
        searchBtn.classList.add("rounded","ml-sm-3","bg-primary","pl-3","pr-3","text-light")
        searchBtn.textContent = "Search Breed";
        searchBtn.addEventListener('click', searchBreed);
        $("#dogsDetails").append(searchBtn);
    })
}


function searchBreed() {
    $("#display").remove();
    var name = $("#selectBreed").val();
    $.ajax({
        url:"https://dog.ceo/api/breed/"+name+"/images/random"
        })
        .done(function(image) {
            var src = Object.values(image)[0];
            var cardDiv = document.createElement("div");
            cardDiv.classList.add("col-sm-12","col-md-4","ml-sm-5","m-md-5","p-ms-5");
            cardDiv.setAttribute("id",'display');
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
            para.setAttribute("class","card-text");
            img.setAttribute("id",'imageBody');
            para.innerHTML= name;
            dogBreed.appendChild(para);
            card.appendChild(img);
            card.appendChild(dogBreed);
            cardDiv.appendChild(card)
            $("#breeds").append(cardDiv)
        })
}
   
$("#selectBreed").click(function() {
    debugger;
    $("#imageCard").val("");
    $("#imageBody").val("");
})


