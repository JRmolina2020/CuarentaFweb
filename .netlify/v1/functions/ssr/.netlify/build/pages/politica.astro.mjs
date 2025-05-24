/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLsMK3Q1.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Navbar, b as $$Footer, c as $$WhatsappButton } from '../chunks/WhatsappButton_DRVOoK-t.mjs';
export { renderers } from '../renderers.mjs';

const $$Politica = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pol\xEDtica de Privacidad - CuarentaF" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-6 pt-40 pb-24"> <h1 class="text-3xl font-bold mb-6">Política de Privacidad</h1> <p class="mb-4">
En CuarentaF, la privacidad y seguridad de tus datos es nuestra prioridad.
      Esta política describe cómo recopilamos, usamos y protegemos tu
      información.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">1. Datos que recopilamos</h2> <p class="mb-4">
Recopilamos información personal como nombre, correo electrónico,
      teléfono, y datos de tu negocio cuando te registras o utilizas nuestra
      plataforma.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">2. Uso de los datos</h2> <p class="mb-4">
Utilizamos tu información para ofrecerte nuestros servicios, mejorar tu
      experiencia, y enviarte actualizaciones relevantes.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">3. Protección de datos</h2> <p class="mb-4">
Implementamos medidas técnicas y organizativas para proteger tu
      información contra accesos no autorizados o usos indebidos.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">4. Derechos del usuario</h2> <p class="mb-4">
Puedes acceder, corregir o eliminar tu información en cualquier momento
      contactándonos a través de nuestros canales oficiales.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">5. Contacto</h2> <p class="mb-4">
Si tienes preguntas sobre esta política, contáctanos en:
      soporte@cuarentaf.com.
</p> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsappButton", $$WhatsappButton, {})} ` })}`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/politica.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/politica.astro";
const $$url = "/politica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Politica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
