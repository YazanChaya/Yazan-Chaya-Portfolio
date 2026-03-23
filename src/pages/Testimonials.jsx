import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const testimonials = [
  {
    quote: "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote: "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span data-aos="fade-down"
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            What People Say
          </span>
          <h2 data-aos="fade-down" data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">amazing people.</span>
          </h2>
        </div>

        {/* Swiper */}
        <div data-aos="zoom-in" data-aos-delay="200" className="max-w-2xl mx-auto testimonials-swiper-wrap">
          <Swiper
            effect="creative"
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            creativeEffect={{
              prev: { shadow: true, translate: ["-120%", 0, -500], rotate: [0, 0, -15] },
              next: { shadow: true, translate: ["120%", 0, -500], rotate: [0, 0, 15] },
            }}
            modules={[EffectCreative, Pagination, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="glass rounded-3xl p-8 md:p-10 glow-border relative overflow-hidden">
                  {/* Background quote decoration */}
                  <LuQuote className="absolute -top-2 -left-2 w-24 h-24 text-primary/5" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <FaStar key={s} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-6">
                    <LuQuote className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90 mb-8">
                    "{t.quote}"
                  </blockquote>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-primary/40 mb-6" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={t.avatar} alt={t.author}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30" />
                      <div className="absolute inset-0 rounded-full ring-2 ring-primary/10 scale-110" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t.author}</div>
                      <div className="text-sm text-primary">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
