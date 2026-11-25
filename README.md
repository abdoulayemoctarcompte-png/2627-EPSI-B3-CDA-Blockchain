# TraceLot

Registre de traçabilité de lots de marchandises sur Ethereum, partagé entre producteurs, transporteurs et distributeurs.

Projet final du module **Développement Blockchain** (BLOE562 · Concepteur développeur d'applications, 3e année).

- Cahier des charges : [docs/cahier-des-charges.md](docs/cahier-des-charges.md)
- Modèle de note d'architecture : [docs/note-architecture.md](docs/note-architecture.md)
- Date de remise : **14 décembre 2026**

---

## Équipe et rendu

> Section à compléter par l'apprenant ou le binôme.

| Élément | Valeur |
| --- | --- |
| Membre 1 | [Nom Prénom] |
| Membre 2 (binôme) | [Nom Prénom ou « aucun »] |
| Réseau de déploiement | [Local Hardhat ou Sepolia] |
| Adresse du contrat (si Sepolia) | [0x...] |
| Exigences « Pourrait » réalisées | [EF-09, EF-14, EF-15 ou aucune] |

---

## Démarrer

### Prérequis

- [Node.js](https://nodejs.org) 22.13 ou plus récent (`node -v` pour vérifier)
- [Git](https://git-scm.com)
- L'extension [MetaMask](https://metamask.io) dans votre navigateur
- Conseillé : VS Code avec l'extension Solidity de Nomic Foundation (proposée automatiquement à l'ouverture du projet)

### Récupérer le projet

1. Cliquez sur **Fork** en haut de cette page pour créer votre copie du dépôt. En binôme, un seul membre crée le fork et ajoute l'autre comme collaborateur (Settings, Collaborators).
2. Clonez **votre fork** :

```bash
git clone https://github.com/<votre-compte>/2627-EPSI-B3-CDA-Blockchain.git
cd 2627-EPSI-B3-CDA-Blockchain
npm install
```

3. Vérifiez que tout fonctionne :

```bash
npm run build
npm test
```

Le test de départ doit passer.

---

## Commandes utiles

| Commande | Rôle |
| --- | --- |
| `npm run build` | Compile les contrats |
| `npm test` | Lance les tests |
| `npm run node` | Démarre un réseau local sur `http://127.0.0.1:8545` |
| `npm run deploy:local` | Déploie le contrat sur le réseau local (le réseau doit être démarré) |
| `npm run deploy:sepolia` | Déploie le contrat sur le testnet Sepolia (facultatif, voir plus bas) |

---

## Structure du projet

```
contracts/          Smart contract TraceLot (à compléter)
test/               Tests automatisés du contrat (à compléter)
ignition/modules/   Module de déploiement Hardhat Ignition
front/              Application web (technologie libre)
docs/               Cahier des charges et note d'architecture
hardhat.config.ts   Configuration Hardhat
```

---

## Travailler en local

1. Dans un premier terminal, démarrez le réseau local et laissez-le tourner :

```bash
npm run node
```

2. Dans un second terminal, déployez le contrat :

```bash
npm run deploy:local
```

L'adresse du contrat s'affiche à la fin du déploiement : notez-la pour l'application web.

3. Dans MetaMask, ajoutez le réseau local :
   - URL RPC : `http://127.0.0.1:8545`
   - ID de chaîne : `31337`
   - Symbole : `ETH`

4. Importez dans MetaMask un ou plusieurs comptes de test affichés par `npm run node` (clé privée). Ces comptes sont publics et ne servent qu'en local : n'y envoyez jamais de vrais fonds.

Si vous redémarrez le réseau local, la chaîne repart de zéro : redéployez le contrat et, dans MetaMask, effacez l'historique du compte (Paramètres, Avancé).

---

## Déployer sur Sepolia (facultatif)

Les secrets sont stockés dans le gestionnaire chiffré de Hardhat, jamais dans le code :

```bash
npx hardhat keystore set SEPOLIA_RPC_URL
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
npm run deploy:sepolia
```

Utilisez un compte MetaMask dédié aux tests, alimenté par un faucet Sepolia. Ne publiez jamais une clé privée ni une phrase de récupération dans le dépôt (exigence ENF-04).

---

## Rendre le projet

- Poussez régulièrement votre travail sur votre fork : les commits réguliers font partie des critères d'évaluation.
- Seul ce qui est poussé sur votre fork au **14 décembre 2026** est évalué.
- Complétez la section « Équipe et rendu » en haut de ce fichier.
- Le dépôt contient une vérification automatique (compilation et tests) à chaque push. Sur un fork, activez-la une fois dans l'onglet **Actions** de votre dépôt.
