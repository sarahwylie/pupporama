import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "./favicon.ico"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const DNA = "/assets/WillaDNA-D9B0LrEA.PNG";
const WillaWoo = "/assets/WillaFace-DZ8op2ox.jpg";
const Preggers = "/assets/Preggers-1_efbYgX.jpg";
const Baby = "/assets/BabyFace-BkWpCAVM.jpg";
const WillaPups = "/assets/WillaPups-iSlnuyqU.jpg";
const Hippo = "/assets/Hippo4-CdTrB_K5.jpeg";
const Kathleen = "/assets/Kathleen1-DJSz8Hp_.jpeg";
const Otter = "/assets/Otter2-D2ovSczm.jpeg";
const Piggy = "/assets/Piggy5-Ix9Ns2qh.jpeg";
const Pinky = "/assets/Pinky1-BEN0IcY4.jpeg";
const Possum = "/assets/Possum5-FSKz9L7f.jpeg";
const Reptar = "/assets/Reptar6-GW6htzna.jpeg";
const Splinter = "/assets/Splinter1-CdHSleM8.jpeg";
const Violet = "/assets/Violet4-CPsN5YVA.jpeg";
function Welcome() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-col items-center gap-9", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-semibold text-gray-900 dark:text-gray-100", children: "Puppies!" }),
      /* @__PURE__ */ jsxs("p", { className: "leading-6 text-gray-700 dark:text-gray-200 text-center", children: [
        "Today the puppies are ",
        differenceInDays,
        " days old!"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[80%] w-full space-y-6 px-4 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-500 dark:text-gray-400 text-center font-bold", children: "First meet the mama:" }),
      /* @__PURE__ */ jsxs("div", { className: "columns-md gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl text-gray-900 dark:text-gray-100 font-bold", children: "Willa" }),
          /* @__PURE__ */ jsx("span", { children: "Willa is a beautiful and sweet dog with a very mild temperament. She was found in the neighborhood and came to live with us on May 28th, 2025 as a foster after the rescue helped us catch her. The vet estimated her age around 2.5 years, and her DNA results are pictured." }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("span", { className: "justify-center items-center flex flex-wrap row gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: WillaWoo,
                alt: "Willa",
                className: "rounded-xl w-1/4 h-auto xs:w-auto"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: Preggers,
                alt: "Willa",
                className: "rounded-xl w-1/4 h-auto xs:w-auto"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: Baby,
                alt: "Willa",
                className: "rounded-xl w-1/4 h-auto xs:w-auto"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { children: "We got quite the surprise when we discovered she was pregnant, and an even bigger surprise when she birthed TEN puppies! Nine of them survived, and they are unbearably cute, but they all need homes." }),
          /* @__PURE__ */ jsx("span", { className: "justify-center items-center flex", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: WillaPups,
              alt: "Willa with her brand new puppies",
              className: "rounded-xl w-3/4 h-auto"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "justify-center items-center flex", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: DNA,
            alt: "Willa's DNA results",
            className: "rounded-4xl w-5/6 h-auto"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center w-full", children: /* @__PURE__ */ jsx("hr", {}) }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-500 dark:text-gray-400 text-center font-bold", children: "Now meet the puppies:" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { className: "columns-3xs gap-4", children: puppies.map((puppy) => /* @__PURE__ */ jsxs("div", { className: "flow-root", children: [
        /* @__PURE__ */ jsx("span", { className: "justify-center items-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: puppy.pic,
            alt: puppy.name,
            className: "rounded-xl"
          }
        ) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl text-gray-900 dark:text-gray-100 font-bold text-center", children: puppy.name }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {})
      ] }, puppy.name)) })
    ] })
  ] }) });
}
const birth = /* @__PURE__ */ new Date("2025-07-12");
const today = Date.now();
const differenceInMs = Math.abs(today - birth.getTime());
const millisecondsInDay = 1e3 * 60 * 60 * 24;
const differenceInDays = Math.floor(differenceInMs / millisecondsInDay);
const puppies = [
  {
    "name": "Hippo",
    "pic": Hippo
  },
  {
    "name": "Kathleen",
    "pic": Kathleen
  },
  {
    "name": "Otter",
    "pic": Otter
  },
  {
    "name": "Piggy",
    "pic": Piggy
  },
  {
    "name": "Pinky",
    "pic": Pinky
  },
  {
    "name": "Possum",
    "pic": Possum
  },
  {
    "name": "Reptar",
    "pic": Reptar
  },
  {
    "name": "Splinter",
    "pic": Splinter
  },
  {
    "name": "Violet",
    "pic": Violet
  }
];
function meta({}) {
  return [{
    title: "Puppies"
  }, {
    name: "description",
    content: "Meet our Puppies!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-tKC4XhlV.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-dYsOBgOX.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": ["/assets/root-BqEeaWG7.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-C3wdL6fJ.js", "imports": ["/assets/chunk-UH6JLGW7-BnjEZNfp.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-2df721df.js", "version": "2df721df", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
