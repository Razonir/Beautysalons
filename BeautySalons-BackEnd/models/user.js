const db = require('../util/database');

module.exports = class User {
  constructor(userid,userrole,userfname,userlname,useremail, userpassword,usergender,usercity,useraddress,userphone,createdate,lastlogindate) {
    this.userid = userid;
    this.userrole = userrole;
    this.userfname = userfname;
    this.userlname = userlname;
    this.useremail = useremail;
    this.userpassword = userpassword;
    this.usergender = usergender;
    this.usercity = usercity;
    this.useraddress = useraddress;
    this.userphone = userphone;
    this.createdate = createdate;
    this.lastlogindate = lastlogindate;
  }

  static findByEmail(useremail) {
    return db.execute('SELECT * FROM users WHERE useremail = ?', [useremail]);
  }

  static fetchAllUsers() {
    return db.execute('SELECT * FROM users');
  }

  static getUserById(uid) {
    return db.execute('SELECT * FROM users WHERE userid = ?', [uid]);
  }

  static deleteUserById(userid) {
    return db.execute('DELETE FROM users WHERE userid = ?',[userid]);
  }

  static createUser(users) {
    return db.execute(
      'INSERT INTO users (userfname,userlname, useremail, userpassword,usergender,usercity,useraddress,userphone) VALUES (?, ?, ?, ? ,? ,?,?,?)',
      [users.userfname, users.userlname, users.useremail, users.userpassword,users.usergender,users.usercity,users.useraddress,users.userphone]
    );
  }
};