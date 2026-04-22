//complete this code
class Person {
	var name;
	var age;
	constructor(name, age)
	{
		this.name = name;
		this.age = age;
	}
	set set_age(age)
	{
		this.age = age;
	}
	get get_name 
	{
		return name;
	}
}

class Student extends Person {
	constructor(name, age)
	{
		super(name, age);
	}
	void study()
	{
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age)
	{
		super(name, age);
	}
	void teach()
	{
		console.log(`${name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
