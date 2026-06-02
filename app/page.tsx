"use client";

import { useEffect, useMemo, useState } from "react";
import { AnswerKey, calculateResult, questions, results } from "@/lib/diagnosisData";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendHeightToParent() {
  if (typeof window === "undefined") return;
  const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  window.parent?.postMessage({ type: "soulDiagnosisHeight", height }, "*");
}

function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params || {});
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerKey[]>([]);
  const [finished, setFinished] = useState(false);

  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL || "https://lin.ee/xxxxxxxx";
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const resultKey = useMemo(() => calculateResult(answers), [answers]);
  const result = results[resultKey];
  const currentQuestion = questions[currentIndex];
  const progress = finished ? 100 : Math.round((currentIndex / questions.length) * 100);

  useEffect(() => {
    sendHeightToParent();
    const timer = window.setTimeout(sendHeightToParent, 250);
    return () => window.clearTimeout(timer);
  }, [started, currentIndex, finished]);

  useEffect(() => {
    if (!gaId) return;
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}');
    `;
    document.head.appendChild(script2);
  }, [gaId]);

  function startDiagnosis() {
    setStarted(true);
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
    trackEvent("diagnosis_start");
  }

  function selectAnswer(key: AnswerKey) {
    const nextAnswers = [...answers, key];
    setAnswers(nextAnswers);
    trackEvent("question_answered", { question_id: currentQuestion.id, answer: key });

    if (currentIndex + 1 >= questions.length) {
      const finalKey = calculateResult(nextAnswers);
      setFinished(true);
      trackEvent("diagnosis_complete", { result_type: finalKey });
    } else {
      setCurrentIndex((index) => index + 1);
    }
  }

  function restart() {
    setStarted(false);
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
    trackEvent("diagnosis_restart");
  }

  function clickLine() {
    trackEvent("line_cta_clicked", { result_type: resultKey, session: result.recommendedSession });
  }

  return (
    <main className="page">
      <div className="shell">
        {!started && !finished && (
          <section className="card">
            <span className="badge">🌙 4つの質問でわかる</span>
            <h1>魂タイプ診断</h1>
            <p className="lead">
              直感で選ぶだけで、あなたの魂の傾向と、今おすすめの一歩がわかります。
            </p>
            <p>
              深く考えすぎず、「なんとなく惹かれる」選択肢を選んでください。診断結果では、あなたの魂タイプとおすすめセッションをご案内します。
            </p>
            <div className="actions">
              <button className="primaryButton" onClick={startDiagnosis}>診断をはじめる</button>
            </div>
          </section>
        )}

        {started && !finished && (
          <section className="card">
            <span className="badge">Q{currentQuestion.id} / {questions.length}</span>
            <div className="progress">
              <div className="progressText">
                <span>進捗</span>
                <span>{progress}%</span>
              </div>
              <div className="progressBar">
                <div className="progressFill" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <h2>{currentQuestion.text}</h2>
            <div className="answers">
              {currentQuestion.answers.map((answer) => (
                <button key={answer.key} className="answerButton" onClick={() => selectAnswer(answer.key)}>
                  <span className="answerKey">{answer.key}</span>
                  <span className="answerText">{answer.text}</span>
                </button>
              ))}
            </div>
            <div className="actions">
              <button className="secondaryButton" onClick={restart}>最初からやり直す</button>
            </div>
          </section>
        )}

        {finished && (
          <section className="card">
            <div className="resultHeader">
              <div className="resultIcon">{result.icon}</div>
              <div className="resultType">{result.typeName}（{result.soulName}）</div>
              <h2>{result.title}</h2>
            </div>

            <p>{result.summary}</p>
            <p>{result.challenge}</p>

            <div className="sectionBox">
              <h3>🔸はじめの一歩</h3>
              <p><strong>{result.firstStep}</strong></p>
              <p>{result.firstStepDetail}</p>
            </div>

            <div className="sectionBox">
              <h3>🕊あなたにおすすめのセッション</h3>
              <div className="sessionName">{result.recommendedSession}</div>
              <p>{result.sessionDescription}</p>
            </div>

            <div className="ctaBox">
              <h3>魂タイプ別メッセージをLINEで受け取る</h3>
              <p>
                あなたの魂タイプの詳しい解説と、今のあなたに必要なメッセージをLINEでお届けします。
              </p>
              <a className="lineButton" href={lineUrl} target="_blank" rel="noopener noreferrer" onClick={clickLine}>
                LINEで詳しい診断結果を受け取る
              </a>
              <p className="small">※LINE公式アカウントのURLは環境変数で差し替えできます。</p>
            </div>

            <div className="actions">
              <button className="secondaryButton" onClick={restart}>もう一度診断する</button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
