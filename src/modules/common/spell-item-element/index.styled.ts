import styled from "styled-components";
import { COLORS, SPACES } from "../../theme";
import { SIZES } from "../../theme/fonts.const";

export const HomeSpellEl = styled.div`
  background: ${COLORS.heading};
  padding: ${SPACES.m};
  color: ${COLORS.text};
  border-radius: ${SPACES.m};
  font-size: ${SIZES.s};

  h6 {
    font-size: ${SIZES.m};
    color: ${COLORS.headline};
  }

  p {
    margin-bottom: ${SPACES.m};
    font-size: ${SIZES.s};
    color: ${COLORS.primary};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const HomeSpellFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACES.s};

  h6 {
    font-size: ${SIZES.l};
  }

  svg {
    fill: ${COLORS.highlight};
    width: ${SPACES.lg};
    height: ${SPACES.lg};
    cursor: pointer;
  }
`;

export const HomeSpellBtn = styled.div`
  width: 250px;
  background: ${COLORS.stroke};
  padding: ${SPACES.s} ${SPACES.m};
  border-radius: ${SPACES.s};
  color: ${COLORS.text};
  text-align: center;
  cursor: pointer;
  margin-block: ${SPACES.s};
`;
