// --- Page Constants ---
export const PAGES = {
  HOME: 'HOME',
  RESEARCH: 'RESEARCH',
  ACADEMIC: 'ACADEMIC',
  OUTPUT: 'OUTPUT',
  SERVICE: 'SERVICE'
};

// --- Contact Information ---
export const CONTACT = {
  name: "Parul Sharma",
  title: "PhD Candidate | Organic Chemistry",
  dept: "Department of Chemistry",
  inst: "Oklahoma State University",
  phone: "(405) 894-8072",
  email: "parshar@okstate.edu",
  location: "Stillwater, OK 74078",
  links: {
    scholar: "https://scholar.google.com/citations?user=I2ZA8WQAAAAJ",
    orcid: "https://orcid.org/0000-0002-7982-7494",
    linkedin: "https://www.linkedin.com/in/parul-sharma-9b7a5b189/"
  }
};

// --- Research Statement ---
export const OBJECTIVE = "As a dedicated organic chemist specializing in synthetic organic and natural product chemistry, I have developed extensive experience in natural product isolation during my master's studies and in small molecule synthesis during my Ph.D. training. Currently in my fourth year in Dr. Jimmie D. Weaver's lab, my research focuses on developing sustainable, visible light-driven methodologies for the synthesis of bioactive compounds. Through participation in the Institute for Future PUI Faculty, I aim to strengthen my teaching skills, gain insight into evidence-based pedagogy, and prepare for a future academic career that integrates impactful research with inclusive and engaging undergraduate education.";

// --- Publications ---
export const PUBLICATIONS = [
  { id: 1, year: "2025", authors: "Hanumanthu, R.*; Sharma, P.*; Ethridge, A.; Weaver, J. D. III", title: "Co-catalytic coupling of alkyl halides and alkenes: The curious role of lutidine", journal: "J. Amer. Chem. Soc.", volume: "147, 5238", doi: "10.1021/jacs.4c15812", featured: true },
  { id: 2, year: "2025", authors: "Kaur, A.; Kaur, R.; Bhardwaj, U.; Sharma, P.", title: "Utilizing deep eutectic solvents for the green extraction of anticancer alkaloids from Catharanthus roseus", journal: "Nat. Prod. Res.", volume: "1-9", doi: "10.1080/14786419.2025.2476199" },
  { id: 3, year: "2025", authors: "Sharma, P.; Kaur, R.", title: "A comprehensive review of Aloe vera: Composition, properties, processing, and applications", journal: "Nat. Prod. J.", volume: "16, e22103155339416", doi: "10.2174/0122103155339416241018063421" },
  { id: 4, year: "2025", authors: "Sharma, P.; Kaur, R.; Kaur, A.", title: "Antioxidant activity of deep eutectic solvent (DES) extracts of Catharanthus roseus", journal: "Discov. Plants", volume: "1, 242", doi: "10.1007/s44372-025-00328-8" },
  { id: 5, year: "2025", authors: "Sharma, P.; Kaur, R.", title: "Unlocking the Potential of Chia Seed: A Comprehensive Review of Its Potential Applications", journal: "Eur. J. Med. Plants.", volume: "36(1), 108–123", doi: "10.9734/ejmp/2025/v36i11242" },
  { id: 6, year: "2025", authors: "Kaur, R.; Sharma, P.; Bhardwaj, U.; Kaur, R.", title: "Dehydrocostus lactone: A comprehensive review on its isolation, chemical transformations, and pharmacological potential", journal: "Discov. Chem.", volume: "1, 131", doi: "10.1007/s44371-025-00194-z" },
  { id: 7, year: "2025", authors: "Kaur, N.; Kaur, R.; Bhardwaj, U.; Sharma, P.", title: "Isolation and derivatization of bioactive compounds from Zingiber zerumbet essential oil with antifungal activity against rice pathogens", journal: "Discover Plants (Preprint)", volume: "", doi: "10.21203/rs.3.rs-6116554/v1" },
  { id: 8, year: "2024", authors: "Kaur, R.; Kaur, R.; Singh, R.; Bhardwaj, U.; Sharma, P.", title: "Isolation and derivatization of bioactive compounds from Saussurea lappa roots with antifungal efficacy against plant pathogenic fungi", journal: "J. Biol. Act. Prod. Nat.", volume: "14, 551", doi: "10.1080/22311866.2024.2434569" },
  { id: 9, year: "2024", authors: "Sharma, P.; Kaur, R.; Bhardwaj, U.; Kaur, J.", title: "Chemical composition and antifungal potential of Vinca rosea leaf essential oil and extracts from Northern India", journal: "Cogent Food Agric.", volume: "10, 2382317", doi: "10.1080/23311932.2024.2382317" },
  { id: 10, year: "2024", authors: "Sharma, P.; Kaur, R.; Kaur, J.; Bhardwaj, U.", title: "Phytochemical profiling, antifungal potential of Vinca rosea extracts and isolated compound against wheat pathogens from Northern India", journal: "Discov. Plants", volume: "", doi: "10.21203/rs.3.rs-5257363/v1" },
  { id: 11, year: "2024", authors: "Sharma, P.; Kaur, R.", title: "Comprehensive analysis and therapeutic potential of ginger essential oil", journal: "J. Pharmacogn. Phytochem.", volume: "13, 420", doi: "10.22271/phyto.2024.v13.i3e.14984" },
  { id: 12, year: "2024", authors: "Sharma, P.; Singla, N.; Kaur, R.; Bhardwaj, U.", title: "A review on phytochemical constituents and pharmacological properties of Catharanthus roseus (L.) G. Don", journal: "J. Med. Plants Stud.", volume: "12, 131", doi: "10.22271/plants.2024.v12.i3b.1675" },
  { id: 13, year: "2024", authors: "Sharma, P.", title: "Pharmacological potentials and formulation strategies of Euphorbia hirta", journal: "Eur. J. Med. Plants.", volume: "35, 63", doi: "10.9734/ejmp/2024/v35i61208" },
  { id: 14, year: "2024", authors: "Sharma, P.; Kaur, R.", title: "Impact of chalcone on agriculture and its applications: An updated review", journal: "Eur. J. Med. Plants.", volume: "35, 81", doi: "10.9734/ejmp/2024/v35i61210" },
  { id: 15, year: "2024", authors: "Sharma, P.", title: "Exploring the bioactive constituents and medicinal properties of Hypericum androsaemum L.: A detailed review", journal: "J. Med. Plants Stud.", volume: "12, 385", doi: "10.22271/plants.2024.v12.i4e.1730" }
];

// --- Education ---
export const PREPARATION = [
  { inst: "Oklahoma State University", degree: "PhD in Chemistry", period: "Expected May 2027", loc: "Stillwater, OK, USA" },
  { inst: "Punjab Agricultural University", degree: "BS-MS Dual Degree (5 years)", period: "2021", loc: "Ludhiana, India" },
  { inst: "Punjab Agricultural University", degree: "French Certificate", period: "2021", loc: "Ludhiana, India" }
];

// --- Work Experience ---
export const APPOINTMENTS = [
  { role: "Graduate Research Assistant", org: "Oklahoma State University", period: "2023 - Present", loc: "Stillwater, OK, USA" },
  { role: "Graduate Teaching Assistant", org: "Oklahoma State University", period: "2022 - 2023", loc: "Stillwater, OK, USA" },
  { role: "Staff Manager", org: "AS Components", period: "2021 - 2022", loc: "Ludhiana, India" },
  { role: "Chemistry Tutor", org: "Self-employed", period: "2019 - 2022" },
  { role: "Graduate Research Assistant", org: "Punjab Agricultural University", period: "2019 - 2021", loc: "Ludhiana, India" }
];

// --- Awards & Honors ---
export const HONORS = [
  { year: "2025", title: "Distinguished Graduate Fellowship in Chemistry", org: "Oklahoma State University" },
  { year: "2021", title: "Merit Certificate: Highest Overall Cumulative GPA in Chemistry", org: "Punjab Agricultural University" },
  { year: "2019", title: "Poster Presentation Participation", org: "PAU" }
];

// --- Conference Presentations ---
export const POSTERS = [
  { title: "Co-catalytic Coupling of Alkyl Halides and Alkenes; the Curious Role of Lutidine", event: "GPCS Symposium", loc: "Norman, OK", date: "Aug 24, 2024" },
  { title: "ACS Southwest Regional Meeting", loc: "Waco, TX", date: "Oct 2024" },
  { title: "National students conference on spectroscopy", loc: "Amritsar", date: "Oct 2020" }
];

// --- Service & Outreach ---
export const SERVICE = [
  { category: "Academic Service", items: ["Reviewer: Chemistry & Biodiversity Journal (2025-Present)", "Judge: Oklahoma State Science and Engineering Fair (2023)", "ECS Social Media Officer (2023-Current)"] },
  { category: "Outreach & Community", items: ["Student Volunteer: National Service Scheme (2016-2019)", "Grandparent University Event Volunteer (2023)", "Indian Student Association Member"] }
];

// --- Certifications & Licenses ---
export const LICENSES = [
  { title: "Programming for Everyday (Python)", org: "Coursera", id: "HNG2PPWFVFHZ", date: "Nov 2020" },
  { title: "Analytical Techniques in Molecules and Materials", org: "SLIET", date: "Jun 2020" }
];

// --- Professional Memberships ---
export const MEMBERSHIPS = [
  "American Chemical Society (Member)",
  "Phi Lambda Upsilon Chemistry Honor Society",
  "Electrochemical Society (Social Media Officer)"
];
