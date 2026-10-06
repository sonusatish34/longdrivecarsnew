import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiLinkedin, SiThreads } from 'react-icons/si'

import imgs from '../../images/cretafoot_2_11zon-transformed.webp'
import imgs2 from '../../images/EA2u65Ss0VJeJ2l1hfQc7-transformed (1).webp'
import logo2 from '../../images/logo-white.webp'

const HIDDEN_LOCATIONS = ['warangal', 'vizag', 'vijayawada']

const LOCATIONS = [
    { name: 'Gachibowli', slug: 'gachibowli' },
    { name: 'Manikonda', slug: 'manikonda' },
    { name: 'Secunderabad', slug: 'secunderabad' },
    { name: 'Ameerpet', slug: 'ameerpet' },
    { name: 'Madhapur', slug: 'madhapur' },
    { name: 'Kukatpally', slug: 'kukatpally' },
    { name: 'Warangal', slug: 'warangal' },
    { name: 'Begumpet', slug: 'begumpet' },
    { name: 'LB Nagar', slug: 'lbnagar' },
    { name: 'Uppal', slug: 'uppal' },
    { name: 'Shamshabad', slug: 'shamshabad' },
    { name: 'Shamirpet', slug: 'shamirpet' },
    { name: 'Alwal', slug: 'alwal' },
    { name: 'ECIL', slug: 'ecil' },
    //   { name: 'Nacharam', slug: 'nacharam' },
    { name: 'Habsiguda', slug: 'habsiguda' },
    { name: 'Tarnaka', slug: 'tarnaka' },
    { name: 'Dilshuknagar', slug: 'dilshuknagar' },
    { name: 'Ramanthapur', slug: 'ramanthapur' },
    { name: 'Balanagar', slug: 'balanagar' },
    { name: 'Bachupally', slug: 'bachupally' },
    { name: 'Bowenpally', slug: 'bowenpally' },
    { name: 'Vanasthalipuram', slug: 'vanasthalipuram' },
    { name: 'Hayatnagar', slug: 'hayatnagar' },
    { name: 'Nampally', slug: 'nampally' },
    { name: 'Saroornagar', slug: 'saroornagar' },
    { name: 'Kachiguda', slug: 'kachiguda' },
    { name: 'BN Reddy Nagar', slug: 'bnreddynagar' }
];

const BRANCHES = [
    { name: 'Hyderabad', href: '/hyderabad' },
    { name: 'Warangal', href: '/warangal' },
    { name: 'Vizag', href: '/vizag' },
    { name: 'Vijayawada', href: '/vijayawada' }
]

const socials = [
    {
        name: 'Facebook',
        icon: <FaFacebook />,
        color: 'hover:text-blue-500',
        links: [
            ['Long Drive Cars App', 'https://www.facebook.com/share/1LiynnCrXF/'],
            ['Hyderabad Car Rental', 'https://www.facebook.com/share/1DWnz1Gvvg/'],
            ['Telugu Temples', 'https://www.facebook.com/share/19gi4suYtq/'],
            ['Long Drive Cars Vizag', 'https://www.facebook.com/share/1BAJRB3YPw/'],
            ['Long Drive Cars Attachments', 'https://www.facebook.com/share/19U14b3sWF/'],
            ['Franchise All Over India', 'https://www.facebook.com/share/1K9F4nxpwo/']
        ]
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />,
        color: 'hover:text-pink-500',
        links: [
            ['Longdrive Cars App', 'https://www.instagram.com/longdrivecars_app/'],
            ['Hyderabad Car Rentals', 'https://www.instagram.com/hyderabad_carrentals/'],
            ['Self Drive Rent', 'https://www.instagram.com/selfdrive.rent/'],
            ['Vizag Self Drive Car Rentals', 'https://www.instagram.com/vizag_selfdrivecar_rentals/'],
            ['Longdrive Cars Attachment', 'https://www.instagram.com/longdrivecars_attachment/'],
            ['Franchise All Over India', 'https://www.instagram.com/franchise_allover_india/']
        ]
    },
    {
        name: 'Threads',
        icon: <SiThreads />,
        color: 'hover:text-gray-400',
        links: [
            ['Long Drive Cars App', 'https://www.threads.com/@longdrivecars_app'],
            ['Hyderabad Car Rental', 'https://www.threads.com/@hyderabad_carrentals'],
            ['Selfdrive Rent', 'https://www.threads.com/@selfdrive.rent'],
            ['Vizag Self Drive Car Rentals', 'https://www.threads.com/@vizag_selfdrivecar_rentals'],
            ['Long Drive Cars Attachment', 'https://www.threads.com/@longdrivecars_attachment'],
            ['Franchise All Over India', 'https://www.threads.com/@franchise_allover_india/']
        ]
    },
    {
        name: 'YouTube',
        icon: <FaYoutube />,
        color: 'hover:text-red-500',
        links: [
            ['Long Drive Cars Official', 'https://youtube.com/@longdrivecars_app'],
            ['Long Drive Cars Attachments', 'https://youtube.com/@car.earnings_longdrivecars']
        ]
    }
]

/* =========================================================
   SOCIAL DROPDOWN
========================================================= */
const Social = ({ social }) => (
    <div className="relative group">
        <button
            type="button"
            aria-label={`${social.name} social media links`}
            className={`text-3xl text-white ${social.color} transition-colors duration-200 flex items-center justify-center relative z-10`}
        >
            {social.icon}
        </button>

        <div className="absolute bottom-full left-0 z-50 pb-3 invisible opacity-0 translate-y-2 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
            <div className="w-64 max-w-[calc(100vw-2rem)] rounded-lg bg-[#202020] border border-white/10 shadow-xl p-2">
                <div className="px-3 py-2 mb-1 text-xs font-semibold text-gray-400 border-b border-white/10">
                    {social.name}
                </div>
                {social.links.map(([name, url]) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2.5 rounded-md text-sm text-white hover:bg-white/10 transition-colors duration-150 whitespace-normal"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    </div>
)

/* =========================================================
   FOOTER
========================================================= */
function Footer({ locname, forblog }) {
    const isHiddenLocation = HIDDEN_LOCATIONS.includes(locname) || Boolean(forblog)

    const privacyPath = forblog
        ? '/hyderabad/privacy-policy.html'
        : `${locname ? `/${locname}` : ''}/privacy-policy.html`

    return (
        <div className="bg-white pt-4 overflow-x-clip">
            {/* LOCATION LINKS */}
            {!isHiddenLocation && (
                <div className="flex pl-6 mxs:pl-12 p-5 md:justify-between text-white xl:px-28 xl:mx-20 lg:mx-14 py-10 flex-wrap bg-[#660066] rounded-md mx-[14px] mb-10 items-center">
                    <div className="xl:text-left xl:text-sm text-left text-xs mxs:text-sm font-semibold">
                        <ul className="lg:gap-x-20 lg:gap-y-3 gap-y-3 grid lg:grid-cols-3 grid-cols-1 capitalize">
                            {LOCATIONS.map((loc) => (
                                <li key={loc.slug} className="hover:scale-105 transition-transform">
                                    <Link href={`/self-drive-car-rental/${loc.slug}`}>
                                        Self drive car rental in {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* MAIN FOOTER */}
            <div
                style={{ backgroundImage: 'url(/ldcfooter_11zon.webp)' }}
                className="bg-black text-white bg-contain xl:bg-center bg-bottom bg-no-repeat xl:bg-repeat overflow-x-clip"
            >
                <footer className="px-4 lg:py-2 lg:px-4">
                    <div className="flex flex-wrap lg:flex-row flex-col px-4 justify-between gap-3 z-10 pb-32 lg:pb-48 lg:pt-6 xl:px-14 lg:px-8 relative">
                        {/* COMPANY */}
                        <div className="xl:w-3/6 lg:w-2/6">
                            <div className="flex flex-col p-1 rounded">
                                <div className="py-4">
                                    <Image
                                        className="lg:w-72 xl:w-full xl:h-32 lg:h-20 object-contain object-left"
                                        src={logo2}
                                        alt="Long Drive Cars app"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className="xl:text-lg lg:text-base text-xs max-w-2xl">
                                    <p>
                                       <b>Long Drive Cars </b> is a <b>self drive car rental app in Hyderabad</b> offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City.
                                    </p>

                                    <p className='font-bold pt-4'>Download the Long Drive Cars app to check live availability and book.</p>

                                </div>
                            </div>
                        </div>

                        {/* BRANCHES */}
                        <div>
                            <p className="text-left text-xl font-bold pb-2">Our Branches</p>
                            <div className="xl:text-left lg:text-base text-left text-base font-semibold">
                                <ul className="gap-2 flex flex-col">
                                    {BRANCHES.map((branch) => (
                                        <li key={branch.name} className="lg:hover:scale-105 transition-transform">
                                            <Link href={branch.href}>{branch.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* USEFUL LINKS + SOCIAL MEDIA */}
                        <div>
                            <div>
                                <p className="text-left mb-1 pt-3 lg:pt-0 text-xl font-bold pb-1">Useful Links</p>
                                <div className="flex flex-col gap-1">
                                    <Link href="/attachments" target="_blank" className="hover:text-blue-500 cursor-pointer transition-colors">
                                        Car Attachment
                                    </Link>
                                    <Link href={`${privacyPath}#cancel_refund_policy`} target="_blank" className="hover:text-blue-500 cursor-pointer transition-colors">
                                        Refund & Cancelation Policy
                                    </Link>
                                    <Link href={privacyPath} target="_blank" className="hover:text-blue-500 cursor-pointer transition-colors">
                                        Terms & Conditions
                                    </Link>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="pt-3">
                                <p className="text-left mb-1 pt-4 lg:pt-0 text-xl font-bold pb-4">Social Media Links</p>
                                <div className="flex items-center gap-6">
                                    {socials.map((social) => (
                                        <Social key={social.name} social={social} />
                                    ))}
                                    <a
                                        href="https://in.linkedin.com/company/long-drive-cars"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Long Drive Cars LinkedIn"
                                        className="text-3xl text-white hover:text-blue-500 transition-colors duration-200"
                                    >
                                        <SiLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <div>
                                <p className="text-left mb-1 text-xl font-bold py-4 lg:py-0">Contact Info</p>
                                <div className="flex md:flex-col flex-row text-left text-lg gap-4 pb-4">
                                    <div className="flex justify-center items-center pt-2">
                                        <ul>
                                            <li className="text-base">Telangana, AP</li>
                                            <li className="text-base mxs:text-lg lg:text-2xl font-bold">
                                                <Link href="tel:9000478478">9000-478-478</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Head Office */}
                            <div>
                                <p className="font-bold text-xl">Head Office</p>
                                <p className="font-bold text-lg text-blue-500">Location</p>
                                <p className="w-40 text-xs">
                                    Long Drive Cars, Pillar No 129, Main Road, beside Medipally, Medipally, Hyderabad, Telangana 500098
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* MARQUEE */}
                <div className="relative lg:bottom-3 top-3 lg:top-7 overflow-hidden">
                    <Marquee speed={40} direction="right" className="lg:pt-0">
                        <div className="flex gap-24 lg:gap-96 text-xs lg:text-lg">
                            <Image
                                src={imgs2}
                                width={1000}
                                height={1000}
                                className="lg:w-[170px] lg:h-28 w-16 h-12 relative bottom-1 lg:bottom-[0.55rem] object-contain"
                                alt="Long Drive Cars app"
                            />
                            <Image
                                src={imgs}
                                width={1000}
                                height={1000}
                                className="lg:w-32 lg:h-28 h-12 w-12 object-contain"
                                alt="Long Drive Cars app"
                            />
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="bg-black py-2 lg:px-20 text-center text-white lg:text-lg text-xs">
                <p>© 2026 LDCars India Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer