export default function Organization() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Organization</h1>
      
      {/* Program Chairs */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Program Chairs</h2>
        
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="text-gray-700">Chuadhry Mujeeb Ahmed, Newcastle University, UK</p>
          </div>

          <div className="border-b pb-4">
            <p className="text-gray-700">Zeyu Yang, Singapore University of Technology and Design, Singapore</p>
          </div>
        </div>
      </div>

      {/* Other Committee Members */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Organization Committee</h2>
        
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary-900">Web Chair</h3>
            <p className="text-gray-700">Xuna Zhan, Singapore University of Technology and Design, Singapore</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-primary-900">Publication &amp; Publicity Chair</h3>
            <p className="text-gray-700">Huibin Wang, Singapore University of Technology and Design, Singapore</p>
          </div>
        </div>
      </div>

      {/* Technical Program Committee */}
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Technical Program Committee</h2>
        <p className="text-gray-700">TBD</p>
      </div>

      {/*
        Previous Technical Program Committee members, retained for reference:
        Ahmed Amro — NTNU, Norway
        Aybars Oruç — UNCW, USA
        Bilhanan Silverajan — Tampere University, Finland
        Chuadhry Mujeeb Ahmed — Newcastle University, UK
        Daisuke Mashima — SUTD, Singapore
        Eric Wagner — University of Luxembourg
        Georgios Kavallieratos — University of Oslo, Norway
        Harishma Boyapally — SUTD, Singapore
        Jan Bauer — Fraunhofer, Germany
        Osiris A. Valdez Banda — Aalto, Finland
        Rodrigo Roman Castro — University of Malaga, Spain
        Yan Lin Aung — University of Derby, UK
        Yaxi Yang — NTU, Singapore
      */}
     
    </div>
  );
}
