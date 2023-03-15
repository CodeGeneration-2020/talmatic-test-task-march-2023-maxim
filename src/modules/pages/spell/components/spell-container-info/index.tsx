import React from "react";

import { SpellInfo } from "../../../../common/spell-info";
import { SpellButton } from "../../../../common/button";
import { ROUTER_KEYS } from "../../../../consts/app-keys.const";

import * as Styled from "../../index.styled";

import { ISpellResponse } from "../../../../features/spell.types";

export const SpellContainerInfo = ({ data }: { data: ISpellResponse }) => {
  return (
    <div>
      {data?.desc && (
        <Styled.SpellDescription>
          <SpellInfo title={"Description:"} text={data?.desc} />
        </Styled.SpellDescription>
      )}
      <Styled.SpellGridTextContainer>
        {data?.higher_level && data?.higher_level.length > 0 && (
          <Styled.SpellHigherLevel>
            <SpellInfo title={"Higher Level:"} text={data?.higher_level} />
          </Styled.SpellHigherLevel>
        )}
        {data?.material && (
          <Styled.SpellMaterial>
            <SpellInfo title={"Material:"} text={data?.material} />
          </Styled.SpellMaterial>
        )}
      </Styled.SpellGridTextContainer>
      <Styled.SpellGridTagContainer>
        {data?.classes && data?.classes.length > 0 && (
          <Styled.SpellClasses>
            <h5>Classes:</h5>
            <Styled.SpellClassesFlex>
              {data?.classes.map((item_class) => (
                <Styled.SpellClassesLink key={item_class.index}>
                  {item_class.name}
                </Styled.SpellClassesLink>
              ))}
            </Styled.SpellClassesFlex>
          </Styled.SpellClasses>
        )}
        {data?.subclasses && data?.subclasses.length > 0 && (
          <Styled.SpellSubclasses>
            <h5>Subclasses:</h5>
            <Styled.SpellClassesFlex>
              {data?.subclasses.map((item_subclass) => (
                <Styled.SpellSubclassesLink key={item_subclass.index}>
                  {item_subclass.name}
                </Styled.SpellSubclassesLink>
              ))}
            </Styled.SpellClassesFlex>
          </Styled.SpellSubclasses>
        )}
        {data?.school && (
          <Styled.SpellSchool>
            <SpellInfo title={"School:"} text={data?.school.name} />
          </Styled.SpellSchool>
        )}
      </Styled.SpellGridTagContainer>
      <Styled.SpellBtnContainer>
        <SpellButton
          text={"Back To Home"}
          route={ROUTER_KEYS.ROOT}
          data={data!}
        />
        <SpellButton
          text={"Make Your Favourite"}
          route={ROUTER_KEYS.FAVOURITES}
          data={data!}
        />
      </Styled.SpellBtnContainer>
    </div>
  );
};
