"use client";

import { useMemo, useState } from "react";

type Level = "Beginner" | "Intermediate" | "Advanced";
type Shift = "6-8AM" | "1-3PM" | "7-9PM";
type Course = "Chinese" | "English" | "Japanese" | "Korean" | "Loksewa";

export default function BookingForm() {
  // ✅ Formspree URL (CONNECTED)
  const FORMSPREE_URL = "https://formspree.io/f/mjgvdpzw";

  const whatsappBase = "https://wa.me/9779848961392";

  const [course, setCourse] = useState<Course>("Chinese");
  const [shift, setShift] = useState<Shift>("6–8AM");
  const [studentName, setStudentName] = useState("");
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState<Level>("Beginner");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const whatsappMsg = useMemo(() => {
    return `Hi NextStep Learning Academy! I want to BOOK a class.

Course: ${course}
Shift: ${shift}
Student Name: ${studentName || "-"}
Nationality: ${nationality || "-"}
Level: ${level}
Contact Number: ${phone || "-"}
Purpose: ${purpose || "-"}

Please confirm the next batch start date and how to pay.`;
  }, [course, shift, studentName, nationality, level, phone, purpose]);

  const whatsappLink = useMemo(() => {
    return `${whatsappBase}?text=${encodeURIComponent(whatsappMsg)}`;
  }, [whatsappBase, whatsappMsg]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!studentName.trim() || !nationality.trim()) {
      alert("Please fill Student Name and Nationality.");
      return;
    }

    setStatus("sending");

    try {
      const payload = {
        course,
        shift,
        studentName,
        nationality,
        phone,
        level,
        purpose,
      };

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="book" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Book a Class</h2>

        <form
          onSubmit={onSubmit}
          className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <select className="p-3 border rounded-xl" value={course} onChange={(e) => setCourse(e.target.value as Course)}>
              <option>Chinese</option>
              <option>English</option>
              <option>Japanese</option>
              <option>Korean</option>
              <option>Loksewa</option>
            </select>

            <select className="p-3 border rounded-xl" value={shift} onChange={(e) => setShift(e.target.value as Shift)}>
              <option>6-8AM</option>
              <option>1-3PM</option>
              <option>7-9PM</option>
            </select>

            <input className="p-3 border rounded-xl" placeholder="Student Name *" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            <input className="p-3 border rounded-xl" placeholder="Nationality *" value={nationality} onChange={(e) => setNationality(e.target.value)} />
            <input className="p-3 border rounded-xl" placeholder="Contact Number (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <select className="p-3 border rounded-xl" value={level} onChange={(e) => setLevel(e.target.value as Level)}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <textarea className="p-3 border rounded-xl" rows={3} placeholder="Purpose (optional)" value={purpose} onChange={(e) => setPurpose(e.target.value)} />

          <button className="rounded-xl bg-blue-600 p-3 text-white">
            Submit Booking (Email)
          </button>

          <a href={whatsappLink} target="_blank" className="text-center underline">
            Book via WhatsApp
          </a>

          {status === "sent" && <p className="text-green-700">✅ Booking submitted!</p>}
          {status === "error" && <p className="text-red-600">❌ Error, try WhatsApp</p>}
        </form>
      </div>
    </section>
  );
}
