import { Facebook, Google, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-bg-secondary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-2">
            <Image
              src="/images/footer-logo.svg"
              alt="Manual Logo"
              width={75}
              height={75}
              className="h-10 w-auto"
            />
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-bold text-accent mb-4 text-xs tracking-wider uppercase">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors !font-normal"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors !font-normal"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Guided
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold text-accent mb-4 text-xs tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="font-bold text-accent mb-4 text-xs tracking-wider uppercase">
              Info
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Customer Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-accent hover:muted transition-colors font-normal"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold text-accent mb-4 text-xs tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/MenofManual"
                 target="_blank"
                className="w-8 h-8  rounded flex items-center justify-center "
              >
                <Image
                  src={"/images/facebook.svg"}
                  width={17}
                  height={20}
                  alt="Facebook"
                />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center "
              >
                <Image
                  src={"/images/google.svg"}
                  width={24}
                  height={24}
                  alt="Google"
                />
              </Link>
              <Link
                href="https://x.com/MenofManual"
                 target="_blank"
                className="w-8 h-8  rounded flex items-center justify-center "
              >
                <Image
                  src={"/images/twitter.svg"}
                  width={24}
                  height={24}
                  alt="Twitter"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border-primary pt-8">
          <p className="text-muted text-sm text-center">
            © 2021 Manual. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
