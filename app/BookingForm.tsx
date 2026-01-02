"use client";

import { useMemo, useState } from "react";

type Level = "Beginner" | "Intermediate" | "Advanced";
type Shift = "6-8AM" | "1-3PM" | "7-9PM";
type Course = "Chinese" | "English" | "Japanese" | "Korean" | "Loksewa";

export default function BookingForm() {
  const FORMSPREE_URL = "https://formspree.io/f/mjgvdpzw";
  const whatsappBase = "https://wa.me/9779848961392";

  const courseOptions: {
    id: Course;
    label: string;
    sub?: string;
    style: string;
  }[] = [
    { id: "Chinese", label: "Chinese", sub: "中文", style: "bg-red-50 text-red-700 border-red-200" },
    { id: "English", label: "English", style: "bg-blue-50 text-blue-700 border-blue-200" },
    { id: "Japanese", label: "Japanese", sub: "日本語", style: "bg-white text-slate-900 border-slate-200" },
    { id: "Korean", label: "Korean", sub: "한국어", style: "bg-sky-50 text-sky-700 border-sky-200" },
    { id: "Loksewa", label: "Loksewa", style: "bg-slate-50 text-slate-700 border-slate-200" },
  ];

  const [course, setCourse] = useState<Course>("Chinese");
  const [shift, setShift] = useState<Shift>("6-8AM");
  const [studentName, setStudentName] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState<Level>("Beginner");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const whatsappMsg = useMemo(() => {
    return `Hi NextStep Learning Academy! I want to BOOK a class.

Course: ${course}
Shift: ${shift}
Student Name: ${studentName}
Nationality: ${nationality}
Contact Number: ${phone}
Level: ${level}
Purpose: ${purpose || "-"}

Please confirm the next batch start date and payment details.`;
  }, [course, shift, studentName, nationality, phone, level, purpose]);

  const whatsappLink = `${whatsappBase}?text=${encodeURIComponent(whatsappMsg)}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!studentName.trim() || !nationality.trim() || !phone.trim()) {
      alert("Please fill Student Name, Nationality, and Contact Number.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          course,
          shift,
          studentName,
          nationality,
          phone,
          level,
          purpose,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="book" className="border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl font-bold">Book a Class</h2>
        <p className="mt-2 text-slate-600">
          Select language, preferred shift, and submit your details.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          {/* Language */}
          <div>
            <label className="text-sm font-semibold">Language / Course *</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {courseOptions.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCourse(c.id)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    c.style
                  } ${course === c.id ? "ring-2 ring-blue-500" : "hover:shadow-sm"}`}
                >
                  {c.label} {c.sub && <span className="ml-1 text-xs font-bold">({c.sub})</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Shift + Level */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Preferred Shift *</label>
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 p-3"
                value={shift}
                onChange={(e) => setShift(e.target.value as Shift)}
              >
                <option>6-8AM</option>
                <option>1-3PM</option>
                <option>7-9PM</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">Level *</label>
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 p-3"
                value={level}
                onChange={(e) => setLevel(e.target.value as Level)}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          {/* Personal Info */}
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-slate-200 p-3"
              placeholder="Student Name *"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
            <input
              className="rounded-xl border border-slate-200 p-3"
              placeholder="Nationality *"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            />
            <input
              className="rounded-xl border border-slate-200 p-3 md:col-span-2"
              placeholder="Contact Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Purpose */}
          <textarea
            className="w-full rounded-xl border border-slate-200 p-3"
            rows={3}
            placeholder="Purpose for study (optional)"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />

          {/* Actions */}
          <div className="flex flex-col gap-3 md:flex-row">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              {status === "sending" ? "Submitting..." : "Submit Booking (Email)"}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Book via WhatsApp
            </a>
          </div>

          {status === "sent" && (
            <p className="text-sm font-semibold text-green-700">
              ✅ Booking submitted! We’ll contact you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-semibold text-red-600">
              ❌ Something went wrong. Please use WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
