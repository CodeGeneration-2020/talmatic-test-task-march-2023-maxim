import React from "react";

import { ROUTER_KEYS } from "../consts/app-keys.const";

import { Home } from "../pages/spells";
import { Favourites } from "../pages/favourites";
import { Spell } from "../pages/spell";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

export const publicRoutes: RouteType[] = [
  { path: ROUTER_KEYS.ROOT, element: <Home /> },
  { path: ROUTER_KEYS.FAVOURITES, element: <Favourites /> },
  { path: `${ROUTER_KEYS.SPELL}/:index`, element: <Spell /> },
];
