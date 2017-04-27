var app = angular.module("personalSite");

app.controller("homeCtrl", ["$scope", "httpServiceCall", function ($scope, httpServiceCall) {

    $scope.carriers = [];

    $scope.info = function (country) {
        $scope.min = "";
//        console.log(country);
        httpServiceCall.getQuotes(country).then(function (data) {
            console.log(data);
            $scope.display = 0;
            if (data.Quotes.length > 0) {
                $scope.min = data.Quotes[0].MinPrice;
            } else {
                $scope.min = "No available price"
            }
            for (var i = 0; i < data.Quotes.length; i++) {
                $scope.display += data.Quotes[i].MinPrice;
                if (data.Quotes[i].MinPrice < $scope.min) {
                    $scope.min = data.Quotes[i].MinPrice
                }
            }
            $scope.display /= data.Quotes.length;
            
            
            

            for (var j = 0; j < data.Carriers.length; j++) {
                $scope.carriers.push(data.Carriers[j].Name);
//                console.log(data.Carriers[j]);
            }

//            $scope.country.departure = '';
//            $scope.country.destination = '';
        });

        //        httpServiceCall.getQuotes(country).then(function(quotes){
        //             $scope.display = 0;
        //
        //            for(var i = 0; i < quotes.Quotes.length; i++){
        //                $scope.display += quotes.Quotes[i].MinPrice;
        //            }
        //            $scope.display /= quotes.Quotes.length;
        //        });
        //        
    }



}])
