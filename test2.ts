class Course {
  name: string;
  maxStudents: number;
  startDate: string;
  endDate: string;
  students: Student[];

  constructor(
    name: string,
    maxStudents: number,
    startDate: string,
    endDate: string
    
  ) {
    this.name = name;
    this.maxStudents = maxStudents;
    this.startDate = startDate;
    this.endDate = endDate;
    this.students = [];
  }

  addStudent(student: Student) {
    this.students.push(student);
    student.addCourse(this);
  }
  addCourseInstudents(student: Student) {
    this.students.push(student);
    
  }
  removeStudent(student: Student) {
    let index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
    }
    student.removeCourse(this);
  }
  removeCourseFromStudents(student: Student) {
    let index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }

  
}

class Student{
  name: string; 
  email: string;
  courses: Course[];
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.courses = [];
  }
  addCourse(course: Course) {
    this.courses.push(course);
    //course.addCourseInstudents(this);
  }
  addStudentInCourse(course: Course) {
    this.courses.push(course);
    course.addCourseInstudents(this);
  }
  removeCourse(course: Course) {
    let index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
  removeStudentFromCourse(course: Course) {
    let index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
    course.removeCourseFromStudents(this);
  }
}

const course1 = new Course("JavaScript", 10, "2020-01-01", "2020-01-31");
const course2 = new Course("TypeScript", 10, "2020-01-01", "2020-01-31");
const course3 = new Course("React", 10, "2020-01-01", "2020-01-31");

const student1 = new Student("John", "abc@gmail.com");
const student2 = new Student("Jane", "def@gmail.com");
const student3 = new Student("Jack", "zaq@gmail.com");


student1.addStudentInCourse(course1);
course2.addStudent(student1);


console.log(student1);
