# Code Citations

## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsTo
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: Apache-2.0
https://github.com/NantesJS/nantesjs-website/blob/236288e082960489b64a93e504647773c1338bd0/src/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/jungshadow/yfpp/blob/ee41bda1f39c0a16da5548efa2af2398318643ce/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/Addepar/ember-table/blob/2848dd0f289fc4d902ab55b322b70ec3a13c661b/tests/dummy/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/tkaczykmichal/tkaczykmichal.github.io/blob/0215541ef4645def0341a0562d7331f72c6f4e91/portfolio/index.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```


## License: unknown
https://github.com/carolyndev/recipeace/blob/6187302fae8231433de2ac86722518ce5a741e12/public/404.html

```
File editing tools are disabled — I'm in Plan mode. Let me provide the full plan.

---

## Plan: Push to GitHub, Firebase Free Tier Fix, UPI Setup & Deployment

### TL;DR

The code is ready. Three things to resolve: **(1)** Push the local code to your empty GitHub repo, **(2)** Firebase Spark plan **is free forever** (you saw a Google Cloud promo, not the Spark plan), **(3)** set your personal UPI ID from any app. One small code addition needed: a `public/404.html` for GitHub Pages.

---

### Firebase: It IS Free

**You do NOT need to pay.** What you saw is the **Google Cloud $300 Free Trial** promo that appears when creating a project. That's for the Blaze (pay-as-you-go) plan. You need the **Spark plan** instead, which is:

- **Free forever** — no credit card, no 90-day limit
- **Firestore:** 1.5M reads/month, 600K writes/month, 1 GiB storage
- **Auth:** 50,000 monthly active users (email + Google sign-in)
- **Hosting:** 10 GB storage, 10 GB transfer/month

This is more than enough for your use case. When creating (or editing) your Firebase project, make sure you're on the **Spark** plan, not Blaze.

> **How to check:** Firebase Console → Project Settings → Usage and billing → Plan. It should say "Spark plan (free)".

---

### UPI Environment Variables

UPI person-to-person payments are **100% free** (zero MDR, mandated by Indian govt since 2020). No API or payment gateway needed.

**How to find your UPI ID:**

| App | Steps | Example ID |
|-----|-------|-----------|
| **Google Pay** | Profile pic (top right) → scroll to "UPI IDs" | `yourname@okaxis` |
| **PhonePe** | Profile (top left) → "UPI Settings" or "My UPI IDs" | `yourname@ybl` |
| **Paytm** | Profile → Settings → Payment Settings → UPI ID | `yourname@paytm` |

Then set in your `.env`:
```
VITE_UPI_ID=yourname@ybl
VITE_UPI_NAME=Vault Q
```

Replace `yourname@ybl` with your actual UPI ID from any app above.

---

### Steps

**1. Create `public/404.html`** — GitHub Pages redirect for SPA support:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vault Q</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '
```

