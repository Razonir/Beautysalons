const db = require("../util/database");

module.exports = class Business {
  constructor(
    bid,
    uid,
    bname,
    bdescriptions,
    instegram,
    bgender,
    barea,
    bcity,
    baddress,
    bphone,
    bsubject,
    bvisibility,
    blikes,
    bviews,
    createdate,
    lastupdate,
    blogo
  ) {
    this.bid = bid;
    this.uid = uid;
    this.bname = bname;
    this.bdescriptions = bdescriptions;
    this.instegram = instegram;
    this.bgender = bgender;
    this.barea = barea;
    this.bcity = bcity;
    this.baddress = baddress;
    this.bphone = bphone;
    this.bsubject = bsubject;
    this.bvisibility = bvisibility;
    this.blikes = blikes;
    this.bviews = bviews;
    this.createdate = createdate;
    this.lastupdate = lastupdate;
    this.blogo = blogo;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM Business");
  }

  static findById(bid) {
    return db.execute("SELECT * FROM Business WHERE bid = ?", [bid]);
  }

  static deleteById(bid) {
    return (
      db.execute("DELETE FROM priceing WHERE bid = ?", [bid]),
      db.execute("DELETE FROM reviews WHERE bid = ?", [bid]),
      db.execute("DELETE FROM photos WHERE bid = ?", [bid]),
      db.execute("Delete FROM Business WHERE bid = ?", [bid])
    );
  }

  static getBusinessByUserJWT(uid) {
    return db.execute("SELECT * FROM Business WHERE uid = ?", [uid]);
  }

  static visibleture(bid) {
    return db.execute('update Business set bvisibility="t" WHERE bid = ?', [
      bid,
    ]);
  }

  static visiblefalse(bid) {
    return db.execute('update Business set bvisibility="f" WHERE bid = ?', [
      bid,
    ]);
  }

  static addlike(bid) {
    return db.execute("update Business set blikes = blikes+1  WHERE bid = ?", [
      bid,
    ]);
  }

  static addView(bid) {
    return db.execute("update Business set bviews = bviews+1  WHERE bid = ?", [
      bid,
    ]);
  }

  static create(bcreate) {
    return db.execute(
      "INSERT INTO business (uid,bname,bdescriptions,instegram,bgender,barea,bcity,baddress,bphone,bsubject,blogo) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [bcreate.uid, bcreate.bname, bcreate.bdescriptions,bcreate.instegram,bcreate.bgender,bcreate.barea,bcreate.bcity,bcreate.baddress,bcreate.bphone,bcreate.bsubject,bcreate.blogo]
    );
  }

  // static createBusiness(business) {
  //   var like = 0;
  //   var view = 0;
  //   return db.execute(
  //     "INSERT INTO business (uid,bname,bdescriptions,instegram,bgender,barea,bcity,baddress,bphone,bsubject,blikes,bviews,blogo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
  //     [
  //       business.uid,
  //       business.bname,
  //       business.bdescriptions,
  //       business.instegram,
  //       business.bgender,
  //       business.barea,
  //       business.bcity,
  //       business.baddress,
  //       business.bphone,
  //       business.bsubject,
  //       like,
  //       view,
  //       business.blogo,
  //     ]
  //   );
  // }

  static updateById(business) {
    return db.execute(
      "update Business set bname = ? , instegram = ? , bdescriptions = ? ,bgender = ? , barea = ? , bcity = ? , baddress = ?, bphone = ? , bsubject = ? where bid = ?",
      [
        business.bname,
        business.instegram,
        business.bdescriptions,
        business.bgender,
        business.barea,
        business.bcity,
        business.baddress,
        business.bphone,
        business.bsubject,
        business.bid,
      ]
    );
  }
};
