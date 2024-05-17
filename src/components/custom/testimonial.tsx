import { TestimonialCardProps } from "@/src/types";
import { TestimonialCard } from "./testimonial-card";
const testimonials: TestimonialCardProps[] = [
  {
    title: "Perfect",
    description:
      "You cannot protect the environment unless you empower people, you inform them, and you help them understand that these resources are their own, that they must protect them.",
    user: "-Wangari Maathai",
  },
  {
    title: "Perfect",
    description:
      "The most important thing about global warming is this. Whether humans are responsible for the bulk of climate change is going to be left to the scientists, but it’s all of our responsibility to leave this planet in better shape for the future generations than we found it",
    user: "-Mike Huckabee",
  },
  {
    title: "Perfect",
    description:
      "Sooner or later, we will have to recognize that the Earth has rights, too, to live without pollution. What mankind must know is that human beings cannot live without Mother Earth, but the planet can live without humans",
    user: "-Evo Morales",
  },
  {
    className: "lg:col-span-2",
    title: "Perfect",
    description:
      "We don’t have to engage in grand, heroic actions to participate in change. Small acts, when multiplied by millions of people, can transform the world.",
    user: "-Howard Zinn",
  },
];

function Testimonials() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 grid-flow-row-dense gap-x-8 gap-y-4 justify-items-stretch mx-auto mt-4">
      {testimonials.map(testimonial => (
        <TestimonialCard props={testimonial} />
      ))}
    </div>
  );
}

export { Testimonials };
