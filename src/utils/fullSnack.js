class FullStackDev {
  constructor(student, stack) {
    this.student = student
    this.stack = stack
    this.skills = []
  }

  learn(skill) {
    this.skills.push(skill)
  }

  bootcamp(stack) {
    stack.map(tech => this.learn(tech))
  }

  demo() {
    console.log(this.skills)
  }
}

const me = new FullStackDev("me", ["MongoDb", "Express", "React", "Node"])
me.bootcamp(me.stack)
me.demo()
