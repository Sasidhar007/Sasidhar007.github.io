# Sasidhar Mukthinuthalapati — portfolio

Personal site for a Senior Data Engineer / Tech Lead. Static HTML, CSS, and JavaScript.

**Live:** [https://sasidhar007.github.io](https://sasidhar007.github.io)

## What’s on the site

- Experience and case studies (Customer.io + Amplitude, outbound Databricks framework, inbound SFTP / Oracle / Tableau)
- Skills with tool logos
- Contact form (no public email or phone)
- Sign-off: “May the insights of data be with you.”

## Run locally

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Contact form

The page does not publish an email or phone number. Submissions go through [Formspree](https://formspree.io) to the inbox configured there.

The form action in `index.html` is `https://formspree.io/f/mzepwola`. Change that URL only if you create a new Formspree form.

## Analytics

Google Analytics is **not** embedded. To add GA4, create a property, copy the Measurement ID (`G-XXXXXXXXXX`), and put the official gtag snippet in the `<head>` of `index.html`. Traffic is counted only after that change is pushed to the live repo.

## Remotes and publish

This folder’s `origin` is [Sasidhar007.github.io](https://github.com/Sasidhar007/Sasidhar007.github.io). GitHub Pages serves `main` from the repo root.

```bash
git add -A
git commit -m "Describe the change"
git push
```

That updates [https://sasidhar007.github.io](https://sasidhar007.github.io). Hard-refresh if the old page is cached.

The `portfolio` remote is [Sasidhar007/portfolio](https://github.com/Sasidhar007/portfolio), an earlier copy. It does not serve the live URL.
