import { useEffect, useMemo, useState } from 'react';

const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const storyFrame = [
  {
    label: 'The Control Room',
    title: 'In the room where stories are shaped, Argel knows the power of a pause.',
    text:
      'Screens glow. Scripts change. Voices wait for direction. Argel Payabyab moves through this world with the steadiness of someone who understands timing: when to cut, when to hold, when to let silence speak. In media, he helps other people become visible. That is where the story begins—not with weakness, but with a man who already knows how powerful a truthful frame can be.'
  },
  {
    label: 'The Way Home',
    title: 'After the lights and monitors, the hardest edit begins quietly.',
    text:
      'Outside work, Argel returns to a more delicate role. He is the dependable son, the composed one, the person his family can admire without having to ask too many difficult questions. The ride home becomes a passage between confidence and caution, between the self that is recognized in public and the self that still waits to be fully welcomed in private.'
  },
  {
    label: 'The Family Table',
    title: 'The deepest longing is not applause. It is to come home whole.',
    text:
      'Argel’s story is not built around anger. It is built around love—the kind that stays patient, careful, and hopeful even when it hurts. At the family table, the question becomes tender and difficult: can love grow large enough to hold the full truth of a person, not only the version that feels familiar?'
  }
];

const chapters = [
  {
    number: '01',
    id: 'struggle',
    title: 'The Struggle',
    subtitle: 'A public voice carrying a private silence',
    image: 'family-home.jpg',
    layout: 'split',
    alt:
      'A family group seated together in a home setting, showing closeness, belonging, and family expectations.',
    caption:
      'Home gives Argel belonging, but it is also the place where the unspoken parts of his identity become the heaviest.',
    paragraphs: [
      'Argel Payabyab lives in two kinds of light. One light comes from the studio: bright, demanding, professional. In that space, he is trusted to decide what deserves to be seen. He carries authority without needing to explain why he belongs there. People turn to him for judgment, timing, and direction. His presence is not hidden; it is part of the work.',
      'But another light waits at home. It is softer, more familiar, and harder to face. There, Argel is loved as the strong son, the reliable one, the person whose achievements make the family proud. That love is real. Yet it often rests on an image already built for him: masculine, dependable, controlled, respectable. The image protects him, but it also limits him.',
      'This is the ache at the center of his story. Argel is not asking to be admired less. He is longing to be understood more. He is not only the professional who succeeds under pressure, not only the son who carries responsibility, not only the composed figure people expect him to be. Beneath all of that is a fuller truth asking for room.',
      'The silence around that truth is not always dramatic. It can live in ordinary gestures: a word softened before it is spoken, a topic avoided during a meal, a smile used to end a conversation before it becomes too revealing. Sometimes the most difficult hiding happens in places where a person is not rejected, but also not completely seen.',
      'Argel’s struggle becomes deeply Filipino because family is not just background in his life. It is home, duty, memory, and love. That is why the silence is painful. He does not want to leave the people he loves behind. He wants to arrive before them without having to remove any part of himself at the door.'
    ],
    pull:
      'He is not asking to be admired less. He is longing to be understood more.'
  },
  {
    number: '02',
    id: 'breakthrough',
    title: 'The Breakthrough',
    subtitle: 'When success is no longer enough',
    image: 'control-room.jpg',
    layout: 'split',
    alt:
      'A broadcast control room with many monitors, keyboards, and production screens.',
    caption:
      'In the control room, Argel helps decide what is heard. Slowly, his own story asks for the same courage.',
    paragraphs: [
      'A breakthrough does not always arrive with confrontation. For Argel, it can begin as a quiet recognition: the applause of the world cannot replace the peace of being fully known by the people closest to him. Success can open doors, but it cannot answer every question the heart carries home.',
      'His work in media makes this truth sharper. Every day, stories pass through his hands. He knows that the most honest scenes are often the ones that feel risky to keep. He knows that silence can be meaningful, but it can also hide what must be said. He knows that a frame becomes more powerful when it makes space for what was once left outside it.',
      'Little by little, that knowledge turns inward. If other people’s stories deserve dignity, then so does his own. If hidden voices deserve to be heard on screen, then the voice inside him also deserves gentleness, safety, and recognition. The courage he uses professionally begins to become personal.',
      'This is not a story about forcing a family to understand everything overnight. It is about Argel beginning to name what wholeness means. To be loved is not only to be praised for success. To be loved is also to be allowed to be tender, complex, and true. It is to be seen beyond performance, beyond usefulness, beyond the image that made everyone comfortable.',
      'That realization is the beginning of freedom. Not freedom from family, but freedom within love itself—the hope that love can mature, listen, adjust, and make space for the complete person standing in front of it.'
    ],
    pull:
      'The courage he uses to bring other stories forward becomes the courage he needs for his own.'
  },
  {
    number: '03',
    id: 'impact',
    title: 'The Impact',
    subtitle: 'A story bigger than one silence',
    image: 'family-dinner.jpg',
    layout: 'wide',
    alt:
      'A family meal in a restaurant with several people gathered around a table, shared food, and warm indoor lighting.',
    caption:
      'The family table becomes the most human frame in Argel’s story: close, warm, ordinary, and full of things still waiting to be said.',
    paragraphs: [
      'Argel’s life becomes a mirror for many people who carry different versions of themselves across different rooms. They can be confident in public, useful at work, respected by peers, and still feel unfinished when they return to the people whose understanding matters most.',
      'This is why his story matters in conversations about gender and society. It shows how masculinity can become a costume even when it is praised. Sons are often expected to be strong, steady, and respectable. But when strength becomes the only acceptable language, vulnerability becomes difficult. When respectability becomes the measure of love, truth can begin to shrink.',
      'Argel’s story asks families to look again. Not with blame, but with tenderness. The person who has always been dependable may also need a place to rest. The child who brought pride to the family may also be waiting for permission to be honest. The loved one who smiles through every gathering may be carrying a sentence he has not yet found the safety to say.',
      'The difference between tolerance and acceptance becomes clear here. Tolerance may keep the peace, but acceptance gives peace. Tolerance may avoid conflict, but acceptance creates home. Tolerance says, “You may stay.” Acceptance says, “You do not have to disappear to belong.”',
      'Through Argel, the story becomes inspiring because it refuses to end in bitterness. It believes that families can learn. It believes that silence can soften into listening. It believes that love, when brave enough, can become wider than expectation and deeper than the old roles people were once asked to play.'
    ],
    pull:
      'Tolerance may keep the peace, but acceptance gives peace.'
  }
];

const gallery = [
  {
    file: 'control-room.jpg',
    title: 'The room of decisions',
    alt: 'A broadcast control room filled with monitors and production equipment.',
    caption:
      'This is the world where Argel understands timing, voice, silence, and the responsibility of making stories visible.'
  },
  {
    file: 'podcast-repaso.jpg',
    title: 'A voice close to the microphone',
    alt: 'A person seated beside a broadcast microphone with a screen in the background.',
    caption:
      'The microphone reflects the heart of Argel’s journey: the wish to speak clearly and be heard with care.'
  },
  {
    file: 'production-headset.jpg',
    title: 'Listening as a form of care',
    alt: 'A person wearing a headset while holding a cup in a production environment.',
    caption:
      'Behind every story is listening. Argel’s life reminds us that families also need this kind of attention.'
  },
  {
    file: 'untv-profile.jpg',
    title: 'Seen in public',
    alt: 'A close-up profile portrait of a person in a blue media uniform looking toward light.',
    caption:
      'Public life gives Argel visibility, dignity, and professional confidence; the private story asks for something even deeper.'
  },
  {
    file: 'balcony-portrait.jpg',
    title: 'Between rooms',
    alt: 'A person standing on a balcony with mountains in the distance and soft light behind them.',
    caption:
      'The open air suggests reflection: a pause between the self the world sees and the self still waiting to come home fully.'
  },
  {
    file: 'family-home.jpg',
    title: 'Loved through a familiar image',
    alt: 'A family group seated together in a home living room.',
    caption:
      'Family love is present, but Argel’s story asks whether love can also make space for the truths it has not yet understood.'
  },
  {
    file: 'family-dinner.jpg',
    title: 'Where silence also sits',
    alt: 'A family gathering around a restaurant table with warm lighting and shared food.',
    caption:
      'At the table, closeness and silence can exist together. The hope of the story is that one day, honesty can sit there too.'
  }
];

const themes = [
  {
    title: 'See beyond achievement',
    text:
      'Argel’s success should not be the only proof of his worth. He deserves to be known not only for what he has accomplished, but for who he is.'
  },
  {
    title: 'Let sons be whole',
    text:
      'Masculinity becomes kinder when it stops demanding silence. A son can be strong and tender, responsible and honest, respected and fully himself.'
  },
  {
    title: 'Listen to what is unspoken',
    text:
      'Many families love deeply but listen incompletely. Argel’s story invites them to notice the quiet parts of a person before those parts become too heavy.'
  },
  {
    title: 'Make home safer',
    text:
      'The most meaningful acceptance is not public applause. It is the feeling that the door at home will still open when the whole truth arrives.'
  }
];

const frameTabs = storyFrame.map((item) => item.label);

function App() {
  const [activeFrame, setActiveFrame] = useState(storyFrame[0].label);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const root = document.documentElement;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!revealItems.length) return undefined;

    const showItem = (item) => item.classList.add('is-visible');
    document.documentElement.classList.add('js-reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(showItem);
      return () => document.documentElement.classList.remove('js-reveal');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showItem(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-reveal');
    };
  }, []);

  const activeFrameContent = useMemo(
    () => storyFrame.find((item) => item.label === activeFrame) ?? storyFrame[0],
    [activeFrame]
  );

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-story">
        Skip to story
      </a>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${readingProgress / 100})` }}
      />

      <header className="site-header" aria-label="Website header">
        <a className="brand" href="#top" aria-label="Cut to Silence home">
          <span className="brand-mark">CS</span>
          <span>
            <strong>Cut to Silence</strong>
            <small>Argel Payabyab</small>
          </span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#outline">Argel</a>
          <a href="#main-story">Story</a>
          <a href="#themes">Meaning</a>
          <a href="#visuals">Visuals</a>
          <a href="#credits">Credits</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img src={imagePath('control-room.jpg')} alt="" />
          </div>
          <div className="hero-content" data-reveal>
            <p className="eyebrow">Seen at work. Unspoken at home.</p>
            <h1 id="hero-title">Cut to Silence</h1>
            <p className="subtitle">Argel Payabyab and the Story He Still Edits at Home</p>
            <p className="hero-intro">
              Argel Payabyab knows how to make stories visible. But the most personal story he carries is not on a monitor, not in a script, and not always easy to say aloud. It lives between the confidence he shows at work and the quiet hope of being fully understood at home.
            </p>
            <div className="hero-actions" aria-label="Page shortcuts">
              <a className="button primary" href="#main-story">Read Argel’s story</a>
              <a className="button ghost" href="#ending">Read the reflection</a>
            </div>
          </div>
        </section>

        <section id="outline" className="outline-section" aria-labelledby="outline-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Argel’s World</p>
            <h2 id="outline-title">A life moving between visibility and silence.</h2>
            <p>
              Argel’s story begins in the brightness of media work, then follows him into the quieter spaces where family, masculinity, love, and identity meet. His journey is not about a single confession. It is about the daily courage of wanting to be seen in full.
            </p>
          </div>

          <div className="frame-layout" data-reveal>
            <div className="frame-tabs" role="tablist" aria-label="Scenes in Argel’s story">
              {frameTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeFrame === tab}
                  className={activeFrame === tab ? 'is-active' : ''}
                  onClick={() => setActiveFrame(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <article className="frame-card" role="tabpanel">
              <span>{activeFrameContent.label}</span>
              <h3>{activeFrameContent.title}</h3>
              <p>{activeFrameContent.text}</p>
            </article>
          </div>
        </section>

        <section className="lead-section" aria-label="Opening narrative">
          <div className="lead-card" data-reveal>
            <p className="eyebrow">Opening Narrative</p>
            <p>
              At work, Argel Payabyab knows when to cut a scene. He knows when silence has lasted long enough, when a face has already said more than dialogue, and when a story needs light, music, or a sharper ending. Inside the control room, surrounded by screens, deadlines, and voices waiting to be heard, he becomes someone people trust to shape meaning.
            </p>
            <p>
              Yet the story he carries home has no simple edit. At home, he is the dependable son, the strong one, the person his family can admire with pride. They see his discipline and success. They know his reliability. But the deeper self—the truth beyond the familiar image—remains partly outside the frame.
            </p>
            <p>
              This is where Argel’s story becomes powerful. It is not about asking for attention. It is about asking for wholeness. It is about the quiet pain of being known by many, loved by family, and still waiting for the day when love no longer requires careful editing.
            </p>
          </div>
        </section>

        <section id="main-story" className="story-section" aria-labelledby="story-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Main Story</p>
            <h2 id="story-title">The story of a man learning to stay in the frame.</h2>
            <p>
              Argel’s journey moves through struggle, breakthrough, and impact. It begins with the ache of partial acceptance, grows into the realization that success is not the same as being fully seen, and ends with a challenge to families: love must become wide enough for the whole person.
            </p>
          </div>

          <div className="chapter-list">
            {chapters.map((chapter) => (
              <article
                className={`chapter ${chapter.layout === 'wide' ? 'chapter-wide' : ''}`}
                id={chapter.id}
                key={chapter.id}
                data-reveal
              >
                <div className="chapter-image">
                  <img src={imagePath(chapter.image)} alt={chapter.alt} loading="lazy" />
                  <p>{chapter.caption}</p>
                </div>
                <div className="chapter-copy">
                  <span className="chapter-number">{chapter.number}</span>
                  <p className="eyebrow">{chapter.title}</p>
                  <h3>{chapter.subtitle}</h3>
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <blockquote>{chapter.pull}</blockquote>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="themes" className="themes-section" aria-labelledby="themes-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">What Argel’s Story Asks</p>
            <h2 id="themes-title">Love should not ask anyone to become smaller.</h2>
            <p>
              The strength of Argel’s story is its tenderness. It does not accuse family love of being absent; it asks that love to become more complete, more listening, and more brave.
            </p>
          </div>
          <div className="theme-grid">
            {themes.map((theme, index) => (
              <article key={theme.title} data-reveal>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="visuals" className="visual-section" aria-labelledby="visuals-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Visual Memory</p>
            <h2 id="visuals-title">Scenes from the spaces that shaped him.</h2>
            <p>
              The photographs move between workplace, voice, reflection, and home. Together, they show the contrast at the heart of Argel’s journey: public confidence beside private longing.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className="gallery-card" key={item.file} data-reveal>
                <img src={imagePath(item.file)} alt={item.alt} loading="lazy" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="ending" className="ending-section" aria-labelledby="ending-title">
          <div className="ending-card" data-reveal>
            <p className="eyebrow">Ending Reflection</p>
            <h2 id="ending-title">This time, Argel is not only behind the story. He is the story.</h2>
            <p>
              Argel Payabyab’s story does not fade to black with one perfect moment. It continues like real life continues: through pauses, revisions, careful conversations, and scenes still waiting to be understood. At work, he knows how to bring hidden voices into focus. At home, the same desire becomes more personal—to let his own truth remain in the frame without apology.
            </p>
            <p>
              What makes his story inspiring is not that it is painless. It is that it remains rooted in love. He does not carry silence because he has no courage. He carries it because love can make people careful. Sometimes people hide not because they are ashamed, but because they are afraid of changing the way their loved ones look at them.
            </p>
            <p>
              But love should grow. It should learn. It should become strong enough to hold truth without turning away. For Argel, and for many others like him, the dream is simple and deeply human: to be able to come home not as a role, not as an image, not as the edited version of oneself, but as a whole person.
            </p>
            <blockquote>
              Sometimes, people do not ask to be understood because they want to challenge their family. Sometimes, they ask because they want to come home completely.
            </blockquote>
          </div>
        </section>

        <section id="credits" className="credits-section" aria-labelledby="credits-title">
          <div className="credits-card" data-reveal>
            <p className="eyebrow">Credits</p>
            <h2 id="credits-title">Acknowledgments</h2>
            <dl>
              <div>
                <dt>Feature subject</dt>
                <dd>Argel Payabyab, executive producer in a media company</dd>
              </div>
              <div>
                <dt>Story basis</dt>
                <dd>“Cut to Silence: Argel Payabyab and the Story He Still Edits at Home” story pitch and story outline for MO-SS086 Gender and Society</dd>
              </div>
              <div>
                <dt>Visual materials</dt>
                <dd>User-supplied photographs used for educational multimedia storytelling</dd>
              </div>
              <div>
                <dt>Ethical publishing note</dt>
                <dd>Before public posting, confirm consent from Argel and any identifiable people appearing in the photos.</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Cut to Silence · Argel Payabyab’s Story</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
