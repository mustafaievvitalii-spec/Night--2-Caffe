"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useState } from "react";
import { locations, menu, products, Product } from "@/lib/data";

type CartItem = Product & { quantity: number; option?: string };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`display-type tracking-[-0.12em] ${className}`}>
      IDLEWILD
    </span>
  );
}

function Header({
  cartCount,
  onCart,
}: {
  cartCount: number;
  onCart: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          className="focus-ring text-2xl font-black uppercase tracking-[-0.12em] transition hover:text-magenta sm:text-3xl"
          href="#top"
          aria-label="Idlewild home"
        >
          IDLEWILD
        </a>
        <div className="hidden items-center gap-10 text-[11px] font-black uppercase tracking-[0.28em] md:flex">
          <a className="transition hover:text-magenta" href="#locations">
            Locations
          </a>
          <a className="transition hover:text-magenta" href="#coffee">
            Coffee
          </a>
          <a className="transition hover:text-magenta" href="#merch">
            Merch
          </a>
        </div>
        <button
          onClick={onCart}
          className="focus-ring rounded-full border border-ink/60 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.24em] transition hover:border-ink hover:bg-ink hover:text-paper"
        >
          Cart / {cartCount}
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
  const y = useTransform(scrollY, [0, 700], [0, 80]);
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden border-b border-ink/15 bg-paper px-4 py-12 sm:px-6 lg:px-10"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-[10vw] top-28 hidden text-[22vw] font-black uppercase leading-none tracking-[-0.14em] text-ink/[0.035] md:block"
      >
        AUS
      </motion.div>
      <div className="mx-auto grid max-w-[1440px] gap-10 pt-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end lg:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em]">
            <span className="rounded-full border border-ink/35 px-4 py-2">
              Austin, Texas
            </span>
            <span className="rounded-full border border-ink/35 px-4 py-2">
              Coffee + Culture
            </span>
            <span className="rounded-full bg-ink px-4 py-2 text-paper">
              Since the in-between
            </span>
          </div>
          <h2 className="display-type max-w-6xl text-[21vw] leading-[.72] text-ink sm:text-[15vw] lg:text-[9.6rem] xl:text-[11rem]">
            Coffee for the in-between.
          </h2>
          <div className="mt-10 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-[.72fr_1fr]">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-magenta">
              Walk-up bar / skate shop / downtown work room
            </p>
            <p className="max-w-2xl text-xl font-semibold leading-relaxed tracking-[-0.03em] text-ink/85 sm:text-2xl">
              A walk-up coffee + tea bar rooted in Austin skate shops, downtown
              work sessions, weekend tacos, local art, and whatever good idea
              shows up next.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="group relative min-h-[520px] overflow-hidden bg-ink lg:min-h-[690px]"
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/57b1331e3e00be9be5f117b5/af602ede-bc87-478f-9542-48d24609ce56/1J2A0999.jpg"
            alt="Idlewild coffee bar with skate culture details"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover opacity-95 transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-4 p-5 text-paper sm:p-7">
            <p className="max-w-xs text-sm font-black uppercase tracking-[0.22em]">
              No-Comply / SXSW HQ / Coffee + Tea / Merch
            </p>
            <span className="rounded-full border border-paper/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em]">
              Open daily-ish
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
      className="mb-12 grid gap-5 border-t border-ink/20 pt-6 sm:mb-16 lg:grid-cols-[260px_1fr] lg:items-end"
    >
      <p className="text-[11px] font-black uppercase tracking-[0.34em] text-magenta">
        {eyebrow}
      </p>
      <h2 className="display-type text-6xl leading-[.78] sm:text-8xl lg:text-[9rem]">
        {title}
      </h2>
    </motion.div>
  );
}

function Locations() {
  return (
    <section
      id="locations"
      className="border-b border-ink/15 px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle eyebrow="Hello" title="Pull up." />
        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location, index) => (
            <motion.article
              key={location.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group grid overflow-hidden border border-ink/20 bg-paper transition duration-300 hover:-translate-y-1 hover:border-ink md:grid-rows-[minmax(420px,58vh)_auto]"
            >
              <div className="relative min-h-[360px] overflow-hidden bg-ink md:min-h-[520px]">
                <Image
                  src={location.image}
                  alt={`${location.title} Idlewild Coffee location`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80" />
                <span className="absolute left-5 top-5 rounded-full bg-paper/95 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em]">
                  {location.tag}
                </span>
                <span className="absolute bottom-5 right-5 text-7xl font-black leading-none tracking-[-0.12em] text-paper/80">
                  0{index + 1}
                </span>
              </div>
              <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[1fr_.92fr] xl:p-10">
                <div>
                  <h3 className="display-type text-6xl leading-none sm:text-8xl">
                    {location.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm font-black uppercase leading-relaxed tracking-[0.18em] text-ink/80">
                    {location.address}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-7">
                  <p className="text-lg font-semibold leading-relaxed tracking-[-0.02em] text-ink/82">
                    {location.description}
                  </p>
                  <div className="border-t border-ink/20 pt-5 text-xs font-black uppercase leading-loose tracking-[0.22em]">
                    {location.hours.map((hour) => (
                      <p key={hour}>{hour}</p>
                    ))}
                  </div>
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
    ["Coffee", menu.coffee],
    ["Tea", menu.tea],
    ["Add", menu.add],
    ["Milk", menu.milk],
  ] as const;
  return (
    <section
      id="coffee"
      className="relative overflow-hidden border-b border-ink/15 bg-haze px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 flex w-[200%] gap-10 whitespace-nowrap border-y border-ink/10 bg-paper/70 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-ink/55 marquee">
        <span>
          Coffee / Tea / Tacos / Skate shop bar / Downtown work room /{" "}
        </span>
        <span>
          Coffee / Tea / Tacos / Skate shop bar / Downtown work room /{" "}
        </span>
      </div>
      <div className="mx-auto max-w-[1440px] pt-12">
        <SectionTitle eyebrow="Menu" title="Keep it moving." />
        <div className="grid border border-ink/20 bg-paper lg:grid-cols-4">
          {groups.map(([title, items], index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.06 }}
              className="border-b border-ink/20 p-6 last:border-b-0 md:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="mb-10 flex items-center justify-between gap-4">
                <h3 className="display-type text-5xl leading-none">{title}</h3>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-magenta">
                  0{index + 1}
                </span>
              </div>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="group/item flex items-center justify-between gap-5 border-t border-ink/15 py-4 text-lg font-black uppercase tracking-[-0.04em] transition hover:pl-2 hover:text-magenta"
                  >
                    <span>{item}</span>
                    <span className="text-ink/25 transition group-hover/item:text-magenta">
                      +
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 max-w-4xl text-5xl font-black leading-[.85] tracking-[-0.08em] sm:text-7xl">
          Have a good one. <span className="text-magenta">☺</span>
        </p>
      </div>
    </section>
  );
}

function Merch({ onAdd }: { onAdd: (product: Product) => void }) {
  return (
    <section id="merch" className="px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionTitle eyebrow="Merch" title="Wear the room." />
        <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-haze">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.045] group-hover:opacity-0"
                />
                {product.hoverImage ? (
                  <Image
                    src={product.hoverImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-0 transition duration-700 group-hover:scale-[1.045] group-hover:opacity-100"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-paper/95 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em]">
                  Drop 0{index + 1}
                </span>
                {product.status ? (
                  <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-paper">
                    sold out
                  </span>
                ) : null}
              </div>
              <div className="mt-5 border-t border-ink/20 pt-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-black uppercase leading-[.95] tracking-[-0.05em] sm:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-3 line-clamp-3 max-w-lg text-sm font-semibold leading-relaxed text-ink/70">
                      {product.description}
                    </p>
                    {product.options ? (
                      <p className="mt-3 text-[11px] font-black uppercase tracking-[0.22em] text-ink/65">
                        Sizes: {product.options.join(" / ")}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-2xl font-black tracking-[-0.06em]">
                    ${product.price}
                  </p>
                </div>
                <button
                  disabled={product.status === "sold out"}
                  onClick={() => onAdd(product)}
                  className="focus-ring mt-6 w-full rounded-full border border-ink/60 px-5 py-4 text-[11px] font-black uppercase tracking-[0.24em] transition enabled:hover:border-ink enabled:hover:bg-ink enabled:hover:text-paper disabled:cursor-not-allowed disabled:opacity-45"
                >
                  {product.status === "sold out" ? "Sold Out" : "Quick Add"}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniCart({
  open,
  items,
  onClose,
  onRemove,
}: {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
}) {
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close cart overlay"
            className="fixed inset-0 z-40 bg-ink/45 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-ink/20 bg-paper p-5 shadow-2xl sm:p-7"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.45 }}
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-ink/20 pb-5">
              <h2 className="display-type text-6xl leading-none">Cart</h2>
              <button
                onClick={onClose}
                className="focus-ring rounded-full border border-ink/60 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] transition hover:bg-ink hover:text-paper"
              >
                Close
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              {items.length === 0 ? (
                <p className="text-lg font-semibold leading-relaxed tracking-[-0.02em]">
                  Cart is empty. Add beans, hats, totes, or a shirt.
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="mb-4 border border-ink/20 p-4 transition hover:border-ink/60"
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-black uppercase leading-tight tracking-[-0.04em]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-ink/60">
                          Qty {item.quantity}
                        </p>
                      </div>
                      <p className="font-black">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="mt-4 text-[11px] font-black uppercase tracking-[0.22em] text-magenta"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-ink/20 pt-5">
              <div className="mb-5 flex justify-between text-2xl font-black uppercase tracking-[-0.05em]">
                <span>Total</span>
                <span>${total}</span>
              </div>
              <button className="focus-ring w-full rounded-full bg-ink px-5 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-paper transition hover:bg-magenta">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-ink px-4 py-12 text-paper sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo className="text-6xl text-paper" />
          <p className="mt-3 text-[11px] font-black uppercase tracking-[0.28em] text-paper/65">
            ©Idlewild Coffee 2026
          </p>
        </div>
        <a
          className="focus-ring text-sm font-black uppercase tracking-[0.22em] underline decoration-magenta decoration-4 underline-offset-8"
          href="mailto:support@idlewildcoffee.com"
        >
          support@idlewildcoffee.com
        </a>
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
      document
        .getElementById("top")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function addToCart(product: Product) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing)
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      return [...current, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }

  return (
    <>
      <AnimatePresence>
        {!entered && <Intro onEnter={enterSite} />}
      </AnimatePresence>
      <Header
        cartCount={items.reduce((sum, item) => sum + item.quantity, 0)}
        onCart={() => setCartOpen(true)}
      />
      <main>
        <Hero />
        <Locations />
        <CoffeeMenu />
        <Merch onAdd={addToCart} />
      </main>
      <Footer />
      <MiniCart
        open={cartOpen}
        items={items}
        onClose={() => setCartOpen(false)}
        onRemove={(id) =>
          setItems((current) => current.filter((item) => item.id !== id))
        }
      />
    </>
  );
}
