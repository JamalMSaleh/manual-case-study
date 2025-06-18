import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl lg:text-4xl mb-16 font-bold tracking-tight">
        What we can help with
      </h1>

      <div className="flex flex-col lg:flex-row items-center relative max-w-6xl mx-auto">
        <div className="flex-shrink-0 relative z-10 lg:ml-20">
          <Image
            src="/images/feature-pic-head.jpg"
            alt="Back of Head"
            width={370}
            height={420}
            className="object-contain  p-4"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-[250px] mt-44 lg:mt-7 lg:text-[450px] font-bold !text-bg-numbers  select-none">
            01
          </span>
        </div>

        <div className="relative z-10 w-full p-16 lg:p-0 text-center lg:text-left lg:ml-24 ">
          <div className="space-y-4">
            <p className="text-sm font-medium text-text-secondary tracking-wider uppercase">
              Hair Loss
            </p>
            <div>
              <h3 className="text-3xl font-bold text-text-primary leading-tight">
                Hair loss needn't
              </h3>
              <h3 className="text-3xl  font-bold text-text-primary leading-tight">
                be irreversible. We can help!
              </h3>
            </div>
            <p className="text-lg text-text-primary leading-relaxed">
              We're working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse  items-center  relative max-w-6xl mx-auto">
        <div className="flex-shrink-0 relative z-10 lg:ml-20">
          <Image
            src="/images/feature-pic-erecetile.jpg"
            alt="Back of Head"
            width={370}
            height={420}
            className="object-contain  p-4"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-[250px] mt-44 lg:mt-7 lg:text-[450px] font-bold !text-bg-numbers  select-none">
            02
          </span>
        </div>

        <div className="relative z-10 w-full text-center p-16 lg:p-0 lg:text-left lg:ml-24 ">
          <div className="space-y-4 ">
            <p className="text-sm font-medium text-text-secondary tracking-wider uppercase">
              Erecetile dysfunction
            </p>

            <h3 className="text-3xl font-bold text-text-primary leading-tight">
              Erections can be a tricky thing. But no need to feel down!
            </h3>

            <p className="text-lg text-text-primary leading-relaxed">
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
