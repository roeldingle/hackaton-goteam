var goteam = ons.bootstrap('goteam',[]);

goteam.controller("SplitterController", function(){
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


    this.showPicker = function() {
        var options = {
            date: new Date(),
            mode: 'date'
        };

        function onSuccess(date) {
            alert('Selected date: ' + date);
        }

        function onError(error) { // Android only
            alert('Error: ' + error);
        }

        //var datePicker = new DatePicker();
        datePicker.show(options, onSuccess, onError);
    }

    this.test = function(){
      alert(33);
    }

});



goteam.controller("myTeamController", function($scope, $http) {

    $http.get('../test-api.php').
    success(function(data) {
      $scope.team = eval(data);
    }).
    error(function(data, status) {
      $scope.team = data;
    });


    // this.showPicker = function() {
    //     var options = {
    //         date: new Date(),
    //         mode: 'date'
    //     };

    //     function onSuccess(date) {
    //         alert('Selected date: ' + date);
    //     }

    //     function onError(error) { // Android only
    //         alert('Error: ' + error);
    //     }

    //     //var datePicker = new DatePicker();
    //     datePicker.show(options, onSuccess, onError);
    // }

    $scope.test = function(){
      alert(33);
    }


 });

