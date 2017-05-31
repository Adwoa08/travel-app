var app = angular.module("personalSite");

app.controller("homeCtrl", ["$scope", "httpServiceCall", function ($scope, httpServiceCall) {


    $scope.radio = {
        value: "roundtrip"
    }

    $scope.carriers = [];


    $scope.info = function (country) {

        if (country.departDate) {
            var dd = country.departDate.getDate();
            var mm = country.departDate.getMonth() + 1;
            var yyyy = country.departDate.getFullYear();
        }

        if (country.returnDate) {
            var dd2 = country.returnDate.getDate();
            var mm2 = country.returnDate.getMonth() + 1;
            var yyyy2 = country.returnDate.getFullYear();

            if (dd2 < 10) {
                dd2 = '0' + dd2;
            }

            if (mm2 < 10) {
                mm2 = '0' + mm2;
            }

            country.returnDate = yyyy2 + '-' + mm2 + '-' + dd2;
        }


        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        if (country.departDate) {
            country.departDate = yyyy + '-' + mm + '-' + dd;
        }

        if (country.returnDate === undefined || country.returnDate === "") {
            country.returnDate = "";
        }


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
            }

        });

        $scope.country = {};
    }


}]);
