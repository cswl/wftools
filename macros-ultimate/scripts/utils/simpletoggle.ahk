
class SimpleToggle {
	; Start as off
	__New(startActive := "0" ) {
		if (startActive) {
			this._state := 1
		} else {
			this._state := 0
		}
	}
	
	; toggles the state and calls the callback Functions
	toggle() {
		if (this._state) {
			this._state := 0 
		 
		} else {
			this._state := 1
			 
		}
		  
	}
	isActive() {
		return this._state
	}
	setActive() {
		this._state := 1
	}
	setInactive() {
		this._state := 0
	}

	setCall(active, inactive) {
		this.onActive := active
		this.onInactive := inactive
	} 
	
}