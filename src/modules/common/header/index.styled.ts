import styled from "styled-components";
import { COLORS, SPACES } from "../../theme";
import { SIZES, WEIGHTS } from "../../theme/fonts.const";

export const HeaderNavWrapper = styled.header`
  width: 100%;
  background: ${COLORS.background};
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderNavContainer = styled.div`
  width: 1200px;
  padding: 0 ${SPACES.m};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderNavLogo = styled.h1`
  font-size: ${SIZES.l};
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.headline};
  cursor: pointer;
`;

export const HeaderNavLink = styled.div`
  font-size: ${SIZES.s};
  background: ${COLORS.stroke};
  color: ${COLORS.text};
  padding: ${SPACES.s} ${SPACES.m};
  border-radius: ${SPACES.s};
  cursor: pointer;
  display: flex;
  gap: ${SPACES.s};
  align-items: center;
`;
