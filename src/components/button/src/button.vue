<template>
  <button
  @click="handleClick"
  :class="[
    'mg-btn',
    type === 'none' ? '' : 'mg-btn mg-btn-' + type,
    round ? 'mg-btn-round' : '',
    circle ? 'mg-btn-circle' : ''
  ]">
  <i :class="'fa fa-' + icon" v-if="icon !== 'none'" aria-hidden="true"></i>
  <span v-if="!circle">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'MgButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: 'none'
    },
    icon: {
      type: String,
      default: 'none'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'basic';
  .mg-btn {
   display: inline-block;
   font-weight: 400;
   color: #212529;
   text-align: center;
   vertical-align: middle;
   @include user-select(none);
   background-color: #f8f9fa;
   border: 1px solid transparent;
   padding: .375rem .75rem;
   font-size: 1rem;
   line-height: 1;
   @include border-radius(.35rem);
   transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
   &:hover {
     @include color-mix(#212529, #c2c6ca, #c2c6ca);
   }
   span {
     margin-left: .125rem;
     margin-right: .125rem;
   }
  }
  .mg-btn-primary {
    @include color-mix(#fff, #4091ff, #4091ff);
    &:hover {
      @include color-mix(#fff, #0069d9, #0062cc);
    }
  }
  .mg-btn-success {
    @include color-mix(#fff, #67c23a, #67c23a);
    &:hover {
      @include color-mix(#fff, #28a745, #28a745);
    }
  }
  .mg-btn-danger {
    @include color-mix(#fff, #f56c6c, #f56c6c);
    &:hover {
      @include color-mix(#fff, #dc3545, #dc3545);
    }
  }
  .mg-btn-warning {
    @include color-mix(#fff, #ffc107, #ffc107);
    &:hover {
      @include color-mix(#fff, #e6a23c, #e6a23c);
    }
  }
  .mg-btn-info {
    @include color-mix(#fff, #909399, #909399);
    &:hover {
      @include color-mix(#fff, #6c757d, #6c757d);
    }
  }
  .mg-btn-link {
    font-weight: 400;
    color: #007bff;
    background-color: transparent;
    text-decoration: none;
    &:hover {
      color: #0056b3;
      text-decoration: underline;
      background-color: transparent;
    }
  }
  .mg-btn-round {
    @include border-radius(1.5rem);
  }
  .mg-btn-circle {
    @include border-radius(50%);
    padding: .375rem;
  }
</style>
