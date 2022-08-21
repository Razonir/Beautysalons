const db = require('../util/database');

module.exports = class Blog {
  constructor(bid,createdate,blogo,btitle,bsubtitle,bcontent) {
    this.bid = bid;
    this.createdate = createdate;
    this.blogo = blogo;
    this.btitle = btitle;
    this.bsubtitle = bsubtitle;
    this.bcontent = bcontent;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM blogs');
  }

  static findById(bid) {
    return db.execute('SELECT * FROM blogs WHERE bid = ?', [bid]);
  }

  static deleteById(bid) {
    return  db.execute('DELETE FROM blogs WHERE bid = ?',[bid])
  }


  static createBlog(blog) {
    var date = new Date();
    return db.execute(
      'insert into blogs (createdate,blogo,btitle,bsubtitle,bcontent) VALUES (?,?,?,?,?)',
      [date,blog.blogo,blog.btitle,blog.bsubtitle,blog.bcontent]
      );
   }

};