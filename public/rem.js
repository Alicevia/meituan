~(function(){
   function computed(){
        var html = document.documentElement;
        var desW = 375;
        var width = html.clientWidth;
        if (width>desW) {
            html.style.fontSize='100px';
            return;
        }
        let per = width/desW*100;
        html.style.fontSize = per+'px';
   }
   computed();
   window.addEventListener('resize',computed);
})();