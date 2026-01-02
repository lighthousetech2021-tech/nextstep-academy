import BookingForm from "./BookingForm";

export default function Home() {
  const whatsappBase = "https://wa.me/9779848961392";
  const whatsappMsg =
    "Hi NextStep Learning Academy! I want to join the Chinese Basic 45-day course. Please share the next batch start date.";
  const whatsappLink = `${whatsappBase}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      
      {/* Hero */}
<section className="relative overflow-hidden">
  {/* background gradient blobs */}
  <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-indigo-500/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-sky-500/15 blur-3xl" />

  <div className="mx-auto max-w-6xl px-4 py-14">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      {/* Left */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Online & Offline • Butwal, Rupandehi, Nepal
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Learn Smarter.
          <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Speak Confidently.
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
          <span className="font-semibold text-slate-900">
            NextStep Learning Academy
          </span>{" "}
          helps students build language confidence with daily practice, clear
          guidance, and flexible shifts.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#book"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Book a Class
          </a>

          <a
            href="#courses"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            View Courses
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100"
          >
            WhatsApp Enquiry
          </a>
        </div>

        {/* Quick trust/info */}
        <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-700 md:max-w-xl">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
            <div className="font-semibold">Live Classes</div>
            <div className="text-slate-500">Zoom / Google Meet</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
            <div className="font-semibold">Daily Learning</div>
            <div className="text-slate-500">2 hours • 1 day off/week</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
            <div className="font-semibold">Flexible Shifts</div>
            <div className="text-slate-500">6–8AM • 1–3PM • 7–9PM</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
            <div className="font-semibold">Fast Support</div>
            <div className="text-slate-500">WhatsApp-first help</div>
          </div>
        </div>
      </div>

      {/* Right: Featured card */}
      <div className="relative">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur">
          <div className="rounded-2xl bg-white p-6">
            <div className="text-sm font-semibold text-blue-700">
              Featured Program
            </div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900">
              Chinese Basic Course
            </div>
            <div className="mt-2 text-slate-600">
              45 days • Beginner-friendly • Online + Offline
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Price</span>
                <span className="font-semibold">NPR 15,000</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-slate-500">Schedule</span>
                <span className="font-semibold">Daily 2 hours</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-slate-500">Weekly off</span>
                <span className="font-semibold">1 day</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href="#book"
                className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Book This Course
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Ask on WhatsApp
              </a>
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">
              We’ll confirm next batch start date after booking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">
            Why Choose NextStep Learning Academy?
          </h2>
          <p className="mt-2 text-slate-600">
            Practical learning, clear guidance, and flexible study options —
            built for real students.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="font-semibold">Online & Offline Classes</div>
              <p className="mt-2 text-sm text-slate-600">
                Learn from anywhere online or attend offline classes in Butwal,
                Rupandehi.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="font-semibold">Experienced Teachers</div>
              <p className="mt-2 text-sm text-slate-600">
                Learn Chinese with structured guidance from Mayi and Mahan.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="font-semibold">Daily Practice Focus</div>
              <p className="mt-2 text-sm text-slate-600">
                2 hours of daily learning with regular speaking and revision.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="font-semibold">WhatsApp Support</div>
              <p className="mt-2 text-sm text-slate-600">
                Quick guidance, class updates, and support directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="border-t bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Courses</h2>
          <p className="mt-2 text-slate-600">
            Start with Chinese — more languages & skills coming soon.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">
                Chinese (Beginner)
              </div>
              <div className="mt-2 text-xl font-bold">Chinese Basic Course</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• 45 days</li>
                <li>• Daily 2 hours (1 day off/week)</li>
                <li>• Shifts: 6–8AM, 1–3PM, 7–9PM</li>
                <li>• Online (Zoom/Meet) + Offline (Butwal)</li>
              </ul>
              <div className="mt-4 text-sm">
                <span className="text-slate-500">Price: </span>
                <span className="font-semibold">NPR 15,000</span>
              </div>
              <a
                className="mt-5 inline-flex w-full justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Enroll on WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-700">
                Coming Soon
              </div>
              <div className="mt-2 text-xl font-bold">HSK Preparation</div>
              <p className="mt-3 text-sm text-slate-600">
                Structured exam-focused training for HSK levels.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-700">
                Coming Soon
              </div>
              <div className="mt-2 text-xl font-bold">More Languages & Skills</div>
              <p className="mt-3 text-sm text-slate-600">
                Japanese, Korean, English, Loksewa, Tuition, Computer classes and
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Teachers</h2>
          <p className="mt-2 text-slate-600">
            Learn with friendly guidance and clear structure.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">Teacher</div>
              <div className="mt-2 text-xl font-bold">Mayi</div>
              <p className="mt-3 text-sm text-slate-600">
                Focus on practical speaking, daily vocabulary, and confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">Teacher</div>
              <div className="mt-2 text-xl font-bold">Mahendra Dhakal</div>
              <p className="mt-3 text-sm text-slate-600">
                Step-by-step learning: basics, grammar clarity, and guided
                practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Translation */}
      <section id="translation" className="border-t bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Translation Services</h2>
          <p className="mt-2 text-slate-600">
            Chinese ⇄ English / Hindi / Nepali. Rate: Ask on WhatsApp.
          </p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">
                  Send your document on WhatsApp
                </div>
                <div className="text-sm text-slate-600">
                  We’ll review and reply with timeline + price.
                </div>
              </div>
              <a
                className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payments */}
      <section id="payments" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Payments</h2>
          <p className="mt-2 text-slate-600">
            Easy payments for Nepal & international students.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">Nepal</div>
              <div className="mt-2 text-xl font-bold">eSewa</div>
              <p className="mt-3 text-sm text-slate-600">
                Fast & simple payment.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">Nepal</div>
              <div className="mt-2 text-xl font-bold">Khalti</div>
              <p className="mt-3 text-sm text-slate-600">
                Pay securely anytime.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">
                Bank / USD
              </div>
              <div className="mt-2 text-xl font-bold">Bank Transfer / USD</div>
              <p className="mt-3 text-sm text-slate-600">
                USD accepted (converted at current rate + 25% for tax/fees).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Book Class Section (inserted in correct place) */}
      <BookingForm />

      {/* Contact */}
      <section id="contact" className="border-t bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">
            WhatsApp is the fastest way to reach us.
          </p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-700">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-slate-500">+977 9848961392</div>
                <div className="mt-3 font-semibold">Location</div>
                <div className="text-slate-500">Butwal, Rupandehi, Nepal</div>
              </div>
              <a
                className="inline-flex justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} NextStep Learning Academy. All rights
            reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
