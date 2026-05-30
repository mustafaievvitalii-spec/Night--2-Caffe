'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useState } from 'react';
import { locations, menu, products, Product } from '@/lib/data';

type CartItem = Product & { quantity: number; option?: string };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Logo({ className = '' }: { className?: string }) {
  return <span className={`display-type tracking-[-0.12em] ${className}`}>IDLEWILD</span>;
}

function Header({ cartCount, onCart }: { cartCount: number; onCart: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/86 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Primary navigation">
        <a className="focus-ring text-2xl font-black uppercase tracking-[-0.12em] sm:text-3xl" href="#top" aria-label="Idlewild home">
          IDLEWILD
        </a>
        <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-[0.18em] md:flex">
          <a className="hover:text-magenta" href="#locations">Hello</a>
          <a className="hover:text-magenta" href="#coffee">Coffee</a>
          <a className="hover:text-magenta" href="#merch">Merch</a>
        </div>
        <button onClick={onCart} className="focus-ring rounded-full border-2 border-ink px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-ink hover:text-paper">
          Cart {cartCount}
        </button>
      </nav>
    </header>
  );
}

function Intro({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.section
      className="fixed inset-0 z-[60] grid min-h-screen place-items-center overflow-hidden bg-ink text-paper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      aria-label="Idlewild Coffee video intro"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero-intro.mp4.web.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <motion.div
        className="absolute inset-x-0 top-10 z-10 flex justify-center px-4"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <Image
          src="/videos/logos/Logohero1.png"
          alt="Idlewild Coffee"
          width={320}
          height={160}
          priority
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 260px, 200px"
          className="h-auto w-[200px] object-contain sm:w-[260px] lg:w-[320px]"
        />
      </motion.div>
      <motion.button
        onClick={onEnter}
        className="focus-ring relative z-10 rounded-full border-2 border-paper bg-transparent px-16 py-6 text-xl font-black uppercase tracking-[0.34em] text-paper transition-colors hover:bg-paper hover:text-ink sm:px-24 sm:py-8 sm:text-2xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.045 }}
        whileTap={{ scale: 0.98 }}
        transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        HELLO
      </motion.button>
    </motion.section>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 90]);
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden border-b-2 border-ink bg-paper px-4 py-12 sm:px-6">
      <motion.div style={{ y }} className="absolute right-[-12vw] top-24 hidden text-[18vw] font-black uppercase leading-none text-magenta/10 md:block">AUS</motion.div>
      <div className="mx-auto grid max-w-7xl gap-8 pt-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
          <p className="mb-6 inline-flex rounded-full border-2 border-ink px-4 py-2 text-xs font-black uppercase tracking-[0.2em]">Same shop. 2026 frequency.</p>
          <h2 className="display-type max-w-5xl text-[22vw] leading-[.76] sm:text-[16vw] lg:text-[10rem]">Coffee for the in-between.</h2>
          <p className="mt-8 max-w-2xl text-xl font-bold leading-relaxed sm:text-2xl">A walk-up coffee + tea bar rooted in Austin skate shops, downtown work sessions, weekend tacos, local art, and whatever good idea shows up next.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative min-h-[470px] overflow-hidden border-2 border-ink bg-ink shadow-raw">
          <Image src="https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/af602ede-bc87-478f-9542-48d24609ce56/1J2A0999.jpg" alt="Idlewild coffee bar with skate culture details" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-95" />
          <div className="absolute inset-x-0 bottom-0 bg-paper p-4 text-sm font-black uppercase tracking-[0.16em]">No-Comply / SXSW HQ / Coffee + Tea / Merch</div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} variants={fadeUp} transition={{ duration: 0.55 }} className="mb-10 flex flex-col gap-3 sm:mb-14">
      <p className="text-xs font-black uppercase tracking-[0.32em] text-magenta">{eyebrow}</p>
      <h2 className="display-type text-6xl leading-[.82] sm:text-8xl lg:text-9xl">{title}</h2>
    </motion.div>
  );
}

function Locations() {
  return (
    <section id="locations" className="border-b-2 border-ink px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Hello" title="Pull up." />
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location, index) => (
            <motion.article key={location.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.08, duration: 0.55 }} className="group overflow-hidden border-2 border-ink bg-paper shadow-raw transition hover:-translate-y-1 hover:shadow-rawPink">
              <div className="relative h-[340px] overflow-hidden bg-ink sm:h-[460px]">
                <Image src={location.image} alt={`${location.title} Idlewild Coffee location`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
                <span className="absolute left-4 top-4 rounded-full bg-paper px-4 py-2 text-xs font-black uppercase tracking-[0.2em]">{location.tag}</span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="display-type text-5xl leading-none sm:text-7xl">{location.title}</h3>
                <p className="mt-4 text-lg font-black uppercase">{location.address}</p>
                <p className="mt-5 text-lg font-semibold leading-relaxed">{location.description}</p>
                <div className="mt-6 border-t-2 border-ink pt-5 text-sm font-black uppercase tracking-[0.16em]">
                  {location.hours.map((hour) => <p key={hour}>{hour}</p>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoffeeMenu() {
  const groups = [
    ['Coffee', menu.coffee], ['Tea', menu.tea], ['Add', menu.add], ['Milk', menu.milk],
  ] as const;
  return (
    <section id="coffee" className="border-b-2 border-ink bg-haze px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Menu" title="Keep it moving." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map(([title, items], index) => (
            <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.06 }} className="border-2 border-ink bg-paper p-6">
              <h3 className="mb-7 inline-block rounded-full bg-ink px-6 py-3 text-2xl font-black uppercase tracking-[-0.04em] text-paper">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-ink/15 pb-2 text-lg font-black uppercase tracking-[-0.02em]"><span className="text-magenta">×</span>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-4xl font-black tracking-[-0.07em] sm:text-6xl">Have a good one. <span className="text-magenta">☺</span></p>
      </div>
    </section>
  );
}

function Merch({ onAdd }: { onAdd: (product: Product) => void }) {
  return (
    <section id="merch" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Merch" title="Wear the room." />
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.05 }} className="group">
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink bg-haze">
                <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0" />
                {product.hoverImage ? <Image src={product.hoverImage} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /> : null}
                {product.status ? <span className="absolute left-3 top-3 bg-ink px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-paper">sold out</span> : null}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black uppercase leading-tight tracking-[-0.04em]">{product.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm font-semibold leading-relaxed text-ink/75">{product.description}</p>
                  {product.options ? <p className="mt-2 text-xs font-black uppercase tracking-[0.18em]">Sizes: {product.options.join(' / ')}</p> : null}
                </div>
                <p className="text-xl font-black">${product.price}</p>
              </div>
              <button disabled={product.status === 'sold out'} onClick={() => onAdd(product)} className="focus-ring mt-5 w-full border-2 border-ink px-5 py-4 text-sm font-black uppercase tracking-[0.18em] transition enabled:hover:bg-ink enabled:hover:text-paper disabled:cursor-not-allowed disabled:opacity-45">
                {product.status === 'sold out' ? 'Sold Out' : 'Quick Add'}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniCart({ open, items, onClose, onRemove }: { open: boolean; items: CartItem[]; onClose: () => void; onRemove: (id: string) => void }) {
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button aria-label="Close cart overlay" className="fixed inset-0 z-40 bg-ink/35" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l-2 border-ink bg-paper p-5 shadow-2xl" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.45 }} aria-label="Shopping cart">
            <div className="flex items-center justify-between border-b-2 border-ink pb-4">
              <h2 className="display-type text-5xl">Cart</h2>
              <button onClick={onClose} className="focus-ring rounded-full border-2 border-ink px-4 py-2 text-xs font-black uppercase">Close</button>
            </div>
            <div className="flex-1 overflow-y-auto py-5">
              {items.length === 0 ? <p className="text-lg font-bold">Cart is empty. Add beans, hats, totes, or a shirt.</p> : items.map((item) => (
                <div key={item.id} className="mb-4 border-2 border-ink p-4">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="font-black uppercase leading-tight">{item.name}</h3>
                      <p className="text-sm font-bold">Qty {item.quantity}</p>
                    </div>
                    <p className="font-black">${item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-magenta">Remove</button>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-ink pt-5">
              <div className="mb-5 flex justify-between text-xl font-black uppercase"><span>Total</span><span>${total}</span></div>
              <button className="focus-ring w-full bg-ink px-5 py-4 text-sm font-black uppercase tracking-[0.22em] text-paper transition hover:bg-magenta">Checkout</button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo className="text-5xl" />
          <p className="mt-2 font-black uppercase tracking-[0.2em]">©Idlewild Coffee 2026</p>
        </div>
        <a className="focus-ring text-lg font-black underline decoration-magenta decoration-4 underline-offset-4" href="mailto:support@idlewildcoffee.com">support@idlewildcoffee.com</a>
      </div>
    </footer>
  );
}

export default function Site() {
  const [entered, setEntered] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  function enterSite() {
    setEntered(true);
    window.requestAnimationFrame(() => {
      document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function addToCart(product: Product) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }

  return (
    <>
      <AnimatePresence>{!entered && <Intro onEnter={enterSite} />}</AnimatePresence>
      <Header cartCount={items.reduce((sum, item) => sum + item.quantity, 0)} onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Locations />
        <CoffeeMenu />
        <Merch onAdd={addToCart} />
      </main>
      <Footer />
      <MiniCart open={cartOpen} items={items} onClose={() => setCartOpen(false)} onRemove={(id) => setItems((current) => current.filter((item) => item.id !== id))} />
    </>
  );
}
