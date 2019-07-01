import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Languages = 'en-US' | 'zh-Hans';

const KEYS = {
  language: 'language'
};

const LanguageResource = {
  'en-US': {
    AppComponent: {
      routes: [{
        path: '/dashboard',
        icon: 'dashboard',
        title: 'Dashboard'
      },
      {
        path: '/hero/list',
        icon: 'format_list_numbered',
        title: 'Hero List'
      },
      {
        path: '/hero/tops',
        icon: 'whatshot',
        title: 'Tops Hero'
      },
      {
        path: '/about',
        icon: 'info_outline',
        title: 'About'
      }],
      title: {
        path: '/',
        icon: 'apps',
        title: 'Tour of Heroes'
      }
    }
  },
  'zh-Hans': {
    AppComponent: {
      routes: [{
        path: '/dashboard',
        icon: 'dashboard',
        title: '首页'
      },
      {
        path: '/hero/list',
        icon: 'format_list_numbered',
        title: '英雄列表'
      },
      {
        path: '/hero/tops',
        icon: 'whatshot',
        title: '超级英雄'
      },
      {
        path: '/about',
        icon: 'info_outline',
        title: '关于'
      }],
      title: {
        path: '/',
        icon: 'apps',
        title: '英雄之旅'
      }
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class I18NService {

  public language: Languages;

  public loadFunctions: (() => void)[] = [];

  constructor(
    private http: HttpClient
  ) {
    localStorage.setItem(KEYS.language, this.language = (localStorage.getItem(KEYS.language) || 'zh-Hans') as Languages);
    console.log(localStorage.getItem(KEYS.language));
  }

  get(component: string, id: string) {
    return LanguageResource[this.language][component][id];
  }

  setLanguage(language: Languages) {
    localStorage.setItem(KEYS.language, this.language = language);
    console.log(localStorage.getItem(KEYS.language));
    this.loadFunctions.forEach(fn => fn());
  }

}
