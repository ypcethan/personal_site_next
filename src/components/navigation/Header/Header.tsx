import { useState } from "react";
import Link from "next/link";
import {
  Wrapper,
  StyledNav,
  NavItem,
  ToggleBuggerContainer,
} from "./Header.styled";
import ToggleBugger from "@/components/utils/ToggleBugger";
import MobileNav from "@/components/navigation/MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Wrapper>
        Logo
        <ToggleBuggerContainer>
          <ToggleBugger open={open} onClick={handleClick} />
        </ToggleBuggerContainer>
        <StyledNav>
          <NavItem>
            <Link href="/"> Home </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link href="/projects">Project</Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">Blog</Link>
          </NavItem>
        </StyledNav>
      </Wrapper>
      <MobileNav open={open}>
        <NavItem>
          <Link href="/"> Home </Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link href="/projects">Project</Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">Blog</Link>
        </NavItem>
      </MobileNav>
    </>
  );
}
