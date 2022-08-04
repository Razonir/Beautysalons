const db = require('../util/database');

module.exports = class Photos {
  constructor(pid,bid,url,createdate){
    this.pid = pid;
    this.bid = bid;
    this.url =url;
    this.createdate = createdate;
  }


  static getByBid(bid){
    return db.execute('SELECT * FROM photos WHERE bid = ?',[bid]);
  }

  static deleteById(pid) {
    return db.execute('DELETE FROM photos WHERE pid = ?',[pid]);
  }

  static createPhoto(photo) {
    let date = new Date();
    return db.execute(
      'insert into photos (bid,url,createdate) VALUES (?,?,?)',
      [photo.bid,photo.url,date]
      );
  36  }
};
