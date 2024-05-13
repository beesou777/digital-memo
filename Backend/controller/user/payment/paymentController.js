const axios = require("axios");
const Order = require("../../../model/orderModel");

exports.initiateKhaltiPayment = async (req, res) => {
  const { orderId, amount } = req.body;
  if (!orderId || !amount) {
    return res.status(400).json({
      message: "Please provide orderId, amount",
    });
  }

  const data = {
    return_url: "http://localhost:4000/api/payment/success",
    purchase_order_id: orderId,
    amount: amount,
    purchase_order_name: "orderName_" + orderId,
    website_url: "http://localhost:4000/",
  };
  const response = await axios.post(
    "https://a.khalti.com/api/v2/epayment/initiate/",
    data,
    {
      headers: {
        Authorization: " key 65556f38eece4e1bb1d0052deaea0e93",
      },
    }
  );
  console.log(response);
  let order = await Order.findById(orderId);
  order.paymentDetails.pidx = response.data.pidx;

  await order.save();
  res.redirect(response.data.payment_url);
};

exports.verifyPidx = async (req, res) => {
  const pidx = req.query.pidx;

  const response = await axios.post(
    "https://a.khalti.com/api/v2/epayment/lookup/",
    { pidx },
    {
      headers: {
        Authorization: " key 65556f38eece4e1bb1d0052deaea0e93",
      },
    }
  );

  if (response.data.status == "Completed") {
    //database ma modification
    let order = await Order.find({ "paymentDetails.pidx": pidx });
    order[0].paymentDetails.method = "khalti";
    order[0].paymentDetails.status = "paid";
    await order[0].save();

    // notify to frontend
    res.redirect("http://localhost:4000");
  } else {
    //notify error to frontend
    res.redirect("http://localhost:4000/errorPage");
  }
};
