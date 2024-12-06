import { FiMap, FiTable } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";

import Layout from "../../../components/Layout";
import PanelNavbar from "../../../components/PanelNavbar";
import PanelItem from "../../../components/PanelNavbar/PanelItem";
import { useState, ReactNode } from "react";


export default function MvisDasboard() {

    const panelItems = [
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

    const [selectedPanelItemIndex, setPanelItemIndex] = useState<number>(0);

    const onPanelItemSelect = (index: number) => {
        setPanelItemIndex(index);
    };

    return (
        <Layout
            navbar={
                <PanelNavbar
                    title="Painel da Mulher"
                    items={
                        panelItems.map((item, index) => (
                            <PanelItem
                                key={index}
                                isSelected={selectedPanelItemIndex === index}
                                label={item.label}
                                icon={item.icon}
                                onClick={() => onPanelItemSelect(index)}
                            />
                        ))
                    }
                />
            }
            content={pages[selectedPanelItemIndex]}
        />
    );
}
