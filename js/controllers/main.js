(function() {

        angular
        .module("mainApp")
        .controller("mainCtrl", mainController);

    mainController.$inject = ['newsMetrics'];


    function mainController(newsMetrics){
      var vm = this;

      vm.activateNewsroom = activateNewsroom;

      function activateNewsroom(){
        newsMetrics.changeState("news", true);
      }

    }
})();
