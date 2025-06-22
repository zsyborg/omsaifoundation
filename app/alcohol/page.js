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
      <PageBanner pageName="Alcohol" />
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
                        Alcohol
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
                    Alcohol addiction is progressive diseases and its symptoms become more severe over the time. 
                    Some sign & symptoms of alcohol addiction are listed below: <br/>
                    <ul className="list-style-three">
                        <li>
                    Are not able to control drinking

                        </li>
                        <li>
                    Become violent when drinking.

                        </li>
                    </ul>
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
             <h3 className="text-center mt-40">Some Points In Alcohol</h3>
             <ul className="list-style-three">
                <li>
                Continue to drink even when themselves and others are being harmed
<li>
Become aggressive when asked about drinking

</li>
                </li>
                <li>
Memory lapses after heavy drinking

                </li>
                <li>
Try to hide alcohol use

                </li>
                <li>

Need to use alcohol on most days to get through the day
                </li>
                <li>

Make excuses to drink
                </li>
                <li>

Alcohol-related illnesses such as alcoholic liver disease
                </li>
                <li>
Decrease in performance because of drinking

                </li>
             </ul>

      <h2 className="text-center my-20 pt-20">Liquid Courage is Temporary; Wellness is Permanent</h2>
<p>
There comes the point in man’s lives when they are faced with a choice of consuming alcohol. It can either be at a boy’s hostel or an office party or a friend’s house or may be under peer pressure. But gone are those days when having a bottle in your hand is considered debonair and suave. Alcoholism has been a curse in society, and it has devastated thousands of families in India.
</p>

<p>
    
The country’s northern belt, in particular, has been torn apart by the misuse of alcoholic beverages. The Best Alcohol Addiction Treatment focuses on abstinence and change in a person’s behaviour. There are several factors in play when it comes to choosing a method of treatment for alcoholism.
</p>

<h2 className="text-center">Steady Rise of Binge Drinking</h2>
<p>
Over the past decade, the country has witnessed a steady rise in men consuming alcohol. The graph has skewed upwards of 38%, upping the average alcohol consumption to 6.6 litres per person in 2020. It is estimated that by 2025, it will likely reach around 8 litres. In India, the most common pattern that is seen in alcoholics is that of binge drinking. Binge drinking is when a person consumes more alcohol in a shorter period. This is seen more in men than women, where males are likely to have nearly eight drinks in two hours.
</p>

<h4>
Binge Drinking can arise out of several causes –
</h4>
<ul className="list-style-three">
    <li>
        Just For Fun
    </li>
    <li>
    Curiosity

    </li>
    <li>
    Peer Pressure

    </li>
    <li>
    Anxiety and Depression

    </li>
    <li>
    Increasing Social Confidence

    </li>
    <li>
    Avoiding Problems and Issues

    </li>
    <li>
        Out of Rebillion
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
