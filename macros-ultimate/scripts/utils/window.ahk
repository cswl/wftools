;; Helper Functions.

; Check if Warframe is Active Window
isActiveWarframe() {
	active_window := WinGetTitle("A")
	; = is case insensitive by default
	return   active_window = "WARFRAME"
}
