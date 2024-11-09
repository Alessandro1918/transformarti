export interface TeamItemProps {
  image: string,
  name: string,
  title: string,
  description: string
}

export function getTeam(): TeamItemProps[] {
  return [
    {
      image: "/assets/team/dra-debora-cesta.png",
      name: "Dra Débora Cesta",
      title: "Clínica Geral e Ortodontista",
      description: "Realiza consultas de check up, prevenção, limpeza, restaurações e clareamento. É a responsável da clínica pelos tratamentos ortodônticos de adultos, adolescentes e crianças. Trabalha com aparelhos fixos e Invisalign."
    },
    {
      image: "/assets/team/dr-fabio-tonasso.png",
      name: "Dr. Fabio Tonasso",
      title: "Bucomaxilofacial",
      description: "Nosso especialista em cirurgia realiza extrações de sisos em consultório e em hospital. Faz implantes unitários e próteses sobre implantes. Atende também pacientes com DTM (dor nas ATMs - articulações temporomandibulares)."
    },
    {
      image: "/assets/team/dra-renata-gomes.png",
      name: "Dra. Renata Gomes",
      title: "Endodontista",
      description: "Nossa especialista em tratamento de canal atua no diagnóstico e tratamento das lesões de cárie e trauma que atingem a polpa dos dentes. Utiliza equipamentos modernos como radiografia digital, para garantir a eficácia e o conforto dos pacientes."
    },
    {
      image: "/assets/team/dra-ailla-andrade.png",
      name: "Dra. Ailla Andrade",
      title: "Clínica Geral",
      description: "Atua como clínica geral fazendo tratamentos preventivos para cárie e periodontite. Realiza tratamentos estéticos em resina e clareamento dental."
    },
    {
      image: "/assets/team/dra-renata-bommarito.png",
      name: "Dra. Renata Bommarito",
      title: "Protesista",
      description: "Nossa especialista em prótese é professora universitária e atua conosco nos casos de reabilitação. Faz próteses, coroas, onlays, facetas de porcelana e resina, além de implantes."
    },
    {
      image: "/assets/team/dr-thomaz-moura.png",
      name: "Dr. Thomaz Moura",
      title: "Periodontista",
      description: "O nosso responsável pelos tratamentos das gengivas e doença periodontal. Realiza raspagem subgengival, gengivoplastia, enxerto de tecido conjuntivo."
    },
    {
      image: "/assets/team/dra-amanda-suhett.png",
      name: "Dra. Amanda Suhett",
      title: "HOF - Harmonização Orofacial",
      description: "Através da atendimento humanizado, realiza procedimentos estéticos a fim de manter a aparência jovial e exaltar a beleza dos pacientes. Aplica toxina botulínica, preenchimento e bioestimuladores de colágeno."
    },
  ]
}
