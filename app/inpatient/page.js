import ClientLogo from "../../components/ClientLogo";
import Counter from "../../components/Counter";
import PageBanner from "../../components/PageBanner";
import Team from "../../components/Team";
import { Testimonials2 } from "../../components/testimonials/Testimonials2";
import TekprofLayout from "../../layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout
    header={5}
    footer={3}>
      <PageBanner pageName="INPATIENT REHABLITATION PROGRAM" />
      {/* About Page About Area Start */}
      <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-xl-6 col-lg-6">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title color-primary mb-10">
                  INPATIENT REHABLITATION PROGRAM
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
                    This program largely aims at bringing the normal life by following a withdrawal & detox program. Under this, the first stage can be left, and those who don’t require a withdrawal & detox program can directly take admission in this program. The program is handled by skilled and qualified professionals. Besides this, it offers an environment of comfort and support, which provides space for the patients to grow throughout their journey of recovery. This ultimately provides a sense of independence and accountability.
The inpatient rehabilitation program is an integrated model of care that successfully addresses the physical, emotional, psychological, social, and spiritual effects of addiction. The cost and charges are not to be worried about as minimum charges are taken for this task.
                    </p>
                  </div>

                
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 justify-content-center">
              <img src='/inpatient.png' alt="In Patient" />
          </div>
            <div className="col-xl-12">
             <h3 className="text-center mt-40">BEST INPATIENT REHABILITATION PROGRAM</h3>
             <p>For the patients, who wish to get admission to this stage directly, a thorough assessment process is there, where the individual needs and treatment goals of the patients are considered. A few elements of the program are:
             </p>

    <ul className="list-style-three">
        <li>
        12-Step facilitation
        </li>
        <li>
            
A wide range of holistic
        </li>
        <li>
All-time supervision
            
        </li>
        <li>
Family program and support

        </li>
    </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      
    </TekprofLayout>
  );
};
export default page;
