# VEIL: THE LAST SIGNAL — Browser Edition

The entire VEIL game in the browser. No downloads, no gigabytes — one page, the universe does the rest. A 3D action RPG built on Three.js: an abandoned megastructure, an ancient signal, hostile machines holding the districts for four factions — VOID, SCAVENGER, GUARDIAN, REMNANT.

**Play it:** https://tyofthestars11-lab.github.io/veil-browser/

**Install it as an app:** open the link in Chrome (phone or desktop), menu → **Install app** / **Add to Home screen**. Full screen, landscape, works offline after the first load.

## The campaign — three sectors, the whole game

| Sector | District | Drones | Drone speed | Drone HP |
|---|---|---|---|---|
| 1 | THE HUB | 3 | 5.2 | 68 |
| 2 | THE NEST | 5 | 6.4 | 88 |
| 3 | THE SPIRE | 8 | 7.6 | 110 |

Drone counts climb the Fibonacci ladder: fib(3)=3, fib(4)=5, fib(5)=8. Each sector: recover **3 signal fragments** and the **golden artifact** (signal 25% each), reach the spire to wake the **final wave**, clear it, and **touch the beacon** to seal the sector.

The world is built by φ: terraces at 90, 90/φ, 90/φ²; pillars planted at the golden angle (222.4922° in Tyree's read); the spire stacked in φ-scaled tiers.

## Controls

| Action | Keyboard / mouse | Touch |
|---|---|---|
| Move | WASD / arrows | Left stick |
| Look | Mouse (click to lock) | Drag right side |
| Fire | Click / F (hold on touch FIRE) | FIRE button |
| Sprint | SHIFT | — |
| Hop | SPACE | HOP button |
| GODMODE | G | GOD button |

**GODMODE**: invincible, damage × φ², fire rate up, kills pay gold × φ.

## Tech

Single `index.html` + Three.js (CDN), procedural everything — no asset downloads, no build step. Seeded per-sector layouts (mulberry32), faction-colored drone AI (patrol / chase / zap), hitscan beam combat, particle bursts, PWA manifest + service worker.

*By Tyree Jones (tyofthestarz). VEIL is Tyree's original world — the Unreal prototype lives on his PC; this is the whole game, everywhere. All free, all phi.*
