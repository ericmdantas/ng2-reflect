export class Stats {
  fastest: number[] = [];

  add(timeInit, timeEnd) {
    this.fastest.unshift(timeEnd - timeInit);    
  }
}
