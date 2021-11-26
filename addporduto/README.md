# SISTEMA DE AUTOMAÇÃO DE CADASTRO IFRS CAMPUS SERTÃO
A proposta viabilizaria a criação de e-mails e contas LDAP automaticamente, assim que o servidor assine o efetivo exercício.

## Objetivo
Auotmatizar o processo de cadastro em nossas bases internas de servidores que iniciam efetivo exercício no campus. 

## Justificativa
Atualmente o cadastro demanda desnecessariamente a Coordenadoria de TI para tarefa de cadastramento manual de e-mails (G Suite) e nas bases de dados LDAP e Samba. 
Infelzmente o caminho via SIAPE e SIG é lento já que a importação dos dados pode demoras até 60 dias. 

## Lista de Processos eliminados
- CGP: preenchimento da planilha de formação
- CGP: preenchimento do Sistema de Gestão Acadêmica
- CGP: contagem manual de servidores, mestres e doutores para lista atualizada do DDI
- CTI: criação manual do e-mail institucional
- CTI: criação manual de conta temporária no Samba 4
- CTI: cadastro manual do Employed Number no LDAP antigo

##  Como funciona atualmente
A digitalização oficial dos processos ocorre na Reitoria. No Campus o servidor somente assina o termo de efetivo exercício que é posteriormente encaminhado à reitoria. 

Felizmente a equipe do CGP do campus já mantém uma planilha, ainda que off-line em que no mesmo momento consultam o servidor ingressante para obter novos dados. 

Esses dados e outros subsidiam o DDI nas consultas para cadastro no SISTEC(quantos mestres, doutores, etc, possivelmente vão para plataforma Nilo Peçanha·


## Checklist de campos que podem ser úteis

- [ ] Nome
- [ ] Sobrenome
- [ ] SIAPE (O servidor ingressante já tem SIAPE???)
- [ ] Cargo
- [ ] Classe/Nivel
- [ ] Setor
- [ ] FG
- [ ] CPF
- [ ] Data de Nascimento
- [ ] Telefone
- [ ] Endereço
- [ ] Formação
- [ ] Setor


## Checklist de Features
- [ ] Validação dos campos
- [ ] Integração com API do G Suite para criação de e-mail
- [ ] No caso dos docentes, integração com banco de dados SCA
- [ ] No caso dos docentes, atualizar o campo Employer Number do LDAP antigo (campus digital)
- [ ] Integração com base de dados Samba 4
    - - [ ] Deve selecionar a categoria: professor, professor subtituto, tae e tericerizado, além do setor de lotação para fins de organização nos grupos do Samba (importante para sincronização com G Suite)
- [ ] Controle de Tempo de Progressão, Avaliações, etc com notificação por e-mail ao interessados
- [ ] Integração com plataforma Lattes para obtenção/validação da formação
- [ ] Registro de alterações devem ser salvas no banco Oracle a exemplo do SGA (ùltima atualização, usuário que executou, etc)


## Campos que são preenchidos pela CGP atualmente no SCA

- [ ] Vínculo Docente

Aba Identificação:

- [ ] Nome
- [ ] Data Nascimento
- [ ] Sexo
- [ ] Estado Civil
- [ ] Escolaridade
- [ ] Filiação: Pai,Mãe
- [ ] Naturalidade- Cidade,Nacionalidade,Naturalizado

Aba Documentação:

- [ ] CPF
- [ ] Numero identidade
- [ ] Data Expedição
- [ ] UF Identidade
- [ ] Órgão Emissor
- [ ] Título Eleitor
- [ ] Zona
- [ ] Seção
- [ ] UF do Título
- [ ] Data Emissão 
- [ ] PIS/PASEP

Aba Endereço:

- [ ] Endereço Residencial
- [ ] Número
- [ ] Complemento
- [ ] Bairro
- [ ] CEP
- [ ] Cidade

Aba Telefone/E-mail:

- [ ] Telefone Residencial
- [ ] Telefone Celular
- [ ] Email Pessoal


Telas do SCA: <link>https://drive.google.com/drive/folders/1w9T2PcpXc89bJ-cp3IoZWQG4CMOJoGdU?usp=sharing