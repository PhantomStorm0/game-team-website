import React, { useState, useEffect } from 'react';
import '../css/Home.css';

function Home() {
  const [currentAd, setCurrentAd] = useState(0);
  const ads = [
    { 
      title: 'Oyun 1', 
      description: 'Aksiyon dolu bir macera sizi bekliyor!',
      image: '/images/oyun1.jpg'  // Resim yolu doğru şekilde verilmeli
    },
    { 
      title: 'Oyun 2', 
      description: 'Savaş alanında zafer sizin olabilir!', 
      image: '/images/oyun2.jpg' 
    },
    { 
      title: 'Oyun 3', 
      description: 'Yeni strateji oyunumuzla tanışın!', 
      image: '/images/oyun3.jpg' 
    },
  ];

  // Reklamları döndürme efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ads.length]);

  // Geçiş noktasına tıklanırsa reklamı değiştirme fonksiyonu
  const handleAdClick = (index) => {
    setCurrentAd(index);
  };

  return (
    <div className="home">
      {/* Reklam Banner */}
      <section
        className="ad-banner"
        style={{
          backgroundImage: `url(${ads[currentAd].image})`, // Arka plan resmi buradan alacak
        }}
      >
        <div className="ad-content">
          <h1>{ads[currentAd].title}</h1>
          <p>{ads[currentAd].description}</p>
        </div>

        {/* Reklam Geçiş Noktaları */}
        <div className="ad-navigation">
          {ads.map((_, index) => (
            <div 
              key={index}
              className={`ad-dot ${currentAd === index ? 'active' : ''}`}
              onClick={() => handleAdClick(index)}
            />
          ))}
        </div>
      </section>

      {/* Haberler Bölümü */}
      <section className="news-section">
        <h2>Son Haberler</h2>
        <div className="news-item">
          <h3>Yeni Oyun Geliyor!</h3>
          <p>Bu yıl içerisinde çıkacak olan yeni aksiyon oyunumuza dair tüm detaylar... Devamını oku</p>
        </div>
        <div className="news-item">
          <h3>Yaz İndirimi Başladı!</h3>
          <p>Oyunlarımızda %50'ye varan indirimler başladı! Fırsatları kaçırmayın... Devamını oku</p>
        </div>
        <div className="news-item">
          <h3>Oyun Geliştirme Süreci Hakkında</h3>
          <p>Ekibimiz, yeni projeler üzerine yoğunlaşıyor. Oyun geliştirme sürecine dair bilmeniz gerekenler... Devamını oku</p>
        </div>
      </section>

      {/* Ekip ve Firma Bilgisi */}
      <section className="info-section">
        <div className="info-box">
          <h3>Ekibimiz</h3>
          <p>Yaratıcı ve tutkulu oyun geliştiricilerinden oluşan bir ekibiz. Her biri kendi alanında uzmanlaşmış, oyun dünyasına katkı sağlamayı amaçlayan kişilerden oluşuyor.</p>
        </div>

        <div className="info-box">
          <h3>Firma Hakkında</h3>
          <p>Oyunumuz, uzun yıllardır bu alanda deneyim kazanmış bir ekip tarafından geliştirilmektedir. Her zaman yenilikçi ve eğlenceli oyunlar üretmeye odaklanıyoruz.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Oyun Ekibimiz. Tüm hakları saklıdır.</p>
          <div className="social-links">
            <a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
