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
            imagemCategoria: 'a'
        },
        {
            id: 2,
            tituloCategoria: 'Tênis Masculino',
            imagemCategoria: 'a'
        },
        {
            id: 3,
            tituloCategoria: 'Sandálias',
            imagemCategoria: 'a'
        },
        {
            id: 4,
            tituloCategoria: 'Tênis Feminino',
            imagemCategoria: 'a'
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
        /*https://www.disantinni.com.br/masculino/tenis/tenis-under-armour-ch.great-6001196-85798.html?dwvar_85798_color=85798014*/

            id: 11,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwc4ecc60b/images/large/85798014_02.jpg',
            nomeProduto: 'Under Armour CH.Great',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 299.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-redikal-rkt520-85690.html?dwvar_85690_color=85690013*/

            id: 12,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw564b4fcd/images/large/85690013_02.jpg',
            nomeProduto: 'REDIKAL',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 179.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-under-armour-ch.great-6001196-85798.html?dwvar_85798_color=85798023*/

            id: 13,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw3242c7f2/images/large/85798023_02.jpg',
            nomeProduto: 'Under Armour CH.Great',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 299.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-running-adrun-9717-85518.html?dwvar_85518_color=85518029*/

            id: 14,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw2670bbe6/images/large/85518029_02.jpg',
            nomeProduto: 'Running Adrun',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 159.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-olympikus-corre-trilha-2-43485332-85456.html?dwvar_85456_color=85456011*/

            id: 15,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw0991fc7c/images/large/85456011_02.jpg',
            nomeProduto: 'Olympikus Corre Trilha',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 599.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-redikal-rkt489-85688.html?dwvar_85688_color=85688018*/

            id: 16,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw4d468616/images/large/85688018_02.jpg',
            nomeProduto: 'REDIKAL',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 179.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-fila-float-flux-f01r00127-85371.html?dwvar_85371_color=85371020*/

            id: 17,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw42efba55/images/large/85371020_02.jpg',
            nomeProduto: 'Fila Float Flux',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 499.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-olympikus-mescla-43534344-85451.html?dwvar_85451_color=85451025*/

            id: 18,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw1ad76fd1/images/large/85451025_02.jpg',
            nomeProduto: 'Olympikus Mescla',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 229.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-casual-red-nose-rnnm843-84260.html?dwvar_84260_color=84260019*/

            id: 19,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw6fe64a50/images/large/84260019_02.jpg',
            nomeProduto: 'Casual Red Nose',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 199.99
        },
        {
        /*https://www.disantinni.com.br/masculino/tenis/tenis-asics-hyper-speed-2-1011b495-80510.html?dwvar_80510_color=80510013*/

            id: 20,
            idCategoria: 2,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw8695c9ad/images/large/80510013_02.jpg',
            nomeProduto: 'Asics Hyper Speed 2',
            categoriaProduto: 'Tênis Masculino',
            precoProduto: 699.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-grendha-odara-85186.html?dwvar_85186_color=85186024*/

            id: 21,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw82d5c39e/images/large/85186024_02.jpg',
            nomeProduto: 'Grendha Odara',
            categoriaProduto: 'Sandálias',
            precoProduto: 59.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-zaxy-join-85187.html?dwvar_85187_color=85187014*/

            id: 22,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwf67970a0/images/large/85187014_02.jpg',
            nomeProduto: 'Zaxy Join',
            categoriaProduto: 'Sandálias',
            precoProduto: 129.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-grendha-hera-85183.html?dwvar_85183_color=85183018*/

            id: 23,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwc0e3e3d6/images/large/85183018_02.jpg',
            nomeProduto: 'Grendha Hera',
            categoriaProduto: 'Sandálias',
            precoProduto: 59.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-salto-fino-lurex-di-santinni-85854.html?dwvar_85854_color=85854037*/

            id: 24,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dw06652030/images/large/85854037_02.jpg',
            nomeProduto: 'Lurex Di Santinni',
            categoriaProduto: 'Sandálias',
            precoProduto: 119.99
        },
        {
        /*https://www.disantinni.com.br/feminino/sandalia/sandalia-baixa-vira-pesponto-di-santinni-85388.html?dwvar_85388_color=85388011*/

            id: 25,
            idCategoria: 3,
            fotoProduto: 'https://www.disantinni.com.br/on/demandware.static/-/Sites-DiSantinni/default/dwba7c6b4d/images/large/85388011_02.jpg',
            nomeProduto: 'Pesponto Di Santinni',
            categoriaProduto: 'Sandálias',
            precoProduto: 89.99
        },
        {
        /*https://www.zariff.com.br/sandalia-dakota-feminina-salto-bloco-y7891-preto*/

            id: 26,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/1/1184385_sandalia-dakota-de-salto-bloco-preta-y7891-00005_z9_638593362115606361.jpg',
            nomeProduto: 'Dakota Salto Grosso',
            categoriaProduto: 'Sandálias',
            precoProduto: 189.90
        },
        {
        /*https://www.zariff.com.br/sandalia-feminina-ramarim-24-48206-bronze*/

            id: 27,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4300_4.jpg',
            nomeProduto: 'Ramarim',
            categoriaProduto: 'Sandálias',
            precoProduto: 199.90
        },
        {
        /*https://www.zariff.com.br/sandalia-feminina-salto-fino-schutz-s013870268-amendoa*/

            id: 28,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/6/b/6bba32f1-d46c-4d5d-a6d4-8af015076570.jpg',
            nomeProduto: 'Schutz',
            categoriaProduto: 'Sandálias',
            precoProduto: 489.90
        },
        {
        /*https://www.zariff.com.br/sandalia-femininadakota-y7731-preto-verniz*/

            id: 29,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/1/1185957_sandalia-dakota-de-salto-bloco-preta-y7731-00001_z7_638584605692957417.jpg',
            nomeProduto: 'Dakota Verniz',
            categoriaProduto: 'Sandálias',
            precoProduto: 169.90
        },
        {
        /*https://www.zariff.com.br/sandalia-rasteira-via-marte-feminina-112-009-gold*/

            id: 30,
            idCategoria: 3,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4400_1.jpg',
            nomeProduto: 'Via Marte',
            categoriaProduto: 'Sandálias',
            precoProduto: 149.90
        },
        {
        /*https://www.zariff.com.br/tn-new-balance-520v8-preto-lilas*/

            id: 31,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/5/159800-1200-1200.jpg',
            nomeProduto: 'New Balance',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.99
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-ramarim-2473221-preto*/

            id: 32,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a4362.jpg',
            nomeProduto: 'Ramarim',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 269.99
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-olympikus-intuit-preto-preto*/

            id: 33,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/2/8/289139-1300-1300.jpg',
            nomeProduto: 'Olympikus Intuit',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 239.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-skechers-896248-preto*/

            id: 34,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/8/182687_tenis-skechers-896248145647_z4_638328719767920012.jpg',
            nomeProduto: 'Skechers',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 299.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-new-balance-680v8-preto-rosa*/

            id: 35,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/7/172445-1200-1200.jpg',
            nomeProduto: 'New Balance',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 599.90
        },
        {
        /*https://www.zariff.com.br/tenis-fila-feminino-esportivo-master-preto*/

            id: 36,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a0793_2.jpg',
            nomeProduto: 'Fila Esportivo Master',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-adidas-esportivo-ie8473-branco*/

            id: 37,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a0247_1.jpg',
            nomeProduto: 'Adidas Esportivo',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 399.90
        },
        {
        /*https://www.zariff.com.br/tenis-unissex-hoka-cielo-x1-azul*/

            id: 38,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/1/5/157143-1200-auto.jpeg',
            nomeProduto: 'Hoka Cielo X1',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 2499.90
        },
        {
        /*https://www.zariff.com.br/tenis-unissex-hoka-cielo-x1-azul*/

            id: 39,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/4/b/4b9a8812_2.jpg',
            nomeProduto: 'Go Run Fast Valor Skechers',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 379.90
        },
        {
        /*https://www.zariff.com.br/tenis-feminino-olympikus-adrena-bordo*/

            id: 40,
            idCategoria: 4,
            fotoProduto: 'https://www.zariff.com.br/media/catalog/product/cache/1/image/1000x/0a294508e1c0663c95138da8b1bcfa9d/2/8/282640-1300-1300.jpg',
            nomeProduto: 'Olympikus Eleva Adrena Bordô',
            categoriaProduto: 'Tênis Feminino',
            precoProduto: 299.90
        },
            
    ]
}
