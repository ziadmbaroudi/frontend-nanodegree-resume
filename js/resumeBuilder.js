/*
This is empty on purpose! Your code to build the resume will go here.
 */


//Biographic information
var skillsArr = ["Python", "Javascript", "Lua", "Teaching", "Training"];
var bio = {
	"name": "Ziad Baroudi",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "+61 418 406 789",
		"email": "ziadmbaroudi@gmail.com",
		"github": "ziadmbaroudi",
		"twitter": "@ramblingteacher",
		"blog": "ramblingteacher.com",
		"location": "Melbourne, Australia"
	}, 
	"biopic": "images/my_photo.jpg",
	"welcomeMessage": "Hi, My name is Ziad and I am interested in independent, part-time work " +
	            "as a front-end web developer. Please take a look at my skills below",
    "skills": skillsArr
};

// Display function for the bio object
bio.display = function(){
	// Overall information
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	// Adding skills
	if (bio.skills.length !== 0) {
		$("#header").append(HTMLskillsStart);
		for (var item in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[item]));
		}
	}
	// Add my welcome message
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

}; // display function

var work = {
	"jobs": [
	{
		"employer": "Avila College",
		"dates": "2004 - present",
		"title": "Teacher / Curriculum leader, Technologies",
		"location": "Mount Waverley, Melbourne, VIC, AUS",
		"url": "http://www.avilacollege.vic.edu.au/",
		"description": "Teaching mathematics and computing at an all-girls, 7-12 school. " +
		"Leading the Technologies department which includes Design Tech (Textiles), Food Tech " +
		"and Digital Tech. I also promote and run co-curricular programming activities for students."
	},
	{
		"employer": "Holmesglen College",
		"dates": "2003",
		"title": "sessional teacher",
		"location": "Holmesglen, Melbourne, VIC, AUS",
		"url": "https://www.holmesglen.edu.au/",
		"description": "Taught subjects contributing to the degree of Bachelor of Information " +
		"Technology granted by Charles Sturt University."
	},
	{
		"employer": "PACT Global contracting to Sun Microsystems",
		"dates": "2001 - 2002",
		"title": "Trainer, Java Programming Language",
		"location": "South Melbourne, VIC, AUS",
		"url": "",
		"description": "•	Taught the Java Programming Language to groups of adults from the IT industry"
	},
	{
		"employer": "Nokia",
		"dates": "1995 - 2001",
		"title": "Software Engineer",
		"location": "Heidelberg, Melbourne, VIC, AUS",
		"url": "www.nokia.com",
		"description": "Participated in product development teams. Conducted product " +
		"testing in both Melbourne and Finland. Functioned as an internal auditor."
	}
	]
};
// Add employment information
work.display = function() {
	if (work.jobs.length !== 0) {
		$("#workExperience").append(HTMLworkStart);
		for (var pos in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[pos].employer);
			formattedEmployer = formattedEmployer.replace("#", work.jobs[pos].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[pos].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%",  work.jobs[pos].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[pos].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}; // display function


// Last educational institution I attended
var education = {
	"schools": [
	{
		"name": "University of Melbourne",
		"location": "Parkville, Melbourne, VIC, AUS",
		"qualification": "Master of Education",
		"majors": [],
		"dates": "2005 - 2009",
		"url": "http://www.unimelb.edu.au/"
	},
	{
		"name": "Australian Catholic University",
		"location": "Melbourne, VIC, AUS",
		"qualification": "Graduate Diploma of Education",
		"majors": ["Mathematics", "Information Technology"],
		"dates": "2003",
		"url": "http://www.acu.edu.au/"
	},
	{
		"name": "La Trobe University",
		"location": "Bundoora, Melbourne, VIC, AUS",
		"qualification": "Bachelor of Computer Systems Engineering",
		"majors": ["Computer Science", "Software Engineering"],
		"dates": "1991 - 1995",
		"url": "http://www.latrobe.edu.au/"
	}
	],
	"onlineCourses": [
	{
		"title": "Introduction to Computer Science",
		"school": "Udacity.com",
		"date": "April, 2013",
		"url": "https://www.udacity.com/courses/cs101",
	}
	]
};

// Display function for education object
education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (var school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].qualification);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		if (education.schools[school].majors.length > 0) {
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", "));
			$(".education-entry:last").append(formattedMajors);
		}
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	for (var course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDate);
	}
};

// Projects I have worked on
var projects = {
	"projects": [
	{
		"title": "Researching formative assessments in mathematics education",
		"dates": "2009",
		"description": "This was a Master's research project in which I collected " +
		"qualitative and quantitative data on the potential for formative " +
		"assessment instruments to replace summative ones.",
		"images": [],
		"url": "https://github.com/ziadmbaroudi/Formative-Assessment"	
	},
	{
		"title" : "Lockspin APP",
		"dates": "2012",
		"description": "I led an after school APP development group. Together, we " +
		"built an APP that's on Google Play and the App Store called Lockspin. The " +
		"motivation was to help incoming students to our school learn to use the " +
		"combination locks we employ at our school. We created art work, coded and " +
		"even composed the music. It was awesome!",
		"images": ["images/lockspin_mainscrn.png",
		           "images/lockspin_numbers.png",
		           "images/lockspin_challenge.png",
		           "images/lockspin_credits.png"],
		"url": "https://vimeo.com/58011595"
	}

	]

}
// Adding a display function (method?) to projects
projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (var prj in projects.projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[prj].title);
		formattedTitle = formattedTitle.replace("#", projects.projects[prj].url);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[prj].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[prj].description);
		$(".project-entry:last").append(formattedDescription);
		for (var i in projects.projects[prj].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[prj].images[i]);
			$(".project-entry:last").append(formattedImage);

		}	
	}
};

// Publications
var publications = {
	"publication": [
	{
	 	"author": "Baroudi, Z.",
	 	"year": 2015,
	 	"title": "Thinking Visually Aboout Algebra",
	 	"journal": "The Australian Mathematics Teacher",
	 	"volume": 71,
	 	"issue": 1,
	 	"pages": "18-23",
	 	"url": "http://www.aamt.edu.au/content/download/33049/467366/file/amt71_1_baroudi.pdf"
	 },
	 {
	 	"author": "Baroudi, Z. and Francis, S.",
	 	"year": 2013,
	 	"title": "Like Scratch? Step up to BYOB.",
	 	"journal": "Vinculum",
	 	"volume": 50,
	 	"issue": 2,
	 	"pages": "14-16",
	 	"url": ""
	 },
	 {
	 	"author": "Baroudi, Z.",
	 	"year": 2006,
	 	"title": "Easing Students' Transition to Algebra.",
	 	"journal": "The Australian Mathematics Teacher",
	 	"volume": 62,
	 	"issue": 2,
	 	"pages": "28-33",
	 	"url": "http://files.eric.ed.gov/fulltext/EJ743595.pdf"
	 }
	]
};

publications.display = function() {
	$("#publications").append(HTMLpublStart);
	for (var article in publications.publication) {
		var formattedAuthor = HTMLpublAuthor.replace("%data%", publications.publication[article].author);
		$(".publ-entry:last").append(formattedAuthor);
		var formattedYear = HTMLpublYear.replace("%data%", publications.publication[article].year);
		$(".publ-entry:last").append(formattedYear);
		var formattedTitle = HTMLpublTitle.replace("%data%", publications.publication[article].title);
		formattedTitle = formattedTitle.replace("#", publications.publication[article].url);
		$(".publ-entry:last").append(formattedTitle);
		var formattedJournal = HTMLpublJournal.replace("%data%", publications.publication[article].journal);
		$(".publ-entry:last").append(formattedJournal);
		var formattedVolume = HTMLvolume.replace("%data%", publications.publication[article].volume);
		$(".publ-entry:last").append(formattedVolume);
		var formattedIssue = HTMLissue.replace("%data%", publications.publication[article].issue);
		$(".publ-entry:last").append(formattedIssue);
		var formattedPages = HTMLpages.replace("%data%", publications.publication[article].pages);
		$(".publ-entry:last").append(formattedPages);
	}
};	

// Internationalize my name
function inName() {
	var interName = bio.name.trim();
    var names = interName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    interName = names.join(" ");
    return interName;
}

$("#main").append(internationalizeButton);



education.display();
work.display();
bio.display();
projects.display();
publications.display();

// Map of places I have worked
$("#mapDiv").append(googleMap);
initializeMap();

