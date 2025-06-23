"use client"
import {useState} from 'react';
import PageBanner from "../../components/PageBanner";
import TekprofLayout from "../../layout/TekprofLayout";
const page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, subject }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Error sending email');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending email');
    }
  };


  return (
    <TekprofLayout
    header={5}
      footer={3}>
      <PageBanner pageName="Contact" />
      <section className="contact-form-area pt-130 rpt-100 pb-120 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-info-part rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Get In Touch</span>
                  <h2>Ready to Transform? Get in Touch</h2>
                </div>
                <p>
                  Each of these titles is designed to be approachable and
                  encourage clients to take the first step in reaching
                  adjustments
                </p>
                <div className="contact-info-wrap mt-40">
                  
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-location" />
                    </div>
                    <div className="text">
                      <span className="title">Rehab Location</span>
                      Address: B 93 Lakhi Ram Park, Near Dharamveer Solanki Hospital Office, Rohini Sector 22 Delhi-110086<br/>

                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone-volume" />
                    </div>
                    <div className="text">
                      <span className="title">Need Any Help</span>
                      <a href="callto:+919811981279">
                        +919811981279
                      </a>
                      <br/> <a href="callto:+919643024295">+919643024295</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-page-form z-1 rel"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
               <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit}
                >
                  <h4>What can we help you with?</h4>
                  <p>Your email address will not be published*</p>
                  <div className="row mt-20">
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name here"
                          required
                          data-error="Please enter your Name"
                          value={name} onChange={(e) => setName(e.target.value)} 
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          required
                          data-error="Please enter your Email"
                          value={email} onChange={(e) => setEmail(e.target.value)} 
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                          data-error="Please enter your Subject"
                          value={subject} onChange={(e) => setSubject(e.target.value)} 
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-25">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="write message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                          value={message} onChange={(e) => setMessage(e.target.value)} 
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          data-hover="Send Message"
                        >
                          <span>Send Us Message</span>
                        </button>
                        {/* {status && <p>{status}</p>} */}
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="our-location mt-130 rmt-100"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5884.917704073877!2d77.05609107586618!3d28.713771085749354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06884a46451b%3A0x512f8b8e46eb4c4!2sLakhi%20Ram%20Park%2C%20Pratap%20Vihar%2C%20Sultanpuri%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1750660559062!5m2!1sen!2sin"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
