import { GooglePlayButton } from "../components/custom/google-play";
import { Testimonials } from "../components/custom/testimonial";

export function HomePage() {
  return (
    <main className="font-quicksand">
      <h1 className="scroll-m-20 text-4xl  font-extrabold tracking-tight lg:text-5xl">
        The coolest way to track your <span className="text-primary">carbon footprint</span>
      </h1>
      <p className="mt-4">Often at time time I am usually asked what is carbon footprint and it surprises me that most people don't know</p>
      <p className="mt-4">
        A carbon footprint is a measure of the total amount of greenhouse gases, primarily carbon dioxide, that are emitted through your activities.
        It considers not just your direct emissions from driving or using energy at home, but also the emissions involved in producing the goods and
        services you consume. Understanding your carbon footprint is a great first step in reducing your impact on the environment. Once you know your
        footprint, you can start to make changes to reduce it, such as driving less, using energy-efficient appliances, and consuming fewer goods.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Join us on a journey to a <span className="text-primary">greener future</span>. We'll help you track your carbon footprint and give you{" "}
        <span className="text-primary">tips </span>
        on how to reduce it. Together, <span className="text-primary">we can make a difference</span>.
      </p>
      <GooglePlayButton />
      <div className="mt-4 bg-gradient-to-r from-green-500 to-green-100 w-3/4 h-3/5 lg:h-1/3 rounded-xl">
        <img className="rounded-xl  lg:h-1/4" src="/app-shot.png" alt="APP SHOT" width="100%" />
      </div>
      <h3 className="mt-8 text-3xl text-center">What they would say</h3>
      <Testimonials />
    </main>
  );
}
