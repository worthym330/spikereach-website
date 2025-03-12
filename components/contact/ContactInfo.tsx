import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-card p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold mb-1">Office Address</h4>
            <p className="text-muted-foreground">
              Goregoan West,
              <br />
              Mumbai, Maharashtra,
              <br />
              India
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold mb-1">Phone</h4>
            <p className="text-muted-foreground">
              <a
                href="tel:+918369029862"
                className="hover:text-primary transition-colors"
              >
                +91 83690 29862
              </a>
              <br />
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold mb-1">Email</h4>
            <p className="text-muted-foreground">
              <a
                href="mailto:team@SpikeReach.com"
                className="hover:text-primary transition-colors"
              >
                team@SpikeReach.com
              </a>
              {/* <br />
              <a
                href="mailto:support@SpikeReach.com"
                className="hover:text-primary transition-colors"
              >
                support@SpikeReach.com
              </a> */}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-bold mb-1">Business Hours</h4>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              {/* <br />
              Sunday: Closed */}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border">
        <h4 className="font-bold mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a
            href="#"
            className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="h-10 w-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="h-10 w-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="#"
            className="h-10 w-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
