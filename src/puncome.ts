import words from './tnc-1k-wordlist'

export default class Puncome {
  static process(input: string): Array<string> {
    let lines = words

    if (lines.indexOf(input) !== -1) {
      return [];
    } else {
      return [input];
    }
  }

  static Sum(a: number, b: number): number {
    let c = a + b;
    return c;
  }
}
