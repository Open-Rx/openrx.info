## Monero (XMR)

Monero es la única criptomoneda convencional que es privada por default. Bitcoin graba cada transacción permanentemente en un registro público. Monero no - el remitente, destinatario, y cantidad son escondidas usando técnicas criptográficas que son parte del protocolo mismo, no puestas por encima.

The relevant pieces:

- **Ring signatures** mezcla tus transacciones con otras al nivel del protocolo para que el verdadero remitente no pueda ser identificado
- **Stealth addresses** genera una dirección única por cada transacción; tu dirección de cartera real nunca aparece en la cadena
- **RingCT** esconde la cantidad de la transacción

Esto es significativamente diferente de "mezclar" Bitcoin o enrutar por medio de un VPN. Esos son parches encima de un sistema transparente. Con Monero, simplemente no hay registro público que analizar.

### Obtener Monero

Monero es mas difícil de comprar directamente que Bitcoin porque varios exchanges mayores lo han deslistado bajo presión de regulaciones. Estas son las opciones prácticas.

**Cake Wallet** es probablemente el punto de entrada mas fácil. Es una cartera de código abierto para móviles (iOS y Android) que admite a Monero nativamente y tiene built-in exchange. Puede cambiar desde BTC o comprar directamente con una tarjeta adentro de la app.

1. Descargue Cake Wallet
2. Cree una nueva cartera Monero y guarde su seed phrase en algún lugar seguro
3. Use la pestaña Intercambiar para cambiar de BTC a XMR, o compre con una tarjeta

**Cambiar desde BTC** funciona bien si ya tiene Bitcoin. Servicios como [Trocador.app](https://trocador.app) o Majestic Bank le permite intercambiar BTC por XMR sin requerir de una cuenta, sin KYC, sin registro. Ingrese su dirección de cartera Monero, envié BTC, reciba XMR.

**Haveno** es un exchange descentralizado creado especificamente para Monero. Las transacciones son peer-to-peer sin servidor central. Puede pagar con efectivo, transferencia bancaria, y otros métodos. Es la opción mas privada pero también la mas complicada de configurar.

### Enviar a un proveedor

Consiga la dirección Monero del proveedor. En su cartera, toque Enviar, pegue la dirección, ingrese la cantidad, y confirme.

Las transacciones Monero típicamente se confirman de 2 a 20 minutos. Las tarifas son mínimas y no hay equivalente al "slow lane" de Bitcoin en el que transacciones de bajas tarifas se quedan sin confirmar por horas.

### Algunas cosas para saber

Nunca comparta su seed phrase. Use Cake Wallet o la cartera GUI oficial de Monero; evite carteras de fuentes que no reconozca. Cake Wallet se conecta a nodos remotos por default para que no necesite correr su propio nodo. Y como todas las criptomonedas, las transacciones de Monero son irreversibles una vez confirmadas, así que verifique doblemente la dirección.
