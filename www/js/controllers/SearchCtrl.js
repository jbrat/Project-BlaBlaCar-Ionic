angular.module('BlaBlaCar')
// Factory pour Firebase
    .factory("Trajets", function($firebaseArray) {
        var itemsRef = new Firebase("https://project-8473858751034565420.firebaseio.com/trajets");
        return $firebaseArray(itemsRef);
    })

    .controller('SearchCtrl', function($scope, Trajets) {

        $scope.searchFactory = Trajets;

        $scope.search = {
            depart:'',
            departVille:'',
            departPays:'',
            arrive:'',
            arriveVille:'',
            arrivePays:''
        };

        $scope.search = function(isValid) {
            if(!isValid) {
                alert("Vous devez remplir tous les champs de recherche");
                return;
            }

            var regex = new RegExp("[ ,]+", "g");
            var depart = $scope.search.depart.split(regex);
            var arrive = $scope.search.arrive.split(regex);

            $scope.search.departVille = depart[0];
            $scope.search.departPays = depart[1];
            $scope.search.arriveVille = arrive[0];
            $scope.search.arrivePays = arrive[1];

            console.log($scope.searchFactory);
        }
    });
