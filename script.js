// Simple mobile nav toggle and helpers
const $ = (sel, ctx = document) => ctx.querySelector(sel);

function setupNavToggle() {
  const toggle = $('.navToggle');
  const nav = $('.navMenu');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('isOpen');
    nav.classList.toggle('isOpen', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

function setYear() {
  const year = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = String(year);
}

function setupFlyersModal() {
  const trigger = document.getElementById('flyersModalTrigger');
  const modal = document.getElementById('flyersModal');
  if (!trigger || !modal) return;

  const closeButton = modal.querySelector('.modalClose');
  const backdrop = modal.querySelector('.modalBackdrop');
  const modalContent = modal.querySelector('.modalContent');
  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.classList.add('isOpen');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('hasModal');

    const focusTarget =
      closeButton ||
      modalContent ||
      modal;
    if (focusTarget && typeof focusTarget.focus === 'function') {
      try {
        focusTarget.focus({ preventScroll: true });
      } catch (error) {
        focusTarget.focus();
      }
    }
  };

  const closeModal = () => {
    modal.classList.remove('isOpen');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('hasModal');
    if (lastFocusedElement instanceof HTMLElement) {
      try {
        lastFocusedElement.focus({ preventScroll: true });
      } catch (error) {
        lastFocusedElement.focus();
      }
    }
  };

  trigger.addEventListener('click', openModal);
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (
      event.target === modal
    ) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('isOpen')) {
      closeModal();
    }
  });
}

function setupInvitacionesModal() {
  const trigger = document.getElementById('invitacionesModalTrigger');
  const modal = document.getElementById('invitacionesModal');
  const video = modal ? modal.querySelector('video') : null;
  if (!trigger || !modal) return;

  const closeButton = modal.querySelector('.modalClose');
  const backdrop = modal.querySelector('.modalBackdrop');
  const modalContent = modal.querySelector('.modalContent');
  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.classList.add('isOpen');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('hasModal');
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {});
      }
    }

    const focusTarget =
      closeButton ||
      modalContent ||
      modal;
    if (focusTarget && typeof focusTarget.focus === 'function') {
      try {
        focusTarget.focus({ preventScroll: true });
      } catch (error) {
        focusTarget.focus();
      }
    }
  };

  const closeModal = () => {
    modal.classList.remove('isOpen');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('hasModal');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    if (lastFocusedElement instanceof HTMLElement) {
      try {
        lastFocusedElement.focus({ preventScroll: true });
      } catch (error) {
        lastFocusedElement.focus();
      }
    }
  };

  trigger.addEventListener('click', openModal);
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (
      event.target === modal
    ) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('isOpen')) {
      closeModal();
    }
  });
}

function setupCVModal() {
  const trigger = document.getElementById('cvModalTrigger');
  const modal = document.getElementById('cvModal');
  if (!trigger || !modal) return;

  const closeButton = modal.querySelector('.modalClose');
  const backdrop = modal.querySelector('.modalBackdrop');
  const modalContent = modal.querySelector('.modalContent');
  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.classList.add('isOpen');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('hasModal');

    const focusTarget =
      closeButton ||
      modalContent ||
      modal;
    if (focusTarget && typeof focusTarget.focus === 'function') {
      try {
        focusTarget.focus({ preventScroll: true });
      } catch (error) {
        focusTarget.focus();
      }
    }
  };

  const closeModal = () => {
    modal.classList.remove('isOpen');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('hasModal');
    if (lastFocusedElement instanceof HTMLElement) {
      try {
        lastFocusedElement.focus({ preventScroll: true });
      } catch (error) {
        lastFocusedElement.focus();
      }
    }
  };

  trigger.addEventListener('click', openModal);
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (
      event.target === modal
    ) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('isOpen')) {
      closeModal();
    }
  });
}



document.addEventListener('DOMContentLoaded', () => {
  setupNavToggle();
  setYear();
  setupFlyersModal();
  setupInvitacionesModal();
  setupCVModal();
});
