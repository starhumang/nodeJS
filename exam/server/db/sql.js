module.exports={
    boardList : `SELECT B.NO, B.TITLE, B.WRITER, B.CREATED_DATE
                     FROM T_BOARD_BOARD b;`,
    boardInfo : `SELECT B.NO, B.CREATED_DATE, B.WRITER, B.TITLE, B.CONTENT
                FROM T_BOARD_BOARD b;`,
    replyList : `SELECT CONTENT, WRITER, UPDATED_DATE FROM t_comment_board;`,

    boardInsert : `INSERT INTO T_BOARD_BOARD SET TITLE=?, WRITER=?, CONTENT=?, CREATED_DATE=?;`
    
}