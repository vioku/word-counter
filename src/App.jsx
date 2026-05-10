import { useState } from "react";

const COLORS = [
  "stat-yellow",
  "stat-blue",
  "stat-green",
  "stat-orange",
  "stat-purple",
  "stat-pink",
  "stat-cyan",
  "stat-red",
];

const StatCard = ({ label, value, color }) => (
  <div className={`stat-card ${color}`}>
    <div className="stat-value">{value}</div>
    <span className="stat-label">{label}</span>
  </div>
);

const socialLinks = [
  {
    href: "https://github.com/vioku",
    label: "GitHub",
    color: "#000",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
  },
  {
    href: "https://facebook.com/vioku.jsx",
    label: "Facebook",
    color: "#1877F2",
    path: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951",
  },
  {
    href: "https://t.me/viokuJSX",
    label: "Telegram",
    color: "#0088CC",
    path: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09",
  },
  {
    href: "https://instagram.com/vioku.jsx",
    label: "Instagram",
    color: "#E4405F",
    path: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
  },
];

const statsConfig = [
  { label: "Words", key: "words", color: COLORS[0] },
  { label: "Characters", key: "characters", color: COLORS[1] },
  { label: "Sentences", key: "sentences", color: COLORS[2] },
  { label: "Paragraphs", key: "paragraphs", color: COLORS[3] },
  { label: "Characters Without Spaces", key: "charactersWithoutSpaces", color: COLORS[4] },
  { label: "Syllables", key: "syllables", color: COLORS[5] },
  { label: "Reading Time", key: "readingTime", color: COLORS[6] },
  { label: "Speaking Time", key: "speakingTime", color: COLORS[7] },
];

function App() {
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersWithoutSpaces: 0,
    syllables: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: "0:00",
    speakingTime: "0:00",
    wordDensity: [],
  });

  const calculateStats = (text) => {
    const words = text.match(/\b[-?(\w+)?]+\b/gi) || [];
    const wordMap = {};

    words.forEach((word) => {
      const lowercaseWord = word.toLowerCase();
      if (wordMap[lowercaseWord]) {
        wordMap[lowercaseWord]++;
      } else {
        wordMap[lowercaseWord] = 1;
      }
    });
    const wordDensity = Object.keys(wordMap).map((key) => ({
      word: key,
      frequency: wordMap[key],
    }));
    wordDensity.sort((a, b) => b.frequency - a.frequency);
    const characters = text.length;
    const charactersWithoutSpaces = text.replace(/\s/g, "").length;
    const syllables = text.match(/[aeiouy]{1,2}/g) ? text.match(/[aeiouy]{1,2}/g).length : 0;
    const sentences = text.split(/[.!?]/).filter(Boolean).length;
    const paragraphs = text.split(/\n/).filter((paragraph) => paragraph.length > 0).length;
    const readingTimeSeconds = Math.ceil((words.length / 200) * 60);
    const speakingTimeSeconds = Math.ceil((words.length / 130) * 60);
    const readingMinutes = Math.floor(readingTimeSeconds / 60);
    const readingSeconds = readingTimeSeconds % 60;
    const speakingMinutes = Math.floor(speakingTimeSeconds / 60);
    const speakingSeconds = speakingTimeSeconds % 60;

    setStats({
      words: words.length,
      characters,
      charactersWithoutSpaces,
      syllables,
      sentences,
      paragraphs,
      readingTime: `${readingMinutes}:${readingSeconds.toString().padStart(2, "0")}`,
      speakingTime: `${speakingMinutes}:${speakingSeconds.toString().padStart(2, "0")}`,
      wordDensity: wordDensity,
    });
  };

  const handleChange = (e) => {
    const text = e.target.value;
    calculateStats(text);
  };

  const maxFreq = stats.wordDensity.length > 0 ? stats.wordDensity[0].frequency : 1;

  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="header-badge">Free Online Tool</div>
        <h1>Word Counter</h1>
        <p>Count words, characters, sentences &amp; more in seconds</p>
        <div className="credits-bar">
          <div className="credits-text">
            <span>Built with</span>
            <span className="credits-heart">
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </span>
            <span>by</span>
            <span className="credits-author">Vioku</span>
          </div>
          <div className="credits-social">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} style={{ '--brand': link.color }}>
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d={link.path} />
                </svg>
              </a>
            ))}
          </div>
          <div className="credits-divider" />
          <a className="credits-vultr" href="https://www.vultr.com/?ref=9815554-9J" target="_blank" rel="noopener noreferrer" aria-label="Get $300 Vultr credit">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span>$300 Vultr</span>
          </a>
        </div>
      </header>

      <div className="main-grid">
        <div className="input-card">
          <textarea
            onChange={handleChange}
            placeholder="Paste or type your text here..."
            spellCheck={false}
          />
          <div className="input-label">
            {stats.characters} character{stats.characters !== 1 ? "s" : ""} &middot;{" "}
            {stats.words} word{stats.words !== 1 ? "s" : ""}
          </div>
        </div>

        <div className="stats-grid">
          {[0, 2, 4, 6].map((start) => (
            <div className="stats-row" key={start}>
              {statsConfig.slice(start, start + 2).map((cfg) => (
                <StatCard key={cfg.key} label={cfg.label} value={stats[cfg.key]} color={cfg.color} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {stats.wordDensity.length > 0 ? (
        <section className="density-section">
          <h2 className="section-title">Word Density</h2>
          <div className="density-list">
            {stats.wordDensity.map((item, i) => (
              <div className="density-item" key={i}>
                <span className="density-word">{item.word}</span>
                <div className="density-right">
                  <div className="density-bar-wrap">
                    <div className="density-bar-fill" style={{ width: `${(item.frequency / maxFreq) * 100}%` }} />
                  </div>
                  <span className="density-count">{item.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="density-section">
          <h2 className="section-title">Word Density</h2>
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <p>Start typing to see <span>word density</span></p>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
