angular.module('BlaBlaCar')

    .controller('ResultsCtrl', function($scope,$state, $stateParams, $firebaseArray) {

        var searchParams = angular.fromJson($stateParams.searchValue);

        var itemsRef = new Firebase("https://project-8473858751034565420.firebaseio.com/trajets");

        if(!searchParams || searchParams === undefined) {
            $scope.results = $firebaseArray(itemsRef);
        } else {

            var results = Array();

            var query = itemsRef.on('value', function (snapshot) {
                var listTrajets = snapshot.val();

                angular.forEach(listTrajets, function (trajet){
                    if (trajet.pointArrivePays == searchParams.arrivePays
                        &&trajet.pointArriveVille == searchParams.arriveVille
                        && trajet.pointDepartPays == searchParams.departPays
                        && trajet.pointDepartVille == searchParams.departVille) {

                        results.push(trajet);
                    }
                })
            });

            $scope.results = results;
         
        }
    });

