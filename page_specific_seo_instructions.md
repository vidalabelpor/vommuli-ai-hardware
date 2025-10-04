## Specific Individual Page Instructions for SEO Optimization

The overarching goal for every high-intent service and location page is to go **"super super deep"** into mapping out how to outrank all local competition. This requires generating content that is significantly more detailed than typical local competitor websites.

### 1. Page Mapping and Targeting (Length by Necessity)

**Instruction:** **Build a dedicated landing page for each high-intent search term**.

*   For every search term related to a specific service your company provides, create a unique landing page.
*   For every location-oriented term identified in your keyword research, create a unique location page.
*   **Focus:** These pages must tap into search terms where people are ready to **"pull out their credit card"** or immediately call for service. These categories include emergency keywords, service keywords, problem keywords, and local keywords.
*   **Length Implication:** The necessity of covering all angles of the service/location will result in a **"huge amount of detail"**, naturally leading to longer, more comprehensive pages than competitors usually produce.

### 2. Location Page Deep Optimization (Content & Detail)

Location pages require the most specific, detailed instructions to build topical authority and demonstrate relevance.

**Instruction:** **Go super super deep into mapping out how we can outrank all the competition on these individual search terms**.

| Element | Specific Content Instruction for Claude Code | Source(s) |
| :--- | :--- | :--- |
| **Local Specificity** | Include **local landmarks** in the page content. | |
| **Industry Relevance** | Detail **common industry issues** that might affect your business type (e.g., truck issues for a mobile mechanic) within that specific location. | |
| **Authority Content** | Integrate **frequently asked questions** (FAQs) about the industry or the specific service provided in that location. | |
| **Unique Signals** | Incorporate unique, relevant local information (e.g., if a region has a major local industry, reference how your service relates to that local business activity). | |

### 3. Deployment and Visual Enhancement Critical Notes

**Before implementing any page-specific SEO optimizations, ensure deployment pipeline is functional:**

**Deployment Verification**:
```bash
# Always check if changes are live before proceeding
curl -s -I https://yourdomain.com | grep etag
```

**If Deployment Fails**:
1. **Manual Vercel CLI**: `vercel --prod --yes`
2. **Empty Commit Trigger**: `git commit --allow-empty -m "Force deployment" && git push origin main`
3. **Combination Method**: Manual CLI first, then empty commit

**Visual Enhancement Notes**:
- Use inline style fallbacks for critical design elements
- Add enhanced classes to Tailwind safelist in `tailwind.config.js`
- Create class reference file for complex styling
- Test visual changes immediately after deployment

### 4. Foundational On-Page SEO Optimization

For all pages (Service and Location), Claude Code must ensure basic and advanced technical and on-page elements are perfect:

| Optimization Area | Claude Code Instruction/Checklist | Source(s) |
| :--- | :--- | :--- |
| **Keyword Integration** | Ensure that targeted keywords are **naturally integrated** into the page content. | |
| **Meta Elements** | Ensure the pages have the **right meta tags and descriptions**. | |
| **Schema Markup** | Include **schema markup** so Google knows exactly what the website and individual page do. | |
| **Internal Linking** | Automatically create **internal links** throughout the site, connecting relevant location pages and linking services with related services. Claude Code should be able to discover and implement this on its own. | |
| **Topical Authority** | Develop **topical authority** by having relevant information and signals around the specific topic the page is focusing on. | |

### 4. Technical Performance and Speed Optimization

While not strictly content length, optimizing performance is critical for quick ranking.

**Instruction:** **Identify and fix all technical and on-page SEO issues and opportunities using the ultra think command**.

*   **Image Optimization:** Compress all images and convert them to modern formats like **WebP format** to ensure the mobile website is **"super snappy"**.
*   **Auditing:** Use the free Google Page Speed Insights tool. If errors are found, copy and paste the **specific errors and details** into Claude Code and instruct it to **"go fix it"**. Work to get the performance, accessibility, and SEO scores up.
*   **Consistency:** Cross-reference the information on each page with the Google Business Profile to **make sure the information is consistent** and there are no discrepancies.