angular.module('devmtnTravel').controller('packagesCtrl',
    function ($scope, $stateParams, mainSrvc) {
        mainSrvc.getPackageInfo().then(response => {
            $scope.allPackages = response.data

            $scope.package = response.data.filter((item) => {

                return item.country === $stateParams.country

            })
            console.log($scope.package)
        })
    })