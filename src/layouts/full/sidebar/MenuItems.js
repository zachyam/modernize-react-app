import {
  IconAperture, IconCopy, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconClipboardCheck, IconBath, IconToolsKitchen2, IconBuildingWarehouse,
  IconCalendarTime, IconThumbUp, IconAddressBook
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Categories',
  },

  {
    id: uniqueId(),
    title: 'Roof',
    icon: IconBuildingWarehouse,
    href: '/quotes/roof',
  },
  {
    id: uniqueId(),
    title: 'Kitchen',
    icon: IconToolsKitchen2,
    href: '/quotes/kitchen',
  },
  {
    id: uniqueId(),
    title: 'Master Bathroom',
    icon: IconBath,
    href: '/quotes/masterbathroom',
  },
  {
    navlabel: true,
    subheader: 'Pipeline',
  },
  {
    id: uniqueId(),
    title: 'Typography',
    icon: IconTypography,
    href: '/pipeline/typography',
  },
  {
    id: uniqueId(),
    title: 'Shadow',
    icon: IconCopy,
    href: '/pipeline/shadow',
  },
  {
    id: uniqueId(),
    title: 'Approved',
    icon: IconClipboardCheck,
    href: '/pipeline/approved',
  },
  {
    id: uniqueId(),
    title: 'Scheduled',
    icon: IconCalendarTime,
    href: '/pipeline/scheduled',
  },
  {
    id: uniqueId(),
    title: 'Completed',
    icon: IconThumbUp,
    href: '/pipeline/completed',
  },
  {
    id: uniqueId(),
    title: 'Summary',
    icon: IconAddressBook,
    href: '/pipeline/summary',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Icons',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },
];

export default Menuitems;
