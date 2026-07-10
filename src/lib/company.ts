/**
 * Verified company facts sourced from https://www.bridgepointconnections.org/
 * Do not invent contact details, claims, or credentials beyond this data.
 */

export const company = {
  name: "Bridgepoint Connections",
  shortName: "Bridgepoint",
  tagline:
    "Helping professionals integrate faith and spiritual values with their work and life",
  mission:
    "Bridgepoint's mission is to help business people experience a practical, relevant 24/7 relationship with God so that they can achieve a greater degree of satisfaction and success in all aspects of work and life. In other words, we help people access \"a personal lifeline to God,\" so they can meet and overcome life's challenges and set-backs in work and life.",
  industry: "Faith-based nonprofit for business professionals",
  category: "Professional networking, spiritual formation, and mission engagement",
  audience:
    "Business professionals and leaders seeking to integrate faith with work and life",
  serviceArea:
    "Northern Virginia and the greater Washington, D.C. metro area, with online programs and international mission trips",
  contact: {
    email: "info@bridgepointconnections.org",
    address: {
      street: "1930 Isaac Newton Square, Suite 205",
      city: "Reston",
      state: "VA",
      zip: "20190",
      country: "US",
    },
    taxId: "39-5110811",
  },
  officialSite: "https://www.bridgepointconnections.org/",
  nm2tech: {
    name: "NM2TECH",
    url: "https://nm2tech.com/",
  },
} as const;

export const services = [
  {
    id: "breakfasts-luncheons",
    title: "Breakfasts & Luncheons",
    summary:
      "Events combining round table networking and an inspirational keynote from a local business owner or leader.",
    details:
      "These events provide both informal and formal networking, giving attendees the opportunity to meet quality professionals they can know, like and trust in order to do business, share referrals and find authentic Christian community. Each event includes a time of roundtable networking, a delicious meal, and a short inspirational keynote from a local business owner or leader.",
    href: "https://www.bridgepointconnections.org/breakfasts-luncheons",
  },
  {
    id: "networking-events",
    title: "Networking Events",
    summary:
      "Informal opportunities such as Bridgepoint After Hours for business professionals to network and meet other like-minded men and women.",
    details:
      "Bridgepoint After Hours is an after-work meet and greet where food and drinks are served in a relaxing environment. It's a time to meet new people, renew acquaintances, and connect with faith-driven professionals to do business, share referrals, and find authentic friendships and community. These events usually last about 1½ hours and do not have a structured keynote presentation.",
    href: "https://www.bridgepointconnections.org/networking-events",
  },
  {
    id: "study-groups",
    title: "Study Groups",
    summary:
      "Weekly online or in-person meetings that discuss what the Bible has to say about integrating faith, work and life.",
    details:
      "Discussion/study groups are small groups (six to twenty people) that usually meet weekly for four to ten weeks. Series have included \"Balancing Life's Competing Demands,\" \"Thank God It's Monday — Connecting God With Your Work,\" and \"Practical Christian Living.\" Most groups meet in offices before work, during lunch, or after work. Formats include a live presentation followed by breakout discussion or a video-based presentation followed by breakouts.",
    href: "https://www.bridgepointconnections.org/study-groups",
  },
  {
    id: "mission-trips",
    title: "Mission Trips",
    summary:
      "Opportunities for business professionals to share love, hope and faith with people in other countries in a seven-to-ten-day immersion experience.",
    details:
      "Bridgepoint Mission Projects empower business professionals to use their expertise and platform as a leader to inspire people in another country. Trips are conducted in partnership with other mission organizations (e.g., East West Ministries) and local churches. Projects typically last 7–10 days and focus on visiting people in their homes while working alongside indigenous churches and pastors of various denominations.",
    href: "https://www.bridgepointconnections.org/mission-trips",
  },
  {
    id: "referral-group",
    title: "Referral Networking Group",
    summary:
      "The Fairfax Area Believers Team Network/Bridgepoint group develops business networking relationships with those who share similar faith and values.",
    details:
      "An exclusive category networking group unified and committed to meaningful introductions, engaging conversations, and referral partnerships. This is a collaborative effort between Bridgepoint and Team Network, a networking organization that provides members with networking opportunities through referrals and personal introductions.",
    href: "https://www.bridgepointconnections.org/referral-group",
  },
] as const;

export const upcomingPrograms = [
  {
    id: "networking-breakfast",
    category: "In-Person Networking",
    title: "Networking Breakfast",
    subtitle: "“Ignite Your Life” with John Mizerak",
    when: "Friday, July 31, 2026 · 8:00–9:30 a.m. ET",
    where: "Ridgetop Coffee & Tea, 21631 Ridgetop Circle, Sterling, VA 20166",
    cost: "$30 in advance / $40 at the door",
    note: "Start your day with networking, good food, and inspiration.",
    href: "https://www.bridgepointconnections.org/breakfasts-luncheons",
  },
  {
    id: "rally-point",
    category: "Online Networking",
    title: "“Rally Point” Online Networking",
    subtitle: "Networking + Speakers + Discussions",
    when: "Every Monday · 4:00–5:15 p.m. ET",
    where: "Online via Zoom",
    cost: "Free, but please register",
    note: "Themes, guest speakers, topical discussions, and intros. Co-sponsored by Team Network.",
    href: "https://www.bridgepointconnections.org/networking-events",
  },
  {
    id: "referral-group",
    category: "Referral Networking",
    title: "“Fairfax Area Believers” Referral Group",
    subtitle: "Faith-based exclusive category networking",
    when: "Weekly on Tuesdays · 12:00–1:15 p.m. (First Tuesday in-person at Houlihan's, Herndon)",
    where: "Houlihan's, Herndon (first Tuesday) · Zoom other Tuesdays",
    cost: "Call for pricing — Curt Kowalski: 301-260-0060 · Phil Kratovil: 678-662-3913",
    note: "A collaborative effort between Bridgepoint and Team Network.",
    href: "https://www.bridgepointconnections.org/referral-group",
  },
  {
    id: "mission-ecuador",
    category: "Mission Trip",
    title: "Mission Trip to Ecuador",
    subtitle: "Seven-day immersion experience",
    when: "August 23–30, 2026",
    where: "Ecuador",
    cost: "Contact for details",
    note: "Work alongside local churches and pastors to conduct basic medical clinics in poor communities. For info, contact Lee Self at lself@ref.global.",
    href: "https://www.bridgepointconnections.org/mission-trips",
  },
  {
    id: "study-groups",
    category: "Study Groups",
    title: "Weekly Study Groups",
    subtitle: "Faith, work, and life discussion",
    when: "Currently on summer break until September",
    where: "Online and in-person options when in session",
    cost: "See program announcements",
    note: "Small groups of six to twenty people meeting weekly for four to ten weeks.",
    href: "https://www.bridgepointconnections.org/study-groups",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I love attending the Bridgepoint events! The networking is fantastic and my biggest client has come from a Bridgepoint contact. Plus, I love all the inspiring stories that come from the speakers' lives.",
    attribution: "Breakfast Attendee",
  },
  {
    quote:
      "I was left speechless after attending your luncheon! The speaker was very genuine and sincere and his talk came from deep in his soul and touched me greatly. Thanks for all you do!",
    attribution: "Luncheon Attendee",
  },
  {
    quote:
      "Going on a Bridgepoint mission trip was life transforming for me. I was able to share the love of Jesus with dozens of people who were receptive and open. I came home a completely different person!",
    attribution: "Mission Trip Participant",
  },
] as const;

export const trustPoints = [
  {
    title: "Faith & work together",
    description:
      "Practical pathways to integrate spiritual values with professional life—not theory alone.",
  },
  {
    title: "Northern Virginia community",
    description:
      "In-person gatherings across Sterling, Herndon, Reston, and the Fairfax area, plus online options.",
  },
  {
    title: "Trusted partnerships",
    description:
      "Mission trips in partnership with organizations such as East West Ministries and local churches; referral networking with Team Network.",
  },
  {
    title: "Transparent nonprofit",
    description:
      "Bridgepoint Connections is a nonprofit organization (Tax ID #39-5110811) based in Reston, VA.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Explore a gathering",
    description:
      "Start with a breakfast, luncheon, After Hours event, or free Rally Point online session.",
  },
  {
    step: "02",
    title: "Build authentic relationships",
    description:
      "Meet professionals you can know, like, and trust—for business, referrals, and Christian community.",
  },
  {
    step: "03",
    title: "Go deeper",
    description:
      "Join a study group, referral networking group, or a mission trip immersion experience.",
  },
] as const;

export const faqs = [
  {
    question: "What is Bridgepoint Connections?",
    answer:
      "Bridgepoint Connections is a nonprofit that helps professionals integrate faith and spiritual values with their work and life. Its mission is to help business people experience a practical, relevant 24/7 relationship with God so they can achieve greater satisfaction and success in work and life.",
  },
  {
    question: "Who is Bridgepoint for?",
    answer:
      "Bridgepoint serves business professionals and leaders—men and women—who want authentic Christian community, meaningful networking, and practical ways to connect faith with everyday work.",
  },
  {
    question: "Where do events take place?",
    answer:
      "In-person events are held in Northern Virginia locations such as Sterling, Herndon, and the Fairfax area. Online options include Rally Point via Zoom and online study groups when in session. The organization is based at 1930 Isaac Newton Square, Suite 205, Reston, VA 20190.",
  },
  {
    question: "How much do events cost?",
    answer:
      "Costs vary by program. For example, a Networking Breakfast has been listed at $30 in advance / $40 at the door. Rally Point online networking is free (registration requested). Referral group pricing is available by calling Curt Kowalski at 301-260-0060 or Phil Kratovil at 678-662-3913. Contact info@bridgepointconnections.org for current details.",
  },
  {
    question: "What is Rally Point?",
    answer:
      "“Rally Point” is Bridgepoint's virtual networking group held every Monday from 4:00–5:15 p.m. ET via Zoom. It includes networking, speakers, and discussions, and is co-sponsored by Team Network. It is free, but registration is requested.",
  },
  {
    question: "Are study groups currently meeting?",
    answer:
      "According to Bridgepoint's current website, weekly study groups are on summer break until September. When in session, groups typically meet weekly for four to ten weeks online or in person.",
  },
  {
    question: "How do I learn about the Ecuador mission trip?",
    answer:
      "The Mission Trip to Ecuador is scheduled for August 23–30, 2026. For information, contact Lee Self at lself@ref.global. Trips typically last 7–10 days and are conducted in partnership with mission organizations and local churches.",
  },
  {
    question: "How can I get started or contact Bridgepoint?",
    answer:
      "Email info@bridgepointconnections.org, or visit an upcoming breakfast, luncheon, Rally Point session, or other listed program. You can also sign up for email updates through Bridgepoint's website.",
  },
] as const;

export const valueProps = [
  "Roundtable networking with faith-driven professionals",
  "Inspirational keynotes from local business owners and leaders",
  "Study groups that connect Scripture with marketplace life",
  "Mission opportunities to share hope internationally",
] as const;
