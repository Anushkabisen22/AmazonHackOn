const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
    },
//   month: {
//     type: String,
//     required: true
//   },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
paymentSchema.pre('save', function (next) {
  const date = new Date(this.date);
  const formattedDate = String(date.getUTCMonth() + 1).padStart(2, '0') + '-' + String(date.getUTCDate()).padStart(2, '0') + '-' + date.getUTCFullYear();
  this.date = formattedDate;
//   const month = date.getUTCFullYear() + '-' + String(date.getUTCMonth() + 1).padStart(2, '0');
//   this.month = month;
  next();
});
module.exports = mongoose.model('Payment', paymentSchema);
