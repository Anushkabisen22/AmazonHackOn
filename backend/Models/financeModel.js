const mongoose = require('mongoose');
const { Schema } = mongoose;

const budgetSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  monthlyBudgets: {
    month: {
      type: String,
      required: true // e.g.,"2024-06" for June 2024
    },
    budget: {
      type: Number,
      required: true
    }
  },
  categoryBudgets: [{
    category: {
      type: String,
      required: true
    },
    budget: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Budget', budgetSchema);
