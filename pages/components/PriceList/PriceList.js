// components/Table.js
export default function Table() {
    return (
        <div className="lg:px-20 px-4 lg:py-20 py-8  mont-text">
            <p className="lg:text-xl text-xl text-[#660066] font-bold text-center pb-8 lg:pb-2 uppercase"><span className="font-bold text-lg text-[#dbbeed]">/</span><span className="font-bold text-lg text-[#c97ef7]">/</span><span className="font-bold text-lg text-[#660066]">/ </span> price list</p>
            <p className="lg:text-4xl text-xl font-bold text-center text-black pb-8 lg:pb-12 capitalize">Check out our comprehensive price list</p>
            <div className=" flex flex-wrap gap-14">
                <div className="bg-red- p-1 rounded-md">

                <table className="lg:w-96 divide-y  text-xs text-black rounded-md bg-red-600  overflow-hidden" >
                    <thead className="bg-[#660066] text-white rounded-md">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 5 Seater Basic Cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">Alto / k-10/S Presso / Kwid Kuv100/Eon / Dotsun Go / Celerio Santro / Wagon R / Kuv100

                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                1488 </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">Citroen C3 / Garnd 110 / Ignis / Kiger / Altroz / Tiago / Tigor Bolt / Ford Figo / Swift Dzire
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">1680</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                Dzire / Swift / Altroz / Exter / Aura Punch/Amaze / Grand Nios / Eeco Honda City / Xcent / Baleno / Glanza / Magnite / Vento
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">1776</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-md bg-red-600  overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 5 seater luxury </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">Polo / Eco Sport / 120 / Fronx / Scross
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                1992 </td>

                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">Venue / Sonnet / Ciaz / Rapid Nexon / Urban Cruiser / Breeza Vitara / Xuv300
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">2280</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            Creta /Seltos / Verna

                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">2976</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            MG Hector
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">3480</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            Thar
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">3984</td>
                        </tr>
                    </tbody>
                </table>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-md bg-red-600  overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 5 Seater Sunroof Cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">120 Sunroof / Ecosport Sunroof
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                2280 </td>

                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">Exter Sunroof / Venue Sunrooof Breeza Sunroof / Sonnet Sunroof Nexon Sunroof
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">2496</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            Verna Sunroof / Creta Sunroof Astor Sunroof / Seltos Sunroof Hector / Sunroof

                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">3480</td>
                        </tr>
                    </tbody>
                </table>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-md bg-red-600  overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 7 seater cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">Triber

                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                1992 </td>

                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">Bolero Neo / Tuv 300 / Ertiga XL6/Tuv 300 / Scorpio 
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">2280</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            Carens / Xuv 500 / Hycross
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">3480</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            Crysta
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">4992</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                            New Fortuner
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">9984</td>
                        </tr>
                    </tbody>
                </table>
                <table className="lg:w-96 w-80 divide-y  text-xs text-black rounded-md bg-red-600  overflow-hidden" >
                    <thead className="bg-[#660066] text-white">
                        <tr>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 7 Seater Sunroof Cars </th>
                            <th className="px-2 py-3 text-left  font-medium uppercase tracking-wider border border-gray-300 whitespace-nowrap"> 24 hrs Price</th>

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold text-wrap">Alcazar Sunroof / Xuv 500 Sunroof W 11
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">
                                4992 </td>

                        </tr>
                        <tr>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">Xuv 700/ Hector Plus Sunroof / Xuv 700 AX7
                            </td>
                            <td className="px-2 py-2  border border-gray-300 font-semibold">4992</td>
                        </tr>
                    </tbody>
                </table>
            

            </div>
        </div>
    );
}
