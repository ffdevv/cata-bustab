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

import * as consts from "./consts.js";
import { loadUCD } from "./ucd-slim-async-loader.js";

export const categories = {
  Cc: "Other, Control",
  Cf: "Other, Format",
  Cn: "Other, Not Assigned (no characters in the file have this property)",
  Co: "Other, Private Use",
  Cs: "Other, Surrogate",
  LC: "Letter, Cased",
  Ll: "Letter, Lowercase",
  Lm: "Letter, Modifier",
  Lo: "Letter, Other",
  Lt: "Letter, Titlecase",
  Lu: "Letter, Uppercase",
  Mc: "Mark, Spacing Combining",
  Me: "Mark, Enclosing",
  Mn: "Mark, Nonspacing",
  Nd: "Number, Decimal Digit",
  Nl: "Number, Letter",
  No: "Number, Other",
  Pc: "Punctuation, Connector",
  Pd: "Punctuation, Dash",
  Pe: "Punctuation, Close",
  Pf: "Punctuation, Final quote (may behave like Ps or Pe depending on usage)",
  Pi:
    "Punctuation, Initial quote (may behave like Ps or Pe depending on usage)",
  Po: "Punctuation, Other",
  Ps: "Punctuation, Open",
  Sc: "Symbol, Currency",
  Sk: "Symbol, Modifier",
  Sm: "Symbol, Math",
  So: "Symbol, Other",
  Zl: "Separator, Line",
  Zp: "Separator, Paragraph",
  Zs: "Separator, Space"
};

export const getCharAttr = (code) => {
  return chars[code];
};

export const getName = (code, fallback = consts.DEFAULT_CHAR_FALLBACK) => {
  let attrs = chars[code];
  if (attrs === undefined) {
    return fallback;
  }
  return attrs.name;
};

export const getChar = (code) => {
  let ret = "";
  let charCat = getCategoryCode(code);
  let chAttr = chars[code];
  if (charCat === consts.INVALID_UNICODE_CHARACTER) {
    ret = consts.INVALID_UNICODE_CHARACTER;
  } else if (charCat === "Cn") {
    ret = consts.UNASSIGNED_UNICODE_CHARACTER;
  } else if (chAttr === undefined) {
    ret = String.fromCharCode(code);
  } else {
    ret = chAttr.char;
  }
  return ret;
};

export const isPrivate = (c) => {
  return getCategoryCode(c) === "Co";
};

export const getCategoryCode = (c) => {
  let code = c;
  if (typeof c === "string") {
    code = c.charCodeAt(0);
  }
  if (code > 0x10ffff) {
    return consts.INVALID_UNICODE_CHARACTER;
  }
  if ((code >= 0x0 && code <= 0x1f) || (code >= 0x7f && code <= 0x9f)) {
    return "Cc";
  }
  if (
    (code >= 0xe000 && code <= 0xf8ff) ||
    (code >= 0xf0000 && code <= 0xffffd) ||
    (code >= 0x100000 && code <= 0x10fffd)
  ) {
    return "Co";
  }
  if (code >= 0xd800 && code <= 0xdfff) {
    return "Cs";
  }
  if (code >= 0x17000 && code <= 0x187f1) {
    return "Lo";
  }
  let chAttr = chars[code];
  if (chAttr === undefined) {
    return "Cn";
  }
  return chAttr["categoryCode"];
};

export const chars = {};

export const loadCharData = async () => {
  return loadUCD(chars);
};
