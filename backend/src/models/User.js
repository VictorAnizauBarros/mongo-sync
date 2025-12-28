class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.createdAt = new Date();
  }
}

module.exports = User;
