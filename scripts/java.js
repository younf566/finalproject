document.addEventListener("DOMContentLoaded", function () {
    var loadingScreen = document.querySelector(".loading-Screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }
});

  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }

  
