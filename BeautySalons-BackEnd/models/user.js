const db = require('../util/database');

module.exports = class User {
  constructor(userid,userrole,userfname,userlname,useremail, userpassword,userphone,createdate,lastlogindate) {
    this.userid = userid;
    this.userrole = userrole;
    this.userfname = userfname;
    this.userlname = userlname;
    this.useremail = useremail;
    this.userpassword = userpassword;
    this.userphone = userphone;
    this.createdate = createdate;
    this.lastlogindate = lastlogindate;
  }

//createUser
//findByEmail
//fetchAllUsers
//getUserById
//deleteUserById
//generatePassword
//resetPassword
//login

static createUser(users) {
  const role = 'user';
  return db.execute(
    'INSERT INTO users (userfname,userlname, userrole, useremail, userpassword,userphone) VALUES (?, ?, ?, ?,?,?)',
    [users.userfname, users.userlname,role ,users.useremail, users.userpassword,users.userphone]
  );
}

static updateUser(users) {
  return db.execute(
    'update users set userfname = ? , userlname = ? , userphone = ? where userid = ?',
     [users.userfname,users.userlname,users.userphone,users.userid]
    );
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

  static resetPasswordByEmail(useremail,userpassword){
    return db.execute('SET SQL_SAFE_UPDATES=0'),
          db.execute('UPDATE users SET userpassword = ? WHERE useremail = ?',[userpassword , useremail]),
          db.execute('SET SQL_SAFE_UPDATES=1');
  }
  
};