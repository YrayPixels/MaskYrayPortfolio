
$(document).ready(function () {
    $(function () {
        $("#tabs").tabs()
        // $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    });
    $(function () {
        $("#curricu").tabs()
    });
    $(function () {
        $("#GalleryWorks").tabs()
    });


    $(".skillsetFolder").click(function () {
        skillset();
        $(".SkillSetF").toggle(700, function () {
            $(".GalleryF , .CurriculumF").hide();
        })
        if ($(".skillsetFolder").find("i").hasClass("fa-solid fa-folder")) {
            $(".skillsetFolder").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".skillsetFolder").addClass("foldercss");
        } else {
            $(".skillsetFolder").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".skillsetFolder").removeClass("foldercss");
        };
    })


    $(".CurriculumFold").click(function () {
        curriculum();
        $(".CurriculumF").toggle(700, function () {
            $(".SkillSetF , .GalleryF").hide();
        })
        if ($(".CurriculumFold").find("i").hasClass("fa-solid fa-folder")) {
            $(".CurriculumFold").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".CurriculumFold").addClass("foldercss");
        } else {
            $(".CurriculumFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".CurriculumFold").removeClass("foldercss");
        };
    })
    $(".GalleryFold").click(function () {
        projects();
        $(".GalleryF").toggle(700, function () {
            $(".SkillSetF , .CurriculumF").hide();
        })
        $(".portfoliodiv").show(500);
        if ($(".GalleryFold").find("i").hasClass("fa-solid fa-folder")) {
            $(".GalleryFold").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".GalleryFold").addClass("foldercss");
        } else {
            $(".GalleryFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".GalleryFold").removeClass("foldercss");
        };
    })
    $(".ReviewsFold").click(function () {
        if ($(".ReviewsFold").find("i").hasClass("fa-solid fa-folder")) {
            $(".ReviewsFold").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".ReviewsFold").addClass("foldercss");
        } else {
            $(".ReviewsFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".ReviewsFold").removeClass("foldercss");
        };
    })
    function skillset() {
        $(".SkillSet").toggle(700, function () {
            $(".GalleryFold , .CurriculumFold").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".GalleryFold, .CurriculumFold").removeClass("foldercss");
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



    $(".softskills").click(function () {
        if ($(".softskills").find("i").hasClass("fa-solid fa-folder")) {
            $(".softskills").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".softskills").addClass("foldercss");
        } else {
            $(".softskills").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".softskills").removeClass("foldercss");
        };
    })
    $(".frontendSt").click(function () {
        if ($(".frontendSt").find("i").hasClass("fa-solid fa-folder")) {
            $(".frontendSt").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".frontendSt").addClass("foldercss");
        } else {
            $(".frontendSt").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".frontendSt").removeClass("foldercss");
        };
    })
    $(".backendSt").click(function () {
        if ($(".backendSt").find("i").hasClass("fa-solid fa-folder")) {
            $(".backendSt").find("i").removeClass("fa-solid fa-folder").addClass("fa-regular fa-folder-open");
            $(".backendSt").addClass("foldercss");
        } else {
            $(".backendSt").find("i").removeClass("fa-regular fa-folder-open").addClass("fa-solid fa-folder");
            $(".backendSt").removeClass("foldercss");
        };
    })

}) 