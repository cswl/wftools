## Warframe Items in Modular Format (WIP)
- Categorize the giant blob of JSON of Warframe items into loadable imports.


### Mods API

Mods are seperated into category from the `Mod.type`   
There's two major category PvE and PvP.
```js
import PrimaryMods from "@wftools/items/mods/PvE/Primary"

```
If you want patch logs and drop location use the provided hooks.

```js
import  PrimayModsPatchlogs  from "@wftools/items/mods/PvE/Primary/patches"
import  PrimayModsDrops  from "@wftools/items/mods/PvE/Primary/patches"
import {usePatchlogs, useDrops} from "@wftools/items"

const getPatch = usePatchlogs(PrimayModsPatchlogs)
const getDrops = useDrops(PrimayModsDrops)

PrimaryMods.forEach(mod => {
    const patchlogs = getPatch(mod);
    const drops = getDrops(mod);
    // can use them here
    console.log(mod, patchlogs, drops)
})
```

It is possible to import all mod types from the provided export file.
```js
import AllPvEMods from "@@wftools/items/mods/PvE/all";
```
