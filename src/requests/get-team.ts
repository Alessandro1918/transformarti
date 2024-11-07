export interface TeamItemProps {
  image: string,
  name: string,
  title: string,
}

export function getTeam(): TeamItemProps[] {
  return [
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora",
      title: "Duis aute irure dolor"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Monica A.",
      title: "In reprehenderit in voluptate"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Erica B.",
      title: "Dolore eu fugiat nulla pariatur"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Rita",
      title: "Excepteur occaecat / Duis aute irure dolor"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Tina C.",
      title: "Excepteur sint occaecat"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Sandra D. E.",
      title: "Excepteur sint occaecat"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Mary",
      title: "Excepteur sint occaecat"
    },
  ]
}
