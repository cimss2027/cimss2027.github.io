export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative mx-auto mt-6 flex min-h-[520px] max-w-7xl items-center overflow-hidden text-left text-white sm:rounded-lg"
        style={{
          backgroundImage: "url('/acns2027-banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/95 via-gray-800/75 to-gray-800/10"></div>
        <div className="site-container relative z-10">
          {/* ACNS Logo */}
          <div className="mb-7 flex justify-start">
             <img src="/acns-logo_L.jpg" alt="ACNS 2027 Logo" className="h-24 w-auto rounded-lg border-2 border-white/20 shadow-xl" />
          </div>

          <h1 className="mb-5 text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl">
            CIMSS 2027
          </h1>
          <h2 className="mb-7 max-w-3xl text-2xl font-semibold leading-tight drop-shadow-md sm:text-3xl">
            7th International Workshop on Critical Infrastructure and Maritime Systems Security
          </h2>
          <div className="flex max-w-3xl flex-col items-start gap-3 text-base sm:flex-row sm:flex-wrap sm:text-lg">
            <p className="flex items-center gap-2 rounded-md border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-sm">
              <svg className="h-5 w-5 shrink-0 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.15 7-12a7 7 0 10-14 0c0 6.85 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>Royal Holloway, University of London, Egham, United Kingdom</span>
            </p>
            <p className="flex items-center gap-2 rounded-md border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-sm">
              <svg className="h-5 w-5 shrink-0 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
              </svg>
              <span>28 June – 1 July 2027</span>
            </p>
          </div>
        {/* Early registration and award cards are temporarily hidden. */}
        {false &&(
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            {/* Registration Badge */}
            <a
              href="https://acns2027.isg.rhul.ac.uk/registration/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-6 rounded-lg shadow-lg bg-opacity-90 backdrop-blur-sm w-full max-w-md transform hover:scale-105 transition-transform flex flex-col justify-center"
            >
              <p className="font-semibold text-lg mb-2">Early-Bird Registration</p>
              {/* <p className="text-3xl font-bold mb-3">Closed</p> */}
              <p className="text-lg font-medium text-primary-100">Deadline: 28 April 2027</p>
            </a>

            {/* Award Badge */}
            <div className="bg-white text-primary-900 px-8 py-6 rounded-lg shadow-lg bg-opacity-95 backdrop-blur-sm w-full max-w-md border-2 border-yellow-400 relative overflow-hidden transform hover:scale-105 transition-transform flex flex-col justify-center">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 shadow-sm">AWARD</div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Best ACNS Workshops Paper Award</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-3">EUR 500 Prize</p>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-600 font-medium">
                <span>Sponsored by</span>
                <img src="/Springer.jpg" alt="Springer" className="h-8 w-auto" />
              </div>
            </div>
          </div>)}
        </div>
      </section>

      <div className="home-content mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,4fr)]">
      {/* About Section */}
      <section className="order-2 py-10 lg:col-start-2 lg:row-start-1 lg:py-12">
        <div>
          <h3 className="section-title">About the Workshop</h3>
          <div className="body-copy text-justify">
            <p className="mb-4">
             Critical infrastructure including power grids, water treatment facilities, and transportation systems across land and sea, forms the foundation of modern society. Within this landscape, the maritime industry is undergoing a significant transformation through the adoption of Industry 4.0 technologies, often referred to as Maritime 4.0. This evolution involves the integration of advanced digital tools such as automation, real-time data analytics, artificial intelligence, and cybersecurity frameworks to enhance operational efficiency, safety, and sustainability.
            </p>
            <p className="mb-4">
              As maritime systems become increasingly digitized, compliance with cybersecurity standards such as the International Association of Classification Societies (IACS) Unified Requirements E-26 and E-27 is becoming essential. Cyberattacks targeting critical infrastructure, especially maritime systems, can lead to severe disruptions affecting manufacturers, ship owners, and society at large.
            </p>
            <p className="mb-4">
              This workshop aims to bring together researchers and professionals working in Critical Infrastructure and Maritime Systems Security (CIMSS) to share cutting-edge research, innovative ideas, and practical insights. It also seeks to foster collaboration between academia and industry, encouraging dialogue on real-world challenges and creative solutions to strengthen the resilience and security of maritime and other critical systems.
            </p>
            {/* <div className="bg-primary-50 border-l-4 border-primary-600 p-4 my-6">
              <p className="font-semibold text-primary-900">
                Note: For the sixth version of CIMSS, we are changing its name to Critical Infrastructure and Maritime 
                Systems Security from previously titled as Critical Infrastructure and Manufacturing Systems Security.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="order-1 py-10 lg:col-start-1 lg:row-start-1 lg:py-12">
        <div>
          <h3 className="section-title">News</h3>
          <ul className="space-y-4">
            {/* <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-red-600 min-w-[150px]">May 23, 2026</span>
              <span className="text-gray-700">
                <a href="/program" className="font-semibold text-primary-700 hover:text-primary-900 underline underline-offset-2 transition-colors">
                  CIMSS 2026 Program has been announced.
                </a>
              </span>
            </li> */}
            {/* <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-red-600 min-w-[150px]">May 22, 2026</span>
              <span className="text-gray-700">Camera-ready instructions for CIMSS 2026 have been sent to the authors of accepted papers. Hard-deadline is June 10, 2026. For queries, please contact Rahul Chatterjee at <a href="mailto:rchatterjee4@wisc.edu" className="underline hover:text-primary-900">rchatterjee4@wisc.edu</a>.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">May 15, 2026</span>
              <span className="text-gray-700">Early-bird registration deadline for CIMSS 2026 has been extended till May 15, 2026.</span>
            </li> */}
            {/* <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">May 13, 2026</span>
              <span className="text-gray-700"><span className="font-semibold">Keynote Speaker:</span> Prof. Valdez Banda Osiris (Aalto University, Finland) has been confirmed as the keynote speaker for CIMSS 2026.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Apr 29, 2026</span>
              <span className="text-gray-700"><span className="font-semibold">Camera-Ready Submission:</span> As announced by the ACNS Organizing Committee, CIMSS 2026 will be published in the form of post-proceedings this year. Instructions regarding the preparation of the post-proceedings will be announced around the last week of May 2026.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Apr 24, 2026</span>
              <span className="text-gray-700">Early-bird registration is open. Deadline is May 15, 2026.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Apr 24, 2026</span>
              <span className="text-gray-700">Author notifications have been sent for Cycle 2 submissions.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Mar 30, 2026</span>
              <span className="text-gray-700">Submission is closed.</span>
            </li> */}
            {/* <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Feb 23, 2026</span>
              <span className="text-gray-700">Cycle 2 submission is open now</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Feb 21, 2026</span>
              <span className="text-gray-700">Author notification have been sent for Cycle 1 submission</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Jan 23, 2026</span>
              <span className="text-gray-700">Submission deadline for Cycle 1 extended to January 30, 2026</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Jan 06, 2026</span>
              <span className="text-gray-700">Technical Program Committee members confirmed</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2 last:border-0">
              <span className="font-bold text-primary-700 min-w-[150px]">Nov 26, 2025</span>
              <span className="text-gray-700">Submission Cycle 1 opened</span>
            </li> */}
            <li className="border-b border-gray-200 pb-3 text-sm last:border-0">
              <span className="mb-1 block font-bold text-primary-700">Oct 28, 2026</span>
              <span className="block text-gray-700">CFP announced</span>
            </li> 
            <li className="border-b border-gray-200 pb-3 text-sm last:border-0">
              <span className="mb-1 block font-bold text-primary-700">Oct 15, 2026</span>
              <span className="block text-gray-700">Website launched</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Links */}
      {/* Call for Papers and Important Dates cards are temporarily hidden. */}
      {false && (
      <section className="order-3 py-6 lg:col-start-2">
        <div className="grid md:grid-cols-2 gap-6">
          <a href="/call-for-papers" className="border-t-2 border-primary-700 bg-white p-5 transition-colors hover:bg-primary-50">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Call for Papers</h4>
            <p className="text-gray-600">View topics and submission guidelines</p>
          </a>
          <a href="/call-for-papers#important-dates" className="border-t-2 border-primary-700 bg-white p-5 transition-colors hover:bg-primary-50">
            <h4 className="text-xl font-bold text-primary-900 mb-2">Important Dates</h4>
            <p className="text-gray-600">Submission deadlines and schedule</p>
          </a>
        </div>
      </section>
      )}

      {/* Organizing Committee */}
      <section className="order-4 pb-10 pt-6 lg:col-start-2">
        <h3 className="section-title">Organizing Committee</h3>
        <div className="overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm lg:text-base">
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr className="transition-colors hover:bg-primary-50">
                  <th scope="row" className="w-[24%] px-4 py-3 font-semibold text-primary-800 whitespace-nowrap">Program Chairs</th>
                  <td className="w-[25%] px-4 py-3 whitespace-nowrap">Chuadhry Mujeeb Ahmed</td>
                  <td className="px-4 py-3 whitespace-nowrap">Newcastle University, UK</td>
                </tr>
                <tr className="transition-colors hover:bg-primary-50">
                  <th scope="row" className="px-4 py-3" aria-label="Program Chairs"></th>
                  <td className="px-4 py-3 whitespace-nowrap">Zeyu Yang</td>
                  <td className="px-4 py-3 whitespace-nowrap">Singapore University of Technology and Design, Singapore</td>
                </tr>
                <tr className="transition-colors hover:bg-primary-50">
                  <th scope="row" className="px-4 py-3 font-semibold text-primary-800 whitespace-nowrap">Web Chair</th>
                  <td className="px-4 py-3 whitespace-nowrap">Xuna Zhan</td>
                  <td className="px-4 py-3 whitespace-nowrap">Singapore University of Technology and Design, Singapore</td>
                </tr>
                <tr className="transition-colors hover:bg-primary-50">
                  <th scope="row" className="px-4 py-3 font-semibold text-primary-800 whitespace-nowrap">Publication &amp; Publicity Chair</th>
                  <td className="px-4 py-3 whitespace-nowrap">Huibin Wang</td>
                  <td className="px-4 py-3 whitespace-nowrap">Singapore University of Technology and Design, Singapore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical Program Committee */}
      <section className="order-5 pb-20 pt-4 lg:col-start-2">
        <h3 className="section-title">Technical Program Committee</h3>
        <div className="bg-white px-4 py-2 text-sm text-gray-700 lg:text-base">
          TBD
        </div>
      </section>
      </div>
    </div>
  );
}
