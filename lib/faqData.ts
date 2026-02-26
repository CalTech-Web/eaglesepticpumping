export interface FAQQuestion {
  q: string;
  a: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "basics",
    title: "Septic System Basics",
    questions: [
      {
        q: "How does a septic system work?",
        a: "A septic system has two main parts: a buried tank and a drain field (also called a leach field). Wastewater from your home flows into the tank, where solids settle to the bottom as sludge and grease floats to the top as scum. The clarified liquid in the middle (effluent) flows out to the drain field, where it slowly filters through the soil. Naturally occurring bacteria break down the solids in the tank over time, but they can't eliminate them completely — which is why the tank needs periodic pumping.",
      },
      {
        q: "How long does a septic system last?",
        a: "A well-maintained concrete or fiberglass septic tank can last 25–40 years. The drain field, if properly cared for, can last 25–30 years or more. Systems that are neglected — pumped too infrequently, overloaded with water, or exposed to harsh chemicals — often fail in half that time. Regular pumping is the single most important factor in maximizing system lifespan.",
      },
      {
        q: "What should never be flushed or put down the drain?",
        a: "Never flush: wipes (even 'flushable' ones), feminine hygiene products, cotton balls, dental floss, medications, paper towels, or cigarette butts. Never pour down the drain: cooking grease or oil, paint, solvents, bleach in large quantities, antibacterial soaps in excess, or household chemicals. These items kill the beneficial bacteria your tank relies on, clog pipes, or cause drain field failure. Stick to the rule: only human waste and toilet paper in the toilet.",
      },
      {
        q: "How many gallons does a typical septic tank hold?",
        a: "Most residential septic tanks range from 1,000 to 1,500 gallons. Older homes sometimes have 750-gallon tanks, while large homes or properties built since the 1990s may have 2,000-gallon or larger tanks. Tank size is typically set when the system is installed, based on the number of bedrooms in the home. A septic professional can confirm your tank size during a service visit.",
      },
      {
        q: "Does my septic system need risers?",
        a: "Risers are vertical extensions that bring the tank access lids to or just above ground level. Without risers, technicians must dig up your yard to access the tank every time it's pumped — which adds time and cost. If your lids are buried more than 12 inches deep, installing risers is strongly recommended. It's a one-time cost that saves money on every future pump-out and makes emergency access much faster.",
      },
      {
        q: "Can heavy rain or flooding affect my septic system?",
        a: "Yes. When the soil around the drain field becomes saturated from heavy rain, it can't absorb effluent efficiently. You may notice slow drains, gurgling, or sewage odors during or after storms. This is usually temporary — give the system 24–48 hours to recover after rain stops. However, if problems persist, contact a septic professional. Repeated flooding can indicate an undersized or failing drain field.",
      },
    ],
  },
  {
    id: "pumping",
    title: "Pumping & Maintenance",
    questions: [
      {
        q: "How often should I pump my septic tank?",
        a: "Most households should pump every 3–5 years. The exact frequency depends on tank size, number of occupants, and water usage. A family of four with a 1,000-gallon tank typically needs pumping every 3–4 years. A couple with a 1,500-gallon tank may go 5–7 years. Waiting too long allows sludge to build up and overflow into the drain field, causing costly failures. When in doubt, schedule an inspection — a technician can measure sludge depth and tell you exactly where you stand.",
      },
      {
        q: "What happens during a septic tank pump-out?",
        a: "A technician locates and uncovers the access lids, inserts a vacuum hose into the tank, and pumps out all liquid, sludge, and scum. They then inspect the inlet and outlet baffles, check for cracks or structural issues, measure tank capacity, and record sludge depth for your service history. The entire process takes 30–90 minutes depending on tank size and condition. Waste is transported to a licensed treatment facility.",
      },
      {
        q: "Should I use septic additives or treatments?",
        a: "No. Independent studies by the EPA and state regulators have found no credible evidence that septic additives — biological, chemical, or enzymatic — improve system performance or extend time between pump-outs. A healthy septic tank already contains billions of naturally occurring bacteria. Some chemical additives can actually harm that bacterial ecosystem or damage tank walls. Save your money and put it toward proper, scheduled pump-outs instead.",
      },
      {
        q: "How can I reduce how often I need to pump?",
        a: "The best ways to extend your pumping interval: spread laundry loads throughout the week instead of doing them all on one day; install low-flow toilets and fixtures; fix leaking faucets and running toilets promptly; avoid garbage disposals (they add significant solid waste to the tank); and never flush anything except toilet paper. These habits won't eliminate pumping, but they can meaningfully extend the interval.",
      },
      {
        q: "What is a septic system inspection?",
        a: "A septic inspection involves pumping the tank (or accessing it if recently pumped), inspecting structural components, checking the inlet/outlet baffles, locating distribution boxes, and assessing the drain field for signs of stress or failure. You need an inspection if: you're buying or selling a home with a septic system, you haven't had service in 5+ years, you notice slow drains or odors, or you want a baseline condition report. Most septic companies provide written inspection reports suitable for real estate transactions.",
      },
      {
        q: "Is it okay to plant landscaping over my drain field?",
        a: "Shallow-rooted grass is fine — and actually beneficial, as the roots absorb moisture and help prevent erosion. Avoid planting trees, shrubs, or deep-rooted plants anywhere near the drain field, as roots can invade and clog the perforated pipes. Never build decks, patios, driveways, or structures over the drain field — compacting the soil reduces its ability to absorb and filter effluent.",
      },
      {
        q: "Can I park a vehicle over my septic tank or drain field?",
        a: "No. Septic tanks and drain field pipes are not designed to support vehicle weight. Parking or driving over these areas can crack the tank lid, crush distribution pipes, and compact the drain field soil — all of which require expensive repairs. Mark your system location and protect it from vehicle traffic.",
      },
    ],
  },
  {
    id: "warning-signs",
    title: "Warning Signs & Troubleshooting",
    questions: [
      {
        q: "What are the warning signs of a failing septic system?",
        a: "Key warning signs include: slow or gurgling drains throughout the house (not just one fixture); sewage odors indoors or in the yard near the tank or drain field; unusually green, lush, or wet grass over the drain field; standing water or soggy soil in the drain field area; sewage backup into toilets, showers, or floor drains; and nitrate contamination in nearby well water. Any of these symptoms warrant an immediate inspection.",
      },
      {
        q: "My drains are slow. Is it my septic system or a plumbing clog?",
        a: "If only one fixture drains slowly, it's usually a localized pipe clog. If multiple fixtures throughout the house are slow or gurgling simultaneously, the problem is likely in the main sewer line or the septic tank itself. A full tank or blocked outlet baffle causes system-wide slowdowns. Contact a septic professional if you're experiencing symptoms in more than one area of the home.",
      },
      {
        q: "I smell sewage in my yard but drains are fine. What's happening?",
        a: "Outdoor sewage odors — especially near the tank lids or over the drain field — often indicate the system is overloaded, the tank is full, or a lid or vent is damaged. Odors after heavy rain are usually temporary. Persistent odors, or odors combined with wet spots in the drain field, suggest the system is pushing effluent to the surface. This is a health hazard — contact a septic professional for an assessment.",
      },
      {
        q: "What causes drain field failure, and can it be repaired?",
        a: "Drain field failure usually results from: solids carryover caused by years of skipped pump-outs; excessive water loading that saturates the soil; root intrusion from nearby trees; or soil compaction from vehicles or construction. Mild failure can sometimes be reversed with aeration or resting the field. Severe failure typically requires installing a new drain field or a drip-irrigation system. A licensed septic professional can assess your field and recommend the most cost-effective path.",
      },
      {
        q: "My toilet is backing up. Is this an emergency?",
        a: "Yes. Sewage backup into living spaces is a health hazard and should be treated as an emergency. Stop using all water immediately — don't flush, run dishwashers, or shower. Call a septic company with 24/7 emergency service. Most can dispatch a technician within 2–4 hours. Do not attempt to open the tank yourself.",
      },
    ],
  },
  {
    id: "cost",
    title: "Cost & Pricing",
    questions: [
      {
        q: "How much does septic tank pumping cost in Modesto?",
        a: "Most residential tank pump-outs in the Central Valley area range from $300 to $550. The price depends on tank size (1,000 vs. 1,500 gallons), access difficulty (buried lids add time), and travel distance. Reputable companies provide upfront pricing with no hidden fees before starting work.",
      },
      {
        q: "How much does a septic inspection cost?",
        a: "Standard septic inspections run $150–$350 depending on scope. A pre-sale inspection that includes pumping, a written report, and baffle/drain field assessment is typically $400–$600. If an inspection is done at the same time as a scheduled pump-out, costs are lower since the tank is already accessible.",
      },
      {
        q: "What factors affect the price of septic service?",
        a: "Key pricing factors: tank size (larger tanks = more waste to remove); lid accessibility (risers save time and money); distance from the company's service area; last pump date (neglected tanks take longer); and whether repairs are needed. Emergency service typically carries an after-hours surcharge, which should be disclosed before dispatching.",
      },
      {
        q: "How does pumping cost compare to drain field repair?",
        a: "Regular pumping costs $300–$550 every 3–5 years — roughly $75–$150 per year. A drain field replacement costs $5,000–$25,000+ depending on system type, soil conditions, and permit requirements. Skipping one $400 pump-out to 'save money' can lead to a $15,000 drain field replacement. Preventive maintenance is almost always the right financial decision.",
      },
      {
        q: "How do septic companies handle payment?",
        a: "Most septic companies accept credit cards, checks, and cash. Payment is typically due at time of service. For larger repair or installation projects, many companies offer payment arrangements — always ask before work begins.",
      },
    ],
  },
  {
    id: "hiring",
    title: "Hiring a Septic Professional",
    questions: [
      {
        q: "How do I find a good septic company?",
        a: "Look for a company with a valid state liquid waste hauler license and county permits for your area. Check for liability insurance and workers' compensation coverage. Read Google reviews, ask for references, and verify they provide written reports after service. A reputable company will give upfront pricing with no hidden fees.",
      },
      {
        q: "What should I ask before hiring a septic company?",
        a: "Key questions: Are you licensed and insured? What does the service include? Do you provide a written condition report? What's the total cost, and are there any additional fees? Do you offer emergency service? Can you provide references? Getting answers to these questions upfront helps you avoid surprises.",
      },
      {
        q: "Do most septic companies offer emergency service?",
        a: "Many septic companies offer 24/7 emergency service, though not all do. Emergency calls are typically prioritized and dispatched as quickly as possible — most aim for 2–4 hours. After-hours service usually carries a surcharge, which a good company will disclose before sending a technician.",
      },
      {
        q: "How far in advance should I schedule septic service?",
        a: "For routine pump-outs, most companies book 2–7 days out depending on the season. Spring and summer are busier, so calling ahead is recommended. For inspections tied to real estate transactions, give at least a week of lead time. Emergency service is typically dispatched same-day.",
      },
      {
        q: "Do I need to be home during a septic pump-out?",
        a: "It's helpful if you or another adult is present, especially for a first visit so the technician can locate lids and explain the system condition afterward. For homes with risers installed and where the tank location is already known, some companies can perform service while you're away and leave a written report.",
      },
    ],
  },
];
