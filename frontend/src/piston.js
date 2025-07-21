const apiBase = 'https://emkc.org/api/v1/piston/execute';

async function callPiston(lang, code) {
  const response = await fetch(apiBase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      language: lang,
      source: code,
    }),
  });

  const data = await response.json();

  return data;
}

export default callPiston;
