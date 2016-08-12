javascript: ( function () { 
    if (!($ = window.jQuery)) { 
        script = document.createElement('script');
        script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
        script.onload=insertMaterialCss;
        document.body.appendChild(script);
    } else {
        insertMaterialCss();
    }
    
    function insertMaterialCss() {
        var cssCode = document.createElement('link');
        cssCode.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css');
        cssCode.setAttribute('rel' , 'stylesheet');
        var head = document.getElementsByTagName("head")[0];
        head.insertBefore(cssCode, head.firstChild);
        var jsCode = document.createElement('script'); 
        jsCode.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js');                  
        document.body.appendChild(jsCode);
    }
}());

