'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';

export default function Home() {
  const [role, setRole] = useState<string | null>(null);

  if (!role) {
    return (
      <div style={styles.center}>
        <div style={styles.card}>
          <h1 style={styles.title}>6S ProCare Services</h1>
          <p style={styles.subtitle}>Professional Home Care Services</p>

          <input placeholder="Email" style={styles.input} />

          <div style={{ display: 'flex', gap: 10 }}>
            <button style={styles.primaryBtn} onClick={() => setRole('client')}>
              Client
            </button>
            <button style={styles.secondaryBtn} onClick={() => setRole('provider')}>
              Provider
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <div>Logged in as {role}</div>;
}

const styles: Record<string, CSSProperties> = {
  center: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f6f8',
  },
  card: {
    padding: 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 350,
    textAlign: 'center',
  },
  title: {
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
    color: '#555',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
  },
  primaryBtn: {
    padding: '10px 15px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  },
  secondaryBtn: {
    padding: '10px 15px',
    backgroundColor: '#eaeaea',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  },
};
