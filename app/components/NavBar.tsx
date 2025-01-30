"use client";
import { useRouter } from "next/navigation";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { Menubar } from "primereact/menubar";
export default function Home() {
  const router = useRouter();

  const items = [
    {
      label: "Hjem",
      icon: "pi pi-palette",
      command: () => {
        router.push("/");
      },
    },
    {
      label: "Om Oss",
      icon: "pi pi-link",
      command: () => {
        router.push("/omoss");
      },
    },
    {
      label: "Våre prinsipper",
      icon: "pi pi-home",
      command: () => {
        router.push("/prinsipper");
      },
    },
    {
      label: "Ordliste",
      icon: "pi pi-home",
      command: () => {
        router.push("/ordliste");
      },
    },

    {
      label: "Ressurser",
      icon: "pi pi-home",
      command: () => {
        router.push("/ressurser");
      },
    },
    {
      label: "Blogg",
      icon: "pi pi-home",
      command: () => {
        router.push("/blogg");
      },
    },
  ];

  return (
    <div className="card p-8 bg-white w-screen flex justify-center text-black">
      <Menubar className="text-black w-screen" model={items}></Menubar>
    </div>
  );
}
