import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

import * as Styled from "./index.styled";

import { ROUTER_KEYS } from "../../consts/app-keys.const";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Styled.HeaderNavWrapper>
      <Styled.HeaderNavContainer>
        <Styled.HeaderNavLogo onClick={() => navigate(ROUTER_KEYS.ROOT)}>
          Spells
        </Styled.HeaderNavLogo>
        <Styled.HeaderNavLink onClick={() => navigate(ROUTER_KEYS.FAVOURITES)}>
          <p>Favourite</p>
          <AiFillStar />
        </Styled.HeaderNavLink>
      </Styled.HeaderNavContainer>
    </Styled.HeaderNavWrapper>
  );
};
