import React, { useMemo, useState } from "react";
import "../interfaceSettings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ---------- Helpers ---------- */
function getMonthMatrix(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekday = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

const monthLabel = (date) =>
  date.toLocaleString(undefined, { month: "long", year: "numeric" });

function normalizeEvents(items) {
  return (items || []).map((it) =>
    typeof it === "string" ? { short: it, full: it } : it
  );
}

/* ---------- UI bits ---------- */
function EventChip({ event, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((o) => !o);
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const shortText = event.short ?? event.title ?? String(event);
  const fullText = event.full ?? shortText;

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // don’t trigger date click
    if (onDelete) onDelete();
  };

  return (
    <div
      className="event-chip"
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={onKey}
      title={shortText !== fullText ? "" : shortText}
    >
      {/* delete button in corner */}
      {onDelete && (
        <button
          type="button"
          onClick={handleDeleteClick}
          className="btn btn-sm"
          style={{
            position: "absolute",
            top: 2,
            right: 4,
            padding: "0 4px",
            lineHeight: 1,
            border: "none",
            background: "transparent",
            fontSize: "0.75rem",
          }}
          aria-label="Delete event"
        >
          ✕
        </button>
      )}

      <span className="event-short">{shortText}</span>
      <div
        className={`event-popover ${open ? "show" : ""}`}
        role="dialog"
        aria-label="Event details"
      >
        {fullText}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function CalendarPage() {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );

  // events keyed by YYYY-MM-DD
  const [eventsByDate, setEventsByDate] = useState({
    // Example initial events (today):
    [`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`]: [
      {
        short: "Career Fair",
        full: "Career Fair — 5–8 PM @ GGC Student Center. Bring resumes; dress business casual.",
      },
      "Board Mtg (Zoom)",
    ],
  });

  // which date is selected for adding events
  const [selectedDateKey, setSelectedDateKey] = useState(null);
  const [selectedDateLabel, setSelectedDateLabel] = useState("");
  const [newEventShort, setNewEventShort] = useState("");
  const [newEventFull, setNewEventFull] = useState("");

  const weeks = useMemo(
    () => getMonthMatrix(cursor.getFullYear(), cursor.getMonth()),
    [cursor]
  );

  const addMonths = (delta) =>
    setCursor(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1)
    );

  const isToday = (d) =>
    d &&
    today.getFullYear() === cursor.getFullYear() &&
    today.getMonth() === cursor.getMonth() &&
    today.getDate() === d;

  const keyFor = (d) =>
    d
      ? `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d).padStart(2, "0")}`
      : "";

  const handleDateClick = (d) => {
    if (!d) return;
    const key = keyFor(d);
    setSelectedDateKey(key);

    const asDate = new Date(cursor.getFullYear(), cursor.getMonth(), d);
    setSelectedDateLabel(
      asDate.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );

    // reset form
    setNewEventShort("");
    setNewEventFull("");
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!selectedDateKey || !newEventShort.trim()) return;

    setEventsByDate((prev) => {
      const existing = prev[selectedDateKey] || [];
      const nextEvent = {
        short: newEventShort.trim(),
        full: newEventFull.trim() || newEventShort.trim(),
      };
      return {
        ...prev,
        [selectedDateKey]: [...existing, nextEvent],
      };
    });

    setNewEventShort("");
    setNewEventFull("");
  };

  const handleDeleteEvent = (dateKey, index) => {
    setEventsByDate((prev) => {
      const existing = prev[dateKey] || [];
      const updated = existing.filter((_, i) => i !== index);
      const next = { ...prev };
      if (updated.length > 0) {
        next[dateKey] = updated;
      } else {
        delete next[dateKey];
      }
      return next;
    });
  };

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      {/* ===== Nav Bar (Bootstrap) ===== */}
<nav className="navbar navbar-expand-lg bg-light sub-nav">
  <div className="container-fluid">

    {/* Logo */}
    <a className="navbar-brand" href="/">
      <img
        src="/images/logo.png"
        alt="SHPE Georgia Logo"
        className="logo-img"
      />
    </a>

    {/* Mobile Toggle / Hamburger */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSHPE"
      aria-controls="navbarSHPE"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible Nav Links */}
    <div className="collapse navbar-collapse" id="navbarSHPE">
      <ul className="navbar-nav ms-auto align-items-center gap-2">

        <li className="nav-item">
          <a href="/" className="nav-link btn-home">Home</a>
        </li>

        <li className="nav-item">
          <a href="/about" className="nav-link btn-home">About</a>
        </li>

        <li className="nav-item">
          <a href="/ourteam" className="nav-link btn-home">OurTeam</a>
        </li>

        <li className="nav-item">
          <a href="/membershpe" className="nav-link btn-home">MemberShpe</a>
        </li>

        <li className="nav-item">
          <a href="/calendar" className="nav-link btn-home">Calendar</a>
        </li>

        <li className="nav-item">
          <a href="/resources" className="nav-link btn-home">Resources</a>
        </li>

        <li className="nav-item">
          <a href="/login" className="nav-link btn-home">Login</a>
        </li>

      </ul>
    </div>

  </div>
</nav>

{/* Thin Bar */}
<div className="thin-bar" role="presentation"></div>


      {/* ===== Main Calendar Section ===== */}
      <main className="container calendar-container flex-grow-1 mt-4 mb-4">
        <div className="calendar shadow-sm">
          {/* Header: title + centered controls */}
          <div className="calendar-header calendar-header--centered">
            <div className="month-title">{monthLabel(cursor)}</div>

            <div className="controls-center">
              <button className="cal-btn" onClick={() => addMonths(-1)}>
                ‹ Prev
              </button>
              <button
                className="cal-btn"
                onClick={() =>
                  setCursor(
                    new Date(today.getFullYear(), today.getMonth(), 1)
                  )
                }
              >
                Today
              </button>
              <button className="cal-btn" onClick={() => addMonths(1)}>
                Next ›
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="calendar-grid">
            {WEEKDAYS.map((w) => (
              <div key={w} className="day-label">
                {w}
              </div>
            ))}

            {weeks.map((week, i) => (
              <React.Fragment key={i}>
                {week.map((d, j) => {
                  const dateKey = keyFor(d);
                  const items = d ? eventsByDate[dateKey] || [] : [];
                  return (
                    <div
                      key={`${i}-${j}`}
                      className={[
                        "date-cell",
                        !d ? "empty" : "",
                        isToday(d) ? "today" : "",
                      ]
                        .join(" ")
                        .trim()}
                      title={d ? `${d} ${monthLabel(cursor)}` : ""}
                      onClick={() => handleDateClick(d)}
                    >
                      {d && <span className="date-number">{d}</span>}
                      {d && (
                        <div className="events">
                          {items.length === 0 ? (
                            <span className="no-events">—</span>
                          ) : (
                            normalizeEvents(items).map((ev, idx) => (
                              <EventChip
                                key={idx}
                                event={ev}
                                onDelete={() =>
                                  handleDeleteEvent(dateKey, idx)
                                }
                              />
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ===== Add / Remove Events Panel ===== */}
        {selectedDateKey && (
          <section className="mt-4 p-3 bg-light rounded">
            <h5 className="mb-3">
              Manage events for{" "}
              <span style={{ fontWeight: 600 }}>{selectedDateLabel}</span>
            </h5>
            <form
              className="row g-3 align-items-end"
              onSubmit={handleAddEvent}
            >
              <div className="col-md-4">
                <label className="form-label">Short title</label>
                <input
                  type="text"
                  className="form-control"
                  value={newEventShort}
                  onChange={(e) => setNewEventShort(e.target.value)}
                  placeholder="Ex: SHPE Social"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  Full description (optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={newEventFull}
                  onChange={(e) => setNewEventFull(e.target.value)}
                  placeholder="Details shown on hover / click"
                />
              </div>
              <div className="col-md-2 d-grid">
                <button type="submit" className="btn btn-primary">
                  Add Event
                </button>
              </div>
            </form>
          </section>
        )}
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer py-4 mt-auto">
        <div className="container text-center">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/shpegeorgia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/shpe-georgia-professional-chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/gtshpe/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/user/SHPENational"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} SHPE Georgia Professional. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
