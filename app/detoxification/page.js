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
      <PageBanner pageName="Detoxification" />
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
                  Detoxification
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
                    The first stage of treatment for de-addiction with 🕉️ Sai Kirpa Foundation De-Addication & Rehablitation wellness Center, Best de-addiction centre in Delhi(NCR), is a 28-day withdrawal and detox program. This program provides a helping hand to addicts to have control over physical symptoms of withdrawal and allows them to detox from the use of drugs. Being the first stage of the treatment, the program gives tools to the patients so that they can manage a lifestyle that is free from drugs and alcohol. At 🕉️ Sai Kirpa Foundation De-Addication & Rehablitation wellness Center, the program is focused on addressing the physical, emotional, social, psychological, and spiritual effects of addiction.<br/><br/> A few elements of the program include:
                    <ul className="list-style-three">
                        <li>
                            Regular group check-ins and support
                        </li>
                        <li>
                            Individual counseling session on a weekly basis
                        </li>
                        <li>
                            Regular recreational activities
                        </li>
                    </ul>
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-xl-12">
             <h3 className="text-center mt-40">Best Detox Treatment Centre for Harm Reduction and Addiction Treatment</h3>
             <p>
             Comprehensive addiction treatment programs
             </p>
             <p>
Family programs and extensive aftercare services

             </p>
             <p>
Harm reduction and evidence-based practices

             </p>
             <p>
Comprehensive detox programs with medical supervision

             </p>
             <p>

Inpatient and outpatient treatment options
             </p>
<p>

Evidence-based therapies and holistic approaches
</p>
<p>
Strong focus on harm reduction and relapse prevention

</p>
<p>
Luxury facilities with a focus on comfort and privacy

</p>
<p>
Integrative therapies combining medical, psychological, and holistic methods

</p>
<p>

Personalized treatment plans
</p>
<p>
Extensive aftercare and alumni support.

</p>
             <p>
Strong emphasis on family involvement and aftercare

             </p>
             <p>
Comprehensive detox and withdrawal management

             </p>
             <p>

Specialized programs for different demographics (teens, adults, executives)
             </p>
             <p>

Harm reduction strategies
             </p>
             <p>
High success rates with evidence-based treatment

             </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      
    </TekprofLayout>
  );
};
export default page;
