export default function Program() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Tentative Workshop Program</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="space-y-5 text-gray-700">
          {[
            { time: '09:00 – 09:10', activity: 'Opening Remarks' },
            { time: '09:10 – 10:00', activity: 'Keynote' },
            { time: '10:00 – 10:30', activity: 'Break' },
            { time: '10:30 – 11:30', activity: 'Technical Presentations' },
            { time: '11:30 – 12:00', activity: 'Break' },
            { time: '12:00 – 12:40', activity: 'Technical Presentations' },
            { time: '12:40 – 12:50', activity: 'Closing Remarks' },
          ].map((item) => (
            <div
              key={item.time}
              className="flex flex-col md:flex-row md:items-start md:gap-6 border-l-4 border-primary-600 bg-primary-50 rounded-r-lg p-5"
            >
              <div className="min-w-[160px] font-bold text-primary-900">{item.time}</div>
              <div className="text-lg">{item.activity}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-green-900 mb-3">Schedule Information</h2>
        <ul className="list-disc list-inside space-y-2 text-green-800">
          <li>The program is tentative and subject to change.</li>
          <li>The CIMSS 2027 workshop date is to be announced.</li>
          <li>ACNS 2027 will take place from 28 June to 1 July 2027.</li>
        </ul>
      </div>

      {/*
        Previous confirmed program content from CIMSS 2026, retained for reference
        when the CIMSS 2027 program is finalized:

        Session I
        14:00 – 14:20 — Welcome and Opening Remarks
        14:20 – 15:20 — Keynote: Engineering Trust at Sea: Cyber Risk Management
        in the Future Maritime Ecosystem
        15:20 – 16:00 — Coffee Break and Networking

        Session II
        16:00 – 17:00 — Three Paper Presentations and Closing Remarks

        Papers:
        1. Data2Damage: Using Large Language Models to Uncover Logic-Level Attack
           Vectors in ICS — Kuberan Sandrasekaran, Muhammad Usman Shahid,
           Chuadhr Mujeeb Ahmed, Rajiv Ranjan and Jianying Zhou
        2. TTNeural: A TFHE-Ready Lightweight Deep Learning Architecture for
           Encrypted Time-Series Analytics in Critical Infrastructures — Alvin Chew
        3. OpenBridge: An Open-Source Platform for NMEA 2000 Education and Security
           Research — Constantine Macris, James Campbell and Anissa Elias

        Workshop day note:
        CIMSS 2026 took place on June 24, 2026 as part of ACNS 2026.
      */}
    </div>
  );
}
