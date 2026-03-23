const crypto = require("crypto");

const generated_signature = crypto
.createHmac("sha256", RAZORPAY_SECRET)
.update(order_id + "|" + payment_id)
.digest("hex");

if(generated_signature === razorpay_signature){
   payment verified
}