import {Injectable} from '@angular/core';

import merge from 'object-merge-advanced';

@Injectable()
export class StakeholderRegistrationDataService {

  private readonly lsKey = 'ep.stake-reg';

  private _data = {};

  constructor() {
    const lsData = localStorage.getItem(this.lsKey);

    if (lsData) {
      this._data = JSON.parse(lsData);
    }
  }

  get data(): any {
    return this._data;
  }

  public hasData() {
    return !(this._data === {});
  }

  public resetData() {
    this._data = {};
  }

  /**
   * stringifies dates
   * @param data
   */
  public synchronizeData(data: any) {

    this._data = merge(this._data, data);

    localStorage.setItem(this.lsKey, JSON.stringify(this._data));
  }
}
