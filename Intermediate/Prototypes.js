//IMP

function Person(name, id) {
  this.name = name;
  this.id = id;
}

Person.prototype.Person2 = function()
{
    console.log("My name is "+this.name+" and my id is "+this.id);
}

let obj = new Person("Samruddhi",24);

obj.Person2();
