# Intro to Tailwind

[Text Colour](https://tailwindcss.com/docs/text-color)
[Font Size](https://tailwindcss.com/docs/font-size)
[Font Weight](https://tailwindcss.com/docs/font-weight)


NEW: we are making our own tailwind configuration via tailwind.config.js

 this time instead of running ```npx tailwindcss init```, we ran ```npx tailwindcss init --full``` so we see all the settings we have access to, and henceforth modify

 I see. After running npx tailwind css full, he changes the generated tailwind.config.js to tailwind.default.config.js. Tailwind does not use this file per-sé. 

 When we don't run npx tailwind init, the tailwind.config.js that we just renamed is what tailwind uses under the hood to assign signs. That's why I'm saying persé. 

 IMPORTANT: we are simply keeping that file, instead of deleting, and renaming it so we have a reference to all the styles. Also, it is not recommended to add new styles to the existing tailwind config file. Hence why we are making a new, empty config file, using ```npx tailwindcss init``` (minus the --full flag) which will extend all the default styles (which tailwind is using by the default and of which we have reference to via tailwind.config.default.js)

 So we don't actually need tailwind.config.default.js. This is the code that tailwind uses under the hood. So we can delete it. Tailwind will use this code by default anyways. But I will keep it as a reference to explore some of these default styles

 - I hope this makes sense