export default function Venue() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-primary-900 mb-8">Venue</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Charles B. Wang Center</h2>
        <p className="text-gray-700 mb-4">
          ACNS 2026 will be held at the Charles B. Wang Center on the campus of Stony Brook University. Opened in 2002, the Wang Center is a cultural hub dedicated to promoting an understanding of Asian and Asian American cultures. This impressive 120,000-square-foot facility was designed by architect P.H. Tuan and features a distinctive 100-foot octagonal pagoda tower. Inside, the center houses conference halls, auditoriums, and galleries, all surrounding a beautiful outdoor garden.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-semibold text-primary-900 mb-2">Charles B. Wang Center Building</h3>
            {/* Placeholder for building image if needed, or just text */}
          </div>
          <div>
            <h3 className="font-semibold text-primary-900 mb-2">Charles B. Wang Center Campus Location</h3>
            {/* Placeholder for map image if needed, or just text */}
          </div>
        </div>

        <div className="mb-8">
          <img src="/venue.png" alt="Venue" className="w-full rounded-lg shadow-md mb-6" />
          
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Directions</h2>
          <p className="text-gray-700 mb-4">
            The searches "Charles Wang Center Stony Brook" or "Hilton Garden Inn Stony Brook" in Google Maps will provide you with the exact location of the conference venue and hotel on both Google Maps and Apple Maps.
          </p>
          
          <div className="mb-4">
            <p className="font-semibold">Google Maps links:</p>
            <p>
              <a href="https://www.google.com/maps/search/?api=1&query=Charles+B.+Wang+Center" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Charles B. Wang Center</a>,{' '}
              <a href="https://www.google.com/maps/search/?api=1&query=Hilton+Garden+Inn+Stony+Brook" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Hilton Garden Inn Stony Brook</a>
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Apple Maps links:</p>
            <p>
              <a href="http://maps.apple.com/?q=Charles+B.+Wang+Center" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Charles B. Wang Center</a>,{' '}
              <a href="http://maps.apple.com/?q=Hilton+Garden+Inn+Stony+Brook" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Hilton Garden Inn Stony Brook</a>
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            More information is available at the <a href="https://www.stonybrook.edu/commcms/wang/visit/directions.php" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Wang Center's Directions page</a>.
          </p>

          <h3 className="text-xl font-bold text-primary-800 mb-2">By Car</h3>
          <p className="text-gray-700 mb-4">
            From New York City, take the Long Island Expressway (Route 495) eastbound to exit 62. Follow Nicolls Road (Route 97) north for approximately 9 miles. The main entrance to Stony Brook University will be on your left.
          </p>

          <h3 className="text-xl font-bold text-primary-800 mb-2">By Train</h3>
          <p className="text-gray-700 mb-4">
            Take the Long Island Rail Road, Port Jefferson Line to the Stony Brook station. A free shuttle bus service is available from the Stony Brook station to the Wang Center.
          </p>

          <h3 className="text-xl font-bold text-primary-800 mb-2">From Local Airports</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><span className="font-semibold">Long Island MacArthur Airport (ISP):</span> This is the closest airport, about a 30-minute drive to the university. Taxis and rideshare services are available.</li>
            <li><span className="font-semibold">John F. Kennedy International Airport (JFK):</span> Take the AirTrain to Jamaica Station and transfer to the Long Island Rail Road Port Jefferson line to Stony Brook. The total travel time is approximately 2 hours.</li>
            <li><span className="font-semibold">LaGuardia Airport (LGA):</span> Take the M60 bus to 125th Street and transfer to the Long Island Rail Road to Stony Brook Station. The ride is about 2 hours.</li>
            <li><span className="font-semibold">Newark Liberty International Airport (EWR):</span> Take the AirTrain to Newark Airport Station and transfer to the NJ Transit train to NY Penn Station. Transfer to the Long Island Rail Road to Stony Brook Station. The ride is about 3 hours.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-primary-800 mb-4">Accommodation</h2>
        <p className="text-gray-700 mb-6">
          Several hotels are located near Stony Brook University. The <a href="https://www.hilton.com/en/hotels/ispsbgi-hilton-garden-inn-stony-brook/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Hilton Garden Inn Stony Brook</a> is located on campus, within walking distance of the Wang Center. The <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/centereach/stony/hoteldetail" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Holiday Inn Express Stony Brook</a> is another nearby option. Other hotels in the vicinity include the <a href="https://www.mirabelleatthreevillageinn.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Three Village Inn</a> and <a href="https://www.danfords.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Danfords Hotel & Marina</a> in the picturesque village of Port Jefferson.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mb-4">Local Information</h2>
        <p className="text-gray-700">
          Stony Brook is a hamlet on the North Shore of Long Island, known for its natural beauty. The area offers opportunities for outdoor activities such as hiking and kayaking at nearby <a href="https://avalonnaturepreserve.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Avalon Park and Preserve</a> and <a href="https://www.brookhavenny.gov/facilities/facility/details/West-Meadow-Beach-7" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">West Meadow Beach</a>. The historic <a href="https://stonybrookvillage.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Stony Brook Village Center</a> features a variety of shops and restaurants. Cultural attractions in the area include the <a href="https://longislandmuseum.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Long Island Museum of American Art, History, and Carriages</a>.
        </p>
      </div>
    </div>
  );
}
