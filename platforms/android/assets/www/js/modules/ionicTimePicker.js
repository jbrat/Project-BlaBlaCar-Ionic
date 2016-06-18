// Ionic TimePicker plugin

angular.module('ionicTimePicker', ['ionic', 'ionic-timepicker'])
    .config(function (ionicTimePickerProvider) {
        var timePickerObj = {
            inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
            format: 12,
            step: 15,
            setLabel: 'Set',
            closeLabel: 'Close'
        };
        ionicTimePickerProvider.configTimePicker(timePickerObj);
    });
