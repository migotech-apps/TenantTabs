'use strict';

(() => {
  const screenshots = {
    chooser: {
      title: 'Main Interface',
      src: 'assets/screenshots/container-chooser.png',
      alt: 'TenantTabs container chooser showing search, recently used containers, groups and container creation actions.',
      caption: 'Find, create and reuse your Firefox containers from one convenient interface.',
      width: 1423, height: 1051
    },
    search: {
      title: 'Container Search',
      src: 'assets/screenshots/container-search.png',
      alt: 'Container search for Acc showing matching Account 2 and Client 1 / Account 1 containers.',
      caption: 'Find matching containers as you type, with an action to create a new container.',
      width: 1382, height: 936
    },
    management: {
      title: 'New Container',
      src: 'assets/screenshots/container-management.png',
      alt: 'New container dialog with a Tenant 1 example name and controls for colour, icon and group.',
      caption: 'Create a container with a custom name, colour, icon and group.',
      width: 1423, height: 1051
    },
    rules: {
      title: 'Website Rules',
      src: 'assets/screenshots/website-rules.png',
      alt: 'Website rules settings with search, add and multi-select controls, and linkedin.com assigned to the Personal container.',
      caption: 'Automatically open assigned websites in the containers you choose, and manage their rules in one place.',
      width: 1382, height: 936
    }
  };

  const controls = document.querySelector('.gallery-controls');
  const link = document.querySelector('#gallery-link');
  const image = document.querySelector('#gallery-image');
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-category]');
    if (!button) return;
    const selected = screenshots[button.dataset.category];
    if (!selected) return;
    for (const control of controls.querySelectorAll('button')) {
      control.setAttribute('aria-pressed', String(control === button));
    }
    document.querySelector('#gallery-title').textContent = selected.title;
    document.querySelector('#gallery-caption').textContent = selected.caption;
    image.width = selected.width;
    image.height = selected.height;
    image.alt = selected.alt;
    image.src = selected.src;
    link.href = selected.src;
    link.setAttribute('aria-label', `Enlarge the ${selected.title} screenshot`);
  });

  const dialog = document.querySelector('#screenshot-dialog');
  let opener;
  // Keep direct image links usable when native dialogs are unavailable.
  if (typeof dialog.showModal !== 'function') return;
  document.querySelectorAll('[data-enlarge]').forEach(trigger => {
    trigger.addEventListener('click', event => {
      event.preventDefault();
      opener = trigger;
      const source = trigger.querySelector('img');
      const enlarged = document.querySelector('#dialog-image');
      enlarged.src = trigger.href;
      enlarged.alt = source.alt;
      document.querySelector('#dialog-caption').textContent = source.alt;
      dialog.showModal();
      document.documentElement.classList.add('screenshot-open');
    });
  });
  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  // Native modal dialogs contain keyboard focus and handle Escape.
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('screenshot-open');
    if (opener && opener.isConnected) opener.focus();
  });
})();
