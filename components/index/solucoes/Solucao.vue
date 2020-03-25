<template>

<section>
		<div class="container-fluid pb-5">
			<!-- <div class="row pt-3 pb-2">
			<div class="col-lg-12 mb-2">
        
				
        
      </div>
			</div> -->


			<div class="row">
        <div class="col-lg-6 bg-info bg-solucoes p-5 ">
          <h3 class="mt-5 text-white text-titulo">Soluções</h3>
			    <h3 class="text-content text-success">Soluções definitiva para o <br>controle de seus recebimentos</h3>
      </div>

      <div class="col-lg-6 p-5 bg-cinza-1">
			
      
      <div role="tablist">
    <b-card no-body class="mb-1 button-solucoes">
      <b-card-header header-tag="header" class="p-1 button-solucoes" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info" class="contact-collapse text-secondary text-left button-solucoes"><span class="imo-text-06 mr-4"><i class="fas fa-chevron-circle-down"></i></span> Sabe aquele pagamento que você precisa cobrar? Nós fazemos isso para você!</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body class="text-cinza text-justify">
          
          <b-card-text>{{ text1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <hr class="m-0 p-0">
    <b-card no-body class="mb-1 button-solucoes">
      <b-card-header header-tag="header" class="p-1 button-solucoes" role="tab">
        <b-button block href="#" v-b-toggle.accordion-2 variant="info" class="contact-collapse text-secondary text-left button-solucoes"><span class="imo-text-06 mr-4"><i class="fas fa-chevron-circle-down"></i></span> Quanto tempo você perde verificando pagamento? Ou cobrando os atrasados...</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body class="text-cinza text-justify">
          <b-card-text>{{ text2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <hr class="m-0 p-0">
    <b-card no-body class="mb-1 button-solucoes">
      <b-card-header header-tag="header" class="p-1 button-solucoes" role="tab">
        <b-button block href="#" v-b-toggle.accordion-3 variant="info" class="contact-collapse text-secondary text-left button-solucoes"><span class="imo-text-06 mr-4"><i class="fas fa-chevron-circle-down"></i></span> Personalizado e pessoal! Pessoas atendendo pessoas</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body class="text-cinza text-justify">
          <b-card-text>{{ text3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <hr class="m-0 p-0">
    <b-card no-body class="mb-1 button-solucoes">
      <b-card-header header-tag="header" class="p-1 button-solucoes" role="tab">
        <b-button block href="#" v-b-toggle.accordion-4 variant="info" class="contact-collapse text-secondary text-left button-solucoes"><span class="imo-text-06 mr-4"><i class="fas fa-chevron-circle-down"></i></span> E se o cliente não pagar? Nós cuidamos disso para você!</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body class="text-cinza text-justify">
          <b-card-text>{{ text4 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <hr class="m-0 p-0">
    <b-card no-body class="mb-1 button-solucoes">
      <b-card-header header-tag="header" class="p-1 button-solucoes" role="tab">
        <b-button block href="#" v-b-toggle.accordion-5 variant="info" class="contact-collapse text-secondary text-left button-solucoes"><span class="imo-text-06 mr-4"><i class="fas fa-chevron-circle-down"></i></span> Profissionalismo, tecnologia e resultados! tudo isso adequado ao tamanho do seu negócio.</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body class="text-cinza text-justify">
          <b-card-text>{{ text5 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <hr class="m-0 p-0">
    <b-card no-body class="mb-1 button-solucoes">
      <b-card-header header-tag="header" class="p-1 button-solucoes" role="tab">
        <b-button block href="#" v-b-toggle.accordion-6 variant="info" class="contact-collapse text-secondary text-left button-solucoes"><span class="imo-text-06 mr-4"><i class="fas fa-chevron-circle-down"></i></span> Completo, não complexo! Você acompanha tudo de modo transparente, o trabalho é com a gente!</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body class="text-cinza text-justify">
          <b-card-text>{{ text6 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    </div>
    <router-link to="/slip" class="text-white text-content text-decoration-none effect btn btn-info btn-radius pl-3 pr-3">Veja mais <i class="fas fa-angle-right"></i></router-link>              
			</div>

			</div>
		</div>
	</section>

</template>
<script>
export default {
    data() {
      return {
        text1: `
           Fazemos a gestão de todos os seus recebimentos, desde pagamentos únicos e valores parcelados, até cobranças mensais recorrentes! Tudo de modo transparente, profissional e pessoal. Economize seu tempo, recursos e evite dores de cabeça.        `,
        text2: `
		 Chega de parar para verificar se pagamentos foram efetuados, ou entrar em contato pessoalmente com seu cliente para cobrar um valor em aberto. Nosso serviço de cobrança vai desde de emissão e envio de boletos, lembretes de pagamento até cobranças, atualização de valores e negociação. Esse profissionalismo gera ótimos resultados com baixíssima inadimplência, bem como preserva sua relação com seu cliente!
		         `,
        text3: `
		  Nós utilizamos de tecnologia para facilitar ao máximo todos os processos e a transparência para com nossos clientes, mas sabemos muito bem que um atendimento próximo e pessoal gera resultados melhores, e por isso cuidamos dos seus clientes como cuidamos de nós mesmos: com atenção e cuidado pessoal.
		          `,
         text4: 
		 `Boletos enviados, notificações feitas, atualização dos valores em aberto, contato para negociação. Nosso atendimento especializado e pessoal trás excelentes retornos já nessas etapas, mas caso seja necessário temos parceiros na área jurídica a postos para acionar judicialmente cobranças e execuções. Cuidamos de você em todas as etapas!
		 `,
         text5: 
         ` 
		Não importa o tamanho do seu negócio, temos uma solução adequada para seus recebimentos e cobranças serem conduzido de modo profissional e eficaz! Estamos aqui para sermos seu parceiro, seu setor de recebimento e cobrança terceirizado, e ganharmos sempre juntos!
		        `,
        text6: 
         ` 
		 Através de nossos sistemas e canais de atendimento você pode acompanhar claramente como estão todos os seus recebimentos e cobranças. Mas cuidar para que tudo funcione do modo mais eficaz e eficiente é nosso trabalho, você e sua empresa não terão mais com o que se preocupar!
		         `,
         
      }
    }
  }

</script>

<style>
	.button-solucoes{
	background-color: rgba(0,0,0,0.0) !important;
	border: none !important;
	}
	.card-imo{
	background-color: rgba(10,23,55,0.3) !important;
	border: none !important;

  }
  .bg-solucoes{
        background-image: url("~assets/image/bgmidia.jpg")!important ; 
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
	.solucoes2{
		background-image: url("~assets/image/bgsolucoes2.png") !important;
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
	
    .solucoes-text{
    	font-size: 14px !important;
    }
	
  	.round1{
    	-webkit-animation:r1 15s linear infinite;
    	animation:r1 15s linear infinite;
    	position: relative;
	}
	@keyframes r1
	{
		0%{transform: rotate(360deg)};
		10%{transform: rotate(0deg)};

	}
 	
</style>
