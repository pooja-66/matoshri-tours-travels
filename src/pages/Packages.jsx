import { SITE_CONFIG } from '../config';
import './Packages.css';

const whatsappBase = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;

function enquireLink(text) {
  return `${whatsappBase}?text=${encodeURIComponent(`Hi Matoshri Tours & Travels, I am interested in: ${text}`)}`;
}

const RATE_TABLES = [
  {
    title: 'AC Bus & Tempo Traveller Rates',
    headers: ['BUS TYPE', 'MUMBAI (UP TO 350 KM)', 'MAHABALESHWAR (UP TO 300 KM)', 'EXTRA KM', 'SPECIAL PERMIT'],
    rows: [
      ['13 Seater', '₹10,500', '₹10,500', '₹24', '₹500'],
      ['13 Seater Urbania', '₹15,000', '₹10,800', '₹35', '₹500'],
      ['17 Seater', '₹11,500', '₹11,500', '₹28', '₹500'],
      ['17 Seater Urbania', '₹15,000', '₹10,800', '₹36', '₹500'],
      ['20 Seater', '₹12,500', '₹12,500', '₹30', '₹700'],
      ['27 Seater', '₹17,000', '₹16,000', '₹45', '₹700'],
      ['35 Seater', '₹21,500', '₹19,500', '₹55', '₹700'],
      ['41 Seater', '₹24,000', '₹22,000', '₹60', '₹800'],
      ['45 Seater', '₹26,000', '₹24,000', '₹65', '₹800'],
      ['16 Seater Urbania', '₹15000', '₹13000', '', ''],
    ],
  },
  {
    title: 'Non AC Bus & Tempo Traveller Rates',
    headers: ['BUS TYPE', 'MUMBAI (UP TO 350 KM)', 'MAHABALESHWAR (UP TO 300 KM)', 'EXTRA KM', 'SPECIAL PERMIT'],
    rows: [
      ['17 Seater', '₹9,000', '₹8,500', '₹22', '₹500'],
      ['20 Seater', '₹10,500', '₹9,500', '₹25', '₹500'],
      ['32 Seater', '₹13,500', '₹12,500', '₹33', '₹700'],
      ['35 Seater', '₹14,500', '₹13,500', '₹36', '₹700'],
      ['40 Seater', '₹15,500', '₹14,500', '₹41', '₹700'],
      ['45 Seater (2×2)', '₹19,000', '₹18,000', '₹50', '₹800'],
      ['49 Seater (3×2)', '₹20,000', '₹17,000', '₹49', '₹800'],
    ],
  },
  {
    title: 'Local AC Bus Rates (8 Hrs / 80 KM)',
    headers: ['BUSES', 'RATE', 'EXTRA KM', 'EXTRA HR'],
    rows: [
      ['13 Seater', '₹6,000', '₹24', '₹300'],
      ['13 Seater Urbania', '₹8,000', '₹37', '₹500'],
      ['17 Seater', '₹7,000', '₹28', '₹300'],
      ['17 Seater Urbania', '₹8,500', '₹37', '₹500'],
      ['20 Seater', '₹7,500', '₹30', '₹300'],
      ['27 Seater', '₹9,500', '₹45', '₹500'],
      ['35 Seater', '₹12,000', '₹55', '₹700'],
      ['41 Seater', '₹14,000', '₹60', '₹700'],
      ['45 Seater', '₹15,000', '₹65', '₹800'],
    ],
  },
  {
    title: 'Local Non AC Bus Rates (8 Hrs / 80 KM)',
    headers: ['BUSES', 'RATE', 'EXTRA KM', 'EXTRA HOUR'],
    rows: [
      ['17 Seater', '₹5,500', '₹22', '₹300'],
      ['20 Seater', '₹6,000', '₹25', '₹300'],
      ['32 Seater', '₹7,500', '₹33', '₹500'],
      ['35 Seater', '₹8,000', '₹36', '₹500'],
      ['40 Seater', '₹8,500', '₹41', '₹500'],
      ['45 Seater (2×2)', '₹10,000', '₹50', '₹800'],
      ['49 Seater (3×2)', '₹10,000', '₹49', '₹800'],
    ],
  },
  {
    title: 'Pune To Outstation Urbania Rates',
    headers: ['BUSES', 'Per Day Minimum KM.-', 'Ac Per KM', 'Toll parking Driver DA'],
    rows: [
      ['13 Seater Urbania', '₹300 Minimum', '₹35', '₹400 or Food Extra'],
      ['17 Seater Urbania', '₹300 Minimum', '₹36', '₹400 or Food Extra'],
    ],
  },
  {
    title: 'Pune To Pune City Urbania-Local Package',
    headers: ['BUSES', 'PACKAGE', 'KM Included', 'Extra KM', 'HOURS', 'EXTRA HOURS'],
    rows: [
      ['13 Seater Ac Urbania', '₹8,000', '80 KM', '₹37', '08', '₹500'],
      ['17 Seater Ac Urbania', '₹8,500', '80 KM', '₹37', '08', '₹500'],
    ],
  },
  {
    title: 'Pune To Mumbai Urbania',
    headers: ['BUSES', 'Package', 'KM Included', 'Extra KM', 'Toll parking Driver DA'],
    rows: [
      ['13 Seater Ac Urbania', '₹14,000', '350 KM', '₹38', '₹400 or Food Extra'],
      ['17 Seater Ac Urbania', '₹15,000', '350 KM', '₹38', '₹400 or Food Extra'],
    ],
  },
];

const RULES = [
  'Driver allowance will charge extra.',
  'Cab running km is limited to 300 km per day.',
  'Time starts from 6:00 AM to 10:00 PM, and the bus must be free at 10:00 PM. After 10:00 PM, extra charges apply. Night charges apply from 12:00 AM to 6:00 AM.',
  'Time and km will be calculated from our office to office.',
  'Interstate taxes, toll taxes, parking, and service tax are charged as actuals.',
  'Extra charges will apply for extra km and hours. Government taxes will be charged as per government rules.',
  'The charges quoted above are calculated based on the current fuel prices. Any hike in fuel prices will result in a variation in rates.',
];

export default function Packages() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Tour Packages</h1>
          <p>Explore Maharashtra with our carefully curated travel packages. Comfortable travel, great destinations.</p>
        </div>
      </div>

      <section className="section packages-section">
        <div className="container">
          {RATE_TABLES.map((table, idx) => (
            <div className="rate-table-section" key={idx}>
              <h2 className="rate-table-title">{table.title}</h2>
              <div className="rate-table-wrap">
                <table className="rate-table">
                  <thead>
                    <tr>
                      {table.headers.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="packages-cta">
            <a href={enquireLink('rate cards / packages')} target="_blank" rel="noopener noreferrer" className="btn-pkg btn-pkg--lg">
              Enquire About Packages on WhatsApp
            </a>
          </div>

          <div className="rules-section">
            <h2 className="rules-title">Rules and Guidelines</h2>
            <ul className="rules-list">
              {RULES.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
