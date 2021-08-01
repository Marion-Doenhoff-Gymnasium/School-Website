function mobile_resize() {
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i) 
            || navigator.userAgent.match(/iPad/i) 
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
        var element = document.getElementById("mobile_navbar")
        element.setAttribute("style", "display: inline;")
    }
    else {
        var element = document.getElementById("desktop_navbar")
        element.setAttribute("style", "display: inline;")
    }
}

function small_window_size_resize() {
/* Kommt noch */
}