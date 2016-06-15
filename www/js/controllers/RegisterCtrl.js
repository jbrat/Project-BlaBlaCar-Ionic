angular.module('BlaBlaCar')
    .controller('RegisterCtrl', function($scope) {

        $scope.registerInforations = {
            'username': '',
            'email': '',
            'password1': '',
            'password2': ''
        };
    });
