// Parser module
// This file will contain the parsing functionality

export function buildOutputs(pages) {

  const json = JSON.stringify(pages, null, 2);

  const markdown = pages.map(p =>
`## ${p.title}
URL: ${p.url}

${p.description}

Headings:
${p.headings.join("\n")}
`).join("\n---\n");

  const html = `
<html>
<body>
<h1>LLMS Info</h1>
${pages.map(p=>`
<section>
<h2>${p.title}</h2>
<p>${p.description}</p>
<ul>${p.headings.map(h=>`<li>${h}</li>`).join("")}</ul>
</section>`).join("")}
</body>
</html>`;

  return { json, markdown, html };
}
