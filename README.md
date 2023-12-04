<h1 align="center"> API Anúncio de Imóveis </h1>

<h2 align="justify"> Projeto desenvolvido para as UC's "Sistemas Distribuídos e Mobile" e "Usabilidade, Desenvolvimento Web, Mobile e Jogos" do 3º semestre do curso Análise e Desenvolvimento de Sistemas da UNIFG. </h2>

<h3 align="center"> Descrição do Projeto </h3>
<p align="justify"> Projeto de desenvolvimento de uma API de Anúncio de Imóveis, que faz uso das tecnologias Node.js, React, Express.js, MongoDB e Swagger, com um sistema CRUD (Create, Read, Update, Delete) com autenticação e autorização, paginação e busca.</p>
<p align="justify">Este sistema foi pensado para que os clientes proprietários de imóveis possam postar anúncios para os fins de venda e aluguel, esses anúncios ficarão disponíveis para visualização e busca mesmo por quem não for registrado no sistema, os usuários poderão buscar imóveis por cidade e havendo o interesse poderão contatar o proprietário por meio dos contatos deixados no anúncio. Caso o imóvel já tenha sido alugado ou vendido, apenas o autor original do anúncio poderá excluí-lo ou editar o campo em que é indicada a atual disponibilidade do imóvel.</p>

<h3 align="center">Detalhamento da Utilização do Sistema</h3>

<p align="justify">O sistema estará disponível para acesso na web. Na interface, o cliente verá os anúncios dos imóveis e poderá realizar a busca dos imóveis pela cidade de seu interesse. Caso o cliente seja o proprietário de algum imóvel e deseje anunciá-lo, para isso deverá se registrar no sistema, preenchendo os campos solicitados e então realizar o login. Assim ele poderá criar o anúncio. A senha escolhida pelo cliente será criptografada para sua maior segurança. Após criar o anúncio, o cliente poderá editar informações posteriormente ou até deletá-lo.</p>

<h3 align="center">Detalhes Técnicos Adicionais do Sistema</h3>

<p align="justify"> :pushpin: Criptografia das senhas dos usuários: feita com o método de criptografia bcrypt </p>
<p align="justify"> :pushpin: Autenticação de usuário e tempo da sessão: autenticação do tipo Bearer com Json Web Token, tempo de sessão definido para 24hrs</p>

<h3 align="center">Mock de Autenticação</h3>
<p element="justify">
|função|autenticação|
| -------- | -------- |
|Ver anúncios|Não|
|Detalhes de autor em um anúncio|Sim|
|Buscar anúncios por cidade|Não|
|Buscar anúncios por autor|Sim|
|Atualizar anúncios|Sim|
|Deletar anúncios|Sim|
</p>

