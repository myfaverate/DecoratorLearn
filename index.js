console.info("Hello World")
const DecoratorClass = (targetClass) => {
    targetClass.test = "12345"
}
@DecoratorClass
class Test{}
console.log(Test.test)
const WithSpeak = (targetClass) => {
    const prototype = targetClass.prototype
    prototype.speak = function() {
        console.log("我能说 =>", this.language)
    }
}
@WithSpeak
class Student{
    constructor(language){
        this.language = language
    }
}
const student1 = new Student(language = "中文")
const student2 = new Student(language = "英文")
student1.speak()
student2.speak()