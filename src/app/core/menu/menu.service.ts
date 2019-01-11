import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: 'title',
    name: 'MAIN'
  },
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'ion-ios-speedometer'
  },
  {
    state: 'docs',
    name: 'DOCS',
    type: 'link',
    icon: 'ion-ios-help'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Customer Registration'
  },
  {
    state: 'patients',
    name: 'Registration',
    type: 'link',
    icon: 'ion-ios-person'
  },
  {
    state: 'customers',
    name: 'Customers (waiting)',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider',
  },
  {
    type: 'title',
    name: 'Triage Module'
  },
  {
    state: 'triage',
    name: 'Customers (waiting)',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    state: 'triage',
    name: 'Triage form',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Finance Module'
  },
  {
    state: 'customers',
    name: 'Customers (waiting)',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    state: 'triage',
    name: 'Finance form',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Doctors Module'
  },
  {
    state: 'customers',
    name: 'Customers (waiting)',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    state: 'triage',
    name: 'Triage form',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider',
  },
  {
    type: 'title',
    name: 'Pharmacy Module'
  },
  {
    state: 'customers',
    name: 'Customers (waiting)',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    state: 'triage',
    name: 'Triage form',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider',
  },
  {
    type: 'title',
    name: 'Account Modules'
  },
  {
    state: 'account',
    name: 'ACCOUNT',
    type: 'sub',
    icon: 'ion-ios-people',
    children: [
      {
        state: 'signin',
        name: 'SIGNIN'
      },
      {
        state: 'signup',
        name: 'SIGNUP'
      },
      {
        state: 'forgot',
        name: 'FORGOT'
      },
      {
        state: 'lockscreen',
        name: 'LOCKSCREEN'
      }
    ]
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
