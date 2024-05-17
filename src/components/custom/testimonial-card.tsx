import { TestimonialCardProps } from "@/src/types";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";

function TestimonialCard({ props }: { props: TestimonialCardProps }) {
  const { className, description, title, user } = props;
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center ">
        <CardTitle>{title}</CardTitle>
        <div className="flex-grow"></div> {/* Spacer */}
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} color="green" fill="green" className="ml-1" />
        ))}
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex flex-row justify-end">
        <p>{user}</p>
      </CardFooter>
    </Card>
  );
}

export { TestimonialCard };
