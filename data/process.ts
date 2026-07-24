import { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: 'Skill Gap Analysis',
    description: 'Assess existing team capabilities, identify strategic skill deficiencies, and define quantitative learning objectives tailored to your enterprise.',
    icon: 'search',
    order: 1,
    outcomes: [
      'Comprehensive baseline assessment',
      'Role-based competency mapping',
      'Strategic priority alignment',
    ],
  },
  {
    id: '2',
    title: 'Customized Training Plan',
    description: 'Design a bespoke instructional blueprint with targeted enterprise modules, flexible delivery schedules, and measurable KPI benchmarks.',
    icon: 'sliders',
    order: 2,
    outcomes: [
      'Tailored curriculum & capstones',
      'Flexible live & async formats',
      'Executive dashboard integration',
    ],
  },
  {
    id: '3',
    title: 'Flexible Program Delivery',
    description: 'Deploy adaptive learning programs powered by industry practitioners, live interactive workshops, and continuous impact evaluation.',
    icon: 'rocket',
    order: 3,
    outcomes: [
      'Live expert-led instruction',
      'Real-world business projects',
      'Continuous ROI analytics',
    ],
  },
];