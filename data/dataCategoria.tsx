import { Tipo_categoria } from "../types/tipo_categoria";
import { Tipo_produto } from "../types/tipo_produto";


type Tipo_categoriaProduto = {
    categorias: Tipo_categoria[],
    produtos: Tipo_produto[]
};

export const data_categoriaProduto: Tipo_categoriaProduto = {
    categorias: [
        {
            id: 1,
            tituloCategoria: 'Sapatênis',
            imagemCategoria: 'https://img.freepik.com/fotos-gratis/modelo-preto-agressivo-e-sombrio-em-jeans-cinza-rasgado-e-camiseta-preta-lisa-agachada-em-uma-parede-branca_346278-1021.jpg?ga=GA1.1.297379257.1728082214&semt=ais_hybrid'
        },
        {
            id: 2,
            tituloCategoria: 'Tênis Masculino',
            imagemCategoria: 'https://img.freepik.com/fotos-premium/um-homem-de-camisa-branca-beija-um-tenis-branco_14117-814126.jpg?ga=GA1.1.297379257.1728082214&semt=ais_hybrid'
        },
        {
            id: 3,
            tituloCategoria: 'Sandálias',
            imagemCategoria: 'https://img.freepik.com/fotos-gratis/mulher-atraente-vestida-de-vestido-branco-chapeu-vermelho-oculos-escuros-sentada-no-teatro-ao-ar-livre-de-verao-na-cadeira-sozinha-tendencia-da-moda-de-estilo-de-rua-de-primavera_285396-4519.jpg?ga=GA1.1.297379257.1728082214&semt=ais_hybrid'
        },
        {
            id: 4,
            tituloCategoria: 'Tênis Feminino',
            imagemCategoria: 'https://img.freepik.com/fotos-premium/uma-jovem-mulher-segurando-um-novo-par-de-sapatos-de-corrida_1218867-392235.jpg?ga=GA1.1.297379257.1728082214&semt=ais_hybrid'
        },
        {
            id: 5,
            tituloCategoria: 'Infantil Masculino',
            imagemCategoria: 'https://img.freepik.com/fotos-gratis/o-retrato-do-menino-bonito-da-crianca-na-roupa-a-moda-das-calcas-de-brim-que-olha-a-camera-contra-a-parede-branca-do-estudio_155003-13445.jpg?ga=GA1.1.297379257.1728082214&semt=ais_hybrid'
        },
        {
            id: 6,
            tituloCategoria: 'Infantil Feminino',
            imagemCategoria: 'https://img.freepik.com/fotos-gratis/garotinha_1157-7092.jpg?ga=GA1.1.297379257.1728082214&semt=ais_hybrid'
        },
    ],
    produtos: [
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-pegada-110702-82260.html?dwvar_82260_color=82260015*/

            id: 1,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwd2253e3e/images/large/82260015_02.jpg',
            nomeProduto: 'Casual Pegada',
            categoriaProduto: 'Sapatênis',
            precoProduto: 329.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-street-pegada-110602-80725.html?dwvar_80725_color=80725013*/

            id: 2,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw36b077e0/images/large/80725013_02.jpg',
            nomeProduto: 'Casual Street Pegada',
            categoriaProduto: 'Sapatênis',
            precoProduto: 259.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-vyper-ferracini-80580.html?dwvar_80580_color=80580012*/

            id: 3,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw3bbe4205/images/large/80580012_02.jpg',
            nomeProduto: 'Casual Vyper Ferracini',
            categoriaProduto: 'Sapatênis',
            precoProduto: 369.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-supra-ferracini-80562.html?dwvar_80562_color=80562016*/

            id: 4,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw120d20db/images/large/80562016_02.jpg',
            nomeProduto: 'Casual Supra Ferracini',
            categoriaProduto: 'Sapatênis',
            precoProduto: 359.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-vyper-ferracini-80579.html?dwvar_80579_color=80579016*/

            id: 5,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw5256df38/images/large/80579016_02.jpg',
            nomeProduto: 'Casual Vype Ferracini',
            categoriaProduto: 'Sapatênis',
            precoProduto: 379.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-slip-on-di-santinni-81584.html?dwvar_81584_color=81584033*/

            id: 6,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw14700938/images/large/81584033_02.jpg',
            nomeProduto: 'Casual Slip On Di Santinni',
            categoriaProduto: 'Sapatênis',
            precoProduto: 149.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-west-coast-82929.html?dwvar_82929_color=82929011*/

            id: 7,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw70df3ce3/images/large/82929011_02.jpg',
            nomeProduto: 'Casual West Coast',
            categoriaProduto: 'Sapatênis',
            precoProduto: 119.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-dave-democrata-80758.html?dwvar_80758_color=80758020*/

            id: 8,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw43dce191/images/large/80758011_02.jpg',
            nomeProduto: 'Casual Dave Democrata',
            categoriaProduto: 'Sapatênis',
            precoProduto: 299.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-di-santinni-84530.html?dwvar_84530_color=84530024*/

            id: 9,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw32815ece/images/large/84530024_02.jpg',
            nomeProduto: 'Casual Di Santinni',
            categoriaProduto: 'Sapatênis',
            precoProduto: 159.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-rave-democrata-80765.html?dwvar_80765_color=80765020*/

            id: 10,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw780ce78f/images/large/80765020_02.jpg',
            nomeProduto: 'Casual Rave Democrata',
            categoriaProduto: 'Sapatênis',
            precoProduto: 269.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-slip-on-iate-di-santinni-84533.html?dwvar_84533_color=84533012*/
        
            id: 11,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw397c1868/images/large/84533030_02.jpg',
            nomeProduto: 'Casual Slip On Iate Di Santinni',
            categoriaProduto: 'Sapatênis',
            precoProduto: 149.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-pulse-ferracini-76829.html?dwvar_76829_color=76829020*/
        
            id: 12,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw26d3f7ec/images/large/76829020_02.jpg',
            nomeProduto: 'Casual Pulse Ferracini',
            categoriaProduto: 'Sapatênis',
            precoProduto: 319.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-vulcano-ollie-85085.html?dwvar_85085_color=85085017*/
        
            id: 13,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw4817b2e3/images/large/85085017_02.jpg',
            nomeProduto: 'Casual Vulcano Ollie',
            categoriaProduto: 'Sapatênis',
            precoProduto: 129.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-sliip-on-mule-di-santinni-84532.html?dwvar_84532_color=84532013*/
        
            id: 14,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw9aeeaa2f/images/large/84532022_02.jpg',
            nomeProduto: 'Casual Slip On Mule Di Santinni',
            categoriaProduto: 'Sapatênis',
            precoProduto: 149.99
        },
        {
        /*https://www.disantinni.com.br/masculino/sapatenis/sapatenis-grow-hi-soft-democrata-80759.html?dwvar_80759_color=80759010*/
        
            id: 15,
            idCategoria: 1,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw0349276e/images/large/80759029_02.jpg',
            nomeProduto: 'Casual Grow Hi Soft Democrata',
            categoriaProduto: 'Sapatênis',
            precoProduto: 279.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-under-armour-ch.great-6001196-85798.html?dwvar_85798_color=85798014*/
            id: 16,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwc4ecc60b/images/large/85798014_02.jpg',
            nomeProduto: 'Under Armour CH.Great',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 299.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-redikal-rkt520-85690.html?dwvar_85690_color=85690013*/
            id: 17,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw564b4fcd/images/large/85690013_02.jpg',
            nomeProduto: 'REDIKAL',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 179.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-under-armour-ch.great-6001196-85798.html?dwvar_85798_color=85798023*/
            id: 18,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw3242c7f2/images/large/85798023_02.jpg',
            nomeProduto: 'Under Armour CH.Great',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 299.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-running-adrun-9717-85518.html?dwvar_85518_color=85518029*/
            id: 19,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw2670bbe6/images/large/85518029_02.jpg',
            nomeProduto: 'Running Adrun',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 159.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-olympikus-corre-trilha-2-43485332-85456.html?dwvar_85456_color=85456011*/
            id: 20,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw0991fc7c/images/large/85456011_02.jpg',
            nomeProduto: 'Olympikus Corre Trilha',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 599.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-redikal-rkt489-85688.html?dwvar_85688_color=85688018*/
            id: 21,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw4d468616/images/large/85688018_02.jpg',
            nomeProduto: 'Redikal',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 179.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-fila-float-flux-f01r00127-85371.html?dwvar_85371_color=85371020*/
            id: 22,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw42efba55/images/large/85371020_02.jpg',
            nomeProduto: 'Fila Float Flux',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 499.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-olympikus-mescla-43534344-85451.html?dwvar_85451_color=85451025*/
            id: 23,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw1ad76fd1/images/large/85451025_02.jpg',
            nomeProduto: 'Olympikus Mescla',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 229.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-casual-red-nose-rnnm843-84260.html?dwvar_84260_color=84260019*/
            id: 24,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw6fe64a50/images/large/84260019_02.jpg',
            nomeProduto: 'Casual Red Nose',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 199.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-asics-hyper-speed-2-1011b495-80510.html?dwvar_80510_color=80510013*/
            id: 25,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw8695c9ad/images/large/80510013_02.jpg',
            nomeProduto: 'Asics Hyper Speed 2',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 699.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-olympikus-volcan-2-43538342-84826.html?dwvar_84826_color=84826028*/
            id: 26,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw524cd258/images/large/84826019_02.jpg',
            nomeProduto: 'Olympikus Volcan 2',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 199.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-running-adrun-9816-85514.html?dwvar_85514_color=85514023*/
            id: 27,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw4af46dca/images/large/85514023_02.jpg',
            nomeProduto: 'Running Adrun',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 149.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-asics-gel-kayano-29-1011b440-78599.html?dwvar_78599_color=78599026*/
            id: 28,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwe71a1d3c/images/large/78599026_02.jpg',
            nomeProduto: 'Asics Gel Kayano',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 1199.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-nike-flex-experience-rn-12-m-dv0740-85113.html?dwvar_85113_color=85113019*/
            id: 29,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw4d3b8967/images/large/85113019_02.jpg',
            nomeProduto: 'Nike Flex Experience Rn',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 349.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-veloce-v315-85413.html?dwvar_85413_color=85413016*/
            id: 30,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwab08cf42/images/large/85413025_02.jpg',
            nomeProduto: 'Veloce',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 159.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-grendha-odara-85186.html?dwvar_85186_color=85186024*/

            id: 31,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw82d5c39e/images/large/85186024_02.jpg',
            nomeProduto: 'Grendha Odara',
            categoriaProduto: 'Sandálias',
            precoProduto: 59.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-zaxy-join-85187.html?dwvar_85187_color=85187014*/

            id: 32,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwf67970a0/images/large/85187014_02.jpg',
            nomeProduto: 'Zaxy Join',
            categoriaProduto: 'Sandálias',
            precoProduto: 129.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-grendha-hera-85183.html?dwvar_85183_color=85183018*/

            id: 33,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwc0e3e3d6/images/large/85183018_02.jpg',
            nomeProduto: 'Grendha Hera',
            categoriaProduto: 'Sandálias',
            precoProduto: 59.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-salto-fino-lurex-di-santinni-85854.html?dwvar_85854_color=85854037*/

            id: 34,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw06652030/images/large/85854037_02.jpg',
            nomeProduto: 'Lurex Di Santinni',
            categoriaProduto: 'Sandálias',
            precoProduto: 119.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-baixa-vira-pesponto-di-santinni-85388.html?dwvar_85388_color=85388011*/

            id: 35,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwba7c6b4d/images/large/85388011_02.jpg',
            nomeProduto: 'Pesponto Di Santinni',
            categoriaProduto: 'Sandálias',
            precoProduto: 89.99
        },
        {
        /*https://www.zariff.com.br/sandalia-dakota-feminina-salto-bloco-y7891-preto*/

            id: 36,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/1/1184385_sandalia-dakota-de-salto-bloco-preta-y7891-00005_z9_638593362115606361.jpg',
            nomeProduto: 'Dakota Salto Grosso',
            categoriaProduto: 'Sandálias',
            precoProduto: 189.90
        },
        {
        /*https://www.zariff.com.br/sandalia-feminina-ramarim-24-48206-bronze*/

            id: 37,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4300_4.jpg',
            nomeProduto: 'Ramarim',
            categoriaProduto: 'Sandálias',
            precoProduto: 199.90
        },
        {
        /*https://www.zariff.com.br/sandalia-feminina-salto-fino-schutz-s013870268-amendoa*/

            id: 38,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/6/b/6bba32f1-d46c-4d5d-a6d4-8af015076570.jpg',
            nomeProduto: 'Schutz',
            categoriaProduto: 'Sandálias',
            precoProduto: 489.90
        },
        {
        /*https://www.zariff.com.br/sandalia-femininadakota-y7731-preto-verniz*/

            id: 39,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/1/1185957_sandalia-dakota-de-salto-bloco-preta-y7731-00001_z7_638584605692957417.jpg',
            nomeProduto: 'Dakota Verniz',
            categoriaProduto: 'Sandálias',
            precoProduto: 169.90
        },
        {
        /*https://www.zariff.com.br/sandalia-rasteira-via-marte-feminina-112-009-gold*/

            id: 40,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4400_1.jpg',
            nomeProduto: 'Via Marte',
            categoriaProduto: 'Sandálias',
            precoProduto: 149.90
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-baixa-strass-regulador-di-santinni-85633.html?dwvar_85633_color=85633027*/

            id: 41,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw24b2d996/images/large/85633027_02.jpg',
            nomeProduto: 'Strass',
            categoriaProduto: 'Sandálias',
            precoProduto: 59.90
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-flatform-strass-regulador-85436.html?dwvar_85436_color=85436017*/

            id: 42,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwa7222af5/images/large/85436017_02.jpg',
            nomeProduto: 'Flatform Strass',
            categoriaProduto: 'Sandálias',
            precoProduto: 89.90
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-estaca-pata-aberto-di-santinni-85151.html?dwvar_85151_color=85151019*/

            id: 43,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw7028cdfb/images/large/85151019_02.jpg',
            nomeProduto: 'Staca Pata',
            categoriaProduto: 'Sandálias',
            precoProduto: 139.90
        },
        {
        /*https://www.zariff.com.br/sandalia-feminina-dumond-4118924-preto*/

            id: 44,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/9/4969781c-f2d1-4953-9326-b8e3b9b807e3.jpg',
            nomeProduto: 'Dumond',
            categoriaProduto: 'Sandálias',
            precoProduto: 219.90
        },
        {
        /*https://www.zariff.com.br/sandalia-feminina-zariff-6216844-dourado*/

            id: 45,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a3716_3.jpg',
            nomeProduto: 'Zariff',
            categoriaProduto: 'Sandálias',
            precoProduto: 219.90
        },    
        {
        /*https://www.zariff.com.br/tn-new-balance-520v8-preto-lilas*/

            id: 46,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/5/159800-1200-1200.jpg',
            nomeProduto: 'New Balance',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.99
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-ramarim-2473221-preto*/

            id: 47,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4362.jpg',
            nomeProduto: 'Ramarim',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 269.99
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-olympikus-intuit-preto-preto*/

            id: 48,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/2/8/289139-1300-1300.jpg',
            nomeProduto: 'Olympikus Intuit',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 239.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-skechers-896248-preto*/

            id: 49,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/8/182687_tenis-skechers-896248145647_z4_638328719767920012.jpg',
            nomeProduto: 'Skechers',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 299.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-new-balance-680v8-preto-rosa*/

            id: 50,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/7/172445-1200-1200.jpg',
            nomeProduto: 'New Balance',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 599.90
        },
        {
        /*https://www.zariff.com.br/tenis-fila-feminino-esportivo-master-preto*/

            id: 51,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a0793_2.jpg',
            nomeProduto: 'Fila Esportivo Master',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-adidas-esportivo-ie8473-branco*/

            id: 52,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a0247_1.jpg',
            nomeProduto: 'Adidas Esportivo',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.90
        },
        {
        /*https://www.zariff.com.br/tenis-unissex-hoka-cielo-x1-azul*/

            id: 53,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/5/157143-1200-auto.jpeg',
            nomeProduto: 'Hoka Cielo X1',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 2499.90
        },
        {
        /*https://www.zariff.com.br/tenis-unissex-hoka-cielo-x1-azul*/

            id: 54,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a8812_2.jpg',
            nomeProduto: 'Go Run Fast Valor Skechers',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 379.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-olympikus-adrena-bordo*/

            id: 55,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/2/8/282640-1300-1300.jpg',
            nomeProduto: 'Olympikus Eleva Adrena Bordô',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 299.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-fila-float-maxxi-2-laranja*/

            id: 56,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/f/0/f02r00125_6200_3_.jpg',
            nomeProduto: 'Fila FLoat Maxxi 2',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 299.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-new-balance-fresh-foam-1080v13-lilas*/

            id: 57,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/6/165876-800-800.jpg',
            nomeProduto: 'New Balance Fresh Foam',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 1199.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-at-flow-running-ramarim-2473101-branco-verde-neon*/

            id: 58,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4902_4.jpg',
            nomeProduto: 'Ramarim At. Flow Running',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 299.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-skechers-esportivo-129426-preto-branco*/

            id: 59,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/e/4e4e3186-2e31-4e0e-bfd4-8ca41ce6c02f.jpg',
            nomeProduto: 'Skechers',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.90
        },
        {
        /*https://www.disantinni.com.br/menino/sapatenis/sapatenis-casual-infantil-sound-kids-81563.html?dwvar_81563_color=81563012*/
        
            id: 60,
            idCategoria: 5,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw963783dc/images/large/81563012_02.jpg',
            nomeProduto: 'Casual Sound Kids',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 49.99
        },
        {
        /*https://www.zariff.com.br/sapatenis-infantil-menino-zariff-preto*/
        
            id: 61,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a7526.jpg',
            nomeProduto: 'Casual',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 113.99
        },
        {
        /*https://www.zariff.com.br/sapatenis-infantil-menino-zariff-l131i-preto*/
        
            id: 62,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a7542.jpg',
            nomeProduto: 'Casual ZariffBoy',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 113.99
        },
        {
        /*https://www.zariff.com.br/sapatenis-infantil-menino-ortope-dna-marrom*/
        
            id: 63,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/s/e/sem_t_tulo-34_14_3.jpg',
            nomeProduto: 'Casual Ortopé Dna',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 94.43
        },
        {
        /*https://www.zariff.com.br/sapatenis-infantil-ortope-casual-22620016-preto*/
        
            id: 64,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4960.jpg',
            nomeProduto: 'Casual Ortopé',
            categoriaProduto: 'Infantil Masculinoo',
            precoProduto: 47.97
        },
        {
        /*https://www.zariff.com.br/sapatinho-bebe-mini-walk-klin-descobertas-453-066-preto*/
        
            id: 65,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/s/a/sapatinho-klin-453-066.jpg',
            nomeProduto: 'Mini Walk Klin',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 54.95
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-menino-bibi-1155278-marinho*/
        
            id: 66,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4214_4.jpg',
            nomeProduto: 'Bibi',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 179.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-all-star-converse-chuck-taylor-ck0418-branco*/
        
            id: 67,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/c/k/ck04180001_d_08x1_3.jpg',
            nomeProduto: 'All Star Converse Chuck Taylor',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 209.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-ortope-246000340230-preto-amarelo*/
        
            id: 68,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a0111_1.jpg',
            nomeProduto: 'Slip On Led',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 239.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-ortope-casual-247000250001-preto*/
        
            id: 69,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a8966_2.jpg',
            nomeProduto: 'Casual Ortopé',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 179.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-olympikus-stream-preto*/
        
            id: 70,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/3/43772253_4-030-02.jpg',
            nomeProduto: 'Olympikus Stream',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 199.90
        },
        {
        /*https://www.zariff.com.br/tenis-converse-all-star-infantil-chuck-taylor-ck1164-marinho*/
        
            id: 71,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a1730_3.jpg',
            nomeProduto: 'Converse All Star Chuck Taylor',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 219.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-menino-bibi-roller-11550-azul-amarelo*/
        
            id: 72,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/1/1155014_03.jpg',
            nomeProduto: 'Bibi Roller',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 179.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-new-balance-520-preto*/
        
            id: 73,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a3589_2.jpg',
            nomeProduto: 'New Balance',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 279.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-all-star-converse-ck1121-preto*/
        
            id: 74,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a3157.jpg',
            nomeProduto: 'Converse All Star',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 149.90
        },
        {
        /*https://www.zariff.com.br/tenis-infantil-menino-bibi-new-way-11920-marinho-caramelo*/
        
            id: 75,
            idCategoria: 5,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/1/1192074_02.jpg',
            nomeProduto: 'Bibi New Way',
            categoriaProduto: 'Infantil Masculino',
            precoProduto: 189.90
        },
    ]
}
