"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Bed, Smile } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34285640/pexels-photo-34285640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant hotel in Soorts-Hossegor, France under a bright summer sky."},
  {"id":"about-image","url":"https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."},
  {"id":"feature-image-1","url":"https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant rooftop pool with cityscape backdrop at sunset, reflecting urban luxury."},
  {"id":"feature-image-2","url":"https://images.pexels.com/photos/34328685/pexels-photo-34328685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"hotel spa - Photo by Kaushal Amrutiya"},
  {"id":"feature-image-3","url":"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A chef artfully plating a gourmet dish with mushrooms and greens on wood slices."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Old fashioned golden service bell and reception sign placed on wooden counter of hotel with retro interior"},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/4907185/pexels-photo-4907185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A young woman with a backpack smiles in a hostel hallway, ready for adventure."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/34306114/pexels-photo-34306114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"smiling traveler - Photo by lii Chun"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/34242005/pexels-photo-34242005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"satisfied visitor - Photo by Jude Mitchell-Hedges"},
  {"id":"logo-1","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Marriott logo - Photo by Tom Fisk"},
  {"id":"logo-2","url":"https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern hotel building exterior in Stuttgart, Germany, during daytime. Urban architecture and design."},
  {"id":"logo-3","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hyatt logo - Photo by Tom Fisk"},
  {"id":"logo-4","url":"https://images.pexels.com/photos/691067/pexels-photo-691067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Four varied autumn leaves arranged on weathered wooden planks showcasing seasonal change."},
  {"id":"logo-5","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"InterContinental logo - Photo by Tom Fisk"},
  {"id":"logo-6","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Ritz-Carlton logo - Photo by Tom Fisk"},
  {"id":"logo-7","url":"https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Westin logo - Photo by Tom Fisk"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "About", id: "about"},
            {name: "Features", id: "features"},
            {name: "Rooms", id: "rooms"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Hotel Luxe"
          buttonText="Book Now"
          buttonVariant="text-stagger"
        />
      </div>

      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroSplit
            title="Welcome to Hotel Luxe"
            description="Experience the finest luxury and comfort at our exquisite hotel."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              {text: "Explore More", href: "about"},
              {text: "Book Your Stay", href: "rooms"}
            ]}
          />
        </div>
      </div>

      <div id="socialProof" data-section="socialProof" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SocialProofTwo
            logos={[
              assetMap.find(a => a.id === "logo-1")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-2")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-3")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-4")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-5")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-6")?.url ?? "/public/images/placeholder.webp",
              assetMap.find(a => a.id === "logo-7")?.url ?? "/public/images/placeholder.webp"
            ]}
            title="Trusted by Renowned Brands"
            description="Our guests include top industry leaders and global brands."
          />
        </div>
      </div>

      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SplitAbout
            title="About Us"
            description="Discover our heritage and commitment to luxury and service."
            bulletPoints={[
              {title: "Exquisite Design", description: "Elegant interiors and architecture.", icon: Sparkles},
              {title: "Unmatched Comfort", description: "Luxury rooms and amenities.", icon: Bed},
              {title: "Superior Service", description: "Personalized and attentive service.", icon: Smile}
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FeatureCardOne
            title="Our Features"
            description="Experience luxury at its finest with our exclusive features."
            features={[
              {
                title: "Luxury Pool",
                description: "Dive into relaxation at our sparkling pool.",
                imageSrc: assetMap.find(a => a.id === "feature-image-1")?.url ?? "/public/images/placeholder.webp"
              },
              {
                title: "Spa & Wellness",
                description: "Revitalize with our spa treatments.",
                imageSrc: assetMap.find(a => a.id === "feature-image-2")?.url ?? "/public/images/placeholder.webp"
              },
              {
                title: "Gourmet Dining",
                description: "Savor exquisite dishes at our restaurant.",
                imageSrc: assetMap.find(a => a.id === "feature-image-3")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TestimonialCardOne
            title="What Our Guests Say"
            description="Hear from our satisfied guests who enjoyed their stay."
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO",
                company: "TechCorp",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "CTO",
                company: "InnovateLab",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Marketing Director",
                company: "GrowthCo",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url ?? "/public/images/placeholder.webp"
              },
              {
                id: "4",
                name: "David Kim",
                role: "Product Manager",
                company: "StartupXYZ",
                rating: 5,
                imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url ?? "/public/images/placeholder.webp"
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactSplit
            tag="Reach Us"
            title="Contact Us"
            description="We're here to help. Get in touch with us today."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterLogoEmphasis
            columns={[
              {items: [{label: "Home", href: "/"}, {label: "About", href: "about"}, {label: "Features", href: "features"}]},
              {items: [{label: "Rooms", href: "rooms"}, {label: "Contact", href: "contact"}]}
            ]}
            logoText="Hotel Luxe"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
