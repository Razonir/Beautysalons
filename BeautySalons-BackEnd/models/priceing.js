const db = require('../util/database');

module.exports = class Priceing {
  constructor(pid,bid,service,price){
    this.pid = pid;
    this.bid = bid;
    this.service = service;
    this.price = price;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM priceing');
  }

  static getByBid(bid){
    return db.execute('SELECT * FROM priceing WHERE bid = ?',[bid]);
  }

  static deletePriceByPid(pid) {
    return db.execute('DELETE FROM priceing WHERE pid = ?',[pid]);
  }
  static createPrice(price) {
    return db.execute(
      'insert into priceing (bid,service,price) VALUES (?,?,?)',
      [price.bid,price.service,price.price]
      );
  }

  static updatePrice(price) {
    return db.execute(
      'update priceing set service = ? , price = ? where pid = ?',
      [price.service,price.price,price.pid]
      );
  }
};
