const vdomExample = {
    tag: 'div',
    props: {
        class: 'container',
    },
    children: [
        {
            tag: 'h1',
            props: {
                title: 'This is title'
            },
            children: 'Basics of JS Framework'
        },
        {
            tag: 'p',
            props: {
                class: 'description'
            },
            children: 'Here we learn, what is behind of every modern JS Framework'
        }
    ]
}

// Create a virtual node (but dont mound it)
function h(tag, props, children) {
    return {
        tag,
        props,
        children
    }
}


// Mount a virtual node of the DOM

function mount(vnode, container) {
    const el = document.createElement(vnode.tag)

    for (const key in vnode.props) {
        el.setAttribute(key, vnode.props[key])
    }

    if (typeof vnode.children === 'string') {
        el.textContent = vnode.children
    } else {
        vnode.children.forEach(child => {
            mount(child, el)
        })
    }

    container.appendChild(el);

    vnode.el = el;
}

// Unmout vnode from the DOM
function unmount(vnode) {
    vnode.el.parentElement.removeChild(vnode.el)
    // vnode.remove();
}

// takes 2 nodes, compares them and figures out the difference
function patch(n1, n2) {

    // different tags
    if (n1.tag !== n2.tag) {
        mount(n2, n1.el.parentNode)
        unmount(n1)
    }

    else {
        if (typeof n1.children === 'string') {
            n2.el = n1.el
            n2.el.textContent = n2.children
        } else {
            while(n2.el.attributes.length > 0)
            n2.el.removeAttribute(n2.el.attributesp[0].name)

            for (const key in n2.props) {
                n2.el.setAttribute(key, n2.props[key])
            }
        }

    }

}

