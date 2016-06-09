angular.module('BlaBlaCar.controllers', [])
    .controller('TrajetCtrl', function($scope, ionicDatePicker, ionicTimePicker) {

        var datePickerTrajet = {
            callback: function (val) {  //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
            },
            disabledDates: [            //Optional
                new Date(2016, 2, 16),
                new Date(2015, 3, 16),
                new Date(2015, 4, 16),
                new Date(2015, 5, 16),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-16-2016"),
                new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1), //Optional
            to: new Date(2016, 10, 30), //Optional
            inputDate: new Date(),      //Optional
            mondayFirst: true,          //Optional
            disableWeekdays: [0],       //Optional
            closeOnSelect: false,       //Optional
            templateType: 'popup'       //Optional
        };

        $scope.openDatePicker = function(){
            ionicDatePicker.openDatePicker(datePickerTrajet);
        };

        var timePickerTrajet = {
            callback: function (val) {      //Mandatory
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    var selectedTime = new Date(val * 1000);
                    console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
                }
            },
            inputTime: 50400,   //Optional
            format: 12,         //Optional
            step: 15,           //Optional
            setLabel: 'Set2'    //Optional
        };
        $scope.openTimePicker = function() {
            ionicTimePicker.openTimePicker(timePickerTrajet);
        }
    });
