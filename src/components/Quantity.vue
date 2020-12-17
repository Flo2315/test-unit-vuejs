<template>
  <div>
    <p>Current quantity: {{ quantity }}</p>
    <button
      @click="decrement"
      :disabled="quantity <= minQuantity"
      class="decrement"
    >
      -
    </button>
    <button
      @click="increment"
      :disabled="quantity >= maxQuantity"
      class="increment"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  props: {
    minQuantity: {
      type: Number,
      default: 1
    },
    maxQuantity: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    increment() {
      this.quantity += 1;
    },
    decrement() {
      this.quantity -= 1;
    }
  }
};
</script>

<style scoped>
button {
  outline: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: solid 1px #2c3e50;
  margin: 0 5px;
  transition: all 0.5s ease-in;
}

button:disabled {
  cursor: not-allowed;
  border-color: #bac3ce;
}

button:not(:disabled):hover {
  background: #2c3e50;
  color: #ffffff;
}
</style>
