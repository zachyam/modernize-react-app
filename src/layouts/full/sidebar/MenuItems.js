import {
  IconAperture, IconCopy, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconClipboardCheck, IconBath, IconToolsKitchen2, IconBuildingWarehouse,
  IconCalendarTime, IconThumbUp, IconAddressBook, IconPaint, IconBed, IconDeviceTv, IconPool
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
    id: uniqueId(),
    title: 'Painting',
    icon: IconPaint,
    href: '/quotes/painting',
  },
  {
    id: uniqueId(),
    title: 'Master Bedroom',
    icon: IconBed,
    href: '/quotes/masterbedroom',
  }, 
  {
    id: uniqueId(),
    title: 'Living Room',
    icon: IconDeviceTv,
    href: '/quotes/livingroom',
  },
  {
    id: uniqueId(),
    title: 'Pool',
    icon: IconPool,
    href: '/quotes/pool',
  },
  {
    navlabel: true,
    subheader: 'Pipeline',
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
  }
];

export default Menuitems;
