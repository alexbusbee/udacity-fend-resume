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
    "welcomeMessage": "Welcome! My name is Alex Busbee and I'm a web designer and front-end developer.",
    "skills": [
        "Karate",
        "Flight",
        "Super strength",
        "Invisibility",
    ],
    "biopic": "http://placehold.it/200x200",
};

var education = {
    "schools": [{
        "name": "John F. Kennedy High School",
        "location": "Cedar Rapids, IA",
        "degree": "High School",
        "majors": ["College Prep"],
        "dates": "2011",
        "url": "http://kenn.cr.k12.ia.us/"
    }, {
        "name": "Marquette University",
        "location": "Milwaukee, WI",
        "degree": "Bachelor of Arts",
        "majors": ["Journalism"],
        "dates": "2015",
        "url": "http://www.marquette.edu/"
    }],
    "onlineCourses": [{
        "title": "Learn to code",
        "school": "Codecademy",
        "dates": "2013",
        "url": "https://www.codecademy.com/#!/exercises/0"
    }, {
        "title": "Front-end web developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
};

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
};

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
};

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

    $("#header").append(HTMLskillsStart);
    for (var i = 0; bio.skills.length > i; i++) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation, formattedTwitter);
};

work.display = function() {
    for (var i = 0; work.jobs.length > i; i++) {
        if (work.jobs.length > 0) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
                formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title),
                formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);
        }
    }
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        if (projects.projects.length > 0) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title),
                formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates),
                formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                if (projects.projects[i].images.length > 0) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        if (education.schools.length > 0) {
            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name),
                formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree),
                formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major),
                formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates),
                formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedLocation);
        }
    }

    $('.location-text:last').append(HTMLonlineClasses);

    for (i = 0; i < education.onlineCourses.length; i++) {
        if (education.onlineCourses.length > 0) {

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title),
                formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
                formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates),
                formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedURL);
        }
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