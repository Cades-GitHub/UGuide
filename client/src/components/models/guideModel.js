// guideModel.js

class Guide {
    constructor(title, content, author, date) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.date = date || new Date(); // If date is not provided, default to current date
    }
  }
  
  export default Guide;
  