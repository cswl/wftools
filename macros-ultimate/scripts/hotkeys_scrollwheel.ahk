;; Scroll wheel keys

#If isActiveWarframe()

;; Alt + S : toggle Scroll wheel hotkeys
!s::
  log := ObjBindMethod(logger, "log", "hotkeys_scroll: ")
  if Toggles.MOUSE_SCROLL.isActive() {
      %log%("Disabling mouse scrollwheel Keys.")
  }
  else {
    %log%("Enabling mouse scrollwhell keys.")
  }
    Toggles.MOUSE_SCROLL.toggle()
return

;WheelDown is manual slide attack
WheelDown::
  if isActiveWarframe() and Toggles.MOUSE_SCROLL.isActive() {
    Action_Slide_Attack()
}
return

;WheelUp is Energizing Dash
WheelUp::
  if isActiveWarframe() and Toggles.MOUSE_SCROLL.isActive() {
    Action_Void_Short_Dash()
}
return
