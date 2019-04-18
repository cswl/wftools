;; Include the default profile
#Include  %A_ScriptDir%\profiles
#Include defaults.ahk

class WFrameAbility {
    __New(name, keybind,delay) {
            this.name  := name
            this.delay := delay
            this.keybind := keybind
	}

    setDelay(ms) {
        this.delay := ms
    }
}

global WFrameAbilities := {
    Trinity :  new WFrameAbility("EV", 2, Delay_Abilities.EV),
    Nova : new    WFrameAbility("EV", 4, Delay_Abilities.MP), 
    Equinox : new  WFrameAbility("EV", 2, Delay_Abilities.EQSLEEP),
    Banshee : new  WFrameAbility("EV", 2, Delay_Abilities.SONAR),
    Nidus_Virulence : new  WFrameAbility("EV", 1, Delay_Abilities.VIRULENCE),
    Nidus_Larva : new  WFrameAbility("EV", 2, Delay_Abilities.LARVA)
}

global Toggles := {
MOUSE_SCROLL : new SimpleToggle(),

ACTION_SPRINT : new SimpleToggle(),
ACTION_LMBHOLD : new SimpleToggle(),
ACTION_SLIDE : new SimpleToggle(),

ACTION_SEMIFIRE : new SimpleToggle(),
ACTION_SEMIFIRE_HELD : new SimpleToggle(),
ACTION_FULLAUTOFIRE : new SimpleToggle(),
ACTION_FULLAUTOFIRE_HELD : new SimpleToggle(),
 
ACTION_MELEE : new SimpleToggle()
}

 

 