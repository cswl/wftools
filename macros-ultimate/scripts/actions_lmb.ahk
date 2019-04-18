
;; Action for Fire Holding
Action_FullAuto_Hold() {
	;; Check if we're still on Warframe Window
	if isActiveWarframe() 
		Send "{[ down}"
	else 
		Send "{[ up}"
	return
}

;; Action for SemiAutoWeapon
Action_SemiAuto_Trigger() {
    log := ObjBindMethod(logger, "log", "hotkeys_lmb_hold: ")

    if  (isActiveWarframe() && GetKeyState("LButton", "P")) {
        Send "["
    }
}