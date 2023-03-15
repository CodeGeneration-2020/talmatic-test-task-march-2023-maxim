import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { Header } from "../../common/header";
import { Loader } from "../../common/loader";

import { SpellContainerInfo } from "./components/spell-container-info";

import { spellsService } from "../../services/spell.service";

import * as Styled from "./index.styled";

import { QUERY_KEYS } from "../../consts/app-keys.const";

export const Spell = () => {
  const { index } = useParams<{ index: string }>();

  const { data, isLoading } = useQuery([QUERY_KEYS.SPELLS, index], () =>
    spellsService.getSpell(index!)
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <Styled.SpellContainer>
        <Styled.SpellHeading>{data?.name}</Styled.SpellHeading>
        {data && <SpellContainerInfo data={data} />}
      </Styled.SpellContainer>
    </>
  );
};
