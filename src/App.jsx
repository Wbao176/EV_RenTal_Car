import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BatteryCharging,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  Globe2,
  Headphones,
  Instagram,
  Leaf,
  Linkedin,
  MapPin,
  Menu,
  Moon,
  Route,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from 'lucide-react'

const copy = {
  vi: {
    nav: ['Trang chủ', 'Dòng xe', 'Cách thuê', 'Ưu điểm'],
    login: 'Đăng nhập',
    signup: 'Đăng ký',
    heroBadge: 'Thuần điện · Thuần trải nghiệm',
    heroTitleTop: 'EV Rental —\ncùng bạn',
    heroTitleBottom: 'trên mọi hành trình.',
    heroBody:
      'Chọn xe trong vài phút, nhận xe linh hoạt và tận hưởng từng cây số với một hành trình không phát thải.',
    explore: 'Khám phá dòng xe',
    book: 'Đặt xe ngay',
    stats: [
      ['120+', 'Xe điện sẵn sàng'],
      ['18', 'Điểm nhận xe'],
      ['24/7', 'Hỗ trợ hành trình'],
      ['4.9/5', 'Khách hàng hài lòng'],
    ],
    whyEyebrow: 'Lái xanh, sống chất',
    whyTitle: 'Mọi thứ bạn cần.\nKhông điều gì thừa.',
    whyBody:
      'Từ đặt xe đến trả xe, mọi chi tiết đều được thiết kế để hành trình của bạn nhẹ nhàng, minh bạch và đáng nhớ hơn.',
    benefits: [
      ['Sạc đầy, đi ngay', 'Mỗi xe được bàn giao với tối thiểu 80% pin và kèm bản đồ trạm sạc trên hành trình.'],
      ['An tâm tuyệt đối', 'Bảo hiểm toàn diện, kiểm tra 32 điểm và cứu hộ 24/7 đã có trong mọi chuyến đi.'],
      ['Linh hoạt từng giờ', 'Thuê theo giờ, theo ngày hoặc dài hạn. Đổi lịch dễ dàng ngay trên tài khoản của bạn.'],
      ['Không phí ẩn', 'Giá bạn thấy là giá bạn trả. Mọi chi phí được hiển thị rõ ràng trước khi xác nhận.'],
    ],
    fleetEyebrow: 'Bộ sưu tập EV',
    fleetTitle: 'Một chiếc xe cho\nmỗi cách bạn đi.',
    fleetBody: 'Gọn gàng trong phố, rộng rãi cho gia đình hay mạnh mẽ cho chuyến đi xa — lựa chọn là của bạn.',
    cars: [
      { name: 'EV City', type: 'Linh hoạt đô thị', range: '420 km', seats: '5 chỗ', price: '890.000đ', suffix: '/ ngày' },
      { name: 'EV Motion', type: 'Cân bằng hoàn hảo', range: '510 km', seats: '5 chỗ', price: '1.290.000đ', suffix: '/ ngày' },
      { name: 'EV Voyage', type: 'Rộng rãi đường dài', range: '560 km', seats: '7 chỗ', price: '1.690.000đ', suffix: '/ ngày' },
    ],
    range: 'Tầm hoạt động',
    seats: 'Số ghế',
    reserve: 'Chọn xe này',
    viewAll: 'Xem tất cả dòng xe',
    howEyebrow: 'Đơn giản từ đầu đến cuối',
    howTitle: 'Ba bước. Lên xe. Đi.',
    steps: [
      ['Chọn hành trình', 'Nhập địa điểm, thời gian và chọn chiếc EV phù hợp với chuyến đi của bạn.'],
      ['Xác nhận trực tuyến', 'Hoàn tất thông tin và thanh toán an toàn chỉ trong vài phút.'],
      ['Nhận xe & tận hưởng', 'Nhận xe tại điểm hẹn hoặc chọn giao xe tận nơi — bạn đã sẵn sàng lên đường.'],
    ],
    ctaEyebrow: 'Hành trình tiếp theo đang chờ',
    ctaTitle: 'Sẵn sàng đổi cách\nbạn di chuyển?',
    ctaBody: 'Đăng ký hôm nay và nhận ưu đãi 15% cho chuyến đi đầu tiên cùng EV Rental.',
    ctaButton: 'Bắt đầu hành trình',
    footerText: 'Thuê xe điện thông minh cho một tương lai chuyển động xanh hơn.',
    footerCols: [
      ['Khám phá', 'Dòng xe', 'Bảng giá', 'Điểm nhận xe', 'Ưu đãi'],
      ['Hỗ trợ', 'Trung tâm trợ giúp', 'Hướng dẫn thuê xe', 'Chính sách bảo hiểm', 'Liên hệ'],
      ['Công ty', 'Về EV Rental', 'Câu chuyện của chúng tôi', 'Tuyển dụng', 'Tin tức'],
    ],
    legal: '© 2026 EV Rental. Bảo lưu mọi quyền.',
    privacy: 'Quyền riêng tư',
    terms: 'Điều khoản sử dụng',
    menu: 'Mở menu',
    theme: 'Đổi giao diện',
    language: 'Đổi ngôn ngữ',
  },
  en: {
    nav: ['Home', 'Fleet', 'How it works', 'Benefits'],
    login: 'Log in',
    signup: 'Sign up',
    heroBadge: 'Fully electric · Fully effortless',
    heroTitleTop: 'EV Rental —\nwith you',
    heroTitleBottom: 'on every journey.',
    heroBody:
      'Choose your car in minutes, pick it up your way and enjoy every kilometre with a quieter, emission-free drive.',
    explore: 'Explore the fleet',
    book: 'Book a car',
    stats: [
      ['120+', 'Electric cars ready'],
      ['18', 'Pickup locations'],
      ['24/7', 'Journey support'],
      ['4.9/5', 'Customer rating'],
    ],
    whyEyebrow: 'Drive lighter, live better',
    whyTitle: 'Everything you need.\nNothing you don’t.',
    whyBody:
      'From booking to drop-off, every detail is designed to make your drive calmer, clearer and more memorable.',
    benefits: [
      ['Charged and ready', 'Every car comes with at least 80% battery and charging stations mapped for your journey.'],
      ['Complete peace of mind', 'Full insurance, a 32-point inspection and 24/7 roadside support are included.'],
      ['Flexible by the hour', 'Rent hourly, daily or long-term. Change your schedule easily from your account.'],
      ['No hidden fees', 'The price you see is the price you pay. Every cost is clear before you confirm.'],
    ],
    fleetEyebrow: 'The EV collection',
    fleetTitle: 'A car for every\nway you move.',
    fleetBody: 'Nimble in the city, spacious for family or powerful for a long escape — the choice is yours.',
    cars: [
      { name: 'EV City', type: 'Urban agility', range: '420 km', seats: '5 seats', price: '$38', suffix: '/ day' },
      { name: 'EV Motion', type: 'The perfect balance', range: '510 km', seats: '5 seats', price: '$52', suffix: '/ day' },
      { name: 'EV Voyage', type: 'Room for the road', range: '560 km', seats: '7 seats', price: '$68', suffix: '/ day' },
    ],
    range: 'Driving range',
    seats: 'Capacity',
    reserve: 'Choose this car',
    viewAll: 'View the full fleet',
    howEyebrow: 'Simple from start to finish',
    howTitle: 'Three steps. Get in. Go.',
    steps: [
      ['Plan your drive', 'Enter your location and dates, then pick the EV that fits your journey.'],
      ['Confirm online', 'Complete your details and pay securely in just a few minutes.'],
      ['Pick up and enjoy', 'Meet us at a pickup point or choose delivery — your road is ready.'],
    ],
    ctaEyebrow: 'Your next journey is waiting',
    ctaTitle: 'Ready to change\nthe way you move?',
    ctaBody: 'Join today and enjoy 15% off your first journey with EV Rental.',
    ctaButton: 'Start your journey',
    footerText: 'Smarter electric car rental for a future that moves a little greener.',
    footerCols: [
      ['Explore', 'Our fleet', 'Pricing', 'Locations', 'Offers'],
      ['Support', 'Help centre', 'Rental guide', 'Insurance policy', 'Contact'],
      ['Company', 'About EV Rental', 'Our story', 'Careers', 'Newsroom'],
    ],
    legal: '© 2026 EV Rental. All rights reserved.',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    menu: 'Open menu',
    theme: 'Switch theme',
    language: 'Switch language',
  },
}

const navLinks = ['#home', '#fleet', '#how', '#benefits']
const benefitIcons = [BatteryCharging, ShieldCheck, Clock3, Check]
const stepIcons = [MapPin, CalendarDays, Car]
const heroImage = `${import.meta.env.BASE_URL}images/ev-hero.png`

function Brand({ inverse = false }) {
  return (
    <a href="#home" className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label="EV Rental home">
      <img
        src="/images/ev-rental-logo-final.png"
        alt="EV Rental"
        className="brand-image"
      />
    </a>
  )
}

function Header({ t, lang, setLang, dark, setDark }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between border-b border-black/15 dark:border-white/20 lg:h-28">
        <Brand />

        <div className="hidden items-center gap-7 xl:gap-10 lg:flex">
          {t.nav.map((item, index) => (
            <a key={item} href={navLinks[index]} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={() => setDark((value) => !value)}
            className="round-action"
            aria-label={t.theme}
            title={t.theme}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="round-action min-w-12 gap-1.5 px-3 text-xs font-extrabold"
            aria-label={t.language}
            title={t.language}
          >
            <Globe2 size={16} />
            {lang === 'vi' ? 'EN' : 'VN'}
          </button>
          <a href="#login" className="ml-2 px-3 py-3 text-sm font-bold text-black transition-colors hover:text-green-700 dark:text-white dark:hover:text-acid">
            {t.login}
          </a>
          <a href="#signup" className="btn-white h-11 px-5 text-sm">
            {t.signup}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDark((value) => !value)}
            className="round-action"
            aria-label={t.theme}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="round-action px-3 text-xs font-extrabold"
            aria-label={t.language}
          >
            {lang === 'vi' ? 'EN' : 'VN'}
          </button>
          <button onClick={() => setOpen(!open)} className="round-action" aria-label={t.menu} aria-expanded={open}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-[1440px] border border-black bg-white p-3 shadow-soft dark:border-white dark:bg-ink lg:hidden">
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={navLinks[index]}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/10 px-4 py-4 font-bold last:border-b-0 dark:border-white/10"
            >
              {item}
              <ChevronRight size={18} />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-3">
            <a href="#login" className="flex h-12 items-center justify-center border border-black font-bold dark:border-white">
              {t.login}
            </a>
            <a href="#signup" className="btn-white h-12 text-sm">
              {t.signup}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero({ t }) {
  return (
    <>
      <section id="home" className="relative min-h-[860px] overflow-hidden lg:h-[100svh] lg:min-h-[680px] lg:max-h-[920px]">
        <img
          src={heroImage}
          alt="Sleek electric car driving on a modern urban highway"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[61%_bottom] lg:object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35 dark:from-black/30 dark:to-black/55" />

        <div className="relative mx-auto flex min-h-[860px] max-w-[1440px] items-center px-5 pb-56 pt-36 sm:px-8 lg:h-[100svh] lg:min-h-[680px] lg:max-h-[920px] lg:px-12 lg:pb-28 lg:pt-32">
          <div className="w-full max-w-3xl">
            <div className="mb-6 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] sm:text-xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-acid text-black">
                <Zap size={14} fill="currentColor" />
              </span>
              {t.heroBadge}
            </div>
            <h1 className="max-w-5xl text-[clamp(3.05rem,4.9vw,5.2rem)] font-black leading-[0.92] tracking-[-0.06em]">
              <span className="block whitespace-pre-line">{t.heroTitleTop}</span>
              <span className="mt-2 block text-black">
                {t.heroTitleBottom}
              </span>
            </h1>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#fleet" className="btn-white h-14 px-7">
                {t.explore}
                <ArrowRight size={18} />
              </a>
              <a href="#book" className="btn-dark h-14 px-7">
                {t.book}
                <CalendarDays size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-white px-4 transition-colors dark:bg-[#050708] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 border border-white/30 bg-black/72 text-white shadow-soft backdrop-blur-xl lg:grid-cols-4">
          {t.stats.map(([value, label]) => (
            <div key={label} className="border-b border-r border-white/15 px-5 py-5 last:border-r-0 even:border-r-0 sm:px-7 sm:py-7 lg:border-b-0 lg:even:border-r">
              <div className="text-2xl font-black tracking-tight sm:text-3xl">{value}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/60 sm:text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function Benefits({ t }) {
  return (
    <section id="benefits" className="section-shell border-b border-black/10 dark:border-white/10">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <p className="eyebrow"><Leaf size={15} />{t.whyEyebrow}</p>
            <h2 className="section-title whitespace-pre-line">{t.whyTitle}</h2>
            <p className="section-copy">{t.whyBody}</p>
            <div className="mt-9 hidden h-px w-full bg-black/15 dark:bg-white/15 lg:block" />
            <p className="mt-5 hidden text-sm font-bold text-black/55 dark:text-white/55 lg:flex lg:items-center lg:gap-2">
              <Sparkles size={16} className="text-green-600 dark:text-acid" /> EV Rental Standard
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            {t.benefits.map(([title, text], index) => {
              const Icon = benefitIcons[index]
              return (
                <article key={title} className="benefit-card group">
                  <div className="feature-icon"><Icon size={24} strokeWidth={1.8} /></div>
                  <span className="absolute right-6 top-6 text-xs font-black text-black/25 dark:text-white/25">0{index + 1}</span>
                  <h3 className="mt-10 text-2xl font-black tracking-tight">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-black/60 dark:text-white/60">{text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CarArtwork({ variant }) {
  const colors = [
    ['#dbe5e7', '#232b2f'],
    ['#d9f0c2', '#10220d'],
    ['#dce2ee', '#1b2444'],
  ][variant]

  return (
    <div className="relative h-52 overflow-hidden" style={{ background: `linear-gradient(145deg, ${colors[0]}, #f8faf8)` }}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-black/10" />
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-black/10" />
      <svg viewBox="0 0 520 210" className="absolute inset-x-0 bottom-0 w-full translate-y-1" aria-hidden="true">
        <ellipse cx="270" cy="176" rx="215" ry="20" fill="#000" opacity=".12" />
        <path
          d="M60 137c8-29 26-45 64-51l75-12c28-39 55-54 98-56h52c38 1 70 20 103 65l23 8c22 7 34 24 35 51l-4 18H71c-14 0-19-10-11-23Z"
          fill={colors[1]}
        />
        <path d="M220 72c28-31 49-40 81-41h43c31 1 55 15 79 50l-203-9Z" fill="#91a5ad" opacity=".75" />
        <path d="M297 32 277 75M350 32l27 48" stroke="#eef7f8" strokeWidth="4" opacity=".65" />
        <path d="M82 130h55M438 104l50 18" stroke="#d9ff72" strokeWidth="5" strokeLinecap="round" />
        <circle cx="158" cy="158" r="40" fill="#111" />
        <circle cx="158" cy="158" r="22" fill="#718087" />
        <circle cx="158" cy="158" r="8" fill="#dce5e5" />
        <circle cx="414" cy="158" r="40" fill="#111" />
        <circle cx="414" cy="158" r="22" fill="#718087" />
        <circle cx="414" cy="158" r="8" fill="#dce5e5" />
      </svg>
    </div>
  )
}

function Fleet({ t }) {
  return (
    <section id="fleet" className="section-shell bg-fog dark:bg-[#0b0f10]">
      <div className="section-inner">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow"><Car size={15} />{t.fleetEyebrow}</p>
            <h2 className="section-title whitespace-pre-line">{t.fleetTitle}</h2>
          </div>
          <p className="max-w-md text-base font-medium leading-7 text-black/60 dark:text-white/60">{t.fleetBody}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.cars.map((car, index) => (
            <article key={car.name} className="fleet-card group">
              <div className="relative overflow-hidden">
                <CarArtwork variant={index} />
                <span className="absolute left-5 top-5 border border-black/20 bg-white/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em] text-black backdrop-blur">
                  {car.type}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.18em] text-black/40 dark:text-white/40">EV Rental</p>
                    <h3 className="mt-1 text-3xl font-black tracking-[-.04em]">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-black">{car.price}</span>
                    <span className="text-xs font-semibold text-black/45 dark:text-white/45">{car.suffix}</span>
                  </div>
                </div>
                <div className="my-6 grid grid-cols-2 border-y border-black/10 py-4 dark:border-white/10">
                  <div className="border-r border-black/10 dark:border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">{t.range}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-black"><Route size={15} />{car.range}</p>
                  </div>
                  <div className="pl-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">{t.seats}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-black"><Car size={15} />{car.seats}</p>
                  </div>
                </div>
                <a href="#book" className="btn-white h-12 w-full text-sm">
                  {t.reserve}<ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#fleet" className="text-link">{t.viewAll}<ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}

function HowItWorks({ t }) {
  return (
    <section id="how" className="section-shell overflow-hidden">
      <div className="section-inner">
        <div className="text-center">
          <p className="eyebrow justify-center"><Zap size={15} />{t.howEyebrow}</p>
          <h2 className="section-title mx-auto max-w-4xl">{t.howTitle}</h2>
        </div>

        <div className="relative mt-14 grid gap-4 lg:grid-cols-3">
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden border-t border-dashed border-black/25 dark:border-white/25 lg:block" />
          {t.steps.map(([title, text], index) => {
            const Icon = stepIcons[index]
            return (
              <article key={title} className="relative z-10 px-3 py-5 text-center sm:px-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black bg-white text-black shadow-[0_0_0_10px_white] dark:border-white dark:bg-black dark:text-white dark:shadow-[0_0_0_10px_#050708]">
                  <Icon size={23} />
                </div>
                <p className="mt-7 text-xs font-black uppercase tracking-[.18em] text-green-700 dark:text-acid">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight">{title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-medium leading-7 text-black/55 dark:text-white/55">{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Cta({ t }) {
  return (
    <section id="book" className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-black px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="absolute -right-24 -top-36 h-[440px] w-[440px] rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full border border-acid/30" />
        <div className="absolute bottom-0 right-[18%] h-40 w-px rotate-[28deg] bg-gradient-to-t from-acid to-transparent" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-acid"><Sparkles size={15} />{t.ctaEyebrow}</p>
            <h2 className="mt-5 max-w-4xl whitespace-pre-line text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[.92] tracking-[-.06em]">
              {t.ctaTitle}
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/60">{t.ctaBody}</p>
          </div>
          <a href="#signup" className="btn-white h-14 w-fit px-7 shadow-acid">
            {t.ctaButton}<ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer({ t }) {
  return (
    <footer className="bg-black px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12 lg:pt-20">
      <div className="mx-auto max-w-[1344px]">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.25fr_2fr] lg:gap-24">
          <div>
            <Brand inverse />
            <p className="mt-7 max-w-sm text-sm font-medium leading-7 text-white/55">{t.footerText}</p>
            <div className="mt-7 flex gap-2">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a key={index} href="#social" aria-label="Social media" className="footer-social"><Icon size={17} /></a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">
            {t.footerCols.map(([title, ...items]) => (
              <div key={title}>
                <h3 className="text-xs font-black uppercase tracking-[.18em]">{title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {items.map((item) => (
                    <li key={item}><a href="#footer" className="text-sm font-medium text-white/50 transition-colors hover:text-acid">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs font-semibold text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.legal}</p>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-white">{t.privacy}</a>
            <a href="#terms" className="hover:text-white">{t.terms}</a>
            <span className="hidden items-center gap-1.5 md:flex"><Headphones size={13} />1900 6868</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('evr-language') || 'vi')
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('evr-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#050708' : '#ffffff')
    localStorage.setItem('evr-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('evr-language', lang)
  }, [lang])

  return (
    <div className="min-h-screen bg-white text-ink transition-colors duration-300 dark:bg-[#050708] dark:text-white">
      <Header t={t} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <main>
        <Hero t={t} />
        <Benefits t={t} />
        <Fleet t={t} />
        <HowItWorks t={t} />
        <Cta t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
