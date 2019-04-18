;; Hot Keys For Mouse Button

#If  isActiveWarframe()

;; Alt + C :  is toogle Semi-Auto Fire when LMB is held  
!c::
  log := ObjBindMethod(logger, "log", "hotkeys_lmb: ")
  if Toggles.ACTION_SEMIFIRE.isActive() {
      %log%("Disabling semi-auto fire.")
  }
  else {
    %log%("Enabling semi-auto fire")
  }
    Toggles.ACTION_SEMIFIRE.toggle() 
return


;; Alt + X  is hold LMB for Full Auto Weapons eg. Ignis Wraith
!x:: 
  log := ObjBindMethod(logger, "log", "hotkeys_lmb: ")
  if  Toggles.ACTION_FULLAUTOFIRE.isActive() {
      %log%("Disabling full-auto fire.")
  }
  else {
    %log%("Enabling full-auto fire")
  }
   Toggles.ACTION_FULLAUTOFIRE.toggle() 
return

;; LMB Actions

#If (Toggles.ACTION_SEMIFIRE.isActive() ||Toggles.ACTION_FULLAUTOFIRE.isActive() )

~LButton::   
    ;; Toggle between holding of Full Auto Weapons
		if Toggles.ACTION_FULLAUTOFIRE.isActive()  {
			SetTimer  "Action_FullAuto_Hold",  Delays.ACTION_FULLAUTO
		}
		;; Hold Mouse Button to trigger Semi Auto Weapons
		if  Toggles.ACTION_SEMIFIRE.isActive() {
				SetTimer  "Action_SemiAuto_Trigger",  Delays.ACTION_SEMIAUTO
			}
return


~LButton Up:: 
		SetTimer  "Action_SemiAuto_Trigger", Off 
		Toggles.ACTION_SEMIFIRE_HELD.setInactive() 
return
