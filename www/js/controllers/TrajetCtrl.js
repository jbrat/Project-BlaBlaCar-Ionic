angular.module('BlaBlaCar')

    // Factory pour Firebase
    .factory("Trajets", function($firebaseArray) {
        var itemsRef = new Firebase("https://project-8473858751034565420.firebaseio.com/trajets");
        return $firebaseArray(itemsRef);
    })

    .controller('TrajetCtrl', function($scope, $state, ionicDatePicker, ionicTimePicker, Trajets, $cordovaGeolocation) {

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
                $scope.trajet.dateDepart = dateStart.getDay()+"/"+dateStart.getMonth()+"/"+dateStart.getFullYear();

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
                $scope.trajet.dateEnd = dateEnd.getDay()+"/"+dateEnd.getMonth()+"/"+dateEnd.getFullYear();
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

        //--------------- Geolocalisation City start -------------------------//
        $scope.geolocCity = function() {
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    console.log(position);
                    var lat  = position.coords.latitude;
                    var long = position.coords.longitude;

                    
                }, function(err) {
                    alert("Erreur lors de la récupération de votre position actuelle");
                });

        };



        // Method to post a trajet
        $scope.postTrajet = function(isValid) {

            if (!isValid) {
                alert('Vous devez remplir tous les champs');
                return;
            }
            var regex = new RegExp("[ ,]+", "g");
            var depart = $scope.trajet.pointDepart.split(regex);
            var arrive = $scope.trajet.pointArrive.split(regex);

            $scope.trajet.pointDepartVille = depart[0];
            $scope.trajet.pointDepartPays = depart[1];
            $scope.trajet.pointArriveVille = arrive[0];
            $scope.trajet.pointArrivePays = arrive[1];

            // Persist the object on firebase
            $scope.TrajetFactory.$add($scope.trajet);

            alert('Trajet ajouté avec succès');
            $state.go('app.home');

        }
    });

