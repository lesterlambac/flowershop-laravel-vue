export default class Category {

  constructor ({id, name}) {
    this.id = id;
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getCategory() {

    if (typeof (this.category) == 'object') {
      return this.category.name;
    }

    return this.category;
  }

  getCategoryId() {

    if (typeof (this.category) == 'object') {
      return this.category.id;
    }

    return this.category;
  }

  hasId() {
    return this.id ? true : false;
  }

}

console.log('I was called');