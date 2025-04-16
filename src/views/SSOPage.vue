<template>
  <div class="sso-wrapper">
    <div class="animated-bg">
      <div class="gradient-sphere"></div>
      <div class="gradient-sphere second"></div>
      <div class="grid-overlay"></div>
      <div class="stars">
        <div class="star" v-for="n in 20" :key="n" 
          :style="`
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 3}s
          `"
        ></div>
      </div>
    </div>
    <div class="sso-container">
      <div class="logo-section">
        <div class="logo-wrapper">
          <AvatarLogo class="logo animate-float" />
          <div class="logo-glow"></div>
        </div>
        <h1 class="animate-fade-in">Udumbara Apps</h1>
      </div>

      <div class="apps-grid animate-fade-up">
        <router-link 
          v-for="(app, index) in settings.apps" 
          :key="app.id"
          :to="`/${app.id}`"
          class="app-card"
          :style="`animation-delay: ${index * 0.1}s`"
          @click="selectApp(app.id)"
        >
          <div class="icon-wrapper">
            <i :class="app.icon"></i>
            <div class="icon-glow"></div>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import AvatarLogo from '../components/app/AvatarLogo.vue'
import { useSettingsStore } from '../stores/settings'
import { useRouter } from 'vue-router'

const settings = useSettingsStore()
const router = useRouter()

const selectApp = (appId) => {
  settings.setCurrentApp(appId)
}
</script>

<style scoped>
.sso-wrapper {
  position: relative;
  min-height: 100vh; /* Kembalikan ke min-height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  isolation: isolate;
}

.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(135deg, var(--background), #1e293b);
}

.gradient-sphere {
  position: absolute;
  width: 70vw;  /* Increase size */
  height: 70vw;
  background: radial-gradient(circle, var(--primary) 20%, transparent 70%);  /* Increase color coverage */
  border-radius: 50%;
  top: -35vw;
  left: -35vw;
  opacity: 0.25;  /* Increase opacity */
  animation: floatSphere 20s ease-in-out infinite;
  filter: blur(80px);  /* Increase blur for softer edges */
}

.gradient-sphere.second {
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, var(--secondary) 20%, transparent 70%);
  top: auto;
  left: auto;
  bottom: -30vw;
  right: -30vw;
  opacity: 0.25;
  animation: floatSphere 25s ease-in-out infinite reverse;
  filter: blur(80px);
}

.grid-overlay {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background-image: radial-gradient(var(--text-primary) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.05;
  animation: dotMove 5s linear infinite; /* Percepat animasi */
  overflow: hidden; /* Tambah overflow hidden */
}

.stars {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: twinkle 4s infinite;
}

@keyframes twinkle {
  0% { 
    opacity: 0;
    transform: scale(1);
  }
  50% { 
    opacity: 0.5;
    transform: scale(1.3);
  }
  100% { 
    opacity: 0;
    transform: scale(1);
  }
}

@keyframes floatSphere {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(8%, 8%) scale(1.05) rotate(5deg);
  }
  50% {
    transform: translate(0, 15%) scale(1) rotate(0deg);
  }
  75% {
    transform: translate(-8%, 8%) scale(0.95) rotate(-5deg);
  }
}

@keyframes dotMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-30px, -30px); /* Sesuaikan dengan background-size */
  }
}

.sso-container {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 900px;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.logo-section {
  text-align: center;
  margin-bottom: 3rem;
}

.logo-wrapper {
  position: relative;
  display: inline-block;
}

.logo {
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 1;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: var(--primary);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.3;
  z-index: 0;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin: 0; /* Tambahkan margin 0 */
}

@media (max-width: 768px) {
  .apps-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
  }
}

@media (max-width: 480px) {
  .apps-grid {
    grid-template-columns: 1fr; /* 1 column on mobile */
  }
}

.app-card {
  aspect-ratio: 4/3; /* Added to maintain consistent card size */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  transform: translateY(30px);
  opacity: 0;
  animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.app-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.app-card:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.app-card:hover::before {
  left: 100%;
}

.icon-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.app-card i {
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: var(--primary);
  border-radius: 50%;
  filter: blur(15px);
  opacity: 0;
  transition: 0.3s;
}

.app-card:hover .icon-glow {
  opacity: 0.3;
}

.app-name {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-up {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
