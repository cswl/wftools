; Global Hotkeys ( Works on any Windows)

;; WIP: Toggle GUI Overlay
f9::
    logger.log("main: ", "Enabling GUI Overlay.")
return

; Reload Script
f10::
    logger.log("main: ","Reloading script.")
	Reload
return

; Emergency Exit Hotkey for script 
f11::
	ExitApp
return