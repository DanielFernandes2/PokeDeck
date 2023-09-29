# Para rodar esse projeto faça esse passo a passo

1. Abra o Visual Studio Code

2. No terminal cole esse codigo 
```
npm i
```

3. Depois da instalação cole esse codigo que abrira o servidor na porta 3000 
```
npm run dev
```
4. Abra um segundo terminal e cole esse codigo 
```
npm i react-hot-toast
```
5. Abre o seu PowerShell como administrador

6. Vá ate a pasta do arquivo por exemplo se o seu projeto estiver na pasta Downloads faça 
```
cd Downloads

cd PokeDeck-main
```
7. Depois de entrar na pasta do projeto cole esse codigo 
```
npm install -g json-server
```
8. Cole esse codigo logo que terminar a instalação 
```
Set-ExecutionPolicy Unrestricted
```
9. Agora vamos abrir o servidor da API fake colando esse comando 
```
json-server --watch favoritos.json --port 3001
```
<sub> lembrando que a porta 3000 está sendo usada, por isso estou abrindo na porta 3001, se tiver outros projetos abertos é só colocar a porta que quiser 3002, 3003..... </sub>

Pronto seu projeto já está totalmente aberto!!!!

**Observação: Quando você favoritar um pokemon e for na parte de favorito não terá nenhum, lembre-se de dar um "ctrl+snift+r" para limpar o cache da pagina e reiniciar a pagina**

**Lembre-se tambem de editar seu email e sua senha na pasta LOGIN arquivo PAGE.JSX, troque na function login onde está email=== "123@gmail.com" e senha=== "123" (não esqueça de colocar seu email e senha entre "" )**

**Você tambem tera que colocar o seu email na pasta ACTIONS no arquivo AUTH.JS, troque na function serverLogin troque o "123@gmail.com" (não esqueça de colocar seu email entre "" )**

Agora você tem livre acesso ao projeto com seu propio login

Se você for colocar esse projeto num Vercel por exemplo ele não pegara a pagina de favorito, porque infelizmente a API de pokemon não tem um servidor, então tive que fazer uma API falsa rodando um servidor local, então só pega quando você rodar pelo Visual Studio Code

Aproveite =D



Projeto feito junto com @leobianor
