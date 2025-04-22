/* empty css                                 */
import { e as createComponent, f as createAstro, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, n as renderComponent } from '../chunks/astro/server_B7-R8fiT.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "TuFactura" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body class="font-sans text-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/layouts/BaseLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="relative bg-[#FFFFF] text-white overflow-hidden"> <!-- Part\xEDculas --> <canvas id="particles-canvas" class="absolute inset-0 z-0"></canvas> <!-- Contenido principal --> <div class="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-0 pt-28 pb-36"> <!-- Texto izquierda --> <div> <p class="uppercase text-sm text-[#3e3e3e] mb-2 border-l-4 border-[#6E8BFA] pl-3">\nTODO EL CONTROL EN UN SOLO LUGAR\n</p> <h1 class="text-4xl text-[#3e3e3e] md:text-5xl font-extrabold leading-tight mb-6">\nControla el <br>\ninventario de<br> <span class="text-[#55b290]">toda tu empresa</span> </h1> <p class="text-sm text-[#3e3e3e] text-base mb-6 max-w-md">\n\xDAnete a las empresas que simplican todo\n</p> <div class="flex flex-wrap gap-4"> <a href="https://wa.me/573003146150" target="_blank" class="bg-[#55b290] text-white px-6 py-3 rounded-full font-medium hover:bg-[#431fc9] transition">\nEscr\xEDbenos\n</a> <a href="#precios" class="bg-white text-[#55b290] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">\nConocer planes\n</a> </div> </div> <!-- Imagen derecha --> <div class="relative flex"> <img src="/img/kup.png" alt="Laptop sistema" class="w-full max-w-md drop-shadow-6xl"> </div> </div> <!-- Bot\xF3n WhatsApp --> <a href="https://wa.me/573003146150" target="_blank" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"> <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="28" height="28"> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.063.52 4.016 1.508 5.77L0 24l6.387-1.672C8.15 23.478 10.058 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path> </svg> </a> <!-- Script part\xEDculas --> <script>\n    const canvas = document.getElementById("particles-canvas");\n    const ctx = canvas.getContext("2d");\n    let particlesArray;\n\n    const resizeCanvas = () => {\n      canvas.width = window.innerWidth;\n      canvas.height = window.innerHeight;\n    };\n\n    window.addEventListener("resize", () => {\n      resizeCanvas();\n      createParticles();\n    });\n\n    const createParticles = () => {\n      particlesArray = [];\n      const numberOfParticles = 80;\n      for (let i = 0; i < numberOfParticles; i++) {\n        particlesArray.push({\n          x: Math.random() * canvas.width,\n          y: Math.random() * canvas.height,\n          size: Math.random() * 2 + 1,\n          speedX: Math.random() * 1.5 - 0.75,\n          speedY: Math.random() * 1.5 - 0.75,\n        });\n      }\n    };\n\n    const drawParticles = () => {\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\n      ctx.fillStyle = "rgba(255,255,255,0.3)";\n      for (let i = 0; i < particlesArray.length; i++) {\n        const p = particlesArray[i];\n        ctx.beginPath();\n        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);\n        ctx.fill();\n\n        p.x += p.speedX;\n        p.y += p.speedY;\n\n        if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;\n        if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;\n      }\n      requestAnimationFrame(drawParticles);\n    };\n\n    resizeCanvas();\n    createParticles();\n    drawParticles();\n  <\/script> </section> '])), maybeRenderHead());
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Hero.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="carac" class="py-20 bg-gray-100 px-6"> <h2 class="text-3xl font-bold text-center mb-12">Características</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="bg-white p-6 rounded-xl shadow text-center"> <img src="img/1.png" alt="Icono facturación" class="mx-auto mb-4 w-10 h-10"> <h3 class="text-xl font-semibold mb-2">100% en la nube</h3> <p class="text-gray-600">
Accede desde cualquier lugar a la información de tu emprendimiento.
</p> </div> <div class="bg-white p-6 rounded-xl shadow text-center"> <img src="img/2.png" alt="Icono inventario" class="mx-auto mb-4 w-10 h-10"> <h3 class="text-xl font-semibold mb-2">Control de Inventario</h3> <p class="text-gray-600">
Gestiona tus productos y existencias en tiempo real.
</p> </div> <div class="bg-white p-6 rounded-xl shadow text-center"> <img src="img/3.png" alt="Icono reportes" class="mx-auto mb-4 w-10 h-10"> <h3 class="text-xl font-semibold mb-2">Reportes y Estadísticas</h3> <p class="text-gray-600">
Obtén información útil de tus ventas y finanzas.
</p> </div> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Features.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="precios" class="py-20 bg-white px-6"> <h2 class="text-3xl font-bold text-center mb-12">
Encuentra el Plan Adecuado para tu negocio
</h2> <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto justify-center"> <!-- Plan Básico --> <div class="border p-6 rounded-2xl text-left shadow hover:shadow-xl transition bg-white"> <h3 class="text-2xl font-bold mb-4 text-center text-[#f0c654]">
Plan Básico
</h3> <p class="text-1xl font-bold mb-4 text-center text-[#d1d1d1]">
TRIMESTRAL
</p> <p class="text-4xl font-bold mb-4 text-center text-[#000000]">$240.000</p> <p class="text-gray-600 text-center mb-6">Ideal para emprendedores</p> <ul class="space-y-3 mb-6 text-gray-700 text-sm"> <li class="flex items-center gap-2">✔ Gestión de productos</li> <li class="flex items-center gap-2">✔ Gestión de clientes</li> <li class="flex items-center gap-2">✔ Factura POS</li> <li class="flex items-center gap-2">✔ Inventario</li> <li class="flex items-center gap-2">✔ 2 usuarios</li> <li class="flex items-center gap-2">✔ Cierre de caja</li> <li class="flex items-center gap-2">✔ Reportes</li> </ul> <div class="text-center"> <a href="#contacto" class="bg-[#55b290] text-white px-6 py-2 rounded-full inline-block hover:bg-[#431fc9] transition">
Seleccionar
</a> </div> </div> <!-- Plan Profesional --> <div class="border p-6 rounded-2xl text-left shadow hover:shadow-xl transition bg-white"> <h3 class="text-2xl font-bold mb-4 text-center text-[#63b6b9]">
Plan Profesional
</h3> <p class="text-1xl font-bold mb-4 text-center text-[#d1d1d1]">
TRIMESTRAL
</p> <p class="text-4xl font-bold mb-4 text-center text-[#000000]">$360.000</p> <p class="text-gray-600 text-center mb-6">Para negocios en crecimiento</p> <ul class="space-y-3 mb-6 text-gray-700 text-sm"> <li class="flex items-center gap-2">✔ Todo lo del plan básico</li> <li class="flex items-center gap-2">✔ Gestión de proveedores</li> <li class="flex items-center gap-2">✔ Usuarios ilimitados</li> <li class="flex items-center gap-2">✔ Soporte prioritario</li> <li class="flex items-center gap-2"> <strong>✔ Facturación electrónica</strong> </li> <li class="flex items-center gap-2">✔ Indicadores</li> </ul> <div class="text-center"> <a href="#contacto" class="bg-[#55b290] text-white px-6 py-2 rounded-full inline-block hover:bg-[#431fc9] transition">
Seleccionar
</a> </div> </div> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Pricing.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-6 py-16"> <div class="max-w-3xl mx-auto bg-gradient-to-r from-[#55b290] to-[#3e9776] text-white rounded-xl p-8 shadow-lg"> <h2 class="text-2xl md:text-3xl font-extrabold mb-6 text-center">
Beneficios de obtener <span class="text-white">CuarentaF</span> </h2> <ul class="space-y-4 text-sm md:text-base"> <li class="flex items-start gap-3"> <span class="text-yellow-400 text-xl mt-1">⭐</span> <p>Genera y envía facturas digitales 100% en línea.</p> </li> <li class="flex items-start gap-3"> <span class="text-yellow-400 text-xl mt-1">⭐</span> <p>
Con nuestro Software de inventario y Facturación lleva el control en
          tiempo real de tu negocio.
</p> </li> <li class="flex items-start gap-3"> <span class="text-yellow-400 text-xl mt-1">⭐</span> <p>Obtienes un Software en la nube realmente rápido y fácil de usar.</p> </li> <li class="flex items-start gap-3"> <span class="text-yellow-400 text-xl mt-1">⭐</span> <p>
Accede a la información de tu negocio desde cualquier lugar, solo
          necesitas un dispositivo con conexión a internet.
</p> </li> </ul> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Benefits.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="w-full fixed top-0 left-0 z-50 bg-[#f2f3f4] text-black"> <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> <!-- Logo --> <div class="flex items-center gap-2"> <img src="/img/logo.jpg" alt="Logo" class="h-8 w-8"> <span class="text-xl font-bold">40F</span> </div> <!-- Navegación --> <ul class="hidden md:flex items-center gap-6 text-sm font-medium"> <li> <a href="#precios" class="hover:text-[#6E8BFA] transition">Planes</a> </li> <li> <a href="#carac" class="hover:text-[#6E8BFA] transition">Caracteristicas</a> </li> </ul> </div> </nav>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Navbar.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gray-100 px-6"> <h2 class="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2> <div class="max-w-3xl mx-auto space-y-6"> <details class="bg-white p-4 rounded-xl shadow"> <summary class="font-semibold cursor-pointer">¿Puedo probar antes de comprar?</summary> <p class="mt-2 text-gray-700">
Sí, ofrecemos una reunión gratuita, donde aclaramos todas tus dudas.
</p> </details> <details class="bg-white p-4 rounded-xl shadow"> <summary class="font-semibold cursor-pointer">¿Puedo cancelar en cualquier momento?</summary> <p class="mt-2 text-gray-700">
Sí, no tienes contratos obligatorios ni penalizaciones.
</p> </details> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/FAQ.astro", void 0);

const $$WhatsappButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://wa.me/573003146150?text=Hola%2C%20quiero%20más%20información%20sobre%20TuFactura" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition" aria-label="Habla con nosotros por WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="32" height="32"> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.063.52 4.016 1.508 5.77L0 24l6.387-1.672C8.15 23.478 10.058 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path> </svg> </a>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/WhatsappButton.astro", void 0);

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

const $$Astro = createAstro();
const $$VideoInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoInfo;
  const { videoSrc = "/videos/video.mp4", title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-12 px-4"> <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"> <!-- Video local con fondo amarillo --> <div class="relative"> <div class="absolute inset-0 bg-yellow-400 -left-12 -right-8 -top-8 -bottom-8 rounded-xl -z-10"></div> <div class="relative rounded-xl overflow-hidden aspect-video shadow-lg"> <video class="w-full h-full object-cover" controls autoplay muted loop playsinline> <source${addAttribute(videoSrc, "src")} type="video/mp4">
Tu navegador no soporta el video.
</video> </div> </div> <!-- Texto --> <div> <h2 class="text-3xl font-bold text-gray-900 mb-4"> ${title || "\xA1No te compliques con cuentas en papel y l\xE1piz!"} </h2> <p class="text-gray-600 text-lg leading-relaxed"> ${description || "En Treinta somos los aliados de tu negocio y queremos verte crecer..."} </p> </div> </div> </section>`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/components/VideoInfo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "TuFactura - Plataforma de Facturaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "CommerceTypes", $$CommerceTypes, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "VideoInfo", $$VideoInfo, { "videoSrc": "/videos/video.mp4", "title": "\xA1No te compliques con cuentas en papel y l\xE1piz!", "description": "En CuarentaF somos los aliados de tu negocio y queremos verte crecer. Por eso, te ofrecemos la primera soluci\xF3n digital para controlar tus finanzas, gestionar tu inventario, vender en l\xEDnea y recibir cualquier medio de pago." })} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "WhatsappButton", $$WhatsappButton, {})} ` })}`;
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
