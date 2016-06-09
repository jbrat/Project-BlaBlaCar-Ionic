angular.module('BlaBlaCar')

    // Factory pour Firebase
    .factory("Trajets", function($firebaseArray) {
        var itemsRef = new Firebase("https://project-8473858751034565420.firebaseio.com/trajets");
        return $firebaseArray(itemsRef);
    })

    .controller('TrajetCtrl', function($scope, $ionicHistory, ionicDatePicker, ionicTimePicker, Trajets) {

        $scope.TrajetFactory = Trajets;

        // Object Trajet
        $scope.trajet = {
            pointDepart: '',
            pointDepartVille:'',
            pointDepartPays:'',
            pointArrive: '',
            pointArriveVille:'',
            pointArrivePays:'',
            allerRetour: '',
            fumeur: '',
            dateDepart: '',
            timeDepart : '',
            dateEnd: '',
            timeEnd: ''
        }


        //------------------- DatePicker ------------------//
        var datePickerTrajetStart = {
            callback: function (val) {  //Mandatory
                dateStart = new Date(val);
                $scope.trajet.dateDepart = dateStart.getFullYear()+"/"+dateStart.getMonth()+"/"+dateStart.getDay();

            },
            from: new Date(2012, 1, 1),
            to: new Date(2016, 10, 30),
            inputDate: new Date(),
            mondayFirst: true,
            disableWeekdays: [0],
            closeOnSelect: false,
            templateType: 'popup'
        };

        var datePickerTrajetEnd = {
            callback: function(val) {
                dateEnd = new Date(val);
                $scope.trajet.dateEnd = dateEnd.getFullYear()+"/"+dateEnd.getMonth()+"/"+dateEnd.getDay();
            },
            from: new Date(2012, 1, 1),
            to: new Date(2016, 10, 30),
            inputDate: new Date(),
            mondayFirst: true,
            disableWeekdays: [0],
            closeOnSelect: false,
            templateType: 'popup'
        }

        $scope.openDatePickerStart = function(){
            ionicDatePicker.openDatePicker(datePickerTrajetStart);
        };

        $scope.openDatePickerEnd = function(){
            ionicDatePicker.openDatePicker(datePickerTrajetEnd);
        };

        //--------------------------------------------------------------------//

        //--------------------------TimePicker ------------------------------//
        var timePickerTrajetStart = {
            callback: function (val) {      //Mandatory
                if (typeof (val) === 'undefined') {
                    alert("Veuillez sélectionner l'heure");
                } else {
                    var selectedTime = new Date(val * 1000);
                    $scope.trajet.timeDepart = selectedTime.getUTCHours()+":"+selectedTime.getUTCMinutes();
                }
            },
            inputTime: 50400,
            format: 12,
            step: 15,
            setLabel: 'Set2'
        };

        // TimePicker
        var timePickerTrajetEnd = {
            callback: function (val) {      //Mandatory
                if (typeof (val) === 'undefined') {
                    alert("Veuillez sélectionner l'heure");
                } else {
                    var selectedTime = new Date(val * 1000);
                    $scope.trajet.timeEnd = selectedTime.getUTCHours()+":"+selectedTime.getUTCMinutes();
                }
            },

            inputTime: 50400,
            format: 12,
            step: 15,
            setLabel: 'Set2'
        };

        $scope.openTimePickerStart = function() {
            ionicTimePicker.openTimePicker(timePickerTrajetStart);
        }

        $scope.openTimePickerEnd = function() {
            ionicTimePicker.openTimePicker(timePickerTrajetEnd);
        }
        //--------------------------------------------------------------------//

        // Method to post a trajet
        $scope.postTrajet = function() {
            var regex = new RegExp("[ ,]+", "g");
            var depart = $scope.trajet.pointDepart.split(regex);
            var arrive = $scope.trajet.pointArrive.split(regex);

            $scope.trajet.pointDepartVille = depart[0];
            $scope.trajet.pointDepartPays = depart[1];
            $scope.trajet.pointArriveVille = arrive[0];
            $scope.trajet.pointArrivePays = arrive[1];

            // Persist the object on firebase
            $scope.TrajetFactory.$add($scope.trajet);

            $state.go('app.home');

        }
    });

