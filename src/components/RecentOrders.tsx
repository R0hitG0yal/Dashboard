export const RecentOrders = () => {
  const data: {
    avatar: string;
    name: string;
    order: string;
    amount: number;
    status: string;
  }[] = [
    {
      avatar:
        "data:image/jpeg;base64,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",
      name: "Wade Warren",
      order: "432324",
      amount: 124.0,
      status: "Delivered",
    },
    {
      avatar:
        "data:image/jpeg;base64,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",
      name: "Jane Cooper",
      order: "312322",
      amount: 365.02,
      status: "Delivered",
    },
    {
      avatar:
        "https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
      name: "Guy Hawkins",
      order: "667645",
      amount: 45.88,
      status: "Cancelled",
    },
    {
      avatar:
        "https://t3.ftcdn.net/jpg/02/30/40/74/240_F_230407433_uF2iM6tUs1Sge24999FWdo241t8FMBi7.jpg",
      name: "Kristin Watson",
      order: "909098",
      amount: 68,
      status: "Pending",
    },
    {
      avatar:
        "https://t4.ftcdn.net/jpg/01/51/99/39/240_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg",
      name: "Cody Fisher",
      order: "134253",
      amount: 545,
      status: "Delivered",
    },
    {
      avatar:
        "https://t3.ftcdn.net/jpg/02/86/10/38/240_F_286103895_q9ROWVtMyGy5pVNhvhvLUBm3VpmfmmYS.jpg",
      name: "Cody Sanchez",
      order: "768687",
      amount: 128,
      status: "Delivered",
    },
  ];

  return (
    <>
      <div className="font-bold text-xl">Recent Orders</div>
      <table className="table-auto w-full h-fit">
        <thead>
          <tr className="h-8 border-b-2 border-slate-600 border-opacity-25">
            <th className="text-[.65em] text-left pl-4">Customer</th>
            <th className="text-[.65em] text-left pl-7">Order No</th>
            <th className="text-[.65em] text-left">Amount</th>
            <th className="text-[.65em] text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => {
            return (
              <tr className="text-gray-200 text-[.7rem] md:text-[.85rem] lg:text-[1rem] relative border-b-2 border-slate-600 border-opacity-25 h-12 text-sm font-light">
                <td className="flex">
                  <img
                    className="absolute top-2 left-3 h-8 w-8 aspect-auto rounded-full"
                    src={order.avatar}
                    alt={order.name}
                  ></img>
                  <span className="absolute top-3 left-10 ml-2">
                    {order.name}
                  </span>
                </td>
                <td className="pl-8">{order.order}</td>
                <td>
                  $ {Math.trunc(order.amount)}.{(order.amount * 100) % 100}
                </td>
                <td>
                  <span
                    className={
                      order.status == "Delivered"
                        ? "p-1 px-2 rounded-2xl bg-green-800 opacity-45 font-semibold text-green-400"
                        : "p-1 px-2 rounded-2xl bg-red-400 brightness-20 opacity-40 text-red-800 font-semibold"
                    }
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
