// Import all local image assets via ES module imports as required by Vite bundling
import heroKittenImg from '../assets/images/hero_kitten_cattery_1793750362538.jpg';
import ragdollBluepointImg from '../assets/images/kitten_ragdoll_bluepoint_1793750362816.jpg';
import britishGoldenImg from '../assets/images/kitten_british_golden_1793750363713.jpg';
import lilacBasketImg from '../assets/images/kitten_lilac_basket_1793750365144.jpg';
import nurseryCareImg from '../assets/images/cattery_nursery_care_1793750365244.jpg';

export {
  heroKittenImg,
  ragdollBluepointImg,
  britishGoldenImg,
  lilacBasketImg,
  nurseryCareImg,
};

export interface KittenProfile {
  id: string;
  name: string;
  breed: 'Ragdoll' | 'British Shorthair';
  colorPattern: string;
  gender: 'Female' | 'Male';
  birthWeek: string;
  temperament: string[];
  parents: string;
  dnaStatus: string;
  image: string;
  story: string;
  idealHome: string;
  vaccinated: boolean;
  microchipped: boolean;
  desexed: boolean;
  wormedTreated: boolean;
}

export const EXAMPLE_KITTENS: KittenProfile[] = [
  {
    id: 'luna-blue-point',
    name: 'Luna (Example Profile)',
    breed: 'Ragdoll',
    colorPattern: 'Lilac Blue Point',
    gender: 'Female',
    birthWeek: '10 Weeks Old',
    temperament: ['Gentle Purr Machine', 'Devoted Cuddle Companion', 'Child-Friendly'],
    parents: 'Sire: CH Willowglen Oliver x Dam: Adelaide Opal Blossom',
    dnaStatus: 'HCM & PKD Clear by Parentage',
    image: ragdollBluepointImg,
    story: 'Luna loves settling on soft lap throws and following her human friends room to room with sweet, quiet chirps. Raised underfoot with children and quiet family pets.',
    idealHome: 'Calm indoor family home or couple seeking a cuddly shadow who thrives on companionship.',
    vaccinated: true,
    microchipped: true,
    desexed: true,
    wormedTreated: true,
  },
  {
    id: 'milo-golden-ny11',
    name: 'Milo (Example Profile)',
    breed: 'British Shorthair',
    colorPattern: 'Golden Shaded (NY11) with Emerald Eyes',
    gender: 'Male',
    birthWeek: '11 Weeks Old',
    temperament: ['Playful Explorer', 'Quietly Affectionate', 'Confident & Placid'],
    parents: 'Sire: Grand CH Sterling Duke x Dam: Golden Whisper Amber',
    dnaStatus: 'PKD, PRA & ALPS Clear Tested',
    image: britishGoldenImg,
    story: 'Milo displays the trademark chubby British Shorthair cheeks and a dense plush coat. He loves watching birds from sunny windowsills and chasing soft felt mice.',
    idealHome: 'Perfect for working professionals or young families wanting an independent yet devoted, low-drama cat.',
    vaccinated: true,
    microchipped: true,
    desexed: true,
    wormedTreated: true,
  },
  {
    id: 'theo-lilac-classic',
    name: 'Theo (Example Profile)',
    breed: 'British Shorthair',
    colorPattern: 'Lilac Self Velvet Coat',
    gender: 'Male',
    birthWeek: '9 Weeks Old',
    temperament: ['Serene Lounger', 'Easygoing Demeanour', 'Enjoys Feather Toys'],
    parents: 'Sire: Adelaide Lord Archibald x Dam: Lady Clementine Blue',
    dnaStatus: 'Full Orivet Feline DNA Panel Clear',
    image: lilacBasketImg,
    story: 'Theo is exceptionally calm, spending his afternoons napping in woven rattan baskets before presenting his tummy for gentle strokes.',
    idealHome: 'Apartment, townhouse or suburban home where he can be pampered indoors with warm sunspots.',
    vaccinated: true,
    microchipped: true,
    desexed: true,
    wormedTreated: true,
  },
  {
    id: 'aurora-bicolor-ragdoll',
    name: 'Aurora (Example Profile)',
    breed: 'Ragdoll',
    colorPattern: 'Seal Bicolour Mask',
    gender: 'Female',
    birthWeek: '12 Weeks Old',
    temperament: ['Ragdoll Floppiness', 'Soft-Spoken Vocalist', 'Sociable Host'],
    parents: 'Sire: CH Cloudborne Jasper x Dam: Adelaide Rosy Morning',
    dnaStatus: 'HCM (Ragdoll Mutation) Negative & PKD Negative',
    image: heroKittenImg,
    story: 'Aurora lives up to the legendary Ragdoll trait—completely relaxing into whoever holds her. She greets visitors at the door with a relaxed tail tip wag.',
    idealHome: 'Indoor-only home where someone is around during parts of the day or has a gentle animal companion.',
    vaccinated: true,
    microchipped: true,
    desexed: true,
    wormedTreated: true,
  },
];

export interface CareTopic {
  id: string;
  title: string;
  summary: string;
  category: 'nutrition' | 'grooming' | 'environment' | 'health';
  keyPoints: string[];
  tipsForBeginners: string;
}

export const CARE_GUIDE_TOPICS: CareTopic[] = [
  {
    id: 'first-48-hours',
    title: 'The First 48 Hours: The Safe Room Setup',
    summary: 'How to introduce your new kitten safely into your Adelaide home without overwhelming them.',
    category: 'environment',
    keyPoints: [
      'Set up a single quiet room (bedroom or study) with their bed, litter box, food, and water placed separately.',
      'Place a piece of blanket with their mother’s and siblings’ scent in their bed for emotional reassurance.',
      'Allow the kitten to emerge from their open carrier at their own pace; do not drag them out.',
      'Keep interactions calm and low-volume for the first 2-3 days before granting full-house access.',
    ],
    tipsForBeginners: 'Kittens need 16–20 hours of sleep per day! Resist the urge to wake them up while they recharge.',
  },
  {
    id: 'nutrition-hydration',
    title: 'Kitten Nutrition & Hydration Schedules',
    summary: 'A balanced diet for developing bones, shiny plush coats, and healthy digestion.',
    category: 'nutrition',
    keyPoints: [
      'Feed 3 to 4 small meals daily until 6 months of age, then transition to 2 meals daily.',
      'High-protein wet food is essential daily to promote kidney health and proper hydration.',
      'We provide a complimentary transition starter pack with the exact premium grain-free food your kitten loves.',
      'Keep fresh filtered water in a ceramic or stainless steel bowl away from the litter tray, or use a circulating cat fountain.',
    ],
    tipsForBeginners: 'Never give cows milk—most cats are lactose intolerant. Stick to fresh water and approved kitten milk only.',
  },
  {
    id: 'coat-grooming',
    title: 'Grooming & Coat Care by Breed',
    summary: 'Simple grooming habits that keep Ragdoll and British Shorthair coats silk-soft and mat-free.',
    category: 'grooming',
    keyPoints: [
      'Ragdolls have a plush, single-layer coat with minimal undercoat; comb 2-3 times weekly with a wide-toothed metal comb.',
      'British Shorthairs have a thick, dense teddy-bear double coat; brush weekly with a slicker brush or grooming glove.',
      'Trim sharp nail tips every 2–3 weeks using pet-safe clippers—touch their paws during cuddle time to desensitise them.',
      'Gently clean tear ducts with a damp warm cotton pad if dust accumulates in the inner eye corners.',
    ],
    tipsForBeginners: 'Start grooming sessions as brief 2-minute bonding routines with treats so brushing feels like a spa day.',
  },
  {
    id: 'litter-box-mastery',
    title: 'Litter Box Placement & Training',
    summary: 'Maintaining clean habits and preventing toileting confusion from day one.',
    category: 'environment',
    keyPoints: [
      'Rule of thumb: Number of litter boxes = Number of cats + 1.',
      'Place boxes in quiet, low-traffic areas away from loud washing machines and barking dogs.',
      'All our kittens leave us 100% litter-trained using unscented clumping plant-based / wood pellets.',
      'Scoop waste at least once daily and wash the tray weekly with warm water and pet-safe unscented detergent.',
    ],
    tipsForBeginners: 'Cats dislike heavily perfumed litter; unscented natural litters keep their sensitive noses happy.',
  },
  {
    id: 'veterinary-milestones',
    title: 'First-Year Veterinary Milestones',
    summary: 'Vaccination schedules, parasite protection, and preventative check-ups in South Australia.',
    category: 'health',
    keyPoints: [
      'F3 Vaccination at 6–8 weeks (provided), booster at 10–12 weeks (provided), and final booster at 14–16 weeks.',
      'Monthly intestinal worming and flea/tick protection adapted for South Australian conditions.',
      'Annual veterinary wellness exam with dental and cardiac checks.',
      'Maintain all records in your Adelaide Premium Cattery health passport for easy vet visits.',
    ],
    tipsForBeginners: 'Register your microchip with the South Australian DACO (Dogs and Cats Online) registry upon adoption.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Process' | 'Health' | 'Care' | 'Pricing';
}

export const FAQS: FAQItem[] = [
  {
    question: 'How do I adopt a kitten from Adelaide Premium Cattery?',
    answer: 'The journey begins by submitting an enquiry through our contact form. Tell us about your home, family dynamic, and preferred breed (Ragdoll or British Shorthair). We review your enquiry within 24–48 hours, invite you for a virtual or in-person consultation, and reserve your place on our seasonal waitlist. Once kittens reach 6 weeks, families make their selections based on temperament and preferences.',
    category: 'Process',
  },
  {
    question: 'What is included with an Adelaide Premium Cattery kitten?',
    answer: 'Every kitten arrives at their new home thoroughly cared for: 2x core veterinary vaccinations (F3/F4), desexed (spayed/neutered), microchipped and registered with DACO SA, comprehensive parasite prevention (wormed and flea treated), 2-year genetic health guarantee, pedigree registration certificate, veterinary health passport, and a luxury transition starter pack with familiar food, scent blanket, and toys.',
    category: 'Pricing',
  },
  {
    question: 'Why do you showcase "Example Profiles" on your website?',
    answer: 'As an ethical, small-scale cattery, we do not mass-produce litters or operate an "instant checkout" store. Our parent cats have limited, carefully planned litters each year. The profiles shown illustrate the exact type, coat varieties, health pedigree, and personality you can expect from our litters. Once approved on our waitlist, you will receive private photos, video updates, and regular health reports for each new litter.',
    category: 'Process',
  },
  {
    question: 'What health testing and genetic screenings do you perform on parent cats?',
    answer: 'Health is our absolute top priority. All our breeding queens and studs undergo full DNA screening panels through Orivet for Hypertrophic Cardiomyopathy (HCM), Polycystic Kidney Disease (PKD), Progressive Retinal Atrophy (PRA), and Feline Leukemia / Feline Immunodeficiency Virus (FeLV/FIV). We strictly breed from 100% negative, clear bloodlines to ensure genetic diseases are not passed on.',
    category: 'Health',
  },
  {
    question: 'Are your kittens suitable for first-time cat owners and families with children?',
    answer: 'Yes! Both Ragdolls and British Shorthairs are celebrated as the most gentle, patient, and child-tolerant cat breeds. Our kittens are raised directly inside our family home, exposed to household sounds (vacuum cleaners, music, kitchen bustle) and lovingly handled every single day. This early sensory socialisation produces confident, trusting cats that bond quickly with adults, kids, and cat-friendly dogs.',
    category: 'Care',
  },
  {
    question: 'Can I visit the cattery before deciding?',
    answer: 'To protect our newborn kittens and nursing queens from external pathogens and parvovirus before kittens receive their full immunisations, we conduct initial meets via high-definition video calls. Once kittens reach 8–9 weeks and have their first veterinary vaccinations, approved families with reservations are warmly invited to our Adelaide premises for an in-person cuddle and bonding session by appointment.',
    category: 'Process',
  },
  {
    question: 'Can you arrange transport if I live outside the Adelaide metropolitan area?',
    answer: 'Yes. While most of our pet parents are based in Adelaide, the Adelaide Hills, Barossa, and Fleurieu Peninsula, we can coordinate professional pet transport via Jetpets or Virgin Australia cargo to Melbourne, Sydney, Brisbane, Perth, or regional South Australia. Kittens travel in temperature-controlled, vet-approved pet cabins with door-to-door or airport collection options.',
    category: 'Care',
  },
  {
    question: 'What ongoing support do you offer after adoption?',
    answer: 'We consider our kitten parents part of the extended Adelaide Premium Cattery family! We offer lifetime breeder support—whether you have a question about food transitions at 6 months, advice on grooming brushes at 2 years, or travel arrangements later in life. We are always just a phone call, WhatsApp, or email away.',
    category: 'Care',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'South Australia DACO Registered',
    description: 'Fully compliant with South Australian Department of Primary Industries and Regional Development standards for ethical breeding.',
  },
  {
    title: '100% DNA Tested Clear',
    description: 'Every queen and stud is screened for HCM, PKD, and hereditary feline disorders via Orivet diagnostics.',
  },
  {
    title: 'Raised Underfoot in Home',
    description: 'No cages or isolated kennels. Our kittens are raised in warm living rooms with gentle handling, play, and love.',
  },
  {
    title: '2-Year Health Guarantee',
    description: 'Written contractual guarantee covering congenital and hereditary health conditions for complete peace of mind.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Bringing our Ragdoll Oliver home was the smoothest experience. He came completely litter-trained, calm, and walked into our North Adelaide townhouse like he owned the place! The care guide and starter pack were a lifesaver for first-timers.',
    author: 'Sophie & Liam M.',
    location: 'North Adelaide, SA',
    breed: 'Ragdoll Pet Parent',
  },
  {
    quote: 'You can immediately tell Adelaide Premium Cattery breeds for temperament and health above all else. Our British Shorthair, Winston, is so placid around our 4-year-old daughter. The DNA reports and vet records were immaculate.',
    author: 'Dr. Marcus Vance',
    location: 'Stirling, Adelaide Hills',
    breed: 'British Shorthair Pet Parent',
  },
  {
    quote: 'From our first enquiry to the weekly photo updates before pickup, their communication was exceptional. Truly ethical breeders who care deeply about where each kitten goes.',
    author: 'Elena & Tom Chen',
    location: 'Glenelg, SA',
    breed: 'Ragdoll Pet Parent',
  },
];

export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  author: string;
  publishedDate: string;
  readTime: string;
  heroImage: string;
  secondaryImage: string;
  intro: string;
  sections: BlogArticleSection[];
  ctaHeading: string;
  ctaCopy: string;
}

export const BLOG_POST: BlogPostData = {
  slug: 'how-to-choose-and-care-for-a-healthy-kitten-adelaide',
  title: 'How to Choose and Care for a Healthy Kitten in Adelaide: Ragdoll vs British Shorthair',
  metaDescription:
    'Compare Ragdoll kittens Adelaide and British Shorthair kittens Adelaide, with practical kitten care tips from trusted cat breeders Adelaide families love.',
  category: 'Breed Comparison & Care Journal',
  author: 'Adelaide Premium Cattery Team',
  publishedDate: 'November 2026',
  readTime: '3 min read',
  heroImage: ragdollBluepointImg,
  secondaryImage: britishGoldenImg,
  intro:
    'Bringing a new kitten into your home is one of life’s greatest joys. Whether you are a first-time pet owner or a growing South Australian family, choosing the right breed makes all the difference. Among prospective owners searching for cat breeders Adelaide wide, two breeds consistently stand out for their gentle nature and beauty: Ragdolls and British Shorthairs. Understanding their distinct personalities and daily needs will help you welcome a happy, healthy companion into your household.',
  sections: [
    {
      heading: 'Ragdoll vs British Shorthair: Comparing Personalities',
      paragraphs: [
        'If you are torn between Ragdoll kittens Adelaide families adore and British Shorthair kittens Adelaide households cherish, start by considering your daily routine. Ragdolls are famous for their affectionate, dog-like devotion. They love following their favourite humans from room to room, greeting you at the door, and going completely relaxed when cradled in your arms. They thrive in homes where someone is around for good company.',
        'British Shorthairs, on the other hand, are calm, independent, and quietly loyal. Often described as the teddy bears of the cat world, they enjoy sitting beside you on the lounge rather than constantly sitting on your lap. Their easygoing temperament makes them wonderful companions for busy professionals and relaxed family homes alike.',
      ],
    },
    {
      heading: 'Grooming Needs for Every Coat',
      paragraphs: [
        'Both breeds boast stunning coats, though their maintenance differs slightly:',
        'Starting gentle brushing and nail-trimming routines early helps kittens see grooming as relaxing bonding time.',
      ],
      bullets: [
        {
          label: 'Ragdoll coats',
          text: 'Their silky, semi-longhair coat has minimal undercoat, meaning it tangles less than many longhaired breeds. Still, combing two to three times a week keeps their fur smooth and reduces shedding.',
        },
        {
          label: 'British Shorthair coats',
          text: 'Their dense, plush double coat feels like velvet. A gentle weekly brush removes loose fur—especially during Adelaide’s warmer spring and autumn coat changes.',
        },
      ],
    },
    {
      heading: 'Feeding Requirements for Growing Kittens',
      paragraphs: [
        'Sound kitten care tips always begin with quality nutrition. Growing kittens require protein-rich diets formulated specifically for kitten development. Feed three to four small meals daily until six months of age, combining high-meat wet food for hydration with quality dry kibble. Always keep fresh, clean water in a wide ceramic or stainless-steel bowl positioned well away from the litter tray. When you adopt, continue your breeder’s existing food brand for the first week or two before making gradual transitions to prevent tummy upsets.',
      ],
    },
    {
      heading: 'How to Prepare Your Adelaide Home',
      paragraphs: [
        'Before pickup day, prepare a quiet “safe room” such as a spare bedroom or study. Stock it with a soft bed, a tall sisal scratching post, an unscented litter box, food and water bowls, and a few safe toys. Securing loose electrical cords, checking that houseplants are non-toxic, and ensuring window screens are sturdy will keep your curious explorer safe from day one. Remember that young kittens sleep up to eighteen hours a day, so give them calm space to settle at their own pace.',
      ],
    },
  ],
  ctaHeading: 'Start Your Kitten Journey with Adelaide Premium Cattery',
  ctaCopy:
    'When choosing a kitten, always ask breeders about early socialisation, veterinary check-ups, and the environment in which kittens are raised. At Adelaide Premium Cattery, we are passionate about matching loving South Australian families with confident, well-socialised Ragdoll and British Shorthair companions. Ready to take the next step? Explore our example kitten profiles to discover the temperament and coat varieties we raise, or contact Adelaide Premium Cattery today to chat about welcoming a healthy kitten into your home.',
};

