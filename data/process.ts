import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: 'Discovery',
    description: 'We thoroughly understand your organization\'s unique challenges, goals, and workforce composition through comprehensive assessment.',
    icon: '🔍',
    order: 1,
  },
  {
    id: '2',
    title: 'Custom Design',
    description: 'Our expert team designs a fully customized learning program aligned with your specific objectives and KPIs.',
    icon: '✏️',
    order: 2,
  },
  {
    id: '3',
    title: 'Implementation',
    description: 'We deploy the program with complete onboarding support, technical setup, and change management assistance.',
    icon: '🚀',
    order: 3,
  },
  {
    id: '4',
    title: 'Support & Optimization',
    description: 'Continuous monitoring, optimization, and strategic guidance to ensure maximum engagement and measurable ROI.',
    icon: '📊',
    order: 4,
  },
];