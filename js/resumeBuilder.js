/*
This is empty on purpose! Your code to build the resume will go here.
 */


//Biographic information
var skillsArr = ["Python", "Javascript", "Lua", "Teaching", "Training"];
var bio = {
	"name": "Ziad Baroudi",
	"role": "Front End Developer",
	"contacts": {
		"email": "ziadmbaroudi@gmail.com",
		"github": "ziadmbaroudi",
		"twitter": "@ramblingteacher",
		"blog": "ramblingteacher.com",
		"location": "Melbourne, Australia"
	}, 
	"picURL": "images/my_photo.jpg",
	"welcome": "Hi, My name is Ziad and I am interested in independent, part-time work \
	            as a front-end web developer. Please take a look at my skills below",
    "skills": skillsArr
};

var work = {
	"jobs": [
	{
		"employer": "Avila College",
		"dates": "2004 - present",
		"title": "Teacher / Curriculum leader, Technologies",
		"location": "Mount Waverley, Melbourne, VIC, AUS",
		"url": "http://www.avilacollege.vic.edu.au/",
		"description": "Teaching mathematics and computing at an all-girls, 7-12 school. \
		Leading the Technologies department which includes Design Tech (Textiles), Food Tech \
		and Digital Tech. I also promote and run co-curricular programming activities for students."
	},
	{
		"employer": "Holmesglen College",
		"dates": "2003",
		"title": "sessional teacher",
		"location": "Holmesglen, Melbourne, VIC, AUS",
		"url": "https://www.holmesglen.edu.au/",
		"description": "Taught subjects contributing to the degree of Bachelor of Information \
		Technology granted by Charles Sturt University."
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
		"description": "Participated in product development teams. Conducted product \
		testing in both Melbourne and Finland. Functioned as an internal auditor."
	}
	]
};


// Last educational institution I attended
var education = {
	"schools": [
	{
		"name": "University of Melbourne",
		"location": "Parkville, Melbourne, VIC, AUS",
		"qualification": "Master of Education",
		"gradYear": 2009
	},
	{
		"name": "Australian Catholic University",
		"location": "Melbourne, VIC, AUS",
		"qualification": "Graduate Diploma of Education",
		"gradYear": 2003
	},
	{
		"name": "La Trobe University",
		"location": "Bundoora, Melbourne, VIC, AUS",
		"qualification": "Bachelor of Computer Systems Engineering",
		"gradYear": 2005
	}
	]
};

// Projects I have worked on
var projects = {
	"projects": [
	{
		"title": "Researching formative assessments in mathematics education",
		"dates": "2009",
		"description": "This was a Master's research project in which I collected \
		qualitative and quantitative data on the potential for formative \
		assessment instruments to replace summative ones.",
		"images": [],
		"url": "https://github.com/ziadmbaroudi/Formative-Assessment"	
	},
	{
		"title" : "Lockspin APP",
		"dates": "2012",
		"description": "I led an after school APP development group. Together, we \
		built an APP that's on Google Play and the App Store called Lockspin. The \
		motivation was to help incoming students to our school learn to use the \
		combination locks we employ at our school. We created art work, coded and \
		even composed the music. It was awesome!",
		"images": ["images/lockspin_mainscrn.png"
		           , "images/lockspin_numbers.png"
		           , "images/lockspin_challenge.png"
		           ,"images/lockspin_credits.png"],
		"url": "https://vimeo.com/58011595"
	}

	]

}

// Publications
var publications = {
	"articles": [
	{
		"author": "Baroudi, Z.",
		"year": "2015",
		"title": "Thinking Visually About Algebra",
		"journal": "Australian Mathematics Teacher",
		"volume": "71",
		"issue": "1",
		"pages": "18-23"
	}]
}

bio.display = function(){
	// Overall information
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.picURL));

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
	if (bio.skills.length != 0) {
		$("#header").append(HTMLskillsStart);
		for (var item of bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", item));
		}
	}
	// Add my welcome message
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome));

} // display function

// Add employment information
work.display = function() {
	if (work.jobs.length != 0) {
		$("#workExperience").append(HTMLworkStart);
		for (pos in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[pos].employer);
			formattedEmployer = formattedEmployer.replace("#", work.jobs[pos].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[pos].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			var formattedDates = HTMLworkDates.replace("%data%",  work.jobs[pos].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[pos].description)
			$(".work-entry:last").append(formattedDescription);
		}
	}
} // display function

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

// Adding a display function (method?) to projects
projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (prj in projects.projects) {
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

}
work.display();
bio.display();
projects.display();

// Map of places I have worked
$("#mapDiv").append(googleMap);
initializeMap();
//var locations = locationFinder();
//console.log(locations)
