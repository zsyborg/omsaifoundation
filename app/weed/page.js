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
      <PageBanner pageName="Marijuna/Weed" />
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
                  <h2 className="section-title color-primary mb-10">
                    Marijuna/Weed
                  </h2>
                 
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
                    Marijuana, also known as weed, is a psychoactive drug derived from the Cannabis plant. It is commonly used for both recreational and medicinal purposes. A plain-language summary about cannabis, how people use it, its effects on the brain and overall health, and treatment options for misuse
                    <br/>
</p>
<p>
    
                    
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
             <h3 className="text-center mt-40">Chemical Composition
             </h3>
             <ul className="list-style-three">
                <li>
                THC (Tetrahydrocannabinol): The primary psychoactive compound responsible for the “high” associated with marijuana.
                </li>

                <li>
CBD (Cannabidiol): A non-psychoactive compound known for its potential therapeutic benefits, such as reducing anxiety and inflammation.

</li>
              
             </ul>
             <h3 className="text-center mt-40">Effects on the Body and Mind</h3>
             <ul className="list-style-three">
                <li>
                Euphoria and Relaxation: Feelings of happiness and relaxation.


</li>

                <li>
                Altered Perception: Changes in sensory perception, such as time distortion.
Increased Appetite: Often referred to as “the munchies.”

</li>
<li>
Anxiety and Paranoia: In some users, especially at higher doses.
</li>
<li>
Impaired Memory and Coordination: Short-term memory and motor skills can be affected.
    </li>                
<li>
Dry Mouth and Red Eyes: Common physical side effects.
    </li>                
              
             </ul>



             <h3 className="text-center mt-40">Treatment and Management</h3>
             <h4>Early intervention and comprehensive treatment can significantly improve outcomes for individuals with mental and behavioral problems.</h4>
             <ul className="list-style-three">
                <li>
                Therapies: Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), psychotherapy, family therapy.

</li>

                <li>
Medications: Antidepressants, anti-anxiety medications, mood stabilizers, antipsychotics.

</li>
<li>
Support: Support groups, lifestyle changes (diet, exercise), stress management techniques.
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
