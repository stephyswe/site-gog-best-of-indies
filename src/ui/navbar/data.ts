const dataMenu = [
  {
    title: "Good Old Games",
    color: "rgb(0, 123, 88)",
  },
  {
    title: "CD PROJEKT RED",
    color: "rgb(173, 0, 18)",
  },
  {
    title: "separator",
  },
  {
    title: "New releases",
    isFeatured: true,
    type: "submenu",
  },
  {
    title: "Bestsellers",
    isFeatured: true,
    type: "submenu",
  },
  {
    title: "On sale now",
    isFeatured: true,
    type: "submenu",
  },
  {
    title: "separator",
  },
];

const dataSubMenu = [
  "RPG",
  "Action",
  "Adventure",
  "Strategy",
  "Open World",
  "Indie",
  "Shooters",
  "Platformers",
  "Citybuilders",
];

export const dataAll = [
  {
    title: "Store",
    items: dataMenu,
    subItems: dataSubMenu,
  },
];
