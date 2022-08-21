function Seer(dataObj) {
    let signals = {}

    observeData(dataObj)

    return {
        data: dataObj,
        observe,
        notify
    }

    function observe(property, signalHandler) {
        if (!signals[property]) signals[property] = []

        signals[property].push(signalHandler)
    }

    function notify(signal) {
        if (!signals[signal] || signals[signal].length < 1) return

        signals[signal].forEach((signalHandler) => signalHandler())
    }

    function makeReactive(obj, key, val) {
        Object.defineProperty(obj, key, {
            get() {
                return val
            },
            set(newVal) {
                val = newVal
                notify(key)
            }
        })
    }

    function observeData(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                makeReactive(obj, key, obj[key])
            }
        }
        // We can safely parse the DOM looking for bindings after we converted the dataObject.
        parseDOM(document.body, obj)
    }

    function syncNode(node, dataObj, property) {
        node.textContent = dataObj[property]
        // We remove the `Seer.` as it is now available for us in our scope.
        observe(property, () => node.textContent = dataObj[property])
    }

    function parseDOM(node, dataObj) {
        if (node.children.length > 0) {
            for (let childNode of node.children) {
                parseDOM(childNode, dataObj)
            }
        } else {
            if (node.attributes.hasOwnProperty('s-text')) {
                syncNode(node, dataObj, node.attributes['s-text'].value)
            }
            return
        }
    }
}

const App = Seer({
    title: 'Game of Thrones',
    firstName: 'Jon',
    lastName: 'Snow',
    age: 25
})

function updateText(property, e) {
    App.data[property] = e.target.value
}

function resetTitle() {
    App.data.title = "Game of Thrones"
}