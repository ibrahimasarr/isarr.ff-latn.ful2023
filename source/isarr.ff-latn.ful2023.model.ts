/*
  ful2023 1.0.2 generated from template.
  
  This is a minimal lexical model source that uses a tab delimited wordlist.
  See documentation online at https://help.keyman.com/developer/ for
  additional parameters.
*/

const source: LexicalModelSource = {
  format: "trie-1.0",
  wordBreaker: "default",
  sources: ['ff_2023_wordList.tsv'],
  languageUsesCasing: true,
};
export default source;
