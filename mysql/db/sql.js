module.exports ={
    //set 뒤에 들어가는 것은 객체타입, ?가 두개이상 있는것은 배열타입, where절 다음 들어가는 하나의 ?는 그냥 데이터
    customerList : `SELECT * FROM customers`,
    customerInfo : `SELECT * FROM customers WHERE id = ?`,
    customerInsert : `INSERT INTO customers SET ?`,//SET절을 INSERT에서도 사용가능
    customerUpdate : `UPDATE customers SET ? WHERE id = ?`,
    customerDelete : `DELETE FROM customers WHERE id = ?`
    //?하나에 객체하나
}