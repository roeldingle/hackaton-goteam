var goteam = angular.module("goteam",['onsen.directives']);

goteam.factory ('Data', function(){
    var $data = [];
    $data.chart_type = 'bar';
    $data.team = team;
    $data.notification = notification;
    return $data;
});

goteam.controller('SplitterController', function($scope, Data) {
    $scope.member = [];  
    $scope.user = []; 
    $scope.dialogMessage = '';  

    $scope.chart_type = Data.chart_type;

    this.load = function(page) {
      mySplitter.content.load(page)
        .then(function() {
          mySplitter.left.close();
        });
    };

    this.showDialog = function() {
      if (this.dialog) {
        this.dialog.show();
      } else {
        ons.createDialog('dialog.html', { parentScope: $scope })
          .then(function(dialog) {
            this.dialog = dialog;
            dialog.show();
          }.bind(this));
      }
    }.bind(this);


    /*global page viewing*/
    this.viewDetail = function(page, data){
      this.load(page+'.html');
      $scope.detail = data;
    }

    this.changeChart = function(type){
        $scope.chart_type = type;
    }
});

goteam.controller('loginCtrl', function($scope) {

    $scope.openProtectedPage = function() {
        var options = {
          animation: 'slide', // What animation to use
        };
        setTimeout(function() {
            myNavigator.pushPage('pages/main.html',options);    
        }, 1000);
    }  
});

goteam.controller("dashboardController", function($scope, Data) {

        this.changeChart = function(type){
            alert(type);
        }

});

goteam.controller("myTeamController", function($scope, $http, Data) {

    $scope.team = Data.team;

  });
  goteam.controller("notificationController", function($scope, $http, Data) {

    $scope.notification = Data.notification;

  });