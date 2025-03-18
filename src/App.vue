<template>
  <div class="page-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>JaKooLit Tech World</h1>
        <p>Explore the future of customized computing with Hyprland & tech innovations</p>
        <a href="https://github.com/JaKooLit/Hyprland-Dots" class="cta-button">Discover More</a>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Hyprland – The Next-Gen Window Manager</h2>
      <div class="feature">
        <img src="/images/jakoolit-image-hyprland.jpg" alt="Hyprland UI">
        <p>Hyprland brings dynamic tiling, high customization, and cutting-edge performance for power users.</p>
      </div>
    </section>

    <!-- YouTube Playlist Section -->
    <section class="youtube-section">
      <div class="youtube-container">
        <iframe src="https://www.youtube.com/embed/videoseries?list=PLDtGd5Fw5_GjXCznR0BzCJJDIQSZJRbxx"
          title="JaKooLit YouTube Playlist" frameborder="0"
          allow='accelerometer; autoplay=“1”; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen>
        </iframe>
      </div>

      <!-- YouTube Channel Link -->
      <div class="youtube-channel">
        <a href="https://youtube.com/@ja.koolit?si=bKgcZ0etwC-zoda3" target="_blank">
          🎥 Visit JaKooLit's YouTube Channel
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Full Page Styling */
.page-container {
  text-align: center;
  color: #fff;
  background: url('/images/jakoolit-image.jpg') no-repeat center center/cover;
  min-height: 100vh;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  text-align: center;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  animation: fadeIn 1.5s ease-in-out;
}

.hero h1 {
  font-size: 3.5rem;
  background: linear-gradient(90deg, #ff5f5f, #00f3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.6rem;
  color: #fff;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(45deg, #ff5f5f, #ff9a5f);
  padding: 15px 30px;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(255, 95, 95, 0.7);
}

/* Features Section */
.features {
  padding: 60px 20px;
  background: rgba(0, 0, 0, 0.7);
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: auto;
}

.feature img {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-top: 20px;
}

/* YouTube Section */
.youtube-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.youtube-container {
  width: 90%;
  max-width: 1400px;
}

.youtube-container iframe {
  width: 100%;
  height: 70vh;
  max-height: 700px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

/* YouTube Channel Link */
.youtube-channel {
  margin-top: 20px;
}

.youtube-channel a {
  display: inline-block;
  font-size: 1.4rem;
  color: #ff5f5f;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 24px;
  border: 2px solid #ff5f5f;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 95, 95, 0.15);
}

.youtube-channel a:hover {
  /* background: linear-gradient(45deg, #ff5f5f, #ff9a5f); */
  background: #382EA5;
  background: linear-gradient(270deg, #382EA5, #9C8AEA);
  box-shadow: 0 0 20px rgba(255, 95, 95, 0.9);
  transform: scale(1.05);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
