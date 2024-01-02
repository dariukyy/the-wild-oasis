import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { pathname } = useLocation();
  const isDashboard = pathname === "/dashboard";

  return (
    <StyledSidebar>
      {isDashboard && <Logo />}
      {!isDashboard && (
        <Button variation="empty" size="empty" as={Link} to="/">
          <Logo as={Link} to="/" />
        </Button>
      )}
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
