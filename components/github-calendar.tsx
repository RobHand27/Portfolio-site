"use client"
import { useEffect, useState } from "react"

interface ContribDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface Week { days: ContribDay[] }

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const COLORS: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "rgba(160,200,255,0.07)",
  1: "rgba(25,80,185,0.55)",
  2: "rgba(35,110,220,0.72)",
  3: "rgba(50,145,250,0.88)",
  4: "rgba(80,175,255,1)",
}

function toWeeks(days: ContribDay[]): Week[] {
  const out: Week[] = []
  for (let i = 0; i < days.length; i += 7) out.push({ days: days.slice(i, i + 7) })
  return out
}

function monthLabels(weeks: Week[]) {
  const out: { label: string; col: number }[] = []
  let last = -1
  weeks.forEach((w, i) => {
    if (!w.days[0]) return
    const m = new Date(w.days[0].date + "T00:00:00").getMonth()
    if (m !== last) { out.push({ label: MONTHS[m], col: i }); last = m }
  })
  return out
}

export default function GitHubCalendar({ username }: { username: string }) {
  const [weeks, setWeeks] = useState<Week[]>([])
  const [total, setTotal] = useState(0)
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading")
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(r => { if (!r.ok) throw 0; return r.json() })
      .then(data => {
        const days: ContribDay[] = (data.contributions as { date: string; count: number; level: number }[])
          .map(d => ({ date: d.date, count: d.count, level: Math.min(d.level, 4) as 0|1|2|3|4 }))
        setTotal(days.reduce((s, d) => s + d.count, 0))
        setWeeks(toWeeks(days))
        setStatus("ok")
      })
      .catch(() => setStatus("error"))
  }, [username])

  const C = 12, G = 3
  const labels = monthLabels(weeks)
  const W = weeks.length * (C + G)
  const H = 7 * (C + G)

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(110,180,255,0.65)" }}>
          GitHub Activity
        </p>
        {status === "ok" && (
          <p className="text-xs" style={{ color: "rgba(170,210,255,0.45)" }}>
            {total.toLocaleString()} contributions in the last year
          </p>
        )}
      </div>

      {status === "loading" && (
        <div className="flex justify-center py-8">
          <div className="w-5 h-5 rounded-full border-2 animate-spin" style={{ borderColor: "rgba(100,170,255,0.25)", borderTopColor: "rgba(60,145,255,0.9)" }} />
        </div>
      )}

      {status === "error" && (
        <p className="text-center text-xs py-4" style={{ color: "rgba(170,210,255,0.3)" }}>
          Contributions unavailable.
        </p>
      )}

      {status === "ok" && (
        <div className="overflow-x-auto pb-1">
          <div className="relative mb-1.5" style={{ minWidth: W, height: 14 }}>
            {labels.map(({ label, col }) => (
              <span key={`${label}-${col}`} className="absolute text-[10px]" style={{ left: col * (C + G), color: "rgba(170,210,255,0.38)", lineHeight: 1 }}>{label}</span>
            ))}
          </div>
          <svg width={W} height={H} style={{ display: "block", overflow: "visible" }}>
            {weeks.map((week, wi) =>
              week.days.map((day, di) => (
                <rect
                  key={day.date}
                  x={wi * (C + G)}
                  y={di * (C + G)}
                  width={C}
                  height={C}
                  rx={2}
                  fill={COLORS[day.level]}
                  className="gh-cal-cell"
                  onMouseEnter={e => {
                    const r = (e.target as SVGRectElement).getBoundingClientRect()
                    const n = day.count
                    setTip({
                      text: `${n === 0 ? "No" : n} contribution${n !== 1 ? "s" : ""} on ${day.date}`,
                      x: r.left + r.width / 2,
                      y: r.top - 6,
                    })
                  }}
                  onMouseLeave={() => setTip(null)}
                />
              ))
            )}
          </svg>
          <div className="flex items-center gap-1.5 justify-end mt-3">
            <span className="text-[10px]" style={{ color: "rgba(170,210,255,0.35)" }}>Less</span>
            {([0,1,2,3,4] as const).map(l => (
              <span key={l} style={{ display: "inline-block", width: 10, height: 10, borderRadius: 2, flexShrink: 0, background: COLORS[l], border: "1px solid rgba(160,200,255,0.08)" }} />
            ))}
            <span className="text-[10px]" style={{ color: "rgba(170,210,255,0.35)" }}>More</span>
          </div>
        </div>
      )}

      {tip && (
        <div className="fixed z-[100] px-2.5 py-1.5 text-[11px] rounded-lg pointer-events-none" style={{ left: tip.x, top: tip.y, transform: "translate(-50%,-100%)", background: "rgba(4,10,28,0.96)", border: "1px solid rgba(120,185,255,0.12)", color: "rgba(210,235,255,0.9)", backdropFilter: "blur(12px)", whiteSpace: "nowrap" }}>
          {tip.text}
        </div>
      )}
    </div>
  )
}
