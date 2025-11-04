export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "HealthAndBeautyBusiness"],
  name: "Transformarti Odontologia",
  image: [
    "https://www.transformartiodontologia.com.br/assets/logo-bg-blue.png",
    "https://www.transformartiodontologia.com.br/assets/clinic/reception_1.jpg",
    "https://www.transformartiodontologia.com.br/assets/clinic/room2.jpg",
    "https://www.transformartiodontologia.com.br/assets/torre-taruma-entrada.png",
  ],
  description: "Consultório odontológico no Condomínio Parque da Cidade, torre Tarumã, bairro Chácara Santo Antônio, próximo ao shopping Morumbi, shopping Market Place, e estação de trem Morumbi. Dentistas especialistas em procedimentos de restauração, ortodontia, cirurgia ortognática, implantes, próteses, endodontia, periodontia, clareamento dental e harmonização facial.",
  telephone: "(11) 96574-5577",
  openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida das Nações Unidas, 14401",
    extendedAddress: "Torre Tarumã - Sala 2806",
    addressLocality: "Chácara Santo Antônio - São Paulo",
    addressRegion: "SP",
    postalCode: "04794-000",
    addressCountry: "BR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-23.6245751",
    longitude: "-46.7052615"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamentos",
    itemListElement: [
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Restaurações"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Ortodontia"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Cirurgia ortognática"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Implantes"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Próteses"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Endodontia"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Periodontia"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Clareamento dental"}},
      {"@type": "Offer", itemOffered: {"@type": "Service", name: "Harmonização facial"}},
    ]
  }
}
