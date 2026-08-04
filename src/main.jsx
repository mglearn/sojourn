import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  Compass,
  ExternalLink,
  Headphones,
  Lightbulb,
  LockKeyhole,
  Map,
  Pause,
  Play,
  Printer,
  RotateCcw,
  Settings,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import "./styles.css";
import { languages, levelText, ui } from "./i18n";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const levels = [
  {
    year: "1848",
    short: "Declaration Hall",
    title: "A Declaration Takes Shape",
    place: "Seneca Falls, New York",
    artifact: "Voice Badge",
    mark: "✦",
    color: "#d69a4a",
    image: asset("evidence-1848.webp"),
    alt: "A hand-colored engraving of an 1848 convention assembly listening to a woman read at a lectern",
    intro:
      "Inside this meeting hall, ordinary people are doing something extraordinary: naming injustice in public. Gather the evidence they used to make their case.",
    facts: [
      {
        tag: "PRIMARY SOURCE",
        title: "Declaration of Sentiments",
        text: "“We hold these truths to be self-evident: that all men and women are created equal.”",
        note: "The writers deliberately echoed the Declaration of Independence to connect women’s rights to the nation’s founding ideals.",
      },
      {
        tag: "THE DEMAND",
        title: "The Elective Franchise",
        text: "The document listed grievances, then resolved that women had “the sacred right to the elective franchise.”",
        note: "The vote was controversial—even among reformers—but Frederick Douglass argued strongly for the resolution.",
      },
      {
        tag: "THE COALITION",
        title: "Signatures & Support",
        text: "Sixty-eight women and thirty-two men signed the declaration after two days of discussion.",
        note: "Signing made a private conviction into a public commitment.",
      },
    ],
    question:
      "Which evidence best supports the claim that the convention connected voting rights to American founding ideals?",
    answers: [
      "The meeting lasted two days.",
      "The declaration echoed the words “self-evident” and “created equal.”",
      "One hundred people signed the document.",
    ],
    correct: 1,
    hint: "Look for language borrowed from a famous founding document.",
    explain:
      "The deliberate echo of the Declaration of Independence argued that its promise of equality should include women.",
  },
  {
    year: "1851–1896",
    short: "Coalition Crossroads",
    title: "Many Voices, Shared Work",
    place: "Lecterns, presses & club halls",
    artifact: "Coalition Key",
    mark: "⌘",
    color: "#b96452",
    image: asset("evidence-coalition.webp"),
    alt: "A hand-colored engraving of a diverse coalition speaking, printing newspapers, and organizing petitions",
    intro:
      "A movement grows through speeches, newspapers, conventions, clubs, and petitions. Different leaders bring different experiences—and do not always agree.",
    facts: [
      {
        tag: "VOICE",
        title: "Sojourner Truth",
        text: "Born enslaved in New York, Truth became a powerful speaker for abolition and women’s rights.",
        note: "Her 1851 Akron speech survives in differing versions, a reminder to ask who recorded a source and when.",
      },
      {
        tag: "PRESS",
        title: "Frances E. W. Harper",
        text: "Writer and lecturer Harper insisted that race, gender, and economic justice could not be separated.",
        note: "In 1866 she told reformers, “We are all bound up together.”",
      },
      {
        tag: "CLUBS",
        title: "Mary Church Terrell",
        text: "Terrell helped found the National Association of Colored Women, whose motto was “Lifting as we climb.”",
        note: "Black women’s clubs organized for suffrage while confronting racism inside and outside the movement.",
      },
    ],
    question:
      "A coalition wants to reach people excluded from major conventions. Which plan uses the widest range of movement strategies?",
    answers: [
      "Wait for one famous leader to speak.",
      "Publish a newspaper, build local clubs, host speakers, and circulate petitions.",
      "Focus only on persuading national lawmakers.",
    ],
    correct: 1,
    hint: "Coalitions grow through many channels and local relationships.",
    explain:
      "Print, clubs, speaking tours, and petitions let organizers reach distinct communities and build durable networks.",
  },
  {
    year: "1869–1918",
    short: "State Strategy Trail",
    title: "Many Roads to the Ballot",
    place: "From Wyoming to Texas",
    artifact: "State Star",
    mark: "★",
    color: "#6f9a91",
    image: asset("evidence-states.webp"),
    alt: "A period engraving of women registering voters beside a western railway and courthouse",
    intro:
      "Before a federal amendment, organizers tested state strategies. The trail moved unevenly—sometimes forward, sometimes around a barrier.",
    facts: [
      {
        tag: "WESTERN VICTORY",
        title: "Wyoming Territory, 1869",
        text: "Wyoming granted women voting rights in 1869 and kept them when it became a state in 1890.",
        note: "Western victories created evidence that women’s voting worked in practice.",
      },
      {
        tag: "STATE CAMPAIGN",
        title: "Petitions & Referenda",
        text: "Organizers gathered signatures, lobbied lawmakers, and campaigned in statewide referenda.",
        note: "State-by-state work built local organizing skill, even when a referendum failed.",
      },
      {
        tag: "TEXAS",
        title: "Primary Suffrage, 1918",
        text: "Texas women won the right to vote in primary elections—if they registered at least 15 days before election day.",
        note: "Minnie Fisher Cunningham and thousands of volunteers organized a rapid registration drive.",
      },
    ],
    question:
      "A Texas organizer has only a few weeks before the 1918 primary. What should the campaign prioritize?",
    answers: [
      "Wait for the federal amendment.",
      "Run an immediate registration drive and clearly explain the 15-day deadline.",
      "Move the campaign to Wyoming.",
    ],
    correct: 1,
    hint: "A right on paper matters only if people can meet the access rules in time.",
    explain:
      "Texas organizers paired a legal victory with urgent local registration work so eligible women could actually cast ballots.",
  },
  {
    year: "1919–1920",
    short: "Ratification Run",
    title: "Thirty-Six States",
    place: "Congress to Tennessee",
    artifact: "19th Amendment Seal",
    mark: "◉",
    color: "#d49a56",
    image: asset("evidence-ratification.webp"),
    alt: "A hand-tinted newspaper engraving of organizers carrying letters and vote tallies through a state capitol",
    intro:
      "Congress has passed the amendment. Now three-fourths of the states must ratify it. Follow the constitutional path—then unlock Tennessee’s deciding vote.",
    facts: [
      {
        tag: "STEP 1",
        title: "Congress Proposes",
        text: "On June 4, 1919, the Senate joined the House in passing the proposed amendment.",
        note: "Proposal is not ratification. Congress sent the text to the states.",
      },
      {
        tag: "STEP 2",
        title: "States Decide",
        text: "By summer 1920, thirty-five states had ratified. One more was needed.",
        note: "Campaigners traveled, wrote letters, lobbied, and tracked votes across the country.",
      },
      {
        tag: "STEP 3",
        title: "Tennessee, 1920",
        text: "Tennessee became the 36th state to ratify on August 18. Certification followed on August 26.",
        note: "The state-house vote was extremely close. A constitutional milestone emerged from years of organizing.",
      },
    ],
    question: "Put the final constitutional steps in the correct order.",
    answers: [
      "Certification → state ratification → congressional proposal",
      "Congressional proposal → ratification by 36 states → certification",
      "State ratification → certification → congressional proposal",
    ],
    correct: 1,
    hint: "Congress proposes; states ratify; the federal government certifies.",
    explain:
      "The amendment moved from congressional proposal, to approval by three-fourths of the states, to federal certification.",
  },
  {
    year: "1920 & beyond",
    short: "Equality Gate",
    title: "A Milestone, Not an Ending",
    place: "The unfinished path",
    artifact: "Equality Torch",
    mark: "♨",
    color: "#cf7257",
    image: asset("evidence-equality.webp"),
    alt: "A period linocut of diverse citizens and organizers navigating registration barriers toward a polling place",
    intro:
      "The 19th Amendment barred voting discrimination based on sex. But other barriers still blocked many citizens. History asks us to hold progress and unfinished work together.",
    facts: [
      {
        tag: "BARRIER",
        title: "Citizenship Restrictions",
        text: "Many Native Americans were denied U.S. citizenship until 1924; discriminatory state laws continued afterward.",
        note: "Citizenship did not automatically guarantee access to registration or the ballot.",
      },
      {
        tag: "BARRIER",
        title: "Jim Crow & the White Primary",
        text: "Poll taxes, literacy tests, violence, and all-white primaries suppressed Black voting, especially in the South.",
        note: "Black activists challenged these systems for decades in courts, communities, and Congress.",
      },
      {
        tag: "RESPONSE",
        title: "Voting Rights Act, 1965",
        text: "The act gave the federal government stronger tools against racial discrimination in voting.",
        note: "Access has continued to change through laws, court decisions, organizing, and public participation.",
      },
    ],
    question: "Which conclusion is best supported by the evidence?",
    answers: [
      "The 19th Amendment immediately guaranteed every U.S. adult equal ballot access.",
      "The 19th Amendment was unimportant because barriers remained.",
      "The 19th Amendment was a major constitutional milestone, while citizenship and racial barriers left voting access unfinished.",
    ],
    correct: 2,
    hint: "Strong historical explanations can recognize both real change and real limits.",
    explain:
      "The amendment transformed the Constitution, but it did not erase barriers based on race, citizenship, or discriminatory administration.",
  },
];

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.92;
  speechSynthesis.speak(u);
}

function LessonPage({ onBack }) {
  return (
    <section className="lessonPage">
      <div className="lessonTop">
        <button className="back" onClick={onBack}>
          <ChevronLeft /> Back to teacher mode
        </button>
        <button className="printBtn" onClick={() => window.print()}>
          <Printer /> Print lesson
        </button>
      </div>
      <div className="lessonHero" id="ready-to-teach-investigation">
        <img
          src={asset("ace-framework-womens-equality.png")}
          alt="ACE Framework for Women’s Equality Day: Articulate, Connect, and Extend"
        />
        <div>
          <span className="eyebrow">READY-TO-TEACH INVESTIGATION</span>
          <h1>
            A Milestone,
            <br />
            <em>Not the Finish Line</em>
          </h1>
          <p>Women’s Equality Day · Voting rights, citizenship, and equality</p>
          <div className="lessonMeta">
            <span>GRADES 6–12</span>
            <span>50–60 MINUTES</span>
          </div>
        </div>
      </div>
      <article className="lessonBody">
        <section className="centralQuestion">
          <small>CENTRAL QUESTION</small>
          <h2>
            How did the 19th Amendment change voting rights, who helped make
            that change possible, and what barriers remained?
          </h2>
        </section>
        <h2 id="ace-framework">The ACE Framework</h2>
        <div className="aceGrid">
          <section>
            <b>A</b>
            <h3>Articulate</h3>
            <em>Surface learning</em>
            <p>
              Examine historical sources and record findings under{" "}
              <strong>What Changed</strong>, <strong>Who Made It Happen</strong>
              , and <strong>What Barriers Remained</strong>.
            </p>
            <h4>Guiding questions</h4>
            <ul>
              <li>What did the amendment prohibit?</li>
              <li>Who participated in the movement?</li>
              <li>What prevented some women from voting after 1920?</li>
            </ul>
            <small>
              Students summarize in their own words and cite at least one source
              in each column.
            </small>
          </section>
          <section>
            <b>C</b>
            <h3>Connect</h3>
            <em>Deep learning</em>
            <p>
              Explain how people, strategies, laws, and barriers influenced one
              another.
            </p>
            <h4>Guiding questions</h4>
            <ul>
              <li>How did organizing lead to constitutional change?</li>
              <li>Why did an amendment not guarantee equal access?</li>
              <li>How does Texas connect to the national movement?</li>
            </ul>
            <small>
              Students make a cause-and-effect connection using two or more
              sources.
            </small>
          </section>
          <section>
            <b>E</b>
            <h3>Extend</h3>
            <em>Transfer learning</em>
            <p>
              Apply the investigation to another civil-rights milestone or
              propose a historically appropriate “next chapter.”
            </p>
            <h4>Guiding questions</h4>
            <ul>
              <li>Which later action addressed a barrier left after 1920?</li>
              <li>Where else can we distinguish progress from completion?</li>
            </ul>
            <small>
              Students transfer the framework and develop a new evidence-based
              claim.
            </small>
          </section>
        </div>
        <section className="stems">
          <h2>Student sentence stems</h2>
          <div>
            <p>
              <b>Articulate</b> “The 19th Amendment changed ___ by ___.”
            </p>
            <p>
              <b>Connect</b> “The work of ___ contributed to this change because
              ___.”
            </p>
            <p>
              <b>Connect</b> “Although ___ changed, ___ remained a barrier
              because ___.”
            </p>
            <p>
              <b>Extend</b> “This pattern also appears in ___ because ___.”
            </p>
            <p>
              <b>Extend</b> “A question historians should investigate next is
              ___.”
            </p>
          </div>
        </section>
        <div className="lessonColumns">
          <section>
            <h2>Learning objectives</h2>
            <p>Students will:</p>
            <ul>
              <li>Explain the central purpose of the 19th Amendment.</li>
              <li>
                Identify people, organizations, and strategies that contributed
                to ratification.
              </li>
              <li>Analyze why voting barriers remained after 1920.</li>
              <li>Construct an evidence-supported historical claim.</li>
              <li>Apply ACE to a related civil-rights milestone.</li>
            </ul>
          </section>
          <section>
            <h2>TEKS connections</h2>
            <p>
              Constitutional principles, citizenship and voting rights; women’s
              suffrage and equal-rights movements; the 19th Amendment; source
              analysis; cause and effect; context; and evidence-based
              conclusions.
            </p>
            <p>
              <strong>Best fit:</strong> Grade 5 U.S. history, Grade 7 Texas
              history, Grade 8 U.S. history, and high school U.S. History.
            </p>
          </section>
        </div>
        <section>
          <h2>Materials</h2>
          <div className="materials">
            <span>Three-column organizer</span>
            <span>Text of the 19th Amendment</span>
            <span>Petition, poster, photograph, or news excerpt</span>
            <span>1918 Texas primary suffrage evidence</span>
            <span>Evidence of continuing voting barriers</span>
            <span>Highlighters or digital tools</span>
            <span>Exit ticket</span>
          </div>
        </section>
        <h2>Procedure</h2>
        <div className="procedure">
          <section>
            <span>01 · 5 MIN</span>
            <h3>Opening question</h3>
            <p>
              Display:{" "}
              <strong>
                “The 19th Amendment gave every woman an equal opportunity to
                vote.”
              </strong>
            </p>
            <p>
              Students mark it <b>accurate</b>, <b>partly accurate</b>, or{" "}
              <b>inaccurate</b> and explain. Do not correct responses yet.
            </p>
          </section>
          <section>
            <span>02 · 8 MIN</span>
            <h3>Historical context</h3>
            <p>
              Explain that Women’s Equality Day commemorates the August 26, 1920
              certification. The amendment prohibited denial based on sex, but
              did not remove every citizenship, racial, economic, or
              administrative barrier.
            </p>
          </section>
          <section>
            <span>03 · 15 MIN</span>
            <h3>Source investigation</h3>
            <p>
              For each source, students record: What does it show? Who created
              it or appears in it? Which organizer column does it help complete?
              What details support that conclusion? Then share.
            </p>
          </section>
          <section>
            <span>04 · 10 MIN</span>
            <h3>Complete the organizer</h3>
            <div className="organizer">
              <div>
                <b>What Changed</b>
                <p>Protection against denying voting rights because of sex</p>
              </div>
              <div>
                <b>Who Made It Happen</b>
                <p>
                  Activists, journalists, clubs, voters, legislators, and
                  ratification campaigns
                </p>
              </div>
              <div>
                <b>What Barriers Remained</b>
                <p>
                  Poll taxes, literacy tests, intimidation, citizenship
                  restrictions, discriminatory primaries, and unequal
                  enforcement
                </p>
              </div>
            </div>
            <p>
              Require specific names, events, and source evidence—not copied
              sample language.
            </p>
          </section>
          <section>
            <span>05 · 10 MIN</span>
            <h3>Connect the evidence</h3>
            <p>
              <strong>
                How can the 19th Amendment be both a major democratic
                achievement and an incomplete victory?
              </strong>
            </p>
            <p>
              A complete response includes a claim, evidence from at least two
              columns, and reasoning that connects it.
            </p>
          </section>
          <section>
            <span>06 · 7 MIN</span>
            <h3>Extend the investigation</h3>
            <p>
              Select a later milestone—the Indian Citizenship Act, end of the
              white primary, or Voting Rights Act—and ask:{" "}
              <strong>
                Which barrier did it address, and what barriers still remained?
              </strong>
            </p>
          </section>
        </div>
        <section className="exitTicket">
          <small>EXIT TICKET</small>
          <h2>Complete all three statements</h2>
          <ol>
            <li>
              <b>Articulate:</b> “The most important change in 1920 was ___.”
            </li>
            <li>
              <b>Connect:</b> “That change became possible because ___.”
            </li>
            <li>
              <b>Extend:</b> “The story did not end in 1920 because ___.”
            </li>
          </ol>
        </section>
        <div className="lessonColumns">
          <section>
            <h2>Quick assessment rubric</h2>
            <div className="rubric">
              <p>
                <b>3 — Owns it</b>
                <span>
                  Accurately explains, connects people and actions, identifies
                  barriers, and transfers the pattern.
                </span>
              </p>
              <p>
                <b>2 — Approaching</b>
                <span>
                  Identifies facts but needs stronger connections, evidence, or
                  explanation.
                </span>
              </p>
              <p>
                <b>1 — Surface only</b>
                <span>
                  Lists isolated facts or treats ratification as the end of the
                  story.
                </span>
              </p>
            </div>
          </section>
          <section>
            <h2>Differentiation</h2>
            <ul>
              <li>
                <b>Grades K–2:</b> Picture cards; “What changed?” and “Who
                helped?”
              </li>
              <li>
                <b>Grades 3–5:</b> Short captions and partially completed
                columns.
              </li>
              <li>
                <b>Multilingual learners:</b> Bilingual vocabulary, stems, and
                oral responses.
              </li>
              <li>
                <b>Advanced:</b> Corroborate sources and investigate
                disagreements.
              </li>
              <li>
                <b>Additional support:</b> Color-code evidence to match columns.
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  );
}

function App() {
  const lessonHashes = ["#ace-framework", "#ready-to-teach-investigation"];
  const [screen, setScreen] = useState(() =>
      lessonHashes.includes(window.location.hash) ? "lesson" : "home",
    ),
    [level, setLevel] = useState(0),
    [found, setFound] = useState([]),
    [answer, setAnswer] = useState(null),
    [done, setDone] = useState([]),
    [settings, setSettings] = useState(false),
    [teacher, setTeacher] = useState(false),
    [sound, setSound] = useState(true),
    [motion, setMotion] = useState(true),
    [grade, setGrade] = useState("6–8"),
    [language, setLanguage] = useState(() => {
      const query = new URLSearchParams(window.location.search).get("lang");
      const saved = localStorage.getItem("sojourn-language");
      const browser = navigator.language?.slice(0, 2);
      return languages.some((x) => x.code === query)
        ? query
        : languages.some((x) => x.code === saved)
          ? saved
          : languages.some((x) => x.code === browser)
            ? browser
            : "en";
    });
  const t = ui[language] || ui.en;
  const translatedLevel = levelText[language]?.[level];
  const L = translatedLevel
    ? {
        ...levels[level],
        ...translatedLevel,
        facts: levels[level].facts.map((fact, i) => ({
          ...fact,
          ...translatedLevel.facts[i],
        })),
      }
    : levels[level];
  const complete = found.length === 3;
  const won = answer === L.correct;
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
  }, [motion]);
  useEffect(() => {
    localStorage.setItem("sojourn-language", language);
    document.documentElement.lang = language === "zh" ? "zh-Hans" : language;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }, [language]);
  const openLesson = (hash = "#ready-to-teach-investigation") => {
    setTeacher(false);
    setScreen("lesson");
    window.location.hash = hash;
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };
  useEffect(() => {
    const routeFromHash = () => {
      if (lessonHashes.includes(window.location.hash)) {
        setScreen("lesson");
        window.setTimeout(
          () => document.querySelector(window.location.hash)?.scrollIntoView(),
          0,
        );
      }
    };
    routeFromHash();
    window.addEventListener("hashchange", routeFromHash);
    return () => window.removeEventListener("hashchange", routeFromHash);
  }, []);
  const start = (i = 0) => {
    setLevel(i);
    setFound([]);
    setAnswer(null);
    setScreen("game");
  };
  const collect = (i) => {
    if (!found.includes(i)) setFound([...found, i]);
  };
  const next = () => {
    const nd = [...new Set([...done, level])];
    setDone(nd);
    if (level === 4) {
      setScreen("finish");
    } else {
      setLevel(level + 1);
      setFound([]);
      setAnswer(null);
    }
  };
  const reset = () => {
    localStorage.removeItem("sojourn-progress");
    setDone([]);
    setFound([]);
    setAnswer(null);
    setLevel(0);
    setScreen("home");
  };
  useEffect(() => {
    const s = localStorage.getItem("sojourn-progress");
    if (s) setDone(JSON.parse(s));
  }, []);
  useEffect(() => {
    localStorage.setItem("sojourn-progress", JSON.stringify(done));
  }, [done]);
  return (
    <div className="app">
      <header>
        <button
          className="brand"
          onClick={() => setScreen("home")}
          aria-label="Suffrage Sojourn home"
        >
          <span className="brandmark">S</span>
          <span>
            SUFFRAGE <i>SOJOURN</i>
          </span>
        </button>
        <nav>
          <label className="languagePicker">
            <span aria-hidden="true">🌐</span>
            <select aria-label="Language" value={language} onChange={(e) => setLanguage(e.target.value)}>
              {languages.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}
            </select>
          </label>
          <button onClick={() => setScreen("map")}>
            <Map /> {t.journey}
          </button>
          <button onClick={() => setTeacher(true)}>
            <BookOpen /> {t.teacher}
          </button>
          <button
            className="iconbtn"
            onClick={() => setSettings(true)}
            aria-label="Settings"
          >
            <Settings />
          </button>
        </nav>
      </header>
      <main id="main">
        {screen === "home" && (
          <section className="hero">
            <div className="heroShade"></div>
            <div className="heroCopy">
              <div className="eyebrow">
                <Compass /> {t.heroKicker}
              </div>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroBody}</p>
              <div className="heroActions">
                <button
                  className="primary"
                  onClick={() => start(done.length < 5 ? done.length : 0)}
                >
                  {t.begin} <ArrowRight />
                </button>
                <button className="quiet" onClick={() => setScreen("map")}>
                  {t.explore}
                </button>
              </div>
              <div className="meta">
                <span>{t.stops}</span>
                <span>•</span>
                <span>{t.noPenalty}</span>
              </div>
            </div>
            <div className="scrollCue">
              SCROLL TO DISCOVER <span>↓</span>
            </div>
          </section>
        )}
        {screen === "map" && (
          <section className="mapPage">
            <div className="pageIntro">
              <span className="eyebrow">{t.route}</span>
              <h2>{t.mapTitle}</h2>
              <p>{t.mapBody}</p>
            </div>
            <div className="route">
              {levels.map((x, i) => (
                <button
                  key={x.year}
                  className={
                    "stop " +
                    (done.includes(i) ? "complete" : "") +
                    (i > done.length ? " locked" : "")
                  }
                  disabled={i > done.length}
                  onClick={() => start(i)}
                >
                  <span className="stopNum">
                    {done.includes(i) ? <Check /> : i + 1}
                  </span>
                  <span className="stopText">
                    <small>{x.year}</small>
                    <b>{levelText[language]?.[i]?.short || x.short}</b>
                    <em>
                      {done.includes(i)
                        ? levelText[language]?.[i]?.artifact || x.artifact
                        : i === done.length
                          ? t.ready
                          : t.earlier}
                    </em>
                  </span>
                  {i > done.length ? <LockKeyhole /> : <ArrowRight />}
                </button>
              ))}
            </div>
          </section>
        )}
        {screen === "game" && (
          <section className="game" style={{ "--accent": L.color }}>
            <aside>
              <button className="back" onClick={() => setScreen("map")}>
                <ChevronLeft /> {t.journey}
              </button>
              <div className="chapter">{t.chapter} {level + 1} {t.of} 5</div>
              <div className="bigYear">{L.year}</div>
              <h2>{L.short}</h2>
              <p>{L.place}</p>
              <div className="progressLabel">
                <span>{t.collected}</span>
                <b>{found.length} / 3</b>
              </div>
              <div className="progress">
                <i style={{ width: `${(found.length / 3) * 100}%` }} />
              </div>
              <button
                className="listen"
                onClick={() => speak(`${L.title}. ${L.intro}`)}
              >
                <Headphones /> {t.listen}
              </button>
            </aside>
            <div className="chapterMain">
              <span className="eyebrow">
                {complete ? t.challenge : t.exploreEvidence}
              </span>
              <h1>{L.title}</h1>
              <p className="lead">{L.intro}</p>
              {!complete ? (
                <>
                  <figure className="chapterPlate">
                    <img src={L.image} alt={L.alt} />
                    <figcaption>
                      <span>{t.scene}</span>
                      <p>{t.sceneNote}</p>
                    </figcaption>
                  </figure>
                  <div className="evidenceGrid">
                    {L.facts.map((f, i) => (
                      <article
                        key={f.title}
                        className={found.includes(i) ? "found" : ""}
                      >
                        <div className="paperIcon">
                          {found.includes(i) ? <Check /> : "“"}
                        </div>
                        <span>{f.tag}</span>
                        <h3>{f.title}</h3>
                        <p>{f.text}</p>
                        <small>{f.note}</small>
                        <button
                          onClick={() => collect(i)}
                          disabled={found.includes(i)}
                        >
                          {found.includes(i) ? t.added : t.add}{" "}
                          <ArrowRight />
                        </button>
                      </article>
                    ))}
                  </div>
                  <div className="nudge">
                    <Lightbulb /> {t.nudge}
                  </div>
                </>
              ) : (
                <div className="challenge">
                  <div className="challengeHead">
                    <span className="seal">{L.mark}</span>
                    <div>
                      <small>{t.useEvidence}</small>
                      <h3>{L.question}</h3>
                    </div>
                  </div>
                  <div className="answers">
                    {L.answers.map((a, i) => (
                      <button
                        key={a}
                        className={
                          (answer === i ? "selected " : "") +
                          (answer !== null
                            ? i === L.correct
                              ? "right"
                              : answer === i
                                ? "wrong"
                                : ""
                            : "")
                        }
                        onClick={() => setAnswer(i)}
                        disabled={won}
                      >
                        <span>{String.fromCharCode(65 + i)}</span>
                        {a}
                        {answer !== null && i === L.correct && <Check />}
                      </button>
                    ))}
                  </div>
                  {answer !== null && (
                    <div className={"feedback " + (won ? "success" : "try")}>
                      <b>
                        {won ? t.correct : t.retry}
                      </b>
                      <p>{won ? L.explain : L.hint}</p>
                    </div>
                  )}
                  {won && (
                    <div className="earned">
                      <div className="artifact">{L.mark}</div>
                      <div>
                        <small>{t.earned}</small>
                        <h3>{L.artifact}</h3>
                        <p>{t.mapAdded}</p>
                      </div>
                      <button className="primary" onClick={next}>
                        {level === 4 ? t.complete : t.continue}{" "}
                        <ArrowRight />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}
        {screen === "finish" && (
          <section className="finish">
            <div className="torch">✦</div>
            <span className="eyebrow">JOURNEY COMPLETE</span>
            <h1>
              The road continues
              <br />
              <em>with you.</em>
            </h1>
            <p>
              You gathered evidence across 172 years of organizing. The lesson
              of the journey is not that progress was inevitable—it is that
              people built it, together, and kept going.
            </p>
            <div className="badges">
              {levels.map((x) => (
                <div>
                  <span>{x.mark}</span>
                  <small>{x.artifact}</small>
                </div>
              ))}
            </div>
            <div className="finishActions">
              <button className="primary" onClick={() => setTeacher(true)}>
                Open reflection guide <BookOpen />
              </button>
              <button className="quiet dark" onClick={() => setScreen("map")}>
                Review the journey
              </button>
            </div>
          </section>
        )}
        {screen === "lesson" && (
          <LessonPage onBack={() => setTeacher(true)} />
        )}
      </main>
      {settings && (
        <div className="modalWrap" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="close" onClick={() => setSettings(false)}>
              <X />
            </button>
            <span className="eyebrow">MAKE IT YOURS</span>
            <h2>Game settings</h2>
            <label>
              Reading level
              <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option>K–2</option>
                <option>3–5</option>
                <option>6–8</option>
                <option>9–12</option>
              </select>
            </label>
            <div className="toggleRow">
              <span>
                <b>Sound & narration</b>
                <small>Use device text-to-speech</small>
              </span>
              <button
                className={sound ? "on" : ""}
                onClick={() => setSound(!sound)}
              >
                {sound ? <Volume2 /> : <VolumeX />}
              </button>
            </div>
            <div className="toggleRow">
              <span>
                <b>Gentle motion</b>
                <small>Transitions and ambient effects</small>
              </span>
              <button
                className={motion ? "on" : ""}
                onClick={() => setMotion(!motion)}
              >
                {motion ? <Play /> : <Pause />}
              </button>
            </div>
            <button className="reset" onClick={reset}>
              <RotateCcw /> Reset all progress
            </button>
          </div>
        </div>
      )}
      {teacher && (
        <div className="modalWrap" role="dialog" aria-modal="true">
          <div className="modal teacher">
            <button className="close" onClick={() => setTeacher(false)}>
              <X />
            </button>
            <span className="eyebrow">TEACHER MODE</span>
            <h2>Teach the unfinished story</h2>
            <p>
              Designed for grades 6–8, with short primary-source excerpts,
              cause-and-effect reasoning, and a Texas history connection.
            </p>
            <button
              className="lessonLink"
              onClick={() => openLesson("#ready-to-teach-investigation")}
            >
              <span><b>Ready-to-Teach Investigation</b><small>Grades 6–12 · 50–60 minutes</small></span>
              <ArrowRight />
            </button>
            <button
              className="lessonLink"
              onClick={() => openLesson("#ace-framework")}
            >
              <span><b>ACE Framework</b><small>Articulate · Connect · Extend</small></span>
              <ArrowRight />
            </button>
            <h3>Discussion prompts</h3>
            <ol>
              <li>
                Why did organizers use the Declaration of Independence’s
                language in 1848?
              </li>
              <li>
                How did racism shape both the movement and access to the ballot?
              </li>
              <li>
                What is the difference between a constitutional right and
                practical access?
              </li>
            </ol>
            <h3>TEKS connections</h3>
            <p className="standards">
              Texas Studies 7.16A · U.S. History 8.15C · Government 6D ·
              Historical sources 7.21A
            </p>
            <h3>Source shelf</h3>
            <div className="sources">
              <a
                href="https://www.loc.gov/resource/rbcmil.scrp4006701/"
                target="_blank"
              >
                Library of Congress: Declaration of Sentiments <ExternalLink />
              </a>
              <a
                href="https://www.archives.gov/milestone-documents/19th-amendment"
                target="_blank"
              >
                National Archives: 19th Amendment <ExternalLink />
              </a>
              <a
                href="https://www.nps.gov/articles/000/women-s-suffrage-in-texas.htm"
                target="_blank"
              >
                National Park Service: Suffrage in Texas <ExternalLink />
              </a>
              <a
                href="https://www.archives.gov/milestone-documents/voting-rights-act"
                target="_blank"
              >
                National Archives: Voting Rights Act <ExternalLink />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
