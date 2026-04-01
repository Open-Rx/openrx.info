# openrx.info

openrx.info is a harm reduction and grey market medication sourcing resource &
guide, focusing initially on DIY HRT and GLP-1 sourcing with a goal of becoming
as large and harassment-resistant of a source as possible for all diy
medications.

the world is broken, we can only fix it together.

## features

### stage one

- [x] diyhrt.info mirror
- [ ] hrt.fm vendor listings
- [x] gray.guide mirror
- [ ] diyhrt.market vendor listings / mirror
- [x] public docker image w/ tor & i2p support
- [x] `.md`/`.json`/`.csv` routes on all pages for easier model processing
- [x] deduplicate common information
  - [x] payment methods / why crypto?
  - [x] injection information
  - [x] reconstitution
  - [x] trust your vendor, trust your product.

### stage two

- [ ] vendor rating system
  - [ ] create & open form
  - [ ] `admin.openrx.info` for approving / denying ratings
  - [ ] showcase, sort by rating
- [ ] public database
  - [ ] graphql
  - [ ] more?
- [ ] resilient node network
  - [ ] build-time page signing against root certificate
  - [ ] edge node content verification (no central copy needed)
  - [ ] opt-in community nodes via `docker pull` (VPS, raspberry pi, background process)
  - [ ] no open ports required, nodes register outbound
  - [ ] `sync.openrx.info` edge coordination server

### stage three

- [ ] `vendor.openrx.info` pilot program
- [ ] decentralized database
  - [ ] docker image for locally hosting database
  - [ ] signed database packages on `sync.openrx.info`
- [ ] #riir
