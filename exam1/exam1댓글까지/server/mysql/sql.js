module.exports = {
    boardList : `SELECT b.no, b.title, b.writer, b.content, b.created_date, b.updated_date, COUNT(c.no)  as comment
                 FROM t_board_board b LEFT OUTER JOIN t_comment_board c
                                      ON b.no = c.bno                
                GROUP by b.no, b.title, b.writer, b.content, b.created_date, b.updated_date
                ORDER BY b.no`,
    boardInfo : `SELECT no, title, writer, content, created_date, updated_date, (SELECT COUNT(no) FROM t_comment_board WHERE bno = t_board_board.no) as comment
                FROM t_board_board
                WHERE no = ?`    ,//1.
    boardInsert : `INSERT INTO t_board_board SET ? `,//2.
    boardUpdate : `UPDATE t_board_board SET ? WHERE no = ? `,//3.
    bUpdate : `UPDATE t_board_board SET title= ?, wirter =?, content =? WHERE no = ? `,//4.
    //?에 들어가는 정보의 값이 단일값인가, 객체인가, 배열인가?
    // 1. 단일값 2. 객체 3. 배열(객체, 단일값) 4.배열(단일값들, 객체 하나도 없음!!)

    //댓글리스트
    commentList : `SELECT no, writer, content, created_date FROM t_comment_board WHERE bno =100;`
    
}