(function() {


      angular
      .module("mainApp")
      .factory("newsMetrics", NewsMetrics);

      function NewsMetrics() {
            var newsObj = {
                  newsroomActive : false,
                  changeState: changeState,
            };
            return newsObj;

      function changeState(metric, state){
            if(metric === "news"){
                  newsObj.newsroomActive = state;
            }
            else {
                  return false;
            }
      }
   }
})();
