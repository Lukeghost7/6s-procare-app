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
            <button style={styles.primaryBtn} onClick={() => setRole('user')}>
              User
            </button>
            <button style={styles.secondaryBtn} onClick={() => setRole('admin')}>
              Admin
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
    backgroundColor: '#f5f5f5',
  },
  card: {
    background: '#fff',
    padding: 30,
    borderRadius: 10,
    width: 400,
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
  },
  primaryBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: '#0a58ca',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
  secondaryBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
};
