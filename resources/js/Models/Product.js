export default class Product {

  constructor ({id, name, description, price, category}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setdescription(description) {
    return this.description = description;
  }

  getdescription() {
    return this.description;
  }

  setPrice(price) {
    return this.price = price;
  }

  getPrice() {
    return this.price;
  }

  setCategory(category) {
    return this.category = category;
  }

  getCategory() {

    if (typeof (this.category) == 'object') {
      return this.category.name;
    }

    return this.category;
  }

  hasId() {
    return this.id ? true : false;
  }

}

console.log('I was called');