var bio = {
    "name": "Alex",
    "role": "designer",
    "contacts": {
        "mobile": "(###) ###-####",
        "email": "alexander.busbee@marquette.edu",
        "github": "https://github.com/alexbusbee",
        "twitter": "abusbee53",
        "location": "Milwaukee, WI",
    },
    "welcomeMessage": "Welcome! My name is Alex Busbee and I'm a web designer and front-end developer based in Milwaukee, WI.",
    "skills": [
        "Karate",
        "Flight",
        "Super strength",
        "Invisibility",
    ],
    "biopic": "http://placehold.it/200x200",
}

var education = {
    "schools": [{
        "name": "John F. Kennedy High School",
        "location": "Cedar Rapids, IA",
        "degree": "High School",
        "major": "College Prep",
        "dates": "2011",
        "url": "http://kenn.cr.k12.ia.us/"
    }, {
        "name": "Marquette University",
        "location": "Milwaukee, WI",
        "degree": "Bachelor of Arts",
        "major": "Journalism",
        "dates": "2015",
        "url": "http://www.marquette.edu/"
    }],
    "onlineCourses": [{
        "title": "Learn to code",
        "school": "Codecademy",
        "date": "2013",
        "url": "https://www.codecademy.com/#!/exercises/0"
    }, {
        "title": "Front-end web developer",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
}

var work = {
    "jobs": [{
        "employer": "Cousins Subs",
        "title": "Bicycle Delivery Person",
        "location": "Milwaukee, WI",
        "dates": "2014-15",
        "description": "Hard work; little pay"
    }, {
        "employer": "Marquette University",
        "title": "Interactive Designer",
        "location": "Milwaukee, WI",
        "dates": "2015-16",
        "description": "Interesting work; better pay"
    }],
}

var projects = {
    "projects": [{
        "title": "Resume website",
        "dates": "2015-16",
        "description": "Description 1",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ],
    }, {
        "title": "Project 2",
        "dates": "2015-16",
        "description": "Description 2",
        "images": [
            "http://placehold.it/250x250",
            "http://placehold.it/250x250"
        ],
    }],
}

bio.display = function() {
    var name = "Alex",
        role = "Designer";

    var formattedName = HTMLheaderName.replace("%data%", name),
        formattedRole = HTMLheaderRole.replace("%data%", role),
        formattedPic = HTMLbioPic.replace("%data%", bio.biopic),
        formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    };

    for (item in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
            formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    }
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter),
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter)
};

work.display = function() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
            formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
            formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
            formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
            formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    for (school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name),
            formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
            formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major),
            formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajor);;
    }
};

bio.display();
education.display();
work.display();
projects.display();




$(document).click(function(loc) {
    var x = loc.pageX,
        y = loc.pageY;

    logClicks(x, y);
});



$("#mapDiv").append(googleMap);