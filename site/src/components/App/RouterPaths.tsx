import Loading from "#components/Loading";

import loadable from "@loadable/component";

export { default as Home } from "#routes/home";

export const Macros = loadable(() => import("#routes/Macros").then(module => module.default), {
  fallback: Loading
});
export const Launcher = loadable(
  () => import("#routes/launcher").then(module => module.default),
  {
    fallback: Loading
  }
);
export const ShotgunSC = loadable(
  () => import("#routes/shotgunsc").then(module => module.default),
  {
    fallback: Loading
  }
);
export const MeleeCC = loadable(
  () => import("#routes/meleecc").then(module => module.default),
  {
    fallback: Loading
  }
);
export const RifleCC = loadable(
  () => import("#routes/riflecc").then(module => module.default),
  {
    fallback: Loading
  }
);
export const RivenProxy = loadable(
  () => import("#routes/RivenProxy").then(module => module.default),
  {
    fallback: Loading
  }
);
export const RivenShowcase = {
  RivenProfile: loadable(
    () => import("#routes/RivenShowcase/RivenProfile").then(module => module.default),
    {
      fallback: Loading
    }
  ),
  RivenProfileConverter: loadable(
    () => import("#routes/RivenShowcase/RivenProfileConverter").then(module => module.default),
    {
      fallback: Loading
    }
  )
};
