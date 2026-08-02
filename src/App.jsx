import { useEffect, useRef, useState } from 'react'
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
    journeyTitle: 'Cùng bạn trên mọi nẻo đường',
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
    journeyTitle: 'With you on every road',
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
const heroRoadImage = `${import.meta.env.BASE_URL}images/ev-hero-road.png`
const heroCarImage = `${import.meta.env.BASE_URL}images/ev-scroll-car.png`
const fleetSpriteImage = `${import.meta.env.BASE_URL}images/ev-fleet-sprite.png`
const fleetSpriteImageTwo = `${import.meta.env.BASE_URL}images/ev-fleet-sprite-2.png`

const showcaseCars = [
  { brand: 'AERA', model: 'CITY ONE', type: 'Urban EV', range: '420 km' },
  { brand: 'NOVA', model: 'S7', type: 'Sport sedan', range: '510 km' },
  { brand: 'ORBIT', model: 'CROSS', type: 'Family crossover', range: '485 km' },
  { brand: 'KAZE', model: 'TERRAIN X', type: 'Adventure SUV', range: '560 km' },
  { brand: 'LUMEN', model: 'FASTBACK', type: 'Premium EV', range: '590 km' },
  { brand: 'AERA', model: 'TOURER', type: 'Grand tourer', range: '545 km' },
  { brand: 'NOVA', model: 'E-MOTION', type: 'Smart sedan', range: '530 km' },
  { brand: 'ORBIT', model: 'FAMILY+', type: '7-seat EV', range: '470 km' },
  { brand: 'KAZE', model: 'URBAN', type: 'City compact', range: '390 km' },
  { brand: 'LUMEN', model: 'GRAND E', type: 'Executive EV', range: '610 km' },
]

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function smoothStep(start, end, value) {
  const progress = clamp((value - start) / (end - start))
  return progress * progress * (3 - 2 * progress)
}

function useScrollProgress(sectionRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId = 0

    const update = () => {
      frameId = 0
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const distance = Math.max(1, rect.height - window.innerHeight)
      const nextProgress = clamp(-rect.top / distance)
      setProgress((current) => Math.abs(current - nextProgress) > 0.001 ? nextProgress : current)
    }

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [sectionRef])

  return progress
}

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
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between lg:h-28">
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
            className="round-action min-w-12 gap-1.5 px-3 text-xs font-medium"
            aria-label={t.language}
            title={t.language}
          >
            <Globe2 size={16} />
            {lang === 'vi' ? 'EN' : 'VN'}
          </button>
          <a href="#login" className="ml-2 px-3 py-3 text-sm font-medium text-black transition-colors hover:text-green-700 dark:text-white dark:hover:text-acid">
            {t.login}
          </a>
          <a href="#signup" className="btn-white header-cta h-11 px-5 text-sm">
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
            className="round-action px-3 text-xs font-medium"
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
              className="flex items-center justify-between border-b border-black/10 px-4 py-4 font-medium last:border-b-0 dark:border-white/10"
            >
              {item}
              <ChevronRight size={18} />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-3">
            <a href="#login" className="flex h-12 items-center justify-center rounded-lg border border-black font-medium dark:border-white">
              {t.login}
            </a>
            <a href="#signup" className="btn-white header-cta h-12 text-sm">
              {t.signup}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero({ t }) {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)
  const driveProgress = smoothStep(0.08, 0.88, progress)
  const sceneZoom = smoothStep(0.16, 0.88, progress)
  const journeyReveal = smoothStep(0.28, 0.52, progress)
  const journeyOpacity = journeyReveal * (1 - smoothStep(0.78, 0.98, progress) * 0.72)
  const signatureProgress = smoothStep(0.48, 0.9, progress)
  const carBob = Math.sin(driveProgress * Math.PI * 8) * -2

  return (
    <>
      <section ref={sectionRef} id="home" className="relative h-[230svh] bg-black">
        <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
          <img
            src={heroRoadImage}
            alt="Modern urban highway at sunset"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            style={{
              transform: `scale(${1 + sceneZoom * 0.18})`,
              transformOrigin: '52% 58%',
              willChange: 'transform',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/45" />
          <div
            className="hero-speed-lines"
            style={{ opacity: driveProgress * 0.72, backgroundPositionX: `${driveProgress * -1200}px` }}
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-x-5 top-[24%] z-10 mx-auto max-w-[1400px] text-center sm:inset-x-8 lg:top-[20%]"
            style={{
              opacity: journeyOpacity,
              transform: `translate3d(0, ${(1 - journeyReveal) * 70}px, 0) scale(${0.9 + journeyReveal * 0.1})`,
            }}
          >
            <p className="text-[clamp(3rem,7.3vw,8.5rem)] font-black leading-[0.86] tracking-[-0.07em] text-black">
              {t.journeyTitle}
            </p>
          </div>

          <div
            className="hero-signature pointer-events-none absolute inset-x-3 top-1/2 z-30 mx-auto max-w-[1180px] sm:inset-x-8"
            style={{
              opacity: signatureProgress,
              transform: `translate3d(0, calc(-50% + ${18 - signatureProgress * 18}px), 0) scale(${0.9 + signatureProgress * 0.1})`,
            }}
          >
            <svg viewBox="0 0 1100 360" role="img" aria-label="EV Rental signature" className="h-auto w-full overflow-visible">
              <defs>
                <mask id="ev-signature-reveal">
                  <rect x="0" y="0" width={signatureProgress * 1100} height="360" fill="white" />
                </mask>
              </defs>
              <g mask="url(#ev-signature-reveal)">
                <text
                  x="550"
                  y="230"
                  textAnchor="middle"
                  className="hero-signature-text"
                  fill="#b9f227"
                  stroke="#b9f227"
                  strokeWidth="1.8"
                >
                  EV Rental
                </text>
                <path
                  d="M118 274 C320 254 585 225 952 168 C830 240 620 286 370 300"
                  pathLength="1"
                  fill="none"
                  stroke="#b9f227"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1"
                  strokeDashoffset={1 - signatureProgress}
                />
              </g>
            </svg>
          </div>

          <div
            className="hero-motion-car pointer-events-none absolute z-20"
            style={{
              opacity: 1 - smoothStep(0.9, 1, progress),
              transform: `translate3d(${driveProgress * 42}vw, ${carBob}px, 0) scale(${1 + driveProgress * 0.12})`,
            }}
          >
            <img src={heroCarImage} alt="" className="h-auto w-full select-none drop-shadow-[0_28px_28px_rgba(0,0,0,.38)]" />
          </div>

          <div className="absolute bottom-0 left-0 z-30 h-1 bg-acid" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
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

function Fleet({ t }) {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const progress = useScrollProgress(sectionRef)
  const [travel, setTravel] = useState(0)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return undefined

    const measure = () => setTravel(Math.max(0, track.scrollWidth - viewport.clientWidth))
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="fleet" className="relative h-[500svh] bg-[#0d0e0f] text-white">
      <div className="sticky top-0 flex h-[100svh] min-h-[620px] flex-col overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-8 px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.2em] text-acid sm:text-xs">
              <Car size={15} />{t.fleetEyebrow}
            </p>
            <h2 className="mt-4 whitespace-pre-line text-[clamp(2.45rem,5vw,5.5rem)] font-black leading-[.9] tracking-[-.06em]">
              {t.fleetTitle}
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm font-medium leading-7 text-white/55 lg:block">{t.fleetBody}</p>
        </div>

        <div ref={viewportRef} className="mt-7 flex-1 overflow-hidden sm:mt-9">
          <div
            ref={trackRef}
            className="showcase-track flex h-full w-max items-center gap-4 px-5 sm:gap-5 sm:px-8 lg:gap-6 lg:px-12"
            style={{ transform: `translate3d(${-progress * travel}px, 0, 0)` }}
          >
            {showcaseCars.map((car, index) => {
              const spriteIndex = index % 5
              return (
                <article key={`${car.brand}-${car.model}`} className="showcase-card group">
                  <div className="showcase-frame">
                    <div className="showcase-frame-inner">
                      <span className="absolute left-5 top-5 z-10 text-[10px] font-black uppercase tracking-[.2em] text-white/35">
                        {(index + 1).toString().padStart(2, '0')} / 10
                      </span>
                      <span className="absolute right-5 top-5 z-10 text-[10px] font-black uppercase tracking-[.18em] text-acid">
                        {car.type}
                      </span>
                      <div className="showcase-car-window">
                        <img
                          src={index < 5 ? fleetSpriteImage : fleetSpriteImageTwo}
                          alt={`${car.brand} ${car.model}`}
                          className="showcase-sprite"
                          style={{ transform: `translate3d(${-(spriteIndex + 0.5) * 20}%, -50%, 0)` }}
                        />
                      </div>
                      <div className="absolute bottom-[18%] left-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-white/40">
                        <BatteryCharging size={15} className="text-acid" /> {car.range}
                      </div>
                    </div>
                  </div>
                  <div className="showcase-label">
                    <span>{car.brand}</span>
                    <strong>{car.model}</strong>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-5 flex w-full max-w-[1440px] items-center gap-4 px-5 sm:px-8 lg:px-12">
          <span className="text-[10px] font-black tabular-nums tracking-[.18em] text-white/40">
            {Math.min(10, Math.floor(progress * 9) + 1).toString().padStart(2, '0')}
          </span>
          <div className="h-px flex-1 bg-white/15">
            <div className="h-full bg-acid" style={{ width: `${Math.max(3, progress * 100)}%` }} />
          </div>
          <span className="text-[10px] font-black tracking-[.18em] text-white/40">10</span>
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
    const targetId = window.location.hash.slice(1)
    if (!targetId) return undefined

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

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
        <Fleet t={t} />
        <Benefits t={t} />
        <HowItWorks t={t} />
        <Cta t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
