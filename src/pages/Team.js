import React from 'react';
import '../css/Team.css';

function Team() {
  return (
    <div className="team">
      <h2>Ekibimiz</h2>
      <div className="team-list">
        <div className="team-card">
          <h3>Üye Adı 1</h3>
          <p>Rol: Oyun Geliştirici</p>
        </div>
        <div className="team-card">
          <h3>Üye Adı 2</h3>
          <p>Rol: Sanat Yönetmeni</p>
        </div>
        {/* Yeni üyeler için benzer divler eklenebilir */}
      </div>
    </div>
  );
}

export default Team;
