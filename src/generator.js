// Generator module
// This file will contain the generation functionality
import axios from "axios";
import cheerio from "cheerio";

export async function crawlSite(url, depth, visited = new Set()) {
  if (depth === 0 || visited.has(url)) return [];
  visited.add(url);

  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const page = {
      url,
      title: $("title").text(),
      description: $('meta[name="description"]').attr("content") || "",
      headings: $("h1,h2,h3")
        .map((_, el) => $(el).text())
        .get()
    };

    const links = $("a[href]")
      .map((_, el) => $(el).attr("href"))
      .get()
      .filter(link => link.startsWith("http"));

    let children = [];
    for (const link of links.slice(0,5))
      children.push(...await crawlSite(link, depth - 1, visited));

    return [page, ...children];
  } catch {
    return [];
  }
}
