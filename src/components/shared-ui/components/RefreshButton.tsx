import { RefreshDot } from "tabler-icons-react";
import SettingsButton from "../settings-button";

export default function RefreshButton({ onClick }) {
  return (
    <SettingsButton
      onClick={onClick}
      icon={<RefreshDot strokeWidth={1.5} />}
      label="Refresh"
    />
  );
}
