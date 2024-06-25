// import React from 'react'

// function Invoice() {
//   return (
//     <div>Invoice</div>
//   )
// }

// export default Invoice

import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Invoice = ({ sellerDetails, billingDetails, shippingDetails, orderDetails, invoiceDetails, items }) => {
  const calculateNetAmount = (unitPrice, quantity, discount) => unitPrice * quantity - discount;

  const calculateTax = (netAmount, taxRate) => netAmount * (taxRate / 100);

  const generatePDF = () => {
    const input = document.getElementById('invoice');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('invoice.pdf');
    });
  };

  const totalNetAmount = items.reduce((acc, item) => acc + calculateNetAmount(item.unitPrice, item.quantity, item.discount), 0);
  const totalTax = items.reduce((acc, item) => acc + calculateTax(calculateNetAmount(item.unitPrice, item.quantity, item.discount), item.taxRate), 0);
  const totalAmount = totalNetAmount + totalTax;

  return (
    <div>
      <div id="invoice">
        <h1>Invoice</h1>
        <div>
          <h2>Seller Details</h2>
          <p>{sellerDetails.name}</p>
          <p>{sellerDetails.address}</p>
          <p>{`${sellerDetails.city}, ${sellerDetails.state}, ${sellerDetails.pincode}`}</p>
          <p>PAN: {sellerDetails.pan}</p>
          <p>GST: {sellerDetails.gst}</p>
        </div>

        <div>
          <h2>Billing Details</h2>
          <p>{billingDetails.name}</p>
          <p>{billingDetails.address}</p>
          <p>{`${billingDetails.city}, ${billingDetails.state}, ${billingDetails.pincode}`}</p>
          <p>State Code: {billingDetails.code}</p>
        </div>

        <div>
          <h2>Shipping Details</h2>
          <p>{shippingDetails.name}</p>
          <p>{shippingDetails.address}</p>
          <p>{`${shippingDetails.city}, ${shippingDetails.state}, ${shippingDetails.pincode}`}</p>
          <p>State Code: {shippingDetails.code}</p>
        </div>

        <div>
          <h2>Order Details</h2>
          <p>Order No.: {orderDetails.orderNo}</p>
          <p>Order Date: {orderDetails.orderDate}</p>
        </div>

        <div>
          <h2>Invoice Details</h2>
          <p>Invoice No.: {invoiceDetails.invoiceNo}</p>
          <p>Invoice Date: {invoiceDetails.invoiceDate}</p>
          <p>Reverse Charge: {invoiceDetails.reverseCharge ? 'Yes' : 'No'}</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Net Amount</th>
              <th>Tax Rate</th>
              <th>Tax Amount</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const netAmount = calculateNetAmount(item.unitPrice, item.quantity, item.discount);
              const taxAmount = calculateTax(netAmount, item.taxRate);
              const totalAmount = netAmount + taxAmount;

              return (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.quantity}</td>
                  <td>{item.discount}</td>
                  <td>{netAmount}</td>
                  <td>{item.taxRate}%</td>
                  <td>{taxAmount}</td>
                  <td>{totalAmount}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="4">Total</td>
              <td>{totalNetAmount}</td>
              <td></td>
              <td>{totalTax}</td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </table>

        <div>
          <h2>Amount in Words: {/* Convert totalAmount to words */}</h2>
        </div>

        <div>
          <p>For {sellerDetails.name}</p>
          <p><img src="signature.png" alt="Signature" /></p>
          <p>Authorised Signatory</p>
        </div>
      </div>

      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default Invoice;

