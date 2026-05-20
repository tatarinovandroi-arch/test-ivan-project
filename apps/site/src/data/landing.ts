export const landingContentStatus = 'filled' as const;

export type LandingHero = {
  layout?: 'split' | 'immersive' | 'fullscreen-visual';
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  media?: { desktop: string; mobile?: string; alt: string; fit?: 'cover' | 'contain' };
};

export type ServiceItem = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
};

export type TextPairItem = {
  title: string;
  description: string;
};

export type VisualCardItem = {
  title: string;
  description: string;
  image: string;
  alt?: string;
  fit?: 'cover' | 'contain';
  cta?: { label: string; href: string };
};

export type ProcessItem = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const hero: LandingHero | null = {
  layout: 'fullscreen-visual',
  eyebrow: 'BYWORKOUT',
  title: 'Тренировки под ваш ритм',
  lead: 'Фитнес-студия в Москве для старта и прогресса.',
  primaryCta: {
    label: 'Подобрать тренировку',
    href: '#contact',
  },
  media: {
    desktop: '/assets/demo/fs-hero-default.webp',
    mobile: '/assets/demo/fs-hero-mobile-default.webp',
    alt: 'Интерьер фитнес-студии BYWORKOUT в Москве',
    fit: 'cover',
  },
} as const;

export const visualCards = {
  title: 'Студия и атмосфера',
  lead: 'Посмотрите, как выглядит пространство и как ощущается первый контакт с BYWORKOUT.',
  items: [
    {
      title: 'Динамичный зал',
      description: 'Пространство для силовых и функциональных тренировок с понятной рабочей зоной.',
      image: '/assets/demo/gallery-1.webp',
      alt: 'Зона тренировок в фитнес-студии BYWORKOUT',
    },
    {
      title: 'Ритм групповых занятий',
      description: 'Подходит, когда важны регулярность, драйв и живой темп тренировки.',
      image: '/assets/demo/gallery-2.webp',
      alt: 'Групповая тренировка в фитнес-студии BYWORKOUT',
    },
    {
      title: 'Старт без перегруза',
      description: 'Мягкое начало для тех, кто хочет вернуться в зал спокойно и без спешки.',
      image: '/assets/demo/gallery-3.webp',
      alt: 'Спокойный формат тренировки в студии BYWORKOUT',
    },
    {
      title: 'Работа над подвижностью',
      description: 'Формат для восстановления, мобильности и более уверенного движения.',
      image: '/assets/demo/gallery-4.webp',
      alt: 'Растяжка и мобильность в фитнес-студии BYWORKOUT',
    },
  ] as const,
} as const;

export const services = {
  title: 'Форматы занятий',
  lead: 'Подбираем нагрузку и ритм под вашу цель, уровень и график.',
  items: [
    {
      badge: '1 на 1',
      title: 'Персональные тренировки',
      description: 'Индивидуальный формат с вниманием к технике и темпу занятия.',
      ctaLabel: 'Подобрать',
    },
    {
      badge: 'В группе',
      title: 'Групповые занятия',
      description: 'Подходит для тех, кому важны энергия, поддержка и регулярность.',
      ctaLabel: 'Подробнее',
    },
    {
      badge: 'Функционал',
      title: 'Функциональный тренинг',
      description: 'Собираем силу, выносливость и координацию в одном занятии.',
      ctaLabel: 'Уточнить',
    },
    {
      badge: 'Мягкий старт',
      title: 'Растяжка и мобильность',
      description: 'Помогает вернуть подвижность и плавно войти в тренировочный ритм.',
      ctaLabel: 'Запросить',
    },
  ] as const,
} as const;

export const benefits = {
  title: 'Почему удобно начинать',
  lead: 'Простой старт, понятный подбор нагрузки и коммуникация без лишних шагов.',
  items: [
    {
      title: 'Подбираем формат по цели',
      description: 'Смотрим на ваш опыт, темп жизни и то, как вам комфортнее тренироваться.',
    },
    {
      title: 'Начать можно спокойно',
      description: 'Не требуем жёсткого режима и не перегружаем на первом же занятии.',
    },
    {
      title: 'Есть персональный и групповой ритм',
      description: 'Можно выбрать формат под задачу, настроение и расписание.',
    },
    {
      title: 'Связь в удобном канале',
      description: 'Телефон и Telegram помогают быстро уточнить детали до записи.',
    },
  ] as const,
} as const;

export const trustProof = {
  title: 'На что можно опереться',
  lead: 'Без громких обещаний, с коротким и понятным стартом.',
  items: [
    {
      title: 'Сначала уточняем задачу',
      description: 'Разбираем цель, опыт и ограничения, чтобы предложить подходящий формат.',
    },
    {
      title: 'Показываем стартовый маршрут',
      description: 'Объясняем, как будет выглядеть первое занятие и что делать дальше.',
    },
    {
      title: 'Сохраняем удобную связь',
      description: 'Отвечаем через телефон или Telegram, чтобы не терять время на лишние круги.',
    },
    {
      title: 'Держим фокус на регулярности',
      description: 'Помогаем собрать такой ритм, который проще встроить в неделю.',
    },
  ] as const,
} as const;

export const process = {
  title: 'Как проходит старт',
  lead: 'Четыре коротких шага от заявки до первого занятия.',
  steps: [
    {
      step: '01',
      title: 'Оставляете заявку',
      description: 'Пишете цель, удобный канал связи и что хотите попробовать.',
    },
    {
      step: '02',
      title: 'Уточняем формат',
      description: 'Обсуждаем опыт, уровень нагрузки и удобное время.',
    },
    {
      step: '03',
      title: 'Подбираем тренировку',
      description: 'Предлагаем персональный или групповой сценарий под ваш темп.',
    },
    {
      step: '04',
      title: 'Приходите на занятие',
      description: 'Начинаете тренироваться в комфортном формате без спешки.',
    },
  ] as const,
} as const;

export const faq = {
  title: 'Частые вопросы',
  lead: 'Короткие ответы для первого контакта со студией.',
  items: [
    {
      question: 'С чего начать, если давно не тренировались?',
      answer:
        'Можно начать с более спокойного формата. Мы уточним цель и подберём нагрузку без лишнего давления.',
    },
    {
      question: 'Можно ли выбрать мягкую нагрузку?',
      answer:
        'Да. Для первого старта можно выбрать спокойный темп, а затем постепенно увеличивать интенсивность.',
    },
    {
      question: 'Какие форматы занятий есть?',
      answer:
        'Доступны персональные и групповые тренировки, функциональные занятия, а также формат для подвижности и восстановления.',
    },
    {
      question: 'Как записаться на тренировку?',
      answer:
        'Оставьте заявку в форме, напишите в Telegram или позвоните. Мы свяжемся и поможем выбрать удобный вариант.',
    },
    {
      question: 'Что взять с собой на первое занятие?',
      answer: 'Обычно достаточно удобной спортивной одежды, воды и готовности спокойно начать.',
    },
  ] as const,
} as const;

export const leadForm = {
  title: 'Подобрать тренировку',
  lead: 'Опишите цель, уровень и удобный способ связи. Ответим по телефону или в Telegram.',
  topics: [
    'Персональная тренировка',
    'Групповая тренировка',
    'Функциональный тренинг',
    'Растяжка и мобильность',
    'Старт для новичка',
    'Возврат к тренировкам',
  ] as const,
} as const;
