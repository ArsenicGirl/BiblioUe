import Lending from './lending';

class Penalty extends Lending {
    constructor(lend_id, lend_startDate, lend_returnDate, lend_state, lend_nRenovations, book_id, stud_id, pena_id, pena_dateOfIssue, pena_paymentDate, pena_Value, pena_state) {
      super(lend_id, lend_startDate, lend_returnDate, lend_state, lend_nRenovations, book_id, stud_id);
      this.pena_id = pena_id;
      this.pena_dateOfIssue = pena_dateOfIssue;
      this.pena_paymentDate = pena_paymentDate;
      this.pena_Value = pena_Value;
      this.pena_state = pena_state;
    }
  
    pay() {
      this.pena_state = 0; // Se asume que 0 representa "pagada"
    }
  
    increase() {
      this.pena_state = 1; // Se asume que 1 representa "pendiente"
    }
  
    setDateOfIssue(pena_dateOfIssue) {
      this.pena_dateOfIssue = pena_dateOfIssue;
    }
  
    setPaymentDate(pena_paymentDate) {
      this.pena_paymentDate = pena_paymentDate;
    }
  
    setValue(pena_Value) {
      this.pena_Value = pena_Value;
    }
  
    getDateOfIssue() {
      return this.pena_dateOfIssue;
    }
  
    getPaymentDate() {
      return this.pena_paymentDate;
    }
  
    getValue() {
      return this.pena_Value;
    }
  }
  