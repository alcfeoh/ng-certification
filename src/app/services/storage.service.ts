import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getItem(key: string) {
    const data = window.localStorage.getItem(key);

    if (data && data !== 'undefined') {
      return JSON.parse(data);
    }

    return null;
  }

  setItem(key: string, data: object) {
    if (typeof (data) === 'string') {
      window.localStorage.setItem(key, data);
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(data))
  }

  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }    
}
