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
    } else {
        n2.el = n1.el
        if (typeof n2.children === 'string') {
            n2.el.textContent = n2.children
        } else {
            while (n2.el.attributes.length > 0)
                n2.el.removeAttribute(n2.el.attributesp[0].name)

            for (const key in n2.props) {
                n2.el.setAttribute(key, n2.props[key])
            }

            if (typeof n1.children === 'string') {
                n2.el.textContent = null;
                n2.el.forEach((child) => {
                    mount(child, n2.el)
                })
            } else {
                const commonLength = Math.min(n1.children.length, n2.chilren.length)

                for (let i = 0; i < commonLength; i++) {
                    patch(n1.children[i], n2.children[i])
                }

                if (n1.children.length > n2.chidlren.length) {
                    n1.children.slice(n2.children.length).forEach((child) => {
                        unmount(child)
                    })
                } else if (n2.children.length > n1.chidlren.length) {
                    n2.children.slice(n1.children.length).forEach((child) => {
                        mount(child)
                    })
                }
            }
        }
    }

}

