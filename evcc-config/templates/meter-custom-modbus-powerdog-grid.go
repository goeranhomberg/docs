package templates 

import (
	"github.com/evcc-io/config/registry"
)

func init() {
	template := registry.Template{
		Class:  "meter",
		Type:   "custom",
		Name:   "PowerDog (Grid Meter)",
		Sample: `power:
  source: calc #calculate current overall consumption + (current pv effort * (-1) )
  add:
    - source: modbus
      uri: 192.168.1.2:502 #ip-adress and port (default-port: 502)
      id: 1
      register:
        address: 40026 #register for overall consumption
        type: holding
        decode: int32

    - source: modbus
      uri: 192.168.1.2:502 #ip-adress and port (default-port: 502)
      id: 1
      register:
        address: 40002 #register for pv effort
        type: holding
        decode: int32
      scale: -1 #scale with -1 to get a substraction`,
	}

	registry.Add(template)
}
