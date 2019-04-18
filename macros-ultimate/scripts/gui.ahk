Gui := GuiCreate("+Theme +MinSize640x480 +Resize -MaximizeBox")
Gui.BackColor := "222222"
WinSetTransColor("222222")
Gui.SetFont("cFFFFFF s12")
Gui.Title := "WF Macros Ultimate"
 

MeleeSection := Gui.Add("GroupBox", "w300 r4", "Melee")

    Gui.Add("Text","section xp+10  yp+20", "Slide delay (ms): ")
    Gui.Add("Text","", "Melee spam delay(ms):")
    createNumberInputBox(Gui, 5, "ys")
    createNumberInputBox(Gui, 5) 



AbilitySection := Gui.Add("GroupBox", "w300 r4 " . positionSections(MeleeSection, "right"), "Abilities")
   for fname in WFrameAbilities {
        fnames .= fname . "|"
    }
    Gui.Add("DropDownList", "vFrameChoice xp+10  yp+20", fnames)
    Gui.Add("Text","", "Ability delay(ms):")
    createNumberInputBox(Gui, 5) 

evWeaponChange(profile, fireRateCtrl, weaponCtrl, info ) {
    Msgbox(profile)
    ;; Dispplay the Weapons modded Firerate
    fireRateCtrl.Value := profile[weapon][0]
; 
}

MouseSection := Gui.Add("GroupBox", "w400 r4 "  . positionSections(AbilitySection, "right") , "Mouse") 
        for wname in WeaponTriggers {
        wnames .= wname . "|"
    }
    Gui.Add("Text","section xp+10  yp+20", "Select Weapon:")
    Gui.Add("Text"," ", "Semi - Trigger Firerate:")
    weaponChoice := Gui.Add("DropDownList", "vWeaponChoice Choose1 ys", wnames)
    weaponFireRate := Gui.Add("Edit", "Limit10 cRed w50  ")  ;
    
;; MouseSection Events Callbacks
weaponChoice.OnEvent("Change", Func("evWeaponChange").bind(WeaponTriggers, weaponFireRate))

ProfileSection := Gui.Add("GroupBox", "w600 r3 " . positionSections(MeleeSection, "bottom"), "Profiles") 
LoadBtn := Gui.Add("Button", "Default xp yp+20 w140", "Load Profile")
SaveBtn := Gui.Add("Button", "Default xp+160 yp w140", "Save Profile")
;LoadBtn.OnEvent("Click", "MyBtn_Click") 

 

StatusBar := Gui.Add("StatusBar",, "WF Macros Ultimate - v 0.0.1")


Gui.Show

