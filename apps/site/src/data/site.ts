import { clientBrief } from './client-brief';

const fallbackName =
  clientBrief.companyName.trim() ||
  clientBrief.businessDescription.trim() ||
  clientBrief.ecommerceProductCategory.trim() ||
  clientBrief.nicheDetail.trim() ||
  clientBrief.niche.trim() ||
  'Ваш проект';

const styleShapePresetMap = {
  'dark-cyber': 'sharp',
  'clean-premium': 'premium',
  'corporate-professional': 'premium',
  'playful-product': 'rounded',
  'playful-creative': 'rounded',
  'editorial-tech': 'premium',
} as const;

function normalizeShapePreset(value: string): '' | 'rounded' | 'sharp' | 'premium' {
  const normalized = value.trim().toLowerCase().replace(/_/g, '-');
  if (normalized === 'rounded' || normalized === 'sharp' || normalized === 'premium') {
    return normalized;
  }
  return '';
}

function getShapePresetForStyle(styleId: string): 'rounded' | 'sharp' | 'premium' {
  const normalizedStyleId = styleId.trim().toLowerCase().replace(/_/g, '-');
  return styleShapePresetMap[normalizedStyleId as keyof typeof styleShapePresetMap] ?? 'premium';
}

const resolvedShapePreset = normalizeShapePreset(clientBrief.shapePreset) || getShapePresetForStyle(clientBrief.style);

export const componentVariantMarkers = {
  "header": {
    "variant": "transparent-scroll",
    "className": "site-header--transparent-scroll",
    "dataAttrs": {
      "data-header-variant": "transparent-scroll"
    }
  },
  "drawer": {
    "variant": "left-panel",
    "className": "mobile-drawer--left",
    "dataAttrs": {
      "data-drawer-variant": "left-panel"
    },
    "position": "left"
  },
  "burger": {
    "variant": "boxed",
    "className": "site-header__burger--boxed",
    "dataAttrs": {
      "data-burger-variant": "boxed"
    }
  },
  "leadForm": {
    "variant": "dark-panel",
    "className": "lead-form--dark-panel",
    "dataAttrs": {
      "data-lead-form-variant": "dark-panel"
    }
  },
  "faq": {
    "variant": "bordered-list",
    "className": "faq--bordered-list",
    "dataAttrs": {
      "data-faq-variant": "bordered-list"
    }
  },
  "button": {
    "variant": "neon-action",
    "className": "button--variant-neon-action",
    "dataAttrs": {
      "data-button-variant": "neon-action"
    }
  },
  "card": {
    "variant": "soft-glow",
    "className": "card--variant-soft-glow",
    "dataAttrs": {
      "data-card-variant": "soft-glow"
    }
  },
  "hero": {
    "variant": "media-frame",
    "className": "hero--variant-media-frame",
    "dataAttrs": {
      "data-hero-variant": "media-frame"
    }
  },
  "section": {
    "variant": "bordered-band",
    "className": "section--variant-bordered-band",
    "dataAttrs": {
      "data-section-variant": "bordered-band"
    }
  },
  "unsupported": {},
  "warnings": []
} as const;

const resolvedDrawerPosition: 'left' | 'right' = 'left';
const leadFormEnabled = clientBrief.businessCapabilities.includes('lead-form');

const primaryCtaHref = leadFormEnabled ? '#contact' : '#content-pending';
const primaryCtaLabel = leadFormEnabled ? 'Подобрать тренировку' : 'Подробнее';

export const leadFormTransport = {
  mode: "stub",
  endpoint: "",
  status: "frontend_stub",
  note: "Generated lead form is in demo/stub mode.",
  loadingMessage: 'Проверяем форму…',
  successMessage: 'Форма пока не подключена. Свяжитесь с владельцем сайта удобным способом.',
  localSuccessMessage: 'Форма пока не подключена. Свяжитесь с владельцем сайта удобным способом.',
  errorMessage: 'Форма пока не подключена. Свяжитесь с владельцем сайта удобным способом.',
} as const;

export const siteMeta = {
  name: fallbackName,
  title: `${clientBrief.companyName.trim() || fallbackName} · фитнес-студия в Москве`,
  description: `${clientBrief.businessDescription.trim() || 'Фитнес-студия'} ${clientBrief.city.trim() ? `в ${clientBrief.city.trim()}.` : '.'} Персональные и групповые тренировки, функциональные занятия и мягкий старт под ваш ритм.`,
  shapePreset: resolvedShapePreset,
  drawerPosition: resolvedDrawerPosition,
  primaryCta: {
    label: primaryCtaLabel,
    href: primaryCtaHref,
  },
} as const;

const navigationItems: Array<{ label: string; href: string }> = [
  { label: 'Студия', href: '#visual-cards' },
  { label: 'Форматы', href: '#services' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'Старт', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
];

export const navigation = navigationItems as readonly { readonly label: string; readonly href: string }[];

export const hasLeadForm = leadFormEnabled;

const footerLinkItems: Array<{ label: string; href: string; value: string }> = [
  {
    label: 'Телефон',
    href: `tel:${clientBrief.phone.trim()}`,
    value: '+7 (924) 249-49-33',
  },
  {
    label: 'Telegram',
    href: `https://t.me/${clientBrief.telegram.trim().replace(/^@/, '')}`,
    value: '@byworkout',
  },
  {
    label: 'Почта',
    href: `mailto:${clientBrief.email.trim()}`,
    value: clientBrief.email.trim(),
  },
];

export const footerLinks = footerLinkItems as readonly { readonly label: string; readonly href: string; readonly value: string }[];
