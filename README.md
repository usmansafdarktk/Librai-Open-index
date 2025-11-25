# LibrAI Open Index for AI Safety

A living catalogue of public datasets designed to evaluate, red-team, and improve the safety of Large Language Models.

**[Visit Live Site](https://usmansafdarktk.github.io/Librai-Open-index/)** | **[LibrAI Website](https://www.librai.tech/)**

---

## About the Project

The **LibrAI Open Index** is a centralized hub for AI safety research, aggregating over **150 public datasets** for Large Language Model (LLM) evaluation. We structure these resources with standardized metadata including:

- **Licensing information** (MIT, Apache 2.0, etc.)
- **Release year** for temporal context
- **Task categories** and specific safety vectors
- **Source provenance** for traceability

Our mission is to streamline red-teaming and alignment research by making high-quality safety datasets easily discoverable and accessible.

## Features

- **Comprehensive Dataset Catalog**: Browse 150+ curated datasets for LLM safety evaluation
- **Granular Filtering**: Search by license, year, safety vector (PII leakage, toxicity, etc.)
- **Standardized Metadata**: Consistent formatting across all dataset entries
- **License-First Design**: Clear licensing information for compliance
- **Regular Updates**: Living index that grows with the AI safety community

## Dataset Structure

Our `datasets.csv` includes the following fields:

- **Name**: Dataset identifier
- **Description**: Brief overview of dataset purpose
- **License**: Distribution license (MIT, Apache 2.0, CC-BY, etc.)
- **Year**: Release/publication year
- **Safety Vectors**: Tagged categories (toxicity, bias, PII, hallucination, etc.)
- **Source**: Original provider or organization
- **Link**: Direct access URL

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Project Structure

```
Librai-Open-index/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Datasets.tsx
│   └── Footer.tsx
├── public/               # Static assets
│   ├── datasets.csv      # Main dataset catalog
│   └── *.png             # Images and icons
├── next.config.ts        # Next.js configuration
└── package.json
```

## Contributing

We welcome contributions to expand and improve the Open Index! Here's how you can help:

### Adding New Datasets

1. Fork the repository
2. Add dataset information to `public/datasets.csv`
3. Ensure all required fields are completed
4. Submit a pull request with a clear description

### Reporting Issues

Found a broken link or incorrect metadata? Please [open an issue](https://github.com/usmansafdarktk/Librai-Open-index/issues) with details.

### Code Contributions

1. Fork and clone the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Built by the [LibrAI](https://www.librai.tech/) team
- Inspired by the AI safety research community

## Contact

For questions, suggestions, or partnerships:

- **Website**: [librai.tech](https://www.librai.tech/)

