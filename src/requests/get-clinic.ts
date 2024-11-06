export interface ClinicItemProps {
  image: string,
  description: string
}

export function getClinic(): ClinicItemProps[] {
  return [
    {
      image: "/assets/clinic/clinic6.jpg",
      description: "Foto 1"
    },
    {
      image: "/assets/clinic/clinic8.jpg",
      description: "Foto 2"
    },
    {
      image: "/assets/clinic/clinic10.jpg",
      description: "Foto 3"
    },
    {
      image: "/assets/clinic/clinic6.jpg",
      description: "Foto 4"
    },
    {
      image: "/assets/clinic/clinic8.jpg",
      description: "Foto 5"
    },
    {
      image: "/assets/clinic/clinic10.jpg",
      description: "Foto 6"
    },
  ]
}
