;; Void dashes just enough length to trigger effects like:
;; Zenurik dash, Magus lockdown, length can be increased in Profile
Action_Void_Short_Dash() {
  		Send  5
 		Sleep  250
 		Send  "{LControl Down}"
		Sleep 200
		Send  "{Space}"
		Sleep  Delays.ACTION_VOID_DASH
 		Send  5
		Send "{LControl Up}"
return
}


