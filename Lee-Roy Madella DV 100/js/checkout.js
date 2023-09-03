const trips = [
    {
        name: "Tropical Paradise Escape",
        price: "18000",
        tripCode: "TPL123",
        remove:"-"
   
    },
    {
        name: "Exotic Hawaiian Getaway",
        price: "25000",
        tripCode: "HAW456",
        remove:"-"
    },
    {
        name: "Caribbean Island Adventure",
        price: "22000",
        tripCode: "CAR789",
        remove:"-"
    },
    {
        name: "Mauritius Dream Vacation",
        price: "21000",
        tripCode: "MAU101",
        remove:"-"
    },
    {
        name: "Bali Bliss Retreat",
        price: "27000",
        tripCode: "BAL202",
        remove:"-"
    },
    {
        name: "Tahiti Island Paradise",
        price: "29000",
        tripCode: "TAH303",
        remove:"-"
    },
    {
        name: "Maldives Serenity Cruise",
        price: "32000",
        tripCode: "MAL404",
        remove:"-"
    },
    {
        name: "Caribbean Cruise Explorer",
        price: "28000",
        tripCode: "CAR505",
        remove:"-"
    },
    {
        name: "Greek Island Odyssey",
        price: "33000",
        tripCode: "GRE606",
        remove:"-"
    }
];

$(document).ready(function () {
    // Initialize wishlist array to store plant data
    var wishlist = [];

    // Function to add a plant to the wishlist
    function addTripss(trips) {
        // Check if the wishlist is full (maximum 5 plants)
        if (wishlist.length >= 5) {
            alert("Your wishlist is full. Please remove a trips to add more.");
            return;
        }

        // Add trips data to the wishlist array
        wishlist.push(plant);

        // Update the table with the new trips data
        updateWishlistTable();
    }

    // Function to remove a plant from the wishlist
    function removeTripsFromWishlist(index) {
        wishlist.splice(index, 1);
        updateWishlistTable();
    }

    // Function to update the wishlist table
    function updateWishlistTable() {
        var tableBody = $("#wishlist tbody");
        tableBody.empty(); // Clear existing table data

        // Loop through the wishlist array and add rows to the table
        for (var i = 0; i < wishlist.length; i++) {
            var plant = wishlist[i];
            var row = $("<tr>");

            // Add trips picture column
            var pictureCell = $("<td>").html(`<img src="${trips.picture}" alt="${trips.name}" width="100">`);
            row.append(pictureCell);

            // Add plant name column
            var nameCell = $("<td>").text(trips.name);
            row.append(nameCell);

            // Add remove option column
            var removeCell = $("<td>").html('<button class="remove-btn">-</button>');
            row.append(removeCell);

            // Attach event listener to remove button
            removeCell.find(".remove-btn").click(function () {
                var rowIndex = $(this).closest("tr").index();
                removeTripsFromWishlist(rowIndex);
            });

            // Adding the row to the table
            tableBody.append(row);
        }
    }

   
    addTripss({ tripCode: "CAR123", name: "Tropical Paradise Escape", price: 18000 });
    addTripss({ tripCode: "CAR123", name: "Exotic Hawaiian Getaway", price: 14000 });
    addTripss({ tripCode: "CAR123", name: "Mauritius Dream Vacation", price: 18000 });
    addTripss({ tripCode: "CAR123", name: "Bali Bliss Retreat", price: 15000 });
    addTripss({ tripCode: "CAR123", name: "Tahiti Island Paradise", price: 17000 });
    addTripss({ tripCode: "CAR123", name: "Maldives Serenity Cruise", price: 19000 });
    addTripss({ tripCode: "CAR123", name: "Caribbean Cruise Explorer", price: 17000 });
    addTripss({ tripCode: "CAR123", name: "Greek Island Odyssey", price: 26000 });
    addTripss({ tripCode: "CAR123", name: "Caribbean Cruise", price: 27000 });
});