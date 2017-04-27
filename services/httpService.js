var app = angular.module("personalSite");

app.service("httpServiceCall", ["$http", function ($http) {


    var self = this;

    
    function normalizeLocation(location){
        if (location === "america" || location === "America"){
            return "us"
        } else if(location === "Britain" || location === "britain"){
            return "uk"
        } else if(location === "korea" || location === "Korea"){
            return "southKorea"
        } else if(location === "ghana" || location === "Ghana"){
            return "gha"
        } 
        return location;
    }
    
    this.getQuotes = function (country) {
        var departure = country.departure;
        var destination = country.destination;
        
        
        
        departure = normalizeLocation(departure);
        destination = normalizeLocation(destination);
        
        
        var key = "vs428264159776212343779819234691"; 
        return $http.get("http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/" + departure + "/" + destination + "/anytime/anytime?apikey=" + key)
            .then(function (response) {
                return response.data;

            })

    }

//FR eur

}])
