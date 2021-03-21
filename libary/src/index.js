import { reduce } from "lodash";

import numRef from "./ref.json";

export function numToWord(num) {
  return reduce(
    numRef,
    (a, ref) => {
      return ref.num === num ? ref.word : a;
    },
    ""
  );
}

export function wordToNum(word) {
  return reduce(
    numRef,
    (a, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : a;
    },
    -1
  );
}
