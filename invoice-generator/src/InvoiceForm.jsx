// import React from 'react'

// function InvoiceForm() {
//   return (
//     <div>InvoiceForm</div>
//   )
// }


// export default InvoiceForm


import React, { useState } from 'react';
import Invoice from './Invoice';

const InvoiceForm = () => {
  const [sellerDetails, setSellerDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    pan: '',
    gst: ''
  });

  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    code: ''
  });

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    code: ''
  });

  const [orderDetails, setOrderDetails] = useState({
    orderNo: '',
    orderDate: ''
  });

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNo: '',
    invoiceDate: '',
    reverseCharge: false
  });

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    description: '',
    unitPrice: 0,
    quantity: 1,
    discount: 0,
    taxRate: 18
  });

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({
      description: '',
      unitPrice: 0,
      quantity: 1,
      discount: 0,
      taxRate: 18
    });
  };

  const handleGenerateInvoice = () => {
    // Validate inputs
    // Compute derived values
    // Show Invoice component
  };

  return (
    <div>
      <h1>Invoice Generator</h1>
      <form>
        <h2>Seller Details</h2>
        <input type="text" placeholder="Name" value={sellerDetails.name} onChange={e => setSellerDetails({ ...sellerDetails, name: e.target.value })} />
        <input type="text" placeholder="Address" value={sellerDetails.address} onChange={e => setSellerDetails({ ...sellerDetails, address: e.target.value })} />
        <input type="text" placeholder="City" value={sellerDetails.city} onChange={e => setSellerDetails({ ...sellerDetails, city: e.target.value })} />
        <input type="text" placeholder="State" value={sellerDetails.state} onChange={e => setSellerDetails({ ...sellerDetails, state: e.target.value })} />
        <input type="text" placeholder="Pincode" value={sellerDetails.pincode} onChange={e => setSellerDetails({ ...sellerDetails, pincode: e.target.value })} />
        <input type="text" placeholder="PAN" value={sellerDetails.pan} onChange={e => setSellerDetails({ ...sellerDetails, pan: e.target.value })} />
        <input type="text" placeholder="GST" value={sellerDetails.gst} onChange={e => setSellerDetails({ ...sellerDetails, gst: e.target.value })} />

        <h2>Billing Details</h2>
        <input type="text" placeholder="Name" value={billingDetails.name} onChange={e => setBillingDetails({ ...billingDetails, name: e.target.value })} />
        <input type="text" placeholder="Address" value={billingDetails.address} onChange={e => setBillingDetails({ ...billingDetails, address: e.target.value })} />
        <input type="text" placeholder="City" value={billingDetails.city} onChange={e => setBillingDetails({ ...billingDetails, city: e.target.value })} />
        <input type="text" placeholder="State" value={billingDetails.state} onChange={e => setBillingDetails({ ...billingDetails, state: e.target.value })} />
        <input type="text" placeholder="Pincode" value={billingDetails.pincode} onChange={e => setBillingDetails({ ...billingDetails, pincode: e.target.value })} />
        <input type="text" placeholder="State Code" value={billingDetails.code} onChange={e => setBillingDetails({ ...billingDetails, code: e.target.value })} />

        <h2>Shipping Details</h2>
        <input type="text" placeholder="Name" value={shippingDetails.name} onChange={e => setShippingDetails({ ...shippingDetails, name: e.target.value })} />
        <input type="text" placeholder="Address" value={shippingDetails.address} onChange={e => setShippingDetails({ ...shippingDetails, address: e.target.value })} />
        <input type="text" placeholder="City" value={shippingDetails.city} onChange={e => setShippingDetails({ ...shippingDetails, city: e.target.value })} />
        <input type="text" placeholder="State" value={shippingDetails.state} onChange={e => setShippingDetails({ ...shippingDetails, state: e.target.value })} />
        <input type="text" placeholder="Pincode" value={shippingDetails.pincode} onChange={e => setShippingDetails({ ...shippingDetails, pincode: e.target.value })} />
        <input type="text" placeholder="State Code" value={shippingDetails.code} onChange={e => setShippingDetails({ ...shippingDetails, code: e.target.value })} />

        <h2>Order Details</h2>
        <input type="text" placeholder="Order No." value={orderDetails.orderNo} onChange={e => setOrderDetails({ ...orderDetails, orderNo: e.target.value })} />
        <input type="date" placeholder="Order Date" value={orderDetails.orderDate} onChange={e => setOrderDetails({ ...orderDetails, orderDate: e.target.value })} />

        <h2>Invoice Details</h2>
        <input type="text" placeholder="Invoice No." value={invoiceDetails.invoiceNo} onChange={e => setInvoiceDetails({ ...invoiceDetails, invoiceNo: e.target.value })} />
        <input type="date" placeholder="Invoice Date" value={invoiceDetails.invoiceDate} onChange={e => setInvoiceDetails({ ...invoiceDetails, invoiceDate: e.target.value })} />
        <label>
          Reverse Charge:
          <input type="checkbox" checked={invoiceDetails.reverseCharge} onChange={e => setInvoiceDetails({ ...invoiceDetails, reverseCharge: e.target.checked })} />
        </label>

        <h2>Items</h2>
        <input type="text" placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })} />
        <input type="number" placeholder="Unit Price" value={newItem.unitPrice} onChange={e => setNewItem({ ...newItem, unitPrice: e.target.value })} />
        <input type="number" placeholder="Quantity" value={newItem.quantity} onChange={e => setNewItem({ ...newItem, quantity: e.target.value })} />
        <input type="number" placeholder="Discount" value={newItem.discount} onChange={e => setNewItem({ ...newItem, discount: e.target.value })} />
        <input type="number" placeholder="Tax Rate" value={newItem.taxRate} onChange={e => setNewItem({ ...newItem, taxRate: e.target.value })} />
        <button type="button" onClick={handleAddItem}>Add Item</button>

        <h2>Item List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.description} - {item.unitPrice} x {item.quantity} - {item.discount} = {(item.unitPrice * item.quantity) - item.discount}
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleGenerateInvoice}>Generate Invoice</button>
      </form>
      <Invoice
        sellerDetails={sellerDetails}
        billingDetails={billingDetails}
        shippingDetails={shippingDetails}
        orderDetails={orderDetails}
        invoiceDetails={invoiceDetails}
        items={items}
      />
    </div>
  );
};

export default InvoiceForm;
