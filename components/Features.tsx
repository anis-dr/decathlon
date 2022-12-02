import {
  BriefcaseIcon,
  ClockIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'State-of-the-art',
    description:
      'You will benefit form the most advanced AI and deep learning models available in computer vision, that is commitment to you.',
    icon: TrophyIcon,
  },
  {
    name: 'By sport experts',
    description:
      'The API is built and maintained by a team of skilled AI experts and passionate of sport - an explosive combination.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Remove pain points',
    description:
      "Don't ask your employees to attach sport, product or brand tags to your images. We will translate images into actionable intelligence for you.",
    icon: ClockIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Some of our AIs.</h2>
        <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-decathlon-500 text-white">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Features;
