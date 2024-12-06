import { FiMap, FiTable } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

import Layout from "../../../components/Layout";
import PanelNavbar from "../../../components/PanelNavbar";
import NavbarItem from "../../../components/PanelNavbar/NavbarItem";
import { useState, ReactNode } from "react";


export default function MvisDasboard() {

    const navbarPrimaryItems = [
        {
            label: "Distribuição espacial",
            icon: <FiMap />,
        },
        {
            label: "Série histórica",
            icon: <AiOutlineHistory />,
        },
        {
            label: "Tabela de dados",
            icon: <FiTable />,
        },
    ];


    const pages: ReactNode[] = [

    ];

    const [selectedItemIndex, setItemIndex] = useState<number>(0);

    const handleSelect = (index: number) => {
        setItemIndex(index);
    };

    return (
        <Layout
            navbar={
                <PanelNavbar
                    title="Painel da Mulher"
                    items={
                        navbarPrimaryItems.map((item, index) => (
                            <NavbarItem
                                key={index}
                                isSelected={selectedItemIndex === index}
                                label={item.label}
                                icon={item.icon}
                                onClick={() => handleSelect(index)}
                            />
                        ))
                    }
                />
            }
            content={pages[selectedItemIndex]}
        />
    );
}
