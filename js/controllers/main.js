(function() {

        angular
        .module("mainApp")
        .controller("mainCtrl", mainController);

    // mainController.$inject = ['newsMetrics'];


    function mainController(){
      var vm = this;

    //   vm.activateNewsroom = activateNewsroom;
      vm.example = " hello";

    //   function activateNewsroom(){
    //     newsMetrics.changeState("news", true);
    //   }

    }
})();
