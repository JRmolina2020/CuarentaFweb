/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_J8imxusK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Navbar, b as $$Footer, c as $$WhatsappButton } from '../chunks/WhatsappButton_B1USJepQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Terminos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "T\xE9rminos y Condiciones - CuarentaF" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-6 pt-40 pb-24"> <h1 class="text-3xl font-bold mb-6">Términos y Condiciones</h1> <p class="mb-4">
Al acceder y utilizar la plataforma CuarentaF, aceptas los siguientes
      términos y condiciones. Por favor, léelos cuidadosamente.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">1. Uso del servicio</h2> <p class="mb-4">
CuarentaF proporciona un software para la gestión contable y facturación
      electrónica orientado a emprendedores. El uso indebido del servicio podrá
      resultar en la suspensión o cancelación del acceso.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">2. Registro y seguridad</h2> <p class="mb-4">
Para utilizar nuestras funciones completas, debes registrarte
      proporcionando información veraz. Eres responsable de mantener la
      confidencialidad de tus credenciales.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">3. Propiedad intelectual</h2> <p class="mb-4">
Todos los contenidos, logos y recursos de la plataforma son propiedad de
      CuarentaF y están protegidos por derechos de autor. No está permitida su
      reproducción sin autorización.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">4. Responsabilidad</h2> <p class="mb-4">
No nos hacemos responsables por pérdidas indirectas, interrupciones del
      servicio o errores externos. Sin embargo, trabajamos constantemente para
      mantener la estabilidad del sistema.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">5. Modificaciones</h2> <p class="mb-4">
Podemos actualizar estos términos en cualquier momento. Se notificará a
      los usuarios mediante correo o alertas dentro de la plataforma.
</p> <h2 class="text-2xl font-semibold mt-8 mb-4">6. Contacto</h2> <p class="mb-4">
Para cualquier duda relacionada con estos términos, escríbenos a:
      soporte@cuarentaf.com
</p> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsappButton", $$WhatsappButton, {})} ` })}`;
}, "C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/terminos.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/terminos.astro";
const $$url = "/terminos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terminos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
