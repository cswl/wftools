#SingleInstance force

SendMode Input 
; Ensures a consistent starting directory.
SetWorkingDir A_ScriptDir

#Include  %A_ScriptDir%\scripts
#Include  utils\window.ahk
#Include  utils\simplelogger.ahk
#Include  utils\simpletoggle.ahk
#Include  utils\pgui.ahk
#Include utils\JSON.ahk

; Version
SCRIPT_VERSION := "0.0.101"

if A_Args.Length() > 0
{
    for n, param in A_Args  ; For each parameter:
    {
        if param = "-DEBUG_MODE"
        ENABLE_DEBUG := 1
    } 
}

if (ENABLE_DEBUG) {
    global logger := new SimpleLogger(,,, "Warframe Macros Ultimate")
} else {
    logger  := new NoopLogger()
}

logger.log("main: ", "Starting Warframe Macros Ultimate : Version "  . SCRIPT_VERSION )

;; Include toggle and delays
#Include  globals.ahk

;; Include the GUI
#Include gui.ahk

;; Include actions
#Include  actions.ahk
#Include  actions_melee.ahk
#Include  actions_lmb.ahk
#Include  actions_scrollwheel.ahk
#Include  actions_abilities.ahk

;; Include the hotkeys
#Include hotkeys.ahk
#Include hotkeys_global.ahk
#Include hotkeys_scrollwheel.ahk
#Include hotkeys_lmb.ahk 
#Include hotkeys_melee.ahk 






