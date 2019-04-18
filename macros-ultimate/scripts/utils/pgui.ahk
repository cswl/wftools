positionSections(prev, pos) {
    log := ObjBindMethod(logger, "log", "wfmu_gui: ")
    if (pos = "right") {
    cx :=  prev.Pos.x + prev.Pos.w  + 25
    cy := prev.Pos.y
    }

    if (pos = "bottom") {
    cx :=  prev.Pos.x  
    cy := prev.Pos.y + prev.Pos.h + 40
    }

    %log%("New x position = " . cx  . "," . cy )
    return "x"   cx " y"  cy
}

createNumberInputBox(gui, maxchar, pos := " " ) {
    maxlimit := "Limit" . maxchar
    width := "w" . (maxchar * 12)
    return gui.Add("Edit", maxlimit . " " . pos . " c000000 " . width   ) ;
}