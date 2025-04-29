
import React from "react";

const articles = [
  {
    title: "Global Markets Rally Amid Economic Optimism",
    summary: "Stock markets worldwide surged today as investor confidence grew around economic recovery in major economies.",
    image: "https://source.unsplash.com/800x400/?finance,stocks",
  },
  {
    title: "Breakthrough in Renewable Energy Announced",
    summary: "Scientists have developed a new solar panel technology that increases energy efficiency by 40%.",
    image: "https://source.unsplash.com/800x400/?solar,energy",
  },
  {
    title: "International Peace Talks Resume in Geneva",
    summary: "Leaders from multiple nations have gathered in Geneva to restart long-stalled peace negotiations.",
    image: "https://source.unsplash.com/800x400/?peace,talks",
  },
];

export default function DailyNews() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>Daily News</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
        {articles.map((article, index) => (
          <div key={index} style={{ borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img src={article.image} alt={article.title} style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px', width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{article.title}</h2>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
