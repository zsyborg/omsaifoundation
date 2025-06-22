import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonials from "@/components/testimonials/Testimonials1";

import { WorkingProcess2 } from "@/components/WorkingProcess";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const page = () => {
  return (
    <TekprofLayout
      header={5}
      footer={3}
      rootElements={{
        "--tekprof-primary-color": "#FC5546",
        "--tekprof-heading-color": "#020626",
        "--tekprof-gray-color": "#FAF8F6",
      }}
    >
      {/*End Hidden Sidebar */}
      {/* Hero Section Start */}
      <section
        className="hero-area pt-100 rpt-70 pb-130 rpb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 align-self-center">
              <div
                className="hero-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-15">Om Sai Kripa Foundation</span>
                <h1>De-Addication & Rehablitation Wellness Center</h1>
                <p>
                  Take care of your loved ones and make them better.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-image radius-animation"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Features Area start */}
      <section className="features-area rel z-1">
        <div className="container features-bg pt-130 rpt-100 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  10+ Years of Experience
                </span>
                <h2>
                Welcome To 🕉️Sai Kirpa Foundation
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <p>
                    Om Sai Kirpa Foundation De-Addication & Rehablitation wellness Center is always focused on ways and methods to treat or deal with numerous addictions like substance abuse, tobacco addiction or gutkha addiction, cocaine addiction, cigarettes addiction, opium addiction and many more as addiction to something bad has no limit but to improve or putting a full stop to it is atmost necessary for their families, neighbours, society, employers and near and dear ones as well as their well wishers as all these drugs destroy the normal functioning of the mind, body and soul. Rehabilitation Center believes in natural therapy such as exercise, yoga, meditation and physiotherapy.
                    </p>
                    <br/>
                    <p>So if you are a alcoholic or a drug addictor or facing any kind of addiction then you should step into the right place that is Rehab Centre for your treatment and assured results. The cost and charges are not to be worried about as minimum charges are taken for this task.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <h2 className="section-title text-center mb-40">Our Programs</h2>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="/counselling.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Counselling Services</Link>
                  </h4>
                  <p>
                  Counselling therapies treat mental health issues and addictions; it enhances personal skills and build healthy coping mechanisms. 
                  {/* Address underlying issues, identify triggers, and learn to manage them with desired support and guidance of our counsellors.  */}
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="/add.jfif"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Addiction Treatment</Link>
                  </h4>
                  <p>
                  Individualized treatment plans entailing medicines, counselling, and indigenous therapies to break the cycles of addiction.
                   {/* Medications ease the withdrawal symptoms, where as counselling and therapies support the treatment related to addiction  */}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="/discharge.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Discharge Treatment</Link>
                  </h4>
                  <p>
                  Discharge planning is a routine feature of health systems in many countries that aims to reduce delayed discharge from hospital.
                  {/* , and improve the co‐ordination of services following discharge from hospital and reduce the risk of hospital readmission  */}
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="why-choose-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-10">Why Choose Our Rehabilitation Centre Services?</span>
                  <h2>
                    A Decade's Experience
                  </h2>
                </div>
                <p>
                We are committed to develop one of the best Rehabilitation Centers, which would Provide Best Quality of life to the Patients & Their Relatives. It would be one of the Milestones in the development in Psychological Treatments in India. We became one of the highly demanded 🕉️ Sai Kirpa Foundation and rehabilitation centre that relieves the addicted person from Alcohol, Smoking, Gutkha, Drugs etc. Following are some key factors that have enforced us to set us ahead from other competitors.
                </p>
                {/* <Link href="about" className="theme-btn mt-20 mb-50">
                  Learn More About Us
                </Link> */}
                <div
                  className="row"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  {/* <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-experts" />
                      </div>
                      <h5>
                        <Link href="service-details">Dedicated Team</Link>
                      </h5>
                      <p>
                        This allowing scale resources as needed while
                        maintaining full control your project.
                      </p>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-loyal-customer" />
                      </div>
                      <h5>
                        <Link href="service-details">Clients Satisfaction</Link>
                      </h5>
                      <p>
                        From quality design and timely delivery post-project
                        support focus is on building lasting
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-6"></div>
            <div className="col-lg-12">
              {/* <div className="why-choose-images">
                <div
                  className="left"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/why-choose1.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/why-choose2.jpg"
                    alt="Why Choose"
                  />
                </div>
                <div
                  className="right"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/why-choose3.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/why-choose4.jpg"
                    alt="Why Choose"
                  />
                </div>
              </div> */}
              <h2 className="text-center mt-40">Benefits of The Best Rehabilitation Centre</h2>
              <p>Mind and Psychology plays a vital role in dealing with various addictions. At Rehabilitation Centre Near Me, the patient will be in contact with renowned psychologist and counsellors for proper procedure of sessions for healthy environment and acknowledging the importance of emotional well being as sentiments and emotions go hand in hand for treating addiction cases.</p>
              <ol className="mylist">
                <li>

              <span>1. Comprehensive Care:</span> Top rehabilitation centers provide a multidisciplinary approach, integrating medical, psychological, and holistic therapies tailored to individual needs. This comprehensive care addresses physical, emotional, and social aspects of recovery.
                </li>
<li>

<span>2. Expert Staff: </span>These facilities employ highly trained medical professionals, including doctors, nurses, psychologists, therapists (physical, occupational, speech), nutritionists, and counselors. Their expertise ensures proper assessment, personalized treatment plans, and ongoing support.
</li>

<li>

<span>3. Evidence-Based Treatment:</span> The best centers use therapies and interventions backed by scientific research and clinical trials. This ensures that treatment approaches are effective, safe, and up-to-date with the latest advancements in rehabilitation science.
</li>

<li>

<span>4. Safe Environment:</span> Rehabilitation centers offer a structured and supervised environment conducive to recovery. This includes 24/7 medical monitoring, medication management, and a focus on preventing relapse or complications.
</li>
<li>

<span>5. Holistic Approach:</span> Many top centers incorporate holistic therapies such as yoga, meditation, art therapy, and acupuncture. These complementary treatments promote overall well-being, stress reduction, and mental clarity.
</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}


    </TekprofLayout>
  );
};
export default page;
