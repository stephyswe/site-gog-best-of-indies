export type DataMenuItem = {
  title: string;
  color?: string;
  isFeatured?: boolean;
  type?: string;
};

export type DataMenu = DataMenuItem[];


const dataMenu: DataMenu = [
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

export type DataAboutItems = {
  title: string;
  type: string;
}

const dataAboutItems: DataAboutItems[] = [
  {
    title: "GOG.com",
    type: "submenu",
  },
  {
    title: "GOG Galaxy",
    type: "submenu",
  },
  {
    title: "separator",
    type: "submenu",
  },
  {
    title: "Join the team",
    type: "submenu",
  },
];

type DataSubMenu = string[]

const dataSubMenu: DataSubMenu = [
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

export type DataAllItem = {
  title: string;
  items: DataMenu;
  subItems: DataSubMenu;
} | {
  title: string;
  items: DataAboutItems[];
};

type DataAllArray = DataAllItem[];

export const dataAll: DataAllArray = [
  {
    title: "Store",
    items: dataMenu,
    subItems: dataSubMenu,
  },
  {
    title: "About",
    items: dataAboutItems,
  },
];
