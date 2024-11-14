import React from "react";

const transactionData = [
  {
    id: 1,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 2,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 3,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 4,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 5,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 6,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 7,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 8,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 9,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 10,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
];
const BRecentTransactions = () => {
  return (
    <div>
      <h3 className="font-bold text-2xl pt-6 pb-4">Recent Transactions</h3>
      <table className="w-full text-left">
        <thead className="text-sm">
          <th>Amount</th>
          <th>Customer</th>
          <th>Reference</th>
          <th>Channel</th>
          <th>Paid</th>
        </thead>
        <tbody className="text-black text-xs">
          {transactionData.map((data) => (
            <tr key={data.id} className="border-b">
              <td className="p-2">{data.amount}</td>
              <td>{data.customer}</td>
              <td>{data.reference}</td>
              <td>{data.channel}</td>
              <td>{data.paid_on}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BRecentTransactions;
