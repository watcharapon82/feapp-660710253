import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ไก่ มน', nickname: 'กด',
    major: 'IT', favorites: ['ชาไทย', 'ลิง'] },

    { id: 1, name: 'ชาว ไร่', nickname: 'พา',
    major: 'CS', favorites: ['น้ำแดง', 'ช้าง'] },

    { id: 1, name: 'มา รัน', nickname: 'ที',
    major: 'CS', favorites: ['น้ำแข็ง', 'งู'] }
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;