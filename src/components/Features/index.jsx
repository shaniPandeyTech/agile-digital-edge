import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Services = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What we do"
            paragraph="We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                paragraph={feature.paragraph}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
