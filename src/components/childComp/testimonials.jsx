import React from "react";
import { InfiniteMovingCards } from "../ui/animatedTestimonials";
import Person1 from "../../assets/Person1.jpg";
import Person2 from "../../assets/Person2.jpg";
import Person3 from "../../assets/Person3.jpg";
import Person4 from "../../assets/Person4.jpg";
import Person5 from "../../assets/Person5.jpg";
import { FaStar } from "react-icons/fa";
 
export function InfiniteMovingCardsDemo() {
  return (
    <div
    id="testimonials"
    className="h-auto rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden mt-[200px] ">

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    img: Person1,
    quote:
"I've tried many different types of honey, but this one stands out! The rich flavor and smooth texture are simply unmatched. It's perfect for my morning tea and baking recipes.",
    name: "James Turner",
    rating: <FaStar />
  },
  {
    img: Person2,
    quote:
   "This honey is the best I've ever had! It's so pure and natural, you can really taste the difference. I love using it as a natural sweetener for my smoothies and desserts.",
   name: "Sophia Martinez",
   rating: <FaStar />
  },
  {
    img: Person3,
    quote: "I am absolutely hooked on this honey. It's so flavorful and has a wonderful, thick consistency. I've started using it in place of sugar for almost everything!",
    name: "Michael Johnson",
    rating: <FaStar />
  },
  {
    img: Person4,
    quote:
     "I can't get enough of this honey! It's incredibly delicious and has such a lovely, aromatic taste. It's my go-to for adding a touch of sweetness to my yogurt and oatmeal.",
    name: "Olivia Brown",
    rating: <FaStar />
  },
  {
    img: Person5,
    quote:
    "This honey is a game-changer. It's so fresh and tastes amazing. I use it in my tea, on toast, and even as a natural remedy for colds. Highly recommend it!",
    name: "Ethan Wilson",
    rating: <FaStar />
  },
];

export default InfiniteMovingCardsDemo;