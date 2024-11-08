<template>
  <div class="flex justify-center p-8 items-center bg-gradient-to-r from-indigo-500 to-blue-400">
    <div class="w-full px-8 max-w-md min-h-20 bg-white shadow-2xl rounded-xl transform transition-all duration-300 ease-in-out
     hover:scale-105">
      <h1 class="flex justify-center items-center p-8 text-5xl font-mono tracking-tight text-center text-slate-900 font-extrabold dark:text-white">
        Hello
        <span
            class="bg-blue-100 text-blue-800 text-2xl font-semibold ml-2 px-3 py-1 rounded-lg shadow-inner dark:bg-blue-200 dark:text-blue-800">
          World!
        </span>
      </h1>
      <p class="text-center font-sans px-8 pb-8 text-lg antialiased tracking-tight text-slate-700 dark:text-slate-300">
        Welcome to your Storybook with Vue and UnoCSS! Explore components, play with utility classes, and build elegant
        UI designs effortlessly. UnoCSS provides you with instant, on-demand styling based on utilities similar to
        Tailwind, making it highly flexible and customizable.
      </p>
      <div class="p-4">
        <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-300">
          <p class="mb-2">// Example component with UnoCSS classes:</p>
          <code class="block">
            &lt;div class="bg-sky-500 p-4 rounded-xl shadow-lg hover:bg-sky-600"&gt;<br/>
            &nbsp;&nbsp;&lt;p class="text-white font-bold"&gt;UnoCSS Styled Component&lt;/p&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
/* Additional custom styles (if any) */
</style>
