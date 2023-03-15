import React from "react";
import { useLocalStorage } from "usehooks-ts";

import { Header } from "../../common/header";
import { SpellItemElement } from "../../common/spell-item-element";

import * as Styled from "../spells/index.styled";

import { ISpell } from "../../features/spell.types";

import { LOCAL_STORAGE_KEYS } from "../../consts/app-keys.const";

export const Favourites = () => {
  const [spells] = useLocalStorage(LOCAL_STORAGE_KEYS.SPELLS, []);

  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Favourite Spells</Styled.Title>
        {spells.length > 0 ? (
          <Styled.GridWrapper>
            {spells.map((item: ISpell, index: number) => (
              <SpellItemElement key={`${index}${item.name}`} spell={item} />
            ))}
          </Styled.GridWrapper>
        ) : (
          <p style={{ textAlign: "center" }}>
            You don't have any favourite spells
          </p>
        )}
      </Styled.MainContainer>
    </>
  );
};
