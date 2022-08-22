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

function unmount(vnode) {
    vnode.el.parentElement.removeChild(vnode.el)
    // vnode.remove();
}