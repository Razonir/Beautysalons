const db = require('../util/database');

module.exports = class Business {
  constructor(bid,userid,bname,bdescriptions,bdescriptionl,bgender,barea,bcity,baddress,bphone,bsubject,bhour,bplan,bvisibility,blikes,bviews,createdate,lastupdate) {
    this.bid = bid;
    this.userid = userid;
    this.bname = bname;
    this.bdescriptions = bdescriptions;
    this.bdescriptionl = bdescriptionl;
    this.bgender = bgender;
    this.barea = barea;
    this.bcity = bcity;
    this.baddress = baddress;
    this.bphone = bphone;
    this.bsubject = bsubject;
    this.bhour = bhour;
    this.bplan = bplan;
    this.bvisibility = bvisibility;
    this.blikes = blikes;
    this.bviews = bviews;
    this.createdate = createdate;
    this.lastupdate = lastupdate;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM Business');
  }

  static findById(bid) {
    return db.execute('SELECT * FROM Business WHERE bid = ?', [bid]);
  }

  static visibleture(bid) {
    return db.execute('update Business set bvisibility="t" WHERE bid = ?', [bid]);
  }
  static visiblefalse(bid) {
    return db.execute('update Business set bvisibility="f" WHERE bid = ?', [bid]);
  }

  static createBusiness(business) {
    var like = 0;
    var view = 0;
    
    return db.execute(
      'insert into Business (userid,bname,bdescriptions,bdescriptionl,bgender,barea,bcity,baddress,bphone,bsubject,bhour,bplan,blikes,bviews) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [business.userid,business.bname,business.bdescriptions,business.bdescriptionl,business.bgender,business.barea,business.bcity,business.baddress,business.bphone,business.bsubject,business.bhour,business.bplan,like,view]
    );
  }
};