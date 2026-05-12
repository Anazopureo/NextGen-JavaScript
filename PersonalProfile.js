//student info

const student ={
    name : "IyanuOluwa Olanrewaju",
    school : "OAU",
    age : 22,
    course : "Web development",
    hasPaid : true ,
    skills : ["HTML", "CSS", "JavaScirpt"],
}

// Display student profile
console.log( "=== STUDENT PROFILE ===");
console.log("Name:", student.name.toUpperCase());
console.log("School:", student.school);
console.log("Course:", student.course);
console.log("Payment Status:", student.hasPaid ? "Paid": "Unpaid");

// Skills summary
console.log("\n=== SKILLS ===");
console.log("Total Skills:", student.skills.length);
console.log("Skill list:", student.skills.join(", "));

//String method
console.log("\n=== Name Analysis ===");
console.log("First Name:", student.name.slice(0,10) );
console.log("Last Name:", student.name.slice(11,21));
console.log("Name Length:", student.name.length);
console.log("Name Slice:", student.name.slice(0,5).toUpperCase() + " " +student.name.slice(12,17).toUpperCase());

// array method
console.log(student.skills[0]);

// modify
student.skills[2] ="JavaScript";
console.log(student.skills.join(", "));

// template literals
console.log(`\nHello, I am ${student.name}`);
console.log(`I am study in ${student.school}`);


//arithemethic operation
const futureYear = student.age + 5 ;
console.log("\nWhat will be the age after 5 years:", futureYear);


//comparison 
const isNotSchool = student.school === "UI";
const isNotCourse = student.course !== "ICT" ;

console.log("\nIs School UI?", isNotSchool ? "Yes" : "No" );
console.log("Is Course ICT?", student.course ? "No" : "Yes" )

// type of check
const skillsType = typeof student.skills;
console.log("\nThe datatype of skills is,", skillsType);