let activeEffect;

function watchEffect(fn) {
    activeEffect = fn;
    fn();
    activeEffect = null;
}