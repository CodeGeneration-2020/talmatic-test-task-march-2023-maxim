import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import { storageService } from "../../services/storage.service";
import { spellsService } from "../../services/spell.service";

import * as Styled from "./index.styled";

import { ISpell } from "../../features/spell.types";

import {
  LOCAL_STORAGE_KEYS,
  QUERY_KEYS,
  ROUTER_KEYS,
} from "../../consts/app-keys.const";

export const SpellItemElement = ({ spell }: { spell: ISpell }) => {
  const navigate = useNavigate();
  const [spells, setSpells] = useLocalStorage(LOCAL_STORAGE_KEYS.SPELLS, []);

  const { data } = useQuery([QUERY_KEYS.SPELLS, spell.index], () =>
    spellsService.getSpell(spell.index)
  );

  const addSpellToStorage = () => {
    const items = storageService.addToLocalStorage(spell);
    setSpells(items);
  };

  const removeSpellFromStorage = () => {
    const removedSpells = storageService.removeFromLocalStorage(spell.index);
    setSpells(removedSpells);
  };

  const handleClick = () => {
    navigate(`${ROUTER_KEYS.SPELL}/${spell.index}`);
  };

  return (
    <Styled.HomeSpellEl>
      <Styled.HomeSpellFlex>
        <h6>{spell.name}</h6>
        {spells.find((item: ISpell) => item.index === spell.index) ? (
          <AiFillLike onClick={removeSpellFromStorage} />
        ) : (
          <AiOutlineLike onClick={addSpellToStorage} />
        )}
      </Styled.HomeSpellFlex>
      <h6>Description of Spell:</h6>
      <p>{data?.desc}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Styled.HomeSpellBtn onClick={handleClick}>
          Read More
        </Styled.HomeSpellBtn>
      </div>
    </Styled.HomeSpellEl>
  );
};
