
Ability_General_First() {
  if isActiveWarframe()  {
		Send  1
	}
;; Turn off all Second abilities.
else 
	SetTimer  "Ability_General_First" , Off
return
}

Ability_General_Second() {
  if isActiveWarframe() {
		Send  2
		}
;; Turn off all Second abilities.
else 
	SetTimer  "Ability_General_Second" , Off
return
}

Ability_General_Fourth() {
  if isActiveWarframe() {
		Send  4
		}
;; Turn off all Fourth abilities.
else 
	SetTimer  "Ability_General_Fourth" , Off
return 
}
