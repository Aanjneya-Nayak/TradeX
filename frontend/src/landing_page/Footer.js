import React from "react";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

function Footer() {
  return (
    <div className="container mt-5 footer">
      <div className="row">
        <div className="col">
          <img
            src="media/TradeX.png"
            alt="TradeX"
            style={{ width: "150px" }}
          ></img>
          <p className="mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
            &copy; 2010 - 2026, TradeX Broking Ltd. All rights reserved.
          </p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="">About</a>
          <br />
          <a href="">Philosophy</a>
          <br />
          <a href="">Press & media</a>
          <br />
          <a href="">Careers</a>
          <br />
          <a href="">TradeX Cares (CSR)</a>
          <br />
          <a href="">TradeX.tech</a>
          <br />
          <a href="">Open source</a>
          <br />
          <a href="">Referral program</a>
          <br />
        </div>

        <div className="col">
          <p>Support</p>
          <a href="">Contact us</a>
          <br />
          <a href="">Support portal</a>
          <br />
          <a href="">How to file a complaint?</a>
          <br />
          <a href="">Status of your complaints</a>
          <br />
          <a href="">Bulletin</a>
          <br />
          <a href="">Circular</a>
          <br />
          <a href="">Z-Connect blog</a>
          <br />
          <a href="">Downloads</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="">Open demat account</a>
          <br />
          <a href="">Minor demat account</a>
          <br />
          <a href="">NRI demat account</a>
          <br />
          <a href="">HUF demat account</a>
          <br />
          <a href="">Commodity</a>
          <br />
          <a href="">Dematerialisation</a>
          <br />
          <a href="">Fund transfer</a>
          <br />
          <a href="">MTF</a>
          <br />
          <a href={DASHBOARD_URL}>Dashboard</a>
          <br />
        </div>
      </div>
      <div className="text-muted mt-5" style={{ fontSize: "12px" }}>
        <p>
          TradeX Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          TradeX Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: TradeX Broking Ltd., #153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to complaints@tradex.com, for DP related to
          dp@tradex.com. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers/depository participants.
          Receive information of your transactions directly from
          Exchange/Depositories on your mobile/email at the end of the day.
          Issued in the interest of investors. KYC is one time exercise while
          dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of TradeX and offering such services, please
          create a ticket here.
        </p>
        <p>
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
        <p>
          Fixed deposit products offered on this platform are third-party
          products (TPP) and are not Exchange traded products. These are offered
          through Blostem Fintech Private Limited. TradeX Broking Limited (SEBI
          Registration No.: INZ000031633) is acting solely as a distributor for
          these products. Any disputes arising with respect to such distribution
          activity will not have access to SEBI SCORES/ODR, Exchange Investor
          Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits
          are regulated by the Reserve Bank of India (RBI).
        </p>
      </div>
    </div>
  );
}

export default Footer;
