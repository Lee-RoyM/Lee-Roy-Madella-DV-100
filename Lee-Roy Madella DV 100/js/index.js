const trips = [
    {
        name: "Tropical Paradise Escape",
        destination: "Fiji Islands",
        price: "18000",
        dateOfDeparture: "2023-09-15",
        duration: "7 days",
        tripCode: "TPL123",
        image: "card 1.jpg"
    },
    {
        name: "Exotic Hawaiian Getaway",
        destination: "Hawaii, USA",
        price: "25000",
        dateOfDeparture: "2023-08-20",
        duration: "10 days",
        tripCode: "HAW456",
        image: "card 2.jpg"
    },
    {
        name: "Caribbean Island Adventure",
        destination: "Caribbean Islands",
        price: "22000",
        dateOfDeparture: "2023-07-10",
        duration: "14 days",
        tripCode: "CAR789",
        image: "card 3.jpg"
    },
    {
        name: "Mauritius Dream Vacation",
        destination: "Mauritius",
        price: "21000",
        dateOfDeparture: "2023-08-05",
        duration: "8 days",
        tripCode: "MAU101",
        image: "card 4.jpg"
    },
    {
        name: "Bali Bliss Retreat",
        destination: "Bali, Indonesia",
        price: "27000",
        dateOfDeparture: "2023-09-01",
        duration: "12 days",
        tripCode: "BAL202",
        image: "card 5.jpg"
    },
    {
        name: "Tahiti Island Paradise",
        destination: "Tahiti, French Polynesia",
        price: "29000",
        dateOfDeparture: "2023-10-10",
        duration: "15 days",
        tripCode: "TAH303",
        image: "card 6.jpeg"
    },
    {
        name: "Maldives Serenity Cruise",
        destination: "Maldives",
        price: "32000",
        dateOfDeparture: "2023-11-20",
        duration: "11 days",
        tripCode: "MAL404",
        image: "card 7.jpg"
    },
    {
        name: "Caribbean Cruise Explorer",
        destination: "Caribbean Islands",
        price: "28000",
        dateOfDeparture: "2023-12-05",
        duration: "13 days",
        tripCode: "CAR505",
        image: "card 8.jpg"
    },
    {
        name: "Greek Island Odyssey",
        destination: "Greek Islands",
        price: "33000",
        dateOfDeparture: "2024-01-15",
        duration: "18 days",
        tripCode: "GRE606",
        image: "card 9.jpg"
    }
];

$(document).ready(function(){
     
        
    
   
        loadTripOptions();
    });
    
    
    function loadTripOptions () {
        for (let i = 0; i < trips.length; i++) {
            console.log(trips[i]);
    
            $("#tripsContainer").append($("#tripCardTemplate").html());
    
            let currentChild = $("#tripsContainer").children().eq(i+1);
    
            $(currentChild).find(".card-img-top").attr('src','/assets/' + trips[i].image);
    
            $(currentChild).find("#nameText").text(trips[i].name);
    
            $(currentChild).find("#priceText").text('R ' + trips[i].price);
    
            $(currentChild).find("#destinationText").text(trips[i].destination);
    
            $(currentChild).find("#durationText").text(trips[i].duration);

            $(currentChild).find("#dateOfDeparturetext").text( trips[i].dateOfDeparture);

            $(currentChild).find("#tripCodeText").text(trips[i].tripCode);
            
            
        }
    }
    
    
    $("#tripsContainer").on('click', '.card', function(){
    
     
      $(this).find("#priceText").toggle();
      $(this).find("#dateOfDepartureText").toggle();
    
      // Resize the image to fit the additional content
      $(this).find(".card-img-top").toggleClass("small");
    
    });
    






