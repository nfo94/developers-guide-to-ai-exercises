Using a local Ollama 0.32.5. Run the backend:

```bash
node server.mjs
```

Run the frontend:

```bash
npm run dev
```

Initial test only on backend:

```bash
curl http://localhost:8000
```

`POST` test:

```bash
curl -X POST http://localhost:8000 \
 -H "Content-Type: application/json" \
 -d '{"question": "Talk about the Sepultura band in one paragraph"}'
```
