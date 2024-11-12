document.querySelector('.ripple-button').addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = this.getBoundingClientRect();
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
      ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';
      this.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
            ripple.remove();
      });
});
