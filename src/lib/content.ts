export interface Service {
  title: string;
  image: string;
  href: string;
}

export interface NewsArticle {
  title: string;
  subtitle?: string;
  heading?: string;
  body: string;
  image?: string;
  href: string;
}

export interface MissionSection {
  title?: string;
  body: string;
  image?: string;
  href?: string;
}

export const siteContent = {
  notice:
    "We are not contractors. We use estimate forms to suggest what an appropriate donation might be.",

  brand: {
    name: "Dreamcoat Home Improvement",
    phone: "703-626-6516",
    tagline: "DREAMCOAT Quality Painting and Home Improvement Services",
    secondaryTagline:
      "Helping those that need a second chance and Serving Our Customers!"
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/home-improvement-services" },
    { label: "About", href: "/about-us" },
    { label: "News", href: "/articles" },
    { label: "The Mercy Fund", href: "/dreamcoat-mercy-fund" },
    { label: "Contact", href: "/contact-dreamcoat" }
  ],

  hero: {
    title: "DREAMCOAT Quality Painting and Home Improvement Services",
    subtitle:
      "Helping those that need a second chance and Serving Our Customers!",
    buttonText: "Get Started",
    buttonHref: "#contact"
  },

  introduction: {
    title: "Welcome To Dreamcoat",
    paragraphs: [
      "Professional Quality Painting & Home Improvement Specialists--we do all types of home construction work and handyman services inside and outside your home. Certified and insured with all work guaranteed. If you are dissatisfied, then so are we.",

      "Dreamcoat has been selected by OAR to create a vocational program to teach painters. We have partnered with Catholic Charities to combat the Opioid crisis and work with marginalized people. Dreamcoat also works with Knights of Columbus to help those who are unable to afford regular contractor prices for work."
    ],
    buttonText: "Get Started",
    buttonHref: "#contact"
  },

  services: [
    {
      title: "Painting",
      image: "/images/painting.jpg",
      href: "/home-improvement-services#goto-painting"
    },
    {
      title: "Custom Accent Walls, Concrete & Brick",
      image: "/images/accent-wall.jpg",
      href: "/home-improvement-services#goto-sidewalk"
    },
    {
      title: "Carpentry & Cabinetry",
      image: "/images/carpentry.jpg",
      href: "/home-improvement-services#goto-carpentry"
    },
    {
      title: "Doors & Windows",
      image: "/images/doors-windows.jpg",
      href: "/home-improvement-services#goto-windows"
    },
    {
      title: "Deck & Patio",
      image: "/images/deck.jpg",
      href: "/home-improvement-services#goto-decks"
    },
    {
      title: "Handyman Services",
      image: "/images/handyman.jpg",
      href: "/home-improvement-services#goto-handyman"
    }
  ] satisfies Service[],

  news: [
    {
      title: "Catholic Charities Helps Ex-Offenders",
      subtitle:
        "Dave Druitt Mentors Dan Stendeback, a Member of the Catholic Charities Welcome Home Re-Entry Program",
      body:
        "Arlington diocesan Catholic Charities is trying to help ex-offenders, like Stendeback, as part of their Welcome Home Re-Entry Program. Stendeback became the program’s first client after being released from the Fairfax Adult Detention Center Oct. 11. Dave Druitt, his mentor, got him involved in the pilot program “for people who want to go into a sober living house.”",
      href: "/article/catholic-charities-helps-ex-offenders"
    },
    {
      title: "Chamber of Commerce Awards Ceremony",
      heading: "Veteran Community Service Award",
      subtitle: "The Greater Springfield Chamber of Commerce",
      body:
        "Veteran Community Service Award recipient Druitt is a Vietnam veteran who turned to trouble and drinking when he returned from war. He worked for a national security team for 25 years — until his PTSD flared up in a way that pushed him to seek a spiritual solution. A near fatal auto accident in 2001 finalized his decision. Soon his life revolved around church, prayer groups, prison ministries and Alcoholics Anonymous.",
      href: "/article/chamber-commerce-awards-ceremony"
    }
  ] satisfies NewsArticle[],

  mission: [
    {
      body:
        "We are not-for-profit & our priorities are : God, Family & Country. We are dedicated to serving our customers, being good neighbors and assisting our employees such as veterans and those previously out of work. Allow us to work for you at the lowest possible price and receive top quality workmanship while knowing you are making our area a better place to live. The seed is sprouting.",
      image: "/images/american-flag-dreamcoat.jpg"
    },
    {
      body:
        "Dreamcoat was honored by the annual Chamber of Commerce Award for Civic Contribution at the annual dinner Dec 14, 2017 at the Hilton Springfield. The company exists to give second chances to the down and out, specifically combat veterans and others incarcerated due to drugs and alcohol, and partners with Catholic Charities and Knights of Columbus.",
      image: "/images/award.jpg"
    },
    {
      body:
        "Our corporate motto is “We aren’t asking for a handout. We are asking for work.” Is being honored for our contributions to the community. In this day of disability, opioid addiction, and marginalization of people who still have good hearts and just need 2 or 3 others gathered with them in the name of making a better life for themselves, Dreamcoat stands in the gap and offers a second chance to do good work!",
      image: "/images/putting-up-post.jpg"
    }
  ] satisfies MissionSection[]
};