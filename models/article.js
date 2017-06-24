import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create a Schema 
const Article = new Schema({
  title: {
    type: string
  },
  date: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String,
  }
});

// Create the Model
const Article = mongoose.model("Article", Article);

// Export it for use elsewhere
module.exports = Article;