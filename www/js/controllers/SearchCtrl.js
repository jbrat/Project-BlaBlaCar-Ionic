angular.module('BlaBlaCar')
    .controller('SearchCtrl', function($scope, $state, ionicDatePicker) {
        $scope.search = {
            depart:'',
            departVille:'',
            departPays:'',
            arrive:'',
            arriveVille:'',
            arrivePays:'',
            date:''
        };

        //------------------- DatePicker ------------------//
        var datePickerVoyage = {
            callback: function (val) {  //Mandatory
                dateVoyage = new Date(val);
                $scope.search.date = dateVoyage.getDay()+"/"+dateVoyage.getMonth()+"/"+dateVoyage.getFullYear();

            },
            from: new Date(2012, 1, 1),
            to: new Date(2016, 10, 30),
            inputDate: new Date(),
            mondayFirst: true,
            disableWeekdays: [0],
            closeOnSelect: false,
            templateType: 'popup'
        };

        $scope.openDatePicker = function(){
            ionicDatePicker.openDatePicker(datePickerVoyage);
        };

        //------------------ Search Form Send --------------//
        $scope.searchAction = function(isValid) {
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

            $state.go('app.results', {searchValue: angular.toJson($scope.search)});
        }
    });
