import React from 'react'

export const TableView = () => {
  
    const orders = [
        { orderNumber: 1, numberOfItems: 5, pickup: 'New York', destination: 'Los Angeles', receiverName: 'John Doe' },
        { orderNumber: 2, numberOfItems: 3, pickup: 'Las Vegas', destination: 'Los Angeles', receiverName: 'John' }
        // Add more objects as needed
      ];

      const Uporders = [
        { orderNumber: 1, numberOfItems: 5, pickup: 'New York', destination: 'Los Angeles', receiverName: 'John Doe', status: 'Pending' },
        { orderNumber: 2, numberOfItems: 3, pickup: 'Las Vegas', destination: 'Los Angeles', receiverName: 'John', status: 'Pending' }
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
    
      return (<>
      <div className="existing">
        <h1 className="text-4xl text-center my-7 text-white ">Existing Orders</h1>
        <div className="overflow-x-auto w-[100vw] flex justify-center mb-10 ">
          <table className="table-auto w-3/4 border-collapse">
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
        <h1 className="text-4xl text-center my-7 text-white ">Upcoming Orders</h1>
        <div className="overflow-x-auto w-[100vw] flex justify-center mb-10 ">
          <table className="table-auto w-3/4 border-collapse">
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
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAccept(order.orderNumber)}>
                  Accept
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDecline(order.orderNumber)}>
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

 
