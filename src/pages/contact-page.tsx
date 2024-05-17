import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

function ContactPage() {
  return (
    <main className="container mx-auto font-quicksand mb-8 lg:mb-16">
      <h1 className="text-5xl">
        Hi I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-amber-500">Jerome</span> <span>👋</span>
      </h1>
      <section className="lg:container flex flex-col lg:flex-row mt-4 justify-between">
        <Avatar className="sm: mb-2">
          <AvatarImage
            src="https://firebasestorage.googleapis.com/v0/b/carbonzero-53d68.appspot.com/o/DSC_8273%20copy.jpg?alt=media&token=e193a00b-30b2-40ba-81d8-038bb1704e77"
            height={40}
            width={40}
            alt="Jerome Jumah profile picture"
          />
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <p className="lg:ml-4">
          Im a software engineer from Kenya. I created the CarbonZero app since I love our planet and I believe that we should all do our part to
          protect it. I hope you enjoy using the app as much as I enjoyed creating it. Feel free to reach out to me on{" "}
          <a className="text-primary" href="mailto:jeromejuma25@gmail.com">
            email
          </a>{" "}
          or{" "}
          <a className="text-primary" href="https://x.com/juma_jerome">
            X
          </a>{" "}
          (formally Twitter).
          <p className="mt-6">Need a mobile or web application for your business? I'm available for hire. </p>
        </p>
      </section>
    </main>
  );
}

export { ContactPage };
