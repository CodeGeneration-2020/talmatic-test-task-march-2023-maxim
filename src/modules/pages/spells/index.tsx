import React, {useCallback, useEffect, useState} from "react";
import { useQuery } from "@tanstack/react-query";

import { Loader } from "../../common/loader";
import { Header } from "../../common/header";
import { SpellItemElement } from "../../common/spell-item-element";
import { ISpell } from "../../features/spell.types";

import { spellsService } from "../../services/spell.service";

import * as Styled from "./index.styled";

import { QUERY_KEYS, SPELLS_TO_SHOW } from "../../consts/app-keys.const";

export const Home = () => {
  const [spellsToShow, setSpellsToShow] = useState<ISpell[]>([]);
  const [show, setShow] = useState(SPELLS_TO_SHOW);

  const { data: spells, isLoading } = useQuery([QUERY_KEYS.SPELLS], () =>
    spellsService.getSpells()
  );

  const sliceSpell = useCallback((start: number, end: number) => {
    const slicedPosts = spells?.results.slice(start, end);
    if (slicedPosts)
      setSpellsToShow(Array.from(new Set([...spellsToShow, ...slicedPosts])));
  }, [setSpellsToShow, spellsToShow, spells]);

  useEffect(() => {
    sliceSpell(0, SPELLS_TO_SHOW);
  }, [sliceSpell, spells]);

  const showMoreSpells = () => {
    sliceSpell(show, show + SPELLS_TO_SHOW);
    setShow(show + SPELLS_TO_SHOW);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Read about Spells</Styled.Title>
        <Styled.GridWrapper>
          {spellsToShow.map((item, index) => (
            <SpellItemElement key={`${index}${item.name}`} spell={item} />
          ))}
        </Styled.GridWrapper>
        {show <= spellsToShow?.length && (
          <div style={{ textAlign: "center" }}>
            <Styled.HomeLoadMore onClick={showMoreSpells}>
              Load more
            </Styled.HomeLoadMore>
          </div>
        )}
      </Styled.MainContainer>
    </>
  );
};
