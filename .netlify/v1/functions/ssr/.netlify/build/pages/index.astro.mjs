/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute, u as unescapeHTML, f as createAstro, k as renderComponent } from '../chunks/astro/server_J8imxusK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Navbar, b as $$Footer, c as $$WhatsappButton } from '../chunks/WhatsappButton_B1USJepQ.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<section class="relative bg-gradient-to-br from-[#0c0c1d] to-[#121225] text-white overflow-hidden"> <!-- Part\xEDculas --> <canvas id="particles-canvas" class="absolute inset-0 z-0"></canvas> <!-- Contenido principal --> <div class="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-0 pt-40 pb-36 px-6"> <!-- Texto izquierda --> <div> <p class="uppercase text-sm tracking-widest text-[#6E8BFA] mb-4">\nTODO EL CONTROL EN UN SOLO LUGAR\n</p> <!-- T\xCDTULO ANIMADO --> <h1 id="animated-title" class="text-4xl md:text-5xl font-extrabold leading-tight mb-6 transition-opacity duration-700">\nFacturaci\xF3n f\xE1cil y r\xE1pida <br> <span class="text-[#55b290]">pensada para emprendedores</span> </h1> <p class="text-base text-white/80 mb-8 max-w-md">\n\xDAnete a los emprendimientos que simplifican todo desde una sola\n        plataforma.\n</p> <div class="flex flex-wrap gap-4"> <a href="https://wa.me/573003146150" target="_blank" class="bg-[#55b290] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3e9c79] transition shadow-lg">\nEscr\xEDbenos\n</a> <a href="#precios" class="bg-white text-[#55b290] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow">\nConocer planes\n</a> </div> </div> <!-- Imagen derecha --> <div class="relative flex justify-center"> <img src="/img/kup.png" alt="Laptop sistema" class="w-full max-w-md drop-shadow-2xl"> </div> </div> <!-- WhatsApp --> <a href="https://wa.me/573003146150" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"> <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28"> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.063.52 4.016 1.508 5.77L0 24l6.387-1.672C8.15 23.478 10.058 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path> </svg> </a> <!-- Part\xEDculas --> <script>\n    const canvas = document.getElementById("particles-canvas");\n    const ctx = canvas.getContext("2d");\n    let particlesArray;\n\n    const resizeCanvas = () => {\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    };\n\n    window.addEventListener("resize", () => {\n      resizeCanvas();\n      createParticles();\n    });\n\n    const createParticles = () => {\n      particlesArray = [];\n      const numberOfParticles = 90;\n      for (let i = 0; i < numberOfParticles; i++) {\n        particlesArray.push({\n          x: Math.random() * canvas.width,\n          y: Math.random() * canvas.height,\n          size: Math.random() * 2 + 1,\n          speedX: Math.random() * 1.5 - 0.75,\n          speedY: Math.random() * 1.5 - 0.75,\n        });\n      }\n    };\n\n    const drawParticles = () => {\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      ctx.fillStyle = "rgba(255,255,255,0.4)";\n      for (let i = 0; i < particlesArray.length; i++) {\n        const p = particlesArray[i];\n        ctx.beginPath();\n        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);\n        ctx.fill();\n\n        p.x += p.speedX;\n        p.y += p.speedY;\n\n        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;\n        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;\n      }\n      requestAnimationFrame(drawParticles);\n    };\n\n    resizeCanvas();\n    createParticles();\n    drawParticles();\n  <\/script> <!-- Cambia el t\xEDtulo cada 5 segundos --> <script>\n    const title = document.getElementById("animated-title");\n\n    const titles = [\n      `Facturaci\xF3n f\xE1cil y r\xE1pida<br><span class="text-[#55b290]">pensada para emprendedores</span>`,\n      `Todo tu negocio en un solo click:<br><span class="text-[#55b290]">ventas, gastos e inventario</span>`,\n      `Control total de todas tus ventas<br><span class="text-[#55b290]">sin hojas de Excel, sin factureros</span>`,\n    ];\n\n    let index = 0;\n\n    setInterval(() => {\n      title.classList.add("opacity-0");\n      setTimeout(() => {\n        index = (index + 1) % titles.length;\n        title.innerHTML = titles[index];\n        title.classList.remove("opacity-0");\n      }, 400);\n    }, 5000);\n  <\/script> </section>'], ["", '<section class="relative bg-gradient-to-br from-[#0c0c1d] to-[#121225] text-white overflow-hidden"> <!-- Part\xEDculas --> <canvas id="particles-canvas" class="absolute inset-0 z-0"></canvas> <!-- Contenido principal --> <div class="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-0 pt-40 pb-36 px-6"> <!-- Texto izquierda --> <div> <p class="uppercase text-sm tracking-widest text-[#6E8BFA] mb-4">\nTODO EL CONTROL EN UN SOLO LUGAR\n</p> <!-- T\xCDTULO ANIMADO --> <h1 id="animated-title" class="text-4xl md:text-5xl font-extrabold leading-tight mb-6 transition-opacity duration-700">\nFacturaci\xF3n f\xE1cil y r\xE1pida <br> <span class="text-[#55b290]">pensada para emprendedores</span> </h1> <p class="text-base text-white/80 mb-8 max-w-md">\n\xDAnete a los emprendimientos que simplifican todo desde una sola\n        plataforma.\n</p> <div class="flex flex-wrap gap-4"> <a href="https://wa.me/573003146150" target="_blank" class="bg-[#55b290] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3e9c79] transition shadow-lg">\nEscr\xEDbenos\n</a> <a href="#precios" class="bg-white text-[#55b290] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow">\nConocer planes\n</a> </div> </div> <!-- Imagen derecha --> <div class="relative flex justify-center"> <img src="/img/kup.png" alt="Laptop sistema" class="w-full max-w-md drop-shadow-2xl"> </div> </div> <!-- WhatsApp --> <a href="https://wa.me/573003146150" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"> <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28"> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.063.52 4.016 1.508 5.77L0 24l6.387-1.672C8.15 23.478 10.058 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path> </svg> </a> <!-- Part\xEDculas --> <script>\n    const canvas = document.getElementById("particles-canvas");\n    const ctx = canvas.getContext("2d");\n    let particlesArray;\n\n    const resizeCanvas = () => {\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    };\n\n    window.addEventListener("resize", () => {\n      resizeCanvas();\n      createParticles();\n    });\n\n    const createParticles = () => {\n      particlesArray = [];\n      const numberOfParticles = 90;\n      for (let i = 0; i < numberOfParticles; i++) {\n        particlesArray.push({\n          x: Math.random() * canvas.width,\n          y: Math.random() * canvas.height,\n          size: Math.random() * 2 + 1,\n          speedX: Math.random() * 1.5 - 0.75,\n          speedY: Math.random() * 1.5 - 0.75,\n        });\n      }\n    };\n\n    const drawParticles = () => {\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      ctx.fillStyle = "rgba(255,255,255,0.4)";\n      for (let i = 0; i < particlesArray.length; i++) {\n        const p = particlesArray[i];\n        ctx.beginPath();\n        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);\n        ctx.fill();\n\n        p.x += p.speedX;\n        p.y += p.speedY;\n\n        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;\n        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;\n      }\n      requestAnimationFrame(drawParticles);\n    };\n\n    resizeCanvas();\n    createParticles();\n    drawParticles();\n  <\/script> <!-- Cambia el t\xEDtulo cada 5 segundos --> <script>\n    const title = document.getElementById("animated-title");\n\n    const titles = [\n      \\`Facturaci\xF3n f\xE1cil y r\xE1pida<br><span class="text-[#55b290]">pensada para emprendedores</span>\\`,\n      \\`Todo tu negocio en un solo click:<br><span class="text-[#55b290]">ventas, gastos e inventario</span>\\`,\n      \\`Control total de todas tus ventas<br><span class="text-[#55b290]">sin hojas de Excel, sin factureros</span>\\`,\n    ];\n\n    let index = 0;\n\n    setInterval(() => {\n      title.classList.add("opacity-0");\n      setTimeout(() => {\n        index = (index + 1) % titles.length;\n        title.innerHTML = titles[index];\n        title.classList.remove("opacity-0");\n      }, 400);\n    }, 5000);\n  <\/script> </section>'])), maybeRenderHead());
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Hero.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="caracteristicas" class="py-20 bg-gray-100 px-6"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl font-extrabold text-center mb-12 text-[#343439]">
Características clave
</h2> <div class="grid gap-8 md:grid-cols-3"> <!-- Card 1 --> <div class="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"> <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#6E8BFA] to-[#55b290] shadow-md"> <img src="/img/1.png" alt="Nube" class="w-7 h-7"> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">
100% en la nube
</h3> <p class="text-gray-600 text-sm">
Accede desde cualquier lugar a la información de tu emprendimiento.
</p> </div> <!-- Card 2 --> <div class="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"> <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#6E8BFA] to-[#55b290] shadow-md"> <img src="/img/2.png" alt="Inventario" class="w-7 h-7"> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">
Control de Inventario
</h3> <p class="text-gray-600 text-sm">
Gestiona tus productos y existencias en tiempo real.
</p> </div> <!-- Card 3 --> <div class="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"> <div class="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#6E8BFA] to-[#55b290] shadow-md"> <img src="/img/3.png" alt="Reportes" class="w-7 h-7"> </div> <h3 class="text-lg font-semibold text-gray-900 mb-2">
Reportes y Estadísticas
</h3> <p class="text-gray-600 text-sm">
Obtén información útil de tus ventas y finanzas.
</p> </div> </div> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Features.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="precios" class="py-20 bg-gray-50 px-6"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-14 text-[#343439]">
Encuentra el Plan Adecuado para tu negocio
</h2> <!-- Selector de periodo --> <div class="flex justify-center mb-10"> <div class="flex items-center gap-3 text-sm font-medium text-gray-600"> <span id="label-trimestral" class="transition cursor-pointer">Trimestral</span> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="plan-toggle" class="sr-only peer"> <div class="w-11 h-6 bg-gray-400 rounded-full peer-checked:bg-[#55b290] transition"></div> <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-full"></div> </label> <span id="label-anual" class="transition cursor-pointer">Anual</span> </div> </div> <!-- Planes --> <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"> <!-- Plan Básico --> <div class="border border-gray-200 p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition duration-300"> <h3 class="text-2xl font-bold text-center text-[#f0c654] mb-2">
Plan Básico
</h3> <p id="ciclo-basico" class="text-sm font-medium text-center text-gray-400 mb-1">
Trimestral
</p> <p id="precio-basico" class="text-4xl font-extrabold text-center text-black mb-2">
$240.000
</p> <p id="ahorro-basico" class="text-center text-sm text-green-600 font-semibold mb-2 hidden">
¡Ahorra $160.000 con el plan anual!
</p> <p class="text-center text-gray-600 mb-6">Ideal para emprendedores</p> <ul class="space-y-3 mb-6 text-gray-700 text-sm"> <li class="flex items-center gap-2">✔ Gestión de productos</li> <li class="flex items-center gap-2">✔ Gestión de clientes</li> <li class="flex items-center gap-2">✔ Factura POS</li> <li class="flex items-center gap-2">✔ Inventario</li> <li class="flex items-center gap-2">✔ 2 usuarios</li> <li class="flex items-center gap-2">✔ Cierre de caja</li> <li class="flex items-center gap-2">✔ Reportes</li> </ul> <div class="text-center"> <a id="btn-basico" href="https://wa.me/573003146150?text=Hola,%20estoy%20interesado%20en%20el%20plan%20Básico%20Trimestral%20de%20CuarentaF" target="_blank" class="bg-[#55b290] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3e9c79] transition">
Seleccionar
</a> </div> </div> <!-- Plan Profesional --> <div class="relative border-2 border-[#55b290] p-8 rounded-2xl bg-white shadow-xl ring-2 ring-[#55b290] transition duration-300 transform hover:scale-105"> <div class="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span class="bg-[#55b290] text-white px-4 py-1 text-xs font-bold rounded-full shadow-md">MÁS POPULAR</span> </div> <h3 class="text-2xl font-bold text-center text-[#55b290] mb-2">
Plan Profesional
</h3> <p id="ciclo-pro" class="text-sm font-medium text-center text-gray-400 mb-1">
Trimestral
</p> <p id="precio-pro" class="text-4xl font-extrabold text-center text-black mb-2">
$360.000
</p> <p id="ahorro-pro" class="text-center text-sm text-green-600 font-semibold mb-2 hidden">
¡Ahorra $240.000 con el plan anual!
</p> <p class="text-center text-gray-600 mb-6">Para negocios en crecimiento</p> <ul class="space-y-3 mb-6 text-gray-700 text-sm"> <li class="flex items-center gap-2">✔ Todo lo del plan básico</li> <li class="flex items-center gap-2">✔ Gestión de proveedores</li> <li class="flex items-center gap-2">✔ Usuarios ilimitados</li> <li class="flex items-center gap-2">✔ Soporte prioritario</li> <li class="flex items-center gap-2 font-semibold text-[#55b290]">
✔ Facturación electrónica
</li> <li class="flex items-center gap-2">✔ Indicadores</li> </ul> <div class="text-center"> <a id="btn-pro" href="https://wa.me/573003146150?text=Hola,%20estoy%20interesado%20en%20el%20plan%20Profesional%20Trimestral%20de%20CuarentaF" target="_blank" class="bg-[#55b290] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3e9c79] transition">
Seleccionar
</a> </div> </div> </div> ${renderScript($$result, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Pricing.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Pricing.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-6 py-20 bg-gradient-to-br from-[#0e1f1c] to-[#102e2b] text-white"> <div class="max-w-4xl mx-auto bg-[#152823]/80 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-[#2f4a43]"> <!-- Título --> <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-4 text-[#55b290]">
Beneficios de obtener <span class="text-white">CuarentaF</span> </h2> <!-- Logo centrado --> <div class="flex justify-center mb-8"> <img src="/img/favico.jpg" alt="Logo CuarentaF" class="w-14 h-14 rounded-full shadow-lg border-2 border-[#55b290]"> </div> <!-- Lista de beneficios --> <ul class="space-y-5 text-sm md:text-base text-gray-200"> <li class="flex items-start gap-4 hover:text-white transition-all duration-300"> <img src="/img/iconf.png" alt="icono" class="w-6 h-6 mt-1"> <p>Genera y envía facturas digitales 100% en línea con facilidad.</p> </li> <li class="flex items-start gap-4 hover:text-white transition-all duration-300"> <img src="/img/iconf.png" alt="icono" class="w-6 h-6 mt-1"> <p>
Control de inventario en tiempo real para tomar mejores decisiones.
</p> </li> <li class="flex items-start gap-4 hover:text-white transition-all duration-300"> <img src="/img/iconf.png" alt="icono" class="w-6 h-6 mt-1"> <p>Software rápido, intuitivo y disponible desde cualquier lugar.</p> </li> <li class="flex items-start gap-4 hover:text-white transition-all duration-300"> <img src="/img/iconf.png" alt="icono" class="w-6 h-6 mt-1"> <p>Accede a tus datos de negocio en la nube con total seguridad.</p> </li> </ul> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Benefits.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="preguntas" class="py-20 bg-gray-100 px-6"> <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
Preguntas frecuentes
</h2> <div class="max-w-3xl mx-auto space-y-4"> <!-- ITEM --> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿Puedo probar antes de comprar?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
Sí, ofrecemos una reunión gratuita, donde aclaramos todas tus dudas.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿Puedo cancelar en cualquier momento?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
Sí, no tienes contratos obligatorios ni penalizaciones.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿Puedo cambiar de plan en cualquier momento?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
Sí, puedes cambiar de plan cuando lo necesites. Si decides pasar de
        mensual a trimestral, o viceversa, el sistema ajustará automáticamente
        tu periodo de facturación.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿Qué formas de pago aceptan?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
Aceptamos consignaciones, transferencias bancarias, y pagos digitales
        como Nequi, Daviplata y PSE. Al finalizar el registro, te mostraremos
        las opciones disponibles.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿El software funciona en celular y computador?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
Sí, es 100% compatible con celulares, tabletas y computadores. Solo
        necesitas conexión a internet.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿La suscripción incluye soporte técnico?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
¡Sí! Te acompañamos por WhatsApp o llamada en caso de dudas, errores o
        configuración. Nunca estás solo.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿Es obligatorio emitir facturas electrónicas?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
En Colombia, si vendes más de cierto monto mensual o necesitas soportar
        gastos, debes facturar electrónicamente. Nuestro sistema te ayuda a
        cumplir con la DIAN fácilmente.
</p> </details> <details class="group bg-white p-5 rounded-xl shadow transition-all open:shadow-md"> <summary class="flex items-center justify-between cursor-pointer font-semibold text-gray-800 text-lg">
¿El software sirve para cualquier tipo de negocio?
<span class="text-xl transition-transform duration-300 group-open:rotate-180">+</span> </summary> <p class="mt-3 text-gray-600">
Sí. Nuestro sistema está diseñado para adaptarse a todo tipo de
        emprendimientos: tiendas, cafeterías, servicios, moda, belleza,
        ferreterías y más.
</p> </details> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/FAQ.astro", void 0);

const $$CommerceTypes = createComponent(($$result, $$props, $$slots) => {
  const comercios = [
    { title: "Calzado", icon: "/img/zapatos.png" },
    { title: "Boutique", icon: "/img/boutique.png" },
    { title: "Tecnolog\xEDa", icon: "/img/tecnologia.png" },
    { title: "Bolsos", icon: "/img/bolsos.png" },
    { title: "Accesorios", icon: "/img/belleza.png" },
    {
      title: `Variedades`,
      icon: "/img/products.png"
    },
    { title: "Gorras", icon: "/img/gorras.png" },
    { title: "Bebidas", icon: "/img/bebidas.png" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white px-6 text-center"> <h2 class="text-3xl font-bold text-center mb-2">
CuarentaF en todos los <span class="text-green-600">tipos de comercio</span> </h2> <p class="text-gray-500 mb-12">
Aumenta la productividad.<br>
Optimiza el trabajo haciéndolo y viéndolo en un solo lugar.
</p> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"> ${comercios.map((item) => renderTemplate`<div class="border rounded-2xl p-4 shadow hover:shadow-md transition"> <img${addAttribute(item.icon, "src")}${addAttribute(item.title, "alt")} class="w-10 h-10 mx-auto mb-3"> <h3 class="font-semibold text-lg leading-tight">${unescapeHTML(item.title)}</h3> </div>`)} </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/CommerceTypes.astro", void 0);

const $$Astro$3 = createAstro();
const $$VideoInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$VideoInfo;
  const { videoSrc = "/videos/video.mp4", title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-12 px-4"> <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"> <!-- Video local con fondo amarillo --> <div class="relative"> <div class="absolute inset-0 bg-yellow-400 -left-12 -right-8 -top-8 -bottom-8 rounded-xl -z-10"></div> <div class="relative rounded-xl overflow-hidden aspect-video shadow-lg"> <video class="w-full h-full object-cover" controls autoplay muted loop playsinline> <source${addAttribute(videoSrc, "src")} type="video/mp4">
Tu navegador no soporta el video.
</video> </div> </div> <!-- Texto --> <div> <h2 class="text-3xl font-bold text-gray-900 mb-4"> ${title || "\xA1No te compliques con cuentas en papel y l\xE1piz!"} </h2> <p class="text-gray-600 text-lg leading-relaxed"> ${description || "En Treinta somos los aliados de tu negocio y queremos verte crecer..."} </p> </div> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/VideoInfo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Divtext = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Divtext;
  const {
    title = "Tu emprendimiento no puede esperar m\xE1s",
    subtitle = "Empieza hoy a facturar, vender y crecer sin complicaciones. CuarentaF te da todo lo que necesitas para comenzar de forma f\xE1cil, r\xE1pida y legal."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-gradient-to-r from-white via-[#f9fbfc] to-[#f2f6f5] text-black py-24 px-6 flex items-center justify-center" data-astro-cid-55shnxdo> <div class="max-w-2xl text-center space-y-6" data-astro-cid-55shnxdo> <!-- Logo animado --> <div class="flex justify-center animate-fade-in-up delay-100" data-astro-cid-55shnxdo> <img src="/img/favico.jpg" alt="Logo 40F" class="w-14 h-14 rounded-full shadow-md" data-astro-cid-55shnxdo> </div> <!-- Subtítulo --> <p class="text-lg md:text-xl text-gray-600 animate-fade-in-up delay-300" data-astro-cid-55shnxdo> ${subtitle} </p> <!-- Título --> <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-[#343439] animate-fade-in-up delay-500" data-astro-cid-55shnxdo> ${title} <br data-astro-cid-55shnxdo> <span class="text-[#55b290]" data-astro-cid-55shnxdo>CuarentaF</span> </h1> <!-- Botón WhatsApp --> <a href="https://wa.me/573003146150?text=Hola,%20quiero%20empezar%20con%20CuarentaF" target="_blank" class="inline-flex items-center gap-2 bg-[#55b290] text-white text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#3e9c79] transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up delay-700 animate-heartbeat" data-astro-cid-55shnxdo>
🚀 Empezar ahora
</a> </div> </section> `;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Divtext.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<section id="contacto" class="w-full bg-gradient-to-br from-white to-[#ffff] py-20 px-6"> <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start"> <!-- Columna izquierda: texto --> <div> <h2 class="text-3xl md:text-4xl font-extrabold text-[#067c69] mb-2">\nComun\xEDcate con nuestro equipo\n</h2> <p class="text-gray-600 mb-6">\xA1Te brindamos soporte todo el tiempo!</p> <h3 class="text-lg font-semibold text-gray-800 mb-1">Cont\xE1ctanos</h3> <p class="text-gray-600 mb-6">\nSi tienes preguntas, sugerencias o simplemente quieres compartirnos tu\n        historia, estamos aqu\xED para escucharte.\n</p> <p class="text-lg mb-6">\nDescubre <strong class="text-[#067c69] font-bold">facturar f\xE1cil y r\xE1pido</strong> </p> </div> <!-- Columna derecha: formulario a WhatsApp --> <form onsubmit="return sendToWhatsApp(event)" class="space-y-4 w-full"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <input id="nombre" type="text" placeholder="Nombre" required class="w-full p-3 rounded border border-gray-300"> <input id="correo" type="email" placeholder="Correo" required class="w-full p-3 rounded border border-gray-300"> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <input id="telefono" type="text" placeholder="Tel\xE9fono" class="w-full p-3 rounded border border-gray-300"> <input id="asunto" type="text" placeholder="Asunto" class="w-full p-3 rounded border border-gray-300"> </div> <textarea id="mensaje" rows="4" placeholder="Mensaje" class="w-full p-3 rounded border border-gray-300 resize-none"></textarea> <div class="flex items-start gap-2 text-sm"> <input type="checkbox" id="terms" class="mt-1" checked required> <label for="terms" class="text-gray-700">\nAl hacer clic aceptas los T\xE9rminos y Condiciones y Pol\xEDtica de\n          Tratamiento de Datos.\n</label> </div> <button type="submit" class="w-full bg-[#067c69] hover:bg-[#045e50] text-white font-medium py-3 px-6 rounded transition">\nEnviar\n</button> </form> </div> <!-- Informaci\xF3n de contacto adicional --> <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-4"> <!-- Direcci\xF3n --> <div class="bg-white shadow border border-gray-200 rounded-xl text-center py-8 px-4"> <div class="mb-2 flex justify-center"> <img src="/img/11.png" alt="Tel\xE9fono" class="w-10 h-10"> </div> <h4 class="text-lg font-semibold text-gray-700 mb-1">Direcci\xF3n</h4> <p class="text-gray-600 text-sm">Valledupar, Cesar</p> </div> <!-- Correo --> <div class="bg-white shadow border border-gray-200 rounded-xl text-center py-8 px-4"> <div class="mb-2 flex justify-center"> <img src="/img/22.png" alt="Correo" class="w-10 h-10"> </div> <h4 class="text-lg font-semibold text-gray-700 mb-1">Correo</h4> <p class="text-gray-600 text-sm">santiago66jm@gmail.com</p> </div> <!-- Tel\xE9fono --> <div class="bg-white shadow border border-gray-200 rounded-xl text-center py-8 px-4"> <div class="mb-2 flex justify-center"> <img src="/img/33.png" alt="Tel\xE9fono" class="w-10 h-10"> </div> <h4 class="text-lg font-semibold text-gray-700 mb-1">Tel\xE9fono</h4> <p class="text-gray-600 text-sm">+57 300 314 6150</p> </div> </div> <!-- Script para env\xEDo por WhatsApp --> <script>\n    function sendToWhatsApp(e) {\n      e.preventDefault();\n\n      const nombre = document.getElementById("nombre").value;\n      const correo = document.getElementById("correo").value;\n      const telefono = document.getElementById("telefono").value;\n      const asunto = document.getElementById("asunto").value;\n      const mensaje = document.getElementById("mensaje").value;\n\n      const texto = `Hola, me gustar\xEDa contactar al equipo:\\n\\n Nombre: ${nombre}\\n Correo: ${correo}\\nTel\xE9fono: ${telefono}\\n Asunto: ${asunto}\\n Mensaje: ${mensaje}`;\n      const url = `https://wa.me/573003146150?text=${encodeURIComponent(texto)}`;\n\n      window.open(url, "_blank");\n      return false;\n    }\n  <\/script> </section>'], ["", '<section id="contacto" class="w-full bg-gradient-to-br from-white to-[#ffff] py-20 px-6"> <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start"> <!-- Columna izquierda: texto --> <div> <h2 class="text-3xl md:text-4xl font-extrabold text-[#067c69] mb-2">\nComun\xEDcate con nuestro equipo\n</h2> <p class="text-gray-600 mb-6">\xA1Te brindamos soporte todo el tiempo!</p> <h3 class="text-lg font-semibold text-gray-800 mb-1">Cont\xE1ctanos</h3> <p class="text-gray-600 mb-6">\nSi tienes preguntas, sugerencias o simplemente quieres compartirnos tu\n        historia, estamos aqu\xED para escucharte.\n</p> <p class="text-lg mb-6">\nDescubre <strong class="text-[#067c69] font-bold">facturar f\xE1cil y r\xE1pido</strong> </p> </div> <!-- Columna derecha: formulario a WhatsApp --> <form onsubmit="return sendToWhatsApp(event)" class="space-y-4 w-full"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <input id="nombre" type="text" placeholder="Nombre" required class="w-full p-3 rounded border border-gray-300"> <input id="correo" type="email" placeholder="Correo" required class="w-full p-3 rounded border border-gray-300"> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <input id="telefono" type="text" placeholder="Tel\xE9fono" class="w-full p-3 rounded border border-gray-300"> <input id="asunto" type="text" placeholder="Asunto" class="w-full p-3 rounded border border-gray-300"> </div> <textarea id="mensaje" rows="4" placeholder="Mensaje" class="w-full p-3 rounded border border-gray-300 resize-none"></textarea> <div class="flex items-start gap-2 text-sm"> <input type="checkbox" id="terms" class="mt-1" checked required> <label for="terms" class="text-gray-700">\nAl hacer clic aceptas los T\xE9rminos y Condiciones y Pol\xEDtica de\n          Tratamiento de Datos.\n</label> </div> <button type="submit" class="w-full bg-[#067c69] hover:bg-[#045e50] text-white font-medium py-3 px-6 rounded transition">\nEnviar\n</button> </form> </div> <!-- Informaci\xF3n de contacto adicional --> <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-4"> <!-- Direcci\xF3n --> <div class="bg-white shadow border border-gray-200 rounded-xl text-center py-8 px-4"> <div class="mb-2 flex justify-center"> <img src="/img/11.png" alt="Tel\xE9fono" class="w-10 h-10"> </div> <h4 class="text-lg font-semibold text-gray-700 mb-1">Direcci\xF3n</h4> <p class="text-gray-600 text-sm">Valledupar, Cesar</p> </div> <!-- Correo --> <div class="bg-white shadow border border-gray-200 rounded-xl text-center py-8 px-4"> <div class="mb-2 flex justify-center"> <img src="/img/22.png" alt="Correo" class="w-10 h-10"> </div> <h4 class="text-lg font-semibold text-gray-700 mb-1">Correo</h4> <p class="text-gray-600 text-sm">santiago66jm@gmail.com</p> </div> <!-- Tel\xE9fono --> <div class="bg-white shadow border border-gray-200 rounded-xl text-center py-8 px-4"> <div class="mb-2 flex justify-center"> <img src="/img/33.png" alt="Tel\xE9fono" class="w-10 h-10"> </div> <h4 class="text-lg font-semibold text-gray-700 mb-1">Tel\xE9fono</h4> <p class="text-gray-600 text-sm">+57 300 314 6150</p> </div> </div> <!-- Script para env\xEDo por WhatsApp --> <script>\n    function sendToWhatsApp(e) {\n      e.preventDefault();\n\n      const nombre = document.getElementById("nombre").value;\n      const correo = document.getElementById("correo").value;\n      const telefono = document.getElementById("telefono").value;\n      const asunto = document.getElementById("asunto").value;\n      const mensaje = document.getElementById("mensaje").value;\n\n      const texto = \\`Hola, me gustar\xEDa contactar al equipo:\\\\n\\\\n Nombre: \\${nombre}\\\\n Correo: \\${correo}\\\\nTel\xE9fono: \\${telefono}\\\\n Asunto: \\${asunto}\\\\n Mensaje: \\${mensaje}\\`;\n      const url = \\`https://wa.me/573003146150?text=\\${encodeURIComponent(texto)}\\`;\n\n      window.open(url, "_blank");\n      return false;\n    }\n  <\/script> </section>'])), maybeRenderHead());
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Contact.astro", void 0);

const $$Divtextu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4"> <div class="bg-[url('/img/textura.png')] bg-cover bg-center text-white rounded-2xl shadow-lg px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in"> <!-- Texto --> <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6"> <div> <h2 class="text-xl font-extrabold leading-tight drop-shadow">
2025 ES FACILITO<br> <span class="text-white">CON CUARENTAF! ✅</span> </h2> </div> <div class="text-sm md:text-base leading-tight drop-shadow"> <p>El futuro de tu emprendimiento comienza hoy:</p> <p class="font-semibold text-white">Crece y ordena tu negocio 🚀</p> </div> </div> <!-- Botón --> <a href="https://wa.me/573003146150?text=Hola,%20quiero%20la%20demo%20con%20descuento" target="_blank" class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 animate-pulse shadow-md text-sm">
INICIA YA
</a> </div> </div>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Divtextu.astro", void 0);

const $$BannerDemo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white py-20 px-0"> <div class="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-[#9a8cff] to-[#742aff] text-white px-6 py-16 text-center shadow-lg"> <!-- Logo --> <div class="mb-6"> <img src="/img/favico.jpg" alt="Logo CuarentaF" class="w-12 h-12 mx-auto rounded-full shadow-md"> </div> <!-- Subtítulo --> <p class="uppercase text-sm tracking-wide font-semibold text-white/70">
Ajuste perfecto para cada equipo
</p> <!-- Título --> <h2 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
¡No te vayas<br>
sin probar nuestro<br> <span class="text-white">Software!</span> </h2> <!-- Descripción --> <p class="text-base text-white/90 mb-8 max-w-xl mx-auto">
Comienza rápidamente con soluciones listas para usar.
</p> <!-- Botón --> <a href="https://wa.me/573003146150?text=Hola,%20quiero%20agendar%20una%20demostración" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
Agendar consulta
</a> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/BannerDemo.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$SoporteInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section class="bg-[#35298b] text-white py-20 px-6"> <div class="max-w-6xl mx-auto"> <h2 class="text-center text-2xl md:text-3xl font-bold mb-6">\nNo te preocupes por nada t\xE9cnico. Nosotros s\xED<br class="hidden md:block">\nte entregamos todo listo para usar ...\n</h2> <hr class="border-t border-[#59d1e2] mb-10 w-2/3 mx-auto"> <div class="grid md:grid-cols-2 gap-8 items-center"> <!-- Descripci\xF3n --> <div> <p class="text-lg leading-relaxed">\nSoportes m\xE1s eficientes, actualizaciones constantes,<br>\ny sin comprar equipos complejos.\n</p> </div> <!-- Estad\xEDstica con animaci\xF3n --> <div class="bg-[#1a165c] rounded-xl text-center p-8"> <div id="contador" class="text-4xl font-bold text-[#b2b9ff] mb-2">\n0\n</div> <p class="text-sm">\nMinutos de trabajo optimizados, gracias a su compatibilidad<br>\ncon empleados y clientes\n</p> </div> </div> </div> <!-- Script para CountUp --> <script type="module">\n    import { CountUp } from "https://cdn.skypack.dev/countup.js";\n\n    const el = document.getElementById("contador");\n    if (el) {\n      const observer = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            const countUp = new CountUp("contador", 2000000, {\n              duration: 2,\n              separator: ".",\n            });\n            countUp.start();\n            observer.disconnect();\n          }\n        });\n      });\n\n      observer.observe(el);\n    }\n  <\/script> </section>'])), maybeRenderHead());
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/SoporteInfo.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$PopPrivacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="popup-privacidad" class="fixed bottom-6 right-6 bg-white border border-[#55b290] shadow-lg rounded-xl p-4 max-w-sm w-full z-[1000] hidden transition-all duration-500"> <h3 class="text-base font-semibold text-[#1a1a1a] mb-1">\nTus datos no son un juego \u{1F6E1}\uFE0F\n</h3> <p class="text-sm text-[#333] mb-3 leading-snug">\nEn <strong>CuarentaF</strong> tomamos en serio tu privacidad. Usamos y protegemos\n    tu informaci\xF3n con responsabilidad.\n</p> <button id="cerrar-popup" class="text-sm text-[#55b290] font-medium hover:underline">\nEntendido\n</button> <script>\n    const popup = document.getElementById("popup-privacidad");\n    const cerrarBtn = document.getElementById("cerrar-popup");\n\n    if (!localStorage.getItem("popupPrivacidadVisto")) {\n      setTimeout(() => popup.classList.remove("hidden"), 1000);\n    }\n\n    cerrarBtn.addEventListener("click", () => {\n      popup.classList.add("hidden");\n      localStorage.setItem("popupPrivacidadVisto", "true");\n    });\n  <\/script> </div>'])), maybeRenderHead());
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/PopPrivacidad.astro", void 0);

const $$TestimoniosClientes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20 px-6"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-14 text-[#343439]">
¿Qué opinan nuestros clientes?
</h2> <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"> <!-- Cliente 1 - Cedro --> <div class="border-l-4 border-[#55b290] p-6 bg-gray-50 rounded-md shadow-sm"> <img src="/img/cedro.PNG" alt="Cliente Cedro" class="w-12 h-12 mb-4 rounded-full"> <p class="text-sm text-gray-700 mb-4">
Usar CuarentaF ha sido un cambio total. Todo está tan claro y fácil que
        incluso quienes no están familiarizados con sistemas pueden facturar y
        revisar inventarios sin complicaciones.
</p> <p class="font-bold text-[#343439]">Cliente Cedro - Valledupar</p> <p class="text-sm text-gray-500">Tienda de Accesorios</p> </div> <!-- Cliente 2 - Bolsos Valledupar --> <div class="border-l-4 border-[#55b290] p-6 bg-gray-50 rounded-md shadow-sm"> <img src="/img/bolsosvalledupar.png" alt="Bolsos Valledupar" class="w-12 h-12 mb-4 rounded-full"> <p class="text-sm text-gray-700 mb-4">
Gracias a CuarentaF todo está automatizado: vendo, imprimo y controlo
        sin depender de nadie. Fácil, rápido y hecho para quienes no queremos
        perder tiempo.
</p> <p class="font-bold text-[#343439]">Bolsos Valledupar - Valledupar</p> <p class="text-sm text-gray-500">Emprendimiento de Bolsos</p> </div> <!-- Cliente 3 - BellezaVUP --> <div class="border-l-4 border-[#55b290] p-6 bg-gray-50 rounded-md shadow-sm"> <img src="/img/belleza.png" alt="BellezaVUP" class="w-12 h-12 mb-4 rounded-full"> <p class="text-sm text-gray-700 mb-4">
Con CuarentaF puedo ver mis ventas diarias y controlar mis servicios de
        belleza sin enredos. Me encanta lo simple que es, me da tiempo para
        enfocarme en mis clientas.
</p> <p class="font-bold text-[#343439]">BellezaVUP - Cartagena</p> <p class="text-sm text-gray-500">Centro de Belleza</p> </div> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/TestimoniosClientes.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroAdministraNegocio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroAdministraNegocio;
  const {
    title = "Administra tu negocio",
    subtitle = "CuarentaF es la plataforma que te ayuda a controlar tus ventas, gastos, inventario y reportes. Todo desde un solo lugar, sin complicaciones.",
    cta = "Empieza ahora",
    image = "/img/appmovil.png"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-center gap-12"> <!-- Texto --> <div class="text-center md:text-left max-w-lg"> <h2 class="text-3xl md:text-5xl font-extrabold text-[#343439] mb-4"> ${title} </h2> <p class="text-gray-600 text-base md:text-lg mb-6">${subtitle}</p> <a href="https://wa.me/573003146150?text=Hola,%20quiero%20empezar%20con%20CuarentaF" class="bg-[#f0c654] hover:bg-[#e2b53e] text-black px-6 py-3 rounded-full font-semibold shadow-md transition" target="_blank"> ${cta} </a> </div> <!-- Imagen --> <div class="flex justify-center items-center"> <img${addAttribute(image, "src")} alt="Vista previa de la app CuarentaF" class="max-w-full w-[320px] md:w-[400px] drop-shadow-xl"> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/HeroAdministraNegocio.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BienvenidaPop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BienvenidaPop;
  const { image = "/img/welc.png", alt = "Bienvenida" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="bienvenida-pop" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] transition-opacity duration-500 hidden" data-astro-cid-wafxwvra> <div class="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-[90%] relative animate-fade-in" data-astro-cid-wafxwvra> <img', "", ' class="w-full h-auto object-cover" data-astro-cid-wafxwvra> <button id="cerrar-bienvenida" class="absolute top-4 right-4 bg-white text-black px-4 py-2 text-sm font-semibold rounded-full shadow hover:bg-gray-100 transition-all" data-astro-cid-wafxwvra>\nCerrar\n</button> </div> </div>  <script>\n  const key = "bienvenida-vista";\n  const modal = document.getElementById("bienvenida-pop");\n  const cerrarBtn = document.getElementById("cerrar-bienvenida");\n\n  if (!localStorage.getItem(key)) {\n    modal.classList.remove("hidden");\n  }\n\n  cerrarBtn.addEventListener("click", () => {\n    modal.classList.add("hidden");\n    localStorage.setItem(key, "true");\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(image, "src"), addAttribute(alt, "alt"));
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/BienvenidaPop.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CuarentaF - Plataforma de Facturaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "HeroAdministraNegocio", $$HeroAdministraNegocio, { "title": "Controla tu negocio desde una sola app", "subtitle": "Emite facturas, administra inventario, consulta reportes y mucho m\xE1s con CuarentaF.", "cta": "Habla con nosotros", "image": "/img/appmovil.png" })} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Divtextu", $$Divtextu, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "CommerceTypes", $$CommerceTypes, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "VideoInfo", $$VideoInfo, { "videoSrc": "/videos/video.mp4", "title": "\xA1No te compliques con cuentas en papel y l\xE1piz!", "description": "En CuarentaF somos los aliados de tu negocio y queremos verte crecer. Por eso, te ofrecemos la primera soluci\xF3n digital para controlar tus finanzas, gestionar tu inventario, vender en l\xEDnea y recibir cualquier medio de pago." })} ${renderComponent($$result2, "BannerDemo", $$BannerDemo, {})} ${renderComponent($$result2, "TestimoniosClientes", $$TestimoniosClientes, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "SoporteInfo", $$SoporteInfo, {})} ${renderComponent($$result2, "ComunidadLocal", $$Divtext, { "title": "Emprender es vender, pero tambi\xE9n controlar", "subtitle": "Con CuarentaF no solo facturas en segundos. Tambi\xE9n gestionas tu inventario, ves tus reportes y tomas decisiones con claridad. Todo, sin complicaciones t\xE9cnicas." })} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "BienvenidaPop", $$BienvenidaPop, { "image": "/img/welc.png", "alt": "Bienvenido a CuarentaF" })} ${renderComponent($$result2, "WhatsappButton", $$WhatsappButton, {})} ${renderComponent($$result2, "PopPrivacidad", $$PopPrivacidad, {})} ` })}`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
