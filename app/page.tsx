export default function Home() {
  const whatsappBase = "https://wa.me/9779848961392";
  const whatsappMsg =
    "Hi NextStep Learning Academy! I want to join the Chinese Basic 45-day course. Please share the next batch start date.";
  const whatsappLink = `${whatsappBase}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-blue-600" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">NextStep</div>
              <div className="text-xs text-slate-500">Learning Academy</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#courses" className="hover:text-slate-900">
              Courses
            </a>
            <a href="#teachers" className="hover:text-slate-900">
              Teachers
            </a>
            <a href="#translation" className="hover:text-slate-900">
              Translation
            </a>
            <a href="#payments" className="hover:text-slate-900">
              Payments
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>

          <a
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Online & Offline • Butwal, Rupandehi, Nepal
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              NextStep Learning Academy
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              <span className="font-semibold text-slate-900">
                Your Next Step to Global Learning.
              </span>{" "}
              Learn Languages. Build Your Future.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Enroll on WhatsApp
              </a>
              <a
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href="#courses"
              >
                View Courses
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="font-semibold">Live Classes</div>
                <div className="text-slate-500">Zoom / Google Meet</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="font-semibold">Daily Learning</div>
                <div className="text-slate-500">2 hours • 1 day off/week</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="font-semibold">Shifts</div>
                <div className="text-slate-500">6–8AM • 1–3PM • 7–9PM</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="font-semibold">Support</div>
                <div className="text-slate-500">WhatsApp-first help</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">
                Featured Program
              </div>
              <div className="mt-2 text-2xl font-bold">Chinese Basic Course</div>
              <div className="mt-2 text-slate-600">
                45 days • Beginner-friendly • Online + Offline
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 p-4 text-sm">
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

              <a
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Join via WhatsApp
              </a>

              <p className="mt-3 text-center text-xs text-slate-500">
                Ask questions, confirm shift, and enroll directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Why Choose NextStep Learning Academy?</h2>
          <p className="mt-2 text-slate-600">
            Practical learning, clear guidance, and flexible study options — built for real students.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="font-semibold">Online & Offline Classes</div>
              <p className="mt-2 text-sm text-slate-600">
                Learn from anywhere online or attend offline classes in Butwal, Rupandehi.
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
              <div className="text-sm font-semibold text-slate-700">Coming Soon</div>
              <div className="mt-2 text-xl font-bold">HSK Preparation</div>
              <p className="mt-3 text-sm text-slate-600">
                Structured exam-focused training for HSK levels.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-slate-700">Coming Soon</div>
              <div className="mt-2 text-xl font-bold">More Languages & Skills</div>
              <p className="mt-3 text-sm text-slate-600">
                Japanese, Korean, English, Loksewa, Tuition, Computer classes and more.
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
                Step-by-step learning: basics, grammar clarity, and guided practice.
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
                <div className="text-lg font-semibold">Send your document on WhatsApp</div>
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
              <p className="mt-3 text-sm text-slate-600">Fast & simple payment.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">Nepal</div>
              <div className="mt-2 text-xl font-bold">Khalti</div>
              <p className="mt-3 text-sm text-slate-600">Pay securely anytime.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold text-blue-700">Bank / USD</div>
              <div className="mt-2 text-xl font-bold">Bank Transfer / USD</div>
              <p className="mt-3 text-sm text-slate-600">
                USD accepted (converted at current rate + 25% for tax/fees).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-slate-50/40">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-600">WhatsApp is the fastest way to reach us.</p>

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
            © {new Date().getFullYear()} NextStep Learning Academy. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
import BookingForm from "./BookingForm";
<BookingForm />
