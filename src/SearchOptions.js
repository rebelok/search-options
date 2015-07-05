/**
 * Created by user on 03.07.2015.
 */

export default class SearchOprions {
  constructor() {
    this.store = [];
    for (let i = 1; i < 11; i++) {
      this.store.push({Name: "so" + i, Id: i, state: i%3});
    }
  }
}
