 (()=>{
   window.pAsyncInit = function() {
       PDK.init({
           appId: '4930913319035879965', // Change this
           cookie: true
       });
   };

   (function(d, s, id){
       var js, pjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//assets.pinterest.com/sdk/sdk.js";
       pjs.parentNode.insertBefore(js, pjs);
   }(document, 'script', 'pinterest-jssdk'));
 })()
