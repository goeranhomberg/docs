"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1827],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=i,b=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5478:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={sidebar_position:4},l="Modbus",d={unversionedId:"reference/modbus",id:"reference/modbus",isDocsHomePage:!1,title:"Modbus",description:"Einige Ger\xe4te, wie z.b. Z\xe4hler (meters) oder Wallboxen (chargers) werden \xfcber das Modbus-Protokoll angebunden und angesprochen.",source:"@site/docs/reference/modbus.md",sourceDirName:"reference",slug:"/reference/modbus",permalink:"/docs/reference/modbus",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/modbus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/reference/plugins"},next:{title:"API",permalink:"/docs/reference/api"}},u=[{value:"Physikalische Verbindung",id:"physikalische-verbindung",children:[],level:2},{value:"Vordefinierte Ger\xe4te",id:"vordefinierte-ger\xe4te",children:[],level:2},{value:"Manuelle Konfiguration",id:"manuelle-konfiguration",children:[],level:2}],c={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modbus"},"Modbus"),(0,o.kt)("p",null,"Einige Ger\xe4te, wie z.b. Z\xe4hler (",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/configuration/meters#modbus"},(0,o.kt)("inlineCode",{parentName:"a"},"meters")),") oder Wallboxen (",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/configuration/chargers"},(0,o.kt)("inlineCode",{parentName:"a"},"chargers")),") werden \xfcber das Modbus-Protokoll angebunden und angesprochen."),(0,o.kt)("p",null,"Die ",(0,o.kt)("inlineCode",{parentName:"p"},"meter")," Konfiguration besteht hierbei aus der Art der pysikalischen Verbindung (Schnittstelle), ggf. den technischen Schnittstellenparametern, dem verwendeten Modbus-Protokoll, der eindeutigen Modbus-ID des Ger\xe4tes auf dem Bus und der Nummer und Art des Registers welches letztendlich gelesen oder geschrieben werden soll."),(0,o.kt)("p",null,"Zu beachten ist, dass es drei verschiedene Modbus-Protokolle gibt: Modbus-RTU, Modbus ASCII und Modbus/TCP. Diese k\xf6nnen technisch auch \xfcber unterschiedliche Schnittstellentypen \xfcbertragen werden k\xf6nnen.\nDie klassische Variante ist dabei Modbus-RTU \xfcber eine serielle RS485-Busschnittstelle wie sie typischerweise z. B. bei den meisten Z\xe4hlern oder manchen Wallboxen genutzt wird. Ger\xe4te mit einer Netzwerkschnittstelle (Ethernet/WiFi) hingegen werden typischerweise dar\xfcber \xfcber das Modbus/TCP-Protokoll angesprochen."),(0,o.kt)("p",null,'Soll ein entferntes RS485-Ger\xe4t aber ebenfalls \xfcber externe Schnittstellenkonverter via Netzwerk (Ethernet/WiFi/PowerLAN) angebunden werden kommt dabei letztendlich aber regelm\xe4\xdfig ein Modbus-RTU-Protokoll \xfcber eine TCP/IP-Verbindung zustande. Das Modbus-RTU-Protokoll wird dabei 1:1 \xfcber das Netzwerk \xfcbertragen (sprich "getunnelt"). Hierbei handelt es sich NICHT um Modbus/TCP. "Modbus (RTU) over TCP" ist etwas anderes als Modbus/TCP!'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Achtung: Es gibt allerdings auch komplexere Umsetzer die zus\xe4tzlich das Modbus-Protokoll selbst zwischen Modbus-RTU vs. Modbus/TCP umsetzen k\xf6nnen! Bei diesen Ger\xe4ten spricht dann evcc mit dem Konverter Modbus/TCP w\xe4hrend der Konverter mit dem seriellen Ger\xe4t via Modbus RTU kommuniziert und die Protokolle bidirektional \xfcbersetzt.\nHier muss man ggf. genau auf die Ger\xe4tekonfiguration und Spezifikation achten sonst ist keine Kommunikation m\xf6glich."))),(0,o.kt)("p",null,"Im Falle einer Konfiguration mit einem Schnittstellenkonverter wird die serielle Buskonfiguration am Konverter festgelegt und evcc kommuniziert letztendlich via Netzwerk mit dem Konverter. Wie zuvor erw\xe4hnt ist dabei jedoch das verwendete Modbus-Protokoll korrekt zu konfigurieren."),(0,o.kt)("h2",{id:"physikalische-verbindung"},"Physikalische Verbindung"),(0,o.kt)("p",null,"Wenn das Ger\xe4t seriell \xfcber einen seriellen RS485-Adapter verbunden ist, muss ",(0,o.kt)("inlineCode",{parentName:"p"},"device")," und die seriellen Kommunikationsparameter ",(0,o.kt)("inlineCode",{parentName:"p"},"baudrate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"comset")," entsprechend der Ger\xe4tekonfiguration angegeben werden. Alle Ger\xe4te am Bus m\xfcssen identische Kommunikationsparameter verwenden. Dazu bitte die jeweilige Betriebanleitung, Datenbl\xe4tter oder Systemeinstellungen vergleichen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'source: modbus\ndevice: /dev/ttyUSB0\nbaudrate: 9600\ncomset: "8N1"\n')),(0,o.kt)("p",null,"Wenn das Ger\xe4t \xfcber eine Netzwerkverbindung (TCP/IP) angebunden ist, muss eine ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," bestehend aus HOSTNAME:PORT oder IP:PORT angegeben werden:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\nuri: 192.168.0.11:502\nid: 1 # modbus slave id\n...\n")),(0,o.kt)("p",null,"Seriellen Schnittstellen verwenden standardm\xe4\xdfig das Modbus-RTU-Protokoll, Netzwerkziele werden standardm\xe4\xdfig via Modbus/TCP angesprochen. Dieses Verhalten kann mittels ",(0,o.kt)("inlineCode",{parentName:"p"},"rtu: true/false")," ggf. \xfcberschrieben werden.\nWenn es sich um ein Modbus-RTU-Ger\xe4t handelt welches, das \xfcber einen RS485/Ethernet-Konverter angebunden ist, muss zus\xe4tzlich also ",(0,o.kt)("inlineCode",{parentName:"p"},"rtu: true")," gesetzt werden. Die serielle Konfiguration wird dann direkt im Adapter eingestellt (siehe oben)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\nuri: 192.168.0.10:502\nid: 3 # modbus slave id\nrtu: true\n...\n")),(0,o.kt)("h2",{id:"vordefinierte-ger\xe4te"},"Vordefinierte Ger\xe4te"),(0,o.kt)("p",null,"Die integrierten vordefinierten Ger\xe4temodelle ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," sind identisch zu ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd/blob/master/docs/mbmd_run.md#options"},"MBMD"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," ABB       ABB A/B-Series meters\n DDM       DDM18SD\n DZG       DZG Metering GmbH DVH4013 meters\n IEM3000   Schneider Electric iEM3000 series\n INEPRO    Inepro Metering Pro 380\n JANITZA   Janitza B-Series meters\n MPM       Bernecker Engineering MPM3PM meters\n ORNO1P    ORNO WE-514 & WE-515\n ORNO1P504 ORNO WE-504\n ORNO3P    ORNO WE-516 & WE-517\n SBC       Saia Burgess Controls ALE3 meters\n SDM       Eastron SDM630\n SDM220    Eastron SDM220\n SDM230    Eastron SDM230\n SDM72     Eastron SDM72\n SEMTR     SolarEdge SE-MTR-3Y\n")),(0,o.kt)("p",null,"Alle davon abweichenden ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," werden als Ger\xe4t vom Typ ",(0,o.kt)("em",{parentName:"p"},"SunSpec")," behandelt."),(0,o.kt)("p",null,"Verwende ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," um den Wert der vom Ger\xe4t gelesen werden soll zu definieren. Alle unterst\xfctzten Werte sind auf ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd/blob/master/meters/measurements.go#L28"},"MBMD")," voreingestellt."),(0,o.kt)("p",null,"Im Falle eines ",(0,o.kt)("em",{parentName:"p"},"SunSpec"),"-kompatiblen Wechselrichters oder Z\xe4hlers werden die zu lesenden Werte in der Form ",(0,o.kt)("inlineCode",{parentName:"p"},"model:[block:]point")," nach der ",(0,o.kt)("em",{parentName:"p"},"SunSpec"),"-Definition angegeben. Zum Beispiel wird die DC-Leistung auf dem zweiten String eines dreiphasigen PV-Wechselrichters (enspricht SunSpec Model 103) wie folgt abgefragt: ",(0,o.kt)("inlineCode",{parentName:"p"},"value: 103:2:W"),"."),(0,o.kt)("p",null,"Das Ger\xe4te-",(0,o.kt)("inlineCode",{parentName:"p"},"model")," und die Slave ID ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," sind immer erforderlich:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\n...\nmodel: sdm\nvalue: Power\nscale: -1 # floating point factor applied to result, e.g. for kW to W conversion\n")),(0,o.kt)("h2",{id:"manuelle-konfiguration"},"Manuelle Konfiguration"),(0,o.kt)("p",null,"Falls das Modbus-Ger\xe4t nicht direkt unterst\xfctzt wird oder von den vordefinierten Modellen abweichende Werte gelesen oder geschrieben werden sollen, k\xf6nnen die Modbus Register auch vollst\xe4ndig manuell konfiguriert werden:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\n...\nregister:\n  address: 40070\n  source: holding # holding or input\n  decode: int32 # int16|32|64, uint16|32|64, float32|64 and u|int32s + float32s\nscale: -1.0 # floating point factor applied to result, e.g. for kW to W conversion\ntimeout: 2000 # ms\n")),(0,o.kt)("p",null,"Bei den ",(0,o.kt)("inlineCode",{parentName:"p"},"int32s/uint32s")," Dekodierungen wird die Wortreihenfolge vertauscht und sind z.B. bei E3/DC Ger\xe4ten n\xfctzlich."),(0,o.kt)("p",null,"Um ein Regsiter zu schreiben wird ",(0,o.kt)("inlineCode",{parentName:"p"},"type: writesingle")," verwendet, welches ein einzelnes 16bit Register (entweder ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," oder ",(0,o.kt)("inlineCode",{parentName:"p"},"bool"),") schreibt. Die Kodierung ist hier immer ",(0,o.kt)("inlineCode",{parentName:"p"},"uint16"),"."))}m.isMDXComponent=!0}}]);