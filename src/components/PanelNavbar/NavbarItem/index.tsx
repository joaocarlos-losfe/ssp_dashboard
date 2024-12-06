import { ReactNode } from "react";
import "./style.css";

interface PanelItemsProps {
  isSelected: boolean;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

export default function NavbarItem({ isSelected, label, icon, onClick }: PanelItemsProps) {
  return (
    <div
      className={`panel-item ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="pad" />
      <div className="label">
        <div className="icon">{icon}</div>
        <h2>{label}</h2>
      </div>
    </div>
  );
}
