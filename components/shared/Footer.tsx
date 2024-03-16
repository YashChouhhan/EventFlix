import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-50 py-8">
      <div className="wrapper flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col">
          <Link href='/'>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
          <p className="mt-4">2024 EventFlix. All Rights Reserved.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <SignedIn>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-2">Main Links</h4>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/events/create">Create Event</Link></li>
                <li><Link href="/profile">My Profile</Link></li>
              </ul>
            </div>
          </SignedIn>


          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#">Events</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Gallery</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#">Newsletter</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper mt-8 md:mt-12 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 EventFlix. All Rights Reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
