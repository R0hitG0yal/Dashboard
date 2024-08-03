import { FaStar } from "react-icons/fa";
export const Feedback = () => {
  const data: {
    img: string;
    name: string;
    rating: number;
    comment: string;
  }[] = [
    {
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Jenny Wilson",
      rating: 4,
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Dianne Russell",
      rating: 5,
      comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    },
    {
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Devon Lane",
      rating: 4,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque eligendi adipisci quos cupiditate beatae iste dignissimos vero eum, explicabo iure porro facilis unde officia nostrum accusamus? Officia, ad quidem.",
    },
  ];

  return (
    <>
      <div className="font-bold text-[1.1em] pb-2">Customer's Feedback</div>
      <div className="overflow-hidden ">
        {data.map((item) => {
          return (
            <div>
              <div className="flex items-center">
                <img
                  className="w-6 h-6 my-2 rounded-full"
                  src={item.img}
                  alt={item.name}
                ></img>
                <span className="ml-1 text-[.75em]">{item.name}</span>
              </div>
              <div className="flex mb-1 ">
                {[...Array(5)].map((_, i) => {
                  return (
                    <FaStar
                      key={i}
                      className={i < item.rating ? "fill-yellow-400" : ""}
                      size={12}
                    />
                  );
                })}
              </div>
              <div className="mb-2 text-[.5em] font-extralight text-gray-400">
                {item.comment}
              </div>
              <hr className="border-gray-800"></hr>
            </div>
          );
        })}
      </div>
    </>
  );
};
