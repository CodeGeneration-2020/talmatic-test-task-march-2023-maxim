import styled from "styled-components";
import { COLORS, SPACES } from "../../theme";
import { SIZES, WEIGHTS } from "../../theme/fonts.const";

export const SpellContainer = styled.div`
  max-width: 1200px;
  height: 80vh;
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding: ${SPACES.l} ${SPACES.m} 0;
  position: relative;
`;

export const SpellHeading = styled.h3`
  text-align: center;
  color: ${COLORS.heading};
  font-size: ${SIZES.xl};
  margin-bottom: ${SPACES.lg};
`;

export const SpellDescription = styled.div`
  background: ${COLORS.heading};
  padding: ${SPACES.ms} ${SPACES.m};
  border-radius: ${SPACES.m};
  color: ${COLORS.headline};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};

  h5 {
    font-size: ${SIZES.l};
    margin-bottom: ${SPACES.m};
  }
`;

export const SpellHigherLevel = styled.div`
  background: ${COLORS.headline};
  padding: ${SPACES.ms} ${SPACES.m};
  border-radius: ${SPACES.m};
  color: ${COLORS.highlight};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};

  h5 {
    font-size: ${SIZES.l};
    margin-bottom: ${SPACES.m};
  }
`;

export const SpellMaterial = styled.div`
  background: ${COLORS.stroke};
  padding: ${SPACES.ms} ${SPACES.m};
  border-radius: ${SPACES.m};
  color: ${COLORS.headline};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};

  h5 {
    font-size: ${SIZES.l};
    margin-bottom: ${SPACES.m};
  }
`;

export const SpellClasses = styled.div`
  background: ${COLORS.background};
  padding: ${SPACES.ms} ${SPACES.m};
  border-radius: ${SPACES.m};
  color: ${COLORS.text};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  align-items: center;

  h5 {
    font-size: ${SIZES.l};
  }
`;

export const SpellSchool = styled.div`
  background: ${COLORS.violet};
  padding: ${SPACES.ms} ${SPACES.m};
  border-radius: ${SPACES.m};
  color: ${COLORS.primary};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  align-items: center;

  h5 {
    font-size: ${SIZES.l};
  }
`;

export const SpellSubclasses = styled.div`
  background: ${COLORS.highlight};
  padding: ${SPACES.ms} ${SPACES.m};
  border-radius: ${SPACES.m};
  color: ${COLORS.headline};
  font-size: ${SIZES.m};
  margin-bottom: ${SPACES.ms};
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  align-items: center;

  h5 {
    font-size: ${SIZES.l};
  }
`;

export const SpellClassesFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  align-items: center;
`;

export const SpellClassesLink = styled.p`
  padding: ${SPACES.s} ${SPACES.m};
  border-radius: ${SPACES.s};
  color: ${COLORS.primary};
  background: ${COLORS.violet};
  text-decoration: underline;
`;

export const SpellSubclassesLink = styled.p`
  padding: ${SPACES.s} ${SPACES.m};
  border-radius: ${SPACES.s};
  color: ${COLORS.heading};
  background: ${COLORS.headline};
  text-decoration: underline;
`;

export const SpellBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${SPACES.m};
  margin-top: ${SPACES.ms};
  margin-bottom: ${SPACES.ms};

  div {
    background: ${COLORS.stroke};
    padding: ${SPACES.m} ${SPACES.s};
    border-radius: ${SPACES.s};
    color: ${COLORS.text};
    cursor: pointer;
    font-weight: ${WEIGHTS.semiBold};
  }
`;

export const SpellGridTextContainer = styled.div`
  display: grid;
  gap: ${SPACES.l};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const SpellGridTagContainer = styled.div`
  display: grid;
  gap: ${SPACES.l};
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
