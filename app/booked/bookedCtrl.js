angular.module('devmtnTravel').controller('bookedCtrl',
    function ($scope, mainSrvc, $stateParams) {

        mainSrvc.getPackageInfo().then(response => {
            $scope.allPackages = response.data
            console.log(response.data)


            $scope.package = response.data.filter((item) => {

                return item.id == $stateParams.id

            })[0]
            console.log($stateParams)
        })

    })