import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyeledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.6rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyeledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyeledHeaderMenu>
  );
}

export default HeaderMenu;
