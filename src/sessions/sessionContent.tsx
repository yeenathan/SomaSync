interface Session {
  id: number,
  title: string;
  subtitle: string;
  content: React.ReactElement;
}

const SessionContent : Array<Session> = [
  {
    id: 1,
    title: "Session 1: SomaSync Overview",
    subtitle: "An overview of the SomaSync framework",
    content:
      <div>
        <h2>SomaSync Framework</h2>
        <ul>
          <li>
            <h3>Practice of Awareness</h3>
            <ul>
              <li>
                <p>Contextual Clarity</p>
                <p>Context is important to become present because it helps us ground in the "here and now" by assessing if there is enough safety/trust to be present in the current context.</p>
              </li>
              <li>
                <p>Explore Continuum</p>
                <p>Feelings: Emotions based Observations: Objective Truths Thoughts: Mental Process of experience and information Wants: Desires, objectives, goals, longings, wishes, dreams, etc.</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  }
]

export default SessionContent;