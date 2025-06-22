import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout
    header={5}
    footer={3}>
      <PageBanner pageName="Rehabilitation Centre" />
      {/* About Page About Area Start */}
      <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-xl-12 col-lg-12">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title color-primary mb-10">
                        Rehab Counseling Centre
                  </span>
                 
                </div>
                <div className="row gap-70">
                  <div
                    className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
                    <p>
                    “🕉️Sai kirpa Foundation” has set a benchmark in the market by providing spectrum of counseling program to the addicted person. We have with us well-qualified and highly experienced doctors who are dedicated to give hope to many families. Our doctors listen and understand the problem of patients with patience and advice them as a friend. With our objective of attaining complete patient satisfaction, we strive hard to make our counseling program convenient. Our proficient counselors are very optimistic and help the patients with love and care to bring happiness in their lives. We don’t charge for these counseling programs of patients.
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-xl-12" 
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                    >
             <h3 className="text-center mt-40">Best Rehab Counselling Centre</h3>
             
      

            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      
    </TekprofLayout>
  );
};
export default page;
