interface Article {
  article: string;
  title: string;
}

interface Part {
  part: string;
  title: string;
  articles: Article[];
}

const indianConstitutionArticles: Part[] = [
  {
    part: "Part I",
    title: "The Union and its Territory (1-4)",
    articles: [
      { article: "Article 1", title: "Name and territory of the Union" },
      {
        article: "Article 2",
        title: "Admission or establishment of new States",
      },
      {
        article: "Article 3",
        title:
          "Formation of new States and alteration of areas, boundaries or names of existing States",
      },
      {
        article: "Article 4",
        title:
          "Laws made under Articles 2 and 3 to provide for the amendment of the First and the Fourth Schedule and supplemental, incidental and consequential matters",
      },
    ],
  },
  {
    part: "Part II",
    title: "Citizenship (5-11)",
    articles: [
      {
        article: "Article 5",
        title: "Citizenship at the commencement of the Constitution",
      },
      {
        article: "Article 6",
        title:
          "Rights of citizenship of certain persons who have migrated to India from Pakistan",
      },
      {
        article: "Article 7",
        title: "Rights of citizenship of certain migrants to Pakistan",
      },
      {
        article: "Article 8",
        title:
          "Rights of citizenship of certain persons of Indian origin residing outside India",
      },
      {
        article: "Article 9",
        title:
          "Persons voluntarily acquiring citizenship of a foreign State not to be citizens",
      },
      {
        article: "Article 10",
        title: "Continuance of the rights of citizenship",
      },
      {
        article: "Article 11",
        title: "Parliament to regulate the right of citizenship by law",
      },
    ],
  },
  {
    part: "Part III",
    title: "Fundamental Rights (12-35)",
    articles: [
      { article: "Article 12", title: "Definition of the State" },
      {
        article: "Article 13",
        title:
          "Laws inconsistent with or in derogation of the fundamental rights",
      },
      { article: "Article 14", title: "Equality before law" },
      {
        article: "Article 15",
        title:
          "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",
      },
      {
        article: "Article 16",
        title: "Equality of opportunity in matters of public employment",
      },
      { article: "Article 17", title: "Abolition of Untouchability" },
      { article: "Article 18", title: "Abolition of titles" },
      {
        article: "Article 19",
        title: "Protection of certain rights regarding freedom of speech, etc.",
      },
      {
        article: "Article 20",
        title: "Protection in respect of conviction for offences",
      },
      {
        article: "Article 21",
        title: "Protection of life and personal liberty",
      },
      { article: "Article 21A", title: "Right to education" },
      {
        article: "Article 22",
        title: "Protection against arrest and detention in certain cases",
      },
      {
        article: "Article 23",
        title: "Prohibition of traffic in human beings and forced labour",
      },
      {
        article: "Article 24",
        title: "Prohibition of employment of children in factories, etc.",
      },
      {
        article: "Article 25",
        title:
          "Freedom of conscience and free profession, practice and propagation of religion",
      },
      { article: "Article 26", title: "Freedom to manage religious affairs" },
      {
        article: "Article 27",
        title:
          "Freedom as to payment of taxes for promotion of any particular religion",
      },
      {
        article: "Article 28",
        title:
          "Freedom as to attendance at religious instruction or religious worship in certain educational institutions",
      },
      { article: "Article 29", title: "Protection of interests of minorities" },
      {
        article: "Article 30",
        title:
          "Right of minorities to establish and administer educational institutions",
      },
      { article: "Article 31", title: "Repealed" },
    ],
  },
  {
    part: "Part IV: Directive Principles of State Policy",
    title: "Fundamental Rights (36-51)",
    articles: [
      {
        article: "Article 36",
        title: "Defines 'State' as per the meaning inarticle : Article 12.",
      },
      {
        article: "Article 37",
        title:
          "Directive Principles are not enforceable by any court, but they are fundamental in the governance of the country and aim to create a social order for the promotion of the welfare of the people.",
      },
      {
        article: "Article 38",
        title:
          "Directs the State to secure a social order promoting the welfare of people and reducing inequalities in income, status, facilities, and opportunities.",
      },
      {
        article: "Article 39",
        title:
          "The State shall direct its policies toward ensuring: Adequate livelihood for all citizens, equitable distribution of material resources, prevention of concentration of wealth, equal pay for equal work for both men and women, protection of health and strength of workers, and children from exploitation.",
      },
      {
        article: "Article 39A",
        title:
          "The State shall provide free legal aid to ensure justice for all.",
      },
      {
        article: "Article 40",
        title:
          "Directs the State to organize village panchayats and endow them with powers for self-government.",
      },
      {
        article: "Article 41",
        title:
          "Provides for the right to work, education, and public assistance in cases of unemployment, old age, sickness, and disablement.",
      },
      {
        article: "Article 42",
        title:
          "The State shall make provisions for securing humane working conditions and maternity relief.",
      },
      {
        article: "Article 43",
        title:
          "The State shall endeavor to secure living wages, decent standards of life, and participation of workers in industrial management.",
      },
      {
        article: "Article 43A",
        title:
          "Provides for the participation of workers in the management of industries.",
      },
      {
        article: "Article 44",
        title:
          "The State shall endeavor to secure a Uniform Civil Code for all citizens.",
      },
      {
        article: "Article 45",
        title:
          "The State shall provide early childhood care and education for children below the age of six years.",
      },
      {
        article: "Article 46",
        title:
          "Directs the State to promote the educational and economic interests of Scheduled Castes, Scheduled Tribes, and other weaker sections.",
      },
      {
        article: "Article 47",
        title:
          "Directs the State to improve public health and raise the level of nutrition.",
      },
      {
        article: "Article 48",
        title:
          "The State shall organize agriculture and animal husbandry based on modern and scientific methods.",
      },
      {
        article: "Article 48A",
        title:
          "The State shall endeavor to protect and improve the environment and safeguard forests and wildlife.",
      },
      {
        article: "Article 49",
        title:
          "The State shall protect historic monuments, places, and objects of artistic or national importance.",
      },
      {
        article: "Article 50",
        title:
          "Directs the State to separate the judiciary from the executive in public services.",
      },
      {
        article: "Article 51",
        title:
          "Directs the State to promote international peace, respect for international law, and foster goodwill among nations.",
      },
    ],
  },

  {
    part: "Part IV/A: Fundamental Duties",
    title: "Fundamental Rights (51A)",
    articles: [
      {
        article: "Article 51A(a)",
        title:
          "To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem.",
      },
      {
        article: "Article 51A(b)",
        title:
          "To cherish and follow the noble ideals which inspired our national struggle for freedom.",
      },
      {
        article: "Article 51A(c)",
        title:
          "To uphold and protect the sovereignty, unity, and integrity of India.",
      },
      {
        article: "Article 51A(d)",
        title:
          "To defend the country and render national service when called upon to do so.",
      },
      {
        article: "Article 51A(e)",
        title:
          "To promote harmony and the spirit of common brotherhood amongst all the people of India, transcending religious, linguistic, regional or sectional diversities.",
      },
      {
        article: "Article 51A(f)",
        title:
          "To value and preserve the rich heritage of our composite culture.",
      },
      {
        article: "Article 51A(g)",
        title:
          "To protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.",
      },
      {
        article: "Article 51A(h)",
        title:
          "To develop the scientific temper, humanism and the spirit of inquiry and reform.",
      },
      {
        article: "Article 51A(i)",
        title: "To safeguard public property and to abjure violence.",
      },
      {
        article: "Article 51A(j)",
        title:
          "To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavor and achievement.",
      },
    ],
  },
  {
    part: "Part V",
    title: "President (52-62)",
    articles: [
      {
        article: "Article 52",
        title:
          "The President of India",
      },
      {
        article: "Article 53",
        title:
          "Executive Power of the Union",
      },
      {
        article: "Article 54",
        title:
          "Election of President",
      },
      {
        article: "Article 55",
        title:
          "Manner of Election of President",
      },
      {
        article: "Article 56",
        title:"Term of office of President",
      },
      {
        article: "Article 57",
        title:"Eligibility for re-election",
      },
      {
        article: "Article 58",
        title:"Qualifications for Election as President",
      },
      {
        article: "Article 59",
        title:"Conditions of President’s office",
      },
      {
        article: "Article 60",
        title:"Oath or affirmation by the President",
      },
      {
        article: "Article 61",
        title:"Procedure for Impeachment of the President Time of holding election to fill a vacancy in the office of President and the term of office or person elected to fill a casual vacancy",
      },
      {
        article: "Article 62",
        title:
          "An election to fill the office of the President shall be held before the expiration of the term of office of the President.",
      },
    ],
  },

  {
    part: "Part V",
    title: "THE VICE PRESIDENT (63-73)",
    articles: [
      {
        article: "Article 63",
        title:"The Vice-President Of India",
      },{
        article: "Article 64",
        title:"The Vice-President to be ex-officio Chairman of the Council of States",
      },{
        article: "Article 65",
        title:"The Vice-President to act as President or to discharge his functions during casual vacancies in the office, or the absence, of the President",
      },{
        article: "Article 66",
        title:"Election of Vice-President",
      },{
        article: "Article 67",
        title:"Term of office of Vice-President",
      },{
        article: "Article 68",
        title:"Time of holding election to fill a vacancy in the office of Vice-President and the term of office of the person elected to fill a casual vacancy",
      },{
        article: "Article 69",
        title:"Oath or affirmation by the Vice-President",
      },{
        article: "Article 70",
        title:"Discharge of President’s functions in other contingencies",
      },{
        article: "Article 71",
        title:"Matters relating to, or connected with, the election of a President or Vice-President",
      },{
        article: "Article 72",
        title:"Power of President to grant pardons, etc., and to suspend, remit, or commute sentences in certain cases",
      },{
        article: "Article 73",
        title:"Extent of executive power of the Union*",
      },
    ],
  },

  {
    part: "Part VII",
    title: "THE STATES IN PART B OF THE FIRST SCHEDULE (238)",
    articles: [
      {
        article: "238",
        title: "[Repealed.]",
      },
    ],
  },
  {
    part: "Part VIII",
    title: "THE UNION TERRITORIES (239-241)",
    articles: [
      {
        article: "239",
        title: " Administration of Union territories.",
      },
      {
        article: "239 A",
        title:
          "Creation of local Legislatures or Council of Ministers or both for certain Union territories.",
      },
      {
        article: "239 AA ",
        title: "Special provisions with respect to Delhi.",
      },
      {
        article: "239 AB",
        title: "Provision in case of failure of constitutional machinery.",
      },
      {
        article: "239B",
        title:
          "Power of the administrator to promulgate Ordinances during recess of the Legislature.",
      },
      {
        article: "240",
        title:
          "Power of the President to make regulations for certain Union territories.",
      },
      {
        article: "241",
        title: "High Courts for Union territories.",
      },
      {
        article: "242",
        title: " [Repealed.]",
      },
    ],
  },
  {
    part: "Part IX (243 A-O)",
    title: "THE PANCHAYATS",
    articles: [
      {
        article: "Article 243",
        title:
          "This article defines the terms related to Panchayats, such as 'Panchayat' and 'Panchayat area.' It provides for the organization of Panchayats in rural areas and lays down the framework for their functions.",
      },
      {
        article: "Article 243A",
        title:
          "The article provides for the establishment of Gram Sabha, a village-level assembly, to work as a foundation for self-governance.",
      },
      {
        article: "Article 243B",
        title:
          "This article specifies that the Panchayats shall be organized at the district, intermediate, and village levels as per the provisions of the Constitution.",
      },
      {
        article: "Article 243C",
        title:
          "This article provides for the composition of Panchayats, including the election of representatives, and defines the process for determining the representation for women, Scheduled Castes, and Scheduled Tribes.",
      },
      {
        article: "Article 243D",
        title:
          "This article provides for the reservation of seats in Panchayats for women, Scheduled Castes, and Scheduled Tribes in accordance with the population of the concerned areas.",
      },
      {
        article: "Article 243E",
        title:
          "This article lays down the provision for the holding of regular elections to Panchayats every five years and provides for the dissolution of Panchayats in case of failure to elect members.",
      },
      {
        article: "Article 243F",
        title:
          "This article provides for the disqualification of Panchayat members, detailing reasons for disqualification such as the failure to attend meetings or criminal charges.",
      },
      {
        article: "Article 243G",
        title:
          "This article empowers State Legislatures to make laws that confer upon Panchayats the authority to perform functions related to rural development, health, education, etc.",
      },
      {
        article: "Article 243H",
        title:
          "This article provides for the allocation of financial resources to Panchayats and allows the State Legislatures to determine the financial powers of the Panchayats.",
      },
      {
        article: "Article 243I",
        title:
          "This article provides for the establishment of a Finance Commission for Panchayats, which will recommend the allocation of grants and funds to the Panchayats.",
      },
      {
        article: "Article 243J",
        title:
          "This article authorizes the President to make provisions regarding the election of Panchayats in the Union Territories.",
      },
      {
        article: "Article 243K",
        title:
          "This article provides for the establishment of State Election Commissions for conducting elections to Panchayats, ensuring impartiality and transparency.",
      },
      {
        article: "Article 243L",
        title:
          "This article allows the President to modify or alter the provisions regarding the organization of Panchayats in the case of the Union Territories.",
      },
      {
        article: "Article 243M",
        title:
          "This article enables the provisions of Part IX to apply to the States, except Jammu and Kashmir, which are exempt from the provision of these articles.",
      },
      {
        article: "Article 243N",
        title:
          "This article mandates that the provisions of Part IX relating to Panchayats will apply only to rural areas and does not apply to urban areas.",
      },
      {
        article: "Article 243O",
        title:
          "This article prohibits courts from intervening in Panchayat elections or questioning the validity of the actions or decisions of a Panchayat, except as per provisions outlined in the Constitution.",
      },
    ],
  },
  {
    part: "Part IX A",
    title: "PART IXA: THE MUNICIPALITIES (243 P-ZG)",
    articles: [
      {
        article: "Article 243P",
        title:
          "This article defines the terms related to municipalities, such as 'Municipality' and 'Municipal area.' It provides the foundation for establishing municipalities in urban areas.",
      },
      {
        article: "Article 243Q",
        title:
          "This article provides for the constitution of Municipalities in every city and town. It specifies that Municipalities should be either Nagar Panchayats, Municipalities, or Municipal Corporations, depending on the size and population of the area.",
      },
      {
        article: "Article 243R",
        title:
          "This article specifies the composition of Municipalities, including the election of representatives, and it allows for representation of women, Scheduled Castes, and Scheduled Tribes in accordance with the population of the area.",
      },
      {
        article: "Article 243S",
        title:
          "This article provides for the qualifications of members of the Municipalities, including age, citizenship, and the requirement to be a voter in the Municipality area.",
      },
      {
        article: "Article 243T",
        title:
          "This article lays down provisions for the holding of regular elections to Municipalities every five years and specifies the manner in which elections are to be conducted.",
      },
      {
        article: "Article 243U",
        title:
          "This article provides for the disqualification of Municipal members, detailing reasons for disqualification such as failure to attend meetings or criminal charges.",
      },
      {
        article: "Article 243V",
        title:
          "This article empowers State Legislatures to make laws that confer upon Municipalities the authority to perform functions related to urban planning, health, sanitation, etc.",
      },
      {
        article: "Article 243W",
        title:
          "This article provides for the determination of the powers, functions, and responsibilities of Municipalities with respect to urban governance, subject to the guidelines established by the State Legislature.",
      },
      {
        article: "Article 243X",
        title:
          "This article allows the State Legislatures to specify the financial powers and resources of Municipalities, including the power to levy taxes, collect fees, and receive grants.",
      },
      {
        article: "Article 243Y",
        title:
          "This article establishes the State Finance Commission for Municipalities, which will recommend the distribution of grants and financial resources for urban governance.",
      },
      {
        article: "Article 243Z",
        title:
          "This article provides for the establishment of a Metropolitan Planning Committee for metropolitan areas to coordinate development and planning in the city.",
      },
      {
        article: "Article 243ZA",
        title:
          "This article empowers the President of India to make provisions for the establishment of Municipalities in Union Territories and to apply the provisions of Part IX-A to them.",
      },
      {
        article: "Article 243ZB",
        title:
          "This article empowers the President of India to make provisions regarding the election of Municipalities in Union Territories, ensuring fairness and transparency in the election process.",
      },
      {
        article: "Article 243ZC",
        title:
          "This article lays down the procedure for the establishment and regulation of Municipalities in Union Territories, ensuring uniformity and governance in urban areas.",
      },
      {
        article: "Article 243ZD",
        title:
          "This article provides that the provisions related to municipalities shall apply to all urban areas except the State of Jammu and Kashmir (as it was before the abrogation of Article 370).",
      },
      {
        article: "Article 243ZE",
        title:
          "This article allows courts to intervene in municipal governance only on constitutional grounds and under the prescribed rules.",
      },
      {
        article: "Article 243ZF",
        title:
          "This article applies the provisions of Part IX-A of the Constitution in all States, except where modifications are made as per State-specific needs.",
      },
      {
        article: "Article 243ZG",
        title:
          "This article prevents the interference of courts in the matter of election disputes related to Municipalities, except as specified under the law.",
      },
    ],
  },
  {
    part: "PART IX B",
    title: "THE CO-OPERATIVE SOCIETIES",
    articles: [
      {
        article: "Article 243ZH",
        title:
          "This article defines the term 'Co-operative Society' for the purposes of this part and provides the framework for the establishment and regulation of co-operative societies in India.",
      },
      {
        article: "Article 243ZI",
        title:
          "This article empowers the legislature of each State to make laws to provide for the organization, functioning, and regulation of co-operative societies, including the establishment of a suitable authority for their governance.",
      },
      {
        article: "Article 243ZJ",
        title:
          "This article provides for the establishment of a Co-operative Election Authority to conduct elections for the governing bodies of co-operative societies, ensuring fairness and transparency.",
      },
      {
        article: "Article 243ZK",
        title:
          "This article empowers the government to dissolve or supersede the governing body of a co-operative society in case it is not functioning according to the prescribed laws and regulations.",
      },
      {
        article: "Article 243ZL",
        title:
          "This article mandates that the elections to the governing bodies of co-operative societies shall be conducted on the basis of adult suffrage, and it provides a uniform electoral process across all States.",
      },
      {
        article: "Article 243ZM",
        title:
          "This article establishes the Cooperative Societies Regulatory Authority, which will oversee the functioning and regulation of co-operative societies in India.",
      },
      {
        article: "Article 243ZN",
        title:
          "This article allows the State Legislature to provide for the appointment of a Registrar for co-operative societies who will maintain records and ensure compliance with the laws.",
      },
      {
        article: "Article 243ZO",
        title:
          "This article grants co-operative societies the legal recognition to function as autonomous bodies while still adhering to the legal framework and regulations set by the State government.",
      },
      {
        article: "Article 243ZP",
        title:
          "This article outlines the powers of the Co-operative Election Authority, including its role in conducting elections and resolving election disputes.",
      },
      {
        article: "Article 243ZQ",
        title:
          "This article empowers the legislature to make laws to ensure the financial stability of co-operative societies, including provision for audits, financial disclosures, and regulations concerning loans and deposits.",
      },
      {
        article: "Article 243ZR",
        title:
          "This article provides for the establishment of a central authority to regulate and coordinate co-operative societies at the national level, ensuring consistency in policies and practices.",
      },
      {
        article: "Article 243ZS",
        title:
          "This article sets out the provisions for the protection of the interests of co-operative societies' members, particularly in matters related to their rights and obligations.",
      },
      {
        article: "Article 243ZT",
        title:
          "This article states that the provisions of Part IX-B shall apply to all co-operative societies, including the implementation of regulatory and legislative frameworks established under the Indian Constitution.",
      },
    ],
  },

  {
    part: "PART X ",
    title: "THE SCHEDULED AND TRIBAL AREAS (244-244A)",
    articles: [
      {
        article: "Article 244",
        title:
          "This article provides for the administration and control of scheduled areas and tribal areas in India. It outlines the special powers of the President to make regulations for these areas and the role of the Governor in ensuring tribal welfare.",
      },
      {
        article: "Article 244A",
        title:
          "This article allows for the creation of an autonomous state within Assam for the tribes in certain areas, providing a framework for self-governance, while still maintaining constitutional control by the President.",
      },
    ],
  },

  {
    part: "PART XI",
    title: "RELATIONS BETWEEN THE UNION AND THE STATES",
    articles: [
      {
        article: "Article 245",
        title:
          "This article defines the extent of the legislative powers of Parliament and State Legislatures. It states that Parliament may make laws for the whole of India or any part of India, and similarly, a State Legislature may make laws for the State.",
      },
      {
        article: "Article 246",
        title:
          "This article provides for the distribution of legislative powers between the Union and the States, specifying the Union List, the State List, and the Concurrent List in the Seventh Schedule.",
      },
      {
        article: "Article 247",
        title:
          "This article allows Parliament to legislate on matters not enumerated in the Union or State Lists, but which are necessary for the implementation of international treaties or agreements.",
      },
      {
        article: "Article 248",
        title:
          "This article empowers Parliament to legislate on any matter not enumerated in the Union or State Lists under the Union's residuary powers.",
      },
      {
        article: "Article 249",
        title:
          "This article grants Parliament the authority to legislate on matters enumerated in the State List if the Rajya Sabha passes a resolution allowing Parliament to do so.",
      },
      {
        article: "Article 250",
        title:
          "This article allows Parliament to legislate on matters in the State List during a national emergency, if the President declares such an emergency.",
      },
      {
        article: "Article 251",
        title:
          "This article gives Parliament the power to override State laws when making laws on matters in the Concurrent List if a State law is inconsistent with a Union law.",
      },
      {
        article: "Article 252",
        title:
          "This article allows Parliament to legislate on matters in the State List if two or more States pass resolutions requesting such legislation.",
      },
      {
        article: "Article 253",
        title:
          "This article empowers Parliament to make laws to give effect to international treaties and agreements, even on matters in the State List.",
      },
      {
        article: "Article 254",
        title:
          "This article provides for the resolution of conflicts between Union laws and State laws on matters in the Concurrent List, with Union law prevailing in case of inconsistency.",
      },
      {
        article: "Article 255",
        title:
          "This article states that the authority of the Parliament or State Legislature to make laws extends to all Indian States and Union Territories, except in cases where a State or Union Territory has specific exemptions.",
      },
      {
        article: "Article 256",
        title:
          "This article imposes a duty on States and Union Territories to comply with laws made by Parliament and to ensure that any laws made by them do not conflict with Union law.",
      },
      {
        article: "Article 257",
        title:
          "This article provides for the control of Union over States in matters of administrative cooperation, ensuring uniformity of laws and regulations across States.",
      },
      {
        article: "Article 258",
        title:
          "This article allows the Union to delegate executive authority to States in certain matters, subject to conditions set by the Union.",
      },
      {
        article: "Article 259",
        title:
          "This article enables the Union to enter into agreements with States to regulate matters of administration and governance.",
      },
      {
        article: "Article 260",
        title:
          "This article allows for the establishment of the jurisdiction of Union Territories and the areas where Union laws apply, including inter-State relations.",
      },
      {
        article: "Article 261",
        title:
          "This article grants full faith and credit to laws, judicial proceedings, and public records from one State in every other State.",
      },
      {
        article: "Article 262",
        title:
          "This article provides the framework for resolving disputes related to the water of inter-State rivers or river valleys, either by Parliament or by the establishment of an inter-State body.",
      },
      {
        article: "Article 263",
        title:
          "This article empowers the President to establish an inter-State Council for the coordination and resolution of matters of common interest between the Union and the States.",
      },
    ],
  },

  {
    part: "PART XII",
    title: "FINANCE, PROPERTY, CONTRACTS AND SUITS",
    articles: [
      {
        article: "Article 265",
        title:
          "This article states that no tax shall be levied or collected except by authority of law. It ensures that taxes are imposed only through the legal process and with the approval of Parliament or the State Legislature.",
      },
      {
        article: "Article 266",
        title:
          "This article deals with the Consolidated Funds of India and of the States, ensuring that all revenues and loans raised by the government shall be credited to these funds.",
      },
      {
        article: "Article 267",
        title:
          "This article provides for the establishment of a contingency fund for each State and Union, to meet unexpected expenditures or emergencies, and the fund may be replenished by the respective governments.",
      },
      {
        article: "Article 268",
        title:
          "This article deals with the duties levied by the Union but collected by the States. It specifies how these duties are to be shared between the Union and the States.",
      },
      {
        article: "Article 269",
        title:
          "This article defines the taxes that are levied by the Union but collected and appropriated by the States, such as taxes on the sale or purchase of goods and services.",
      },
      {
        article: "Article 270",
        title:
          "This article specifies the taxes that are levied and collected by the Union but distributed between the Union and States, such as income tax.",
      },
      {
        article: "Article 271",
        title:
          "This article empowers Parliament to impose surcharges on taxes, which shall form part of the Union's revenue.",
      },
      {
        article: "Article 272",
        title:
          "This article deals with the imposition of taxes by the Union to meet the requirements of the States. It specifies that a portion of certain taxes collected by the Union shall be given to States.",
      },
      {
        article: "Article 273",
        title:
          "This article requires the Union to make grants to States based on the recommendations of the Finance Commission, which helps to maintain fiscal federalism.",
      },
      {
        article: "Article 274",
        title:
          "This article provides for the approval of the President before certain laws relating to taxes can be passed by State Legislatures.",
      },
      {
        article: "Article 275",
        title:
          "This article allows for grants to States by the Union to meet their financial needs, as determined by the Finance Commission.",
      },
      {
        article: "Article 276",
        title:
          "This article allows for the imposition of taxes on professions, trades, callings, and employments within the States, with the proceeds going to the respective States.",
      },
      {
        article: "Article 277",
        title:
          "This article provides for the power of the Union Government to regulate taxes levied by the States to ensure uniformity in tax rates across the country.",
      },
      {
        article: "Article 278",
        title:
          "This article deals with the allocation of grants to local authorities for purposes such as health, education, and public services.",
      },
      {
        article: "Article 279",
        title:
          "This article provides for the establishment of a Finance Commission to recommend the distribution of funds between the Union and States.",
      },
      {
        article: "Article 280",
        title:
          "This article defines the duties and functions of the Finance Commission, which is responsible for the allocation of financial resources between the Union and the States.",
      },
      {
        article: "Article 281",
        title:
          "This article specifies the financial relations between the Union and States, and the role of the Finance Commission in resolving disputes regarding financial matters.",
      },
      {
        article: "Article 282",
        title:
          "This article allows the Union or any State to make grants for any purpose, even if it is outside the jurisdiction of their respective functions.",
      },
      {
        article: "Article 283",
        title:
          "This article provides for the maintenance of public accounts, and the Union and State Governments must maintain these accounts in accordance with the prescribed rules.",
      },
      {
        article: "Article 284",
        title:
          "This article deals with the manner of auditing the financial accounts of the Union and States, ensuring that government revenues and expenditures are subject to proper scrutiny.",
      },
      {
        article: "Article 285",
        title:
          "This article provides that the property and income of the Union shall not be taxed by States, ensuring that the Union's financial sovereignty is protected.",
      },
      {
        article: "Article 286",
        title:
          "This article specifies the restrictions on the imposition of taxes on the sale or purchase of goods in the course of inter-State trade, ensuring that there are no barriers to trade between States.",
      },
      {
        article: "Article 287",
        title:
          "This article deals with the exemption of certain goods or services from taxes imposed by States on their sale or purchase, ensuring free movement of goods and services within India.",
      },
      {
        article: "Article 288",
        title:
          "This article provides for the imposition of taxes on the consumption or sale of goods or services by the Union, without affecting the rights of States to impose taxes on the same.",
      },
      {
        article: "Article 289",
        title:
          "This article ensures that the property of the Union Government shall not be taxed by the States, but allows the Union to collect taxes on behalf of the States.",
      },
      {
        article: "Article 290",
        title:
          "This article provides for the allocation of financial resources for specific purposes, such as grants or loans, between the Union and the States.",
      },
      {
        article: "Article 291",
        title:
          "This article ensures that any surplus revenue raised by the Union Government should be allocated to the States as per the Finance Commission's recommendations.",
      },
      {
        article: "Article 292",
        title:
          "This article enables the Union Government to borrow money from the market or other sources to meet the financial needs of the government.",
      },
      {
        article: "Article 293",
        title:
          "This article allows the States to borrow money from the Union Government, subject to conditions specified by Parliament.",
      },
      {
        article: "Article 294",
        title:
          "This article governs the control and management of property vested in the Union, including land, buildings, and other assets held by the Union Government.",
      },
      {
        article: "Article 295",
        title:
          "This article provides for the transfer of property from one State to another, and specifies the legal procedure for such transfers.",
      },
      {
        article: "Article 296",
        title:
          "This article ensures that property rights are protected under the Constitution, and that property can be acquired or used for public purposes.",
      },
      {
        article: "Article 297",
        title:
          "This article gives the Union Government the power to control all resources related to the rivers and their tributaries, and to regulate the use of natural resources for the benefit of all citizens.",
      },
      {
        article: "Article 298",
        title:
          "This article allows the Union Government to carry out any business or trade for the public good, ensuring that the government can engage in activities that benefit the people.",
      },
      {
        article: "Article 299",
        title:
          "This article governs the entering into contracts by the Union Government, and ensures that contracts are legally binding and enforceable.",
      },
      {
        article: "Article 300A",
        title:
          "This article guarantees the right to property, stating that no person can be deprived of property except through legal procedure.",
      },
    ],
  },

  {
    part: "PART XIII",
    title: "TRADE, COMMERCE, AND INTERCOURSE WITHIN THE TERRITORY OF INDIA",
    articles: [
      {
        article: "Article 301",
        title:
          "This article provides for the freedom of trade, commerce, and intercourse throughout the territory of India. It ensures that no restriction shall be imposed on the movement of goods and services across State borders, promoting a unified economic space.",
      },
      {
        article: "Article 302",
        title:
          "This article empowers the Parliament to impose restrictions on trade and commerce if necessary for public interest, such as for the protection of the public health, morality, or the interests of consumers.",
      },
      {
        article: "Article 303",
        title:
          "This article prohibits discrimination between States in matters of trade and commerce. It ensures that the Union and State governments cannot enact laws that give preferential treatment to one State over another.",
      },
      {
        article: "Article 304",
        title:
          "This article allows the States to impose restrictions on trade and commerce within their territory to protect local industries, provided such restrictions do not violate the freedom of trade across the country. The article also allows the imposition of taxes on goods and services imported from other States.",
      },
      {
        article: "Article 305",
        title:
          "This article states that nothing in Part XIII shall affect any law relating to trade, commerce, or intercourse between a State and the Union, or any law providing for the establishment of markets or other public services.",
      },
      {
        article: "Article 306",
        title:
          "This article allows for the creation of a law to regulate or restrict trade, commerce, or intercourse within a State if such action is necessary for the national interest or to maintain the integrity of the country.",
      },
      {
        article: "Article 307",
        title:
          "This article provides for the establishment of an authority to regulate and facilitate trade and commerce between the States, ensuring that the inter-State commerce is not hindered by unnecessary restrictions or delays.",
      },
    ],
  },

  {
    part: "PART XIV",
    title: "SERVICES UNDER THE UNION AND THE STATES",
    articles: [
      {
        article: "Article 308",
        title:
          "This article defines 'Service' for the purposes of Part XIV of the Constitution, and provides that the provisions relating to services shall apply to the Union and the States, except where the context requires otherwise.",
      },
      {
        article: "Article 309",
        title:
          "This article allows Parliament to regulate the recruitment and conditions of service of persons serving under the Union, while State Legislatures may make similar laws for services under the State.",
      },
      {
        article: "Article 310",
        title:
          "This article establishes that the members of the All India Services and other persons serving in the Union or States hold their office during the pleasure of the President or the Governor, as applicable.",
      },
      {
        article: "Article 311",
        title:
          "This article provides for the protection of civil servants in India, specifying that no person holding a civil post under the Union or a State can be dismissed or removed from office without being given a reasonable opportunity to show cause against the action.",
      },
      {
        article: "Article 312",
        title:
          "This article empowers Parliament to create new All India Services, with members serving in various parts of India, for the purpose of better coordination and management of the administration.",
      },
      {
        article: "Article 313",
        title:
          "This article allows for the continued application of existing laws concerning the All India Services or civil services before the Constitution came into force, until new laws are made by Parliament or State Legislatures.",
      },
      {
        article: "Article 314",
        title:
          "This article provides that appointments to the civil services of the Union and States, including the All India Services, will be made in accordance with the regulations prescribed by law.",
      },
      {
        article: "Article 315",
        title:
          "This article establishes the Public Service Commissions for the Union and States, specifying their composition, powers, and functions. These commissions are responsible for conducting examinations and recommending appointments to civil services.",
      },
      {
        article: "Article 316",
        title:
          "This article deals with the appointment of members of the Union Public Service Commission (UPSC) and State Public Service Commissions (SPSCs), ensuring that these commissions are independent and operate without external interference.",
      },
      {
        article: "Article 317",
        title:
          "This article specifies the procedure for the removal or suspension of members of the UPSC and SPSCs, ensuring that such actions are only taken on grounds of misbehavior or incapacity after a thorough inquiry.",
      },
      {
        article: "Article 318",
        title:
          "This article grants the President of India the authority to make regulations concerning the composition and functioning of the Public Service Commissions, including their powers and methods of selection.",
      },
      {
        article: "Article 319",
        title:
          "This article outlines the powers of the Union and State Public Service Commissions, including the responsibility for advising the government on matters related to recruitment, promotions, and disciplinary actions.",
      },
      {
        article: "Article 320",
        title:
          "This article outlines the duties of the Union and State Public Service Commissions, which include advising the government on matters such as recruitment, appointments, promotions, and transfers of civil servants.",
      },
      {
        article: "Article 321",
        title:
          "This article empowers Parliament or the State Legislature to make laws regulating the functioning of the Public Service Commissions, ensuring that the commissions operate in a manner consistent with constitutional principles.",
      },
      {
        article: "Article 322",
        title:
          "This article provides for the expenditure related to the functioning of the Union and State Public Service Commissions, ensuring that the resources needed for their work are allocated and managed effectively.",
      },
      {
        article: "Article 323",
        title:
          "This article establishes the relationship between the Union and State Public Service Commissions, providing for the delegation of certain powers and functions, and ensuring coordination between different levels of government.",
      },
    ],
  },

  {
    part: "PART XIV A",
    title: "TRIBUNALS",
    articles: [
      {
        article: "Article 323A ",
        title: "Administrative tribunals.",
      },
      {
        article: "Article 323B ",
        title: "Tribunals for other matters.",
      },
    ],
  },

  {
    part: "PART XV",
    title: "ELECTIONS (324-329)",
    articles: [
      {
        article: "Article 324",
        title:
          "This article provides for the establishment of an Election Commission, which is responsible for administering elections to the Parliament, State Legislatures, and the offices of the President and Vice President.",
      },
      {
        article: "Article 325",
        title:
          "This article ensures that all citizens of India, irrespective of their religion, caste, or race, are entitled to vote in elections based on universal adult suffrage. It prohibits discrimination on the basis of these factors in voter eligibility.",
      },
      {
        article: "Article 326",
        title:
          "This article lays down that elections to the House of the People (Lok Sabha) and the Legislative Assemblies of States shall be based on direct elections, with voting being on the basis of universal adult suffrage.",
      },
      {
        article: "Article 327",
        title:
          "This article empowers Parliament to make laws with respect to the conduct of elections, including the delimitation of constituencies and the qualifications of voters.",
      },
      {
        article: "Article 328",
        title:
          "This article empowers State Legislatures to make laws regarding the conduct of elections to the Legislative Assembly of the State and other matters related to elections in the State.",
      },
      {
        article: "Article 329",
        title:
          "This article ensures that no election to the Parliament or the State Legislature can be challenged in a court of law, except under the provisions laid down by the Election Commission or related legislation.",
      },
    ],
  },

  {
    part: "PART XVI",
    title: "SPECIAL PROVISIONS RELATING TO CERTAIN CLASSES",
    articles: [
      // Part16SpecialProvisionsRelatingToCertainClasses.ts

      {
        article: "Article 330",
        title:
          "This article provides for the reservation of seats for Scheduled Castes (SCs) and Scheduled Tribes (STs) in the House of the People (Lok Sabha) to ensure their representation in Parliament.",
      },
      {
        article: "Article 331",
        title:
          "This article empowers the President to provide for the representation of the Anglo-Indian community in the House of the People (Lok Sabha) if it is deemed necessary.",
      },
      {
        article: "Article 332",
        title:
          "This article provides for the reservation of seats for Scheduled Castes (SCs) and Scheduled Tribes (STs) in the Legislative Assemblies of the States and Union territories, ensuring their adequate representation at the State level.",
      },
      {
        article: "Article 333",
        title:
          "This article empowers the President to provide for the representation of the Anglo-Indian community in the Legislative Assemblies of the States or Union Territories, if necessary.",
      },
      {
        article: "Article 334",
        title:
          "This article states that the provisions related to the reservation of seats for SCs and STs in the Lok Sabha and State Assemblies will continue for a period of 10 years from the commencement of the Constitution, subject to extension by law.",
      },
      {
        article: "Article 335",
        title:
          "This article ensures that the claims of the Scheduled Castes and Scheduled Tribes to jobs and services under the Union and State Governments shall be given due consideration, while maintaining the efficiency of administration.",
      },
      {
        article: "Article 336",
        title:
          "This article provides that the President may make provisions for the welfare and protection of the rights of the Anglo-Indian community, particularly in matters relating to language, culture, and educational rights.",
      },
      {
        article: "Article 337",
        title:
          "This article empowers the President to make provisions for the welfare and protection of the rights of the Scheduled Tribes in any area within the Union.",
      },
      {
        article: "Article 338",
        title:
          "This article establishes the National Commission for Scheduled Castes, which is responsible for investigating and monitoring the safeguards provided for the Scheduled Castes under the Constitution and other laws.",
      },
      {
        article: "Article 339",
        title:
          "This article establishes the National Commission for Scheduled Tribes, which is responsible for monitoring and evaluating the implementation of safeguards and policies for the Scheduled Tribes.",
      },
      {
        article: "Article 340",
        title:
          "This article provides for the appointment of a Commission to investigate the conditions of backward classes in the Union and States, and to recommend measures for their social and economic advancement.",
      },
      {
        article: "Article 341",
        title:
          "This article empowers the President to specify the castes, races, or tribes that are considered Scheduled Castes for the purposes of the Constitution, ensuring the identification and protection of marginalized communities.",
      },
      {
        article: "Article 342",
        title:
          "This article empowers the President to specify the tribes or communities that are recognized as Scheduled Tribes in relation to the Constitution, ensuring their rights and protections.",
      },
    ],
  },

  {
    part: "PART XVII",
    title: "OFFICIAL LANGUAGE",
    articles: [
      // Part17OfficialLanguageOfIndia.ts

      {
        article: "Article 343",
        title:
          "This article declares Hindi as the official language of the Republic of India. It also allows the use of English for official purposes until a law is enacted to change this provision.",
      },
      {
        article: "Article 344",
        title:
          "This article establishes the official language commission, which is tasked with making recommendations regarding the use of Hindi for official purposes and the progressive use of Hindi in central government communication.",
      },
      {
        article: "Article 345",
        title:
          "This article allows the State Legislatures to adopt a language of their choice for the transaction of business in the Legislature, subject to the provisions of the Constitution. It also provides for the continued use of English in the States until a decision is made.",
      },
      {
        article: "Article 346",
        title:
          "This article provides that the language used for the communication between the Union and the States will be Hindi or English, and that the Union Government will decide which language is used for communication between States.",
      },
      {
        article: "Article 347",
        title:
          "This article allows for the recognition of a language spoken by a section of the population of a State as an official language if the President is satisfied that it is necessary for the development of the language.",
      },
      {
        article: "Article 348",
        title:
          "This article provides that all laws, orders, rules, and regulations enacted by the Union Government must be in Hindi or English, and the Supreme Court and High Courts may conduct proceedings in English.",
      },
      {
        article: "Article 349",
        title:
          "This article empowers Parliament to make laws for the use of languages for official purposes, and the language of the Union Government should be regulated in a manner specified by the law.",
      },
      {
        article: "Article 350",
        title:
          "This article ensures that any person may submit representations in any language used in the State, and such representations should be considered and answered by the government in the same language.",
      },
      {
        article: "Article 350A",
        title:
          "This article makes it the duty of the Union and State Governments to provide facilities for instruction in the mother tongue of children belonging to linguistic minorities at the primary stage of education.",
      },
      {
        article: "Article 350B",
        title:
          "This article establishes a Special Officer for Linguistic Minorities who is responsible for investigating and addressing complaints related to the use of the mother tongue of linguistic minorities and ensuring their rights are protected.",
      },
      {
        article: "Article 351",
        title:
          "This article directs the Union Government to promote the development of Hindi as a means of communication, particularly in terms of its vocabulary, by drawing from the languages used in India, such as Sanskrit, and by encouraging its spread.",
      },
    ],
  },

  {
    part: "PART XVIII",
    title: "EMERGENCY PROVISIONS",
    articles: [
      {
        article: "Article 352",
        title:
          "This article empowers the President to proclaim a state of emergency in the entire territory of India or any part of it, if the President believes that there is a threat to the security of India or any part of it due to war, external aggression, or armed rebellion.",
      },
      {
        article: "Article 353",
        title:
          "This article allows the Union Government to take over the legislative powers of the States during an emergency and enables the President to issue directions regarding the use of executive powers by the States.",
      },
      {
        article: "Article 354",
        title:
          "This article allows the President to modify the provisions of the Constitution regarding the distribution of executive powers between the Union and the States during the proclamation of a national emergency.",
      },
      {
        article: "Article 355",
        title:
          "This article imposes a duty on the Union Government to protect States from external aggression and internal disturbances, and to ensure that the governance of the States is carried out according to the provisions of the Constitution.",
      },
      {
        article: "Article 356",
        title:
          "This article allows the President to impose President's Rule (also known as the State Emergency) in a State if the President believes that the government of that State cannot be carried on in accordance with the provisions of the Constitution.",
      },
      {
        article: "Article 357",
        title:
          "This article allows the President to direct the Union Government to exercise the executive powers of a State when President's Rule is imposed in that State, and to provide any assistance needed to maintain governance.",
      },
      {
        article: "Article 358",
        title:
          "This article suspends the provisions of Article 19 (which guarantees the protection of certain rights) during a national emergency. The restrictions on fundamental rights imposed by the emergency proclamation will prevail.",
      },
      {
        article: "Article 359",
        title:
          "This article allows the President to suspend the enforcement of fundamental rights under Part III (except the rights to protection in respect of conviction for offenses, and the rights under Articles 20 and 21) during an emergency, by issuing a proclamation.",
      },
      {
        article: "Article 360",
        title:
          "This article allows the President to proclaim a financial emergency if he believes that the financial stability or credit of India or any part of it is threatened. This declaration can be made if the financial situation of the country is in peril.",
      },
    ],
  },

  {
    part: "PART XIX",
    title: "MISCELLANEOUS",
    articles: [
      {
        article: "Article 361",
        title:
          "This article grants the President and Governors of States immunity from legal proceedings in respect of actions taken by them in their official capacity.",
      },
      {
        article: "Article 362",
        title:
          "This article empowers the President to issue directions for the regulation of the official language for the Union territories and for communication in matters of the administration of the territories.",
      },
      {
        article: "Article 363",
        title:
          "This article provides for disputes relating to the powers of the Union and States over certain matters and directs that they should be resolved by a tribunal or court.",
      },
      {
        article: "Article 364",
        title:
          "This article establishes provisions for financial emergency, allowing the President to issue directions for maintaining the credit of India, and handling issues related to financial crises.",
      },
    ],
  },

  {
    part: "PART XX",
    title: "TRIBUNALS",
    articles: [
      {
        article: "Article 368 ",
        title:
          "This article provides the procedure for amending the Constitution. It specifies that amendments may be made by the Parliament by a special procedure involving a resolution passed by a two-thirds majority in both Houses, with the consent of the State legislatures if necessary.",
      },
    ],
  },

  {
    part: "PART XXI",
    title: "TEMPORARY, TRANSITIONAL AND SPECIAL PROVISIONS",
    articles: [
      {
        article: "Article 370",
        title:
          "This article grants special autonomy to the region of Jammu and Kashmir. It defines the relationship between the state of Jammu and Kashmir and the Union of India, providing the state with its own Constitution and limited autonomy in matters other than defense, foreign affairs, and communications.",
      },
      {
        article: "Article 371",
        title:
          "This article provides for special provisions for the states of Maharashtra, Gujarat, and other specified regions to ensure the protection of their distinct culture and economic conditions, including establishing separate administrative arrangements.",
      },
      {
        article: "Article 371A",
        title:
          "This article grants special provisions for the state of Nagaland, protecting the religious or social practices, customary laws, and systems of the Naga people, while also ensuring their control over land and resources.",
      },
      {
        article: "Article 371B",
        title:
          "This article provides special provisions for the state of Assam, ensuring the creation of a legislative body to address the distinct needs and concerns of the people of Assam, particularly in relation to the state's tribal areas.",
      },
      {
        article: "Article 371C",
        title:
          "This article provides special provisions for the state of Manipur, including the establishment of a separate development board to ensure the social and economic advancement of the hill areas of Manipur.",
      },
      {
        article: "Article 371D",
        title:
          "This article provides for the establishment of a special system for the administration of the state of Andhra Pradesh, particularly to address the needs of its backward areas.",
      },
      {
        article: "Article 371E",
        title:
          "This article empowers the Parliament to establish a Central University in the state of Andhra Pradesh to promote educational development.",
      },
      {
        article: "Article 371F",
        title:
          "This article provides special provisions for the state of Sikkim to ensure the protection of its distinctive social, cultural, and administrative practices.",
      },
      {
        article: "Article 371G",
        title:
          "This article provides special provisions for the state of Mizoram, safeguarding the customs and practices of the Mizo people and ensuring their rights over land and resources.",
      },
      {
        article: "Article 371H",
        title:
          "This article provides special provisions for the state of Arunachal Pradesh, giving the state a unique status in terms of administrative procedures and the protection of its tribal population.",
      },
      {
        article: "Article 371I",
        title:
          "This article allows the state of Goa to enact laws for the protection of its unique culture and to ensure the welfare of its citizens.",
      },
      {
        article: "Article 371J",
        title:
          "This article provides special provisions for the state of Karnataka, particularly for the development of the Hyderabad-Karnataka region, which is economically backward.",
      },
    ],
  },

  {
    part: "PART XXII",
    title: "SHORT TITLE, COMMENCEMENT, AUTHORITATIVE TEXT IN HINDI AND REPEALS",
    articles: [
      {
        article: "Article 372",
        title:
          "This article provides that laws in force in India immediately before the commencement of the Constitution continue in force, subject to amendments and repeal by Parliament or State legislatures.",
      },
      {
        article: "Article 373",
        title:
          "This article empowers the President to adapt existing laws to conform with the provisions of the Constitution, particularly laws that were enacted prior to the commencement of the Constitution.",
      },
      {
        article: "Article 374",
        title:
          "This article defines the provision for the establishment of the High Courts and sets out provisions related to judges and administrative powers of the High Courts.",
      },
      {
        article: "Article 375",
        title:
          "This article outlines the procedure for appointments and procedures for High Court judges, specifically the qualifications for the judicial system.",
      },
      {
        article: "Article 376",
        title:
          "This article empowers the President to define the jurisdiction and powers of the High Courts and ensure the application of constitutional law in the State.",
      },
      {
        article: "Article 377",
        title:
          "This article empowers the President to define the powers and jurisdictions of the State judicial system and enforce the rights and duties laid out in the Constitution.",
      },
      {
        article: "Article 378A",
        title:
          "This article deals with the duties and powers of various bodies and authorities within the judiciary to safeguard the rights of persons and citizens under constitutional provisions.",
      },
    ],
  },
];

export default indianConstitutionArticles;
