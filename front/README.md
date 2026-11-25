# Application web

Ce dossier accueille l'application web de TraceLot.

La technologie est libre (HTML et JavaScript, Vite, React ou équivalent), à condition d'utiliser **ethers.js v6** et **MetaMask** (cahier des charges, section 9.1).

## Fonctionnalités attendues

Voir le cahier des charges, section 6.2 (exigences EF-10 à EF-15).

## Connexion au contrat

L'application a besoin de deux informations sur le contrat déployé :

- **son adresse**, affichée à la fin du déploiement (`npm run deploy:local`) ;
- **son ABI**, à copier depuis le champ `abi` du fichier `artifacts/contracts/TraceLot.sol/TraceLot.json`, généré par `npm run build`.

## Lancement

À décrire ici par l'apprenant : commandes d'installation et de lancement de l'application.
