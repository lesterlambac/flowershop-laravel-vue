export default class Product {

  constructor ({name, description, price, category}) {
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

}

console.log('I was called');