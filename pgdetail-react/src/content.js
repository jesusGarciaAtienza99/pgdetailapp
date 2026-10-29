import home from '../content/home.json';

const serviceFiles = import.meta.glob('../content/services/*.json', {
  eager: true,
  import: 'default'
});

export const homeContent = home;
export const services = Object.values(serviceFiles).sort((a, b) => a.order - b.order);
