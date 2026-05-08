<template>
  <div class="max-w-4xl mx-auto">
    <div class="border-4 border-black bg-brutal-orange p-8 mb-12 brutal-shadow transform -rotate-1">
      <h1 class="text-6xl md:text-8xl font-black text-black">
        SCREAM AT US
      </h1>
      <p class="text-2xl font-bold mt-4 bg-black text-white inline-block px-4 py-2">
        WE PROBABLY WON'T REPLY.
      </p>
    </div>

    <form @submit.prevent="submitForm" class="bg-white border-4 border-black p-8 md:p-12 brutal-shadow space-y-8">
      <!-- Name Input -->
      <div class="flex flex-col gap-2">
        <label for="name" class="text-2xl font-black uppercase">WHO ARE YOU?</label>
        <input 
          id="name" 
          type="text" 
          placeholder="YOUR NAME HERE"
          class="w-full border-4 border-black p-4 text-xl font-bold focus:outline-none focus:bg-brutal-green transition-colors brutal-shadow focus:translate-x-1 focus:translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          required
        />
      </div>

      <!-- Email Input -->
      <div class="flex flex-col gap-2">
        <label for="email" class="text-2xl font-black uppercase">WHERE TO SEND INVOICES?</label>
        <input 
          id="email" 
          type="email" 
          placeholder="YOUR@EMAIL.COM"
          class="w-full border-4 border-black p-4 text-xl font-bold focus:outline-none focus:bg-brutal-blue transition-colors brutal-shadow focus:translate-x-1 focus:translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          required
        />
      </div>

      <!-- Message Input -->
      <div class="flex flex-col gap-2">
        <label for="message" class="text-2xl font-black uppercase">WHAT DO YOU WANT?</label>
        <textarea 
          id="message" 
          rows="5"
          placeholder="I WANT A BORING CORPORATE WEBSITE..."
          class="w-full border-4 border-black p-4 text-xl font-bold focus:outline-none focus:bg-brutal-magenta focus:text-white transition-colors brutal-shadow focus:translate-x-1 focus:translate-y-1 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit"
        class="w-full border-4 border-black bg-brutal-yellow p-6 text-4xl font-black uppercase brutal-shadow hover:bg-brutal-green active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 transition-all mt-8"
      >
        SEND IT
      </button>
    </form>
  </div>
</template>

<script setup>
const submitForm = () => {
  alert('FORM SUBMITTED. NOW WE WAIT.');
};
</script>
