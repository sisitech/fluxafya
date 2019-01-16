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
    name: 'Reception',
    type: 'sub',
    icon: 'ion-ios-person',
    children: [
      {
        state: 'register',
        name: 'Patient Registration',
        type:'link',
      },
      {
        state: '',
        name: 'Registered Patients',
        type:'link',
      }
    ]
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
    name: 'Triage Station',
    type: 'sub',
    icon: 'ion-ios-help',
    children: [
      {
        state: '',
        name: 'Patients',
        type:'link',
        icon:''
      },
      {
        state: 'see-patient',
        name: 'Triage form',
        type:'link',
        icon:''
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Finance Module'
  },
  {
    state: 'finance',
    name: 'Finance',
    type: 'sub',
    icon: 'ion-ios-list',
    children: [
      {
        state: '',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
      },
      {
        state: 'see-patient',
        name: 'Finance form',
        type: 'link',
        icon: 'ion-ios-people'
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Doctors Module'
  },
  {
    state: 'doctors',
    name: 'Doctors',
    type: 'sub',
    icon: 'ion-ios-people',
    children: [
      {
        state: '',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
      },
      {
        state: 'see-patient',
        name: 'Doctor\'s form',
        type: 'link',
        icon: 'ion-ios-people'
      }
    ]
  },
  {
    type: 'divider',
  },
  {
    type: 'title',
    name: 'Pharmacy Module'
  },
  {
    state: 'pharmacy',
    name: 'Pharmacy',
    type: 'sub',
    icon: 'ion-ios-box',
    children: [
      {
        state: '',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
      },
      {
        state: 'see-patient',
        name: 'Pharmacy\'s form',
        type: 'link',
        icon: 'ion-ios-people'
      }
    ]
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
    icon: 'ion-ios-person',
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

const RECEPTIONISTMENUITEMS = [
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
    name: 'Reception',
    type: 'sub',
    icon: 'ion-ios-person',
    children: [
      {
        state: 'register',
        name: 'Patient Registration',
        type:'link',
      },
      {
        state: '',
        name: 'Registered Patients',
        type:'link',
      }
    ]
  },
  {
    type: 'divider',
  },
  {
    type: 'title',
    name: 'Finance Module'
  },
  {
    state: 'finance',
    name: 'Finance',
    type: 'sub',
    icon: 'ion-ios-list',
    children: [
      {
        state: '',
        name: 'Patients',
        type: 'link',
        icon: 'ion-ios-people'
      },
      {
        state: 'see-patient',
        name: 'Finance form',
        type: 'link',
        icon: 'ion-ios-people'
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account Modules'
  },
  {
    state: 'account',
    name: 'ACCOUNT',
    type: 'sub',
    icon: 'ion-ios-person',
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
    let profile = JSON.parse(localStorage.getItem('userProfile'));

    if(profile.role == 'SA'){

      return MENUITEMS;

    }else if(profile.role == 'R'){

      return RECEPTIONISTMENUITEMS;
    }
    //return MENUITEMS;
  }
}
