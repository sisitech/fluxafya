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
    name: 'Labs Module'
  },
  {
    state: 'labs',
    name: 'Labs',
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
        name: 'Lab\'s form',
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
    name: 'Admin Modules'
  },
  {
    state: 'admin',
    name: 'User Admin',
    type: 'sub',
    icon: 'ion-ios-person',
    children: [
      {
        state: '',
        name: 'View Users',
        type: 'link',
        icon: 'ion-ios-people'
      },
      {
        state: 'manage-users',
        name: 'Manage Users',
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

const RECEPTION = [
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
    name: 'Reception'
  },
  {
    state: 'patients/register',
    name: 'Register',
    type: 'extLink',
    icon: 'ion-document'
  },
  {
    state: 'patients',
    name: 'Patients',
    type: 'extLink',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];

const PHARMACY = [
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
    name: 'Patients'
  },
  {
    state: 'pharmacy',
    name: 'Patients',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];

const RECFINANCE = [
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
    name: 'Patients'
  },
  {
    state: 'patients/register',
    name: 'Register',
    type: 'extLink',
    icon: 'ion-document'
  },
  {
    state: 'patients',
    name: 'Patients',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Finance'
  },
  {
    state: 'finance',
    name: 'Patients',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];

const FINANCE = [
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
    name: 'Finance'
  },
  {
    state: 'finance',
    name: 'Patients',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];

const TRIAGE = [
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
    name: 'Triage'
  },
  {
    state: 'triage',
    name: 'Patients',
    type: 'link',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];

const PERSONAL = [
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
    name: 'Medical'
  },
  {
    state: 'ext-patient/histories',
    name: 'Histories',
    type: 'extLink',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];

const DOCTOR = [
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
    name: 'Triage'
  },
  {
    state: 'triage/patients',
    name: 'Patients',
    type: 'extLink',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Doctors'
  },
  {
    state: 'doctors/patients',
    name: 'Patients',
    type: 'extLink',
    icon: 'ion-ios-people'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Account'
  },
  {
    state: 'profile',
    name: 'Profile',
    type: 'link',
    icon: 'ion-ios-contact'
  },
  {
    state: 'account/change-password',
    name: 'Change Password',
    type: 'extLink',
    icon: 'ion-ios-shuffle'
  },
  {
    state: 'account/lockscreen',
    name: 'Lockscreen',
    type: 'extLink',
    icon: 'ion-ios-locked'
  }
];


@Injectable()
export class MenuService {

  getAll(): Menu[] {
    let profile = JSON.parse(localStorage.getItem('userProfile'));

    if(profile.role == 'SA'){
      return MENUITEMS;
    } else if(profile.role == 'R'){
      return RECEPTION;
    } else if (profile.role == 'PH') {
      return PHARMACY;
    } else if (profile.role == 'F') {
      return FINANCE;
    } else if (profile.role == 'RF') {
      return RECFINANCE;
    } else if (profile.role == 'T'){
      return TRIAGE;
    } else if (profile.role == 'P'){
      return PERSONAL;
    } else if (profile.role == 'D'){
      return DOCTOR;
    }
  }
}
