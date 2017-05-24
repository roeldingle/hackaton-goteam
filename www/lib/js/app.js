ons.bootstrap()
  .controller('SplitterController', function($scope) {
    $scope.member = [];    

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

      console.log(data);
      $scope.detail = data;
    }
  })

  .controller("dashboardController", function($scope) {
      var prices = {data: [60.5, 55.7]}; // Static data works

        $scope.chartConfig = {
            options : {
                chart : {
                    type : 'line'
                }
            },
            series : [ prices ],
            title : {
                text : 'Monthly Book Prices'
            },

            loading : false
        }

   })
  .controller("myTeamController", function($scope, $http) {

    // $http.get('http://straightarrowasset.com/test/api-test.php').
    // success(function(data) {
    //   $scope.team = data;
      
    // }).
    // error(function(data, status) {
    //   $scope.team = data;
    // });

    $scope.team = team;


    this.test = function(){
      alert(33);
    }
  })
  .controller("notificationController", function($scope, $http) {

    $scope.notification = notification;



    this.test = function(){
      alert(33);
    };
  });



