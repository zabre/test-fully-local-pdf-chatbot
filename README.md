# 🏠 Fully Client-Side Chat Over Documents

Un assistant pour la lecture de vos PDFs, entièrement local et personnalisée à vos documents
![](/public/images/demo.gif)

Users will need to download and set up [Ollama](https://ollama.ai), then run the following commands to
allow the site access to a locally running Mistral instance:

```bash
$ OLLAMA_ORIGINS=https://webml-demo.vercel.app OLLAMA_HOST=127.0.0.1:11435 ollama serve
```
Then, in another terminal window:

```bash
$ OLLAMA_HOST=127.0.0.1:11435 ollama pull mistral
```


## 🙏 Merci !
Special thanks to [@Hacubu](https://x.com/hacubu) who coded all this project
