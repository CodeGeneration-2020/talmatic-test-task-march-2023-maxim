import { HttpService } from "./http.service";

import { API_ROUTE_KEYS } from "../consts/app-keys.const";

import { ISpellResponse, ISpellsResponse } from "../features/spell.types";

export class SpellsService extends HttpService {
  public getSpells(): Promise<ISpellsResponse> {
    return this.get(API_ROUTE_KEYS.ALL_SPELLS);
  }

  public getSpell(index: string): Promise<ISpellResponse> {
    return this.get(`${API_ROUTE_KEYS.ALL_SPELLS}/${index}`);
  }
}

export const spellsService = new SpellsService();
