angular.module('BlaBlaCar')
    .controller('TrajetCtrl', function($scope, ionicDatePicker, ionicTimePicker) {

        //------------------- DatePicker ------------------//
        var datePickerTrajetStart = {
            callback: function (val) {  //Mandatory
                $scope.dateDepart = new Date(val);
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
                $scope.dateEnd = new Date(val);
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
                    $scope.timeDepart = selectedTime.getUTCHours()+":"+selectedTime.getUTCMinutes();
                }
            },
            inputTime: 50400,   //Optional
            format: 12,         //Optional
            step: 15,           //Optional
            setLabel: 'Set2'    //Optional
        };

        // TimePicker
        var timePickerTrajetEnd = {
            callback: function (val) {      //Mandatory
                if (typeof (val) === 'undefined') {
                    alert("Veuillez sélectionner l'heure");
                } else {
                    var selectedTime = new Date(val * 1000);
                    $scope.timeEnd = selectedTime.getUTCHours()+":"+selectedTime.getUTCMinutes();
                }
            },

            inputTime: 50400,   //Optional
            format: 12,         //Optional
            step: 15,           //Optional
            setLabel: 'Set2'    //Optional
        };

        $scope.openTimePickerStart = function() {
            ionicTimePicker.openTimePicker(timePickerTrajetStart);
        }

        $scope.openTimePickerEnd = function() {
            ionicTimePicker.openTimePicker(timePickerTrajetEnd);
        }
        //--------------------------------------------------------------------//


        $scope.postTrajet = function() {
            
        }


    });
