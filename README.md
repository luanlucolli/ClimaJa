
# ClimaJá - Previsão do Tempo

ClimaJá é uma aplicação web desenvolvida como um projeto didático para praticar React e integração com APIs. Utiliza a API da OpenWeather para fornecer dados climáticos atualizados, como temperatura, umidade, e informações sobre o nascer e pôr do sol.

## Funcionalidades

- **Busca por Cidade:** Informe o nome de uma cidade e veja as condições climáticas.
- **Localização Atual:** Obtenha automaticamente os dados climáticos da sua localização usando o GPS.
- **Detalhes Climáticos:**
  - Temperatura (atual, máxima e mínima)
  - Descrição do clima com ícones
  - Umidade, velocidade do vento e cobertura de nuvens
  - Horários do nascer e pôr do sol
- **Mensagens de Erro:** Feedback claro para problemas, como cidade não encontrada ou falha na conexão.

## Tecnologias

- **Framework:** React
- **Build Tool:** Vite
- **Estilização:** CSS Responsivo
- **Notificações:** React-Toastify
- **API:** OpenWeather API

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/climaja.git
   cd climaja
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a API:**
   Substitua `SUA_API_KEY` no código pela chave obtida na [OpenWeather API](https://home.openweathermap.org/api_keys).

4. **Execute o projeto:**
   ```bash
   npm run dev
   ```
   Acesse em: [http://localhost:5173](http://localhost:5173)

---

**Projeto criado para fins didáticos por [Luan Gustavo Luçolli](https://github.com/luanlucolli)**
