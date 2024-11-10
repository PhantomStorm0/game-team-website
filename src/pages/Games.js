import React from 'react';
import '../css/Games.css';

function Games() {
  return (
    <div className="games">
      <h2>Oyunlarımız</h2>
      <div className="game-list">
        <div className="game-card">
          <h3>Oyun Adı 1</h3>
          <p>Kısa tanıtım metni burada olacak.</p>
        </div>
        <div className="game-card">
          <h3>Oyun Adı 2</h3>
          <p>Kısa tanıtım metni burada olacak.</p>
        </div>
        {/* Yeni oyunlar için benzer divler eklenebilir */}
      </div>
    </div>
  );
}

export default Games;
