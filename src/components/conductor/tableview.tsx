import React from "react";

export const TableView = () => {
  const orders = [
    {
      orderNumber: 1,
      numberOfItems: 5,
      pickup: "New York",
      destination: "Los Angeles",
      receiverName: "John Doe",
    },
    {
      orderNumber: 2,
      numberOfItems: 3,
      pickup: "Las Vegas",
      destination: "Los Angeles",
      receiverName: "John",
    },
    // Add more objects as needed
  ];

  const Uporders = [
    {
      orderNumber: 1,
      numberOfItems: 5,
      pickup: "New York",
      destination: "Los Angeles",
      receiverName: "John Doe",
      status: "Pending",
    },
    {
      orderNumber: 2,
      numberOfItems: 3,
      pickup: "Las Vegas",
      destination: "Los Angeles",
      receiverName: "John",
      status: "Pending",
    },
    // Add more objects as needed
  ];

  const handleAccept = (orderNumber: number) => {
    // Implement your logic for accepting the order here
    console.log(`Order ${orderNumber} accepted.`);
  };

  const handleDecline = (orderNumber: number) => {
    // Implement your logic for declining the order here
    console.log(`Order ${orderNumber} declined.`);
  };

  return (
    <>
      <div className="existing">
        <h1 className="my-7 text-center text-4xl text-white ">
          Existing Orders
        </h1>
        <div className="mb-10 flex w-[100vw] justify-center overflow-x-auto ">
          <table className="w-3/4 table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Order Number</th>
                <th className="px-4 py-2">Number of Items</th>
                <th className="px-4 py-2">Pickup</th>
                <th className="px-4 py-2">Destination</th>
                <th className="px-4 py-2">Receiver's Name</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{order.orderNumber}</td>
                  <td className="border px-4 py-2">{order.numberOfItems}</td>
                  <td className="border px-4 py-2">{order.pickup}</td>
                  <td className="border px-4 py-2">{order.destination}</td>
                  <td className="border px-4 py-2">{order.receiverName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="upcoming">
        <h1 className="my-7 text-center text-4xl text-white ">
          Upcoming Orders
        </h1>
        <div className="mb-10 flex w-[100vw] justify-center overflow-x-auto ">
          <table className="w-3/4 table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Order Number</th>
                <th className="px-4 py-2">Number of Items</th>
                <th className="px-4 py-2">Pickup</th>
                <th className="px-4 py-2">Destination</th>
                <th className="px-4 py-2">Receiver's Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Uporders.map((order, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{order.orderNumber}</td>
                  <td className="border px-4 py-2">{order.numberOfItems}</td>
                  <td className="border px-4 py-2">{order.pickup}</td>
                  <td className="border px-4 py-2">{order.destination}</td>
                  <td className="border px-4 py-2">{order.receiverName}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                      onClick={() => handleAccept(order.orderNumber)}
                    >
                      Accept
                    </button>
                    <button
                      className="ml-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                      onClick={() => handleDecline(order.orderNumber)}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableView;
