//complete this code
class Person 
	constructor(name, age)
	{
		this._name = name;
		this._age = age;
	}
	set set_age(age)
	{
		this._age = age;
	}
	get get_name() 
	{
		return this._name;
	}
	get get_age()
	{
		return this._age;
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
