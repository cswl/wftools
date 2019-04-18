const HomeTitle = "WF Tools";
export const RouteList = [
  {
    href: "/macros",
    name: "Macros",
    description: "Macros for some stuffs.",
    icon: ""
  },

  {
    href: "/launcher",
    name: "Launcher",
    description: "Macros for some stuffs."
  },
  {
    href: "/riflecc",
    name: "Rifle Crit",
    description: "Macros for some stuffs."
  },

  {
    href: "/meleecc",
    name: "Melee Crit",
    description: "Macros for some stuffs."
  },
  {
    href: "/shotgunsc",
    name: "Shotgun Status",
    description: "Macros for some stuffs."
  },
  {
    href: "/rivenshow",
    name: "Riven Showcase",
    description: "Macros for some stuffs."
  }
];

export function DynamicRouteTitle(url) {
  if (url === "/") {
    return HomeTitle;
  }
  const route = RouteList.find(v => {
    const urlSlice = url.replace(/\//g, "");
    return v["href"].includes(urlSlice);
  });

  const title = route ? route["name"] : HomeTitle;
  if (title !== HomeTitle) {
    document.title = `${title} - ${HomeTitle}`;
  }

  return title;
}
