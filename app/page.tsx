
'use client';
import { useState } from 'react';

export default function Home() {
  const [role, setRole] = useState(null);

  if (!role) {
    return (
      <div style={styles.center}>
        <div style={styles.card}>
          <h1 style={styles.title}>6S ProCare Services</h1>
          <p style={styles.subtitle}>Professional Home Care Services</p>
          <input placeholder="Email" style={styles.input} />
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={styles.primaryBtn} onClick={() => setRole('client')}>Client Login</button>
            <button style={styles.secondaryBtn} onClick={() => setRole('admin')}>Admin Login</button>
          </div>
        </div>
      </div>
    );
  }

  return role === 'client' ? <ClientView /> : <AdminView />;
}

function ClientView() {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Client Dashboard</h2>
      <div style={styles.box}>
        <h3>Services</h3>
        <div style={styles.grid}>
          {['Gardening','Plumbing','Painting','Carpentry'].map(s => (
            <div key={s} style={styles.serviceCard}>{s}</div>
          ))}
        </div>
      </div>
      <div style={styles.box}>
        <h3>Get Quote</h3>
        <input placeholder="Property location" style={styles.input} />
        <input type="file" style={styles.input} />
        <button style={styles.primaryBtn}>Request Quote</button>
      </div>
    </div>
  );
}

function AdminView() {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <div style={styles.grid}>
        <Stat title="Active Teams" value="8" />
        <Stat title="Active Sites" value="14" />
        <Stat title="Pending Jobs" value="6" />
        <Stat title="Cash Flow" value="₹4.2L" />
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div style={styles.stat}>
      <p>{title}</p>
      <strong>{value}</strong>
    </div>
  );
}

const styles = {
  center:{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f7f7f7'},
  card:{background:'#fff',padding:30,borderRadius:16,width:360},
  title:{color:'#1E7F3B',textAlign:'center'},
  subtitle:{textAlign:'center',color:'#666',marginBottom:20},
  input:{width:'100%',padding:10,marginBottom:10,borderRadius:8,border:'1px solid #ccc'},
  primaryBtn:{flex:1,padding:10,background:'#1E7F3B',color:'#fff',borderRadius:8,border:'none'},
  secondaryBtn:{flex:1,padding:10,background:'#e6f4ec',color:'#1E7F3B',borderRadius:8,border:'none'},
  page:{padding:20,background:'#f7f7f7',minHeight:'100vh'},
  heading:{color:'#1E7F3B',marginBottom:20},
  box:{background:'#eaf6ef',padding:15,borderRadius:12,marginBottom:15},
  grid:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10},
  serviceCard:{background:'#cfead9',padding:15,borderRadius:10,textAlign:'center'},
  stat:{background:'#eaf6ef',padding:15,borderRadius:12,textAlign:'center'}
};
