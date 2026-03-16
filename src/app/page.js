  
 export default function PrivacyPolicy() {
   
   const pageStyle = {
    minHeight: "100vh",
    backgroundImage: "url('/croft.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const container = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
    color: "#333",
  };

  const heading = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    placeItem:"center",
    
     
  };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "30px",
    marginBottom: "10px",
     fontWeight:'bold'
  
  };

  const paragraph = {
    fontSize: "16px",
    marginBottom: "12px",
    fontWeight:'bold'
  };

  const list={
    paddingLeft: "20px",
    marginBottom: "15px",
    
  };

  return (
    <div style={pageStyle}>
    <div style={container}>
      <h1 style={heading}>Privacy Policy</h1>

      <p style={paragraph}>
         At Craftedge World Academy (CEWA), we maintain a transparent and fair refund process for all our students. By enrolling in any CEWA course, you agree to the following refund terms:
      </p>

      <h2 style={sectionTitle}>1.Eligibility for Refund</h2>
      <p style={paragraph}>
         
      </p>

      <ul style={list}>
        <li>a.No refund will be processed after 7 days from the enrollment date or once more than 20% of the course content has been accessed, whichever occurs earlier.
</li>
        <li> b.A full refund of course fees (excluding Registration Fee) is available within 7 days of course enrollment, provided the student has not accessed more than 20% of the course content.</li>
         
      </ul>

      <h2 style={sectionTitle}> 2.Non-Refundable Components</h2>
      <p style={paragraph}>
        We use the information we collect in various ways, including:
      </p>

      <ul style={list}>
        <li>a.Registration Fee: Non-refundable under all circumstances.</li>
        <li>b.Admission Fee: Non-refundable if the refund request is made after the batch start date.</li>
        <li>c.Short-Term Courses or Test Series Fees: Non-refundable under any circumstances.</li>
        <li>d.Digital Access / Student Kit Fees: Non-refundable once issued or accessed.</li>
      </ul>

      <h2 style={sectionTitle}>3.Refund Process</h2>
      <p style={paragraph}>
        Our website may use cookies to enhance your browsing experience.
        Cookies help us understand user behavior and improve our services.
      </p>
<ul style={list}>
        <li>a.All refund requests must be made in writing by submitting a Refund Application / Grievance Letter to CEWA stating the reason for withdrawal.</li>
        <li>b.The date of submission of the written request to CEWA shall be considered for refund calculation.

</li>
        <li>c.Once approved, refunds will be processed only via NEFT/Online Transfer to the student’s savings account within 30 business days</li>
        <li>CEWA shall not be responsible for any delay or incorrect transfer arising from inaccurate bank details provided by the student.</li>
      </ul>
      <h2 style={sectionTitle}>4.Refund in Case of Job Placement Non-fulfilment</h2>
      <p style={paragraph}>
         a.If CEWA fails to provide any job placement opportunity to a student within one year of successful course completion, CEWA may refund the course fee, subject to:
      </p>
<ul style={list}>
        <li>.The student has completed the course with at least 80% attendance and 100% assignment submission.</li>
        <li>.The student has attended all placement drives/interviews facilitated by CEWA.</li>
        <li>.No refund shall be applicable if the student refuses, misses, or disqualifies himself/herself from two or more placement opportunities.
</li>
      </ul>
      <h2 style={sectionTitle}>5.Important Notes</h2>
      <ul style={list}>
        <li>a.“Week 1” is counted from either the date of registration or batch start date, whichever is later</li>
        <li>b.Discontinued students will lose digital access and are not entitled to reactivation once withdrawn.</li>
      </ul>
      <p style={paragraph}>
         Refund policies are final and binding, and no dispute or claim shall be entertained beyond the scope of this policy
      </p>

      <h2 style={sectionTitle}>Changes to This Policy</h2>

      <p style={paragraph}>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>
      <h2 style={sectionTitle}>Contact Us</h2>
      <p style={paragraph}>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>

      <p style={{ ...paragraph, fontWeight: "bold" }}>
        croftedge@gmail.com
      </p>
    </div>
    </div>
  );
}
