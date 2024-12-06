import { ReactNode } from "react";
import "./style.css";

interface PanelItemsProps {
  isSelected: boolean;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

export default function PanelItem({ isSelected, label, icon, onClick }: PanelItemsProps) {
  return (
    <div
      className={`panel-item ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="pad" />
      <div className="label">
        <div className="icon">{icon}</div>
        <h2>{label}</h2>
      </div>
    </div>
  );
}
