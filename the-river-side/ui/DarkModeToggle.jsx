import { SiDarkreader } from "react-icons/si";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <SiDarkreader />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
