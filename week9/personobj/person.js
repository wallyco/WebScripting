class Person {
    constructor(first, last, course, section, role) {
        this.firstName = first;
        this.lastName = last;
        this.course = course;
        this.section = section;
        this.role = role;
        this.toString = function () {
            return this.firstName + " " + this.lastName + " has a role of "
                + this.role + " in " + this.course + " section " + this.section;
        };
    }
}

function showObj(){
    txtFirstName = document.getElementById("txtFirstName").value;
    txtLastName = document.getElementById("txtLastName").value;
    txtCourse = document.getElementById("txtCourse").value;
    txtSection = document.getElementById("txtSectionNumber").value;
    txtRole = document.getElementById("txtRole").value;
    const personObj = new Person(txtFirstName, txtLastName, txtCourse, txtSection, txtRole);
    document.getElementById("txtShowPerson").innerHTML = personObj.toString();
}

document.getElementById("showObj").addEventListener("click", showObj);
