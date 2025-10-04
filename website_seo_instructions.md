That is a fantastic request. The sources provide several specific, high-leverage instructions and prompt structures used successfully to build and optimize a local service business website and generate thousands of dollars in revenue within 24 hours.

Below is a detailed instruction sequence you can provide to Claude Code, broken down into phases, drawing on the expertise of "the boring marketer":

---

## Detailed Instructions for Claude Code (Local Business SEO Workflow)

These instructions are designed to have Claude Code handle the full development, optimization, and content creation for a local business focused on specific, high-intent keywords, leveraging the "vibe marketing" approach described in the sources.

### Phase 1: Setup and Initial Development

The foundational step is using Claude Code to build the site structure, ideally incorporating professional design elements.

1.  **Development Environment Setup:** (Self-serve or ask Claude Code for steps) If you are using a Mac, use the terminal to install Claude Code via the authenticated command from Claude Desktop.
2.  **Version Control Setup:** Once the environment is ready, instruct Claude Code to establish version control: **"Create a repository on GitHub"** and then **"Ask Claude Code how you can push push the the site there"**.
3.  **Design Integration (Vibe Coding):** If you have professional Figma design files (recommended for standing out, as many vibe-coded sites look similar), use a tool like Anima to convert them into React components.
    *   **Initial Build Prompt:** Provide the components/files and instruct Claude Code to **"assemble and build your website"** using the provided design components. The goal is to get 95% of the way to the final design.
4.  **Deployment:** Use a service like Vercel, linking it to the GitHub repository, so that code updates pushed to GitHub automatically update the live website.

### **CRITICAL DEPLOYMENT TROUBLESHOOTING**
**If visual changes or updates don't appear on the live site:**

1. **Check Deployment Status**:
   ```bash
   curl -s -I https://yourdomain.com | grep etag
   ```

2. **Emergency Deployment Methods**:
   - **Manual Vercel CLI**: `vercel --prod --yes`
   - **Force Webhook**: `git commit --allow-empty -m "Force deployment" && git push origin main`
   - **Combination**: Manual CLI + empty commit (proven method)

3. **Tailwind CSS v4 Issues**:
   - Add safelist to `tailwind.config.js` for dynamic classes
   - Create class reference file for build detection
   - Use inline style fallbacks for critical visual elements

### Phase 2: Keyword Research and Content Mapping

Your first major interaction with Claude Code should be determining high-intent search terms.

1.  **Keyword Research Prompt:** If you have an existing website, provide the URL. If not, describe your services in detail. Then instruct Claude Code: **"hey here's my website here's what I'm trying to do give me a list of like 25 to 50 keywords that I can optimize my website around"**.
2.  **Intent Analysis:** Follow up by asking Claude Code to analyze these keywords for **search intent and buying stage**. Focus on identifying keywords that indicate immediate need (where customers are ready to pull out their credit card or call immediately), such as "emergency keywords, service keywords, and problem keywords".
3.  **Content Mapping Instruction:** Instruct Claude Code to map these high-intent search terms to the site's supply (landing pages). For example: **"For each one of these search terms that related to a specific service that the company can do and any of the location-oriented terms, build out dedicated pages for each and every one of those"**.

### Phase 3: Deep Technical SEO Audit and Fixes

Use Claude Code's advanced features (like "ultra think" or Opus) to conduct a deep audit, which can help quickly outrank unsophisticated local competition.

1.  **Technical Audit Prompt (Opus/Ultra Think):** **"hey go through this website in extreme detail Ultra think about this. You can use the ultra think command. So it'll spend extra time use Opus really go deep and do sort of some deep research and find all the technical and onpage SEO issues and opportunities that we can fix together so that I can dominate the local market"**.
2.  **Execution Prompt:** Once technical issues (such as missing robots.txt, XML sitemap, speed issues, or lack of schema markup) are identified, simply instruct Claude Code: **"fix them"**.
3.  **Speed Optimization:** If the mobile site is slow (a common issue), provide the specific instruction: **"hey your mobile website's slow"**. Claude Code should then work to compress images and convert files to modern formats like WebP.
4.  **External Audit Integration:** Use free tools like Google Page Speed Insights to find detailed performance errors. Copy and paste these specific errors and instructions into Claude Code, telling it to **"go fix it"**. This is a form of "vibe debugging" applied to optimization.

### Phase 4: High-Quality Content Generation

Instruct Claude Code to create content that builds topical authority and detail that competitors in "boring markets" typically overlook.

1.  **Outranking Instruction:** For the dedicated location and service pages created in Phase 2, instruct Claude Code to **"go super super deep into mapping out how we can outrank all the competition on these individual search terms"**.
2.  **Location Page Detail:** Specifically instruct Claude Code to enrich location pages with unique, relevant information, such as: **"Ensure location pages include local landmarks, common industry issues that might affect [your business type], and frequently asked questions about the industry"**.

### Phase 5: Ongoing Optimization and Sub-Agents

You can use Claude Code to manage background tasks and ensure consistency across platforms.

1.  **Sub-Agent Command:** To delegate multiple analysis tasks simultaneously, instruct Claude Code to launch dedicated sub-agents: **"Hey Claude launch three different sub agents. One to find content opportunities, one to analyze my competitors, and one to identify all the other fixes I should be doing on my website"**.
2.  **LLM Trust Signal:** Instruct Claude Code to add an allow list for large language models (LLMs) to crawl the site, which can help your site show up in LLM answers: **"Add an LLM.txt file to the website"**.
3.  **Consistency Check:** If you are setting up or updating a Google Business Profile, instruct Claude Code to ensure data synchronization: **"Go back and forth between the Google Business Profile and the website to make sure the information is consistent and there weren't any information that didn't match up"**.