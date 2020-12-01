/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "ThatOneCalculator",
  title: "Hi, I'm Kainoa Kanter, aka ThatOneCalculator!",
  subTitle: emoji("A 17 year old fullstack developer from Cali!"),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/thatonecalculator",
  gmail: "kainoakanter@gmail.com",
  twitter: "https://twitter.com/that1calculator"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji("🤖  Develop bots on Discord, such as LiterallyNoBot"),
    emoji("👨‍💻 Design programs and CLI applications"),
	emoji("🌹  Work on design projects like Rosé Pine"),
    emoji("🐧 Use Arch Linux. That's a personality traight, right?")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
    	skillName: "C & C++",
    	fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Haxe",
      fontAwesomeClassname: "fas fa-expand-arrows-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
    	skillName: "Bash/Shell",
    	fontAwesomeClassname: "fas fa-terminal"
    },
    {
    	skillName: "Git",
    	fontAwesomeClassname: "fab fa-git"
    },
    {
    	skillName: "Linux",
    	fontAwesomeClassname: "fab fa-linux"
    },
    {
    	skillName: "Discord API",
    	fontAwesomeClassname: "fab fa-discord"
    },
    {
    	skillName: "Web Dev",
    	fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Servers",
      fontAwesomeClassname: "fas fa-server"
    },
    {
    	skillName: "Machine Learning",
    	fontAwesomeClassname: "fas fa-brain"
    },
    {
    	skillName: "Classical Piano",
    	fontAwesomeClassname: "fas fa-music"
    },
    {
    	skillName: "Photography",
    	fontAwesomeClassname: "fas fa-camera-retro"
    },
    {
    	skillName: "Twitch Streaming",
    	fontAwesomeClassname: "fab fa-twitch"
    },
    {
    	skillName: "Build Computers",
    	fontAwesomeClassname: "fas fa-desktop"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Palisades Charter High School",
      logo: require("./assets/images/paliLogo.png"),
      duration: "Class of 2021",
      descBullets: [
      	"Recieved black ribbon for Computer Science",
        "3.5 weighted GPA",
        "On the Academic Decathalon team",
        "Mostly self-taught in terms of programming"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Traditional Programming",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "30%"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "thatonecalculator", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "What I'm mostly known for online!",
  projects: [
    {
      image: "https://cdn.discordapp.com/attachments/671117418189422594/782503006649712640/ezgif-7-fe73570e1200.png",
      link: "https://top.gg/bot/646156214237003777"
    },
    {
      image: "https://cdn.discordapp.com/attachments/767172954395639811/782465215937118258/ezgif-7-baa8a1c8af25.png",
      link: "https://github.com/rose-pine"
    },
    /*
    {
    	image: "https://cdn.discordapp.com/attachments/671117418189422594/783059543298932767/Screenshot-20201130115755-538x410.png",
    	link: "https://github.com/thatonecalculator/nerdfetch"
    }
    */
  ]
};

// Your Achievement Section Include Your Certification Talks and More

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

const achievementSection = {

  title: emoji("My non-coding activities"),
  achievementsCards: [
    {
      title: "Photography",
      subtitle: "I've always had a passion for photography, and was one of the twelve selected for advanced photography in Palisades Charter High School out of hundreds of applicants.",
      image: "https://github.com/rose-pine/wallpapers/blob/main/" + ["flower", "beachhouses", "pointoverhead", "roses", "rocks", "seals", "seaslug", "field"].sample() + ".jpg?raw=true",
      footerLink: [
        { name: "Rosé Pine collection", url: "https://github.com/rose-pine/wallpapers" },
        { name: "AP Collection (soon)", url: "" },
      ]
    },
    {
      title: "Piano",
      subtitle: "I've played classical piano at the Colburn School for eleven years, and have performed in multiple Friday Night recitals.",
      image: "https://i.imgur.com/GYWeHih.png",
      footerLink: [
      	{ name: "Latest Performance", url: "https://www.youtube.com/watch?v=w3ueMqP8Yac" },
      	{ name: "Historic Playlist (soon)", url: "" }
      	]
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+1 (310) 909-9767",
  email_address: "kainoakanter@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName : "that1calculator"//Replace "twitter" with your twitter username without @
};

export{ 
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	openSource,
	bigProjects,
	workExperiences,
	achievementSection,
	talkSection,
	contactInfo,
	twitterDetails
};
