# Homework
---

### Object-Oriented Interview Questions

- Give three different examples of inheritance. Write these class definitions 
and their inheritance relationships out in Ruby.
- What is the difference (in your own words) between a local variable, an 
instance variable, and class variable.
- What is encapsulation?
- What is a `private` method?
- What is the difference between a class and an object? What is the difference 
between a class and an instance?
- What is "duck typing" in Ruby?
- Describe "Polymorphism"
- What is a "base class", "sub-class", and "super class"?

class Person
     attr_accessor :name
     attr_reader :age, :count

     @@count = 0

 def initialize(name:, age:)
     @name = name
     @age = age

     @@count += 1
 end

 def to_s
     "name: #{@name}, age: #{@age}"
 end

 def old_enough_to_vote?
      @age > 17
 end

 def self.instances
      @@count
 end

end

class LoudPerson < Person
    def say_name
        puts "HEY YOU, MY NAME IS #{@name.upcase}!"
    end

    def print_something
        thing = 'something'
        puts thing
    end
end

neil = LoudPerson.new(name: 'Neil', age: 22)
felicia = LoudPerson.new(name: 'Felicia', age: 22)

puts neil.name
puts felicia.name

puts neil.say_name
puts felicia.say_name

puts Person.instances

person = Person.new(age: 32, name: 'Felicia')

puts Person.instances

puts person

young_person = Person.new(age: 15, name: 'Bob')

puts Person.instances

[person, young_person].each do |person|
    puts !!young_person.old_enough_to_vote?
end


#local variables are only called inside of a scope, instance variables are stuck with an object instance, but can be available in any method, and a class variables are shared among different instances in a class.

#encapsulation is a way to hide the data from the outside definition.

# you can only call a private method within the same class

#an object is a member of an instance, instances are variables that exist within a class and classes must be aware of its parent properties.

#duck typing is not necessarily in a particular order in order to envoke a function.

#the ability to use the same interface while using different types of data

#a super class is a parent class, a subclass is a child class, and a bass class is another way to refer to the superclass.
