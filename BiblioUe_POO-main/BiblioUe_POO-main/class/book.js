class Book {
  
    constructor(book_id, book_title, book_description, book_author, book_publishYear, book_frontPage, cate_id, libr_id) {
      this.book_id = book_id;
      this.book_title = book_title;
      this.book_description = book_description;
      this.book_author = book_author;
      this.book_publishYear = book_publishYear;
      this.book_frontPage = book_frontPage;
      this.cate_id = cate_id;
      this.libr_id = libr_id;
    }
  
    setTitle(book_title) {
      this.book_title = book_title;
    }
  
    setDescription(book_description) {
      this.book_description = book_description;
    }
  
    setAuthor(book_author) {
      this.book_author = book_author;
    }
  
    setCategory(cate_id) {
      this.cate_id = cate_id;
    }
  
    setBookPublishYear(book_publishYear) {
      this.book_publishYear = book_publishYear;
    }
  
    getTitle() {
      return this.book_title;
    }
  
    getDescription() {
      return this.book_description;
    }
  
    getAuthor() {
      return this.book_author;
    }
  
    getCategory() {
      return this.cate_id;
    }
  
    getBookPublishYear() {
      return this.book_publishYear;
    }
  }
  
  export default Book;
  