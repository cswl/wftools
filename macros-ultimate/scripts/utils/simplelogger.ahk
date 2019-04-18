class SimpleLogger {
    consolecol := "000000"
	fontcol := "15bb10"

    	__New(name := "", color := "000000", fontColor := "15bb10", title := "Simple Debug Logger") {
            this.title := title
            this.gui := GuiCreate("+LastFound +MinimizeBox  +MaximizeBox +Resize ", this.title)
            this.gui.BackColor := color
            this.gui.SetFont("c" fontColor " s14", "Consolas")
            this.bgcolor := "Background" . color
            this.logs := this.gui.Add("ListView", "r20 w960 " .  this.bgcolor   , "Time | Messages")
            this.gui.Show
        }

        log(title, msg ) {
            this.logs.Add(, FormatTime(, "Time"), title . msg) 
           this.logs.ModifyCol
        }
         

}

class NoopLogger {

    __New() {
        this.nops := ""
    }
        log(msg ) {
            return
        }
}