

;; Toggle the Auto Ability keys
!a::

return

; Toggle Auto Sprint
; We use a timer to keep holding the keys which allows to keep it running after performing another", action
!w::
if (A_PriorHotkey = "~w"||  A_TimeSincePriorHotkey > 400) {
    ; Too much time between presses  so this isn't a double-press.
    KeyWait  "w"
    return
   	 }
	else {
        	SetTimer    "Action_Slide_Attack", Off
   	 }
	Send "{LShift down}{w down}"
return