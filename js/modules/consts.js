/*
    Cata Bustáb - Browser-based character picker
    Copyright (C) 2021  Federico Fogo 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see https://www.gnu.org/licenses/gpl-3.0
*/

export const ALL_GROUP_NAME = "all";
export const DEFAULT_CHAR_FALLBACK = "!undefined";
export const INVALID_UNICODE_CHARACTER = "!invalid";
export const UNASSIGNED_UNICODE_CHARACTER = "!unassigned";
export const LOCAL_STORAGE_PREFIX = "__cdechar__";
export const LOCAL_STORAGE_FIELDS = [
  // name, default value
  ["favs", ""]
];

export const FAVOURITE_GROUP_NAME = "favourites";

export const CHAR_CELL_LINK_INFO_TITLE = "Cascia föra i diavoleríe";
export const CHAR_CELL_LINK_FAVOURITE_TITLE = "Preferíd";
export const CHAR_CELL_LINK_INFO_ICON_NAME = "info-circle";

export const UCD_DATA_PATH = "/cata-bustab/data/ucd-for-cde2020-glyphs.min.json"; // "/data/ucd-for-cde2020-glyphs.min.json";
export const DEFAULT_NUMPAD_LAYOUT = {
  diviso: 171, // «
  per: 187, // »
  meno: 8211, // trattino lungo corto
  piu: 59932, // freccia destra rimando
  punto: 59904, // c mediopalatale
  "0": 472, // ǘ
  "1": 59737, // o dieresi acuto
  "2": 59884, // o dieresi grave
  "3": 59908, // g mediopalatale
  "4": 59703, // o chiusa acuto
  "5": 59707, // o aperta acuto
  "6": 380, // ż
  "7": 59595, // e chiusa acuto
  "8": 59599, // e aperta acuto
  "9": 7777 // ṡ
};
export const NUMPAD_REAL_LAYOUT = {
  diviso: 47,
  per: 42,
  meno: 45,
  piu: 43,
  punto: 46,
  "0": 48,
  "1": 49,
  "2": 50,
  "3": 51,
  "4": 52,
  "5": 53,
  "6": 54,
  "7": 55,
  "8": 56,
  "9": 57
};
export const NUMPAD_KEYCODES_NAMES = {
  111: "diviso",
  106: "per",
  109: "meno",
  107: "piu",
  110: "punto",
  96: "0",
  97: "1",
  98: "2",
  99: "3",
  100: "4",
  101: "5",
  102: "6",
  103: "7",
  104: "8",
  105: "9"
};
