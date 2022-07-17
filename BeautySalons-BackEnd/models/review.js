const db = require('../util/database');

module.exports = class Reviews {
  constructor(reviewid,bid,uid,reviewtext,review){
    this.reviewid = reviewid;
    this.bid = bid;
    this.uid = uid;
    this.reviewtext = reviewtext;
    this.review = review;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM reviews');
  }

  static getByBid(bid){
    return db.execute('SELECT * FROM reviews r,users u WHERE r.bid = ? and r.uid=u.userid',[bid]);
  }

  static deleteReviewById(reviewid) {
    return db.execute('DELETE FROM reviews WHERE reviewid = ?',[reviewid]);
  }

  static createReview(review) {
    var date = new Date();
    var dateString =
    ("0" + date.getUTCDate()).slice(-2) + "/" +
    ("0" + (date.getUTCMonth()+1)).slice(-2) + "/" +
    date.getUTCFullYear();
    
    console.log(dateString);    return db.execute(
      'insert into reviews (bid,uid,reviewtext,review,reviewdate) VALUES (?,?,?,?,?)',
      [review.bid,review.uid,review.reviewtext,review.review,date]
      );
  36  }
};
