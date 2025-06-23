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
                        Rehabilitation Centre
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
                    We are associated with leading rehabilitation centres to provide you a best in class facilities under one roof. As Recovering from any addiction needs support from both family and doctors. At the time of recovery not only the addict but all the people who are supporting him/her need to deal with the conditions with great patience. No matter how difficult the situation is, one should never give up and hope on making positive changes in their life and for an addict this can be achieved at one of the best rehabilitation centre which is usually abstinence-based and provide an intense program of support and care that is aimed at people who have difficulty becoming a de-addict in the community.
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
             <h3 className="text-center mt-40">Best Rehabilitation Centre</h3>
             
             <ul className="list-style-three">
                <li>
                Specializes in treating addiction and co-occurring disorders
                </li>
                <li>
Robust family counseling programs

                </li>
                <li>
Strong focus on trauma-informed care and comprehensive counseling

                </li>
                <li>
Evidence-based therapies and holistic approaches

                </li>
                <li>
                Offers both inpatient and outpatient treatment options
                </li>
                <li>
Emphasis on relapse prevention and support

                </li>
                <li>

Strong family programs and extensive aftercare services
                </li>
                <li>
Comprehensive counseling programs using evidence-based practices

                </li>
                <li>
                Part of the Hazelden Betty Ford Foundation

                </li>
                <li>
Strong emphasis on mental health and trauma-informed care

                </li>
                <li>
Family programs and extensive aftercare support

                </li>
                <li>

Comprehensive treatment programs with a focus on holistic care
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
