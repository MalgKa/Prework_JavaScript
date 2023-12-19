class Client {
  constructor(name) {
    this.name = name;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  //to display the client's name in console.table
  getOrdersForTable() {
    return this.orders.map((order) => ({
      "client's name": this.name,
      "order number": order.number,
    }));
  }
}

class Order {
  constructor(client, number) {
    this.client = client;
    this.number = number;
  }
}

const client1 = new Client("John");
const order1 = new Order(client1, "1");
const order2 = new Order(client1, "2");

client1.addOrder(order1);
client1.addOrder(order2);

console.table(client1.orders); // nie wyświetli w tabeli imienia klienta

console.table(client1.getOrdersForTable());

const client2 = new Client("Ewa");
const order3 = new Order(client2, "3");
const order4 = new Order(client2, "4");

client2.addOrder(order3);
client2.addOrder(order4);

console.table(client2.getOrdersForTable());
