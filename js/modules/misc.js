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

export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  let parent = $(document.body).hasClass("modal-open")
    ? $(".modal.show")[0]
    : document.body;
  parent.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  parent.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

export const toCharCode = (v) => {
  if (typeof v === "string") {
    return v.charCodeAt(0);
  }
  return v;
};

export const toChar = (v) => {
  if (typeof v === "number") {
    return String.fromCharCode(v);
  }
  return v;
};

export const str2Codes = (str) => {
  return str.split("").map(function (c) {
    return c.charCodeAt(0);
  });
};

export const animateCSS = ($object, animation, prefix = "animate__") =>
  // add class to an object and remove the class when/if animation ended
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    $object.addClass(`${prefix}animated`);
    $object.addClass(animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      $object.removeClass(`${prefix}animated`);
      $object.removeClass(animationName);
      resolve("Animation ended");
    }

    $object.on("animationend", { once: true }, handleAnimationEnd);
  });

export const sleep = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const nonEmptyWords = (str) => {
  return str.split(" ").filter(function (x) {
    return x !== undefined && x !== "";
  });
};

export const nonEmptyChars = (str) => {
  return str.split("").filter(function (x) {
    return x !== undefined && x !== "";
  });
};

export const deviceIsTouch = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};
