import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_J8imxusK.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/","cacheDir":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/node_modules/.astro/","outDir":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/dist/","srcDir":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/src/","publicDir":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/public/","buildClientDir":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/dist/","buildServerDir":"file:///C:/Users/USUARIO/Desktop/facturacion-astro/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CB4F2q9N.css"}],"routeData":{"route":"/politica","isIndex":false,"type":"page","pattern":"^\\/politica\\/?$","segments":[[{"content":"politica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica.astro","pathname":"/politica","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CB4F2q9N.css"}],"routeData":{"route":"/terminos","isIndex":false,"type":"page","pattern":"^\\/terminos\\/?$","segments":[[{"content":"terminos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terminos.astro","pathname":"/terminos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CB4F2q9N.css"},{"type":"inline","content":"@keyframes fadeInUp{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in-up[data-astro-cid-55shnxdo]{animation:fadeInUp 1s ease-out both}.delay-100[data-astro-cid-55shnxdo]{animation-delay:.1s}.delay-300[data-astro-cid-55shnxdo]{animation-delay:.3s}.delay-500[data-astro-cid-55shnxdo]{animation-delay:.5s}.delay-700[data-astro-cid-55shnxdo]{animation-delay:.7s}@keyframes heartbeat{0%,to{transform:scale(1)}30%{transform:scale(1.08)}60%{transform:scale(.97)}}.animate-heartbeat[data-astro-cid-55shnxdo]{animation:heartbeat 2.8s ease-in-out infinite}@keyframes fade-in{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[data-astro-cid-wafxwvra]{animation:fade-in .6s ease-out}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/politica.astro",{"propagation":"none","containsHead":true}],["C:/Users/USUARIO/Desktop/facturacion-astro/src/pages/terminos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/politica@_@astro":"pages/politica.astro.mjs","\u0000@astro-page:src/pages/terminos@_@astro":"pages/terminos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C0diThRZ.mjs","C:/Users/USUARIO/Desktop/facturacion-astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/USUARIO/Desktop/facturacion-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DNzv9HHA.mjs","C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Pricing.astro?astro&type=script&index=0&lang.ts":"_astro/Pricing.astro_astro_type_script_index_0_lang.BFBJVHVW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/USUARIO/Desktop/facturacion-astro/src/components/Pricing.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"plan-toggle\"),i=document.getElementById(\"label-trimestral\"),m=document.getElementById(\"label-anual\"),t=document.getElementById(\"ciclo-basico\"),n=document.getElementById(\"precio-basico\"),o=document.getElementById(\"btn-basico\"),a=document.getElementById(\"ahorro-basico\"),c=document.getElementById(\"ciclo-pro\"),l=document.getElementById(\"precio-pro\"),s=document.getElementById(\"btn-pro\"),d=document.getElementById(\"ahorro-pro\");function r(u){e&&t&&n&&o&&a&&c&&l&&s&&d&&(u?(t.textContent=\"Anual\",n.textContent=\"$800.000\",o.href=\"https://wa.me/573003146150?text=Hola,%20estoy%20interesado%20en%20el%20plan%20Básico%20Anual%20de%20CuarentaF\",a.classList.remove(\"hidden\"),c.textContent=\"Anual\",l.textContent=\"$1.200.000\",s.href=\"https://wa.me/573003146150?text=Hola,%20estoy%20interesado%20en%20el%20plan%20Profesional%20Anual%20de%20CuarentaF\",d.classList.remove(\"hidden\")):(t.textContent=\"Trimestral\",n.textContent=\"$240.000\",o.href=\"https://wa.me/573003146150?text=Hola,%20estoy%20interesado%20en%20el%20plan%20Básico%20Trimestral%20de%20CuarentaF\",a.classList.add(\"hidden\"),c.textContent=\"Trimestral\",l.textContent=\"$360.000\",s.href=\"https://wa.me/573003146150?text=Hola,%20estoy%20interesado%20en%20el%20plan%20Profesional%20Trimestral%20de%20CuarentaF\",d.classList.add(\"hidden\")),e.checked=u)}e&&e.addEventListener(\"change\",()=>{r(e.checked)}),m&&m.addEventListener(\"click\",()=>r(!0)),i&&i.addEventListener(\"click\",()=>r(!1))});"]],"assets":["/_astro/index.CB4F2q9N.css","/img/1.png","/img/11.png","/img/2.png","/img/22.png","/img/3.png","/img/33.png","/img/appmovil.png","/img/bebidas.png","/img/belleza.png","/img/bolsos.png","/img/bolsosvalledupar.png","/img/boutique.png","/img/cedro.PNG","/img/ChatGPT Image 22 abr 2025, 22_14_20.png","/img/ChatGPT Image 22 abr 2025, 22_15_00.gif","/img/favico.ico","/img/favico.jpg","/img/gorras.png","/img/iconf.png","/img/kup.png","/img/logo.jpg","/img/logo.svg","/img/products.png","/img/tecnologia.png","/img/textura.png","/img/welc.png","/img/zapatos.png","/videos/favicon.jpg","/videos/IMG_6708.MOV","/videos/video.mp4"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Gn+lowJmQgxJsJtZxJ5WOQ8vh76ikuaSRIbKEhlfO44=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\USUARIO\\Desktop\\facturacion-astro\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
