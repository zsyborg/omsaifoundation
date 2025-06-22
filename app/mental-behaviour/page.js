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
      <PageBanner pageName="Mental Behaviour" />
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
                        Mental Behavior Problems
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
                    Mental and behavioral problems encompass a wide range of conditions that affect a person’s thinking, feeling, mood, and behavior. These issues can significantly impact daily functioning and quality of life.<br/>
</p>
<p>
    
Mental and behavioral disorders are diseases of the brain that affect 1 in 4 people worldwide and are characterized by debilitating deficits in a person’s thinking, feeling, motivation, and mood.
                    
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
             <h3 className="text-center mt-40">Mental Health Disorders</h3>
             <ul className="list-style-three">
                <li>
                1. Symptoms: Persistent sadness, loss of interest in activities, changes in appetite and sleep, fatigue, feelings of worthlessness or guilt.
                </li>

                <li>
                2. Impact: Can lead to significant impairments in daily life and increase the risk of suicide.

</li>
              
             </ul>
             <h3 className="text-center mt-40">Behavioral Problems</h3>
             <ul className="list-style-three">
                <li>
                Attention-Deficit/Hyperactivity Disorder (ADHD)

</li>

                <li>
                Oppositional Defiant Disorder (ODD)

</li>
<li>
Conduct Disorder
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
