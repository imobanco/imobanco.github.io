<template>
  <div>
    <b-card no-body class="card-transparent border-0">
      <b-tabs card vertical nav-wrapper-class="w-50" class="card-transparent" lazy>
        <b-tab
          lazy
          v-for="(topic, index) in topics_services"
          key="index"
          active
          class="card-transparent"
        >
          <template v-slot:title>
            <i class="fas fa-angle-right"></i>
            <strong>{{ topic.title }}</strong>
          </template>

          <b-card-text class="card-transparent">
            <h3 class="text-white text-title">{{ topic.subtitle}}</h3>
            <h5 class="text-success text-content">{{ topic.resumo}}</h5>
            <p class="text-white text-content text-justify">{{ topic.content}}</p>
            <p class="text-white text-content text-justify">{{ topic.contenta}}</p>
            <p class="text-white text-content text-justify">{{ topic.contentb}}</p>
            <p class="text-white text-content text-justify">{{ topic.contentc}}</p>
            <p class="text-white text-content text-justify">{{ topic.contentd}}</p>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ServicesItem",

  data() {
    return {
      topics_services: [
        {
          title: "Boletos",
          icon: "static/image/sgv/boletos.sgv",
          subtitle: "Boletos",
          resumo:
            "A melhor solução do mercado brasileiro. Somos o seu novo MODAL FINANCEIRO.",
          content:
            "* Emita boletos recorrentes e envie por e-mail gratuitamente.",
          contenta:
            "* Nosso sistema enviará os lembretes de vencimento para seus clientes.",
          contentb:
            "* Acompanhe seu cliente – Visualize quando os e-mails são abertos.",
          contentc: "* Pague somente os títulos recuperados.",

          link: "/boletos",
        },
        {
          title: "Assinaturas",
          subtitle: "Assinaturas",
          resumo: "",
          content:
            "Tenha a comodidade de utilizar os cartões de débito e crédito para promover a arrecadação de suas parcelas mensais, pagando taxas extremamente competitivas para isso e contando com um dos meios mais assertivos e práticos para seu recebimento. Utilizando-se do método de assinaturas Imobanco, você estará utilizando meio moderno e ágil para receber, mas contará também com nossa estrutura de cobrança para aqueles casos que o pagador não consiga ter a transação aprovada no cartão. Quer entender mais de nossa cobrança inadimplente?",
        },
        {
          title: "E-Commerce",
          subtitle: "E-Commerce",
          resumo:
            "Economize tempo e dinheiro com a plataforma projetada para se adaptar ao seu negócio.",
          content: `* Cadastre-se, crie sua loja virtual e comece a vender pela internet.`,
          contenta: "* Adptada para o seu negócio ",
          contentb: "* Fácil de usar.",
          contentc: "* Suporte 24×7",
          contentd:
            "* Centralize no Imobanco todas as necessidades para extrair mais resultados do seu negócio.",
          contente: "* Responsivo e adequada para mecanismos de busca",
        },
        {
          title: "Cobrança e Recuperação de Créditos",
          subtitle: "Cobrança e Recuperação de Créditos",
          resumo: "Recuperar seu dinheiro é nosso maior objetivo",
          content: `Seja seu negócio usuário de boletos ou de assinaturas com cartões de crédito, precisará de uma estrutura para cobrar os pagamentos que não foram liquidados por seus clientes.`,
        },
        {
          title: "Custódia",
          subtitle: "Custódia",
          resumo:
            "Esta opção é direcionada a pessoas que tem uma estrutura e deseja diminuir o peso do custo fixo que esta estrutura financeira trás.",
          content: `Para que gastar fixo se pode pagar tarifas acomodadas a seu movimento, de forma totalmente variável e econômica? O empreendedor que utiliza a custódia Imobanco, poderá receber seus valores através de nossos meios de recebimento (boletos, assinaturas, e-commerce e cobrança), cadastrando suas contas a pagar e permitindo que possamos gerenciar seu financeiro e tesouraria.
Essa solução é prática e muito simples: recebemos seus valores e gerenciamos seus pagamentos de acordo com seus saldos, avaliamos possibilidades e auxiliamos seu dia-a-dia financeiro com nossa aplicação e nossos gerentes de contas dedicados a seu negócio.`,
        },
        {
          title: "Antecipação de recebíveis",
          subtitle: "Antecipação de recebíveis",
          resumo:
            "Todos os dias, muitos empreendedores são chamados, quando enfrentam apertos no seu caixa, a optar por qual conta pagar, refletir sobre qual pagamento a fazer, é mais importante.",
          content: `Sendo optante por este serviço Imobanco, podemos promover a antecipação de seus recebíveis e ajudar seu negócio a ter os pagamentos em dia. Para que utilizar créditos bancários de cheque especial, com juros caros se podemos trabalhar com antecipação de recebimento a taxas de juros ajustadas e que caberão no seu bolso?
Venha para o Imobanco e usufrua desse serviço, podendo assim, administrar seu caixa de forma mais eficiente e moderna. Conte com a assessoria de seu gerente de contas e passe a ter uma administração financeira mais moderna.`,
        },
        {
          title: "Pagamento de contas",
          subtitle: "Pagamento de contas",
          resumo:
            "Sendo optante do serviço de custódia Imobanco, você poderá manter seus valores em nossas contas digitais e ordenar o pagamento de suas contas, estabelecendo ordem de prioridade entre elas, ou seja, na medida que os valores forem chegando na sua conta, iremos realizando os pagamentos na ordem de prioridade escolhida por você.",
          content: `Essa função não é obrigatória e pode ser ativada ou alterada de acordo com seu momento. Tenha um financeiro descomplicado e ágil, utilizando as ferramentas de pagamento Imobanco e o apoio de seu gerente de contas.`,
        },
        {
          title: "Repasses a parceiros (split de pagamentos)",
          subtitle: "Repasses a parceiros (split de pagamentos)",
          resumo:
            "Quem empreende no mercado atual, sabe que por muitas vezes não se pode fazer 100% do serviço sozinho.",
          content: `Nessas horas, precisamos pensar na possiblidade de diminuir o custo tributário evitando emitir 100% do faturamento e receber nota de seu parceiro da parte que cabe a ele. Percebeu que agindo assim terá emitido mais de 100% de notas fiscais e assim, oferecido a tributação valor superior ao serviço de fato contratado?
Com a solução de split de pagamentos automática Imobanco, você já emite seus títulos com uma “ordem de pagamento” automática, ou seja, quando o título for recebido ele automaticamente gerará um repasse automático, seguindo suas regras. Não importa o valor ou percentual, quando recebido dividiremos o valor para cada um dos parceiros, que fizeram parte do negócio com você.
Essa opção é perfeita para corretores de imóveis, profissionais autônomos, empresas que atendem um único cliente de forma conjunta, entre outras tantas situações.`,
        },
      ],
    };
  },
};
</script>

<style></style>
