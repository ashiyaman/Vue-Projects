Vue.component('modal', {
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title"></slot>
        </p>
        <button class="delete"></button>
      </header>

      <section class="modal-card-body">
        <slot></slot>
      </section>

      <footer class="modal-card-foot">
        <slot name="footer">
          <a class="button is-success">Save changes</a>
          <a class="button">Cancel</a>
        </slot>
      </footer>
    </div>
  </div>
  `
})

new Vue({
  el: '#vue-app',
  data: {
  }
})
