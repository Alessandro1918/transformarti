export interface TeamItemProps {
  image: string,
  name: string,
  title: string,
}

export function getTeam(): TeamItemProps[] {
  return [
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 1",
      title: "Duis aute irure dolor"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 2",
      title: "In reprehenderit in voluptate"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 3",
      title: "Dolore eu fugiat nulla pariatur"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 4",
      title: "Excepteur occaecat / Duis aute irure dolor"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 5",
      title: "Excepteur sint occaecat"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 6",
      title: "Excepteur sint occaecat"
    },
    {
      image: "/assets/team/debora.jpeg",
      name: "Dra. Débora 7",
      title: "Excepteur sint occaecat"
    },
  ]
}
