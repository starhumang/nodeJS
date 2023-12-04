module.exports={
    friendList : `SELECT * FROM friends`,
    friendInfo : `SELECT * FROM friends WHERE friend_no =?`,
    friendInsert : `INSERT INTO friends SET ?`,
    friendUpdate : `UPDATE friends SET ? WHERE friend_no =?`,
    friendDelete : `DELETE FROM friends WHERE friend_no =?`,
}