export const nodeConfig = {
    overAll: {
        start: {},
        end: {},
        link: {},
    },
    node: {
        action: {
            type: 'default',
            style: {
                background: 'rgb(250,250,250)',
                color: '#ff0072',
                border: '1px solid #ff0072',
            }
        },
        intent: {
            type: 'default',
            style: {
                background: 'rgb(250,250,250)',
                color: '#0041d0',
                border: '1px solid #0041d0',
            }
        },
        start: {
            type: 'input',
            style: {
                background: 'radial-gradient(circle, rgba(255,255,255,1) 45%, rgba(225,225,255,1) 100%)',
                color: '#0041d0',
            }
        },
        end: {
            type: 'output',
            style: {
                background: 'radial-gradient(circle, rgba(255,255,255,1) 45%, rgba(255,225,225,1) 100%)',
                color: '#ff0072',
            }
        },
        error: {
            style: {
                background: 'RGB(123,33,41)',
            },
            data: { label: 'Error! Invalid node information' },
        },
    },
    edge: {
        action:{
            type: 'smoothstep',
            label: 'Condition',
            animated: true,
            style: {
                backgroundColor: 'rgb(0,0,0)'
            }
        },
        intent:{
            type: 'smoothstep',
            label: 'Condition',
            animated: true
        },
        start:{
            type: 'smoothstep',
            label: 'Condition',
            animated: true
        },
        end:{
            type: 'smoothstep',
            label: 'Condition',
            animated: true
        },
        error:{},
    }
}

export const scenarioData = {
    "id": 11,
    "bot_id": 3,
    "name": "Scenario1",
    "root_step_id": 2,
    "steps": [
        {
            "id": 1,
            "scenario_id": 11,
            "type": 0,
            "intent_id": 3,
            "action_id": null,
            "x_coordinate": 0,
            "y_coordinate": 0,
            "next_steps": [
                {
                    "step_id": 1,
                    "next_step_id": 2,
                    "condition_flag": 0,
                    "condition": null
                }
            ]
        },
        {
            "id": 2,
            "scenario_id": 11,
            "type": 1,
            "intent_id": null,
            "action_id": 3,
            "x_coordinate": 0,
            "y_coordinate": 100,
            "next_steps": []
        }
    ]
}

export const actionData = [
    {
        "id": 1,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 2,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 3,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 4,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 5,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 6,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 7,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
    {
        "id": 8,
        "bot_id": 3,
        "name": "myaction",
        "type": 0,
        "description": "설명",
        "url": "myaction"
    },
];
export const intentData = [
    { "id": 1, "bot_id": 1, "name": "test_intent", "description": "설명" },
    { "id": 2, "bot_id": 1, "name": "test_intent", "description": "설명" },
    { "id": 3, "bot_id": 1, "name": "test_intent", "description": "설명" },
    { "id": 4, "bot_id": 1, "name": "test_intent", "description": "설명" },
    { "id": 5, "bot_id": 1, "name": "test_intent", "description": "설명" },
    { "id": 6, "bot_id": 1, "name": "test_intent", "description": "설명" },
    { "id": 7, "bot_id": 1, "name": "Hello", "description": "설명" },
];