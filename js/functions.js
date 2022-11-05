$(document).ready(function () {
    function skillset() {
        $(".SkillSet").toggle(700, function () {
            $(".curriculum").hide();
            $(".projects").hide();
            $(".GalleryFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".GalleryFold").removeClass("foldercss");
            $(".CurriculumFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".CurriculumFold").removeClass("foldercss");
        });

    }
    function curriculum() {
        $(".curriculum").toggle(700, function () {

            // $(".SkillSets").hide();
            // $(".projects").hide();
            $(".skillsetFolder").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".skillsetFolder").removeClass("foldercss");
            $(".GalleryFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".GalleryFold").removeClass("foldercss");
        });
    }
    function projects() {
        $(".projects").toggle(700, function () {

            // $(".curriculum").hide();
            // $(".SkillSets").hide();
            $(".skillsetFolder").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".skillsetFolder").removeClass("foldercss");
            $(".CurriculumFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".CurriculumFold").removeClass("foldercss");
        });
    }
})
