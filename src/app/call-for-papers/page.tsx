export default function CallForPapers() {
  const topics = [
    'New Attack Vectors on CIMSS',
    'Empirical Study of CIMSS',
    'Formal Treatment of CIMSS',
    'Authentication and Remote Attestation for CIMSS',
    'Human Factors in CIMSS',
    'Intrusion/Anomaly Detection/Prevention for CIMSS',
    'Forensics in CIMSS',
    'Novel Security Notions for CIMSS',
    'Cryptographic Tools for CIMSS',
    'Vulnerabilities Discovery and Management in CIMSS',
    'Intellectual Property Protection in CIMSS',
    'Novel Analysis Tools for CIMSS',
    'Risk Management for CIMSS',
    'Control Theoretic Methods for CIMSS',
    'Ransomware in CIMSS',
  ];

  const submissionRounds = [
    {
      title: 'First Round',
      dates: [
        ['Submission Deadline', '18 December 2026'],
        ['Reviews Deadline', '19 February 2027'],
        ['Notification', '26 February 2027'],
        ['Camera-Ready Deadline', '26 March 2027'],
      ],
    },
    {
      title: 'Second Round',
      dates: [
        ['Submission Deadline', '5 March 2027'],
        ['Reviews Deadline', '7 May 2027'],
        ['Notification', '14 May 2027'],
        ['Camera-Ready Deadline', '11 June 2027'],
      ],
    },
  ];

  return (
    <main className="cfp-page site-page">
      <h1 className="page-title">Call for Papers</h1>

      <section className="content-section">
        <h2 className="section-title">Topics of Interest</h2>
        <p className="mb-4 leading-7">Topics of interest include, but are not limited to:</p>
        <ul className="list-disc space-y-1 pl-7 leading-7">
          {topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </section>

      <section className="content-section">
        <h2 className="section-title">Submission Guidelines</h2>
        <div className="space-y-5 leading-7">
          <p>
            Submissions must not substantially duplicate work that any of the authors has published elsewhere or has
            submitted in parallel to any other venue with formally published proceedings. Information about submissions
            may be shared with program chairs of other conferences for that purpose.
          </p>
          <p>
            <strong>Anonymity:</strong> Submissions must be anonymous, with no author names, affiliations,
            acknowledgements, or obvious references that reveal the authors&apos; identities.
          </p>

          <h3 className="subsection-title pt-2">Format Requirements</h3>
          <ul className="list-disc space-y-1 pl-7">
            <li>Submissions must begin with a title, short abstract, and a list of keywords.</li>
            <li>The introduction should summarize contributions at a level appropriate for a non-specialist reader.</li>
            <li>
              Submissions must follow the original LNCS format. See the{' '}
              <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener noreferrer" className="text-primary-700 underline hover:text-primary-900">
                Springer LNCS guidelines
              </a>.
            </li>
            <li>The page limit is 20 pages, including references.</li>
            {/* <li>Authors of accepted papers must guarantee presentation at the workshop.</li> */}
            <li>Authors must make a full version of their paper available online.</li>
            <li>Authors are strongly encouraged to prepare submissions in LaTeX.</li>
          </ul>

          <h3 className="subsection-title pt-2">Work-in-Progress Papers</h3>
          <p>
            Work-in-progress papers are welcome and may be shorter than the maximum page limit of 20 pages.
            Submissions shorter than 10 pages are discouraged, as they may not provide enough space for appropriate
            technical content. Authors must include <strong>&quot;WiP:&quot;</strong> in the title of a work-in-progress paper.
          </p>
          <p><strong>Important:</strong> Submissions that do not meet these guidelines risk rejection without consideration of their merits.</p>
        </div>
      </section>

      <section id="important-dates" className="mb-10 scroll-mt-8">
        <h2 className="section-title">Important Dates</h2>
        <p className="mb-6 leading-7">All deadlines are 23:59:59 AoE (UTC-12).</p>
        <div className="space-y-7">
          {submissionRounds.map((round) => (
            <div key={round.title}>
              <h3 className="subsection-title">{round.title}</h3>
              <ul className="list-disc space-y-1 pl-7 leading-7">
                {round.dates.map(([event, date]) => (
                  <li key={event}>
                    <strong>{event}:</strong> {date}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="submission-information" className="mb-10 scroll-mt-8">
        <h2 className="section-title">Submission Information</h2>
        <h3 className="subsection-title">How to Submit</h3>
        <ol className="mb-8 list-decimal space-y-3 pl-7 leading-7">
          <li><strong>Prepare your paper.</strong> Follow the LNCS guidelines and the 20-page limit, including references.</li>
          <li><strong>Ensure anonymity.</strong> Remove author names, affiliations, acknowledgements, and other identifying information.</li>
          <li>
            <strong>Submit online.</strong> Upload the paper through the{' '}
            <a
              href="https://easychair.org/conferences/?conf=cimss2027"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 underline hover:text-primary-900"
            >
              CIMSS 2027 submission system
            </a>.
          </li>

        </ol>

        <h3 className="subsection-title">Publication</h3>
        <p className="leading-7">
          Accepted papers will be published in the ACNS 2027 workshop proceedings by Springer in its Lecture Notes in
          Computer Science (LNCS) series. At least one author of each accepted paper is required to present the work at
          the workshop.
        </p>
      </section>
    </main>
  );
}
