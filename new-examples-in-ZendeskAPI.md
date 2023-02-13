Create Ticket:

```
curl --location --request POST 'https://meliuz.zendesk.com/api/v2/tickets.json' \
--header 'Authorization: {{KeyBasicZen}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ticket": {
        "subject": "Atendimento Chat Méliuz: Solicitação #123",
        "comment": {
            "html_body": "<p><strong>Histórico ChatBot:</strong><br><a href=undefined>Clique aqui</a></p> <p><strong>Comentários:</strong>null</p><p><strong>E-mail Atendente:</strong><br>undefined</p><p><strong>Observacao:</strong><br>Migrado do ambiente de sandbox</p>Protocolos sandbox:</strong><br>undefined</p><p><strong>Data e hora da finalizacao no Desk:</strong><br>undefined</p>",
            "public": "false"
        },
        "requester": {
            "locale_id": "8",
            "name": "via chatbot",
            "email": "email@teste.com.br"
        },
        "tags": "undefined",
        "custom_fields": [{
            "id": 360000016526.0,
            "value": "00000000000"
        }, {
            "id": 360000016223.0,
            "value": "email@teste.com.br"
        }, {
            "id": 360041787391.0,
            "value": "undefined"
        }, {
            "id": 7413781888020.0,
            "value": "ChatBot"
        }, {
            "id": 360000016546.0,
            "value": "00000000000"
        }]
    }
}'
```

Tests: 

Function: Incremente Index to roam all array.

```

let item = pm.environment.get("itemOfArray");

pm.environment.set("itemOfArray", Number(item) + 1);
console.log("Number Array:" +item)

let jsonData = pm.response.json();

let stringDataResource = JSON.stringify(jsonData)

pm.test("Results:"+stringDataResource, function () {
    pm.response.to.have.status(201);
});

console.log(jsonData);

```

Pre-Script:

Replace variables with array using the test unit index.

```
const sequentialId = [ 
"12345"
];
const oldProtocol = [ 
"teste",
];
const urlTickerBlip = [ 
"https://meliuz.blip.ai/teste",
];
const emailAtendente = [ 
"teste@meliuz.com.br",

];
const contactemail = [ 
"teste@gmail.com",
];
const tags = [ 
"CBK:_Compra_Cancelada,Abertura_de_chamado,Migrado_sandbox",
];
const contactname = [ 
"teste",
];
const finalizado = [ 
"2023-01-0514:18:39",
];


let item = pm.environment.get("itemOfArray"); 
pm.environment.set("sequentialId", sequentialId[item]);
pm.environment.set("oldProtocol", oldProtocol[item]);
pm.environment.set("urlTickerBlip", urlTickerBlip[item]);
pm.environment.set("emailAtendente", emailAtendente[item]);
pm.environment.set("contactemail", contactemail[item]);
pm.environment.set("tags", tags[item]);
pm.environment.set("contactname", contactname[item]);
pm.environment.set("finalizado", finalizado[item]);


```
