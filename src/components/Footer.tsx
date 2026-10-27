export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="site-container py-5">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <h4 className="mb-3 text-base font-bold">CIMSS 2027</h4>
            <p className="text-gray-300 text-sm">
              7th International Workshop on Critical Infrastructure and Maritime Systems Security
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-base font-bold">In Conjunction With</h4>
            <p className="text-gray-300 text-sm">
              <a href="https://acns2027.isg.rhul.ac.uk/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">ACNS 2027</a><br />
              25th International Conference on Applied Cryptography and Network Security
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-base font-bold">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              For inquiries, please contact:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>
                <a href="mailto:mujeeb.ahmed@newcastle.ac.uk" className="hover:text-white transition-colors">
                  mujeeb.ahmed@newcastle.ac.uk
                </a>
              </li>
              <li>
                <a href="mailto:vzeyu_yang@sutd.edu.sg" className="hover:text-white transition-colors">
                  zeyu_yang@sutd.edu.sg
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 border-t border-gray-700 pt-3 text-center text-sm text-gray-400">
          <p>&copy; 2027 CIMSS Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
