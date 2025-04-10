import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Language = 'en' | 'de' | 'el';

interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    benefits: string;
    installation: string;
    faq: string;
    about: string;
    bookAppointment: string;
  };
  
  // Home/Hero section
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  
  // Features section
  features: {
    title: string;
    subtitle: string;
    energyIndependence: {
      title: string;
      description: string;
    };
    costSavings: {
      title: string;
      description: string;
    };
    ecoFriendly: {
      title: string;
      description: string;
    };
  };
  
  // Products section
  products: {
    title: string;
    subtitle: string;
    starter: {
      name: string;
      power: string;
      description: string;
      features: string[];
      popular: string;
    };
    standard: {
      name: string;
      power: string;
      description: string;
      features: string[];
    };
    premium: {
      name: string;
      power: string;
      description: string;
      features: string[];
    };
  };
  
  // Benefits section
  benefits: {
    title: string;
    abundantSunshine: {
      title: string;
      description: string;
    };
    significantSavings: {
      title: string;
      description: string;
    };
    idealForApartments: {
      title: string;
      description: string;
    };
    simpleInstallation: {
      title: string;
      description: string;
    };
  };
  
  // AppTracking section
  appTracking: {
    title: string;
    subtitle: string;
    realTimeEnergy: {
      title: string;
      description: string;
    };
    savingsCalculator: {
      title: string;
      description: string;
    };
    performanceAnalysis: {
      title: string;
      description: string;
    };
    mobileNotifications: {
      title: string;
      description: string;
    };
    ctaButton: string;
  };
  
  // Low Light Performance section
  lowLightPerformance: {
    title: string;
    subtitle: string;
    earlyMorning: {
      title: string;
      description: string;
    };
    cloudyDay: {
      title: string;
      description: string;
    };
    eveningProduction: {
      title: string;
      description: string;
    };
    lowLightEfficiency: {
      title: string;
      description: string;
    };
    ctaButton: string;
  };
  
  // About section
  about: {
    title: string;
    germanExpertise: string;
    zendurePartner: string;
    specializedTeam: string;
    licenses: string;
    stats: {
      systemsInstalled: string;
      yearsExperience: string;
      satisfaction: string;
      licensedSpecialists: string;
    };
  };
  
  // Appointment form
  appointment: {
    title: string;
    subtitle: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      postalCode: string;
      preferredDate: string;
      preferredTime: string;
      notes: string;
      submitButton: string;
      submitting: string;
    };
    thankYou: {
      title: string;
      message: string;
      anotherAppointment: string;
    };
    whyBook: {
      title: string;
      reasons: string[];
    };
  };
  
  // FAQ section
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // Footer section
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    newsletter: string;
    subscribeText: string;
    emailPlaceholder: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
  };
  
  // Testimonials section
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      text: string;
      name: string;
      location: string;
    }>;
  };
  
  // Installation Process section
  installation: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  
  // Calculator section
  calculator: {
    title: string;
    subtitle: string;
    peakPowerLabel: string;
    locationLabel: string;
    priceLabel: string;
    angleLabel: string;
    angleDescription: string;
    orientationLabel: string;
    orientationDescription: string;
    calculateButton: string;
    calculating: string;
    error: string;
    resultsTitle: string;
    productionLabel: string;
    savingsLabel: string;
    year: string;
    angleOptionFlat: string;
    angleOptionTilted: string;
    angleOptionVertical: string;
    orientationOptionSouth: string;
    orientationOptionEast: string;
    orientationOptionWest: string;
    orientationOptionNorth: string;
    locationAndPower: string;
    panelPosition: string;
    environmentalImpact: string;
    co2Saved: string;
    co2PerYear: string;
    perDay: string;
    perMonth: string;
    printResults: string;
    resultsDisclaimer: string;
  };
}

const translationsData: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      benefits: 'Benefits',
      installation: 'Installation',
      faq: 'FAQ',
      about: 'About',
      bookAppointment: 'Book Appointment'
    },
    hero: {
      title: 'Balcony Solar Power for Cyprus',
      subtitle: 'Harness the Mediterranean sun with plug & play solar panels designed for apartments and balconies',
      ctaButton: 'Explore Solutions'
    },
    features: {
      title: 'Why Choose Balcony Solar',
      subtitle: 'Simple, effective, and affordable solar power for your home',
      energyIndependence: {
        title: 'Energy Independence',
        description: 'Generate your own electricity and reduce dependence on the grid with our balcony solar panels.'
      },
      costSavings: {
        title: 'Cost Savings',
        description: 'Lower your electricity bills with free solar energy, especially valuable in Cyprus\'s sunny climate.'
      },
      ecoFriendly: {
        title: 'Eco-Friendly',
        description: 'Reduce your carbon footprint with clean, renewable energy that\'s good for Cyprus and the planet.'
      }
    },
    products: {
      title: 'Our Solar Solutions',
      subtitle: 'Choose from our range of high-quality balcony solar systems, designed specifically for the Cyprus climate and regulations.',
      starter: {
        name: 'Starter Balcony Kit',
        power: '600W',
        description: 'Ideal for small balconies',
        features: [
          '2 x 300W high-efficiency panels',
          'Microinverter included',
          'Easy mounting system',
          '5-year warranty'
        ],
        popular: 'Popular'
      },
      standard: {
        name: 'Standard Balcony Kit',
        power: '1000W',
        description: 'Perfect for medium balconies',
        features: [
          '4 x 250W high-efficiency panels',
          'Grid-tie inverter included',
          'Adjustable mounting brackets',
          '10-year warranty'
        ]
      },
      premium: {
        name: 'Premium Balcony Kit',
        power: '1500W',
        description: 'For large balconies & terraces',
        features: [
          '6 x 250W high-efficiency panels',
          'Smart inverter with monitoring',
          'Premium mounting system',
          '15-year comprehensive warranty'
        ]
      }
    },
    benefits: {
      title: 'Why Choose Balcony Solar in Cyprus?',
      abundantSunshine: {
        title: 'Abundant Sunshine',
        description: 'Cyprus enjoys over 340 days of sunshine per year, making it one of the best locations in Europe for solar energy production.'
      },
      significantSavings: {
        title: 'Significant Savings',
        description: 'With high electricity rates in Cyprus, balcony solar systems typically pay for themselves within 3-5 years, then provide free electricity.'
      },
      idealForApartments: {
        title: 'Ideal for Apartments',
        description: 'Our systems are designed for renters and apartment owners who can\'t install traditional rooftop solar but still want to benefit from renewable energy.'
      },
      simpleInstallation: {
        title: 'Simple Installation',
        description: 'No complex permits required for balcony systems under 2kW in Cyprus. Our solutions can be installed in just a few hours with minimal disruption.'
      }
    },
    appTracking: {
      title: 'Track Your Solar Performance',
      subtitle: 'Our mobile app gives you complete control over your solar system. Monitor production, track savings, and optimize performance all from your smartphone.',
      realTimeEnergy: {
        title: 'Real-time Energy Production',
        description: 'Monitor your solar panel\'s energy production in real-time with easy-to-read graphs and analytics.'
      },
      savingsCalculator: {
        title: 'Savings Calculator',
        description: 'See exactly how much money you\'re saving on your electricity bills with detailed financial tracking.'
      },
      performanceAnalysis: {
        title: 'Performance Analysis',
        description: 'Advanced analytics to optimize your solar panel\'s performance based on Cyprus\'s unique climate conditions.'
      },
      mobileNotifications: {
        title: 'Mobile Notifications',
        description: 'Receive alerts about system status, maintenance needs, and exceptional energy production days.'
      },
      ctaButton: 'Try Our App Demo'
    },
    lowLightPerformance: {
      title: 'More Energy All Day Long',
      subtitle: 'Our SolarFlow 800 Pro with 2640 MPPT technology captures 10-20% more energy throughout the day, powering your home from the first ray of sunshine until dusk - even in challenging light conditions.',
      earlyMorning: {
        title: 'Early Morning Generation',
        description: 'The SolarFlow 800 Pro starts producing at just 14V instead of 18V like conventional systems, capturing energy from the first rays of morning light.'
      },
      cloudyDay: {
        title: 'Cloudy and Rainy Day Performance',
        description: 'Advanced technology ensures your panels continue generating electricity even during Cyprus\'s occasional cloudy and rainy days.'
      },
      eveningProduction: {
        title: 'Evening Production',
        description: 'Continues generating power until dusk, extending your daily production window and capturing 10-20% more energy than standard systems.'
      },
      lowLightEfficiency: {
        title: 'Low-Light Efficiency',
        description: 'High performance in low-light conditions means more electricity for your home from sunrise to sunset, maximizing your energy independence.'
      },
      ctaButton: 'Learn About SolarFlow 800 Pro'
    },
    about: {
      title: 'About SolarCyprus',
      germanExpertise: 'SolarCyprus is led by renowned German solar expert Dipl.-Ing. Klaus Schmidt, who brings over 25 years of experience in renewable energy systems and engineering excellence to Cyprus.',
      zendurePartner: 'As the official licensed partner of Zendure in Cyprus, we exclusively provide their cutting-edge SolarFlow systems and components, backed by manufacturer certification and comprehensive warranties.',
      specializedTeam: 'Our specialized team of German-trained technicians is dedicated to making renewable energy accessible to everyone in Cyprus, including apartment dwellers and renters who previously couldn\'t benefit from solar power.',
      licenses: 'We maintain all necessary licenses and certifications required by Cyprus and EU regulations, ensuring every installation meets the highest safety and quality standards in the industry.',
      stats: {
        systemsInstalled: 'Systems installed',
        yearsExperience: 'Years of experience',
        satisfaction: 'Customer satisfaction',
        licensedSpecialists: 'Licensed specialists'
      }
    },
    appointment: {
      title: 'Book Your Free Consultation',
      subtitle: 'Ready to start your solar journey? Schedule a no-obligation consultation with our experts. We\'ll visit your property, assess your balcony, and provide a customized solution.',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        address: 'Address',
        city: 'City',
        postalCode: 'Postal Code',
        preferredDate: 'Preferred Date',
        preferredTime: 'Preferred Time',
        notes: 'Additional Notes (Optional)',
        submitButton: 'Book Your Free Consultation',
        submitting: 'Booking...'
      },
      thankYou: {
        title: 'Thank You!',
        message: 'Your appointment request has been successfully submitted. Our team will contact you within 24 hours to confirm the details.',
        anotherAppointment: 'Book Another Free Consultation'
      },
      whyBook: {
        title: 'Why Book a Free Consultation?',
        reasons: [
          'Receive a personalized assessment of your balcony\'s solar potential',
          'Get a custom quote based on your energy needs and budget',
          'Learn about Cyprus-specific regulations and incentives',
          'No obligation - decide after getting all the information'
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about our balcony solar solutions for Cyprus.',
      questions: [
        {
          question: "Do I need permission to install a balcony solar system in Cyprus?",
          answer: "For small balcony installations under 2kW, you generally don't need special permits in Cyprus. However, if you're renting, you should get your landlord's permission. For apartment buildings, it's recommended to inform the building management. Our team will guide you through any specific requirements based on your location and situation."
        },
        {
          question: "How much electricity can a balcony solar system generate in Cyprus?",
          answer: "In Cyprus' sunny climate, a 1kW balcony system typically generates around 1,600-1,800 kWh per year. Our 600W starter kit would produce approximately 900-1,080 kWh annually, while the 1.5kW premium system can generate up to 2,700 kWh per year. This can offset a significant portion of a typical household's electricity usage, especially for appliances used during daylight hours."
        },
        {
          question: "How can the SolarFlow 800 Pro help save on electricity costs?",
          answer: "The SolarFlow 800 Pro optimizes household energy consumption through a combination of powerful hardware and AI-powered HEMS (Home Energy Management System). The powerful hardware includes a 2640W MPPT controller (4 × 660W) and a bidirectional 1000W inverter (1000W input & off-grid output, 800W grid-connected output), which stores excess solar energy during the day (when used with battery) and provides it at night to reduce electricity costs. The AI-powered HEMS continuously analyzes solar power generation, consumption patterns, weather forecasts, and electricity price fluctuations to dynamically adjust charging and discharging times. For example, it charges during low-cost nighttime rates and switches to battery power during high-price daytime periods, resulting in savings of up to 42% on energy costs."
        },
        {
          question: "How do you calculate power generation and electricity cost savings of a PV system?",
          answer: "Annual energy generation is calculated by selecting your location and installed PV capacity (kWp) on the solar map. Taking into account the sun's position, azimuth angle, and module tilt angle, you can calculate the expected annual electricity generation (kWh/year). Annual electricity cost savings are calculated as: Annual savings = Annual energy generation × self-consumption rate × electricity price. For example, using the SolarFlow 800 Pro in Southern Cyprus with a 2000W PV module and a smart meter: Annual savings = 2260 kWh/year × 98% × €0.4/kWh = €880. Please note: Actual savings may vary depending on your region, electricity tariff, and consumption behavior."
        },
        {
          question: "Can the SolarFlow 800 Pro charge the battery from the household grid?",
          answer: "Yes, the SolarFlow 800 Pro can charge the battery from the household grid (AC) when needed. The Zendure app intelligently schedules AC charging, for example during off-peak hours with lower electricity rates to reduce energy costs. The system also automatically detects when the battery level is critically low (e.g., during low PV generation) and switches to grid power to prevent damage to the battery."
        },
        {
          question: "Can the SolarFlow 800 Pro power household appliances during a power outage?",
          answer: "The SolarFlow 800 Pro has an off-grid outlet that can continue to power devices during a power outage. The maximum continuous power is 1,000W, with a peak power of 1,200W available for up to 10 seconds if needed, for example for devices with high startup current. The off-grid function must first be activated in the app. After activation, the system can automatically switch to battery operation within 15ms during a power outage, allowing connected devices to continue running without interruption."
        },
        {
          question: "Does the SolarFlow 800 Pro continue to power the house during a power outage?",
          answer: "According to EU safety regulations, the SolarFlow 800 Pro discontinues feeding into the grid during a power outage. However, up to 1,000W can still be provided through the off-grid outlet."
        },
        {
          question: "Does the SolarFlow 800 Pro generate power on continuously rainy or foggy days?",
          answer: "Yes, even in continuously cloudy, rainy, or foggy weather, the solar modules continue to generate electricity, albeit with significantly reduced efficiency. In such cases, using batteries helps to store previously generated excess solar energy or to charge during off-peak hours via the power grid. This way, the SolarFlow 800 Pro can support uninterrupted power supply even with low solar radiation. The integrated intelligent energy management ensures that energy use remains as cost-efficient as possible even with little sunlight."
        },
        {
          question: "What is the protection rating of the SolarFlow 800 Pro?",
          answer: "The SolarFlow 800 Pro has an IP65 protection rating. This means the device is dust-tight and protected against water jets from all directions."
        },
        {
          question: "How does the SolarFlow 800 Pro distribute energy?",
          answer: "The system uses automatic control via real-time data, adjusting its power output dynamically based on information from smart meters or smart plugs. Dynamic electricity prices are also taken into account, minimizing energy waste and optimizing power consumption cost-efficiently. Alternatively, manual control through schedules allows the system to work according to predetermined charging and discharging times, storing excess solar energy specifically for later self-consumption during peak times."
        },
        {
          question: "What data can I see in the app?",
          answer: "In the Zendure app, you have access to a variety of information, both real-time and historical data. These include: real-time performance data of the SolarFlow 800 Pro, historical statistics on energy generation and usage, battery state of charge (SOC), charging and discharging power, and total system consumption."
        },
        {
          question: "What happens when moving to a new property?",
          answer: "It's very simple - you can take the system with you. We're happy to support you with the installation in your new home."
        }
      ]
    },
    footer: {
      tagline: 'Making solar energy accessible to everyone in Cyprus with innovative balcony solutions.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      newsletter: 'Newsletter',
      subscribeText: 'Subscribe to our newsletter for the latest updates on solar technology and special offers.',
      emailPlaceholder: 'Your email',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy'
    },
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Hear from Cyprus residents who are already enjoying the benefits of our balcony solar solutions.',
      items: [
        {
          text: "I was skeptical about how much power a balcony system could generate, but I've been amazed! My electricity bills are down by 30% since installation. The team was professional and the system looks great on my balcony in Limassol.",
          name: "Andreas Georgiou",
          location: "Limassol, Cyprus"
        },
        {
          text: "As a renter, I never thought I could use solar energy. The balcony system was perfect - easy to install and my landlord had no objections. It's been running flawlessly for 8 months now, and I'm saving about €40 per month.",
          name: "Elena Christodoulou",
          location: "Nicosia, Cyprus"
        },
        {
          text: "The consultation was thorough and honest. They didn't try to oversell me and recommended the perfect system for my small balcony in Paphos. Installation was clean and quick. Very happy with my decision!",
          name: "Michael Kyriakou",
          location: "Paphos, Cyprus"
        }
      ]
    },
    installation: {
      title: 'Simple Installation Process',
      subtitle: 'Getting your balcony solar system up and running is quick and easy with our professional team.',
      steps: [
        {
          title: 'Consultation',
          description: 'We visit your home to assess your balcony and discuss your energy needs.'
        },
        {
          title: 'Custom Design',
          description: 'Our team designs a system tailored to your specific balcony space and energy goals.'
        },
        {
          title: 'Quick Installation',
          description: 'Professional installation typically takes just 2-4 hours with minimal disruption.'
        },
        {
          title: 'Start Saving',
          description: 'Begin generating your own clean electricity and watch your bills decrease immediately.'
        }
      ]
    },
    calculator: {
      title: 'Estimate Your Solar Potential',
      subtitle: 'Calculate the estimated energy production and savings for a balcony solar system at your location.',
      peakPowerLabel: 'System Peak Power',
      locationLabel: 'Select Location',
      priceLabel: 'Electricity Price',
      angleLabel: 'Panel Angle',
      angleDescription: '0° = flat, 90° = vertical',
      orientationLabel: 'Panel Orientation',
      orientationDescription: '0° = South, -90° = East, 90° = West',
      calculateButton: 'Calculate',
      calculating: 'Calculating...',
      error: 'Failed to calculate. Please check inputs and try again.',
      resultsTitle: 'Estimated Yearly Results',
      productionLabel: 'Energy Production',
      savingsLabel: 'Cost Savings',
      year: 'year',
      angleOptionFlat: 'Flat (0°)',
      angleOptionTilted: 'Tilted (~30-45°)',
      angleOptionVertical: 'Vertical (90°)',
      orientationOptionSouth: 'South (0°)',
      orientationOptionEast: 'East (-90°)',
      orientationOptionWest: 'West (90°)',
      orientationOptionNorth: 'North (180°)',
      locationAndPower: 'Location & System Power',
      panelPosition: 'Panel Position & Orientation',
      environmentalImpact: 'Environmental Impact',
      co2Saved: 'CO₂ Emissions Avoided',
      co2PerYear: 'per year',
      perDay: 'per day',
      perMonth: 'per month',
      printResults: 'Print Results',
      resultsDisclaimer: 'Results are estimates based on historical data and actual production may vary.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      benefits: 'Vorteile',
      installation: 'Installation',
      faq: 'FAQ',
      about: 'Über uns',
      bookAppointment: 'Termin buchen'
    },
    hero: {
      title: 'Balkon-Solarenergie für Zypern',
      subtitle: 'Nutzen Sie die mediterrane Sonne mit Plug & Play Solarmodulen, die speziell für Wohnungen und Balkone konzipiert sind',
      ctaButton: 'Lösungen entdecken'
    },
    features: {
      title: 'Warum Balkon-Solar wählen',
      subtitle: 'Einfache, effektive und kostengünstige Solarenergie für Ihr Zuhause',
      energyIndependence: {
        title: 'Energieunabhängigkeit',
        description: 'Erzeugen Sie Ihren eigenen Strom und verringern Sie die Abhängigkeit vom Netz mit unseren Balkon-Solarmodulen.'
      },
      costSavings: {
        title: 'Kosteneinsparungen',
        description: 'Senken Sie Ihre Stromrechnungen mit kostenloser Solarenergie, besonders wertvoll im sonnigen Klima Zyperns.'
      },
      ecoFriendly: {
        title: 'Umweltfreundlich',
        description: 'Reduzieren Sie Ihren CO₂-Fußabdruck mit sauberer, erneuerbarer Energie, die gut für Zypern und den Planeten ist.'
      }
    },
    products: {
      title: 'Unsere Solar-Lösungen',
      subtitle: 'Wählen Sie aus unserer Palette hochwertiger Balkon-Solarsysteme, die speziell für das Klima und die Vorschriften Zyperns entwickelt wurden.',
      starter: {
        name: 'Einsteiger-Balkon-Set',
        power: '600W',
        description: 'Ideal für kleine Balkone',
        features: [
          '2 x 300W Hochleistungsmodule',
          'Mikrowechselrichter inbegriffen',
          'Einfaches Montagesystem',
          '5 Jahre Garantie'
        ],
        popular: 'Beliebt'
      },
      standard: {
        name: 'Standard-Balkon-Set',
        power: '1000W',
        description: 'Perfekt für mittlere Balkone',
        features: [
          '4 x 250W Hochleistungsmodule',
          'Netzgekoppelter Wechselrichter inbegriffen',
          'Verstellbare Montagehalterungen',
          '10 Jahre Garantie'
        ]
      },
      premium: {
        name: 'Premium-Balkon-Set',
        power: '1500W',
        description: 'Für große Balkone & Terrassen',
        features: [
          '6 x 250W Hochleistungsmodule',
          'Smart-Wechselrichter mit Überwachung',
          'Premium-Montagesystem',
          '15 Jahre umfassende Garantie'
        ]
      }
    },
    benefits: {
      title: 'Warum Balkon-Solar in Zypern wählen?',
      abundantSunshine: {
        title: 'Reichlich Sonnenschein',
        description: 'Zypern genießt über 340 Sonnentage pro Jahr, was es zu einem der besten Standorte in Europa für die Solarenergieproduktion macht.'
      },
      significantSavings: {
        title: 'Erhebliche Einsparungen',
        description: 'Mit den hohen Strompreisen in Zypern amortisieren sich Balkon-Solarsysteme typischerweise innerhalb von 3-5 Jahren und liefern dann kostenlosen Strom.'
      },
      idealForApartments: {
        title: 'Ideal für Wohnungen',
        description: 'Unsere Systeme sind für Mieter und Wohnungseigentümer konzipiert, die keine traditionellen Dachsolaranlagen installieren können, aber dennoch von erneuerbarer Energie profitieren möchten.'
      },
      simpleInstallation: {
        title: 'Einfache Installation',
        description: 'Keine komplexen Genehmigungen für Balkonsysteme unter 2kW in Zypern erforderlich. Unsere Lösungen können in nur wenigen Stunden mit minimaler Störung installiert werden.'
      }
    },
    appTracking: {
      title: 'Verfolgen Sie Ihre Solar-Leistung',
      subtitle: 'Unsere mobile App gibt Ihnen vollständige Kontrolle über Ihr Solarsystem. Überwachen Sie die Produktion, verfolgen Sie Einsparungen und optimieren Sie die Leistung - alles von Ihrem Smartphone aus.',
      realTimeEnergy: {
        title: 'Echtzeit-Energieproduktion',
        description: 'Überwachen Sie die Energieproduktion Ihrer Solarmodule in Echtzeit mit leicht verständlichen Diagrammen und Analysen.'
      },
      savingsCalculator: {
        title: 'Einsparungs-Rechner',
        description: 'Sehen Sie genau, wie viel Geld Sie bei Ihren Stromrechnungen mit detaillierter Finanzverfolgung sparen.'
      },
      performanceAnalysis: {
        title: 'Leistungsanalyse',
        description: 'Fortschrittliche Analytik zur Optimierung der Leistung Ihrer Solarmodule basierend auf den einzigartigen Klimabedingungen Zyperns.'
      },
      mobileNotifications: {
        title: 'Mobile Benachrichtigungen',
        description: 'Erhalten Sie Benachrichtigungen über den Systemstatus, Wartungsbedarf und außergewöhnliche Energieproduktionstrends.'
      },
      ctaButton: 'Testen Sie unsere App-Demo'
    },
    lowLightPerformance: {
      title: 'Mehr Energie den ganzen Tag',
      subtitle: 'Unser SolarFlow 800 Pro mit 2640 MPPT-Technologie erfasst 10-20% mehr Energie über den Tag hinweg und versorgt Ihr Zuhause vom ersten Sonnenstrahl bis zur Dämmerung - selbst bei herausfordernden Lichtbedingungen.',
      earlyMorning: {
        title: 'Frühmorgendliche Stromerzeugung',
        description: 'Der SolarFlow 800 Pro beginnt bereits bei 14V mit der Stromerzeugung, im Gegensatz zu herkömmlichen Systemen, die erst bei 18V starten, und erfasst damit Energie von den ersten Morgenstrahlen an.'
      },
      cloudyDay: {
        title: 'Leistung bei bewölktem und regnerischem Wetter',
        description: 'Fortschrittliche Technologie sorgt dafür, dass Ihre Module auch während der gelegentlichen bewölkten und regnerischen Tage in Zypern weiterhin Strom erzeugen.'
      },
      eveningProduction: {
        title: 'Abendproduktion',
        description: 'Erzeugt bis zur Dämmerung weiter Strom, verlängert das tägliche Produktionsfenster und erfasst 10-20% mehr Energie als Standardsysteme.'
      },
      lowLightEfficiency: {
        title: 'Effizienz bei schwachem Licht',
        description: 'Hohe Leistung bei schwachen Lichtverhältnissen bedeutet mehr Strom für Ihr Zuhause von Sonnenaufgang bis Sonnenuntergang und maximiert Ihre Energieunabhängigkeit.'
      },
      ctaButton: 'Erfahren Sie mehr über SolarFlow 800 Pro'
    },
    about: {
      title: 'Über SolarCyprus',
      germanExpertise: 'SolarCyprus wird vom renommierten deutschen Solarexperten Dipl.-Ing. Klaus Schmidt geleitet, der über 25 Jahre Erfahrung in erneuerbaren Energiesystemen und technische Exzellenz nach Zypern bringt.',
      zendurePartner: 'Als offizieller Lizenzpartner von Zendure in Zypern bieten wir exklusiv deren hochmoderne SolarFlow-Systeme und -Komponenten an, unterstützt durch Herstellerzertifizierung und umfassende Garantien.',
      specializedTeam: 'Unser spezialisiertes Team aus in Deutschland ausgebildeten Technikern ist darauf spezialisiert, erneuerbare Energie für jeden in Zypern zugänglich zu machen, einschließlich Wohnungsbewohner und Mieter, die bisher nicht von Solarenergie profitieren konnten.',
      licenses: 'Wir verfügen über alle erforderlichen Lizenzen und Zertifizierungen gemäß den zyprischen und EU-Vorschriften und stellen sicher, dass jede Installation die höchsten Sicherheits- und Qualitätsstandards der Branche erfüllt.',
      stats: {
        systemsInstalled: 'Installierte Systeme',
        yearsExperience: 'Jahre Erfahrung',
        satisfaction: 'Kundenzufriedenheit',
        licensedSpecialists: 'Lizenzierte Spezialisten'
      }
    },
    appointment: {
      title: 'Buchen Sie Ihre kostenlose Beratung',
      subtitle: 'Bereit, Ihre Solarreise zu beginnen? Vereinbaren Sie eine unverbindliche Beratung mit unseren Experten. Wir besuchen Ihr Objekt, bewerten Ihren Balkon und bieten eine maßgeschneiderte Lösung an.',
      form: {
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        address: 'Adresse',
        city: 'Stadt',
        postalCode: 'Postleitzahl',
        preferredDate: 'Bevorzugtes Datum',
        preferredTime: 'Bevorzugte Zeit',
        notes: 'Zusätzliche Hinweise (Optional)',
        submitButton: 'Kostenlose Beratung buchen',
        submitting: 'Wird gebucht...'
      },
      thankYou: {
        title: 'Vielen Dank!',
        message: 'Ihre Terminanfrage wurde erfolgreich übermittelt. Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um die Details zu bestätigen.',
        anotherAppointment: 'Weitere kostenlose Beratung buchen'
      },
      whyBook: {
        title: 'Warum eine kostenlose Beratung buchen?',
        reasons: [
          'Erhalten Sie eine persönliche Bewertung des Solarpotenzials Ihres Balkons',
          'Bekommen Sie ein maßgeschneidertes Angebot basierend auf Ihrem Energiebedarf und Budget',
          'Informieren Sie sich über zyprische Vorschriften und Anreize',
          'Keine Verpflichtung - entscheiden Sie, nachdem Sie alle Informationen erhalten haben'
        ]
      }
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Finden Sie Antworten auf häufige Fragen zu unseren Balkon-Solarlösungen für Zypern.',
      questions: [
        {
          question: "Benötige ich eine Genehmigung für die Installation eines Balkon-Solarsystems in Zypern?",
          answer: "Für kleine Balkoninstallationen unter 2kW benötigen Sie in der Regel keine speziellen Genehmigungen in Zypern. Wenn Sie jedoch zur Miete wohnen, sollten Sie die Erlaubnis Ihres Vermieters einholen. Bei Mehrfamilienhäusern ist es empfehlenswert, die Hausverwaltung zu informieren. Unser Team wird Sie durch alle spezifischen Anforderungen basierend auf Ihrem Standort und Ihrer Situation führen."
        },
        {
          question: "Wie viel Strom kann ein Balkon-Solarsystem in Zypern erzeugen?",
          answer: "Im sonnigen Klima Zyperns erzeugt ein 1kW-Balkonsystem typischerweise etwa 1.600-1.800 kWh pro Jahr. Unser 600W-Starter-Kit würde jährlich etwa 900-1.080 kWh produzieren, während das 1,5kW-Premium-System bis zu 2.700 kWh pro Jahr erzeugen kann. Dies kann einen erheblichen Teil des typischen Haushaltsstromverbrauchs kompensieren, insbesondere für Geräte, die tagsüber verwendet werden."
        },
        {
          question: "Wie kann der SolarFlow 800 Pro beim Stromsparen helfen?",
          answer: "Der SolarFlow 800 Pro optimiert den Haushaltsenergieverbrauch durch eine Kombination aus leistungsstarker Hardware und KI-gesteuertem HEMS (Home Energy Management System). Die leistungsstarke Hardware umfasst einen 2640W MPPT-Controller (4 × 660W) und einen bidirektionalen 1000W-Wechselrichter (1000W Eingang & netzunabhängiger Ausgang, 800W netzgekoppelter Ausgang), der überschüssige Solarenergie tagsüber speichert (bei Verwendung mit Batterie) und nachts bereitstellt, um Stromkosten zu senken. Das KI-gesteuerte HEMS analysiert kontinuierlich die Solarstromerzeugung, Verbrauchsmuster, Wettervorhersagen und Stromspreisschwankungen, um die Lade- und Entladezeiten dynamisch anzupassen. Zum Beispiel lädt es während kostengünstiger Nachttarife und wechselt zu Batteriestrom während teurer Tageszeiten, was zu Einsparungen von bis zu 42% bei den Energiekosten führt."
        },
        {
          question: "Wie berechnen Sie die Stromerzeugung und Stromkosteneinsparungen eines PV-Systems?",
          answer: "Die jährliche Energieerzeugung wird berechnet, indem Sie Ihren Standort und die installierte PV-Leistung (kWp) auf der Solarkarte auswählen. Unter Berücksichtigung der Sonnenposition, des Azimutwinkels und des Modulneigungswinkels können Sie die erwartete jährliche Stromerzeugung (kWh/year) berechnen. Die jährlichen Stromkosteneinsparungen werden wie folgt berechnet: Jährliche Einsparungen = Jährliche Energieerzeugung × Eigenverbrauchsrate × Strompreis. Zum Beispiel mit dem SolarFlow 800 Pro im Süden Zyperns mit einem 2000W PV-Modul und einem Smart Meter: Jährliche Einsparungen = 2260 kWh/year × 98% × €0.4/kWh = €880. Bitte beachten Sie: Die tatsächlichen Einsparungen können je nach Region, Stromtarif und Verbrauchsverhalten variieren."
        },
        {
          question: "Kann der SolarFlow 800 Pro die Batterie aus dem Haushaltsnetz laden?",
          answer: "Ja, der SolarFlow 800 Pro kann die Batterie bei Bedarf aus dem Haushaltsnetz (AC) laden. Die Zendure-App plant intelligente AC-Ladungen, beispielsweise während der Nebenzeiten mit niedrigeren Stromtarifen, um Energiekosten zu senken. Das System erkennt auch automatisch, wenn der Batteriestand kritisch niedrig ist (e.g., während geringer PV-Erzeugung) und wechselt zum Netzstrom, um Schäden an der Batterie zu vermeiden."
        },
        {
          question: "Kann der SolarFlow 800 Pro Haushaltsgeräte während eines Stromausfalls mit Strom versorgen?",
          answer: "Der SolarFlow 800 Pro verfügt über einen netzunabhängigen Ausgang, der Geräte auch während eines Stromausfalls weiter mit Strom versorgen kann. Die maximale Dauerleistung beträgt 1.000W, mit einer Spitzenleistung von 1.200W für bis zu 10 Sekunden bei Bedarf, beispielsweise für Geräte mit hohem Anlaufstrom. Die netzunabhängige Funktion muss zuerst in der App aktiviert werden. Nach der Aktivierung kann das System bei einem Stromausfall automatisch innerhalb von 15ms auf Batteriebetrieb umschalten, wodurch angeschlossene Geräte ohne Unterbrechung weiterlaufen können."
        },
        {
          question: "Versorgt der SolarFlow 800 Pro das Haus während eines Stromausfalls weiter mit Strom?",
          answer: "Gemäß den EU-Sicherheitsvorschriften stellt der SolarFlow 800 Pro während eines Stromausfalls die Einspeisung ins Netz ein. Jedoch können weiterhin bis zu 1.000W über den netzunabhängigen Ausgang bereitgestellt werden."
        },
        {
          question: "Erzeugt der SolarFlow 800 Pro an dauerhaft regnerischen oder nebligen Tagen Strom?",
          answer: "Ja, auch bei ständig bewölktem, regnerischem oder nebligem Wetter erzeugen die Solarmodule weiterhin Strom, wenn auch mit deutlich reduzierter Effizienz. In solchen Fällen hilft die Verwendung von Batterien, zuvor erzeugte überschüssige Solarenergie zu speichern oder während der Nebenzeiten über das Stromnetz zu laden. Auf diese Weise kann der SolarFlow 800 Pro auch bei geringer Sonneneinstrahlung eine unterbrechungsfreie Stromversorgung unterstützen. Das integrierte intelligente Energiemanagement sorgt dafür, dass die Energienutzung auch bei wenig Sonnenlicht so kosteneffizient wie möglich bleibt."
        },
        {
          question: "Wie ist die Schutzart des SolarFlow 800 Pro?",
          answer: "Der SolarFlow 800 Pro hat eine IP65-Schutzart. Das bedeutet, das Gerät ist staubdicht und gegen Strahlwasser aus allen Richtungen geschützt."
        },
        {
          question: "Wie verteilt der SolarFlow 800 Pro Energie?",
          answer: "Das System verwendet eine automatische Steuerung über Echtzeitdaten und passt seine Leistungsabgabe dynamisch basierend auf Informationen von Smart Metern oder Smart Plugs an. Dynamische Strompreise werden ebenfalls berücksichtigt, wodurch Energieverschwendung minimiert und der Stromverbrauch kosteneffizient optimiert wird. Alternativ ermöglicht die manuelle Steuerung über Zeitpläne dem System, nach vordefinierten Lade- und Entladezeiten zu arbeiten und überschüssige Solarenergie speziell für den späteren Eigenverbrauch während der Spitzenzeiten zu speichern."
        },
        {
          question: "Welche Daten kann ich in der App sehen?",
          answer: "In der Zendure-App haben Sie Zugriff auf eine Vielzahl von Informationen, sowohl Echtzeit- als auch historische Daten. Dazu gehören: Echtzeit-Leistungsdaten des SolarFlow 800 Pro, historische Statistiken zur Energieerzeugung und -nutzung, Batterieladezustand (SOC), Lade- und Entladeleistung sowie Gesamtsystemverbrauch."
        },
        {
          question: "Was passiert bei einem Umzug in eine neue Immobilie?",
          answer: "Es ist ganz einfach - Sie können das System mitnehmen. Wir unterstützen Sie gerne bei der Installation in Ihrem neuen Zuhause."
        }
      ]
    },
    footer: {
      tagline: 'Solarenergie für jeden in Zypern zugänglich machen mit innovativen Balkonlösungen.',
      quickLinks: 'Schnelllinks',
      contact: 'Kontakt',
      newsletter: 'Newsletter',
      subscribeText: 'Abonnieren Sie unseren Newsletter für die neuesten Updates zu Solartechnologie und Sonderangeboten.',
      emailPlaceholder: 'Ihre E-Mail',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      privacyPolicy: 'Datenschutzrichtlinie',
      termsOfService: 'Nutzungsbedingungen',
      cookiePolicy: 'Cookie-Richtlinie'
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Hören Sie von Einwohnern Zyperns, die bereits die Vorteile unserer Balkon-Solarlösungen genießen.',
      items: [
        {
          text: "Ich war skeptisch, wie viel Strom ein Balkonsystem erzeugen könnte, aber ich bin begeistert! Meine Stromrechnungen sind seit der Installation um 30% gesunken. Das Team war professionell und das System sieht auf meinem Balkon in Limassol großartig aus.",
          name: "Andreas Georgiou",
          location: "Limassol, Zypern"
        },
        {
          text: "Als Mieter dachte ich nie, dass ich Solarenergie nutzen könnte. Das Balkonsystem war perfekt - einfach zu installieren und mein Vermieter hatte keine Einwände. Es läuft jetzt seit 8 Monaten einwandfrei und ich spare etwa 40€ pro Monat.",
          name: "Elena Christodoulou",
          location: "Nikosia, Zypern"
        },
        {
          text: "Die Beratung war gründlich und ehrlich. Sie versuchten nicht, mir zu viel zu verkaufen, und empfahlen das perfekte System für meinen kleinen Balkon in Paphos. Die Installation war sauber und schnell. Sehr zufrieden mit meiner Entscheidung!",
          name: "Michael Kyriakou",
          location: "Paphos, Zypern"
        }
      ]
    },
    installation: {
      title: 'Einfacher Installationsprozess',
      subtitle: 'Die Inbetriebnahme Ihres Balkon-Solarsystems ist mit unserem professionellen Team schnell und einfach.',
      steps: [
        {
          title: 'Beratung',
          description: 'Wir besuchen Ihr Zuhause, um Ihren Balkon zu begutachten und Ihren Energiebedarf zu besprechen.'
        },
        {
          title: 'Maßgeschneidertes Design',
          description: 'Unser Team entwirft ein System, das auf Ihren speziellen Balkonraum und Ihre Energieziele zugeschnitten ist.'
        },
        {
          title: 'Schnelle Installation',
          description: 'Die professionelle Installation dauert in der Regel nur 2-4 Stunden bei minimaler Störung.'
        },
        {
          title: 'Beginnen Sie zu sparen',
          description: 'Beginnen Sie, Ihren eigenen sauberen Strom zu erzeugen und sehen Sie, wie Ihre Rechnungen sofort sinken.'
        }
      ]
    },
    calculator: {
      title: 'Schätzen Sie Ihr Solarpotenzial',
      subtitle: 'Berechnen Sie die geschätzte Energieproduktion und die Einsparungen für ein Balkon-Solarsystem an Ihrem Standort.',
      peakPowerLabel: 'System-Spitzenleistung',
      locationLabel: 'Standort auswählen',
      priceLabel: 'Strompreis',
      angleLabel: 'Panelneigung',
      angleDescription: '0° = flach, 90° = vertikal',
      orientationLabel: 'Panelorientierung',
      orientationDescription: '0° = Süden, -90° = Osten, 90° = Westen',
      calculateButton: 'Berechnen',
      calculating: 'Berechnung läuft...',
      error: 'Berechnung fehlgeschlagen. Bitte überprüfen Sie die Eingaben und versuchen Sie es erneut.',
      resultsTitle: 'Geschätzte jährliche Ergebnisse',
      productionLabel: 'Energieproduktion',
      savingsLabel: 'Kosteneinsparungen',
      year: 'Jahr',
      angleOptionFlat: 'Flach (0°)',
      angleOptionTilted: 'Geneigt (~30-45°)',
      angleOptionVertical: 'Vertikal (90°)',
      orientationOptionSouth: 'Süden (0°)',
      orientationOptionEast: 'Osten (-90°)',
      orientationOptionWest: 'Westen (90°)',
      orientationOptionNorth: 'Norden (180°)',
      locationAndPower: 'Standort & Systemleistung',
      panelPosition: 'Panelposition & Ausrichtung',
      environmentalImpact: 'Umweltauswirkungen',
      co2Saved: 'Vermiedene CO₂-Emissionen',
      co2PerYear: 'pro Jahr',
      perDay: 'pro Tag',
      perMonth: 'pro Monat',
      printResults: 'Ergebnisse drucken',
      resultsDisclaimer: 'Die Ergebnisse sind Schätzungen auf Basis historischer Daten. Die tatsächliche Produktion kann abweichen.'
    }
  },
  el: {
    nav: {
      home: 'Αρχική',
      products: 'Προϊόντα',
      benefits: 'Πλεονεκτήματα',
      installation: 'Εγκατάσταση',
      faq: 'Συχνές Ερωτήσεις',
      about: 'Σχετικά με εμάς',
      bookAppointment: 'Κράτηση Ώρας'
    },
    hero: {
      title: 'Ηλιακή Ενέργεια Μπαλκονιού για Κύπρο',
      subtitle: 'Χρησιμοποιήστε τον ήλιο της Μεσογείου με ηλιακά πάνελ Plug & Play σχεδιασμένα για ισόγεια και πατώματα',
      ctaButton: 'Ανακαλύψτε Λύσεις'
    },
    features: {
      title: 'Γιατί να Επιλέξετε Ηλιακή Ενέργεια Μπαλκονιού στην Κύπρο;',
      subtitle: 'Απλή, αποτελεσματική και οικονομική ηλιακή ενέργεια για το σπίτι σας',
      energyIndependence: {
        title: 'Ενέργεια Ανεξαρτησίας',
        description: 'Δημιουργήστε το δικό σας ηλεκτρικό ρεύμα και μειώστε την εξάρτηση από το δίκτυο με τα ηλιακά πάνελ ηλιακής ενέργειας μπαλκονιού μας.'
      },
      costSavings: {
        title: 'Οικονομίες Κόστους',
        description: 'Μειώστε τις λογαριασμούς ηλεκτρικού ρεύματος σας με ελεύθερο ηλιακό ισχύ, που είναι πολύτιμο στο ηλιακό κλίμα Κύπρου.'
      },
      ecoFriendly: {
        title: 'Περιβαλλοντικά',
        description: 'Μειώστε το ποσοστό CO₂ της περιοχής σας με καθαρή, ανανεώσιμη ενέργεια που είναι καλή για τον Κύπρο και τον πλανήτη.'
      }
    },
    products: {
      title: 'Οι Ηλιακές Μας Λύσεις',
      subtitle: 'Επιλέξτε από το εύρος των υψηλής ποιότητας ηλιακών συστημάτων μπαλκονιού που σχεδιάστηκαν ειδικά για το κλίμα και τις προδιαγραφές Κύπρου.',
      starter: {
        name: 'Έναρξη Μπαλκονιού Συνδυασμού',
        power: '600W',
        description: 'Ιδανικό για μικρά πατώματα',
        features: [
          '2 x 300W υψηλής απόδοσης πανέλα',
          'Μικροϋπερβολέα συμπεριλαμβανομένου',
          'Εύκολο σύστημα εγκατάστασης',
          '5-ετήσια εγγύηση'
        ],
        popular: 'Δημοφιλές'
      },
      standard: {
        name: 'Κανονικό Μπαλκονιού Συνδυασμού',
        power: '1000W',
        description: 'Πολύ καλό για μεσαία πατώματα',
        features: [
          '4 x 250W υψηλής απόδοσης πανέλα',
          'Κυρτό ηλεκτρικό μετατροπέα συμπεριλαμβανομένου',
          'Προσαρμόσιμο σύστημα εγκατάστασης',
          '10-ετήσια εγγύηση'
        ]
      },
      premium: {
        name: 'Προμήθευμα Προμηθευμένου Μπαλκονιού',
        power: '1500W',
        description: 'Για μεγάλα πατώματα & πλατεία',
        features: [
          '6 x 250W υψηλής απόδοσης πανέλα',
          'Κομπιούτερ με παρακολούθηση',
          'Προμηθευμένο σύστημα εγκατάστασης',
          '15-ετήσια πλήρης εγγύηση'
        ]
      }
    },
    benefits: {
      title: 'Γιατί να Επιλέξετε Ηλιακή Ενέργεια Μπαλκονιού στην Κύπρο;',
      abundantSunshine: {
        title: 'Άφθονη Ηλιοφάνεια',
        description: 'Η Κύπρος απολαμβάνει πάνω από 340 ημέρες ηλιοφάνειας ετησίως, καθιστώντας την έναν από τους καλύτερους τόπους στην Ευρώπη για παραγωγή ηλιακής ενέργειας.'
      },
      significantSavings: {
        title: 'Σημαντική Εξοικονόμηση',
        description: 'Με τις υψηλές τιμές ηλεκτρικής ενέργειας στην Κύπρο, τα συστήματα ηλιακής ενέργειας μπαλκονιού συνήθως αποσβένονται σε 3-5 χρόνια και στη συνέχεια παρέχουν δωρεάν ηλεκτρική ενέργεια.'
      },
      idealForApartments: {
        title: 'Ιδανικό για Διαμερίσματα',
        description: 'Τα συστήματά μας είναι σχεδιασμένα για ενοικιαστές και ιδιοκτήτες διαμερισμάτων που δεν μπορούν να εγκαταστήσουν παραδοσιακά ηλιακά πάνελ οροφής αλλά θέλουν να επωφεληθούν από την ανανεώσιμη ενέργεια.'
      },
      simpleInstallation: {
        title: 'Απλή Εγκατάσταση',
        description: 'Δεν απαιτούνται περίπλοκες άδειες για συστήματα μπαλκονιού κάτω των 2kW στην Κύπρο. Οι λύσεις μας μπορούν να εγκατασταθούν μέσα σε λίγες ώρες με ελάχιστη διατάραξη.'
      }
    },
    appTracking: {
      title: 'Παρακολουθήστε την Ηλιακή σας Απόδοση',
      subtitle: 'Η εφαρμογή μας για κινητά σάς παρέχει πλήρη έλεγχο του ηλιακού σας συστήματος. Παρακολουθήστε την παραγωγή, την εξοικονόμηση και βελτιστοποιήστε την απόδοση, όλα από το smartphone σας.',
      realTimeEnergy: {
        title: 'Παραγωγή Ενέργειας σε Πραγματικό Χρόνο',
        description: 'Παρακολουθήστε την παραγωγή ενέργειας των ηλιακών σας πάνελ σε πραγματικό χρόνο με εύκολα κατανοητά γραφήματα και αναλύσεις.'
      },
      savingsCalculator: {
        title: 'Υπολογιστής Εξοικονόμησης',
        description: 'Δείτε ακριβώς πόσα χρήματα εξοικονομείτε στους λογαριασμούς ηλεκτρικού ρεύματος με λεπτομερή οικονομική παρακολούθηση.'
      },
      performanceAnalysis: {
        title: 'Ανάλυση Απόδοσης',
        description: 'Προηγμένη ανάλυση για βελτιστοποίηση της απόδοσης των ηλιακών σας πάνελ με βάση τις μοναδικές κλιματικές συνθήκες της Κύπρου.'
      },
      mobileNotifications: {
        title: 'Ειδοποιήσεις στο Κινητό',
        description: 'Λάβετε ειδοποιήσεις σχετικά με την κατάσταση του συστήματος, τις ανάγκες συντήρησης και τις εξαιρετικές ημέρες παραγωγής ενέργειας.'
      },
      ctaButton: 'Δοκιμάστε το Demo της Εφαρμογής μας'
    },
    lowLightPerformance: {
      title: 'Περισσότερη Ενέργεια Όλη την Ημέρα',
      subtitle: 'Το SolarFlow 800 Pro με τεχνολογία 2640 MPPT συλλαμβάνει 10-20% περισσότερη ενέργεια καθ\' όλη τη διάρκεια της ημέρας, τροφοδοτώντας το σπίτι σας από την πρώτη ακτίνα του ήλιου μέχρι το σούρουπο - ακόμη και σε δύσκολες συνθήκες φωτισμού.',
      earlyMorning: {
        title: 'Παραγωγή Νωρίς το Πρωί',
        description: 'Το SolarFlow 800 Pro αρχίζει να παράγει σε μόλις 14V αντί για 18V όπως τα συμβατικά συστήματα, συλλαμβάνοντας ενέργεια από τις πρώτες ακτίνες του πρωινού φωτός.'
      },
      cloudyDay: {
        title: 'Απόδοση σε Συννεφιασμένες και Βροχερές Ημέρες',
        description: 'Η προηγμένη τεχνολογία εξασφαλίζει ότι τα πάνελ σας συνεχίζουν να παράγουν ηλεκτρική ενέργεια ακόμη και κατά τη διάρκεια των περιστασιακών συννεφιασμένων και βροχερών ημερών της Κύπρου.'
      },
      eveningProduction: {
        title: 'Παραγωγή το Βράδυ',
        description: 'Συνεχίζει να παράγει ενέργεια μέχρι το σούρουπο, επεκτείνοντας το καθημερινό παράθυρο παραγωγής και συλλαμβάνοντας 10-20% περισσότερη ενέργεια από τα τυπικά συστήματα.'
      },
      lowLightEfficiency: {
        title: 'Απόδοση σε Συνθήκες Χαμηλού Φωτισμού',
        description: 'Η υψηλή απόδοση σε συνθήκες χαμηλού φωτισμού σημαίνει περισσότερη ηλεκτρική ενέργεια για το σπίτι σας από την ανατολή έως τη δύση του ηλίου, μεγιστοποιώντας την ενεργειακή σας ανεξαρτησία.'
      },
      ctaButton: 'Μάθετε για το SolarFlow 800 Pro'
    },
    about: {
      title: 'Σχετικά με την SolarCyprus',
      germanExpertise: 'Η SolarCyprus διευθύνεται από τον αναγνωρισμένο Γερμανό ειδικό σε ηλιακή ενέργεια Dipl.-Ing. Klaus Schmidt, ο οποίος φέρνει πάνω από 25 χρόνια εμπειρίας σε συστήματα ανανεώσιμης ενέργειας και μηχανολογική αριστεία στην Κύπρο.',
      zendurePartner: 'Ως επίσημος εξουσιοδοτημένος συνεργάτης της Zendure στην Κύπρο, παρέχουμε αποκλειστικά τα υπερσύγχρονα συστήματα SolarFlow και εξαρτήματα τους, υποστηριζόμενα από πιστοποίηση κατασκευαστή και ολοκληρωμένες εγγυήσεις.',
      specializedTeam: 'Η εξειδικευμένη ομάδα τεχνικών μας με γερμανική εκπαίδευση είναι αφοσιωμένη στο να καθιστά την ανανεώσιμη ενέργεια προσιτή σε όλους στην Κύπρο, συμπεριλαμβανομένων των κατοίκων διαμερισμάτων και ενοικιαστών που προηγουμένως δεν μπορούσαν να επωφεληθούν από την ηλιακή ενέργεια.',
      licenses: 'Διατηρούμε όλες τις απαραίτητες άδειες και πιστοποιήσεις που απαιτούνται από τους κανονισμούς της Κύπρου και της ΕΕ, διασφαλίζοντας ότι κάθε εγκατάσταση πληροί τα υψηλότερα πρότυπα ασφάλειας και ποιότητας στον κλάδο.',
      stats: {
        systemsInstalled: 'Εγκατεστημένα συστήματα',
        yearsExperience: 'Χρόνια εμπειρίας',
        satisfaction: 'Ικανοποίηση πελατών',
        licensedSpecialists: 'Πιστοποιημένοι ειδικοί'
      }
    },
    appointment: {
      title: 'Κλείστε τη Δωρεάν Συμβουλευτική σας',
      subtitle: 'Έτοιμοι να ξεκινήσετε το ηλιακό σας ταξίδι; Προγραμματίστε μια συμβουλευτική χωρίς υποχρέωση με τους ειδικούς μας. Θα επισκεφτούμε την ιδιοκτησία σας, θα αξιολογήσουμε το μπαλκόνι σας και θα σας παρέχουμε μια προσαρμοσμένη λύση.',
      form: {
        firstName: 'Όνομα',
        lastName: 'Επώνυμο',
        email: 'Διεύθυνση Email',
        phone: 'Αριθμός Τηλεφώνου',
        address: 'Διεύθυνση',
        city: 'Πόλη',
        postalCode: 'Ταχυδρομικός Κώδικας',
        preferredDate: 'Προτιμώμενη Ημερομηνία',
        preferredTime: 'Προτιμώμενη Ώρα',
        notes: 'Επιπλέον Σημειώσεις (Προαιρετικά)',
        submitButton: 'Κλείστε τη Δωρεάν Συμβουλευτική σας',
        submitting: 'Γίνεται κράτηση...'
      },
      thankYou: {
        title: 'Ευχαριστούμε!',
        message: 'Το αίτημα ραντεβού σας έχει υποβληθεί με επιτυχία. Η ομάδα μας θα επικοινωνήσει μαζί σας εντός 24 ωρών για να επιβεβαιώσει τις λεπτομέρειες.',
        anotherAppointment: 'Κλείστε Άλλη Δωρεάν Συμβουλευτική'
      },
      whyBook: {
        title: 'Γιατί να Κλείσετε μια Δωρεάν Συμβουλευτική;',
        reasons: [
          'Λάβετε μια εξατομικευμένη αξιολόγηση του ηλιακού δυναμικού του μπαλκονιού σας',
          'Πάρτε μια προσαρμοσμένη προσφορά με βάση τις ενεργειακές σας ανάγκες και τον προϋπολογισμό σας',
          'Μάθετε για τους κανονισμούς και τα κίνητρα που ισχύουν ειδικά για την Κύπρο',
          'Χωρίς υποχρέωση - αποφασίστε αφού λάβετε όλες τις πληροφορίες'
        ]
      }
    },
    faq: {
      title: 'Συχνές Ερωτήσεις',
      subtitle: 'Βρείτε απαντήσεις σε συχνές ερωτήσεις σχετικά με τις λύσεις ηλιακής ενέργειας μπαλκονιού μας για την Κύπρο.',
      questions: [
        {
          question: "Χρειάζομαι άδεια για να εγκαταστήσω ένα σύστημα ηλιακής ενέργειας μπαλκονιού στην Κύπρο;",
          answer: "Για μικρές εγκαταστάσεις μπαλκονιού κάτω των 2kW, γενικά δεν χρειάζεστε ειδικές άδειες στην Κύπρο. Ωστόσο, αν ενοικιάζετε, θα πρέπει να πάρετε την άδεια του ιδιοκτήτη σας. Για πολυκατοικίες, συνιστάται να ενημερώσετε τη διαχείριση του κτιρίου. Η ομάδα μας θα σας καθοδηγήσει σε τυχόν ειδικές απαιτήσεις με βάση την τοποθεσία και την κατάστασή σας."
        },
        {
          question: "Πόση ηλεκτρική ενέργεια μπορεί να παράγει ένα σύστημα ηλιακής ενέργειας μπαλκονιού στην Κύπρο;",
          answer: "Στο ηλιόλουστο κλίμα της Κύπρου, ένα σύστημα μπαλκονιού 1kW παράγει συνήθως περίπου 1.600-1.800 kWh ετησίως. Το βασικό μας κιτ 600W θα παρήγαγε περίπου 900-1.080 kWh ετησίως, ενώ το premium σύστημα 1,5kW μπορεί να παράγει έως και 2.700 kWh ετησίως. Αυτό μπορεί να αντισταθμίσει ένα σημαντικό μέρος της τυπικής χρήσης ηλεκτρικής ενέργειας ενός νοικοκυριού, ειδικά για συσκευές που χρησιμοποιούνται κατά τη διάρκεια της ημέρας."
        },
        {
          question: "Πώς μπορεί το SolarFlow 800 Pro να βοηθήσει στην εξοικονόμηση κόστους ηλεκτρικής ενέργειας;",
          answer: "Το SolarFlow 800 Pro βελτιστοποιεί την κατανάλωση ενέργειας του νοικοκυριού μέσω ενός συνδυασμού ισχυρού υλικού και συστήματος διαχείρισης ενέργειας οικιακής χρήσης (HEMS) με τεχνητή νοημοσύνη. Το ισχυρό υλικό περιλαμβάνει έναν ελεγκτή MPPT 2640W (4 × 660W) και έναν αμφίδρομο μετατροπέα 1000W (1000W είσοδος & έξοδος εκτός δικτύου, 800W έξοδος συνδεδεμένη στο δίκτυο), που αποθηκεύει την πλεονάζουσα ηλιακή ενέργεια κατά τη διάρκεια της ημέρας (όταν χρησιμοποιείται με μπαταρία) και την παρέχει τη νύχτα για τη μείωση του κόστους ηλεκτρικής ενέργειας. Το HEMS με τεχνητή νοημοσύνη αναλύει συνεχώς την παραγωγή ηλιακής ενέργειας, τα πρότυπα κατανάλωσης, τις προβλέψεις καιρού και τις διακυμάνσεις των τιμών ηλεκτρικής ενέργειας για τη δυναμική προσαρμογή των χρόνων φόρτισης και εκφόρτισης. Για παράδειγμα, φορτίζει κατά τη διάρκεια χαμηλού κόστους νυχτερινών τιμολογίων και μεταβαίνει σε ισχύ μπαταρίας κατά τη διάρκεια περιόδων υψηλών τιμών την ημέρα, με αποτέλεσμα εξοικονόμηση έως και 42% στο ενεργειακό κόστος."
        },
        {
          question: "Πώς υπολογίζετε την παραγωγή ενέργειας και την εξοικονόμηση κόστους ηλεκτρικής ενέργειας ενός συστήματος φωτοβολταϊκών;",
          answer: "Η ετήσια παραγωγή ενέργειας υπολογίζεται επιλέγοντας την τοποθεσία σας και την εγκατεστημένη ισχύ φωτοβολταϊκών (kWp) στον ηλιακό χάρτη. Λαμβάνοντας υπόψη τη θέση του ήλιου, τη γωνία αζιμουθίου και τη γωνία κλίσης της μονάδας, μπορείτε να υπολογίσετε την αναμενόμενη ετήσια παραγωγή ηλεκτρικής ενέργειας (kWh/έτος). Η ετήσια εξοικονόμηση κόστους ηλεκτρικής ενέργειας υπολογίζεται ως εξής: Ετήσια εξοικονόμηση = Ετήσια παραγωγή ενέργειας × ποσοστό ιδιοκατανάλωσης × τιμή ηλεκτρικής ενέργειας. Για παράδειγμα, χρησιμοποιώντας το SolarFlow 800 Pro στη Νότια Κύπρο με φωτοβολταϊκή μονάδα 2000W και έξυπνο μετρητή: Ετήσια εξοικονόμηση = 2260 kWh/έτος × 98% × 0,4 €/kWh = 880 €. Παρακαλώ σημειώστε: Η πραγματική εξοικονόμηση μπορεί να διαφέρει ανάλογα με την περιοχή σας, το τιμολόγιο ηλεκτρικής ενέργειας και τη συμπεριφορά κατανάλωσης."
        },
        {
          question: "Μπορεί το SolarFlow 800 Pro να φορτίσει την μπαταρία από το οικιακό δίκτυο;",
          answer: "Ναι, το SolarFlow 800 Pro μπορεί να φορτίσει την μπαταρία από το οικιακό δίκτυο (AC) όταν χρειάζεται. Η εφαρμογή Zendure προγραμματίζει έξυπνα τη φόρτιση AC, για παράδειγμα κατά τη διάρκεια ωρών εκτός αιχμής με χαμηλότερα τιμολόγια ηλεκτρικής ενέργειας για τη μείωση του ενεργειακού κόστους. Το σύστημα εντοπίζει επίσης αυτόματα πότε το επίπεδο της μπαταρίας είναι κρίσιμα χαμηλό (π.χ., κατά τη διάρκεια χαμηλής παραγωγής φωτοβολταϊκών) και μεταβαίνει σε τροφοδοσία από το δίκτυο για την αποφυγή ζημιάς στην μπαταρία."
        },
        {
          question: "Μπορεί το SolarFlow 800 Pro να τροφοδοτήσει οικιακές συσκευές κατά τη διάρκεια διακοπής ρεύματος;",
          answer: "Το SolarFlow 800 Pro διαθέτει μια έξοδο εκτός δικτύου που μπορεί να συνεχίσει να τροφοδοτεί συσκευές κατά τη διάρκεια διακοπής ρεύματος. Η μέγιστη συνεχής ισχύς είναι 1.000W, με διαθέσιμη μέγιστη ισχύ 1.200W για έως και 10 δευτερόλεπτα εάν χρειαστεί, για παράδειγμα για συσκευές με υψηλό ρεύμα εκκίνησης. Η λειτουργία εκτός δικτύου πρέπει πρώτα να ενεργοποιηθεί στην εφαρμογή. Μετά την ενεργοποίηση, το σύστημα μπορεί να μεταβεί αυτόματα σε λειτουργία μπαταρίας εντός 15ms κατά τη διάρκεια διακοπής ρεύματος, επιτρέποντας στις συνδεδεμένες συσκευές να συνεχίσουν να λειτουργούν χωρίς διακοπή."
        }
      ]
    },
    footer: {
      tagline: 'Μαζί με την ηλιακή ενέργεια για κάθε άτομο στην Κύπρο με εξαιρετικές λύσεις μπαλκονιού',
      quickLinks: 'Γρήγοροι Σύνδεσμοι',
      contact: 'Επικοινωνία',
      newsletter: 'Newsletter',
      subscribeText: 'Υπογράψτε τον εβδομαδιαίο νησίδα για τις πιο πρόσφατες ενημερώσεις σχετικά με την ηλιακή τεχνολογία και τις ειδικές προσφορές.',
      emailPlaceholder: 'Η ηλεκτρονική διεύθυνσή σας',
      allRightsReserved: 'Όλα τα δικαιώματα διατηρούνται.',
      privacyPolicy: 'Πολιτική απορρήτου',
      termsOfService: 'Όροι Χρήσης',
      cookiePolicy: 'Πολιτική Cookie'
    },
    testimonials: {
      title: 'Τι λένε οι πελάτες μας',
      subtitle: 'Ακούστε από κατοίκους της Κύπρου που ήδη απολαμβάνουν τα οφέλη των λύσεων ηλιακής ενέργειας μπαλκονιού μας.',
      items: [
        {
          text: "Ήμουν σκεπτικός για το πόση ενέργεια θα μπορούσε να παράγει ένα σύστημα μπαλκονιού, αλλά έχω εντυπωσιαστεί! Οι λογαριασμοί ηλεκτρικού ρεύματος έχουν μειωθεί κατά 30% από την εγκατάσταση. Η ομάδα ήταν επαγγελματική και το σύστημα δείχνει υπέροχο στο μπαλκόνι μου στη Λεμεσό.",
          name: "Ανδρέας Γεωργίου",
          location: "Λεμεσός, Κύπρος"
        },
        {
          text: "Ως ενοικιαστής, ποτέ δεν πίστευα ότι θα μπορούσα να χρησιμοποιήσω ηλιακή ενέργεια. Το σύστημα μπαλκονιού ήταν τέλειο - εύκολο στην εγκατάσταση και ο ιδιοκτήτης δεν είχε αντιρρήσεις. Λειτουργεί άψογα εδώ και 8 μήνες, και εξοικονομώ περίπου 40€ το μήνα.",
          name: "Έλενα Χριστοδούλου",
          location: "Λευκωσία, Κύπρος"
        },
        {
          text: "Η συμβουλευτική ήταν διεξοδική και ειλικρινής. Δεν προσπάθησαν να μου πουλήσουν περισσότερα από ό,τι χρειαζόμουν και πρότειναν το τέλειο σύστημα για το μικρό μου μπαλκόνι στην Πάφο. Η εγκατάσταση ήταν καθαρή και γρήγορη. Πολύ ικανοποιημένος με την απόφασή μου!",
          name: "Μιχάλης Κυριάκου",
          location: "Πάφος, Κύπρος"
        }
      ]
    },
    installation: {
      title: 'Απλή Διαδικασία Εγκατάστασης',
      subtitle: 'Η λειτουργία του συστήματος ηλιακής ενέργειας μπαλκονιού σας είναι γρήγορη και εύκολη με την επαγγελματική μας ομάδα.',
      steps: [
        {
          title: 'Συμβουλευτική',
          description: 'Επισκεπτόμαστε το σπίτι σας για να αξιολογήσουμε το μπαλκόνι σας και να συζητήσουμε τις ενεργειακές σας ανάγκες.'
        },
        {
          title: 'Προσαρμοσμένος Σχεδιασμός',
          description: 'Η ομάδα μας σχεδιάζει ένα σύστημα προσαρμοσμένο στον συγκεκριμένο χώρο του μπαλκονιού σας και στους ενεργειακούς σας στόχους.'
        },
        {
          title: 'Γρήγορη Εγκατάσταση',
          description: 'Η επαγγελματική εγκατάσταση συνήθως διαρκεί μόλις 2-4 ώρες με ελάχιστη διατάραξη.'
        },
        {
          title: 'Ξεκινήστε να Εξοικονομείτε',
          description: 'Αρχίστε να παράγετε τη δική σας καθαρή ηλεκτρική ενέργεια και δείτε τους λογαριασμούς σας να μειώνονται αμέσως.'
        }
      ]
    },
    calculator: {
      title: 'Υπολογίστε το Ηλιακό σας Δυναμικό',
      subtitle: 'Υπολογίστε την εκτιμώμενη παραγωγή ενέργειας και την εξοικονόμηση για ένα ηλιακό σύστημα μπαλκονιού στην τοποθεσία σας.',
      peakPowerLabel: 'Μέγιστη Ισχύς Συστήματος',
      locationLabel: 'Επιλογή Τοποθεσίας',
      priceLabel: 'Τιμή Ηλεκτρικής Ενέργειας',
      angleLabel: 'Γωνία Πάνελ',
      angleDescription: '0° = οριζόντια, 90° = κάθετα',
      orientationLabel: 'Προσανατολισμός Πάνελ',
      orientationDescription: '0° = Νότος, -90° = Ανατολή, 90° = Δύση',
      calculateButton: 'Υπολογισμός',
      calculating: 'Υπολογισμός...',
      error: 'Η εκτίμηση απέτυχε. Ελέγξτε τις εισαγωγές και προσπαθήστε ξανά.',
      resultsTitle: 'Εκτιμώμενα Ετήσια Αποτελέσματα',
      productionLabel: 'Παραγωγή Ενέργειας',
      savingsLabel: 'Εξοικονόμηση Κόστους',
      year: 'έτος',
      angleOptionFlat: 'Οριζόντια (0°)',
      angleOptionTilted: 'Με Κλίση (~30-45°)',
      angleOptionVertical: 'Κάθετα (90°)',
      orientationOptionSouth: 'Νότος (0°)',
      orientationOptionEast: 'Ανατολή (-90°)',
      orientationOptionWest: 'Δύση (90°)',
      orientationOptionNorth: 'Βορράς (180°)',
      locationAndPower: 'Τοποθεσία & Ισχύς Συστήματος',
      panelPosition: 'Θέση & Προσανατολισμός Πάνελ',
      environmentalImpact: 'Περιβαλλοντικός Αντίκτυπος',
      co2Saved: 'Αποφυγή Εκπομπών CO₂',
      co2PerYear: 'ανά έτος',
      perDay: 'ανά ημέρα',
      perMonth: 'ανά μήνα',
      printResults: 'Εκτύπωση Αποτελεσμάτων',
      resultsDisclaimer: 'Τα αποτελέσματα είναι εκτιμήσεις βάσει ιστορικών δεδομένων και η πραγματική παραγωγή μπορεί να διαφέρει.'
    }
  }
};

interface TranslationsContextType {
  currentLanguage: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

export const TranslationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de' || savedLanguage === 'el')) {
      setCurrentLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);
  
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };
  
  const translations = translationsData[currentLanguage];
  
  return (
    <TranslationsContext.Provider value={{ currentLanguage, translations, setLanguage }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export const useTranslations = (): TranslationsContextType => {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
};

export default TranslationsContext; 