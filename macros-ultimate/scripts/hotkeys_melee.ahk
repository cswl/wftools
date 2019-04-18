;; Hotkeys for melee

#If  isActiveWarframe()

;; Alt + A : Toggle Auto Slide attack
!a::
	log := ObjBindMethod(logger, "log", "hotkeys_melee: ")
  	if Toggles.ACTION_SLIDE.isActive() {
      %log%("Disabling auto slide attack.")
	  	SetTimer "Action_Slide_Attack",  Off
 	 }
  	else {
   	 %log%("Enabling auto slide attack")
		 SetTimer  "Action_Slide_Attack", Delays.ACTION_SLIDE
 	 }
    Toggles.ACTION_SLIDE.toggle() 
return
 

;; Alt + E : Toggle Melee Attack Spam.. for Exalted Blade etc.
!e:: 
 
	log := ObjBindMethod(logger, "log", "hotkeys_melee: ")
  	if Toggles.ACTION_MELEE.isActive() {
      %log%("Disabling auto melee  attack.")
	  	SetTimer  "Action_Melee_Attack",  Off
 	 }
  	else {
   	 %log%("Enabling auto melee attack")
		SetTimer  "Action_Melee_Attack", Delays.ACTION_MELEE
 	 }
    Toggles.ACTION_MELEE.toggle() 
 
return


;; Alt + Z: Throw Zenistar Disc 
!z:: 
	Send "{F down}"
	Sleep 300
	Send "{F up}"
	Sleep 100
	Send "{E down}"
	Sleep 1500
	Send "{E up}"
return
