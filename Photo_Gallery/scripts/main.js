var previousImageArrow = document.getElementsByClassName("previous_image")[0];
var nextImageArrow = document.getElementsByClassName("next_image")[0];
var thumbNailLength = document.querySelectorAll(".thumbnail img").length;

var thumbnails = document.querySelectorAll(".thumbnail img");
var target = document.getElementsByClassName("main_image")[0];
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function (event) {
        var currentThumbnail = document.getElementsByClassName("current_image")[0];
        currentThumbnail.classList.remove("current_image");
        
        event.preventDefault();
        target.setAttribute("src", thumbnail.getAttribute("src"));
        
        thumbnail.classList.add("current_image");
        
  });
});


previousImageArrow.addEventListener("click", function () {
    var currentThumbnail = document.getElementsByClassName("current_image")[0];
    for (var i = 0; i < thumbNailLength; i++) {
        if (document.getElementsByClassName("small_images")[i] === currentThumbnail) {
            var previous = i - 1;
            if (previous >= 0) {
                previousThumbnail = document.getElementsByClassName("small_images")[previous];
                target.setAttribute("src", previousThumbnail.getAttribute("src"));
                currentThumbnail.classList.remove("current_image");
                previousThumbnail.classList.add("current_image")
            }
        }
        
    }
})

nextImageArrow.addEventListener("click", function () {
    var currentThumbnail = document.getElementsByClassName("current_image")[0];
    for (var i = 0; i < thumbNailLength; i++) {
        if (document.getElementsByClassName("small_images")[i] === currentThumbnail) {
            var next = i + 1;
            if (next < thumbNailLength) {
                nextThumbnail = document.getElementsByClassName("small_images")[next];
                target.setAttribute("src", nextThumbnail.getAttribute("src"));
                currentThumbnail.classList.remove("current_image");
                nextThumbnail.classList.add("current_image")
            }
        }
        
    }
})
