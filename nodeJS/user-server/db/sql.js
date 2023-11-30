module.exports={
    userList : `SELECT * FROM t_users`,
    userInfo : `SELECT * FROM t_users WHERE user_no =?`,
    userInsert : `INSERT INTO t_users SET ?`,
    userUpdate : `UPDATE t_users set ? WHERE user_no =?`,
    userDelete : `DELETE FROM t_users WHERE user_no =?`
}