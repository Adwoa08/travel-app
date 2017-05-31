var app = angular.module("personalSite");

app.controller("homeCtrl", ["$scope", "httpServiceCall", function ($scope, httpServiceCall) {


//    $scope.country = {
//        value: "roundtrip"
//    }

    $scope.carriers = [];

    $scope.info = function (country) {
        $scope.min = "";
        httpServiceCall.getQuotes(country).then(function (data) {
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

// http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=vs428264159776212343779819234691

}])


//app.filter('dateFormat', function ($filter) {
//    return function (input) {
//        if (input == null) {
//            return "";
//        }
//
//        var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
//
//        return _date.toUpperCase();
//
//    };
//});
