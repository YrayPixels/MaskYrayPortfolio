$(document).ready(
    function () {
        // open and close folder
        function openClose(className) {
            let name = "." + className
            if ($("." + className).find("i").hasClass("fa-solid fa-folder")) {
                $(className).find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
                $(className).addClass("foldercss");
            } else {
                $(className).find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
                $(className).removeClass("foldercss");
            };
        }

        $(".GalleryFold").click(
            openClose(".GalleryFold")
        )
    })


